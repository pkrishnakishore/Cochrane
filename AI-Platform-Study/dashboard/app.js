let selectedId = "bp-diabetes";
let currentView = "executive";
let actionFocus = "phase1";

const phase1Workflow = [
  {
    "id": "w01",
    "order": 1,
    "group": "Review selection and onboarding",
    "activity": "Selection of review - core team",
    "responsible": "Core Team",
    "remarks": ""
  },
  {
    "id": "w02",
    "order": 2,
    "group": "Review selection and onboarding",
    "activity": "Selection of review - project manager confirmation",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w03",
    "order": 3,
    "group": "Review selection and onboarding",
    "activity": "Selection of review - final confirmation",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w04",
    "order": 4,
    "group": "Review selection and onboarding",
    "activity": "Confirm allocated AI tool for review",
    "responsible": "Core Team",
    "remarks": ""
  },
  {
    "id": "w05",
    "order": 5,
    "group": "Review selection and onboarding",
    "activity": "Confirm review team split: Human workflow and AI-assisted workflow",
    "responsible": "Krishna / Review Team",
    "remarks": ""
  },
  {
    "id": "w06",
    "order": 6,
    "group": "Review selection and onboarding",
    "activity": "Confirm SharePoint/folder access for review team",
    "responsible": "Krishna / Review Team",
    "remarks": ""
  },
  {
    "id": "w07",
    "order": 7,
    "group": "Review selection and onboarding",
    "activity": "Confirm AI tool access for allocated users",
    "responsible": "Response Team / Allocated Tool Team",
    "remarks": ""
  },
  {
    "id": "w08",
    "order": 8,
    "group": "Review selection and onboarding",
    "activity": "Confirm blinding instructions shared with review teams",
    "responsible": "Krishna / Sean",
    "remarks": ""
  },
  {
    "id": "w09",
    "order": 9,
    "group": "Review selection and onboarding",
    "activity": "Confirm Clockify or alternate time-tracking setup",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w10",
    "order": 10,
    "group": "Setup package and data item readiness",
    "activity": "Review team to share RIS files with setup team",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w11",
    "order": 11,
    "group": "Setup package and data item readiness",
    "activity": "Review team to share protocol and inclusion/exclusion criteria",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w12",
    "order": 12,
    "group": "Setup package and data item readiness",
    "activity": "Finalise data items with Sean",
    "responsible": "Review Team / Sean",
    "remarks": ""
  },
  {
    "id": "w13",
    "order": 13,
    "group": "Setup package and data item readiness",
    "activity": "Confirm data extraction structure is comparable between Human and AI workflows",
    "responsible": "Review Team / Sean",
    "remarks": ""
  },
  {
    "id": "w14",
    "order": 14,
    "group": "Setup package and data item readiness",
    "activity": "Confirm extraction form/template is approved by Sean",
    "responsible": "Sean",
    "remarks": ""
  },
  {
    "id": "w15",
    "order": 15,
    "group": "Abstract screening",
    "activity": "Tool setup - allocated AI tool for abstract screening",
    "responsible": "Response Team / Allocated Tool Team",
    "remarks": ""
  },
  {
    "id": "w16",
    "order": 16,
    "group": "Abstract screening",
    "activity": "Review team validates abstract screening setup before starting",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w17",
    "order": 17,
    "group": "Abstract screening",
    "activity": "Abstract screening - Human workflow",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w18",
    "order": 18,
    "group": "Abstract screening",
    "activity": "Abstract screening - allocated AI tool",
    "responsible": "Allocated Tool Team",
    "remarks": ""
  },
  {
    "id": "w19",
    "order": 19,
    "group": "Abstract screening",
    "activity": "Export abstract screening output from allocated AI tool",
    "responsible": "Allocated Tool Team",
    "remarks": ""
  },
  {
    "id": "w20",
    "order": 20,
    "group": "Abstract screening",
    "activity": "Share abstract screening output with Sean / data manager",
    "responsible": "Krishna / Data Manager",
    "remarks": ""
  },
  {
    "id": "w21",
    "order": 21,
    "group": "Abstract screening",
    "activity": "Share usability survey on abstract screening experience",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w22",
    "order": 22,
    "group": "Abstract screening",
    "activity": "Submit usability survey on abstract screening experience",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w23",
    "order": 23,
    "group": "Abstract screening",
    "activity": "Confirm usability survey responses received for abstract screening",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w24",
    "order": 24,
    "group": "Abstract screening",
    "activity": "Data completeness and quality check before abstract screening adjudication",
    "responsible": "Data Manager / Sean",
    "remarks": ""
  },
  {
    "id": "w25",
    "order": 25,
    "group": "Abstract screening",
    "activity": "Adjudication panel after abstract screening",
    "responsible": "Sean and Adjudication Panel",
    "remarks": ""
  },
  {
    "id": "w26",
    "order": 26,
    "group": "Full-text readiness and screening",
    "activity": "Review team to share PDF files with setup team",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w27",
    "order": 27,
    "group": "Full-text readiness and screening",
    "activity": "Confirm unavailable PDFs or access issues are logged",
    "responsible": "Review Team / Krishna",
    "remarks": ""
  },
  {
    "id": "w28",
    "order": 28,
    "group": "Full-text readiness and screening",
    "activity": "Meeting with Gerald, Amin, Susan, and optional review team members",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w29",
    "order": 29,
    "group": "Full-text readiness and screening",
    "activity": "Confirm full-text screening criteria are finalized",
    "responsible": "Review Team / Sean",
    "remarks": ""
  },
  {
    "id": "w30",
    "order": 30,
    "group": "Full-text readiness and screening",
    "activity": "Tool setup - allocated AI tool for full-text screening",
    "responsible": "Response Team / Allocated Tool Team",
    "remarks": ""
  },
  {
    "id": "w31",
    "order": 31,
    "group": "Full-text readiness and screening",
    "activity": "Review team validates full-text screening setup before starting",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w32",
    "order": 32,
    "group": "Full-text readiness and screening",
    "activity": "Full-text screening - Human workflow",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w33",
    "order": 33,
    "group": "Full-text readiness and screening",
    "activity": "Full-text screening - allocated AI tool",
    "responsible": "Allocated Tool Team",
    "remarks": ""
  },
  {
    "id": "w34",
    "order": 34,
    "group": "Full-text readiness and screening",
    "activity": "Export full-text screening output from allocated AI tool",
    "responsible": "Allocated Tool Team",
    "remarks": ""
  },
  {
    "id": "w35",
    "order": 35,
    "group": "Full-text readiness and screening",
    "activity": "Share full-text screening output with Sean / data manager",
    "responsible": "Krishna / Data Manager",
    "remarks": ""
  },
  {
    "id": "w36",
    "order": 36,
    "group": "Full-text readiness and screening",
    "activity": "Share usability survey on full-text screening workflow",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w37",
    "order": 37,
    "group": "Full-text readiness and screening",
    "activity": "Submit usability survey on full-text screening workflow",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w38",
    "order": 38,
    "group": "Full-text readiness and screening",
    "activity": "Confirm usability survey responses received for full-text screening",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w39",
    "order": 39,
    "group": "Full-text readiness and screening",
    "activity": "Data completeness and quality check before full-text adjudication",
    "responsible": "Data Manager / Sean",
    "remarks": ""
  },
  {
    "id": "w40",
    "order": 40,
    "group": "Full-text readiness and screening",
    "activity": "Adjudication panel after full-text screening",
    "responsible": "Sean and Adjudication Panel",
    "remarks": ""
  },
  {
    "id": "w41",
    "order": 41,
    "group": "Data extraction",
    "activity": "Finalisation of Laser AI platform/server setup, if applicable",
    "responsible": "Core Team / Laser AI",
    "remarks": ""
  },
  {
    "id": "w42",
    "order": 42,
    "group": "Data extraction",
    "activity": "Meeting with Gerald and optional review team members before data extraction",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w43",
    "order": 43,
    "group": "Data extraction",
    "activity": "Confirm final data extraction items and definitions",
    "responsible": "Review Team / Sean",
    "remarks": ""
  },
  {
    "id": "w44",
    "order": 44,
    "group": "Data extraction",
    "activity": "Confirm extraction form/template is approved by Sean",
    "responsible": "Sean",
    "remarks": ""
  },
  {
    "id": "w45",
    "order": 45,
    "group": "Data extraction",
    "activity": "Tool setup - allocated AI tool for data extraction",
    "responsible": "Response Team / Allocated Tool Team",
    "remarks": ""
  },
  {
    "id": "w46",
    "order": 46,
    "group": "Data extraction",
    "activity": "Review team validates data extraction setup before starting",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w47",
    "order": 47,
    "group": "Data extraction",
    "activity": "Data extraction - Human workflow",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w48",
    "order": 48,
    "group": "Data extraction",
    "activity": "Data extraction - allocated AI tool",
    "responsible": "Allocated Tool Team",
    "remarks": ""
  },
  {
    "id": "w49",
    "order": 49,
    "group": "Data extraction",
    "activity": "Export data extraction output from allocated AI tool",
    "responsible": "Allocated Tool Team",
    "remarks": ""
  },
  {
    "id": "w50",
    "order": 50,
    "group": "Data extraction",
    "activity": "Share data extraction output with Sean / data manager",
    "responsible": "Krishna / Data Manager",
    "remarks": ""
  },
  {
    "id": "w51",
    "order": 51,
    "group": "Data extraction",
    "activity": "Share usability survey on data extraction workflow",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w52",
    "order": 52,
    "group": "Data extraction",
    "activity": "Submit usability survey on data extraction workflow",
    "responsible": "Review Team",
    "remarks": ""
  },
  {
    "id": "w53",
    "order": 53,
    "group": "Data extraction",
    "activity": "Confirm usability survey responses received for data extraction",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w54",
    "order": 54,
    "group": "Data extraction",
    "activity": "Data completeness and quality check before data extraction adjudication",
    "responsible": "Data Manager / Sean",
    "remarks": ""
  },
  {
    "id": "w55",
    "order": 55,
    "group": "Data extraction",
    "activity": "Prepare adjudication-ready dataset",
    "responsible": "Data Manager / Sean",
    "remarks": ""
  },
  {
    "id": "w56",
    "order": 56,
    "group": "Data extraction",
    "activity": "Adjudication panel after data extraction",
    "responsible": "Sean and Adjudication Panel",
    "remarks": ""
  },
  {
    "id": "w57",
    "order": 57,
    "group": "Analysis and downstream work",
    "activity": "Meeting with Gerald before analysis closeout",
    "responsible": "Krishna",
    "remarks": ""
  },
  {
    "id": "w58",
    "order": 58,
    "group": "Analysis and downstream work",
    "activity": "Fully automated and stability study - Pawel and Noosheen",
    "responsible": "Pawel / Noosheen",
    "remarks": ""
  },
  {
    "id": "w59",
    "order": 59,
    "group": "Analysis and downstream work",
    "activity": "Follow-up and review",
    "responsible": "Core Team",
    "remarks": ""
  },
  {
    "id": "w60",
    "order": 60,
    "group": "Analysis and downstream work",
    "activity": "Adjudication panel parallel work",
    "responsible": "Adjudication Panel",
    "remarks": ""
  },
  {
    "id": "w61",
    "order": 61,
    "group": "Analysis and downstream work",
    "activity": "Afroditi analysis",
    "responsible": "Afroditi",
    "remarks": ""
  },
  {
    "id": "w62",
    "order": 62,
    "group": "Analysis and downstream work",
    "activity": "Downstream impact of errors research - Max and Joanna",
    "responsible": "Max / Joanna",
    "remarks": ""
  },
  {
    "id": "w63",
    "order": 63,
    "group": "Analysis and downstream work",
    "activity": "Final analysis",
    "responsible": "Analysis Team",
    "remarks": ""
  }
];
const workflowMetadata = {
  1:  { shortName: "Review selected", dependsOn: [], blocks: [2] },
  2:  { shortName: "PM confirmation", dependsOn: [1], blocks: [3] },
  3:  { shortName: "Final confirmation", dependsOn: [2], blocks: [4] },
  4:  { shortName: "Tool allocated", dependsOn: [3], blocks: [5, 7, 15, 30, 45] },
  5:  { shortName: "Team split", dependsOn: [4], blocks: [8, 9, 17, 32, 47] },
  6:  { shortName: "Folder access", dependsOn: [3], blocks: [10, 11, 12] },
  7:  { shortName: "Tool access", dependsOn: [4], blocks: [15, 30, 45] },
  8:  { shortName: "Blinding shared", dependsOn: [5], blocks: [17, 18, 32, 33, 47, 48] },
  9:  { shortName: "Time tracking", dependsOn: [5], blocks: [17, 18, 32, 33, 47, 48] },

  10: { shortName: "RIS files", dependsOn: [6], blocks: [15] },
  11: { shortName: "Protocol & criteria", dependsOn: [6], blocks: [12, 15, 29] },
  12: { shortName: "Data items", dependsOn: [11], blocks: [13, 14, 43, 44] },
  13: { shortName: "Comparable DE", dependsOn: [12], blocks: [14, 44] },
  14: { shortName: "Sean approval", dependsOn: [13], blocks: [43, 44, 45] },

  15: { shortName: "Tool setup", dependsOn: [4, 7, 10, 11], blocks: [16] },
  16: { shortName: "Setup validated", dependsOn: [15], blocks: [17, 18] },
  17: { shortName: "Human screening", dependsOn: [5, 8, 9, 16], blocks: [21, 24, 25] },
  18: { shortName: "AI screening", dependsOn: [7, 8, 9, 16], blocks: [19, 21, 24, 25] },
  19: { shortName: "Export AI output", dependsOn: [18], blocks: [20] },
  20: { shortName: "Share output", dependsOn: [19], blocks: [24, 25] },
  21: { shortName: "Survey sent", dependsOn: [17, 18], blocks: [22] },
  22: { shortName: "Survey submitted", dependsOn: [21], blocks: [23] },
  23: { shortName: "Survey received", dependsOn: [22], blocks: [24] },
  24: { shortName: "Quality check", dependsOn: [20, 23], blocks: [25] },
  25: { shortName: "Abstract adjudication", dependsOn: [24], blocks: [26, 28, 30] },

  26: { shortName: "PDFs received", dependsOn: [25], blocks: [27, 29] },
  27: { shortName: "PDF issues logged", dependsOn: [26], blocks: [29] },
  28: { shortName: "Check-in meeting", dependsOn: [25], blocks: [29] },
  29: { shortName: "Criteria finalized", dependsOn: [11, 26, 27, 28], blocks: [30] },
  30: { shortName: "Tool setup", dependsOn: [4, 7, 29], blocks: [31] },
  31: { shortName: "Setup validated", dependsOn: [30], blocks: [32, 33] },
  32: { shortName: "Human full text", dependsOn: [5, 8, 9, 31], blocks: [36, 39, 40] },
  33: { shortName: "AI full text", dependsOn: [7, 8, 9, 31], blocks: [34, 36, 39, 40] },
  34: { shortName: "Export AI output", dependsOn: [33], blocks: [35] },
  35: { shortName: "Share output", dependsOn: [34], blocks: [39, 40] },
  36: { shortName: "Survey sent", dependsOn: [32, 33], blocks: [37] },
  37: { shortName: "Survey submitted", dependsOn: [36], blocks: [38] },
  38: { shortName: "Survey received", dependsOn: [37], blocks: [39] },
  39: { shortName: "Quality check", dependsOn: [35, 38], blocks: [40] },
  40: { shortName: "Full-text adjudication", dependsOn: [39], blocks: [42, 43, 45] },

  41: { shortName: "Platform ready", dependsOn: [4, 7], blocks: [45] },
  42: { shortName: "DE check-in", dependsOn: [40], blocks: [43] },
  43: { shortName: "DE items confirmed", dependsOn: [12, 14, 40, 42], blocks: [44] },
  44: { shortName: "Form approved", dependsOn: [13, 14, 43], blocks: [45] },
  45: { shortName: "Tool setup", dependsOn: [41, 44], blocks: [46] },
  46: { shortName: "Setup validated", dependsOn: [45], blocks: [47, 48] },
  47: { shortName: "Human extraction", dependsOn: [5, 8, 9, 46], blocks: [51, 54, 55] },
  48: { shortName: "AI extraction", dependsOn: [7, 8, 9, 46], blocks: [49, 51, 54, 55] },
  49: { shortName: "Export AI output", dependsOn: [48], blocks: [50] },
  50: { shortName: "Share output", dependsOn: [49], blocks: [54, 55] },
  51: { shortName: "Survey sent", dependsOn: [47, 48], blocks: [52] },
  52: { shortName: "Survey submitted", dependsOn: [51], blocks: [53] },
  53: { shortName: "Survey received", dependsOn: [52], blocks: [54] },
  54: { shortName: "Quality check", dependsOn: [50, 53], blocks: [55] },
  55: { shortName: "Adjudication dataset", dependsOn: [54], blocks: [56, 57, 58, 61, 62, 63] },
  56: { shortName: "DE adjudication", dependsOn: [55], blocks: [57, 60, 61, 62, 63] },

  57: { shortName: "Gerald closeout", dependsOn: [56], blocks: [59, 63] },
  58: { shortName: "Stability study", dependsOn: [55], blocks: [63] },
  59: { shortName: "Follow-up", dependsOn: [57], blocks: [63] },
  60: { shortName: "Adjudication work", dependsOn: [25, 40, 56], blocks: [63] },
  61: { shortName: "Afroditi analysis", dependsOn: [55, 56], blocks: [63] },
  62: { shortName: "Downstream errors", dependsOn: [55, 56], blocks: [63] },
  63: { shortName: "Final analysis", dependsOn: [57, 58, 59, 60, 61, 62], blocks: [] }
};

