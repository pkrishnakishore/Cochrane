const fs = require("fs");
const os = require("os");
const path = require("path");
const childProcess = require("child_process");

const ROOT_WORKBOOK = path.join(__dirname, "cochrane_dashboard_backend_template.xlsx");
const DATA_WORKBOOK = path.join(__dirname, "data", "cochrane_dashboard_backend_template.xlsx");
const WORKBOOK = findWorkbook();
const OUTFILE = path.join(__dirname, "data.js");
const BACKUP_DIR = path.join(__dirname, "backups");
const BACKUP_FILE = path.join(BACKUP_DIR, "data.backup.js");

const REQUIRED_SHEETS = ["All_Reviews"];
const SHEETS = [
  "Dashboard_Config",
  "All_Reviews",
  "Workflow_Master",
  "Review_Workflow_Status",
  "Review_Tasks",
  "Communication_Log",
  "File_Readiness",
  "Critical_Items",
  "Resources",
  "Upcoming_Meetings",
  "Stage_Progress"
];

const DEFAULT_FILES = {
  RIS: false,
  PDFs: false,
  Criteria: false,
  Extraction: false,
  Protocol: false,
  "Time Log": false
};

const MILESTONE_COLUMNS = {
  onboarding: "Milestone_Onboarding",
  setup: "Milestone_Setup",
  abstract: "Milestone_Abstract",
  fullText: "Milestone_FullText",
  extraction: "Milestone_Extraction",
  analysis: "Milestone_Analysis"
};

const VALID_STATUSES = new Set([
  "",
  "active",
  "blocked",
  "closed",
  "complete",
  "complete / under review",
  "in progress",
  "high",
  "low",
  "medium",
  "missing",
  "needs action",
  "not applicable",
  "not eligible",
  "not started",
  "not yet required",
  "on track",
  "pending",
  "ready",
  "risk",
  "scheduled",
  "sent",
  "starts 20 may",
  "tbd",
  "to be updated",
  "under review",
  "waiting on others",
  "wrapping up"
]);

