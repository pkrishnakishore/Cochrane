// data.js
// GENERATED FROM cochrane_dashboard_backend_template.xlsx. Do not edit generated data by hand.

const dashboardData = {
  "lastUpdated": "2026-05-14",
  "projectName": "Cochrane AI Platform Study",
  "dashboardSubtitle": "Executive and Operations Dashboard",
  "timelineReference": {
    "source": "cochrane_dashboard_backend_template.xlsx",
    "phase1Window": "2026-05-01 to 2026-07-31",
    "phaseCards": [
      [
        "pilot",
        "Pilot",
        "Mid March to Mid April",
        "Wrapping Up"
      ],
      [
        "phase1",
        "Phase 1",
        "Mid April to End June",
        "Current Focus"
      ],
      [
        "governance",
        "Interim Analysis",
        "End June",
        "Decision Gate"
      ],
      [
        "phase2",
        "Phase 2",
        "Start July to End September",
        "Scheduled"
      ],
      [
        "governance",
        "Report",
        "October",
        "Planned"
      ]
    ],
    "majorTimeline": [
      {
        "phase": "Pilot",
        "window": "Mid March to Mid April",
        "note": "Wrapping Up"
      },
      {
        "phase": "Phase 1",
        "window": "Mid April to End June",
        "note": "Current Focus"
      },
      {
        "phase": "Interim Analysis",
        "window": "End June",
        "note": "Decision Gate"
      },
      {
        "phase": "Phase 2",
        "window": "Start July to End September",
        "note": "Scheduled"
      },
      {
        "phase": "Report",
        "window": "October",
        "note": "Planned"
      }
    ]
  },
  "pilot": [
    {
      "id": "pilot-01",
      "title": "Cessation of caffeine",
      "shortName": "Caffeine",
      "phase": "Pilot",
      "status": "Wrapping Up",
      "tool": "TBD",
      "lead": "Matteo Bruschettini",
      "risk": "Medium",
      "currentStage": "Pilot closeout / lessons learned",
      "currentUpdate": "Time-on-task values and survey receipt still need verification for pilot closeout.",
      "nextAction": "Verify Matteo time-on-task values, confirm usability survey receipt, and finalize pilot lessons learned.",
      "communicationSupport": "Time-on-task values and survey receipt still need verification for pilot closeout.",
      "communicationLog": [
        {
          "id": "comm-pilot-01-001",
          "date": "2026-05-07",
          "subject": "Pilot time-on-task update",
          "people": "Matteo Bruschettini",
          "resp": "Krishna / Amin",
          "due": "2026-05-10",
          "status": "Needs Action",
          "summary": "Matteo reported title/abstract and data extraction timing values; full-text time was not reported and needs to be documented as a limitation.",
          "linkedTaskId": "task-pilot-01-001",
          "linkedAction": "Verify Matteo time-on-task values",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-pilot-01-002",
          "date": "2026-05-07",
          "subject": "Pilot survey completion update",
          "people": "Matteo Bruschettini",
          "resp": "Krishna / Susan",
          "due": "2026-05-10",
          "status": "Pending",
          "summary": "Matteo indicated survey completion, but receipt should be confirmed in the survey system.",
          "linkedTaskId": "task-pilot-01-002",
          "linkedAction": "Consolidate usability survey receipt",
          "sourceType": "Email",
          "sourceLink": ""
        }
      ],
      "files": {
        "RIS": false,
        "PDFs": false,
        "Criteria": false,
        "Extraction": false,
        "Protocol": false,
        "Time Log": false
      },
      "stages": [
        {
          "name": "Setup / Coordination",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Abstract Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Full-text Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Data Extraction / Analysis",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        }
      ],
      "tasks": [
        {
          "id": "task-pilot-01-001",
          "task": "Verify Matteo time-on-task values",
          "owner": "Krishna / Amin",
          "status": "Complete",
          "risk": "Medium",
          "due": "2026-05-10",
          "dependency": "Matteo self-reported time",
          "communication": "Check whether reported title/abstract and data extraction times are sufficiently reliable for pilot note.",
          "source": "Email",
          "sourceDate": "2026-05-07"
        },
        {
          "id": "task-pilot-01-002",
          "task": "Consolidate usability survey receipt",
          "owner": "Susan",
          "status": "Pending",
          "risk": "Medium",
          "due": "2026-05-10",
          "dependency": "Survey access",
          "communication": "Matteo said all surveys were submitted; confirm in survey system.",
          "source": "Email",
          "sourceDate": "2026-05-07"
        },
        {
          "id": "task-pilot-01-003",
          "task": "Capture lessons learned before pilot closeout",
          "owner": "Krishna / Core Team",
          "status": "In Progress",
          "risk": "Medium",
          "due": "2026-05-10",
          "dependency": "Lessons document",
          "communication": "Include review retention, tool support, workload clarity, and volunteer usability points.",
          "source": "MoM",
          "sourceDate": "2026-05-10"
        }
      ],
      "criticalItems": [
        "Full-text time not reported"
      ],
      "history": [],
      "milestones": {
        "onboarding": "",
        "setup": "",
        "abstract": "",
        "fullText": "",
        "extraction": "",
        "analysis": ""
      },
      "workflowStatus": {},
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Pilot closeout / lessons learned",
        "targetDate": "2026-05-10",
        "variance": "Full-text time not reported.",
        "assessment": "Wrapping Up"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "Wrapping Up",
          "state": "Wrapping Up"
        },
        {
          "label": "Target",
          "value": "2026-05-10",
          "state": "Wrapping Up"
        },
        {
          "label": "Tool",
          "value": "TBD",
          "state": "Wrapping Up"
        }
      ]
    },
    {
      "id": "pilot-02",
      "title": "DMARDs / Rheumatoid arthritis",
      "shortName": "DMARDs / RA",
      "phase": "Pilot",
      "status": "Needs Action",
      "tool": "TBD",
      "lead": "Jordi Pardo Pardo / Glen Hazlewood",
      "risk": "Medium",
      "currentStage": "Pilot completion check",
      "currentUpdate": "No fresh completion update found in the latest email batch.",
      "nextAction": "Confirm latest Laser AI completion status and whether outputs are ready for Sean/adjudication package.",
      "communicationSupport": "No fresh completion update found in the latest email batch.",
      "communicationLog": [
        {
          "id": "comm-pilot-02-001",
          "date": "2026-05-10",
          "subject": "DMARDs pilot completion follow-up",
          "people": "Core Team / Sean",
          "resp": "Sean / Laser AI / Review Team",
          "due": "2026-05-13",
          "status": "Needs Action",
          "summary": "Latest Laser AI completion status and availability of outputs for adjudication preparation remain unclear.",
          "linkedTaskId": "task-pilot-02-001",
          "linkedAction": "Confirm latest Laser AI progress and outputs",
          "sourceType": "MoM",
          "sourceLink": ""
        }
      ],
      "files": {
        "RIS": false,
        "PDFs": false,
        "Criteria": false,
        "Extraction": false,
        "Protocol": false,
        "Time Log": false
      },
      "stages": [
        {
          "name": "Setup / Coordination",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Abstract Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Full-text Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Data Extraction / Analysis",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        }
      ],
      "tasks": [
        {
          "id": "task-pilot-02-001",
          "task": "Confirm latest Laser AI progress and outputs",
          "owner": "Sean / Laser AI / Review Team",
          "status": "Needs Action",
          "risk": "Medium",
          "due": "2026-05-13",
          "dependency": "Vendor/team update",
          "communication": "Clarify whether remaining pilot outputs are ready for closeout and adjudication preparation.",
          "source": "MoM",
          "sourceDate": "2026-05-10"
        },
        {
          "id": "task-pilot-02-002",
          "task": "Confirm whether outputs can move toward adjudication preparation",
          "owner": "Sean / Laser AI / Review Team",
          "status": "Needs Action",
          "risk": "Medium",
          "due": "2026-05-13",
          "dependency": "Pilot completion status",
          "communication": "Confirm whether outputs are complete enough to share with Sean/data manager.",
          "source": "MoM",
          "sourceDate": "2026-05-10"
        }
      ],
      "criticalItems": [
        "Pilot output status unclear"
      ],
      "history": [],
      "milestones": {
        "onboarding": "",
        "setup": "",
        "abstract": "",
        "fullText": "",
        "extraction": "",
        "analysis": ""
      },
      "workflowStatus": {},
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Pilot completion check",
        "targetDate": "2026-05-13",
        "variance": "Pilot output status still unclear.",
        "assessment": "Needs Action"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "Needs Action",
          "state": "Needs Action"
        },
        {
          "label": "Target",
          "value": "2026-05-13",
          "state": "Needs Action"
        },
        {
          "label": "Tool",
          "value": "TBD",
          "state": "Needs Action"
        }
      ]
    }
  ],
  "phase1": [
    {
      "id": "phase1-01",
      "title": "Blood pressure targets for hypertension in people with diabetes mellitus",
      "shortName": "BP Targets",
      "phase": "Phase 1",
      "status": "In Progress",
      "tool": "Laser AI",
      "lead": "Doreen Larvie",
      "risk": "Low",
      "currentStage": "Check-in scheduled / Abstract screening setup readiness",
      "currentUpdate": "Sean and Doreen have aligned on data-item instructions. Laser AI setup/readiness can proceed.",
      "nextAction": "Use 19 May check-in to confirm Laser AI setup, time tracking, and next screening steps.",
      "communicationSupport": "Sean and Doreen have aligned on data-item instructions. Laser AI setup/readiness can proceed.",
      "communicationLog": [
        {
          "id": "comm-phase1-01-001",
          "date": "2026-05-14",
          "subject": "BP Targets data items finalization",
          "people": "Sean Gardner",
          "resp": "Sean / Meghan / Response Team",
          "due": "2026-05-15",
          "status": "Complete / Under Review",
          "summary": "Sean uploaded the final data items file after moving the instruction “Record timepoint, if applicable” into the instruction field for outcome data items.",
          "linkedTaskId": "task-phase1-01-002",
          "linkedAction": "Confirm use of final data items file",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-01-002",
          "date": "2026-05-14",
          "subject": "BP Targets confirmation",
          "people": "Doreen Larvie",
          "resp": "Krishna / Response Team",
          "due": "2026-05-15",
          "status": "Complete",
          "summary": "Doreen confirmed that Sean’s final minor change makes sense.",
          "linkedTaskId": "task-phase1-01-002",
          "linkedAction": "Confirm use of final data items file",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-01-003",
          "date": "2026-05-14",
          "subject": "BP Targets team check-in invitation",
          "people": "Krishna",
          "resp": "Doreen Larvie / Review Team",
          "due": "2026-05-19",
          "status": "Sent",
          "summary": "Check-in email sent to understand progress, issues encountered, and support needs for the Blood pressure targets review.",
          "linkedTaskId": "task-phase1-01-004",
          "linkedAction": "Validate abstract screening setup before screening starts",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-01-020",
          "date": "2026-05-17",
          "subject": "Blood Pressure check-in confirmations",
          "people": "UBC Team",
          "resp": "Krishna",
          "due": "2026-05-19",
          "status": "Scheduled",
          "summary": "Jim Wright, Ciprian Jauca, and Guillaume Grenet accepted the Blood Pressure check-in. Gerald declined due to conflict.",
          "linkedTaskId": "task-phase1-01-010",
          "linkedAction": "Prepare agenda for 19 May Blood Pressure check-in",
          "sourceType": "Calendar",
          "sourceLink": ""
        }
      ],
      "files": {
        "RIS": true,
        "PDFs": false,
        "Criteria": true,
        "Extraction": true,
        "Protocol": true,
        "Time Log": false
      },
      "stages": [
        {
          "name": "Setup / Coordination",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Abstract Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Full-text Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Data Extraction / Analysis",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        }
      ],
      "tasks": [
        {
          "id": "task-phase1-01-001",
          "task": "Complete Laser AI setup readiness",
          "owner": "Response Team / Laser AI",
          "status": "In Progress",
          "risk": "Medium",
          "due": "2026-05-15",
          "dependency": "Final data items and review materials",
          "communication": "Proceed with Laser AI setup using the final data items file uploaded by Sean.",
          "source": "Email",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-01-002",
          "task": "Confirm use of final data items file",
          "owner": "Sean / Meghan / Response Team",
          "status": "Complete",
          "risk": "Low",
          "due": "2026-05-15",
          "dependency": "Final data items file",
          "communication": "Sean uploaded the final data items file and Doreen confirmed the final change makes sense.",
          "source": "Email",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-01-003",
          "task": "Confirm Clockify or alternate time-tracking setup",
          "owner": "Krishna",
          "status": "Complete",
          "risk": "Medium",
          "due": "Immediate",
          "dependency": "Reviewer time capture",
          "communication": "Offer Clockify or a simple manual stopwatch/Excel method if easier for the review team.",
          "source": "MoM",
          "sourceDate": "2026-05-10"
        },
        {
          "id": "task-phase1-01-004",
          "task": "Validate abstract screening setup before screening starts",
          "owner": "Review Team / Response Team",
          "status": "Pending",
          "risk": "Medium",
          "due": "After setup",
          "dependency": "Setup completion",
          "communication": "Do not mark abstract screening active until the setup is validated and reviewers begin screening.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-01-010",
          "task": "Prepare agenda for 19 May Blood Pressure check-in",
          "owner": "Krishna",
          "status": "In Progress",
          "risk": "Medium",
          "due": "2026-05-19",
          "dependency": "Review-team meeting",
          "communication": "Jim Wright, Ciprian Jauca, and Guillaume Grenet accepted; Gerald declined due to conflict.",
          "source": "Calendar",
          "sourceDate": "2026-05-17"
        }
      ],
      "criticalItems": [
        "Data items finalization recently resolved"
      ],
      "history": [],
      "milestones": {
        "onboarding": "Complete",
        "setup": "Active",
        "abstract": "",
        "fullText": "",
        "extraction": "",
        "analysis": ""
      },
      "workflowStatus": {
        "w01": "Complete",
        "w02": "Complete",
        "w03": "Complete",
        "w04": "Complete",
        "w05": "Complete",
        "w06": "Complete",
        "w07": "Complete",
        "w08": "Complete",
        "w09": "Complete",
        "w10": "Complete",
        "w11": "Complete",
        "w12": "Complete",
        "w13": "Complete",
        "w14": "Complete",
        "w15": "In Progress",
        "w16": "In Progress"
      },
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Check-in scheduled / Abstract screening setup readiness",
        "targetDate": "2026-05-19",
        "variance": "Data extraction comparability issue appears resolved; final data items now uploaded by Sean.",
        "assessment": "In Progress"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "In Progress",
          "state": "In Progress"
        },
        {
          "label": "Target",
          "value": "2026-05-19",
          "state": "In Progress"
        },
        {
          "label": "Tool",
          "value": "Laser AI",
          "state": "In Progress"
        }
      ]
    },
    {
      "id": "phase1-02",
      "title": "Systemic pharmacological treatments for chronic plaque psoriasis",
      "shortName": "Psoriasis",
      "phase": "Phase 1",
      "status": "In Progress",
      "tool": "Nested Knowledge",
      "lead": "Laurence Le Cleach / Sivem Afach",
      "risk": "Low",
      "currentStage": "Check-in scheduled / Abstract screening appears completed or near-complete; Sean has been asked to confirm data quality. full-text set up done.",
      "currentUpdate": "Sivem confirmed that the conventional approach will be followed and standalone columns will be added for all additional data items",
      "nextAction": "Confirm remaining full-text gaps with review team and proceed with full-text readiness once unresolved PDFs/access issues are handled. 19 May catch-up to confirm abstract screening completion, survey completion",
      "communicationSupport": "Sivem confirmed that the conventional approach will be followed and standalone columns will be added for all additional data items",
      "communicationLog": [
        {
          "id": "comm-phase1-02-001",
          "date": "2026-05-14",
          "subject": "Nested Knowledge full-text issue update",
          "people": "Ranita Tarchand",
          "resp": "Nested Knowledge / Meghan / Review Team",
          "due": "2026-05-15",
          "status": "In Progress",
          "summary": "Nested Knowledge completed action items #1 and #2 inside the Plaque Psoriasis project: trial registries with PDFs were added through CT.gov integration and multi-abstract PDFs were snipped to include the relevant abstract.",
          "linkedTaskId": "task-phase1-02-001",
          "linkedAction": "Confirm remaining full-text gaps with review team",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-02-002",
          "date": "2026-05-14",
          "subject": "Remaining full-text access gaps",
          "people": "Ranita Tarchand",
          "resp": "Review Team / Meghan",
          "due": "2026-05-15",
          "status": "Waiting on Others",
          "summary": "Nested Knowledge reviewed records without full text and commented on records where a full text could not be sourced or was restricted behind a paywall.",
          "linkedTaskId": "task-phase1-02-001",
          "linkedAction": "Confirm remaining full-text gaps with review team",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-02-003",
          "date": "2026-05-14",
          "subject": "Psoriasis team check-in invitation",
          "people": "Krishna",
          "resp": "Laurence Le Cleach / Sivem Afach",
          "due": "2026-05-19",
          "status": "Sent",
          "summary": "Check-in email sent to understand current progress, issues encountered, and support needs for the psoriasis review.",
          "linkedTaskId": "task-phase1-02-003",
          "linkedAction": "Confirm full-text criteria and handling of remaining full-text issues",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-02-020",
          "date": "2026-05-17",
          "subject": "Psoriasis extraction structure confirmation",
          "people": "Sivem Afach",
          "resp": "Sean / Krishna / Meghan",
          "due": "2026-05-19",
          "status": "Complete",
          "summary": "Sivem confirmed that the conventional approach will be followed and standalone columns will be added for all additional data items.",
          "linkedTaskId": "task-phase1-02-012",
          "linkedAction": "Prepare agenda for 19 May Psoriasis catch-up",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-02-021",
          "date": "2026-05-17",
          "subject": "Psoriasis catch-up confirmation",
          "people": "Gerald / Laurence / Sivem",
          "resp": "Krishna",
          "due": "2026-05-19",
          "status": "Scheduled",
          "summary": "Gerald accepted the Psoriasis catch-up; Laurence and Sivem indicated 9 AM EST on 19 May works.",
          "linkedTaskId": "task-phase1-02-012",
          "linkedAction": "Prepare agenda for 19 May Psoriasis catch-up",
          "sourceType": "Calendar / Email",
          "sourceLink": ""
        }
      ],
      "files": {
        "RIS": true,
        "PDFs": true,
        "Criteria": false,
        "Extraction": false,
        "Protocol": true,
        "Time Log": true,
        "Survey": false
      },
      "stages": [
        {
          "name": "Setup / Coordination",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Abstract Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Full-text Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Data Extraction / Analysis",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        }
      ],
      "tasks": [
        {
          "id": "task-phase1-02-001",
          "task": "Confirm remaining full-text gaps with review team",
          "owner": "Review Team / Meghan / Nested Knowledge",
          "status": "Waiting on Others",
          "risk": "Medium",
          "due": "2026-05-15",
          "dependency": "Remaining unavailable or paywalled full texts",
          "communication": "Nested Knowledge commented on unavailable or paywalled records; confirm whether review team can source remaining files.",
          "source": "Email",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-02-002",
          "task": "Confirm full-text readiness and transition to screening",
          "owner": "Meghan / Nested Knowledge / Review Team",
          "status": "Complete",
          "risk": "Low",
          "due": "2026-05-17",
          "dependency": "NK full-text readiness confirmation",
          "communication": "Full-text screening is now ready in Nested Knowledge, with only 1 study out of 305 not located.",
          "source": "Email",
          "sourceDate": "2026-05-17"
        },
        {
          "id": "task-phase1-02-003",
          "task": "Confirm full-text criteria and handling of remaining full-text issues",
          "owner": "Review Team / Sean",
          "status": "Needs Action",
          "risk": "Medium",
          "due": "2026-05-15",
          "dependency": "Eligibility criteria and full-text package",
          "communication": "Confirm criteria before full-text AI setup proceeds.",
          "source": "MoM",
          "sourceDate": "2026-05-10"
        },
        {
          "id": "task-phase1-02-004",
          "task": "Awating Sean confirmation for abstract screenign completion. Send usability survey after abstract screening completion",
          "owner": "Sean / Krishna",
          "status": "Pending",
          "risk": "Medium",
          "due": "2026-05-18",
          "dependency": "Abstract screening completion",
          "communication": "Sivem confirmed they will complete the usability survey once Krishna sends the link. Krishna Wating for sean Confimration",
          "source": "Project tracking",
          "sourceDate": "2026-05-18"
        },
        {
          "id": "task-phase1-02-011",
          "task": "Confirm abstract screening completion and data quality with Sean",
          "owner": "Krishna / Sean",
          "status": "Pending",
          "risk": "High",
          "due": "2026-05-18",
          "dependency": "Abstract screening data",
          "communication": "Krishna emailed Sean asking whether Sivem’s review completed abstract screening and whether data looks okay.",
          "source": "Email",
          "sourceDate": "2026-05-16"
        },
        {
          "id": "task-phase1-02-012",
          "task": "Prepare agenda for 19 May Psoriasis catch-up",
          "owner": "Krishna",
          "status": "In Progress",
          "risk": "Medium",
          "due": "2026-05-19",
          "dependency": "Review-team meeting",
          "communication": "Gerald, Laurence, and Sivem confirmed availability for the catch-up.",
          "source": "Email / Calendar",
          "sourceDate": "2026-05-17"
        }
      ],
      "criticalItems": [
        "Remaining full-text gaps",
        "Full-text criteria still need confirmation",
        "Usability survey link pending"
      ],
      "history": [],
      "milestones": {
        "onboarding": "Complete",
        "setup": "Complete",
        "abstract": "Active",
        "fullText": "",
        "extraction": "",
        "analysis": ""
      },
      "workflowStatus": {
        "w01": "Complete",
        "w02": "Complete",
        "w03": "Complete",
        "w04": "Complete",
        "w05": "Complete",
        "w06": "Complete",
        "w07": "Complete",
        "w08": "Complete",
        "w09": "Complete",
        "w10": "Complete",
        "w11": "Complete",
        "w12": "Complete",
        "w13": "Complete",
        "w14": "Complete",
        "w15": "Complete",
        "w16": "Complete",
        "w17": "In Progress",
        "w18": "In Progress",
        "w26": "Complete",
        "w27": "Complete",
        "w28": "Complete",
        "w29": "Complete",
        "w30": "In Progress",
        "w45": "In Progress"
      },
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Check-in scheduled / Abstract screening appears completed or near-complete; Sean has been asked to confirm data quality. full-text set up done.",
        "targetDate": "2026-05-15",
        "variance": "Full-text issue resolved by Nested Knowledge; Usability survey link still needs to be sent and completion tracked.",
        "assessment": "In Progress"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "In Progress",
          "state": "In Progress"
        },
        {
          "label": "Target",
          "value": "2026-05-15",
          "state": "In Progress"
        },
        {
          "label": "Tool",
          "value": "Nested Knowledge",
          "state": "In Progress"
        }
      ]
    },
    {
      "id": "phase1-03",
      "title": "Interventions for increasing fruit and vegetable consumption in children aged five years and under",
      "shortName": "Fruit & Veg",
      "phase": "Phase 1",
      "status": "Starts 20 May",
      "tool": "Allocated tool pending",
      "lead": "Rebecca K. Hodder",
      "risk": "Medium",
      "currentStage": "Training and setup planning",
      "currentUpdate": "Search is expected around 20 May; training and tool setup should be timed closer to active start.",
      "nextAction": "Confirm allocated tool, review team access, and collect RIS/search results after the scheduled search.",
      "communicationSupport": "Search is expected around 20 May; training and tool setup should be timed closer to active start.",
      "communicationLog": [
        {
          "id": "comm-phase1-03-001",
          "date": "2026-05-08",
          "subject": "Fruit and vegetable search timing",
          "people": "Rebecca K. Hodder / Review Team",
          "resp": "Krishna / Response Team",
          "due": "2026-05-20",
          "status": "Waiting on Others",
          "summary": "Search is expected around 20 May; setup and training should be aligned closer to the active start date.",
          "linkedTaskId": "task-phase1-03-003",
          "linkedAction": "Collect search results after 20 May search",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-03-002",
          "date": "2026-05-14",
          "subject": "Fruit and vegetable setup planning",
          "people": "Krishna",
          "resp": "Review Team / Response Team",
          "due": "2026-05-20",
          "status": "Pending",
          "summary": "Need to confirm allocated tool, review team access, and collect RIS/search results after the scheduled search.",
          "linkedTaskId": "task-phase1-03-001",
          "linkedAction": "Confirm allocated AI tool and review team access",
          "sourceType": "Project tracking",
          "sourceLink": ""
        }
      ],
      "files": {
        "RIS": false,
        "PDFs": false,
        "Criteria": false,
        "Extraction": false,
        "Protocol": false,
        "Time Log": false
      },
      "stages": [
        {
          "name": "Setup / Coordination",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Abstract Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Full-text Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Data Extraction / Analysis",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        }
      ],
      "tasks": [
        {
          "id": "task-phase1-03-001",
          "task": "Confirm allocated AI tool and review team access",
          "owner": "Krishna / Response Team",
          "status": "Pending",
          "risk": "Medium",
          "due": "2026-05-20",
          "dependency": "Tool allocation",
          "communication": "Confirm logins and reviewer access before setup.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-03-002",
          "task": "Arrange allocated tool training closer to study start date",
          "owner": "Krishna / Tool Team",
          "status": "Not Started",
          "risk": "Medium",
          "due": "Closer to start date",
          "dependency": "Tool allocation",
          "communication": "Schedule training near active start.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-03-003",
          "task": "Collect search results after 20 May search",
          "owner": "Review Team",
          "status": "Waiting on Others",
          "risk": "Medium",
          "due": "After 20 May",
          "dependency": "Search completion",
          "communication": "Ask team to share RIS/search results after scheduled search.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-03-004",
          "task": "Begin setup only after RIS and review materials are available",
          "owner": "Response Team",
          "status": "Not Started",
          "risk": "Medium",
          "due": "After materials received",
          "dependency": "RIS and review materials",
          "communication": "Start setup only when materials are available.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        }
      ],
      "criticalItems": [
        "RIS/search results not yet available",
        "Tool allocation pending"
      ],
      "history": [],
      "milestones": {
        "onboarding": "",
        "setup": "",
        "abstract": "",
        "fullText": "",
        "extraction": "",
        "analysis": ""
      },
      "workflowStatus": {
        "w01": "Complete",
        "w02": "Complete",
        "w03": "Complete",
        "w04": "Not Started",
        "w05": "Not Started",
        "w07": "Not Started",
        "w10": "Not Started",
        "w11": "Not Started",
        "w15": "Not Started"
      },
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Training and setup planning",
        "targetDate": "2026-05-20",
        "variance": "Waiting for search/RIS before setup can proceed.",
        "assessment": "In Progress"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "Starts 20 May",
          "state": "Starts 20 May"
        },
        {
          "label": "Target",
          "value": "2026-05-20",
          "state": "Starts 20 May"
        },
        {
          "label": "Tool",
          "value": "Allocated tool pending",
          "state": "Starts 20 May"
        }
      ]
    },
    {
      "id": "phase1-04",
      "title": "Screening for genital chlamydia infection",
      "shortName": "Chlamydia",
      "phase": "Phase 1",
      "status": "Under Review",
      "tool": "AI tool pending",
      "lead": "Elena Kostov",
      "risk": "High",
      "currentStage": "Confirmation and onboarding readiness",
      "currentUpdate": "Candidate review remains under consideration. Setup should begin only after eligibility, participation, timeline, and tool allocation are confirmed.",
      "nextAction": "Confirm eligibility, participation, timeline, and allocated AI tool before setup.",
      "communicationSupport": "Candidate review remains under consideration. Setup should begin only after eligibility, participation, timeline, and tool allocation are confirmed.",
      "communicationLog": [
        {
          "id": "comm-phase1-04-001",
          "date": "2026-05-08",
          "subject": "Chlamydia candidate tracking",
          "people": "Elena Kostov / Core Team",
          "resp": "Krishna / Gerald / Ella",
          "due": "2026-05-15",
          "status": "Under Review",
          "summary": "Screening for genital chlamydia infection remains under review as a possible Phase 1 review. Eligibility, participation, timeline, and tool allocation need confirmation before setup.",
          "linkedTaskId": "task-phase1-04-001",
          "linkedAction": "Confirm review eligibility and participation",
          "sourceType": "Email",
          "sourceLink": ""
        }
      ],
      "files": {
        "RIS": false,
        "PDFs": false,
        "Criteria": false,
        "Extraction": false,
        "Protocol": false,
        "Time Log": false
      },
      "stages": [
        {
          "name": "Setup / Coordination",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Abstract Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Full-text Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Data Extraction / Analysis",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        }
      ],
      "tasks": [
        {
          "id": "task-phase1-04-001",
          "task": "Confirm review eligibility and participation",
          "owner": "Core Team / Review Team",
          "status": "Under Review",
          "risk": "High",
          "due": "2026-05-15",
          "dependency": "Review confirmation",
          "communication": "Confirm whether this review can be included in Phase 1.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-04-002",
          "task": "Confirm review timeline and start date",
          "owner": "Krishna / Review Team",
          "status": "Pending",
          "risk": "Medium",
          "due": "TBD",
          "dependency": "Team availability",
          "communication": "Agree realistic start date only if review is confirmed.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-04-003",
          "task": "Confirm allocated AI tool after eligibility decision",
          "owner": "Core Team",
          "status": "Pending",
          "risk": "Medium",
          "due": "TBD",
          "dependency": "Eligibility decision",
          "communication": "Assign one AI tool only after eligibility and participation are confirmed.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-04-004",
          "task": "Hold setup materials request until confirmation",
          "owner": "Krishna / Review Team",
          "status": "Not Started",
          "risk": "Low",
          "due": "After confirmation",
          "dependency": "Eligibility and allocation",
          "communication": "Do not request RIS, PDFs, criteria, or extraction materials until the review is confirmed.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        }
      ],
      "criticalItems": [
        "Eligibility and participation not confirmed"
      ],
      "history": [],
      "milestones": {
        "onboarding": "",
        "setup": "",
        "abstract": "",
        "fullText": "",
        "extraction": "",
        "analysis": ""
      },
      "workflowStatus": {
        "w01": "Under Review",
        "w02": "Not Started",
        "w03": "Not Started",
        "w04": "Not Started",
        "w05": "Not Started",
        "w07": "Not Started",
        "w10": "Not Started",
        "w15": "Not Started"
      },
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Confirmation and onboarding readiness",
        "targetDate": "2026-05-15",
        "variance": "Candidate still requires confirmation before becoming active Phase 1 review.",
        "assessment": "Under Review"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "Under Review",
          "state": "Under Review"
        },
        {
          "label": "Target",
          "value": "2026-05-15",
          "state": "Under Review"
        },
        {
          "label": "Tool",
          "value": "AI tool pending",
          "state": "Under Review"
        }
      ]
    },
    {
      "id": "phase1-05",
      "title": "Review 5 TBD",
      "shortName": "Review 5 TBD",
      "phase": "Phase 1",
      "status": "TBD",
      "tool": "AI tool pending",
      "lead": "Core Team",
      "risk": "High",
      "currentStage": "Additional review identification",
      "currentUpdate": "Additional eligible review still needs to be identified or confirmed for Phase 1.",
      "nextAction": "Identify and confirm one additional eligible Cochrane review for Phase 1.",
      "communicationSupport": "Additional eligible review still needs to be identified or confirmed for Phase 1.",
      "communicationLog": [
        {
          "id": "comm-phase1-05-001",
          "date": "2026-05-14",
          "subject": "Additional Phase 1 review slot",
          "people": "Core Team",
          "resp": "Krishna / Core Team",
          "due": "2026-05-19",
          "status": "Under Review",
          "summary": "One additional eligible review still needs to be identified or confirmed for Phase 1.",
          "linkedTaskId": "task-phase1-05-001",
          "linkedAction": "Identify additional eligible review",
          "sourceType": "Project tracking",
          "sourceLink": ""
        }
      ],
      "files": {
        "RIS": false,
        "PDFs": false,
        "Criteria": false,
        "Extraction": false,
        "Protocol": false,
        "Time Log": false
      },
      "stages": [
        {
          "name": "Setup / Coordination",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Abstract Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Full-text Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Data Extraction / Analysis",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        }
      ],
      "tasks": [
        {
          "id": "task-phase1-05-001",
          "task": "Identify additional eligible review",
          "owner": "Core Team",
          "status": "Under Review",
          "risk": "High",
          "due": "2026-05-19",
          "dependency": "Candidate pool",
          "communication": "Shortlist review options.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-05-002",
          "task": "Confirm team availability after candidate selection",
          "owner": "Krishna / Review Team",
          "status": "Not Started",
          "risk": "Medium",
          "due": "TBD",
          "dependency": "Review identification",
          "communication": "Contact review team once candidate is selected.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-05-003",
          "task": "Assign allocated AI tool after candidate selection",
          "owner": "Core Team",
          "status": "Not Started",
          "risk": "Medium",
          "due": "TBD",
          "dependency": "Tool allocation",
          "communication": "Assign one tool only after a review is selected.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        },
        {
          "id": "task-phase1-05-004",
          "task": "Hold onboarding until review is confirmed",
          "owner": "Krishna / Response Team",
          "status": "Not Started",
          "risk": "Low",
          "due": "After confirmation",
          "dependency": "Review and tool confirmation",
          "communication": "Start onboarding only after candidate and tool are confirmed.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        }
      ],
      "criticalItems": [
        "Open Phase 1 review slot"
      ],
      "history": [],
      "milestones": {
        "onboarding": "",
        "setup": "",
        "abstract": "",
        "fullText": "",
        "extraction": "",
        "analysis": ""
      },
      "workflowStatus": {
        "w01": "Under Review",
        "w02": "Not Started",
        "w03": "Not Started",
        "w04": "Not Started",
        "w05": "Not Started"
      },
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Additional review identification",
        "targetDate": "2026-05-19",
        "variance": "Open Phase 1 slot remains pending.",
        "assessment": "Under Review"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "TBD",
          "state": "TBD"
        },
        {
          "label": "Target",
          "value": "2026-05-19",
          "state": "TBD"
        },
        {
          "label": "Tool",
          "value": "AI tool pending",
          "state": "TBD"
        }
      ]
    }
  ],
  "phase2": [
    {
      "id": "phase2-01",
      "title": "Phase 2 Batch",
      "shortName": "Phase 2 Batch",
      "phase": "Phase 2",
      "status": "Scheduled",
      "tool": "TBD",
      "lead": "TBD",
      "risk": "Medium",
      "currentStage": "Future batch planning",
      "currentUpdate": "No update recorded.",
      "nextAction": "Keep placeholders until Phase 1 stabilizes.",
      "communicationSupport": "No update recorded.",
      "communicationLog": [],
      "files": {
        "RIS": false,
        "PDFs": false,
        "Criteria": false,
        "Extraction": false,
        "Protocol": false,
        "Time Log": false
      },
      "stages": [
        {
          "name": "Setup / Coordination",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Abstract Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Full-text Screening",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Data Extraction / Analysis",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        }
      ],
      "tasks": [
        {
          "id": "task-phase2-01-001",
          "task": "Keep Phase 2 placeholder until Phase 1 stabilizes",
          "owner": "Krishna / Core Team",
          "status": "Scheduled",
          "risk": "Medium",
          "due": "After Phase 1",
          "dependency": "Phase 1 lessons learned",
          "communication": "Use Phase 1 lessons before scaling Phase 2.",
          "source": "Project tracking",
          "sourceDate": "2026-05-14"
        }
      ],
      "criticalItems": [],
      "history": [],
      "milestones": {
        "onboarding": "",
        "setup": "",
        "abstract": "",
        "fullText": "",
        "extraction": "",
        "analysis": ""
      },
      "workflowStatus": {},
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Future batch planning",
        "targetDate": "TBD",
        "variance": "Phase 2 depends on Phase 1 stabilization and lessons learned.",
        "assessment": "Not Started"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "Scheduled",
          "state": "Scheduled"
        },
        {
          "label": "Target",
          "value": "TBD",
          "state": "Scheduled"
        },
        {
          "label": "Tool",
          "value": "TBD",
          "state": "Scheduled"
        }
      ]
    }
  ],
  "momActions": [],
  "mainTodos": [
    {
      "task": "Complete Laser AI setup readiness",
      "owner": "Response Team / Laser AI",
      "status": "In Progress",
      "due": "2026-05-15",
      "dependency": "Final data items and review materials",
      "linkedReviewId": "phase1-01",
      "communication": "Proceed with Laser AI setup using the final data items file uploaded by Sean."
    },
    {
      "task": "Confirm remaining full-text gaps with review team",
      "owner": "Review Team / Meghan / Nested Knowledge",
      "status": "Waiting on Others",
      "due": "2026-05-15",
      "dependency": "Remaining unavailable or paywalled full texts",
      "linkedReviewId": "phase1-02",
      "communication": "Nested Knowledge commented on unavailable or paywalled records; confirm whether review team can source remaining files."
    },
    {
      "task": "Confirm allocated AI tool and review team access",
      "owner": "Krishna / Response Team",
      "status": "Pending",
      "due": "2026-05-20",
      "dependency": "Tool allocation",
      "linkedReviewId": "phase1-03",
      "communication": "Confirm logins and reviewer access before setup."
    },
    {
      "task": "Confirm review eligibility and participation",
      "owner": "Core Team / Review Team",
      "status": "Under Review",
      "due": "2026-05-15",
      "dependency": "Review confirmation",
      "linkedReviewId": "phase1-04",
      "communication": "Confirm whether this review can be included in Phase 1."
    },
    {
      "task": "Identify additional eligible review",
      "owner": "Core Team",
      "status": "Under Review",
      "due": "2026-05-19",
      "dependency": "Candidate pool",
      "linkedReviewId": "phase1-05",
      "communication": "Shortlist review options."
    },
    {
      "task": "Keep Phase 2 placeholder until Phase 1 stabilizes",
      "owner": "Krishna / Core Team",
      "status": "Scheduled",
      "due": "After Phase 1",
      "dependency": "Phase 1 lessons learned",
      "linkedReviewId": "phase2-01",
      "communication": "Use Phase 1 lessons before scaling Phase 2."
    },
    {
      "task": "Verify Matteo time-on-task values",
      "owner": "Krishna / Amin",
      "status": "Complete",
      "due": "2026-05-10",
      "dependency": "Matteo self-reported time",
      "linkedReviewId": "pilot-01",
      "communication": "Check whether reported title/abstract and data extraction times are sufficiently reliable for pilot note."
    },
    {
      "task": "Confirm latest Laser AI progress and outputs",
      "owner": "Sean / Laser AI / Review Team",
      "status": "Needs Action",
      "due": "2026-05-13",
      "dependency": "Vendor/team update",
      "linkedReviewId": "pilot-02",
      "communication": "Clarify whether remaining pilot outputs are ready for closeout and adjudication preparation."
    },
    {
      "task": "Confirm use of final data items file",
      "owner": "Sean / Meghan / Response Team",
      "status": "Complete",
      "due": "2026-05-15",
      "dependency": "Final data items file",
      "linkedReviewId": "phase1-01",
      "communication": "Sean uploaded the final data items file and Doreen confirmed the final change makes sense."
    },
    {
      "task": "Confirm full-text readiness and transition to screening",
      "owner": "Meghan / Nested Knowledge / Review Team",
      "status": "Complete",
      "due": "2026-05-17",
      "dependency": "NK full-text readiness confirmation",
      "linkedReviewId": "phase1-02",
      "communication": "Full-text screening is now ready in Nested Knowledge, with only 1 study out of 305 not located."
    },
    {
      "task": "Arrange allocated tool training closer to study start date",
      "owner": "Krishna / Tool Team",
      "status": "Not Started",
      "due": "Closer to start date",
      "dependency": "Tool allocation",
      "linkedReviewId": "phase1-03",
      "communication": "Schedule training near active start."
    },
    {
      "task": "Confirm review timeline and start date",
      "owner": "Krishna / Review Team",
      "status": "Pending",
      "due": "TBD",
      "dependency": "Team availability",
      "linkedReviewId": "phase1-04",
      "communication": "Agree realistic start date only if review is confirmed."
    },
    {
      "task": "Confirm team availability after candidate selection",
      "owner": "Krishna / Review Team",
      "status": "Not Started",
      "due": "TBD",
      "dependency": "Review identification",
      "linkedReviewId": "phase1-05",
      "communication": "Contact review team once candidate is selected."
    },
    {
      "task": "Consolidate usability survey receipt",
      "owner": "Susan",
      "status": "Pending",
      "due": "2026-05-10",
      "dependency": "Survey access",
      "linkedReviewId": "pilot-01",
      "communication": "Matteo said all surveys were submitted; confirm in survey system."
    },
    {
      "task": "Confirm whether outputs can move toward adjudication preparation",
      "owner": "Sean / Laser AI / Review Team",
      "status": "Needs Action",
      "due": "2026-05-13",
      "dependency": "Pilot completion status",
      "linkedReviewId": "pilot-02",
      "communication": "Confirm whether outputs are complete enough to share with Sean/data manager."
    },
    {
      "task": "Confirm Clockify or alternate time-tracking setup",
      "owner": "Krishna",
      "status": "Complete",
      "due": "Immediate",
      "dependency": "Reviewer time capture",
      "linkedReviewId": "phase1-01",
      "communication": "Offer Clockify or a simple manual stopwatch/Excel method if easier for the review team."
    },
    {
      "task": "Confirm full-text criteria and handling of remaining full-text issues",
      "owner": "Review Team / Sean",
      "status": "Needs Action",
      "due": "2026-05-15",
      "dependency": "Eligibility criteria and full-text package",
      "linkedReviewId": "phase1-02",
      "communication": "Confirm criteria before full-text AI setup proceeds."
    },
    {
      "task": "Collect search results after 20 May search",
      "owner": "Review Team",
      "status": "Waiting on Others",
      "due": "After 20 May",
      "dependency": "Search completion",
      "linkedReviewId": "phase1-03",
      "communication": "Ask team to share RIS/search results after scheduled search."
    },
    {
      "task": "Confirm allocated AI tool after eligibility decision",
      "owner": "Core Team",
      "status": "Pending",
      "due": "TBD",
      "dependency": "Eligibility decision",
      "linkedReviewId": "phase1-04",
      "communication": "Assign one AI tool only after eligibility and participation are confirmed."
    },
    {
      "task": "Assign allocated AI tool after candidate selection",
      "owner": "Core Team",
      "status": "Not Started",
      "due": "TBD",
      "dependency": "Tool allocation",
      "linkedReviewId": "phase1-05",
      "communication": "Assign one tool only after a review is selected."
    },
    {
      "task": "Capture lessons learned before pilot closeout",
      "owner": "Krishna / Core Team",
      "status": "In Progress",
      "due": "2026-05-10",
      "dependency": "Lessons document",
      "linkedReviewId": "pilot-01",
      "communication": "Include review retention, tool support, workload clarity, and volunteer usability points."
    },
    {
      "task": "Validate abstract screening setup before screening starts",
      "owner": "Review Team / Response Team",
      "status": "Pending",
      "due": "After setup",
      "dependency": "Setup completion",
      "linkedReviewId": "phase1-01",
      "communication": "Do not mark abstract screening active until the setup is validated and reviewers begin screening."
    },
    {
      "task": "Awating Sean confirmation for abstract screenign completion. Send usability survey after abstract screening completion",
      "owner": "Sean / Krishna",
      "status": "Pending",
      "due": "2026-05-18",
      "dependency": "Abstract screening completion",
      "linkedReviewId": "phase1-02",
      "communication": "Sivem confirmed they will complete the usability survey once Krishna sends the link. Krishna Wating for sean Confimration"
    },
    {
      "task": "Begin setup only after RIS and review materials are available",
      "owner": "Response Team",
      "status": "Not Started",
      "due": "After materials received",
      "dependency": "RIS and review materials",
      "linkedReviewId": "phase1-03",
      "communication": "Start setup only when materials are available."
    },
    {
      "task": "Hold setup materials request until confirmation",
      "owner": "Krishna / Review Team",
      "status": "Not Started",
      "due": "After confirmation",
      "dependency": "Eligibility and allocation",
      "linkedReviewId": "phase1-04",
      "communication": "Do not request RIS, PDFs, criteria, or extraction materials until the review is confirmed."
    },
    {
      "task": "Hold onboarding until review is confirmed",
      "owner": "Krishna / Response Team",
      "status": "Not Started",
      "due": "After confirmation",
      "dependency": "Review and tool confirmation",
      "linkedReviewId": "phase1-05",
      "communication": "Start onboarding only after candidate and tool are confirmed."
    },
    {
      "task": "Prepare agenda for 19 May Blood Pressure check-in",
      "owner": "Krishna",
      "status": "In Progress",
      "due": "2026-05-19",
      "dependency": "Review-team meeting",
      "linkedReviewId": "phase1-01",
      "communication": "Jim Wright, Ciprian Jauca, and Guillaume Grenet accepted; Gerald declined due to conflict."
    },
    {
      "task": "Confirm abstract screening completion and data quality with Sean",
      "owner": "Krishna / Sean",
      "status": "Pending",
      "due": "2026-05-18",
      "dependency": "Abstract screening data",
      "linkedReviewId": "phase1-02",
      "communication": "Krishna emailed Sean asking whether Sivem’s review completed abstract screening and whether data looks okay."
    },
    {
      "task": "Prepare agenda for 19 May Psoriasis catch-up",
      "owner": "Krishna",
      "status": "In Progress",
      "due": "2026-05-19",
      "dependency": "Review-team meeting",
      "linkedReviewId": "phase1-02",
      "communication": "Gerald, Laurence, and Sivem confirmed availability for the catch-up."
    },
    {
      "task": "Full-text time not reported",
      "owner": "Krishna / Amin",
      "status": "Needs Action",
      "due": "2026-05-10",
      "dependency": "Pilot closeout evidence may have incomplete time-on-task data.",
      "linkedReviewId": "pilot-01",
      "communication": "Document full-text time as not reported and verify whether any additional time record exists."
    },
    {
      "task": "Data items finalization recently resolved",
      "owner": "Sean / Meghan / Response Team",
      "status": "Under Review",
      "due": "2026-05-15",
      "dependency": "Using an earlier data-items version could create setup inconsistency.",
      "linkedReviewId": "phase1-01",
      "communication": "Confirm Response Team and Laser AI setup use the final data items file from 14 May."
    },
    {
      "task": "Pilot output status unclear",
      "owner": "Sean / Laser AI / Review Team",
      "status": "Needs Action",
      "due": "2026-05-13",
      "dependency": "May delay pilot closeout and adjudication preparation.",
      "linkedReviewId": "pilot-02",
      "communication": "Confirm latest completion status and whether outputs are ready for Sean/adjudication package."
    },
    {
      "task": "Remaining full-text gaps",
      "owner": "Review Team / Meghan / Nested Knowledge",
      "status": "Under Review",
      "due": "2026-05-19",
      "dependency": "Minimal remaining risk from 1 unresolved full text.",
      "linkedReviewId": "phase1-02",
      "communication": "Confirm whether the single missing full text should be documented or manually retrieved."
    },
    {
      "task": "Full-text criteria still need confirmation",
      "owner": "Review Team / Sean",
      "status": "Needs Action",
      "due": "2026-05-15",
      "dependency": "Risk of incorrect full-text setup or inconsistent eligibility decisions.",
      "linkedReviewId": "phase1-02",
      "communication": "Confirm full-text criteria and decisions on trial registries, conference abstracts, and unavailable PDFs."
    },
    {
      "task": "Usability survey link pending",
      "owner": "Krishna",
      "status": "Needs Action",
      "due": "2026-05-18",
      "dependency": "Survey data may be missed if the team advances stages before completing it.",
      "linkedReviewId": "phase1-02",
      "communication": "Send survey link immediately and track completion."
    },
    {
      "task": "Covidence workflow metadata not yet collected",
      "owner": "Krishna",
      "status": "Needs Action",
      "due": "2026-05-18",
      "dependency": "May delay decisions on extraction suggestion functionality and platform compatibility.",
      "linkedReviewId": "All",
      "communication": "Create simple form/tracker and collect Covidence/workflow metadata from active reviews."
    },
    {
      "task": "RIS/search results not yet available",
      "owner": "Review Team",
      "status": "Waiting on Others",
      "due": "2026-05-20",
      "dependency": "Tool setup cannot proceed until search/RIS materials are available.",
      "linkedReviewId": "phase1-03",
      "communication": "Collect RIS/search results after the scheduled search and then begin setup."
    },
    {
      "task": "Adjudication pilot synthesis pending",
      "owner": "Krishna / Sean / Afroditi",
      "status": "In Progress",
      "due": "2026-05-18",
      "dependency": "Without synthesis, the May 19 discussion may be less focused.",
      "linkedReviewId": "All",
      "communication": "Compile submissions and identify areas of disagreement before the pilot-results discussion."
    },
    {
      "task": "Tool allocation pending",
      "owner": "Core Team / Krishna",
      "status": "Pending",
      "due": "2026-05-20",
      "dependency": "Training and setup cannot be finalized until allocation is confirmed.",
      "linkedReviewId": "phase1-03",
      "communication": "Confirm one allocated AI tool before scheduling active tool training."
    },
    {
      "task": "Eligibility and participation not confirmed",
      "owner": "Krishna / Gerald / Ella / Review Team",
      "status": "Under Review",
      "due": "2026-05-15",
      "dependency": "Premature setup could waste Response Team and tool-provider effort.",
      "linkedReviewId": "phase1-04",
      "communication": "Confirm eligibility, participation, timeline, and allocated tool before requesting setup materials."
    },
    {
      "task": "Open Phase 1 review slot",
      "owner": "Core Team",
      "status": "Under Review",
      "due": "2026-05-19",
      "dependency": "Phase 1 sample may remain incomplete if no replacement review is confirmed.",
      "linkedReviewId": "phase1-05",
      "communication": "Use candidate pool to confirm one eligible Cochrane review and then update phase1-05."
    },
    {
      "task": "Search results not yet appraised",
      "owner": "Mohan Pammi / Review Team",
      "status": "Waiting on Others",
      "due": "TBD",
      "dependency": "Eligibility for the study is uncertain until at least one new eligible study is confirmed.",
      "linkedReviewId": "candidate-01",
      "communication": "Request confirmation after appraisal of search results."
    },
    {
      "task": "Timeline may not fit Phase 1",
      "owner": "Krishna / Core Team",
      "status": "Under Review",
      "due": "2026-05-15",
      "dependency": "May not be feasible for the active Phase 1 window.",
      "linkedReviewId": "candidate-01",
      "communication": "Ask whether screening/data extraction can occur earlier or reserve for later phase."
    },
    {
      "task": "Consent still required",
      "owner": "Krishna / Premkumar",
      "status": "Needs Action",
      "due": "2026-05-15",
      "dependency": "Cannot proceed to data use/testing without appropriate written consent.",
      "linkedReviewId": "candidate-01",
      "communication": "Request consent wording from the corresponding author."
    },
    {
      "task": "Cochrane eligibility unclear",
      "owner": "Krishna / Ella / Gerald",
      "status": "Under Review",
      "due": "2026-05-15",
      "dependency": "May be ineligible if it is not a Cochrane review/update or Cochrane-supported workflow.",
      "linkedReviewId": "candidate-02",
      "communication": "Clarify eligibility with Ella/Gerald before confirming or declining."
    },
    {
      "task": "Consent should wait until eligibility decision",
      "owner": "Krishna / Anna Joy Rogers",
      "status": "Pending",
      "due": "After eligibility confirmation",
      "dependency": "Could create confusion if requested before eligibility decision.",
      "linkedReviewId": "candidate-02",
      "communication": "Request consent only if Ella/Gerald confirm eligibility."
    },
    {
      "task": "Survey tracking table needed",
      "owner": "Krishna",
      "status": "Needs Action",
      "due": "2026-05-15",
      "dependency": "Survey response tracking may be incomplete without this table.",
      "linkedReviewId": "",
      "communication": "Prepare and share table for pilot and main study."
    },
    {
      "task": "Time tracking comparability risk",
      "owner": "Krishna / Review Teams",
      "status": "Needs Action",
      "due": "2026-05-13",
      "dependency": "Effort comparison may be inconsistent if fields are not standardized.",
      "linkedReviewId": "",
      "communication": "Allow flexible methods but require comparable fields across human and AI-assisted workflows."
    }
  ],
  "criticalItems": [
    {
      "id": "crit-pilot-01-001",
      "phase": "Pilot",
      "item": "Full-text time not reported",
      "description": "Matteo reported title/abstract and data extraction times, but full-text time was not reported.",
      "severity": "Medium",
      "status": "Needs Action",
      "owner": "Krishna / Amin",
      "due": "2026-05-10",
      "linkedReviewId": "pilot-01",
      "mitigation": "Document full-text time as not reported and verify whether any additional time record exists.",
      "impact": "Pilot closeout evidence may have incomplete time-on-task data.",
      "source": "Email",
      "sourceDate": "2026-05-07"
    },
    {
      "id": "crit-phase1-01-002",
      "phase": "Phase 1",
      "item": "Data items finalization recently resolved",
      "description": "Data extraction comparability appears resolved after Sean uploaded the final file and Doreen confirmed the change, but downstream teams should use the final version only.",
      "severity": "Low",
      "status": "Under Review",
      "owner": "Sean / Meghan / Response Team",
      "due": "2026-05-15",
      "linkedReviewId": "phase1-01",
      "mitigation": "Confirm Response Team and Laser AI setup use the final data items file from 14 May.",
      "impact": "Using an earlier data-items version could create setup inconsistency.",
      "source": "Email",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-pilot-02-001",
      "phase": "Pilot",
      "item": "Pilot output status unclear",
      "description": "Latest Laser AI completion status and output readiness for DMARDs / RA remain unclear.",
      "severity": "Medium",
      "status": "Needs Action",
      "owner": "Sean / Laser AI / Review Team",
      "due": "2026-05-13",
      "linkedReviewId": "pilot-02",
      "mitigation": "Confirm latest completion status and whether outputs are ready for Sean/adjudication package.",
      "impact": "May delay pilot closeout and adjudication preparation.",
      "source": "MoM",
      "sourceDate": "2026-05-10"
    },
    {
      "id": "crit-phase1-02-001",
      "phase": "Phase 1",
      "item": "Remaining full-text gaps",
      "description": "Full-text readiness risk has substantially reduced. Nested Knowledge full-text screening is now ready, with only 1 study out of 305 missing.",
      "severity": "Low",
      "status": "Under Review",
      "owner": "Review Team / Meghan / Nested Knowledge",
      "due": "2026-05-19",
      "linkedReviewId": "phase1-02",
      "mitigation": "Confirm whether the single missing full text should be documented or manually retrieved.",
      "impact": "Minimal remaining risk from 1 unresolved full text.",
      "source": "Email",
      "sourceDate": "2026-05-17"
    },
    {
      "id": "crit-phase1-02-002",
      "phase": "Phase 1",
      "item": "Full-text criteria still need confirmation",
      "description": "Full-text AI setup should not proceed until criteria and handling of remaining full-text issues are confirmed.",
      "severity": "Medium",
      "status": "Needs Action",
      "owner": "Review Team / Sean",
      "due": "2026-05-15",
      "linkedReviewId": "phase1-02",
      "mitigation": "Confirm full-text criteria and decisions on trial registries, conference abstracts, and unavailable PDFs.",
      "impact": "Risk of incorrect full-text setup or inconsistent eligibility decisions.",
      "source": "MoM / Email",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-phase1-02-004",
      "phase": "Phase 1",
      "item": "Usability survey link pending",
      "description": "Sivem confirmed the team will complete the abstract-screening usability survey once Krishna sends the link.",
      "severity": "High",
      "status": "Needs Action",
      "owner": "Krishna",
      "due": "2026-05-18",
      "linkedReviewId": "phase1-02",
      "mitigation": "Send survey link immediately and track completion.",
      "impact": "Survey data may be missed if the team advances stages before completing it.",
      "source": "Email",
      "sourceDate": "2026-05-16"
    },
    {
      "id": "crit-global-003",
      "phase": "All",
      "item": "Covidence workflow metadata not yet collected",
      "description": "The project has not yet collected which active Cochrane reviews use Covidence, but this is needed for the data extraction suggestion feature issue flagged by Ella and Gerald.",
      "severity": "High",
      "status": "Needs Action",
      "owner": "Krishna",
      "due": "2026-05-18",
      "linkedReviewId": "All",
      "mitigation": "Create simple form/tracker and collect Covidence/workflow metadata from active reviews.",
      "impact": "May delay decisions on extraction suggestion functionality and platform compatibility.",
      "source": "Email",
      "sourceDate": "2026-05-16"
    },
    {
      "id": "crit-phase1-03-001",
      "phase": "Phase 1",
      "item": "RIS/search results not yet available",
      "description": "Fruit & Veg search is expected around 20 May, so RIS and setup package are not yet available.",
      "severity": "Medium",
      "status": "Waiting on Others",
      "owner": "Review Team",
      "due": "2026-05-20",
      "linkedReviewId": "phase1-03",
      "mitigation": "Collect RIS/search results after the scheduled search and then begin setup.",
      "impact": "Tool setup cannot proceed until search/RIS materials are available.",
      "source": "Project tracking",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-adj-002",
      "phase": "Adjudication",
      "item": "Adjudication pilot synthesis pending",
      "description": "Adjudication pilot submissions are arriving, including Bartosz and Andreea, but outputs still need consolidation for comparison and discussion.",
      "severity": "Medium",
      "status": "In Progress",
      "owner": "Krishna / Sean / Afroditi",
      "due": "2026-05-18",
      "linkedReviewId": "All",
      "mitigation": "Compile submissions and identify areas of disagreement before the pilot-results discussion.",
      "impact": "Without synthesis, the May 19 discussion may be less focused.",
      "source": "Email",
      "sourceDate": "2026-05-16"
    },
    {
      "id": "crit-phase1-03-002",
      "phase": "Phase 1",
      "item": "Tool allocation pending",
      "description": "Allocated AI tool for Fruit & Veg is still pending.",
      "severity": "Medium",
      "status": "Pending",
      "owner": "Core Team / Krishna",
      "due": "2026-05-20",
      "linkedReviewId": "phase1-03",
      "mitigation": "Confirm one allocated AI tool before scheduling active tool training.",
      "impact": "Training and setup cannot be finalized until allocation is confirmed.",
      "source": "Project tracking",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-phase1-04-001",
      "phase": "Phase 1",
      "item": "Eligibility and participation not confirmed",
      "description": "Chlamydia review remains under review and should not move to setup until eligibility, participation, timeline, and tool allocation are confirmed.",
      "severity": "High",
      "status": "Under Review",
      "owner": "Krishna / Gerald / Ella / Review Team",
      "due": "2026-05-15",
      "linkedReviewId": "phase1-04",
      "mitigation": "Confirm eligibility, participation, timeline, and allocated tool before requesting setup materials.",
      "impact": "Premature setup could waste Response Team and tool-provider effort.",
      "source": "Project tracking",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-phase1-05-001",
      "phase": "Phase 1",
      "item": "Open Phase 1 review slot",
      "description": "One additional eligible Phase 1 review still needs to be identified or confirmed.",
      "severity": "High",
      "status": "Under Review",
      "owner": "Core Team",
      "due": "2026-05-19",
      "linkedReviewId": "phase1-05",
      "mitigation": "Use candidate pool to confirm one eligible Cochrane review and then update phase1-05.",
      "impact": "Phase 1 sample may remain incomplete if no replacement review is confirmed.",
      "source": "Project tracking",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-candidate-01-001",
      "phase": "Phase 1 Candidate",
      "item": "Search results not yet appraised",
      "description": "Human Milk Fortifier search is completed, but results have not yet been appraised.",
      "severity": "Medium",
      "status": "Waiting on Others",
      "owner": "Mohan Pammi / Review Team",
      "due": "TBD",
      "linkedReviewId": "candidate-01",
      "mitigation": "Request confirmation after appraisal of search results.",
      "impact": "Eligibility for the study is uncertain until at least one new eligible study is confirmed.",
      "source": "Email",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-candidate-01-002",
      "phase": "Phase 1 Candidate",
      "item": "Timeline may not fit Phase 1",
      "description": "Human Milk Fortifier team plans to update before December 2026, which may be too late for the current Phase 1 timeline.",
      "severity": "Medium",
      "status": "Under Review",
      "owner": "Krishna / Core Team",
      "due": "2026-05-15",
      "linkedReviewId": "candidate-01",
      "mitigation": "Ask whether screening/data extraction can occur earlier or reserve for later phase.",
      "impact": "May not be feasible for the active Phase 1 window.",
      "source": "Email",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-candidate-01-003",
      "phase": "Phase 1 Candidate",
      "item": "Consent still required",
      "description": "Explicit written consent from the corresponding author is still needed if the review proceeds.",
      "severity": "Medium",
      "status": "Needs Action",
      "owner": "Krishna / Premkumar",
      "due": "2026-05-15",
      "linkedReviewId": "candidate-01",
      "mitigation": "Request consent wording from the corresponding author.",
      "impact": "Cannot proceed to data use/testing without appropriate written consent.",
      "source": "Email",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-candidate-02-001",
      "phase": "Phase 1 Candidate",
      "item": "Cochrane eligibility unclear",
      "description": "Abdominal Irrigation is WHO-commissioned and related to a previous Cochrane Wounds review, but current Cochrane group support is unclear.",
      "severity": "High",
      "status": "Under Review",
      "owner": "Krishna / Ella / Gerald",
      "due": "2026-05-15",
      "linkedReviewId": "candidate-02",
      "mitigation": "Clarify eligibility with Ella/Gerald before confirming or declining.",
      "impact": "May be ineligible if it is not a Cochrane review/update or Cochrane-supported workflow.",
      "source": "Email",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-candidate-02-002",
      "phase": "Phase 1 Candidate",
      "item": "Consent should wait until eligibility decision",
      "description": "Consent has not yet been requested or confirmed for Abdominal Irrigation and should wait until eligibility is clarified.",
      "severity": "Medium",
      "status": "Pending",
      "owner": "Krishna / Anna Joy Rogers",
      "due": "After eligibility confirmation",
      "linkedReviewId": "candidate-02",
      "mitigation": "Request consent only if Ella/Gerald confirm eligibility.",
      "impact": "Could create confusion if requested before eligibility decision.",
      "source": "Email",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-global-001",
      "phase": "Global",
      "item": "Survey tracking table needed",
      "description": "Susan requested a table covering Cochrane review ID, team size, assigned tool, and expected timelines for screening and data extraction.",
      "severity": "Medium",
      "status": "Needs Action",
      "owner": "Krishna",
      "due": "2026-05-15",
      "linkedReviewId": "",
      "mitigation": "Prepare and share table for pilot and main study.",
      "impact": "Survey response tracking may be incomplete without this table.",
      "source": "Email",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "crit-global-002",
      "phase": "Global",
      "item": "Time tracking comparability risk",
      "description": "Review teams may use different time-tracking methods, creating comparability risk.",
      "severity": "Medium",
      "status": "Needs Action",
      "owner": "Krishna / Review Teams",
      "due": "2026-05-13",
      "linkedReviewId": "",
      "mitigation": "Allow flexible methods but require comparable fields across human and AI-assisted workflows.",
      "impact": "Effort comparison may be inconsistent if fields are not standardized.",
      "source": "MoM",
      "sourceDate": "2026-05-10"
    }
  ],
  "resources": [
    {
      "id": "res-001",
      "title": "General Information Folder",
      "type": "Folder",
      "purpose": "Central folder for review teams with onboarding, protocol, templates, and guidance.",
      "description": "Central folder for review teams with onboarding, protocol, templates, and guidance.",
      "audience": "All",
      "owner": "Krishna / Core Team",
      "status": "Active",
      "linkedReviewId": "All",
      "url": "https://cochranecollaboration.sharepoint.com/:f:/r/sites/EPM-EPRI/Shared%20Documents/AI%20Methods%20Group%20(Shared%20folder)/2026_AI%20platform%20study%20(Shared%20folder)/AI%20Pilot_Reviews/0%20Info%20Sharing%20with%20Review%20Teams%20(External)/General%20Information?csf=1&web=1&e=3ggmcN"
    },
    {
      "id": "res-002",
      "title": "Study Protocol",
      "type": "Protocol",
      "purpose": "Core study protocol and scope document for the Cochrane AI Platform Study.",
      "description": "Core study protocol and scope document for the Cochrane AI Platform Study.",
      "audience": "All",
      "owner": "Core Team",
      "status": "Active",
      "linkedReviewId": "All",
      "url": "https://cochranecollaboration.sharepoint.com/:b:/r/sites/EPM-EPRI/Shared%20Documents/AI%20Methods%20Group%20(Shared%20folder)/2026_AI%20platform%20study%20(Shared%20folder)/AI%20Pilot_Reviews/0%20Info%20Sharing%20with%20Review%20Teams%20(External)/General%20Information/01_Onboarding/01_First%20Read%20This/CESAR-protocol-0526-OSF.pdf?csf=1&web=1&e=HDfaea"
    },
    {
      "id": "res-003",
      "title": "Onboarding Presentation",
      "type": "Presentation",
      "purpose": "Slides used for review team onboarding and study overview.",
      "description": "Slides used for review team onboarding and study overview.",
      "audience": "All",
      "owner": "Krishna / Core Team",
      "status": "Active",
      "linkedReviewId": "All",
      "url": "https://cochranecollaboration.sharepoint.com/:b:/r/sites/EPM-EPRI/Shared%20Documents/AI%20Methods%20Group%20(Shared%20folder)/2026_AI%20platform%20study%20(Shared%20folder)/AI%20Pilot_Reviews/0%20Info%20Sharing%20with%20Review%20Teams%20(External)/General%20Information/01_Onboarding/01_First%20Read%20This/Review-teams-onboarding_kickoff-combo.key.pdf?csf=1&web=1&e=3fpXvx"
    },
    {
      "id": "res-006",
      "title": "Index Sheet",
      "type": "Spreadsheet",
      "purpose": "Guidance to navigate : Abstract screening, full-text screening, and data extraction templates.",
      "description": "Guidance to navigate : Abstract screening, full-text screening, and data extraction templates.",
      "audience": "All",
      "owner": "Sean / Krishna",
      "status": "Active",
      "linkedReviewId": "All",
      "url": "https://cochranecollaboration.sharepoint.com/:x:/r/sites/EPM-EPRI/Shared%20Documents/AI%20Methods%20Group%20(Shared%20folder)/2026_AI%20platform%20study%20(Shared%20folder)/AI%20Pilot_Reviews/0%20Info%20Sharing%20with%20Review%20Teams%20(External)/General%20Information/00_Review%20Teams_Index%20Sheet.xlsx?d=w586bb761a443432fa57075693a0c1ed1&csf=1&web=1&e=Yzscnq"
    },
    {
      "id": "res-007",
      "title": "Adjudication Materials Folder",
      "type": "Folder",
      "purpose": "Folder for adjudication slides, PDFs, Excel files, and supporting materials.",
      "description": "Folder for adjudication slides, PDFs, Excel files, and supporting materials.",
      "audience": "Adjudication",
      "owner": "Andreea / Krishna",
      "status": "To Be Updated",
      "linkedReviewId": "All",
      "url": "https://cochranecollaboration.sharepoint.com/:f:/r/sites/EPM-EPRI/Shared%20Documents/AI%20Methods%20Group%20(Shared%20folder)/2026_AI%20platform%20study%20(Shared%20folder)/Adjudication%20and%20Data%20Monitoring%20Committee%20(ADMC)?csf=1&web=1&e=k3SstX"
    }
  ],
  "upcomingMeetings": [
    {
      "id": "meet-002",
      "date": "18 May 2026",
      "etTime": "TBD",
      "ukTime": "TBD",
      "title": "Core team discussion with Meghan",
      "agenda": "First 15 minutes of the core team call to discuss Laser AI setup, tool setup issues, and coordination needs.",
      "attendees": "Core team; Meghan Sebastianski;",
      "owner": "Krishna",
      "focus": "Phase 1",
      "status": "Sent",
      "linkedReviewId": "All",
      "meetingLink": "[insert meeting link]"
    },
    {
      "id": "meet-003",
      "date": "19 May 2026",
      "etTime": "TBD",
      "ukTime": "TBD",
      "title": "BP Targets review team check-in",
      "agenda": "Check progress on Laser AI setup, final data items, time tracking, and next steps for abstract screening.",
      "attendees": "Review teams; Krishna : Gerald; support team as needed",
      "owner": "Krishna",
      "focus": "Phase 1",
      "status": "Sent",
      "linkedReviewId": "phase1-01",
      "meetingLink": "[insert meeting link]"
    },
    {
      "id": "meet-004",
      "date": "19 May 2026",
      "etTime": "TBD",
      "ukTime": "TBD",
      "title": "Psoriasis review team check-in",
      "agenda": "Check progress on abstract screening closeout, full-text readiness, remaining PDF/access issues, and next steps.",
      "attendees": "Laurence Le Cleach; Sivem Afach; Krishna; support team as needed",
      "owner": "Krishna",
      "focus": "Phase 1",
      "status": "Sent",
      "linkedReviewId": "phase1-02",
      "meetingLink": "[insert meeting link]"
    },
    {
      "id": "meet-007",
      "date": "19 May 2026",
      "etTime": "TBD",
      "ukTime": "TBD",
      "title": "Adjudication pilot results discussion",
      "agenda": "Discuss adjudication pilot submissions, compare judgments, identify interpretation differences, and agree next steps for adjudication process.",
      "attendees": "Andreea; Bartosz; Larisa; Matteo; Amin; Sean; Afroditi; Krishna",
      "owner": "Krishna / Andreea",
      "focus": "Adjudication",
      "status": "Scheduling",
      "linkedReviewId": "All",
      "meetingLink": "[insert Calendly or meeting link]"
    },
    {
      "id": "meet-006",
      "date": "21 May 2026",
      "etTime": "TBD",
      "ukTime": "TBD",
      "title": "PM + PI meeting",
      "agenda": "Align project management updates with PI priorities, escalation items, candidate review decisions, and next reporting needs.",
      "attendees": "Gerald; Krishna;Tom",
      "owner": "Krishna / PI",
      "focus": "All",
      "status": "Sent",
      "linkedReviewId": "All",
      "meetingLink": "[insert meeting link]"
    }
  ]
};