phase1Workflow.forEach((item) => {
  const meta = workflowMetadata[item.order] || {};
  item.shortName = meta.shortName || item.activity;
  item.dependsOn = meta.dependsOn || [];
  item.blocks = meta.blocks || [];
});
const workflowGroups = [...new Set(phase1Workflow.map((item) => item.group))];

const reviewCardActivities = {
  "bp-adults": [7, 8, 15],
  "bp-diabetes": [4, 5, 6],
  "psoriasis": [14, 16, 17],
  "phase1-review-4": [1, 2, 3],
  "phase1-review-5": [1, 2, 3]
};


function allReviews() { return [...dashboardData.pilot, ...dashboardData.phase1, ...dashboardData.phase2]; }
function phase1Reviews() { return dashboardData.phase1 || []; }
function reviewById(id) { return allReviews().find((review) => review.id === id); }
function shortName(review) { return review.shortName || review.title; }
function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function tone(status) {
  const value = String(status || "").toLowerCase();
  if (value.includes("blocked") || value.includes("high") || value.includes("behind") || value.includes("risk")) return "red";
  if (value.includes("needs action") || value.includes("issue")) return "orange";
  if (value.includes("waiting") || value.includes("pending")) return "amber";
  if (value.includes("progress") || value.includes("wrapping")) return "blue";
  if (value.includes("complete") || value.includes("ready") || value.includes("on track")) return "green";
  return "slate";
}

function badge(text, type = text) {
  return '<span class="badge tone-' + tone(type) + '">' + escapeHtml(text) + '</span>';
}

function riskRank(review) {
  const status = String(review.status || "").toLowerCase();
  const risk = String(review.risk || "").toLowerCase();
  if (status.includes("blocked") || risk.includes("high")) return 3;
  if (status.includes("needs action") || status.includes("waiting")) return 2;
  if (status.includes("under review") || status.includes("pending")) return 1;
  return 0;
}

function fileReady(review) {
  const files = review.files || {};
  const keys = Object.keys(files);
  return keys.length ? Math.round(keys.filter((key) => files[key]).length / keys.length * 100) : 0;
}

function stageProgress(review, name) {
  const stage = (review.stages || []).find((item) => item.name.toLowerCase().includes(name.toLowerCase())) || {};
  return Math.round((Number(stage.human || 0) + Number(stage.ai || 0)) / 2);
}

function rawWorkflowStatus(review, item) {
  if (review.workflowStatus && review.workflowStatus[item.id]) return review.workflowStatus[item.id];
  return "Not Started";
}

function inferredWorkflowStatus(review, item) {
  const explicitStatus = rawWorkflowStatus(review, item);
  if (explicitStatus !== "Not Started") return explicitStatus;
  const placeholder = String(review.title || "").toLowerCase().includes("placeholder") || review.lead === "TBD";
  if (placeholder) return item.group === "Review selection" && item.order === 1 ? "Under Review" : "Not Started";
  if (item.group === "Review selection") return "Complete";
  if (item.activity.includes("data items")) return review.files?.Extraction ? "Complete" : "Pending";
  if (item.activity.includes("RIS")) return review.files?.RIS ? "Complete" : "Pending";
  if (item.activity.includes("PDF")) return review.files?.PDFs ? "Complete" : "Pending";
  if (item.activity.includes("Clockify")) return review.files?.["Time Log"] ? "Complete" : "Needs Action";
  if (item.group === "Tool setup") return fileReady(review) >= 70 ? "In Progress" : riskRank(review) >= 2 ? "Blocked" : "Pending";
  if (item.group === "Abstract screening") {
    const progress = stageProgress(review, "Abstract");
    if (progress >= 95) return "Complete";
    if (progress > 0) return "In Progress";
    return riskRank(review) >= 3 ? "Blocked" : "Not Started";
  }
  if (item.group === "Full-text readiness") return review.files?.PDFs ? "Pending" : "Blocked";
  if (item.group === "Full-text screening") {
    const progress = stageProgress(review, "Full-text");
    if (progress >= 95) return "Complete";
    if (progress > 0) return "In Progress";
    return String(review.currentStage || "").toLowerCase().includes("full-text") ? review.status : "Not Started";
  }
  if (item.group === "Extraction readiness") return review.files?.Extraction ? "Pending" : "Blocked";
  if (item.group === "Data extraction") {
    const progress = stageProgress(review, "Data");
    if (progress >= 95) return "Complete";
    if (progress > 0) return "In Progress";
    return "Not Started";
  }
  return "Not Started";
}

function workflowStatus(review, item) {
  return inferredWorkflowStatus(review, item);
}
function workflowItemByOrder(order) {
  return phase1Workflow.find((item) => item.order === order);
}

function dependencyStatus(review, item) {
  const missing = (item.dependsOn || [])
    .map((order) => workflowItemByOrder(order))
    .filter(Boolean)
    .filter((dependency) => tone(workflowStatus(review, dependency)) !== "green");

  const actualStatus = workflowStatus(review, item);

  if (tone(actualStatus) === "green") {
    return {
      label: "Complete",
      tone: "green",
      actualStatus,
      missingDependencies: []
    };
  }

  if (missing.length) {
    return {
      label: "Waiting on dependency",
      tone: "slate",
      actualStatus,
      missingDependencies: missing
    };
  }

  return {
    label: actualStatus,
    tone: tone(actualStatus),
    actualStatus,
    missingDependencies: []
  };
}

function dependencyLabelList(items) {
  if (!items || !items.length) return "None";
  return items.map((item) => item.shortName || item.activity).join("; ");
}

function workflowSummary(review) {
  const result = { complete: 0, active: 0, blocked: 0, pending: 0 };
  phase1Workflow.forEach((item) => {
    const status = workflowStatus(review, item).toLowerCase();
    if (status.includes("complete")) result.complete += 1;
    else if (status.includes("blocked")) result.blocked += 1;
    else if (status.includes("progress") || status.includes("action") || status.includes("waiting")) result.active += 1;
    else result.pending += 1;
  });
  result.percent = Math.round(result.complete / phase1Workflow.length * 100);
  return result;
}

function setView(view) {
  currentView = view;
  document.querySelectorAll(".tab").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  document.querySelectorAll("[data-panel]").forEach((panel) => panel.hidden = panel.dataset.panel !== view);
}

function renderDashboard() {
  document.getElementById("lastUpdated").textContent = dashboardData.lastUpdated || "Not set";
  renderPhaseStrip();
  renderSelectionPipeline();
  renderReviewScoreboard();
  renderDecisionList();
  renderScopePanels();
  renderToolView();
  renderSwimlane();
  renderWorkflowFilter();
  renderWorkflowMatrix();
  renderMainTodos();
  renderCriticalItems();
  renderUpcomingMeetings();
  renderResourceLibrary();
  renderSearchList();
  renderDetail();
  setView(currentView);
}

function executiveScopeLabel() {
  if (actionFocus === "pilot") return "Pilot";
  if (actionFocus === "phase2") return "Phase 2";
  if (actionFocus === "governance") return "Governance";
  if (actionFocus === "mom") return "MoM";
  return "Phase 1";
}

function reviewsForExecutiveScope() {
  if (actionFocus === "pilot") return dashboardData.pilot || [];
  if (actionFocus === "phase2") return dashboardData.phase2 || [];
  if (actionFocus === "governance" || actionFocus === "mom") return [];
  return phase1Reviews();
}

function renderExecutiveSummary() {
  const label = executiveScopeLabel();
  const reviews = reviewsForExecutiveScope();

  if (!reviews.length) {
    const metrics = [
      [label + " reviews", "-", "no review-level data", "slate"],
      ["Pending reviews", "-", "not applicable", "slate"],
      ["Management attention", "-", "not applicable", "slate"],
      ["Next decision 1", label, "Use action list below", "amber"],
      ["Next decision 2", label, "Use action list below", "amber"]
    ];

    document.getElementById("executiveSummary").innerHTML = metrics.map((m) =>
      '<article class="metric metric-' + m[3] + '"><p>' +
      escapeHtml(m[0]) +
      '</p><strong>' +
      escapeHtml(m[1]) +
      '</strong><span>' +
      escapeHtml(m[2]) +
      '</span></article>'
    ).join("");

    return;
  }

  const confirmed = reviews.filter((review) =>
    !/under review|tbd|to be decided/i.test(String(review.status || "")) &&
    !String(review.title).toLowerCase().includes("placeholder")
  ).length;

  const pending = Math.max(0, reviews.length - confirmed);

  const attention = reviews.filter((review) =>
    review.status === "Blocked" ||
    review.status === "Needs Action" ||
    review.status === "Waiting on Others" ||
    review.risk === "High"
  ).length;

  const nextDecisions = reviews
    .filter((review) => review.nextAction)
    .sort((a, b) => riskRank(b) - riskRank(a));

  const next1 = nextDecisions[0] || reviews[0];
  const next2 = nextDecisions[1] || reviews[1] || next1;

  const metrics = [
    [label + " reviews", confirmed + " / " + reviews.length, "confirmed reviews", confirmed === reviews.length ? "green" : "amber"],
    ["Pending reviews", pending, "reviews still pending confirmation", pending ? "amber" : "green"],
    ["Management attention", attention, "reviews needing action", attention ? "orange" : "green"],
    ["Next decision 1", next1 ? shortName(next1) : "None", next1 ? next1.nextAction : "No decision pending", next1 ? tone(next1.status) : "green"],
    ["Next decision 2", next2 ? shortName(next2) : "None", next2 ? next2.nextAction : "No second decision pending", next2 ? tone(next2.status) : "green"]
  ];

  document.getElementById("executiveSummary").innerHTML = metrics.map((m) =>
    '<article class="metric metric-' + m[3] + '"><p>' +
    escapeHtml(m[0]) +
    '</p><strong>' +
    escapeHtml(m[1]) +
    '</strong><span>' +
    escapeHtml(m[2]) +
    '</span></article>'
  ).join("");
}


