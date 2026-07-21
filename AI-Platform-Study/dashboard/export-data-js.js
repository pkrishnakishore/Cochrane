const fs = require("fs");
const os = require("os");
const path = require("path");
const childProcess = require("child_process");

const OUTFILE = path.join(__dirname, "data.js");
const BACKUP_DIR = path.join(__dirname, "backups");
const BACKUP_FILE = path.join(BACKUP_DIR, "data.backup.js");

const DEFAULT_FILES = {
  RIS: false,
  PDFs: false,
  Criteria: false,
  Extraction: false,
  Protocol: false,
  "Time Log": false
};

const DEFAULT_STAGES = [
  { name: "Setup / Coordination", human: 0, ai: 0, status: "Not Started" },
  { name: "Abstract Screening", human: 0, ai: 0, status: "Not Started" },
  { name: "Full-text Screening", human: 0, ai: 0, status: "Not Started" },
  { name: "Data Extraction / Analysis", human: 0, ai: 0, status: "Not Started" }
];

const DEFAULT_TIMELINE = {
  source: "cochrane_dashboard_review_based_template.xlsx",
  phase1Window: "2026-05-01 to 2026-07-31",
  phaseCards: [
    ["pilot", "Pilot", "Mid March to Mid April", "Wrapping Up"],
    ["phase1", "Phase 1", "Mid April to End June", "Current Focus"],
    ["governance", "Interim Analysis", "End June", "Decision Gate"],
    ["phase2", "Phase 2", "Start July to End September", "Scheduled"],
    ["governance", "Report", "October", "Planned"]
  ],
  majorTimeline: [
    { phase: "Pilot", window: "Mid March to Mid April", note: "Wrapping Up" },
    { phase: "Phase 1", window: "Mid April to End June", note: "Current Focus" },
    { phase: "Interim Analysis", window: "End June", note: "Decision Gate" },
    { phase: "Phase 2", window: "Start July to End September", note: "Scheduled" },
    { phase: "Report", window: "October", note: "Planned" }
  ]
};

function die(message) {
  console.error(`Export failed: ${message}`);
  process.exit(1);
}

function warn(message) {
  console.warn(`Warning: ${message}`);
}

function findWorkbook() {
  const explicit = process.argv.find((arg) => arg.startsWith("--workbook="));
  if (explicit) return path.resolve(explicit.replace("--workbook=", ""));

  const folders = [__dirname, path.join(__dirname, "data")].filter(fs.existsSync);
  const candidates = folders.flatMap((folder) =>
    fs.readdirSync(folder)
      .filter((name) =>
        /^cochrane_dashboard.*\.xlsx$/i.test(name) &&
        !name.startsWith("~$")
      )
      .map((name) => path.join(folder, name))
  );

  if (!candidates.length) {
    return path.join(__dirname, "cochrane_dashboard_review_based_template_v5_new_reviews_pipeline.xlsx");
  }

  return candidates.sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0];
}

const WORKBOOK = findWorkbook();

function decodeXml(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&apos;/g, "'");
}

function attributes(xml) {
  const output = {};
  String(xml || "").replace(/([\w:]+)="([^"]*)"/g, (_, key, value) => {
    output[key] = decodeXml(value);
    return "";
  });
  return output;
}