const DEFAULT_TIMELINE = {
  source: "cochrane_dashboard_backend_template.xlsx",
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
  const candidates = [DATA_WORKBOOK, ROOT_WORKBOOK].filter((file) => fs.existsSync(file));
  if (!candidates.length) return DATA_WORKBOOK;
  return candidates.sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0];
}

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

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function unzipWorkbook(workbookPath) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cochrane-dashboard-xlsx-"));
  const zipPath = path.join(tmp, "workbook.zip");
  fs.copyFileSync(workbookPath, zipPath);
  const safeZip = zipPath.replace(/'/g, "''");
  const safeTmp = tmp.replace(/'/g, "''");

  childProcess.execFileSync("powershell", [
    "-NoProfile",
    "-Command",
    `Expand-Archive -LiteralPath '${safeZip}' -DestinationPath '${safeTmp}' -Force`
  ], { stdio: "ignore" });

  return tmp;
}

function readText(root, relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function readSharedStrings(root) {
  const file = path.join(root, "xl", "sharedStrings.xml");
  if (!fs.existsSync(file)) return [];

  const xml = fs.readFileSync(file, "utf8");
  return [...xml.matchAll(/<si[\s\S]*?<\/si>/g)].map((match) => {
    return [...match[0].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)]
      .map((textMatch) => decodeXml(textMatch[1]))
      .join("");
  });
}

function readSheetMap(root) {
  const workbookXml = readText(root, "xl/workbook.xml");
  const relsXml = readText(root, "xl/_rels/workbook.xml.rels");
  const rels = {};

  for (const match of relsXml.matchAll(/<Relationship\b([^>]*)\/>/g)) {
    const attrs = attributes(match[1]);
    let target = (attrs.Target || "").replace(/^\//, "");
    if (!target.startsWith("xl/")) target = `xl/${target}`;
    rels[attrs.Id] = target;
  }

  const sheets = {};
  for (const match of workbookXml.matchAll(/<sheet\b([^>]*)\/>/g)) {
    const attrs = attributes(match[1]);
    sheets[attrs.name] = rels[attrs["r:id"]];
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
  const attrs = attributes((cellXml.match(/<c\b([^>]*)>/) || [])[1]);
  const value = (cellXml.match(/<v>([\s\S]*?)<\/v>/) || [])[1];
  const inline = (cellXml.match(/<is>([\s\S]*?)<\/is>/) || [])[1];

  if (attrs.t === "s") return sharedStrings[Number(value)] || "";
  if (attrs.t === "inlineStr") {
    return decodeXml(
      [...String(inline || "").matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)]
        .map((match) => match[1])
        .join("")
    );
  }
  if (attrs.t === "b") return value === "1";
  return decodeXml(value || "");
}

function readRows(root, sheetPath, sharedStrings) {
  if (!sheetPath) return [];
  const xml = readText(root, sheetPath);
  return [...xml.matchAll(/<row\b[^>]*>([\s\S]*?)<\/row>/g)].map((rowMatch) => {
    const row = [];
    for (const cellMatch of rowMatch[1].matchAll(/<c\b[^>]*\/>|<c\b[^>]*>[\s\S]*?<\/c>/g)) {
      const attrs = attributes((cellMatch[0].match(/<c\b([^>]*)>/) || [])[1]);
      row[columnIndex(attrs.r)] = cellValue(cellMatch[0], sharedStrings);
    }
    return row.map((value) => value ?? "");
  });
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

function tableFromRows(rows, requiredHeaders) {
  const headerIndex = findHeaderIndex(rows, requiredHeaders);
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

function isDisplayed(row) {
  const value = String(row.DisplayInHTML ?? "").trim().toLowerCase();
  return value === "yes" || value === "true" || value === "1" || value === "y";
}

function displayValue(row) {
  return String(row.DisplayInHTML ?? "").trim();
}

function isYesNoDisplayValue(value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  return ["yes", "no", "true", "false", "1", "0", "y", "n", ""].includes(normalized);
}

function text(value, fallback = "") {
  const output = String(value ?? "").trim();
  return output || fallback;
}

function numberValue(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function boolValue(value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  return normalized === "yes" || normalized === "true" || normalized === "1" || normalized === "ready" || normalized === "complete";
}

function milestoneValue(value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  const allowed = {
    complete: "Complete",
    active: "Active",
    risk: "Risk",
    pending: "Pending"
  };
  return allowed[normalized] || "";
}

function excelDate(value, format = "iso") {
  if (value instanceof Date) return formatDate(value, format);
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return format === "long" ? longDate(new Date(`${raw}T00:00:00Z`)) : raw;

  const serial = Number(raw);
  if (Number.isFinite(serial) && serial > 20000 && serial < 80000) {
    const date = new Date(Date.UTC(1899, 11, 30) + serial * 86400000);
    return formatDate(date, format);
  }

  return raw;
}

function formatDate(date, format) {
  if (format === "long") return longDate(date);
  return date.toISOString().slice(0, 10);
}

function longDate(date) {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}

function sortRows(rows) {
  return rows.slice().sort((a, b) => {
    const orderA = numberValue(a.DisplayOrder, Number.MAX_SAFE_INTEGER);
    const orderB = numberValue(b.DisplayOrder, Number.MAX_SAFE_INTEGER);
    if (orderA !== orderB) return orderA - orderB;
    return text(a.ReviewID || a.TaskID || a.CommunicationID || a.CriticalItemID || a.ResourceID || a.MeetingID)
      .localeCompare(text(b.ReviewID || b.TaskID || b.CommunicationID || b.CriticalItemID || b.ResourceID || b.MeetingID));
  });
}

function validateTables(tables) {
  const errors = [];
  const warnings = [];
  const addError = (message) => errors.push(message);
  const addWarning = (message) => warnings.push(message);

  const allReviewRows = tables.All_Reviews || [];
  const displayedReviews = allReviewRows.filter(isDisplayed);
  const reviewIds = new Set();
  const duplicateReviewIds = new Set();

  for (const row of allReviewRows) {
    const reviewId = text(row.ReviewID);
    if (!isYesNoDisplayValue(displayValue(row))) {
      addWarning(`All_Reviews row "${reviewId || text(row.ShortName, "unknown")}" has DisplayInHTML value "${displayValue(row)}"; expected Yes or No.`);
    }
  }

  for (const row of displayedReviews) {
    const reviewId = text(row.ReviewID);
    if (!reviewId) {
      addError(`All_Reviews has a displayed row with missing ReviewID.`);
      continue;
    }
    if (reviewIds.has(reviewId)) duplicateReviewIds.add(reviewId);
    reviewIds.add(reviewId);
    validateStatusValue(addWarning, "All_Reviews", reviewId, "Status", row.Status);
    validateStatusValue(addWarning, "All_Reviews", reviewId, "Assessment", row.Assessment);
  }

  for (const reviewId of duplicateReviewIds) {
    addError(`All_Reviews has duplicate ReviewID "${reviewId}".`);
  }

  const workflowIds = new Set(
    (tables.Workflow_Master || [])
      .filter(isDisplayed)
      .map((row) => text(row.WorkflowStepID))
      .filter(Boolean)
  );

  validateDisplayColumn(addWarning, "Workflow_Master", tables.Workflow_Master || [], "WorkflowStepID");
  validateDisplayColumn(addWarning, "Review_Workflow_Status", tables.Review_Workflow_Status || [], "ReviewID");
  validateDisplayColumn(addWarning, "Review_Tasks", tables.Review_Tasks || [], "TaskID");
  validateDisplayColumn(addWarning, "Communication_Log", tables.Communication_Log || [], "CommunicationID");
  validateDisplayColumn(addWarning, "File_Readiness", tables.File_Readiness || [], "ReviewID");
  validateDisplayColumn(addWarning, "Critical_Items", tables.Critical_Items || [], "CriticalItemID");
  validateDisplayColumn(addWarning, "Resources", tables.Resources || [], "ResourceID");
  validateDisplayColumn(addWarning, "Upcoming_Meetings", tables.Upcoming_Meetings || [], "MeetingID");
  validateDisplayColumn(addWarning, "Stage_Progress", tables.Stage_Progress || [], "ReviewID");

  for (const row of (tables.Review_Workflow_Status || []).filter(isDisplayed)) {
    const reviewId = text(row.ReviewID);
    const stepId = text(row.WorkflowStepID);
    if (reviewId && !reviewIds.has(reviewId)) addWarning(`Review_Workflow_Status references missing ReviewID "${reviewId}".`);
    if (!stepId || !workflowIds.has(stepId)) addWarning(`Review_Workflow_Status references invalid WorkflowStepID "${stepId || "(blank)"}".`);
    validateStatusValue(addWarning, "Review_Workflow_Status", `${reviewId}/${stepId}`, "Status", row.Status);
  }

  for (const row of (tables.Review_Tasks || []).filter(isDisplayed)) {
    const taskId = text(row.TaskID, "(blank TaskID)");
    const reviewId = text(row.ReviewID);
    if (reviewId && !reviewIds.has(reviewId)) addWarning(`Review_Tasks row "${taskId}" references missing ReviewID "${reviewId}".`);
    if (!text(row.Owner)) addWarning(`Review_Tasks row "${taskId}" is missing Owner.`);
    if (!text(row.Status)) addWarning(`Review_Tasks row "${taskId}" is missing Status.`);
    validateStatusValue(addWarning, "Review_Tasks", taskId, "Status", row.Status);
  }

  for (const row of (tables.Communication_Log || []).filter(isDisplayed)) {
    const reviewId = text(row.ReviewID);
    if (reviewId && !reviewIds.has(reviewId)) addWarning(`Communication_Log row "${text(row.CommunicationID, "(blank CommunicationID)")}" references missing ReviewID "${reviewId}".`);
    validateStatusValue(addWarning, "Communication_Log", text(row.CommunicationID, "(blank CommunicationID)"), "Status", row.Status);
  }

  for (const row of (tables.File_Readiness || []).filter(isDisplayed)) {
    const reviewId = text(row.ReviewID);
    if (reviewId && !reviewIds.has(reviewId)) addWarning(`File_Readiness row for "${text(row.FileType, "(blank FileType)")}" references missing ReviewID "${reviewId}".`);
    validateStatusValue(addWarning, "File_Readiness", `${reviewId}/${text(row.FileType)}`, "Status", row.Status);
  }

  for (const row of (tables.Critical_Items || []).filter(isDisplayed)) {
    const linkedReviewId = text(row.LinkedReviewID);
    if (linkedReviewId && linkedReviewId.toLowerCase() !== "all" && !reviewIds.has(linkedReviewId)) {
      addWarning(`Critical_Items row "${text(row.CriticalItemID, "(blank CriticalItemID)")}" references missing LinkedReviewID "${linkedReviewId}".`);
    }
    validateStatusValue(addWarning, "Critical_Items", text(row.CriticalItemID, "(blank CriticalItemID)"), "Status", row.Status);
    validateStatusValue(addWarning, "Critical_Items", text(row.CriticalItemID, "(blank CriticalItemID)"), "Severity", row.Severity);
  }

  for (const row of (tables.Resources || []).filter(isDisplayed)) {
    const resourceId = text(row.ResourceID, text(row.ResourceName, "(blank ResourceID)"));
    if (!text(row.URL)) addWarning(`Resources row "${resourceId}" is missing URL.`);
    validateStatusValue(addWarning, "Resources", resourceId, "Status", row.Status);
  }

  for (const row of (tables.Upcoming_Meetings || []).filter(isDisplayed)) {
    const meetingId = text(row.MeetingID, text(row.Title, "(blank MeetingID)"));
    if (!text(row.Date)) addWarning(`Upcoming_Meetings row "${meetingId}" is missing Date.`);
    if (!text(row.ETTime) && !text(row.UKTime)) addWarning(`Upcoming_Meetings row "${meetingId}" is missing ETTime and UKTime.`);
    const linkedReviewId = text(row.LinkedReviewID);
    if (linkedReviewId && linkedReviewId.toLowerCase() !== "all" && !reviewIds.has(linkedReviewId)) {
      addWarning(`Upcoming_Meetings row "${meetingId}" references missing LinkedReviewID "${linkedReviewId}".`);
    }
    validateStatusValue(addWarning, "Upcoming_Meetings", meetingId, "Status", row.Status);
  }

  return { errors, warnings };
}

function validateDisplayColumn(addWarning, sheetName, rows, idColumn) {
  for (const row of rows) {
    if (!isYesNoDisplayValue(displayValue(row))) {
      addWarning(`${sheetName} row "${text(row[idColumn], "unknown")}" has DisplayInHTML value "${displayValue(row)}"; expected Yes or No.`);
    }
  }
}

function validateStatusValue(addWarning, sheetName, rowId, field, value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  if (normalized && !VALID_STATUSES.has(normalized)) {
    addWarning(`${sheetName} row "${rowId}" has invalid ${field} value "${value}".`);
  }
}

function printValidation(validation) {
  for (const warning of validation.warnings) warn(warning);
  for (const error of validation.errors) console.error(`Error: ${error}`);

  if (!validation.errors.length && !validation.warnings.length) {
    console.log("Validation passed with no warnings.");
  } else {
    console.log(`Validation completed with ${validation.errors.length} error(s) and ${validation.warnings.length} warning(s).`);
  }
}

function backupDataFile() {
  if (!fs.existsSync(OUTFILE)) return;
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
  fs.copyFileSync(OUTFILE, BACKUP_FILE);
  console.log(`Backed up existing data.js to ${path.relative(__dirname, BACKUP_FILE)}.`);
}

function safeReview(row) {
  const status = text(row.Status, "Not Started");
  const risk = text(row.Risk, "Medium");
  const targetDate = excelDate(row.TargetDate) || "TBD";
  const currentStage = text(row.CurrentStage, "Current milestone");
  const milestones = Object.fromEntries(
    Object.entries(MILESTONE_COLUMNS).map(([key, column]) => [key, milestoneValue(row[column])])
  );

  return {
    id: text(row.ReviewID),
    title: text(row.ReviewTitle, text(row.ShortName, "Untitled review")),
    shortName: text(row.ShortName, text(row.ReviewTitle, "Untitled")),
    phase: text(row.Phase, "Phase 1"),
    status,
    tool: text(row.Tool, "TBD"),
    lead: text(row.Lead, "TBD"),
    risk,
    currentStage,
    currentUpdate: text(row.CurrentUpdate, "No current update entered."),
    nextAction: text(row.NextAction, "Add next action."),
    communicationSupport: text(row.CurrentUpdate, "No current update entered."),
    communicationLog: [],
    files: { ...DEFAULT_FILES },
    stages: [],
    tasks: [],
    criticalItems: [],
    history: [],
    milestones,
    workflowStatus: {},
    tracker: {
      plannedWindow: "",
      plannedGate: currentStage,
      targetDate,
      variance: text(row.Variance, "To be assessed"),
      assessment: text(row.Assessment, status)
    },
    timelineGates: [
      { label: "Status", value: status, state: status },
      { label: "Target", value: targetDate, state: status },
      { label: "Tool", value: text(row.Tool, "TBD"), state: status }
    ]
  };
}

function buildDashboard(tables) {
  const config = {};
  for (const row of tables.Dashboard_Config || []) {
    const key = text(row.ConfigKey);
    if (key) config[key] = text(row.ConfigValue);
  }

  const allReviewRows = tables.All_Reviews || [];
  const hasMilestoneColumns = allReviewRows.some((row) =>
    Object.values(MILESTONE_COLUMNS).some((column) =>
      Object.prototype.hasOwnProperty.call(row, column)
    )
  );
  if (!hasMilestoneColumns) {
    warn("All_Reviews is missing manual milestone columns. Executive dots will fall back to workflow-derived status.");
  }

  const workflowIds = new Set(
    (tables.Workflow_Master || [])
      .filter(isDisplayed)
      .map((row) => text(row.WorkflowStepID))
      .filter(Boolean)
  );

  const reviewMap = new Map();
  const reviews = [];
  for (const row of sortRows((tables.All_Reviews || []).filter(isDisplayed))) {
    const review = safeReview(row);
    if (!review.id) {
      warn("All_Reviews row skipped because ReviewID is blank.");
      continue;
    }
    reviewMap.set(review.id, review);
    reviews.push(review);
  }

  const counts = {
    reviews: reviews.length,
    workflowStatus: 0,
    tasks: 0,
    communications: 0,
    fileReadiness: 0,
    criticalItems: 0,
    reviewCriticalItems: 0,
    resources: 0,
    meetings: 0,
    stages: 0
  };
  const taskTodos = [];

  for (const row of sortRows((tables.Review_Workflow_Status || []).filter(isDisplayed))) {
    const reviewId = text(row.ReviewID);
    const stepId = text(row.WorkflowStepID);
    const review = reviewMap.get(reviewId);
    if (!review) {
      continue;
    }
    if (stepId) {
      review.workflowStatus[stepId] = text(row.Status, "Not Started");
      counts.workflowStatus += 1;
    }
  }

  for (const row of sortRows((tables.Review_Tasks || []).filter(isDisplayed))) {
    const reviewId = text(row.ReviewID);
    const review = reviewMap.get(reviewId);
    if (!review) {
      continue;
    }
    review.tasks.push({
      id: text(row.TaskID),
      task: text(row.Task, "Untitled task"),
      owner: text(row.Owner, "TBD"),
      status: text(row.Status, "Pending"),
      risk: text(row.Risk, ""),
      due: excelDate(row.DueDate) || "TBD",
      dependency: text(row.Dependency, "None"),
      communication: text(row.Communication, "Check latest communication."),
      source: text(row.Source, ""),
      sourceDate: excelDate(row.SourceDate)
    });
    taskTodos.push({
      task: text(row.Task, "Untitled task"),
      owner: text(row.Owner, "TBD"),
      status: text(row.Status, "Pending"),
      due: excelDate(row.DueDate) || "TBD",
      dependency: text(row.Dependency, "None"),
      linkedReviewId: reviewId,
      communication: text(row.Communication, "Check latest communication.")
    });
    counts.tasks += 1;
  }

  for (const row of sortRows((tables.Communication_Log || []).filter(isDisplayed))) {
    const reviewId = text(row.ReviewID);
    const review = reviewMap.get(reviewId);
    if (!review) {
      continue;
    }
    const linkedTaskId = text(row.LinkedTaskID);
    const linkedTask = linkedTaskId ? review.tasks.find((task) => task.id === linkedTaskId) : null;
    review.communicationLog.push({
      id: text(row.CommunicationID),
      date: excelDate(row.Date) || "Recent",
      subject: text(row.ConversationName, "Mail follow-up"),
      people: text(row.FromPerson, review.lead),
      resp: text(row.ResponsiblePerson, linkedTask?.owner || review.lead),
      due: excelDate(row.DueDate) || linkedTask?.due || "TBD",
      status: text(row.Status, linkedTask?.status || "Pending"),
      summary: text(row.Summary, "Follow-up conversation pending."),
      linkedTaskId,
      linkedAction: linkedTask?.task || text(row.Summary),
      sourceType: text(row.SourceType),
      sourceLink: text(row.SourceLink)
    });
    counts.communications += 1;
  }

  for (const row of sortRows((tables.File_Readiness || []).filter(isDisplayed))) {
    const reviewId = text(row.ReviewID);
    const review = reviewMap.get(reviewId);
    if (!review) {
      continue;
    }
    const fileType = text(row.FileType);
    if (fileType) {
      review.files[fileType] = boolValue(row.FileReady || row.Status);
      counts.fileReadiness += 1;
    }
  }

  for (const row of sortRows((tables.Stage_Progress || []).filter(isDisplayed))) {
    const reviewId = text(row.ReviewID);
    const review = reviewMap.get(reviewId);
    if (!review) {
      continue;
    }
    review.stages.push({
      name: text(row.Stage, "Stage"),
      human: numberValue(row.HumanProgressPct),
      ai: numberValue(row.AIProgressPct),
      status: text(row.Status, "Not Started")
    });
    counts.stages += 1;
  }

  for (const review of reviews) {
    if (!review.stages.length) {
      review.stages = [
        { name: "Setup / Coordination", human: 0, ai: 0, status: "Not Started" },
        { name: "Abstract Screening", human: 0, ai: 0, status: "Not Started" },
        { name: "Full-text Screening", human: 0, ai: 0, status: "Not Started" },
        { name: "Data Extraction / Analysis", human: 0, ai: 0, status: "Not Started" }
      ];
    }
  }

  const mainTodos = [...taskTodos];
  const criticalItems = [];
  for (const row of sortRows((tables.Critical_Items || []).filter(isDisplayed))) {
    const linkedReviewId = text(row.LinkedReviewID);
    const item = {
      id: text(row.CriticalItemID, `critical-${criticalItems.length + 1}`),
      phase: text(row.LinkedPhase, "Program risk"),
      item: text(row.ItemTitle, text(row.ItemDescription, "Critical item")),
      description: text(row.ItemDescription),
      severity: text(row.Severity, "Medium"),
      status: text(row.Status, "Needs Action"),
      owner: text(row.Owner, "TBD"),
      due: excelDate(row.DueDate) || "Monitor",
      linkedReviewId,
      mitigation: text(row.Mitigation),
      impact: text(row.Impact),
      source: text(row.Source),
      sourceDate: excelDate(row.SourceDate)
    };
    criticalItems.push(item);
    counts.criticalItems += 1;

    const review = linkedReviewId ? reviewMap.get(linkedReviewId) : null;
    if (review) {
      review.criticalItems.push(item.item);
      counts.reviewCriticalItems += 1;
    }

    mainTodos.push({
      task: item.item,
      owner: item.owner,
      status: item.status || item.severity,
      due: item.due,
      dependency: item.impact || "Monitor risk",
      linkedReviewId,
      communication: item.mitigation || item.description
    });
  }

  const resources = sortRows((tables.Resources || []).filter(isDisplayed)).map((row) => {
    counts.resources += 1;
    return {
      id: text(row.ResourceID),
      title: text(row.ResourceName, "Untitled resource"),
      type: text(row.ResourceType, "Link"),
      purpose: text(row.Description, "Add description"),
      description: text(row.Description, "Add description"),
      audience: text(row.LinkedPhase, "Project team"),
      owner: text(row.Owner, "TBD"),
      status: text(row.Status, "Active"),
      linkedReviewId: text(row.LinkedReviewID),
      url: text(row.URL, "#")
    };
  });

  const upcomingMeetings = sortRows((tables.Upcoming_Meetings || []).filter(isDisplayed)).map((row) => {
    const linkedReviewId = text(row.LinkedReviewID);
    counts.meetings += 1;
    return {
      id: text(row.MeetingID),
      date: excelDate(row.Date, "long") || "TBD",
      etTime: text(row.ETTime, "TBD"),
      ukTime: text(row.UKTime, "TBD"),
      title: text(row.Title, "Meeting slot available"),
      agenda: text(row.Agenda, "Add meeting agenda."),
      attendees: text(row.Attendees, "TBD"),
      owner: text(row.Owner, "TBD"),
      focus: text(row.LinkedPhase, "Project coordination"),
      status: text(row.Status, "Scheduled"),
      linkedReviewId,
      meetingLink: text(row.MeetingLink)
    };
  });

  const phaseGroups = {
    pilot: [],
    phase1: [],
    phase2: []
  };

  for (const review of reviews) {
    const phase = review.phase.toLowerCase().replace(/\s+/g, "");
    if (phase === "pilot") phaseGroups.pilot.push(review);
    else if (phase === "phase2") phaseGroups.phase2.push(review);
    else phaseGroups.phase1.push(review);
  }

  return {
    data: {
      lastUpdated: excelDate(config.LastUpdated) || new Date().toISOString().slice(0, 10),
      projectName: config.ProjectName || "Cochrane AI Platform Study",
      dashboardSubtitle: config.DashboardSubtitle || "Executive and Operations Dashboard",
      timelineReference: DEFAULT_TIMELINE,
      pilot: phaseGroups.pilot,
      phase1: phaseGroups.phase1,
      phase2: phaseGroups.phase2,
      momActions: [],
      mainTodos,
      criticalItems,
      resources,
      upcomingMeetings
    },
    counts
  };
}

function main() {
  if (!fs.existsSync(WORKBOOK)) die(`missing workbook file: ${WORKBOOK}`);
  const validateOnly = process.argv.includes("--validate-only");

  let tmp;
  try {
    tmp = unzipWorkbook(WORKBOOK);
    const sharedStrings = readSharedStrings(tmp);
    const sheetMap = readSheetMap(tmp);

    for (const sheetName of REQUIRED_SHEETS) {
      if (!sheetMap[sheetName]) die(`missing required sheet: ${sheetName}`);
    }

    const tables = {};
    for (const sheetName of SHEETS) {
      if (!sheetMap[sheetName]) {
        warn(`Optional sheet "${sheetName}" is missing.`);
        tables[sheetName] = [];
        continue;
      }
      const rows = readRows(tmp, sheetMap[sheetName], sharedStrings);
      tables[sheetName] = tableFromRows(rows, headerRequirements(sheetName));
    }

    const validation = validateTables(tables);
    printValidation(validation);
    if (validation.errors.length) {
      die("validation failed. Fix the workbook errors above and rerun the export.");
    }
    if (validateOnly) {
      console.log("Validation-only mode complete. data.js was not changed.");
      return;
    }

    const { data, counts } = buildDashboard(tables);
    const output = [
      "// data.js",
      "// GENERATED FROM cochrane_dashboard_backend_template.xlsx. Do not edit generated data by hand.",
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
  } finally {
    if (tmp) fs.rmSync(tmp, { recursive: true, force: true });
  }
}

function headerRequirements(sheetName) {
  const requirements = {
    Dashboard_Config: ["ConfigKey", "ConfigValue"],
    All_Reviews: ["ReviewID", "ShortName", "ReviewTitle", "Phase", "DisplayInHTML"],
    Workflow_Master: ["WorkflowStepID", "DisplayInHTML"],
    Review_Workflow_Status: ["ReviewID", "WorkflowStepID", "Status", "DisplayInHTML"],
    Review_Tasks: ["TaskID", "ReviewID", "Task", "DisplayInHTML"],
    Communication_Log: ["CommunicationID", "ReviewID", "Summary", "DisplayInHTML"],
    File_Readiness: ["ReviewID", "FileType", "FileReady", "DisplayInHTML"],
    Critical_Items: ["CriticalItemID", "ItemTitle", "DisplayInHTML"],
    Resources: ["ResourceID", "ResourceName", "URL", "DisplayInHTML"],
    Upcoming_Meetings: ["MeetingID", "Date", "Title", "DisplayInHTML"],
    Stage_Progress: ["ReviewID", "Stage", "DisplayInHTML"]
  };
  return requirements[sheetName] || [];
}

main();