const protocolChecks = [
  { key: "teams", label: "Two teams confirmed", test: (review) => !isPlaceholder(review) && riskRank(review) < 2 },
  { key: "twoPeople", label: "At least 2 per team", test: (review) => !isPlaceholder(review) && !String(review.currentStage || "").toLowerCase().includes("review selection") },
  { key: "search", label: "Search / RIS complete", test: (review) => Boolean(review.files?.RIS) },
  { key: "criteria", label: "Criteria finalized", test: (review) => Boolean(review.files?.Criteria) },
  { key: "pdfs", label: "PDF package ready", test: (review) => Boolean(review.files?.PDFs) },
  { key: "extraction", label: "Extraction items identified", test: (review) => Boolean(review.files?.Extraction) },
  { key: "timing", label: "Time tracking ready", test: (review) => Boolean(review.files?.["Time Log"]) }
];

const metricFamilies = [
  { label: "Title/abstract", metrics: "Sensitivity, included-record proportion, false-negative overlap" },
  { label: "Full text", metrics: "Sensitivity, specificity, precision, F1" },
  { label: "Data extraction", metrics: "Accuracy, sensitivity, precision, F1, RevMan conversion" },
  { label: "Usability", metrics: "SUS, satisfaction, trust, perceived risk" },
  { label: "Stability", metrics: "10-run API test, Jaccard overlap, item agreement" },
  { label: "Impact", metrics: "CCC, z-score, changed conclusion flag" }
];

const effortTracks = [
  { label: "Setup time", detail: "Tool configuration and package preparation" },
  { label: "Verification time", detail: "Human checking and correction" },
  { label: "Iteration time", detail: "Prompt/tool refinement" },
  { label: "Training overhead", detail: "Reported separately from primary task time" },
  { label: "RevMan conversion", detail: "Extraction output conversion time" }
];

function isPlaceholder(review) {
  return String(review.title || "").toLowerCase().includes("placeholder") || review.lead === "TBD";
}

function protocolStatus(review, check) {
  if (check.test(review)) return "Ready";
  if (isPlaceholder(review)) return "Not Started";
  if (["pdfs", "extraction", "timing", "teams"].includes(check.key)) return riskRank(review) >= 2 ? "Blocked" : "Pending";
  return "Pending";
}

function statusCount(rows, value) {
  return rows.filter((row) => String(row.status).toLowerCase() === value.toLowerCase()).length;
}

function protocolRowsForReview(review) {
  return protocolChecks.map((check) => ({ ...check, status: protocolStatus(review, check) }));
}

function reviewProtocolReady(review) {
  const rows = protocolRowsForReview(review);
  return rows.filter((row) => row.status === "Ready").length;
}

function effortReadyCount(review) {
  const stagesStarted = (review.stages || []).filter((stage) => Number(stage.human || 0) > 0 || Number(stage.ai || 0) > 0).length;
  const timeLog = review.files?.["Time Log"] ? 2 : 0;
  return Math.min(effortTracks.length, timeLog + stagesStarted);
}

function metricReadiness(review, family) {
  if (isPlaceholder(review)) return "Not Started";
  if (family.label === "Title/abstract") return stageProgress(review, "Abstract") > 0 ? "In Progress" : "Pending";
  if (family.label === "Full text") return stageProgress(review, "Full-text") > 0 ? "In Progress" : review.files?.PDFs ? "Pending" : "Blocked";
  if (family.label === "Data extraction") return stageProgress(review, "Data") > 0 ? "In Progress" : review.files?.Extraction ? "Pending" : "Blocked";
  if (family.label === "Usability") return phase1Workflow.some((item) => item.activity.includes("survey") && tone(workflowStatus(review, item)) === "green") ? "Ready" : "Pending";
  if (family.label === "Stability") return phase1Workflow.some((item) => item.activity.includes("stability") && tone(workflowStatus(review, item)) !== "slate") ? "In Progress" : "Not Started";
  return workflowSummary(review).complete > 30 ? "Pending" : "Not Started";
}

function renderScopeStat(label, value, note, status) {
  return '<article class="scope-stat scope-' + tone(status) + '"><span>' + escapeHtml(label) + '</span><strong>' + escapeHtml(value) + '</strong><p>' + escapeHtml(note) + '</p></article>';
}

function renderInterimGate() {
  const reviews = phase1Reviews();
  const completeReviews = reviews.filter((review) => workflowSummary(review).complete >= phase1Workflow.length).length;
  const confirmed = reviews.filter((review) => !isPlaceholder(review)).length;
  const blockers = reviews.filter((review) => riskRank(review) >= 3).length;
  const thresholdRows = [
    ["Screening sensitivity", "Futility <80%; NI upper CI <95%", "Pending"],
    ["Full-text specificity", "Futility <50%; NI upper CI <60%", "Pending"],
    ["Extraction sensitivity", "Futility <92%; NI upper CI <97%", "Pending"],
    ["Major errors", ">3% / >2% breach", blockers ? "At Risk" : "Pending"],
    ["Usability", "SUS <57 / <75", "Pending"]
  ];
  const gateTone = blockers ? "High Risk" : confirmed < 5 ? "Needs Action" : "Pending";
  return '<div class="scope-stat-row">' +
    renderScopeStat("Interim reviews", completeReviews + " / 5", "Formal gate after five completed reviews", completeReviews >= 5 ? "Ready" : "Pending") +
    renderScopeStat("Confirmed Phase 1", confirmed + " / 5", "Review slots ready for interim evidence", confirmed === 5 ? "Ready" : "Needs Action") +
    renderScopeStat("Decision posture", blockers ? "Hold" : "Prepare", blockers ? "Resolve blockers before gate pack" : "Build threshold pack", gateTone) +
    '</div><div class="scope-thresholds">' + thresholdRows.map((row) => '<div><strong>' + escapeHtml(row[0]) + '</strong><span>' + escapeHtml(row[1]) + '</span>' + badge(row[2]) + '</div>').join("") + '</div>';
}

function renderAdmcQueue() {
  const reviews = phase1Reviews();
  const adjudicationItems = reviews.flatMap((review) =>
    phase1Workflow
      .filter((item) => item.group === "Adjudication and analysis" || item.activity.includes("Adjudication"))
      .map((item) => ({ review, item, status: workflowStatus(review, item) }))
      .filter((row) => tone(row.status) !== "green")
  );
  const rows = [
    ["Discordances", adjudicationItems.length, "Pending adjudication/stage handoff", adjudicationItems.length ? "Pending" : "Ready"],
    ["Major error watch", reviews.filter((review) => riskRank(review) >= 3).length, "Potential major/moderate issue signal", reviews.some((review) => riskRank(review) >= 3) ? "High" : "Pending"],
    ["Decision log", reviews.filter((review) => review.history && review.history.length).length + " / " + reviews.length, "Rationale and timestamp coverage", "Pending"]
  ];
  return '<div class="scope-stat-row compact">' + rows.map((row) => renderScopeStat(row[0], String(row[1]), row[2], row[3])).join("") + '</div><div class="scope-list">' + adjudicationItems.slice(0, 4).map((row) => '<article><span>' + escapeHtml(shortName(row.review)) + '</span><strong>' + escapeHtml(row.item.activity) + '</strong><p>Resp: ' + escapeHtml(row.item.responsible) + '</p>' + badge(row.status) + '</article>').join("") + '</div>';
}

function renderEffortCapture() {
  const reviews = phase1Reviews();
  const timeReady = reviews.filter((review) => review.files?.["Time Log"]).length;
  const averageEffort = Math.round(reviews.reduce((sum, review) => sum + effortReadyCount(review), 0) / Math.max(1, reviews.length));
  return '<div class="scope-stat-row compact">' +
    renderScopeStat("Time logs", timeReady + " / " + reviews.length, "Clockify or alternate method ready", timeReady === reviews.length ? "Ready" : "Needs Action") +
    renderScopeStat("Effort fields", averageEffort + " / " + effortTracks.length, "Setup, verify, iteration, training, RevMan", averageEffort >= 3 ? "Pending" : "Needs Action") +
    '</div><div class="scope-list effort-list">' + effortTracks.map((track) => '<article><span>Capture</span><strong>' + escapeHtml(track.label) + '</strong><p>' + escapeHtml(track.detail) + '</p></article>').join("") + '</div>';
}

function renderProtocolMatrix() {
  const reviews = phase1Reviews();
  return '<div class="table-wrap protocol-table"><table><thead><tr><th>Protocol criterion</th>' + reviews.map((review) => '<th>' + escapeHtml(shortName(review)) + '</th>').join("") + '</tr></thead><tbody>' +
    protocolChecks.map((check) => '<tr><td class="activity"><strong>' + escapeHtml(check.label) + '</strong><span>Scope document readiness criterion</span></td>' + reviews.map((review) => '<td>' + badge(protocolStatus(review, check)) + '</td>').join("") + '</tr>').join("") +
    '</tbody></table></div>';
}

function renderMetricCapture() {
  const reviews = phase1Reviews();
  return '<div class="scope-list metric-list">' + metricFamilies.map((family) => {
    const statuses = reviews.map((review) => metricReadiness(review, family));
    const blocked = statuses.filter((status) => tone(status) === "red").length;
    const active = statuses.filter((status) => ["orange", "amber", "blue"].includes(tone(status))).length;
    const ready = statuses.filter((status) => tone(status) === "green").length;
    const status = blocked ? "Blocked" : active ? "Pending" : ready ? "Ready" : "Not Started";
    return '<article class="metric-family ' + actionToneClass(status) + '"><div><span>' + escapeHtml(family.label) + '</span><strong>' + escapeHtml(family.metrics) + '</strong><p>Ready: ' + ready + ' / Active or pending: ' + active + ' / Blocked: ' + blocked + '</p></div>' + badge(status) + '</article>';
  }).join("") + '</div>';
}

function renderStudyArms() {
  const arms = [
    ["Human-only control", "Reference screening/extraction workflow", "Review Team"],
    ["AI Tool 1", "Semi-automated parallel arm", "Response Team + Review Team"],
    ["AI Tool 2", "Semi-automated parallel arm", "Response Team + Review Team"],
    ["Fully automated / stability", "AI Methods Group where feasible", "Pawel / Nooshen"],
    ["Blinded output matrix", "De-identified outputs for ADMC comparison", "Sean / ADMC"]
  ];
  return '<div class="scope-list arm-list">' + arms.map((arm) => '<article><span>' + escapeHtml(arm[0]) + '</span><strong>' + escapeHtml(arm[1]) + '</strong><p>Resp: ' + escapeHtml(arm[2]) + '</p></article>').join("") + '</div>';
}

function renderReviewProtocol(selected) {
  const protocolRows = protocolRowsForReview(selected);
  const effortReady = effortReadyCount(selected);
  return '<div class="grid equal review-protocol-grid"><div class="panel"><div class="head"><div><p class="kicker">Protocol compliance</p><h2>Review Readiness</h2></div><span class="note">' + reviewProtocolReady(selected) + ' / ' + protocolChecks.length + '</span></div><div class="scope-list">' + protocolRows.map((row) => '<article class="' + actionToneClass(row.status) + '"><span>' + escapeHtml(row.label) + '</span><strong>' + escapeHtml(row.status) + '</strong>' + badge(row.status) + '</article>').join("") + '</div></div><div class="panel"><div class="head"><div><p class="kicker">Evidence capture</p><h2>Metrics and Effort</h2></div><span class="note">' + effortReady + ' / ' + effortTracks.length + ' effort fields</span></div><div class="scope-list">' + metricFamilies.slice(0, 4).map((family) => '<article class="' + actionToneClass(metricReadiness(selected, family)) + '"><span>' + escapeHtml(family.label) + '</span><strong>' + escapeHtml(metricReadiness(selected, family)) + '</strong><p>' + escapeHtml(family.metrics) + '</p></article>').join("") + '</div></div></div>';
}
function scrollDependencyTimeline(amount) {
  const viewport = document.getElementById("dependencyTimelineViewport");
  if (!viewport) return;

  closeDependencyPopover();

  viewport.scrollBy({
    left: amount,
    behavior: "smooth"
  });

  setTimeout(drawDependencyLines, 250);
}
function renderDependencyPopover(event, reviewId, order) {
  event.stopPropagation();

const review = reviewById(reviewId);
const item = workflowItemByOrder(order);
const popover = document.getElementById("dependencyPopover");

if (!review || !item || !popover) return;

/* Keep popup above normal and full-screen timeline views */
if (popover.parentNode !== document.body) {
  document.body.appendChild(popover);
}

  const dep = dependencyStatus(review, item);
  const dependsOnItems = (item.dependsOn || []).map(workflowItemByOrder).filter(Boolean);
  const blocksItems = (item.blocks || []).map(workflowItemByOrder).filter(Boolean);

  popover.innerHTML =
    '<div class="popover-head">' +
      '<span>Selected activity</span>' +
      '<button onclick="closeDependencyPopover()">×</button>' +
    '</div>' +
    '<strong>' + escapeHtml(item.shortName || item.activity) + '</strong>' +
    '<p><b>Full activity:</b> ' + escapeHtml(item.activity) + '</p>' +
    '<p><b>Stage:</b> ' + escapeHtml(item.group) + '</p>' +
    '<p><b>Responsible:</b> ' + escapeHtml(item.responsible || "TBD") + '</p>' +
    '<p><b>Actual status:</b> ' + escapeHtml(dep.actualStatus || "TBD") + '</p>' +
    '<p><b>Dependency status:</b> ' + escapeHtml(dep.label || "TBD") + '</p>' +
    '<p><b>Depends on:</b> ' + escapeHtml(dependencyLabelList(dependsOnItems)) + '</p>' +
    '<p><b>Blocks:</b> ' + escapeHtml(dependencyLabelList(blocksItems)) + '</p>';

  popover.hidden = false;

  const clicked = event.currentTarget;
  const rect = clicked.getBoundingClientRect();

  const popoverWidth = popover.offsetWidth || 380;
  const popoverHeight = popover.offsetHeight || 280;

  let left = rect.right + 14;
  let top = rect.top;

  if (left + popoverWidth > window.innerWidth - 20) {
    left = rect.left - popoverWidth - 14;
  }

  if (top + popoverHeight > window.innerHeight - 20) {
    top = window.innerHeight - popoverHeight - 20;
  }

  if (left < 20) left = 20;
  if (top < 20) top = 20;

  popover.style.left = left + "px";
  popover.style.top = top + "px";
}
function closeDependencyPopover() {
  const popover = document.getElementById("dependencyPopover");
  if (popover) popover.hidden = true;
}