function unzipWorkbook(workbookPath) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cochrane-dashboard-xlsx-"));
  const zipPath = path.join(tmp, "workbook.zip");
  fs.copyFileSync(workbookPath, zipPath);

  try {
    const safeZip = zipPath.replace(/'/g, "''");
    const safeTmp = tmp.replace(/'/g, "''");
    childProcess.execFileSync("powershell", [
      "-NoProfile",
      "-Command",
      `Expand-Archive -LiteralPath '${safeZip}' -DestinationPath '${safeTmp}' -Force`
    ], { stdio: "ignore" });
  } catch {
    try {
      childProcess.execFileSync("unzip", ["-q", "-o", zipPath, "-d", tmp], { stdio: "ignore" });
    } catch {
      throw new Error("Could not unzip workbook. Install PowerShell or unzip.");
    }
  }

  return tmp;
}

function readText(root, relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function sheetTarget(target) {
  const cleaned = String(target || "").replace(/^\//, "");
  return cleaned.startsWith("xl/") ? cleaned : `xl/${cleaned}`;
}

function readSharedStrings(root) {
  const file = path.join(root, "xl", "sharedStrings.xml");
  if (!fs.existsSync(file)) return [];

  const xml = fs.readFileSync(file, "utf8");
  return [...xml.matchAll(/<(?:\w+:)?si[\s\S]*?<\/(?:\w+:)?si>/g)].map((match) =>
    [...match[0].matchAll(/<(?:\w+:)?t[^>]*>([\s\S]*?)<\/(?:\w+:)?t>/g)]
      .map((item) => decodeXml(item[1]))
      .join("")
  );
}

function readSheetMap(root) {
  const workbookXml = readText(root, "xl/workbook.xml");
  const relsXml = readText(root, "xl/_rels/workbook.xml.rels");
  const rels = {};

  for (const match of relsXml.matchAll(/<Relationship\b([^>]*)\/>/g)) {
    const attrs = attributes(match[1]);
    rels[attrs.Id] = sheetTarget(attrs.Target);
  }

  const sheets = {};
  for (const match of workbookXml.matchAll(/<(?:\w+:)?sheet\b([^>]*)\/>/g)) {
    const attrs = attributes(match[1]);
    if (attrs.name && rels[attrs["r:id"]]) sheets[attrs.name] = rels[attrs["r:id"]];
  }

  return sheets;
}

function columnIndex(cellRef) {
  return String(cellRef || "")
    .replace(/\d/g, "")
    .split("")
    .reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0) - 1;
}

function cellValue(cellXml, sharedStrings) {
  const attrs = attributes((cellXml.match(/<(?:\w+:)?c\b([^>]*)>/) || [])[1]);
  const value = (cellXml.match(/<(?:\w+:)?v>([\s\S]*?)<\/(?:\w+:)?v>/) || [])[1];
  const inline = (cellXml.match(/<(?:\w+:)?is>([\s\S]*?)<\/(?:\w+:)?is>/) || [])[1];

  if (attrs.t === "s") return sharedStrings[Number(value)] || "";
  if (attrs.t === "inlineStr") {
    return decodeXml(
      [...String(inline || "").matchAll(/<(?:\w+:)?t[^>]*>([\s\S]*?)<\/(?:\w+:)?t>/g)]
        .map((item) => item[1])
        .join("")
    );
  }
  if (attrs.t === "b") return value === "1" ? "Yes" : "No";
  return decodeXml(value || "");
}

function readRows(root, sheetPath, sharedStrings) {
  if (!sheetPath) return [];
  const xml = readText(root, sheetPath);

  return [...xml.matchAll(/<(?:\w+:)?row\b[^>]*>([\s\S]*?)<\/(?:\w+:)?row>/g)].map((rowMatch) => {
    const row = [];
    for (const cellMatch of rowMatch[1].matchAll(/<(?:\w+:)?c\b[^>]*\/>|<(?:\w+:)?c\b[^>]*>[\s\S]*?<\/(?:\w+:)?c>/g)) {
      const attrs = attributes((cellMatch[0].match(/<(?:\w+:)?c\b([^>]*)>/) || [])[1]);
      const index = columnIndex(attrs.r);
      row[index >= 0 ? index : row.length] = cellValue(cellMatch[0], sharedStrings);
    }
    return row.map((value) => value ?? "");
  });
}

function sheetRows(sheetMap, root, sharedStrings, sheetName) {
  if (!sheetMap[sheetName]) return [];
  return readRows(root, sheetMap[sheetName], sharedStrings);
}

function normalizeHeader(value) {
  return String(value || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

function findHeaderIndex(rows, requiredHeaders) {
  const required = requiredHeaders.map(normalizeHeader);
  return rows.findIndex((row) => {
    const normalized = row.map(normalizeHeader);
    return required.every((header) => normalized.includes(header));
  });
}

function tableFromHeaderIndex(rows, headerIndex) {
  if (headerIndex < 0) return [];
  const headers = rows[headerIndex].map((header) => String(header || "").trim());

  return rows.slice(headerIndex + 1)
    .map((row) => {
      const output = {};
      headers.forEach((header, index) => {
        if (header) output[header] = row[index] ?? "";
      });
      return output;
    })
    .filter((row) => Object.values(row).some((value) => String(value ?? "").trim() !== ""));
}

function tableFromRows(rows, requiredHeaders) {
  return tableFromHeaderIndex(rows, findHeaderIndex(rows, requiredHeaders));
}

function text(value, fallback = "") {
  const output = String(value ?? "").trim();
  return output || fallback;
}

function numberValue(value, fallback = 0) {
  const parsed = Number(String(value ?? "").replace("%", ""));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function boolValue(value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  return ["yes", "true", "1", "ready", "complete", "active"].includes(normalized);
}

function isDisplayed(row) {
  const raw = row.DisplayInHTML ?? row.Display ?? "";
  const value = String(raw).trim().toLowerCase();
  if (!value) return true;
  return ["yes", "true", "1", "y"].includes(value);
}

function excelDate(value, format = "iso") {
  const raw = String(value ?? "").trim();
  if (!raw) return "";

  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    return format === "long" ? longDate(new Date(`${raw}T00:00:00Z`)) : raw;
  }

  const serial = Number(raw);
  if (Number.isFinite(serial) && serial > 20000 && serial < 80000) {
    const date = new Date(Date.UTC(1899, 11, 30) + serial * 86400000);
    return format === "long" ? longDate(date) : date.toISOString().slice(0, 10);
  }

  return raw;
}

function longDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}

function cardFromReviewSheet(rows) {
  const cardRows = tableFromRows(rows, ["Card Field", "Value"]);
  const card = {};
  for (const row of cardRows) {
    const key = text(row["Card Field"]);
    if (!key) continue;
    card[key] = text(row.Value);
  }
  return card;
}

function sectionTable(rows, requiredHeaders) {
  return tableFromRows(rows, requiredHeaders);
}

function milestoneValue(value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  if (!normalized || normalized === "blank") return "";
  if (normalized === "complete" || normalized.startsWith("complete ")) return "Complete";
  if (normalized === "active" || normalized.startsWith("active ")) return "Active";
  if (normalized === "risk" || normalized.includes("blocked") || normalized.includes("needs action")) return "Risk";
  if (normalized === "pending" || normalized.startsWith("pending ") || normalized.includes("scheduled")) return "Pending";
  return "";
}

function sortRows(rows) {
  return rows.slice().sort((a, b) => {
    const aOrder = numberValue(a.DisplayOrder ?? a.StepOrder ?? a.ActionOrder, Number.MAX_SAFE_INTEGER);
    const bOrder = numberValue(b.DisplayOrder ?? b.StepOrder ?? b.ActionOrder, Number.MAX_SAFE_INTEGER);
    if (aOrder !== bOrder) return aOrder - bOrder;

    return text(a.ReviewID || a.TaskID || a.CommunicationID || a.CriticalItemID || a.ResourceID || a.MeetingID)
      .localeCompare(text(b.ReviewID || b.TaskID || b.CommunicationID || b.CriticalItemID || b.ResourceID || b.MeetingID));
  });
}

function sheetNameForReview(review, sheetMap) {
  const explicit = text(review.ReviewSheet || review.SheetName);
  if (explicit && sheetMap[explicit]) return explicit;

  const reviewId = text(review.ReviewID);
  const shortName = text(review.ShortName);
  const candidates = Object.keys(sheetMap);

  return candidates.find((name) => name.startsWith(`${reviewId} `)) ||
    candidates.find((name) => name.toLowerCase().includes(reviewId.toLowerCase())) ||
    candidates.find((name) => shortName && name.toLowerCase().includes(shortName.toLowerCase())) ||
    "";
}

function safeReviewFromIndex(row, card) {
  const status = text(card.Status, text(row.Status, "Not Started"));
  const risk = text(card.Risk, text(row.Risk, "Medium"));
  const targetDate = excelDate(card.TargetDate || row.TargetDate) || "TBD";
  const currentStage = text(card.CurrentStage, text(row.CurrentStage, "Current milestone"));
  const tool = text(card.Tool, text(row.Tool, "TBD"));

  return {
    id: text(card.ReviewID, text(row.ReviewID)),
    title: text(card.ReviewTitle, text(row.ReviewTitle, text(row.ShortName, "Untitled review"))),
    shortName: text(card.ShortName, text(row.ShortName, "Untitled")),
    phase: text(card.Phase, text(row.Phase, "Phase 1")),
    status,
    tool,
    lead: text(card.Lead, text(row.Lead, "TBD")),
    risk,
    currentStage,
    currentUpdate: text(card.CurrentUpdate, "No current update entered."),
    nextAction: text(card.NextAction, text(row.NextAction, "Add next action.")),
    lastUpdated: excelDate(card.LastUpdated || row.LastUpdated),
    communicationSupport: text(card.CurrentUpdate, "No current update entered."),
    communicationLog: [],
    files: { ...DEFAULT_FILES },
    stages: [],
    tasks: [],
    criticalItems: [],
    history: [],
    milestones: {
      onboarding: "",
      setup: "",
      abstract: "",
      fullText: "",
      extraction: "",
      analysis: ""
    },
    workflowStatus: {},
    tracker: {
      plannedWindow: "",
      plannedGate: currentStage,
      targetDate,
      variance: text(card.Variance, "To be assessed"),
      assessment: text(card.Assessment, text(row.Assessment, status))
    },
    timelineGates: [
      { label: "Status", value: status, state: status },
      { label: "Target", value: targetDate, state: status },
      { label: "Tool", value: tool, state: status }
    ]
  };
}

function splitByPhase(reviews) {
  const phaseGroups = { pilot: [], phase1: [], phase2: [] };

  for (const review of reviews) {
    const phase = String(review.phase || "").toLowerCase().replace(/\s+/g, "");
    if (phase === "pilot") phaseGroups.pilot.push(review);
    else if (phase === "phase2") phaseGroups.phase2.push(review);
    else phaseGroups.phase1.push(review);
  }

  return phaseGroups;
}

function backupDataFile() {
  if (!fs.existsSync(OUTFILE)) return;
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
  fs.copyFileSync(OUTFILE, BACKUP_FILE);
  console.log(`Backed up existing data.js to ${path.relative(__dirname, BACKUP_FILE)}.`);
}

function addDefaultStages(review) {
  if (!review.stages.length) review.stages = DEFAULT_STAGES.map((stage) => ({ ...stage }));
}

function buildReviewBasedDashboard(sheetMap, root, sharedStrings) {
  const counts = {
    reviews: 0,
    workflowStatus: 0,
    tasks: 0,
    communications: 0,
    fileReadiness: 0,
    criticalItems: 0,
    reviewCriticalItems: 0,
    resources: 0,
    meetings: 0,
    stages: 0,
    newReviews: 0
  };

  const indexRows = tableFromRows(
    sheetRows(sheetMap, root, sharedStrings, "Review_Index"),
    ["ReviewID", "ShortName", "ReviewTitle", "Phase"]
  ).filter(isDisplayed);

  const reviews = [];
  const mainTodos = [];
  const criticalItems = [];

  for (const indexRow of sortRows(indexRows)) {
    const sheetName = sheetNameForReview(indexRow, sheetMap);
    if (!sheetName) {
      warn(`No review sheet found for ${text(indexRow.ReviewID, text(indexRow.ShortName, "unknown review"))}.`);
      continue;
    }

    const rows = sheetRows(sheetMap, root, sharedStrings, sheetName);
    const card = cardFromReviewSheet(rows);
    const review = safeReviewFromIndex(indexRow, card);

    if (!review.id) {
      warn(`Skipping review sheet "${sheetName}" because ReviewID is missing.`);
      continue;
    }

    const milestones = sectionTable(rows, ["Milestone", "Status"]);
    for (const row of milestones.filter(isDisplayed)) {
      const key = text(row.Milestone);
      if (key && Object.prototype.hasOwnProperty.call(review.milestones, key)) {
        review.milestones[key] = milestoneValue(row.Status);
      }
    }

    const files = sectionTable(rows, ["FileType", "Ready", "Status"]);
    const allowedFileTypes = new Set(["RIS", "PDFs", "Criteria", "Extraction", "Protocol", "Time Log"]);
    for (const row of files.filter(isDisplayed)) {
      const fileType = text(row.FileType);
      if (!allowedFileTypes.has(fileType)) continue;
      review.files[fileType] = boolValue(row.Ready || row.Status);
      counts.fileReadiness += 1;
    }

    const stages = sectionTable(rows, ["StageName", "HumanProgress", "AIProgress", "Status"]);
    for (const row of stages.filter(isDisplayed)) {
      review.stages.push({
        name: text(row.StageName, "Stage"),
        human: numberValue(row.HumanProgress),
        ai: numberValue(row.AIProgress),
        status: text(row.Status, "Not Started")
      });
      counts.stages += 1;
    }

    const workflowRows = sectionTable(rows, ["ActionOrder", "WorkflowStepID", "Status"]);
    for (const row of workflowRows.filter(isDisplayed)) {
      const stepId = text(row.WorkflowStepID);
      if (!stepId) continue;
      review.workflowStatus[stepId] = text(row.Status, "Not Started");
      counts.workflowStatus += 1;
    }

    if (Object.keys(review.workflowStatus).length && Object.keys(review.workflowStatus).length < 63) {
      warn(`${review.id} has ${Object.keys(review.workflowStatus).length} workflow rows. Expected 63.`);
    }

    const taskRows = sectionTable(rows, ["TaskID", "Task", "Owner", "Status"]);
    const ignoredTaskLabels = new Set(["", "task", "taskid", "severity", "low", "medium", "high", "display", "owner", "status"]);
    for (const row of taskRows.filter(isDisplayed)) {
      const taskName = text(row.Task);
      const taskId = text(row.TaskID).toLowerCase();
      const owner = text(row.Owner);
      if (!taskName || ignoredTaskLabels.has(taskName.toLowerCase()) || /^untitled task$/i.test(taskName)) continue;
      if (["severity", "low", "medium", "high"].includes(taskId)) continue;
      if (!owner || owner.toLowerCase() === "owner") continue;
      const task = {
        id: text(row.TaskID),
        task: taskName,
        owner: owner,
        status: text(row.Status, "Pending"),
        risk: text(row.Risk, ""),
        due: excelDate(row.DueDate) || "TBD",
        dependency: text(row.Dependency, "None"),
        communication: text(row.Communication, "Check latest communication."),
        source: text(row.Source, ""),
        sourceDate: excelDate(row.SourceDate)
      };
      review.tasks.push(task);
      mainTodos.push({ ...task, linkedReviewId: review.id });
      counts.tasks += 1;
    }

    const communicationRows = sectionTable(rows, ["CommunicationID", "Date", "Summary"]);
    for (const row of communicationRows.filter(isDisplayed)) {
      const linkedTaskId = text(row.LinkedTaskID);
      const linkedTask = linkedTaskId ? review.tasks.find((task) => task.id === linkedTaskId) : null;

      review.communicationLog.push({
        id: text(row.CommunicationID),
        date: excelDate(row.Date) || "Recent",
        subject: text(row.Subject || row.ConversationName, "Mail follow-up"),
        people: text(row.People || row.FromPerson, review.lead),
        resp: text(row.Responsible || row.ResponsiblePerson, linkedTask?.owner || review.lead),
        due: excelDate(row.DueDate) || linkedTask?.due || "TBD",
        status: text(row.Status, linkedTask?.status || "Pending"),
        summary: text(row.Summary, "Follow-up conversation pending."),
        linkedTaskId,
        linkedAction: linkedTask?.task || text(row.LinkedAction || row.Summary),
        sourceType: text(row.SourceType),
        sourceLink: text(row.SourceLink)
      });
      counts.communications += 1;
    }

    const criticalRows = sectionTable(rows, ["CriticalItem", "Severity", "Status"]);
    for (const row of criticalRows.filter(isDisplayed)) {
      const itemTitle = text(row.CriticalItem);
      if (!itemTitle) continue;

      const item = {
        id: `critical-${review.id}-${criticalItems.length + 1}`,
        phase: review.phase,
        item: itemTitle,
        description: text(row.Notes),
        severity: text(row.Severity, "Medium"),
        status: text(row.Status, "Open"),
        owner: text(row.Owner, "TBD"),
        due: excelDate(row.DueDate) || "Monitor",
        linkedReviewId: review.id,
        mitigation: text(row.Notes),
        impact: "",
        source: "Review sheet",
        sourceDate: excelDate(card.LastUpdated)
      };

      criticalItems.push(item);
      review.criticalItems.push(item.item);
      mainTodos.push({
        task: item.item,
        owner: item.owner,
        status: item.status || item.severity,
        due: item.due,
        dependency: "Monitor risk",
        linkedReviewId: review.id,
        communication: item.description
      });

      counts.criticalItems += 1;
      counts.reviewCriticalItems += 1;
    }

    addDefaultStages(review);
    reviews.push(review);
    counts.reviews += 1;
  }

  const globalRows = sheetRows(sheetMap, root, sharedStrings, "Global_Dashboard");

  const allowedTimelineKeys = new Set(["pilot", "phase1", "governance", "phase2"]);
  const timelineRows = tableFromRows(
    globalRows,
    ["PhaseKey", "PhaseLabel", "Window", "Note", "Display"]
  )
    .filter(isDisplayed)
    .filter((row) => allowedTimelineKeys.has(text(row.PhaseKey).toLowerCase()) && text(row.PhaseLabel));

  const timelineReference = timelineRows.length ? {
    source: path.basename(WORKBOOK),
    phase1Window: "2026-05-01 to 2026-07-31",
    phaseCards: timelineRows.map((row) => [
      text(row.PhaseKey),
      text(row.PhaseLabel),
      text(row.Window),
      text(row.Note)
    ]),
    majorTimeline: timelineRows.map((row) => ({
      phase: text(row.PhaseLabel),
      window: text(row.Window),
      note: text(row.Note)
    }))
  } : DEFAULT_TIMELINE;

  const resourceSheetRows = sheetRows(sheetMap, root, sharedStrings, "Resources");
  const resourceRows = resourceSheetRows.length
    ? tableFromRows(resourceSheetRows, ["ResourceID", "ResourceName", "ResourceType", "URL", "DisplayInHTML"])
    : tableFromRows(globalRows, ["ResourceID", "Name", "Type", "URL", "Display"]);

  const resources = resourceRows.filter(isDisplayed).map((row) => {
    counts.resources += 1;
    const description = text(row.Description || row.Notes, "Add description");
    return {
      id: text(row.ResourceID),
      title: text(row.ResourceName || row.Name, "Untitled resource"),
      type: text(row.ResourceType || row.Type, "Link"),
      purpose: description,
      description,
      audience: text(row.Audience, "Project team"),
      owner: text(row.Owner, "TBD"),
      status: text(row.Status, "Active"),
      linkedReviewId: text(row.LinkedReviewID),
      linkedPhase: text(row.LinkedPhase),
      url: text(row.URL, "#")
    };
  });

  const meetingSheetRows = sheetRows(sheetMap, root, sharedStrings, "Upcoming_Meetings");
  const meetingRows = tableFromRows(
    meetingSheetRows.length ? meetingSheetRows : globalRows,
    ["MeetingID", "Date", "Title", "Status", "Display"]
  );

  const upcomingMeetings = meetingRows.filter(isDisplayed).map((row) => {
    counts.meetings += 1;
    return {
      id: text(row.MeetingID),
      date: excelDate(row.Date, "long") || "TBD",
      etTime: text(row.ETTime, "TBD"),
      ukTime: text(row.UKTime, "TBD"),
      title: text(row.Title, "Meeting slot available"),
      agenda: text(row.Purpose || row.Notes, "Add meeting agenda."),
      attendees: text(row.People, "TBD"),
      owner: text(row.Owner, "TBD"),
      focus: text(row.LinkedPhase, "Project coordination"),
      status: text(row.Status, "Scheduled"),
      linkedReviewId: text(row.LinkedReviewID),
      meetingLink: text(row.MeetingLink)
    };
  });

  const newReviewRows = tableFromRows(
    sheetRows(sheetMap, root, sharedStrings, "New_Reviews"),
    ["CandidateID", "ReviewName", "Category", "Status", "TargetPhase"]
  );

  const excludedNewReviewIds = new Set([
    "suggested use of categories",
    "shortlisted",
    "under shortlisting",
    "future phase",
    "not eligible",
    "on hold",
    "clarification needed"
  ]);
  const newReviews = newReviewRows
    .filter(isDisplayed)
    .filter((row) => {
      const id = text(row.CandidateID).toLowerCase();
      const name = text(row.ReviewName);
      const normalizedName = name.toLowerCase();
      if (!name) return false;
      if (normalizedName === id || /^new-\d+$/i.test(name)) return false;
      if (excludedNewReviewIds.has(id)) return false;
      return true;
    })
    .map((row) => {
      counts.newReviews += 1;
      return {
        id: text(row.CandidateID),
        reviewName: text(row.ReviewName),
        category: text(row.Category),
        status: text(row.Status),
        targetPhase: text(row.TargetPhase),
        lead: text(row["Lead/Contact"]),
        expectedTiming: text(row.ExpectedTiming),
        remarks: text(row.Remarks),
        moveToFullSheet: text(row.MoveToFullSheet, "No"),
        display: text(row.Display)
      };
    });

  const phaseGroups = splitByPhase(reviews);
  const today = new Date().toISOString().slice(0, 10);
  const lastUpdated = reviews
    .map((review) => review.lastUpdated)
    .filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date))
    .sort()
    .at(-1) || today;

  return {
    data: {
      lastUpdated,
      projectName: "Cochrane AI Platform Study",
      dashboardSubtitle: "Executive and Operations Dashboard",
      timelineReference,
      pilot: phaseGroups.pilot,
      phase1: phaseGroups.phase1,
      phase2: phaseGroups.phase2,
      momActions: [],
      mainTodos,
      criticalItems,
      resources,
      upcomingMeetings,
      newReviews
    },
    counts
  };
}

function exportOutput(data, counts) {
  const output = [
    "// data.js",
    `// GENERATED FROM ${path.basename(WORKBOOK)}. Do not edit generated data by hand.`,
    "",
    `const dashboardData = ${JSON.stringify(data, null, 2)};`,
    ""
  ].join("\n");

  backupDataFile();
  fs.writeFileSync(OUTFILE, output, "utf8");

  console.log(`Exported ${counts.reviews} reviews to data.js.`);
  console.log(`Exported ${counts.workflowStatus} workflow status rows.`);
  console.log(`Exported ${counts.tasks} tasks.`);
  console.log(`Exported ${counts.communications} communications.`);
  console.log(`Exported ${counts.fileReadiness} file readiness rows.`);
  console.log(`Exported ${counts.stages} stage progress rows.`);
  console.log(`Exported ${counts.criticalItems} critical items (${counts.reviewCriticalItems} linked to reviews).`);
  console.log(`Exported ${counts.resources} resources.`);
  console.log(`Exported ${counts.meetings} meetings.`);
  console.log(`Exported ${counts.newReviews} new review pipeline rows.`);
}

function main() {
  if (!fs.existsSync(WORKBOOK)) die(`missing workbook file: ${WORKBOOK}`);

  const validateOnly = process.argv.includes("--validate-only");
  let tmp;

  try {
    tmp = unzipWorkbook(WORKBOOK);
    const sharedStrings = readSharedStrings(tmp);
    const sheetMap = readSheetMap(tmp);

    if (!sheetMap.Review_Index) {
      die("This exporter expects the new review-based workbook with a Review_Index sheet.");
    }

    console.log(`Detected review-based workbook: ${path.basename(WORKBOOK)}.`);
    const { data, counts } = buildReviewBasedDashboard(sheetMap, tmp, sharedStrings);

    if (validateOnly) {
      console.log("Validation-only mode complete. data.js was not changed.");
      console.log(`Found ${counts.reviews} displayed reviews.`);
      console.log(`Found ${counts.newReviews} new review pipeline rows.`);
      return;
    }

    exportOutput(data, counts);
  } finally {
    if (tmp) fs.rmSync(tmp, { recursive: true, force: true });
  }
}

main();