function toolKey(review) {
  const value = String(review.tool || "TBD").toLowerCase();
  if (value.includes("tool a")) return "Tool A";
  if (value.includes("tool b")) return "Tool B";
  if (value.includes("laser")) return "Laser AI";
  if (value.includes("nested")) return "Nested Knowledge";
  return "TBD";
}

function toolRows() {
  const tools = ["Tool A", "Tool B", "TBD"];
  return tools.map((tool) => {
    const reviews = phase1Reviews().filter((review) => toolKey(review) === tool);
    const blockers = reviews.filter((review) => riskRank(review) >= 3).length;
    const attention = reviews.filter((review) => riskRank(review) >= 2).length;
    const complete = reviews.reduce((sum, review) => sum + workflowSummary(review).complete, 0);
    const total = reviews.length * phase1Workflow.length;
    const readiness = total ? Math.round((complete / total) * 100) : 0;
    const openTasks = reviews.flatMap((review) => (review.tasks || []).map((task) => ({ ...task, review })));
    const blockedActivities = reviews.flatMap((review) =>
      phase1Workflow
        .map((item) => ({ review, item, status: workflowStatus(review, item) }))
        .filter((row) => tone(row.status) === "red")
    );
    return { tool, reviews, blockers, attention, readiness, openTasks, blockedActivities };
  });
}

function renderToolView() {
  const target = document.getElementById("toolView");
  if (!target) return;
  const rows = toolRows();
  const cards = rows.map((row) => {
    const activeReviews = row.reviews.length ? row.reviews.map((review) => '<button class="tool-review ' + actionToneClass(review.status) + '" onclick="selectReview(\'' + review.id + '\')"><strong>' + escapeHtml(shortName(review)) + '</strong><span>' + escapeHtml(review.status) + '</span><p>' + escapeHtml(review.nextAction || "No action recorded") + '</p></button>').join("") : '<div class="tool-empty">No Phase 1 review assigned</div>';
    const pressure = row.blockedActivities.slice(0, 5).map((entry) => '<article><span>' + escapeHtml(shortName(entry.review)) + '</span><strong>' + entry.item.order + '. ' + escapeHtml(entry.item.activity) + '</strong>' + badge(entry.status) + '</article>').join("") || '<article><span>Dependency</span><strong>No blocked workflow activity recorded</strong>' + badge("Ready") + '</article>';
    const tasks = row.openTasks.slice(0, 4).map((task) => '<article><span>' + escapeHtml(shortName(task.review)) + '</span><strong>' + escapeHtml(task.task) + '</strong><p>Resp: ' + escapeHtml(task.owner || "TBD") + ' / Due: ' + escapeHtml(task.due || "TBD") + '</p>' + badge(task.status || "Pending") + '</article>').join("") || '<article><span>Task</span><strong>No open tool task recorded</strong>' + badge("Ready") + '</article>';
    const cardTone = row.blockers ? "red" : row.attention ? "orange" : row.reviews.length ? "green" : "slate";
    return '<section class="tool-card tool-' + tone(cardTone) + '"><div class="tool-card-head"><div><p class="kicker">' + escapeHtml(row.tool) + '</p><h3>' + escapeHtml(row.tool) + ' Impact</h3></div><div class="tool-big-logo">' + escapeHtml(row.tool === "Tool A" ? "A" : row.tool === "Tool B" ? "B" : "?") + '</div></div><div class="tool-metrics">' +
      '<article><span>Assigned reviews</span><strong>' + row.reviews.length + '</strong></article>' +
      '<article><span>Needs attention</span><strong>' + row.attention + '</strong></article>' +
      '<article><span>Blocked</span><strong>' + row.blockers + '</strong></article>' +
      '<article><span>Readiness</span><strong>' + row.readiness + '%</strong></article>' +
      '</div><div class="tool-columns"><div><h4>Reviews using this tool</h4><div class="tool-list">' + activeReviews + '</div></div><div><h4>Workflow pressure</h4><div class="tool-list">' + pressure + '</div></div><div><h4>Open dependencies</h4><div class="tool-list">' + tasks + '</div></div></div></section>';
  }).join("");
  target.innerHTML = '<div class="tool-summary">' + cards + '</div>';
}

function renderScopePanels() {
  const interim = document.getElementById("interimGate");
  if (interim) interim.innerHTML = renderInterimGate();
  const admc = document.getElementById("admcQueue");
  if (admc) admc.innerHTML = renderAdmcQueue();
  const effort = document.getElementById("effortCapture");
  if (effort) effort.innerHTML = renderEffortCapture();
  const protocol = document.getElementById("protocolMatrix");
  if (protocol) protocol.innerHTML = renderProtocolMatrix();
  const metrics = document.getElementById("metricCapture");
  if (metrics) metrics.innerHTML = renderMetricCapture();
  const arms = document.getElementById("studyArms");
  if (arms) arms.innerHTML = renderStudyArms();
  const protocolReview = document.getElementById("protocolReviewDetail");
  if (protocolReview) {
    const selected = allReviews().find((review) => review.id === selectedId) || phase1Reviews()[0];
    protocolReview.innerHTML = selected && phase1Reviews().includes(selected)
      ? renderReviewProtocol(selected)
      : '<p class="small-note">Select a Phase 1 review to show protocol evidence.</p>';
  }
}

function renderPhaseStrip() {
  const fallbackPhases = [
    ["pilot", "Pilot", "Mid March to Mid April", "Wrapping Up"],
    ["phase1", "Phase 1", dashboardData.timelineReference?.phase1Window || "Mid April to End June", "Current Focus"],
    ["governance", "Interim Analysis", "End June", "Decision Gate"],
    ["phase2", "Phase 2", "Start July to End September", "Scheduled"],
    ["governance", "Report", "October 2026", "Planned"]
  ];
  const allowedPhaseKeys = new Set(["pilot", "phase1", "governance", "phase2"]);
  const sourcePhases = dashboardData.timelineReference?.phaseCards || fallbackPhases;
  const phases = sourcePhases
    .filter((p) => allowedPhaseKeys.has(String(p[0] || "").toLowerCase()) && p[1])
    .slice(0, 5);
  const finalPhases = phases.length ? phases : fallbackPhases;
  const phaseCards = finalPhases.map((p) =>
    '<button class="phase ' + (p[1] === "Phase 1" ? "current " : "") + (actionFocus === p[0] ? "focus-active" : "") + '" onclick="setActionFocus(\'' + p[0] + '\')">' +
      '<span>' + escapeHtml(p[3]) + '</span>' +
      '<strong>' + escapeHtml(p[1]) + '</strong>' +
      '<p>' + escapeHtml(p[2]) + '</p>' +
      phaseReviewCountBadge(p) +
    '</button>'
  ).join("");
  document.getElementById("phaseStrip").innerHTML = phaseCards;
}

function phaseReviewCountBadge(phase) {
  const key = String(phase[0] || "").toLowerCase();
  if (key === "pilot") {
    const total = (dashboardData.pilot || []).length;
    return '<em class="phase-count"><span>Reviews</span><b>' + total + ' / ' + total + '</b></em>';
  }
  if (key === "phase1") {
    const confirmed = (dashboardData.phase1 || []).filter((review) => !/tbd|under review|pending/i.test(String(review.status || ""))).length;
    return '<em class="phase-count"><span>Reviews</span><b>' + confirmed + ' / ' + (dashboardData.phase1 || []).length + '</b></em>';
  }
  return "";
}

function onboardingCandidates() {
  const categoryHeaders = [
    "suggested use of categories",
    "shortlisted",
    "under shortlisting",
    "future phase",
    "not eligible",
    "on hold",
    "clarification needed"
  ];
  return (dashboardData.newReviews || []).filter((review) => {
    const id = String(review.id || "").trim().toLowerCase();
    const name = String(review.reviewName || "").trim();
    const display = String(review.display || "").trim().toLowerCase();
    if (!name) return false;
    if (display && !["yes", "true", "1", "y"].includes(display)) return false;
    if (categoryHeaders.includes(id)) return false;
    return true;
  });
}

function onboardingBucket(candidate) {
  const category = String(candidate.category || "").toLowerCase();
  const target = String(candidate.targetPhase || "").toLowerCase();
  if (category.includes("shortlist") && !category.includes("under")) return "shortlisted";
  if (category.includes("under") || category.includes("consider")) return "consideration";
  if (category.includes("future")) return "future";
  if (category.includes("not eligible") && target.includes("phase 2")) return "notEligiblePhase2";
  if (category.includes("not eligible")) return "notEligibleOther";
  if (target.includes("phase 2") || target.includes("future")) return "future";
  return "consideration";
}

function pipelineCategory(candidate) {
  const category = String(candidate.category || "").toLowerCase();
  const status = String(candidate.status || "").toLowerCase();
  const target = String(candidate.targetPhase || "").toLowerCase();

  if (category.includes("withdraw") || category.includes("clarification") || category.includes("clarify")) return "Withdrawn & Reason";
  if (category.includes("on hold") || /\bhold\b/.test(category)) return "Withdrawn & Reason";
  if (category.includes("not eligible") || category.includes("rejected")) return "Not Eligible";
  if (category.includes("future phase") || category.includes("future")) return "Future Phase";
  if (category.includes("under shortlisting") || category.includes("under consideration") || category.includes("evaluation") || category.includes("consider")) return "Under Shortlisting";
  if (category.includes("shortlist") || category.includes("phase 1")) return "Shortlisted";

  const fallback = [status, target].join(" ");
  if (fallback.includes("withdraw") || fallback.includes("clarification") || fallback.includes("clarify")) return "Withdrawn & Reason";
  if (fallback.includes("on hold") || /\bhold\b/.test(fallback)) return "Withdrawn & Reason";
  if (fallback.includes("not eligible") || fallback.includes("rejected")) return "Not Eligible";
  if (fallback.includes("future phase") || target.includes("phase 2") || fallback.includes("future")) return "Future Phase";
  if (fallback.includes("under review") || fallback.includes("pending")) return "Under Shortlisting";
  return "Under Shortlisting";
}

function renderSelectionPipeline() {
  const target = document.getElementById("selectionPipeline");
  if (!target) return;

  const pipelineData = onboardingCandidates().map((candidate) => ({
    title: candidate.reviewName || "Untitled review",
    lead: candidate.lead || "",
    category: pipelineCategory(candidate),
    action: candidate.remarks || candidate.expectedTiming || candidate.status || "Decision pending",
    id: candidate.id || candidate.reviewName
  }));

  const columns = [
    { name: "Shortlisted", filter: "Shortlisted", class: "triage-col-shortlisted" },
    { name: "Under Shortlisting", filter: "Under Shortlisting", class: "triage-col-shortlisting" },
    { name: "Future Phase", filter: "Future Phase", class: "triage-col-future" },
    { name: "Not Eligible", filter: "Not Eligible", class: "triage-col-rejected" },
    { name: "Withdrawn & Reason", filter: "Withdrawn & Reason", class: "triage-col-clarify" }
  ];

  target.innerHTML = columns.map((col) => {
    const cards = pipelineData.filter((item) => item.category === col.filter).slice(0, 5);
    const cardsHtml = cards.map((card) =>
      '<button class="triage-card" onclick="openPipelineReview(\'' + escapeHtml(card.id || card.title) + '\')">' +
        (card.lead ? '<span>' + escapeHtml(card.lead) + '</span>' : '') +
        '<strong>' + escapeHtml(card.title) + '</strong>' +
        '<p>' + escapeHtml(card.action) + '</p>' +
      '</button>'
    ).join("");

    return '<div class="triage-column ' + col.class + '">' +
      '<div class="triage-column-head">' +
        '<h3>' + escapeHtml(col.name) + '</h3>' +
        '<span class="triage-count">' + cards.length + '</span>' +
      '</div>' +
      (cardsHtml || '<p class="triage-empty">No items</p>') +
    '</div>';
  }).join("") + renderPipelineDetailPanel();
}

function renderOnboardingPipeline() {
  const columns = [
    ["shortlisted", "Shortlisted"],
    ["consideration", "Under Consideration"],
    ["future", "For Future Phases"],
    ["notEligiblePhase2", "Not eligible"],
    ["notEligibleOther", "Not eligible"]
  ];
  const candidates = onboardingCandidates();
  return '<div class="onboarding-pipeline">' + columns.map(([key, label]) => {
    const rows = candidates.filter((candidate) => onboardingBucket(candidate) === key).slice(0, 5);
    const slots = Array.from({ length: 5 }, (_, index) => rows[index] || null);
    return '<section class="pipeline-column">' +
      '<div class="pipeline-column-title">' + escapeHtml(label) + '</div>' +
      '<div class="pipeline-review-list">' +
        slots.map(renderPipelineReviewSlot).join("") +
      '</div>' +
    '</section>';
  }).join("") + '</div>' + renderPipelineDetailPanel();
}

function renderPipelineReviewSlot(candidate) {
  if (!candidate) return '<div class="pipeline-review pipeline-review-blank" aria-hidden="true"></div>';
  const name = candidate.reviewName;
  return '<button class="pipeline-review" onclick="openPipelineReview(\'' + escapeHtml(candidate.id || name) + '\')" title="' + escapeHtml(name) + '">' +
    '<strong>' + escapeHtml(name) + '</strong>' +
    '<span>' + escapeHtml(candidate.status || "Status pending") + '</span>' +
  '</button>';
}

function renderPipelineDetailPanel() {
  return '<aside id="pipelineReviewDetail" class="pipeline-detail" hidden>' +
    '<button class="pipeline-close" onclick="closePipelineReview()" aria-label="Close review details">x</button>' +
    '<p class="kicker">Candidate review</p>' +
    '<h2 id="pipelineDetailTitle">Review name</h2>' +
    '<div id="pipelineDetailBody"></div>' +
  '</aside>';
}

function openPipelineReview(id) {
  const candidate = onboardingCandidates().find((review) => String(review.id || review.reviewName) === String(id));
  if (!candidate) return;
  const panel = document.getElementById("pipelineReviewDetail");
  const title = document.getElementById("pipelineDetailTitle");
  const body = document.getElementById("pipelineDetailBody");
  if (!panel || !title || !body) return;
  title.textContent = candidate.reviewName || "Review name";
  body.innerHTML =
    '<div class="pipeline-detail-grid">' +
      '<p><b>Reviewer / lead</b><span>' + escapeHtml(candidate.lead || "TBD") + '</span></p>' +
      '<p><b>Status</b><span>' + escapeHtml(candidate.status || "TBD") + '</span></p>' +
      '<p><b>Category</b><span>' + escapeHtml(candidate.category || "TBD") + '</span></p>' +
      '<p><b>Target phase</b><span>' + escapeHtml(candidate.targetPhase || "TBD") + '</span></p>' +
      '<p><b>Expected timing</b><span>' + escapeHtml(candidate.expectedTiming || "TBD") + '</span></p>' +
      '<p><b>Move to full sheet</b><span>' + escapeHtml(candidate.moveToFullSheet || "No") + '</span></p>' +
    '</div>' +
    '<div class="pipeline-notes"><b>Notes</b><p>' + escapeHtml(candidate.remarks || "No notes added yet.") + '</p></div>';
  panel.hidden = false;
}

function closePipelineReview() {
  const panel = document.getElementById("pipelineReviewDetail");
  if (panel) panel.hidden = true;
}

function currentWorkflowItems(review) {
  const explicit = reviewCardActivities[review.id];
  if (explicit) {
    return explicit
      .map((order) => phase1Workflow.find((item) => item.order === order))
      .filter(Boolean)
      .map((item) => ({ item, status: workflowStatus(review, item) }));
  }

  const active = phase1Workflow
    .map((item) => ({ item, status: workflowStatus(review, item) }))
    .filter(({ status }) => {
      const value = String(status).toLowerCase();
      return !value.includes("complete") && !value.includes("not started");
    });

  const priority = { red: 0, orange: 1, amber: 2, blue: 3, slate: 4, green: 5 };
  active.sort((a, b) => {
    const toneDiff = (priority[tone(a.status)] ?? 9) - (priority[tone(b.status)] ?? 9);
    return toneDiff || a.item.order - b.item.order;
  });

  return active.slice(0, 3);
}

function reviewCardTodos(review) {
  const tasks = Array.isArray(review.tasks) ? review.tasks.slice(0, 2) : [];
  while (tasks.length < 2) {
    tasks.push({
      task: "Add review-specific follow-up",
      owner: "TBD",
      due: "TBD",
      status: "Not Started"
    });
  }
  return tasks;
}

function actionToneClass(status) {
  return "action-tone-" + tone(status);
}

function toolLogo(review) {
  const tool = String(review.tool || "").trim();
  if (!tool || tool === "TBD") return '<span class="tool-logo tool-tbd" title="Tool not assigned">TBD</span>';
  const upper = tool.toUpperCase();
  if (upper.includes("TOOL A")) return '<span class="tool-logo tool-a" title="' + escapeHtml(tool) + '">A</span>';
  if (upper.includes("TOOL B")) return '<span class="tool-logo tool-b" title="' + escapeHtml(tool) + '">B</span>';
  if (upper.includes("LASER")) return '<span class="tool-logo tool-laser" title="' + escapeHtml(tool) + '">LA</span>';
  if (upper.includes("NESTED")) return '<span class="tool-logo tool-nk" title="' + escapeHtml(tool) + '">NK</span>';
  return '<span class="tool-logo tool-generic" title="' + escapeHtml(tool) + '">' + escapeHtml(tool.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "AI") + '</span>';
}

function reviewCardActivityHtml(review) {
  if (actionFocus === "pilot" || actionFocus === "phase2") {
    const tasks = (review.tasks || []).slice(0, 3);
    return tasks.map((task, index) =>
      '<div class="current-activity tone-left-' + tone(task.status) + '"><span>' + (index + 1) + '</span><div><strong>' + escapeHtml(task.task) + '</strong><p>Resp: ' + escapeHtml(task.owner || "TBD") + '</p></div>' + badge(task.status || "Pending") + '</div>'
    ).join("");
  }
  const currentItems = currentWorkflowItems(review);
  return currentItems.map(({ item, status }) =>
    '<div class="current-activity tone-left-' + tone(status) + '"><span>' + item.order + '</span><div><strong>' + escapeHtml(item.activity) + '</strong><p>Resp: ' + escapeHtml(item.responsible) + '</p></div>' + badge(status) + '</div>'
  ).join("");
}

function activeMilestone(review) {
  if (!phase1Reviews().some((item) => item.id === review.id)) {
    return review.currentStage || review.phase || "Current milestone";
  }

  if (review.currentStage) return review.currentStage;

  const grouped = workflowGroups.map((group) => {
    const items = phase1Workflow.filter((item) => item.group === group);
    const statuses = items.map((item) => rawWorkflowStatus(review, item));

    const incomplete = statuses.some((status) => tone(status) !== "green");
    const active = statuses.some((status) =>
      ["red", "orange", "amber", "blue"].includes(tone(status))
    );

    return { group, incomplete, active };
  });

  const picked = grouped.find((entry) => entry.active) || grouped.find((entry) => entry.incomplete);

  return picked ? picked.group : "Complete";
}

function reviewMilestoneHtml(review) {
  const manualMilestones = [
    { key: "onboarding", group: "Review selection and onboarding", label: "Onboarding" },
    { key: "setup", group: "Setup package and data item readiness", label: "Setup" },
    { key: "abstract", group: "Abstract screening", label: "Abstract" },
    { key: "fullText", group: "Full-text readiness and screening", label: "Full text" },
    { key: "extraction", group: "Data extraction", label: "Extraction" },
    { key: "analysis", group: "Analysis and downstream work", label: "Analysis" }
  ];

  const labels = Object.fromEntries(manualMilestones.map((item) => [item.group, item.label]));

  function manualState(value) {
    const normalized = String(value || "").trim().toLowerCase();
    if (normalized === "complete") return "done";
    if (normalized === "active") return "active";
    if (normalized === "risk") return "risk";
    if (normalized === "pending") return "pending";
    return "blank";
  }

  function normalizeStatus(status) {
    return String(status || "Not Started").trim().toLowerCase();
  }

  function milestoneState(statuses) {
    const normalized = statuses.map(normalizeStatus);

    const inactiveStatuses = new Set([
      "",
      "not started",
      "not applicable",
      "not eligible",
      "closed",
      "tbd"
    ]);

    const completeStatuses = new Set([
      "complete"
    ]);

    const riskStatuses = new Set([
      "blocked",
      "needs action"
    ]);

    const activeStatuses = new Set([
      "in progress",
      "under review",
      "pending",
      "waiting on others"
    ]);

    if (!normalized.length || normalized.every((status) => inactiveStatuses.has(status))) {
      return "pending";
    }

    if (normalized.every((status) => completeStatuses.has(status))) {
      return "done";
    }

    if (normalized.some((status) => riskStatuses.has(status))) {
      return "risk";
    }

    if (normalized.some((status) => activeStatuses.has(status))) {
      return "active";
    }

    return "pending";
  }

  function currentMilestoneKey() {
    const statusValue = String(review.status || "").toLowerCase();
    const stageValue = String([review.currentStage, review.tracker?.currentFocus].filter(Boolean).join(" ")).toLowerCase();

    if (statusValue.includes("analysis")) return "analysis";
    if (statusValue.includes("data extraction") || statusValue.includes("extraction")) return "extraction";
    if (statusValue.includes("full-text") || statusValue.includes("full text")) return "fullText";
    if (statusValue.includes("abstract screening")) return "abstract";
    if (statusValue.includes("training") || statusValue.includes("under review") || statusValue.includes("tbd")) return "onboarding";

    if (stageValue.includes("analysis")) return "analysis";
    if (stageValue.includes("data extraction") || stageValue.includes("extraction")) return "extraction";
    if (stageValue.includes("full-text") || stageValue.includes("full text")) return "fullText";
    if (stageValue.includes("abstract screening")) return "abstract";
    if (stageValue.includes("training") || stageValue.includes("confirmation") || stageValue.includes("onboarding")) return "onboarding";
    if (stageValue.includes("setup")) return "setup";
    return "";
  }

  const hasManualMilestones = !!review.milestones && manualMilestones.some((item) =>
    Object.prototype.hasOwnProperty.call(review.milestones, item.key)
  );

  const candidateStatus = String([review.status, review.currentStage, review.shortName, review.title].filter(Boolean).join(" ")).toLowerCase();
  const suppressMilestoneHighlight = (
    candidateStatus.includes("under review") ||
    candidateStatus.includes("tbd") ||
    candidateStatus.includes("additional review identification")
  ) && !String(review.status || "").toLowerCase().includes("abstract screening");

  const activeKey = suppressMilestoneHighlight ? "" : currentMilestoneKey();

  const activeIndex = manualMilestones.findIndex((item) => item.key === activeKey);

  const groups = hasManualMilestones ? manualMilestones.map((item, index) => {
    let state = manualState(review.milestones?.[item.key]);
    if (activeIndex >= 0) {
      if (index < activeIndex) state = "done";
      if (item.key === activeKey) state = "active";
      if (index > activeIndex && state !== "risk") state = "blank";
    }
    return {
      group: item.group,
      label: item.label,
      state
    };
  }) : workflowGroups.map((group) => {
    const items = phase1Workflow.filter((item) => item.group === group);

    // IMPORTANT:
    // Use rawWorkflowStatus here, not workflowStatus.
    // This prevents dependency-derived Blocked statuses from making future phases look active.
    const statuses = items.map((item) => rawWorkflowStatus(review, item));
    const milestone = manualMilestones.find((item) => item.group === group);
    const milestoneIndex = manualMilestones.findIndex((item) => item.group === group);
    let state = milestoneState(statuses);

    if (activeIndex >= 0) {
      if (milestoneIndex < activeIndex) state = "done";
      if (milestone?.key === activeKey) state = "active";
      if (milestoneIndex > activeIndex && state !== "risk") state = "blank";
    }

    return {
      group,
      label: labels[group] || group,
      state
    };
  });

  const displayGroups = groups.map((step) => ({ ...step }));
  if (review.id === "phase1-01") {
    displayGroups.forEach((step) => {
      if (["Onboarding", "Setup", "Abstract", "Full text"].includes(step.label)) step.state = "done";
      if (["Extraction", "Analysis"].includes(step.label)) step.state = "blank";
    });
  }
  if (review.id === "phase1-02") {
    displayGroups.forEach((step) => {
      if (["Onboarding", "Setup", "Abstract"].includes(step.label)) step.state = "done";
      if (["Full text", "Extraction", "Analysis"].includes(step.label)) step.state = "blank";
    });
  }

  return '<div class="executive-milestones">' + displayGroups.map((step) =>
    '<span class="milestone-step milestone-' + step.state + '"><i></i><strong>' + escapeHtml(step.label) + '</strong></span>'
  ).join("") + '</div>';
}

function renderReviewScoreboard() {
  const label = executiveScopeLabel();
  const reviews = reviewsForExecutiveScope();
  const title = document.getElementById("reviewStatusTitle");
  const note = document.getElementById("reviewStatusNote");
  if (title) title.textContent = label + " Review Status";
  if (note) note.textContent = reviews.length ? reviews.length + " review" + (reviews.length === 1 ? "" : "s") : "No review data";
  if (!reviews.length) {
    document.getElementById("reviewScoreboard").innerHTML = '<div class="empty-state"><strong>No review-level cards for ' + escapeHtml(label) + '</strong><p>Use the Immediate attention list for actions in this area.</p></div>';
    return;
  }
  document.getElementById("reviewScoreboard").innerHTML = '<div class="scoreboard">' + reviews.map((review) => {
    const tracker = review.tracker || {};
    const activityHtml = reviewCardActivityHtml(review);
    const todoHtml = reviewCardTodos(review).map((task, index) =>
      '<div class="review-todo ' + actionToneClass(task.status) + '"><span>To do ' + (index + 1) + '</span><strong>' + escapeHtml(task.task) + '</strong><p>Resp: ' + escapeHtml(task.owner || "TBD") + ' / Due: ' + escapeHtml(task.due || "TBD") + '</p>' + badge(task.status || "Pending") + '</div>'
    ).join("");

    return '<button class="score executive-score status-' + tone(review.status) + '" onclick="selectReview(\'' + review.id + '\')"><div class="score-head"><div class="score-title-block"><div class="score-title-row"><strong>' + escapeHtml(shortName(review)) + '</strong>' + toolLogo(review) + '</div><p class="review-contact">' + escapeHtml(review.lead || "Review team contact") + '</p><div class="score-status-line executive-status-line"><span class="status-left status-text status-text-' + tone(review.status) + '">STATUS: ' + escapeHtml(review.status || "Pending") + '</span><span class="risk-right risk-text risk-text-' + tone(review.risk) + '">RISK: ' + escapeHtml(review.risk || "Medium") + '</span></div></div></div><div class="next-step-tile executive-next-step"><span>Next step</span><strong>' + escapeHtml(review.nextAction || "To be assessed") + '</strong></div>' + reviewMilestoneHtml(review) + '</button>';
  }).join("") + '</div>';
}

function actionScopeForLinkedId(id, fallback = "governance") {
  if (!id) return fallback;
  if ((dashboardData.pilot || []).some((review) => review.id === id)) return "pilot";
  if ((dashboardData.phase1 || []).some((review) => review.id === id)) return "phase1";
  if ((dashboardData.phase2 || []).some((review) => review.id === id)) return "phase2";
  if (String(id).includes("phase2")) return "phase2";
  return fallback;
}

function setActionFocus(scope) {
  actionFocus = scope;
  renderPhaseStrip();
  renderReviewScoreboard();
  renderDecisionList();
}

function renderActionFocus() {
  const filters = [
    ["all", "All"],
    ["pilot", "Pilot"],
    ["phase1", "Phase 1"],
    ["phase2", "Phase 2"],
    ["governance", "Governance"],
    ["mom", "MoM"]
  ];
  const target = document.getElementById("actionFocus");
  if (!target) return;
  target.innerHTML = '<span>Action focus</span><div>' + filters.map((filter) => '<button class="' + (actionFocus === filter[0] ? "active" : "") + '" onclick="setActionFocus(\'' + filter[0] + '\')">' + escapeHtml(filter[1]) + '</button>').join("") + '</div>';
}

function renderDecisionList() {
  const phase1Ids = new Set(phase1Reviews().map((review) => review.id));
  const rows = [
    ...dashboardData.pilot.map((review) => ({
      type: "Old phase",
      text: review.nextAction,
      owner: review.lead || "Pilot team",
      status: review.status,
      due: "Pilot closeout",
      linkedReviewId: review.id,
      scope: "pilot"
    })),
    ...phase1Reviews()
      .filter((review) => riskRank(review) >= 1)
      .map((review) => ({
        type: "Phase 1 review",
        text: review.nextAction,
        owner: review.lead || "Review team",
        status: review.status,
        due: review.tracker?.targetDate || "This week",
        linkedReviewId: review.id,
        scope: "phase1"
      })),
    {
      type: "Future phase",
      text: "Protect Phase 2 start by capturing Phase 1 lessons before scaling.",
      owner: "Krishna / Gerald",
      status: "Scheduled",
      due: "After Phase 1",
      linkedReviewId: "phase2-batch",
      scope: "phase2"
    },
    {
      type: "Decision gate",
      text: "Prepare interim analysis decision pack using Phase 1 evidence.",
      owner: "Sean / Gerald",
      status: "Pending",
      due: "End June",
      scope: "governance"
    },
    ...(dashboardData.momActions || [])
      .map((item) => ({
        type: "MoM input",
        text: item.task,
        owner: item.owner,
        status: item.status,
        due: item.due,
        meetingDate: item.meetingDate,
        linkedReviewId: item.linkedReviewId,
        scope: "mom"
      })),
    ...dashboardData.mainTodos
      .filter((item) => !phase1Ids.has(item.linkedReviewId))
      .map((item) => ({
        type: "Cross-phase",
        text: item.task,
        owner: item.owner,
        status: item.status,
        due: item.due,
        linkedReviewId: item.linkedReviewId,
        scope: actionScopeForLinkedId(item.linkedReviewId, "governance")
      })),
    ...dashboardData.criticalItems
      .filter((item) => !phase1Ids.has(item.linkedReviewId))
      .map((item) => ({
        type: "Program risk",
        text: item.item,
        owner: item.owner,
        status: item.severity,
        due: "Monitor",
        linkedReviewId: item.linkedReviewId,
        scope: actionScopeForLinkedId(item.linkedReviewId, "governance")
      }))
  ];
  const filteredRows = (actionFocus === "all" ? rows : rows.filter((row) => row.scope === actionFocus)).slice(0, 8);

  renderActionFocus();
  document.getElementById("decisionList").innerHTML = (filteredRows.length ? filteredRows : [{ type: "No actions", text: "No immediate actions in this focus area.", owner: "Project team", status: "Ready", due: "Monitor" }]).map((row) => {
    const linked = row.linkedReviewId ? reviewById(row.linkedReviewId) : null;
    return '<button class="row immediate-row ' + actionToneClass(row.status) + '" onclick="' + (linked ? "selectReview('" + linked.id + "')" : "") + '"><div><span>' + escapeHtml(row.type) + '</span><strong>' + escapeHtml(row.text) + '</strong><p>' + (row.meetingDate ? 'MoM: ' + escapeHtml(row.meetingDate) + ' / ' : '') + 'Resp: ' + escapeHtml(row.owner) + ' / Due: ' + escapeHtml(row.due || "TBD") + '</p></div>' + badge(row.status) + '</button>';
  }).join("");
}

function initials(name) {
  const cleaned = String(name || "TBD")
    .replaceAll("/", " ")
    .replaceAll("&", " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return "TBD";
  return cleaned
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function stageOwner(review, items, statuses) {
  const blockerIndex = statuses.findIndex((status) => tone(status) === "red");
  const activeIndex = statuses.findIndex((status) => ["orange", "amber", "blue"].includes(tone(status)));
  const picked = items[blockerIndex >= 0 ? blockerIndex : activeIndex >= 0 ? activeIndex : 0];
  if (!picked) return review.lead || "TBD";
  return picked.responsible || review.lead || "TBD";
}

function stageAge(review, group, cellTone) {
  if (cellTone === "green" || cellTone === "slate") return 0;
  const seed = (review.id + group).split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return 2 + (seed % 9);
}

function urgencyLabel(days) {
  if (days >= 8) return "Stale";
  if (days >= 5) return "Aging";
  if (days > 0) return days + "d";
  return "";
}

function topStageIssue(review, group, items, statuses) {
  const blockedIndex = statuses.findIndex((status) => tone(status) === "red");
  const activeIndex = statuses.findIndex((status) => ["orange", "amber", "blue"].includes(tone(status)));
  const index = blockedIndex >= 0 ? blockedIndex : activeIndex >= 0 ? activeIndex : -1;
  const item = index >= 0 ? items[index] : null;
  const status = index >= 0 ? statuses[index] : "Complete";
  return {
    activity: item ? item.activity : group + " complete",
    responsible: item ? item.responsible : review.lead || "TBD",
    status
  };
}

function renderHeatmapAction(reviewId, group) {
  const review = reviewById(reviewId);
  const items = phase1Workflow.filter((item) => item.group === group);
  if (!review || !items.length) return;
  const statuses = items.map((item) => workflowStatus(review, item));
  const issue = topStageIssue(review, group, items, statuses);
  const target = document.getElementById("heatmapAction");
  if (!target) return;
  target.innerHTML = '<div><span>Action surface</span><strong>' + escapeHtml(shortName(review)) + ' / ' + escapeHtml(group) + '</strong><p>' + escapeHtml(issue.activity) + '</p><p>Owner: ' + escapeHtml(issue.responsible) + '</p></div><button class="nudge-button" onclick="selectReview(&quot;' + review.id + '&quot;)">Open review detail</button>';
}
function activeWorkflowItems(review, group) {
  return phase1Workflow
    .filter((item) => item.group === group)
    .filter((item) => {
      const status = rawWorkflowStatus(review, item);
      return [
        "In Progress",
        "Needs Action",
        "Under Review",
        "Pending",
        "Waiting on Others",
        "Complete / Under Review"
      ].includes(status);
    });
}
function renderSwimlane() {
  const target = document.getElementById("swimlaneView");
  if (!target) return;

  const reviews = dashboardData.phase1 || [];
  const groups = workflowGroups || [];

  function getOngoingItems(review, group) {
    return phase1Workflow
      .filter((item) => item.group === group)
      .filter((item) => {
        const status = workflowStatus(review, item);
        return [
          "In Progress",
          "Needs Action",
          "Under Review",
          "Pending",
          "Waiting on Others",
          "Complete / Under Review"
        ].includes(status);
      });
  }

  const header =
    '<div class="heatmap-head">' +
      '<div class="heatmap-stage-head">Stage</div>' +
      reviews.map((review) =>
        '<div class="heatmap-review-head">' +
          '<strong>' + escapeHtml(shortName(review)) + '</strong>' +
          '<span>' + escapeHtml(review.status || "Status not set") + '</span>' +
        '</div>'
      ).join("") +
    '</div>';

  const rows = groups.map((group) => {
    const groupItems = phase1Workflow.filter((item) => item.group === group);

    return (
      '<div class="heatmap-row">' +
        '<div class="heatmap-stage">' +
          '<strong>' + escapeHtml(group) + '</strong>' +
          '<span>' + groupItems.length + ' items</span>' +
        '</div>' +

        reviews.map((review) => {
          const statuses = groupItems.map((item) => workflowStatus(review, item));
          const total = groupItems.length;
          const complete = statuses.filter((status) => tone(status) === "green").length;
          const ongoingItems = getOngoingItems(review, group);
          const ongoingCount = ongoingItems.length;

          const hasBlocked = statuses.some((status) => tone(status) === "red");
          const hasNeedsAction = statuses.some((status) => tone(status) === "orange");
          const hasOngoing = ongoingCount > 0;

          const cellTone = hasBlocked
            ? "red"
            : hasNeedsAction
              ? "orange"
              : hasOngoing
                ? "amber"
                : complete === total && total > 0
                  ? "green"
                  : "slate";

          const topOngoing = ongoingItems.slice(0, 2);

          return (
            '<button class="heatmap-cell heatmap-' + cellTone + '" ' +
              'onclick="renderHeatmapPopup(event, \'' + review.id + '\', \'' + escapeAttr(group) + '\')">' +

              '<div class="clean-heatmap-count">' +
                '<strong>' + complete + '/' + total + ' completed</strong>' +
                '<span class="' + (ongoingCount ? 'ongoing-count' : 'quiet-count') + '">' +
                  ongoingCount + ' ongoing' +
                '</span>' +
              '</div>' +

              '<div class="ongoing-action-list">' +
                topOngoing.map((item) =>
                  '<p>' + escapeHtml(item.shortName || item.activity || "Ongoing action") + '</p>'
                ).join("") +
                (ongoingCount > 2 ? '<em>+' + (ongoingCount - 2) + ' more</em>' : '') +
              '</div>' +
            '</button>'
          );
        }).join("") +
      '</div>'
    );
  }).join("");

  target.innerHTML =
    '<div class="heatmap">' +
      header +
      rows +
    '</div>' +
    '<div id="heatmapPopup" class="heatmap-popup" hidden></div>';
}
function escapeAttr(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderHeatmapPopup(event, reviewId, group) {
  event.stopPropagation();

  const review = reviewById(reviewId);
  const popup = document.getElementById("heatmapPopup");
  if (!review || !popup) return;

  const groupItems = phase1Workflow.filter((item) => item.group === group);

  const completedItems = groupItems.filter((item) =>
    tone(workflowStatus(review, item)) === "green"
  );

  const ongoingItems = groupItems.filter((item) => {
    const status = workflowStatus(review, item);
    return [
      "In Progress",
      "Needs Action",
      "Under Review",
      "Pending",
      "Waiting on Others",
      "Complete / Under Review"
    ].includes(status);
  });

  const blockedItems = groupItems.filter((item) =>
    ["red", "orange"].includes(tone(workflowStatus(review, item)))
  );

  popup.innerHTML =
    '<div class="heatmap-popup-head">' +
      '<div>' +
        '<span>Workflow detail</span>' +
        '<strong>' + escapeHtml(shortName(review)) + '</strong>' +
      '</div>' +
      '<button onclick="closeHeatmapPopup()">×</button>' +
    '</div>' +

    '<div class="heatmap-popup-summary">' +
      '<article><span>Stage</span><strong>' + escapeHtml(group) + '</strong></article>' +
      '<article><span>Progress</span><strong>' + completedItems.length + '/' + groupItems.length + ' completed</strong></article>' +
      '<article><span>Ongoing</span><strong>' + ongoingItems.length + '</strong></article>' +
      '<article><span>Exceptions</span><strong>' + blockedItems.length + '</strong></article>' +
    '</div>' +

    '<div class="heatmap-popup-section">' +
      '<span>Ongoing actions</span>' +
      (
        ongoingItems.length
          ? ongoingItems.map((item) =>
              '<p><b>' + escapeHtml(item.shortName || item.activity) + '</b><br>' +
              '<small>Status: ' + escapeHtml(workflowStatus(review, item)) + '</small></p>'
            ).join("")
          : '<p>No ongoing actions in this stage.</p>'
      ) +
    '</div>' +

    (
      blockedItems.length
        ? '<div class="heatmap-popup-section exception-section">' +
            '<span>Needs attention</span>' +
            blockedItems.map((item) =>
              '<p><b>' + escapeHtml(item.shortName || item.activity) + '</b><br>' +
              '<small>Status: ' + escapeHtml(workflowStatus(review, item)) + '</small></p>'
            ).join("") +
          '</div>'
        : ''
    ) +

    '<div class="heatmap-popup-actions">' +
      '<button onclick="openReviewFromHeatmap(\'' + escapeAttr(review.id) + '\')">Open Review Detail</button>' +
    '</div>';

  popup.hidden = false;

  const clicked = event.currentTarget;
  const rect = clicked.getBoundingClientRect();

  const popupWidth = popup.offsetWidth || 420;
  const popupHeight = popup.offsetHeight || 360;

  let left = rect.right + 14;
  let top = rect.top;

  if (left + popupWidth > window.innerWidth - 20) {
    left = rect.left - popupWidth - 14;
  }

  if (top + popupHeight > window.innerHeight - 20) {
    top = window.innerHeight - popupHeight - 20;
  }

  if (left < 20) left = 20;
  if (top < 20) top = 20;

  popup.style.left = left + "px";
  popup.style.top = top + "px";
}
function closeHeatmapPopup() {
  const popup = document.getElementById("heatmapPopup");
  if (popup) popup.hidden = true;
}

function openReviewFromHeatmap(reviewId) {
  closeHeatmapPopup();

  selectedReviewId = reviewId;

  if (typeof renderSearchList === "function") renderSearchList();
  if (typeof renderDetail === "function") renderDetail();

  setView("review");
}

function renderWorkflowFilter() {
  document.getElementById("groupFilter").innerHTML = '<option value="all">All groups</option>' + workflowGroups.map((group) => '<option value="' + escapeHtml(group) + '">' + escapeHtml(group) + '</option>').join("");
}

function renderWorkflowMatrix() {
  const selected = document.getElementById("groupFilter")?.value || "all";
  const items = phase1Workflow.filter((item) => selected === "all" || item.group === selected);
  const reviews = phase1Reviews();
  document.getElementById("workflowMatrix").innerHTML = '<div class="table-wrap"><table class="matrix"><thead><tr><th class="activity">Activity</th><th>Group</th><th>Responsible</th>' + reviews.map((review) => '<th>' + escapeHtml(shortName(review)) + '</th>').join("") + '</tr></thead><tbody>' + items.map((item) => '<tr><td class="activity"><strong>' + item.order + '. ' + escapeHtml(item.activity) + '</strong>' + (item.remarks ? '<span>' + escapeHtml(item.remarks) + '</span>' : '') + '</td><td>' + escapeHtml(item.group) + '</td><td>' + escapeHtml(item.responsible) + '</td>' + reviews.map((review) => { const status = rawWorkflowStatus(review, item); return '<td><button class="matrix-status tone-' + tone(status) + '" onclick="selectReview(\'' + review.id + '\')">' + escapeHtml(status) + '</button></td>'; }).join("") + '</tr>').join("") + '</tbody></table></div>';
}

function renderMainTodos() {
  document.getElementById("mainTodos").innerHTML = dashboardData.mainTodos.map((todo, index) => {
    const linked = todo.linkedReviewId ? reviewById(todo.linkedReviewId) : null;
    return '<button class="row action-row" onclick="' + (linked ? "selectReview('" + linked.id + "')" : "") + '"><em>' + String(index + 1).padStart(2, "0") + '</em><div><strong>' + escapeHtml(todo.task) + '</strong><p>Owner: ' + escapeHtml(todo.owner) + ' / Due: ' + escapeHtml(todo.due) + (linked ? ' / Linked: ' + escapeHtml(shortName(linked)) : '') + '</p></div>' + badge(todo.status) + '</button>';
  }).join("");
}

function renderUpcomingMeetings() {
  const target = document.getElementById("upcomingMeetings");
  if (!target) return;

  const rows = (dashboardData.upcomingMeetings || []).slice(0, 4);

  while (rows.length < 4) {
    rows.push({
      date: "TBD",
      etTime: "TBD",
      ukTime: "TBD",
      title: "Meeting slot available",
      agenda: "Add meeting agenda.",
      attendees: "TBD",
      Organiser: "TBD",
      status: "Placeholder"
    });
  }

  target.innerHTML = rows.map((meeting, index) => {
    const linkedReview = meeting.linkedReviewId ? reviewById(meeting.linkedReviewId) : null;
    const linkedLabel = linkedReview ? shortName(linkedReview) : meeting.focus || "Project coordination";
    const clickAttr = linkedReview ? " onclick=\"selectReview('" + escapeHtml(linkedReview.id) + "')\" role=\"button\" tabindex=\"0\" title=\"Open linked review\"" : "";
    const linkedClass = linkedReview ? " is-linked" : "";

    return '<article class="meeting-card' + linkedClass + '"' + clickAttr + '>' +
      '<div class="meeting-date">' +
        '<strong>' + escapeHtml(meeting.date || "TBD") + '</strong>' +
        '<span><b>EDT:</b> ' + escapeHtml(meeting.etTime || meeting.time || "TBD") + '</span>' +
        '<span><b>BST:</b> ' + escapeHtml(meeting.ukTime || "TBD") + '</span>' +
      '</div>' +

      '<div>' +
        '<span>Meeting ' + (index + 1) + '</span>' +
        '<strong>' + escapeHtml(meeting.title || "Meeting slot available") + '</strong>' +

        '<p><b>Agenda:</b> ' + escapeHtml(meeting.agenda || "Add meeting agenda.") + '</p>' +

        '<div class="meeting-meta-grid">' +
          '<p><b>Attendees:</b><br>' + escapeHtml(meeting.attendees || "TBD") + '</p>' +
          '<p><b>Owner:</b><br>' + escapeHtml(meeting.owner || "TBD") + '</p>' +
          '<p><b>Status:</b><br>' + escapeHtml(meeting.status || "TBD") + '</p>' +
          '<p><b>Linked review:</b><br>' + escapeHtml(linkedLabel) + '</p>' +
        '</div>' +
      '</div>' +
    '</article>';
  }).join("");
}
function renderResourceLibrary() {
  const target = document.getElementById("resourceLibrary");
  if (!target) return;

  const rows = dashboardData.resources || [];

  if (!rows.length) {
    target.innerHTML =
      '<div class="empty-state">' +
        '<strong>No resources added yet.</strong>' +
        '<p>Add resources in data.js to show key documents, folders, presentations, and survey links here.</p>' +
      '</div>';
    return;
  }

  target.innerHTML =
    '<div class="resource-table">' +
      '<div class="resource-table-head">' +
        '<span>Name</span>' +
        '<span>Description</span>' +
        '<span>Link</span>' +
      '</div>' +
      rows.map((resource) =>
        '<div class="resource-table-row">' +
          '<strong>' + escapeHtml(resource.title || "Untitled resource") + '</strong>' +
          '<p>' + escapeHtml(resource.purpose || resource.description || "Add description") + '</p>' +
          '<a href="' + escapeHtml(resource.url || "#") + '" target="_blank" rel="noopener noreferrer">Open</a>' +
        '</div>'
      ).join("") +
    '</div>';
}

function renderCriticalItems() {
  document.getElementById("criticalItems").innerHTML = dashboardData.criticalItems.map((item, index) => {
    const linked = item.linkedReviewId ? reviewById(item.linkedReviewId) : null;
    return '<button class="row action-row" onclick="' + (linked ? "selectReview('" + linked.id + "')" : "") + '"><em>' + String(index + 1).padStart(2, "0") + '</em><div><strong>' + escapeHtml(item.item) + '</strong><p>Owner: ' + escapeHtml(item.owner) + (linked ? ' / Linked: ' + escapeHtml(shortName(linked)) : '') + '</p></div>' + badge(item.severity) + '</button>';
  }).join("");
}

function renderSearchList() {
  const query = (document.getElementById("searchInput")?.value || "").toLowerCase();

  const phaseOrder = {
    "Phase 1": 1,
    "Pilot": 2,
    "Phase 2": 3
  };

  const filtered = allReviews()
    .filter((review) =>
      [
        review.title,
        review.shortName,
        review.lead,
        review.status,
        review.phase,
        review.currentStage
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    )
    .sort((a, b) => {
      const phaseA = phaseOrder[a.phase] || 99;
      const phaseB = phaseOrder[b.phase] || 99;

      if (phaseA !== phaseB) return phaseA - phaseB;

      return shortName(a).localeCompare(shortName(b));
    });

  document.getElementById("searchList").innerHTML = filtered.map((review) =>
    '<button class="review-button ' + (selectedId === review.id ? "active" : "") + '" onclick="selectReview(\'' + review.id + '\')">' +
      '<strong>' + escapeHtml(shortName(review)) + '</strong>' +
      '<span>' + escapeHtml(review.phase) + ' / ' + escapeHtml(review.status) + '</span>' +
      '<p>' + escapeHtml(review.title) + '</p>' +
    '</button>'
  ).join("");
}

function selectReview(id) {
  selectedId = id;
  renderReviewScoreboard();
  renderDecisionList();
  renderSwimlane();
  renderWorkflowMatrix();
  renderSearchList();
  renderDetail();
  renderScopePanels();
  setView("review");
  document.getElementById("detailView")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const ganttWorkstreams = [
  {
    name: "Setup & Coordination",
    note: "Selection, access, folders, blinding, and data readiness",
    orders: [1, 2, 3, 4, 5, 6, 8, 9, 12, 13, 14, 20, 21, 23, 24, 25, 28, 29, 35, 36, 38, 39, 40, 41, 42, 43, 44, 50, 51, 53, 54, 55, 56]
  },
  {
    name: "Human / Review Team",
    note: "Reviewer-led validation and execution",
    orders: [10, 11, 16, 17, 22, 26, 27, 31, 32, 37, 46, 47, 52]
  },
  {
    name: "Allocated AI Tool",
    note: "Single allocated tool setup, execution, and export",
    orders: [7, 15, 18, 19, 30, 33, 34, 45, 48, 49]
  },
  {
    name: "Analysis / Downstream",
    note: "Closeout, stability, adjudication, and final analysis",
    orders: [57, 58, 59, 60, 61, 62, 63]
  }
];

function ganttLane(item) {
  const order = Number(item.order);
  const stream = ganttWorkstreams.find((entry) => entry.orders.includes(order));
  return stream ? stream.name : "Setup & Coordination";
}

function ganttDuration(item) {
  if (item.activity.includes("screening") || item.activity.includes("Data extraction")) return 2;
  if (item.activity.includes("Tool setup")) return 2;
  if (item.activity.includes("survey")) return 1;
  return 1;
}

function renderGanttBar(selected, item) {
  const status = workflowStatus(selected, item);
  const duration = ganttDuration(item);
  const start = item.order;
  const end = Math.min(phase1Workflow.length + 1, start + duration);
  return '<button class="gantt-bar tone-' + tone(status) + '" style="grid-column:' + start + ' / ' + end + ';" title="' + escapeHtml(item.order + ". " + item.activity + " - " + status) + '" onclick="renderGanttFocus(\'' + selected.id + '\',' + item.order + ')"><span>' + item.order + '. ' + escapeHtml(item.activity) + '</span><em>' + escapeHtml(status) + '</em></button>';
}

function renderGanttFocus(reviewId, order) {
  const review = reviewById(reviewId);
  const item = phase1Workflow.find((entry) => entry.order === order);
  if (!review || !item) return;
  const target = document.getElementById("ganttFocus");
  if (!target) return;
  const status = workflowStatus(review, item);
  target.innerHTML = '<div><span>Selected activity</span><strong>' + item.order + '. ' + escapeHtml(item.activity) + '</strong><p>' + escapeHtml(item.group) + ' / Responsible: ' + escapeHtml(item.responsible) + (item.remarks ? ' / ' + escapeHtml(item.remarks) : '') + '</p></div>' + badge(status);
}

function ganttColumns() {
  const standardGroups = workflowGroups.filter((group) => group !== "Adjudication and analysis");
  const adjudicationItems = phase1Workflow.filter((item) => item.group === "Adjudication and analysis");
  return [
    ...standardGroups.map((group) => ({ type: "group", key: group, label: group, items: phase1Workflow.filter((item) => item.group === group) })),
    ...adjudicationItems.map((item) => ({ type: "item", key: item.id, label: item.order + ". " + item.activity, items: [item] }))
  ];
}

function renderReviewWorkflow(selected) {
  const timelineColumns = computeTimelineColumns();

  const workflowRows = workflowGroups.map((group) => {
    const items = phase1Workflow.filter((item) => item.group === group);

    return (
      '<div class="dependency-timeline-row">' +
        '<div class="dependency-stage-label">' +
          '<span>Workflow stage</span>' +
          '<strong>' + escapeHtml(group) + '</strong>' +
          '<p>' + items.length + ' activities</p>' +
        '</div>' +

        '<div class="dependency-track">' +
          items.map((item) => {
            const dep = dependencyStatus(selected, item);
            const col = timelineColumns[item.order] || 1;

            return (
              '<button class="dependency-node dependency-' + dep.tone + '" ' +
                'data-order="' + item.order + '" ' +
                'style="grid-column:' + col + ';" ' +
                'onclick="renderDependencyPopover(event, \'' + selected.id + '\', ' + item.order + ')">' +
                '<strong>' + escapeHtml(item.shortName || item.activity) + '</strong>' +
                '<span>' + escapeHtml(dep.label) + '</span>' +
              '</button>'
            );
          }).join("") +
        '</div>' +
      '</div>'
    );
  }).join("");

  return (
    '<div class="panel">' +

'<div class="timeline-toolbar compact-timeline-toolbar">' +
  '<span class="stage-gate-label">Stage-gate view</span>' +
  '<div class="timeline-arrow-group">' +
    '<button class="timeline-arrow" onclick="scrollDependencyTimeline(-500)">←</button>' +
    '<button class="timeline-arrow" onclick="scrollDependencyTimeline(500)">→</button>' +
    '<button class="timeline-expand-btn" onclick="openTimelineFullscreen()">⛶ Full screen</button>' +
  '</div>' +
'</div>' +
      '<div class="timeline-frame">' +
        '<div id="dependencyTimelineViewport" class="dependency-timeline-viewport">' +
          '<div id="dependencyTimelineCanvas" class="dependency-timeline-canvas">' +
            '<svg id="dependencySvg" class="dependency-svg"></svg>' +

            '<div class="dependency-column-header">' +
              '<div class="dependency-stage-header">Workflow stage</div>' +
              '<div class="dependency-time-header">' +
                '<span>Start</span>' +
                '<span>Review setup</span>' +
                '<span>Access & readiness</span>' +
                '<span>Tool setup</span>' +
                '<span>Human / AI task</span>' +
                '<span>Output & survey</span>' +
                '<span>Quality check</span>' +
                '<span>Adjudication / analysis</span>' +
              '</div>' +
            '</div>' +

            workflowRows +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div id="dependencyPopover" class="dependency-popover" hidden></div>' +
    '</div>'
  );
}
function renderDependencyFocus(reviewId, order) {
  const review = reviewById(reviewId);
  const item = workflowItemByOrder(order);
  const target = document.getElementById("ganttFocus");

  if (!review || !item || !target) return;

  const dep = dependencyStatus(review, item);
  const dependsOnItems = (item.dependsOn || []).map(workflowItemByOrder).filter(Boolean);
  const blocksItems = (item.blocks || []).map(workflowItemByOrder).filter(Boolean);

  target.innerHTML =
    '<div>' +
      '<span>Selected activity</span>' +
      '<strong>' + escapeHtml(item.shortName || item.activity) + '</strong>' +
      '<p><b>Full activity:</b> ' + escapeHtml(item.activity) + '</p>' +
      '<p><b>Stage:</b> ' + escapeHtml(item.group) + '</p>' +
      '<p><b>Responsible:</b> ' + escapeHtml(item.responsible || "TBD") + '</p>' +
      '<p><b>Actual status:</b> ' + escapeHtml(dep.actualStatus || "TBD") + '</p>' +
      '<p><b>Dependency status:</b> ' + escapeHtml(dep.label || "TBD") + '</p>' +
      '<p><b>Depends on:</b> ' + escapeHtml(dependencyLabelList(dependsOnItems)) + '</p>' +
      '<p><b>Blocks:</b> ' + escapeHtml(dependencyLabelList(blocksItems)) + '</p>' +
      (item.remarks ? '<p><b>Remarks:</b> ' + escapeHtml(item.remarks) + '</p>' : '') +
    '</div>' +
    badge(dep.label || dep.actualStatus || "Pending");
}

function recentMailConversations(review) {
  const conversations = [];

  (review.communicationLog || []).forEach((log) => {
    const linkedTask = (review.tasks || []).find((task) => log.linkedAction && (task.task === log.linkedAction || log.linkedAction.includes(task.task) || task.task.includes(log.linkedAction)));
    conversations.push({
      date: log.date || "Recent",
      name: log.subject || "Mail follow-up",
      from: log.people || review.lead || "Review team",
      resp: log.resp || linkedTask?.owner || review.lead || "Project team",
      due: log.due || linkedTask?.due || "TBD",
      summary: log.summary || log.subject || log.linkedAction || "Follow-up conversation pending.",
      status: log.status || linkedTask?.status || review.status || "Pending"
    });
  });

  (review.tasks || []).forEach((task) => {
    if (conversations.length >= 5) return;
    conversations.push({
      date: task.due || "Pending",
      name: task.task || "Task follow-up",
      from: review.lead || "Review team",
      resp: task.owner || review.lead || "Project team",
      due: task.due || "TBD",
      summary: task.communication || task.task || "Task follow-up conversation pending.",
      status: task.status || "Pending"
    });
  });

  (review.history || []).slice().reverse().forEach((item) => {
    if (conversations.length >= 5) return;
    conversations.push({
      date: item.date || "Recent",
      name: "Status update",
      from: review.lead || "Review team",
      resp: review.lead || "Project team",
      due: "Monitor",
      summary: item.note || "Recent review update.",
      status: review.status || "Pending"
    });
  });

  while (conversations.length < 5) {
    conversations.push({
      date: "TBD",
      name: "Mail conversation needed",
      from: review.lead || "Review team",
      resp: "TBD",
      due: "TBD",
      summary: "Add recent mail conversation summary.",
      status: "Not Started"
    });
  }

  return conversations.slice(0, 5);
}

function renderDetail() {
  const selected = allReviews().find((review) => review.id === selectedId) || phase1Reviews()[0];
  const tracker = selected.tracker || {};
  const isPhase1 = phase1Reviews().includes(selected);
  const summary = isPhase1 ? workflowSummary(selected) : null;

  // 1. Hero & Metrics
  const heroHTML =
  '<div class="panel hero clean-review-hero tone-left-' + tone(selected.status) + '">' +
    '<div class="review-hero-main">' +
      '<div class="badges">' +
        badge(selected.status) +
        badge(selected.risk + " Risk", selected.risk) +
        badge(selected.phase, selected.phase) +
      '</div>' +

      '<h2>' +
        escapeHtml(shortName(selected)) + ': ' + escapeHtml(selected.title) +
      '</h2>' +

      '<div class="review-meta-inline">' +
        '<span><b>Lead:</b> ' + escapeHtml(selected.lead || "TBD") + '</span>' +
        '<span><b>Tool:</b> ' + escapeHtml(selected.tool || "TBD") + '</span>' +
        '<span><b>Stage:</b> ' + escapeHtml(selected.currentStage || "TBD") + '</span>' +
      '</div>' +
    '</div>' +

    '<aside class="next-action-card">' +
      '<span>Immediate next action</span>' +
      '<strong>' + escapeHtml(selected.nextAction || "No action recorded") + '</strong>' +
    '</aside>' +
  '</div>';
  const metricsHTML = summary ? '<div class="detail-metrics"><article><span>Workflow complete</span><strong>' + summary.complete + ' / ' + phase1Workflow.length + '</strong></article><article><span>Active or waiting</span><strong>' + summary.active + '</strong></article><article><span>Blocked</span><strong>' + summary.blocked + '</strong></article><article><span>File readiness</span><strong>' + fileReady(selected) + '%</strong></article></div>' : '';
  
  // 2. Timeline (Moved up)
  const timelineHTML = isPhase1 ? renderReviewWorkflow(selected) : "";

  // 3. Inputs & Comms Grid
  const readinessHTML = '<div class="panel"><div class="head"><div><p class="kicker">Inputs</p><h2>Setup Readiness</h2></div></div><div class="file-grid">' + Object.entries(selected.files || {}).map(([label, ok]) => '<div class="file ' + (ok ? "ready" : "missing") + '"><strong>' + escapeHtml(label) + '</strong><span>' + (ok ? "Ready" : "Missing") + '</span></div>').join("") + '</div></div>';
  const mailHTML = '<div class="panel"><div class="head"><div><p class="kicker">Source context</p><h2>Recent Source Notes</h2><p class="small-note">Latest related conversations: date, name, and one-line summary.</p></div><span class="note">Recent 5</span></div><div class="mail-list">' + recentMailConversations(selected).map((mail) => '<article class="mail-conversation ' + actionToneClass(mail.status) + '"><div class="mail-date">' + escapeHtml(mail.date) + '</div><div><strong>' + escapeHtml(mail.name) + '</strong><div class="mail-meta"><span>From: ' + escapeHtml(mail.from || "TBD") + '</span><span>Resp: ' + escapeHtml(mail.resp || "TBD") + '</span><span>Due: ' + escapeHtml(mail.due || "TBD") + '</span></div><p>' + escapeHtml(mail.summary) + '</p></div>' + badge(mail.status || "Pending") + '</article>').join("") + '</div></div>';
  
  // 4. Granular Tasks
  const taskHTML = '<div class="panel"><div class="head"><div><p class="kicker">Task management</p><h2>Review Task Tracker</h2></div></div><div class="table-wrap"><table><thead><tr><th>Task</th><th>Owner</th><th>Status</th><th>Due</th><th>Dependency</th><th>Communication</th></tr></thead><tbody>' + (selected.tasks || []).map((task) => '<tr><td><strong>' + escapeHtml(task.task) + '</strong></td><td>' + escapeHtml(task.owner) + '</td><td>' + badge(task.status) + '</td><td>' + escapeHtml(task.due) + '</td><td>' + escapeHtml(task.dependency) + '</td><td>' + escapeHtml(task.communication || "Check latest mail") + '</td></tr>').join("") + '</tbody></table></div></div>';

document.getElementById("detailView").innerHTML = '<div class="detail stack">' + 
  heroHTML + 
  metricsHTML + 
  timelineHTML + 
  taskHTML +
  '<div class="grid readiness-source-grid">' + readinessHTML + mailHTML + '</div>' + 
  '</div>';

  setTimeout(drawDependencyLines, 50);
}

function copyMainUpdate() {
  const lines = ["Cochrane AI Platform Study Dashboard Update", "Last updated: " + dashboardData.lastUpdated, "", "Executive risks:", ...dashboardData.criticalItems.map((item, i) => (i + 1) + ". " + item.item + " - " + item.severity + " - Owner: " + item.owner), "", "Phase 1 review status:", ...phase1Reviews().map((review) => { const tracker = review.tracker || {}; const summary = workflowSummary(review); return shortName(review) + " - " + review.status + " - " + (tracker.variance || "To be assessed") + " - Workflow: " + summary.complete + "/" + phase1Workflow.length + " - Next: " + review.nextAction; })];
  const text = lines.join("\n");
  if (navigator.clipboard) { navigator.clipboard.writeText(text); alert("Main update copied to clipboard."); } else { alert(text); }
}

function drawDependencyLines() {
  const canvas = document.getElementById("dependencyTimelineCanvas");
  const svg = document.getElementById("dependencySvg");

  if (!canvas || !svg) return;

  const canvasRect = canvas.getBoundingClientRect();

  svg.setAttribute("width", canvas.scrollWidth);
  svg.setAttribute("height", canvas.scrollHeight);
  svg.innerHTML = "";

  phase1Workflow.forEach((item) => {
    const target = canvas.querySelector('[data-order="' + item.order + '"]');
    if (!target) return;

    (item.dependsOn || []).forEach((depOrder) => {
      const source = canvas.querySelector('[data-order="' + depOrder + '"]');
      if (!source) return;

      const sourceRect = source.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      const x1 = sourceRect.right - canvasRect.left + canvas.scrollLeft;
      const y1 = sourceRect.top + sourceRect.height / 2 - canvasRect.top;

      const x2 = targetRect.left - canvasRect.left + canvas.scrollLeft;
      const y2 = targetRect.top + targetRect.height / 2 - canvasRect.top;

      const midX = x1 + Math.max(40, (x2 - x1) / 2);

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

      path.setAttribute(
        "d",
        "M " + x1 + " " + y1 +
        " C " + midX + " " + y1 +
        ", " + midX + " " + y2 +
        ", " + x2 + " " + y2
      );

      path.setAttribute("class", "dependency-line");
      svg.appendChild(path);
    });
  });
}
function computeTimelineColumns() {
  const colMap = {};

  function getCol(item) {
    if (!item) return 1;

    if (colMap[item.order]) return colMap[item.order];

    const dependencies = (item.dependsOn || [])
      .map(workflowItemByOrder)
      .filter(Boolean);

    if (!dependencies.length) {
      colMap[item.order] = 1;
      return 1;
    }

    const maxDependencyCol = Math.max(...dependencies.map(getCol));
    colMap[item.order] = maxDependencyCol + 1;
    return colMap[item.order];
  }

  phase1Workflow.forEach(getCol);

  return colMap;
}
function openTimelineFullscreen() {
  const panel = document.querySelector("#detailView .timeline-frame");
  if (!panel) return;

  closeDependencyPopover();

  const existingOverlay = document.getElementById("timelineFullscreenOverlay");
  if (existingOverlay) existingOverlay.remove();

  const placeholder = document.createElement("div");
  placeholder.id = "timelineFramePlaceholder";
  placeholder.style.display = "none";

  panel.parentNode.insertBefore(placeholder, panel);

  const overlay = document.createElement("div");
  overlay.id = "timelineFullscreenOverlay";
  overlay.className = "timeline-fullscreen-overlay";

  overlay.innerHTML =
    '<div class="timeline-fullscreen-shell">' +
      '<div class="timeline-fullscreen-head">' +
        '<div>' +
          '<span>Stage-gate view</span>' +
          '<strong>Review Flow</strong>' +
        '</div>' +
        '<button type="button" class="timeline-close-btn" onclick="closeTimelineFullscreen(event)">Close</button>' +
      '</div>' +
      '<div id="timelineFullscreenBody" class="timeline-fullscreen-body"></div>' +
    '</div>';

  document.body.appendChild(overlay);

  const body = document.getElementById("timelineFullscreenBody");
  body.appendChild(panel);

  document.body.classList.add("timeline-fullscreen-active");

  setTimeout(drawDependencyLines, 100);
}

function closeTimelineFullscreen(event) {
  if (event) event.stopPropagation();

  const overlay = document.getElementById("timelineFullscreenOverlay");
  const placeholder = document.getElementById("timelineFramePlaceholder");
  const panel = overlay ? overlay.querySelector(".timeline-frame") : null;

  if (panel && placeholder && placeholder.parentNode) {
    placeholder.parentNode.insertBefore(panel, placeholder);
    placeholder.remove();
  }

  if (overlay) overlay.remove();

  document.body.classList.remove("timeline-fullscreen-active");

  setTimeout(drawDependencyLines, 100);
}

window.openTimelineFullscreen = openTimelineFullscreen;
window.closeTimelineFullscreen = closeTimelineFullscreen;

renderDashboard();
