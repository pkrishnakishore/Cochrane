// data.js
// GENERATED FROM cochrane_dashboard_backend_template.xlsx. Do not edit generated data by hand.

const dashboardData = {
  "lastUpdated": "2026-06-12",
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
        },
        {
          "id": "Critical Items Displayed in Dashboard",
          "date": "Recent",
          "subject": "Mail follow-up",
          "people": "Matteo Bruschettini",
          "resp": "Matteo Bruschettini",
          "due": "TBD",
          "status": "Pending",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "CriticalItem",
          "date": "Severity",
          "subject": "Owner",
          "people": "DueDate",
          "resp": "Status",
          "due": "Notes",
          "status": "Display",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Full-text time not reported",
          "date": "Medium",
          "subject": "Mail follow-up",
          "people": "Matteo Bruschettini",
          "resp": "Open",
          "due": "TBD",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
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
        },
        {
          "name": "Review Workflow Status: Full 63 Actions",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "63",
          "human": 0,
          "ai": 0,
          "status": "Final analysis"
        },
        {
          "name": "Review Tasks Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Recent Mail / Communication Log Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Critical Items Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "CriticalItem",
          "human": 0,
          "ai": 0,
          "status": "DueDate"
        },
        {
          "name": "Full-text time not reported",
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
      "workflowStatus": {
        "w01": "Not Started",
        "w02": "Not Started",
        "w03": "Not Started",
        "w04": "Not Started",
        "w05": "Not Started",
        "w06": "Not Started",
        "w07": "Not Started",
        "w08": "Not Started",
        "w09": "Not Started",
        "w10": "Not Started",
        "w11": "Not Started",
        "w12": "Not Started",
        "w13": "Not Started",
        "w14": "Not Started",
        "w15": "Not Started",
        "w16": "Not Started",
        "w17": "Not Started",
        "w18": "Not Started",
        "w19": "Not Started",
        "w20": "Not Started",
        "w21": "Not Started",
        "w22": "Not Started",
        "w23": "Not Started",
        "w24": "Not Started",
        "w25": "Not Started",
        "w26": "Not Started",
        "w27": "Not Started",
        "w28": "Not Started",
        "w29": "Not Started",
        "w30": "Not Started",
        "w31": "Not Started",
        "w32": "Not Started",
        "w33": "Not Started",
        "w34": "Not Started",
        "w35": "Not Started",
        "w36": "Not Started",
        "w37": "Not Started",
        "w38": "Not Started",
        "w39": "Not Started",
        "w40": "Not Started",
        "w41": "Not Started",
        "w42": "Not Started",
        "w43": "Not Started",
        "w44": "Not Started",
        "w45": "Not Started",
        "w46": "Not Started",
        "w47": "Not Started",
        "w48": "Not Started",
        "w49": "Not Started",
        "w50": "Not Started",
        "w51": "Not Started",
        "w52": "Not Started",
        "w53": "Not Started",
        "w54": "Not Started",
        "w55": "Not Started",
        "w56": "Not Started",
        "w57": "Not Started",
        "w58": "Not Started",
        "w59": "Not Started",
        "w60": "Not Started",
        "w61": "Not Started",
        "w62": "Not Started",
        "w63": "Not Started",
        "Task": "Source",
        "Verify Matteo time-on-task values": "Email",
        "Consolidate usability survey receipt": "Email",
        "Capture lessons learned before pilot closeout": "MoM",
        "2026-05-07": "task-pilot-01-002",
        "Severity": "Not Started",
        "Medium": "Not Started"
      },
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
        },
        {
          "id": "Critical Items Displayed in Dashboard",
          "date": "Recent",
          "subject": "Mail follow-up",
          "people": "Jordi Pardo Pardo / Glen Hazlewood",
          "resp": "Jordi Pardo Pardo / Glen Hazlewood",
          "due": "TBD",
          "status": "Pending",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "CriticalItem",
          "date": "Severity",
          "subject": "Owner",
          "people": "DueDate",
          "resp": "Status",
          "due": "Notes",
          "status": "Display",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Pilot output status unclear",
          "date": "Medium",
          "subject": "Mail follow-up",
          "people": "Jordi Pardo Pardo / Glen Hazlewood",
          "resp": "Open",
          "due": "TBD",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
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
        },
        {
          "name": "Review Workflow Status: Full 63 Actions",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "63",
          "human": 0,
          "ai": 0,
          "status": "Final analysis"
        },
        {
          "name": "Review Tasks Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Recent Mail / Communication Log Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Critical Items Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "CriticalItem",
          "human": 0,
          "ai": 0,
          "status": "DueDate"
        },
        {
          "name": "Pilot output status unclear",
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
      "workflowStatus": {
        "w01": "Not Started",
        "w02": "Not Started",
        "w03": "Not Started",
        "w04": "Not Started",
        "w05": "Not Started",
        "w06": "Not Started",
        "w07": "Not Started",
        "w08": "Not Started",
        "w09": "Not Started",
        "w10": "Not Started",
        "w11": "Not Started",
        "w12": "Not Started",
        "w13": "Not Started",
        "w14": "Not Started",
        "w15": "Not Started",
        "w16": "Not Started",
        "w17": "Not Started",
        "w18": "Not Started",
        "w19": "Not Started",
        "w20": "Not Started",
        "w21": "Not Started",
        "w22": "Not Started",
        "w23": "Not Started",
        "w24": "Not Started",
        "w25": "Not Started",
        "w26": "Not Started",
        "w27": "Not Started",
        "w28": "Not Started",
        "w29": "Not Started",
        "w30": "Not Started",
        "w31": "Not Started",
        "w32": "Not Started",
        "w33": "Not Started",
        "w34": "Not Started",
        "w35": "Not Started",
        "w36": "Not Started",
        "w37": "Not Started",
        "w38": "Not Started",
        "w39": "Not Started",
        "w40": "Not Started",
        "w41": "Not Started",
        "w42": "Not Started",
        "w43": "Not Started",
        "w44": "Not Started",
        "w45": "Not Started",
        "w46": "Not Started",
        "w47": "Not Started",
        "w48": "Not Started",
        "w49": "Not Started",
        "w50": "Not Started",
        "w51": "Not Started",
        "w52": "Not Started",
        "w53": "Not Started",
        "w54": "Not Started",
        "w55": "Not Started",
        "w56": "Not Started",
        "w57": "Not Started",
        "w58": "Not Started",
        "w59": "Not Started",
        "w60": "Not Started",
        "w61": "Not Started",
        "w62": "Not Started",
        "w63": "Not Started",
        "Task": "Source",
        "Confirm latest Laser AI progress and outputs": "MoM",
        "Confirm whether outputs can move toward adjudication preparation": "MoM",
        "2026-05-10": "task-pilot-02-001",
        "Severity": "Not Started",
        "Medium": "Not Started"
      },
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
      "status": "Abstract Screening",
      "tool": "Laser AI",
      "lead": "Doreen Larvie",
      "risk": "Low",
      "currentStage": "AI-assisted abstract screening completed; usability survey shared",
      "currentUpdate": "Conventional title/abstract screening completed",
      "nextAction": "Wade CSV received from conventional team; reconciliation pending",
      "communicationSupport": "Conventional title/abstract screening completed",
      "communicationLog": [
        {
          "id": "comm-phase1-01-004",
          "date": "2026-05-27",
          "subject": "BP Targets abstract screening survey",
          "people": "Doreen Larvie / Krishna",
          "resp": "Review Team",
          "due": "2026-05-31",
          "status": "Open",
          "summary": "Abstract screening survey shared after AI-assisted screening completion",
          "linkedTaskId": "task-phase1-01-006",
          "linkedAction": "Collect AI abstract screening usability survey",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-01-005",
          "date": "2026-05-27",
          "subject": "BP Targets human screening status",
          "people": "Doreen Larvie / Krishna",
          "resp": "Doreen Larvie / Review Team",
          "due": "Immediate",
          "status": "Open",
          "summary": "Asked team to confirm conventional human abstract screening status",
          "linkedTaskId": "task-phase1-01-007",
          "linkedAction": "Confirm human abstract screening status",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-01-006",
          "date": "2026-05-27",
          "subject": "BP Targets time log confirmation",
          "people": "Doreen Larvie / Krishna",
          "resp": "Review Team",
          "due": "Immediate",
          "status": "Open",
          "summary": "Asked team to confirm whether time taken was recorded",
          "linkedTaskId": "task-phase1-01-008",
          "linkedAction": "Confirm abstract screening time log",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "Critical Items Displayed in Dashboard",
          "date": "Recent",
          "subject": "Mail follow-up",
          "people": "Doreen Larvie",
          "resp": "Doreen Larvie",
          "due": "TBD",
          "status": "Pending",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "CriticalItem",
          "date": "Severity",
          "subject": "Owner",
          "people": "DueDate",
          "resp": "Status",
          "due": "Notes",
          "status": "Display",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Data items finalization recently resolved",
          "date": "Low",
          "subject": "Mail follow-up",
          "people": "Doreen Larvie",
          "resp": "Open",
          "due": "TBD",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Human abstract screening status not yet confirmed",
          "date": "High",
          "subject": "Doreen Larvie / Review Team",
          "people": "Immediate",
          "resp": "Open",
          "due": "Needed to confirm whether AI and conventional workflows are aligned before next stage",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Abstract screening time log pending",
          "date": "Medium",
          "subject": "Review Team",
          "people": "Immediate",
          "resp": "Open",
          "due": "Required for study analysis and comparison",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
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
        },
        {
          "name": "Review Workflow Status: Full 63 Actions",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "63",
          "human": 0,
          "ai": 0,
          "status": "Final analysis"
        },
        {
          "name": "Review Tasks Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Recent Mail / Communication Log Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Critical Items Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "CriticalItem",
          "human": 0,
          "ai": 0,
          "status": "DueDate"
        },
        {
          "name": "Data items finalization recently resolved",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Human abstract screening status not yet confirmed",
          "human": 0,
          "ai": 0,
          "status": "Immediate"
        },
        {
          "name": "Abstract screening time log pending",
          "human": 0,
          "ai": 0,
          "status": "Immediate"
        }
      ],
      "tasks": [
        {
          "id": "task-phase1-01-005",
          "task": "Confirm AI abstract screening completion",
          "owner": "Review Team / Response Team",
          "status": "Complete",
          "risk": "Low",
          "due": "2026-05-27",
          "dependency": "AI screening completion",
          "communication": "Survey shared after AI screening completion",
          "source": "Email",
          "sourceDate": "2026-05-27"
        },
        {
          "id": "task-phase1-01-006",
          "task": "Collect AI abstract screening usability survey",
          "owner": "Review Team",
          "status": "In Progress",
          "risk": "Medium",
          "due": "2026-05-31",
          "dependency": "AI abstract screening completion",
          "communication": "Survey shared with review team",
          "source": "Email",
          "sourceDate": "2026-05-27"
        },
        {
          "id": "task-phase1-01-007",
          "task": "Confirm human abstract screening status",
          "owner": "Doreen Larvie / Review Team",
          "status": "Pending",
          "risk": "High",
          "due": "Immediate",
          "dependency": "Parallel workflow tracking",
          "communication": "Asked team to confirm human screening status and time log",
          "source": "Email",
          "sourceDate": "2026-05-27"
        },
        {
          "id": "task-phase1-01-008",
          "task": "Confirm abstract screening time log",
          "owner": "Doreen Larvie / Review Team",
          "status": "Pending",
          "risk": "Medium",
          "due": "Immediate",
          "dependency": "Human screening status confirmation",
          "communication": "Time recording needed for study analysis",
          "source": "Email",
          "sourceDate": "2026-05-27"
        }
      ],
      "criticalItems": [
        "Data items finalization recently resolved",
        "Human abstract screening status not yet confirmed",
        "Abstract screening time log pending"
      ],
      "history": [],
      "milestones": {
        "onboarding": "Complete",
        "setup": "Complete",
        "abstract": "Pending",
        "fullText": "",
        "extraction": "",
        "analysis": ""
      },
      "workflowStatus": {
        "46169": "task-phase1-01-008",
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
        "w18": "Complete",
        "w19": "Complete",
        "w20": "Complete",
        "w21": "Complete",
        "w22": "Not Started",
        "w23": "Not Started",
        "w24": "Not Started",
        "w25": "Not Started",
        "w26": "Not Started",
        "w27": "Not Started",
        "w28": "Not Started",
        "w29": "Not Started",
        "w30": "Not Started",
        "w31": "Not Started",
        "w32": "Not Started",
        "w33": "Not Started",
        "w34": "Not Started",
        "w35": "Not Started",
        "w36": "Not Started",
        "w37": "Not Started",
        "w38": "Not Started",
        "w39": "Not Started",
        "w40": "Not Started",
        "w41": "Not Started",
        "w42": "Not Started",
        "w43": "Not Started",
        "w44": "Not Started",
        "w45": "Not Started",
        "w46": "Not Started",
        "w47": "Not Started",
        "w48": "Not Started",
        "w49": "Not Started",
        "w50": "Not Started",
        "w51": "Not Started",
        "w52": "Not Started",
        "w53": "Not Started",
        "w54": "Not Started",
        "w55": "Not Started",
        "w56": "Not Started",
        "w57": "Not Started",
        "w58": "Not Started",
        "w59": "Not Started",
        "w60": "Not Started",
        "w61": "Not Started",
        "w62": "Not Started",
        "w63": "Not Started",
        "Task": "Source",
        "Complete Laser AI setup readiness": "Email",
        "Confirm use of final data items file": "Email",
        "Confirm Clockify or alternate time-tracking setup": "MoM",
        "Validate abstract screening setup before screening starts": "Project tracking",
        "Confirm AI abstract screening completion": "Email",
        "Collect AI abstract screening usability survey": "Email",
        "Confirm human abstract screening status": "Email",
        "Confirm abstract screening time log": "Email",
        "Severity": "Not Started",
        "Low": "Not Started",
        "High": "Not Started",
        "Medium": "Not Started"
      },
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "AI-assisted abstract screening completed; usability survey shared",
        "targetDate": "Conventional and Laser AI workflows both in full-text screening stage",
        "variance": "Next step: compare conventional includes vs AI includes and add any missing records",
        "assessment": "In Progress"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "Abstract Screening",
          "state": "Abstract Screening"
        },
        {
          "label": "Target",
          "value": "Conventional and Laser AI workflows both in full-text screening stage",
          "state": "Abstract Screening"
        },
        {
          "label": "Tool",
          "value": "Laser AI",
          "state": "Abstract Screening"
        }
      ]
    },
    {
      "id": "phase1-02",
      "title": "Systemic pharmacological treatments for chronic plaque psoriasis",
      "shortName": "Psoriasis",
      "phase": "Phase 1",
      "status": "Abstract Screening",
      "tool": "Nested Knowledge",
      "lead": "Laurence Le Cleach / Sivem Afach",
      "risk": "Low",
      "currentStage": "NK abstract screening survey responses received; data extraction setup underway",
      "currentUpdate": "Nested Knowledge title/abstract screening survey responses have been received. Data extraction setup is underway, with updated data items uploaded and NK fields being entered. Conventional extraction team has clarified the expected files and standalone data item format.",
      "nextAction": "Complete Conventional Abstract screeing ; Continue Data extraction set up",
      "communicationSupport": "Nested Knowledge title/abstract screening survey responses have been received. Data extraction setup is underway, with updated data items uploaded and NK fields being entered. Conventional extraction team has clarified the expected files and standalone data item format.",
      "communicationLog": [
        {
          "id": "",
          "date": "comm-phase1-02-004",
          "subject": "46161",
          "people": "Psoriasis / NK survey responses",
          "resp": "Susan / Krishna",
          "due": "Susan / Ursula",
          "status": "46161",
          "summary": "Complete",
          "linkedTaskId": "Two new NK title and abstract screening survey responses received",
          "linkedAction": "task-phase1-02-005",
          "sourceType": "Confirm survey responses",
          "sourceLink": "Email"
        },
        {
          "id": "",
          "date": "comm-phase1-02-005",
          "subject": "46162",
          "people": "Psoriasis NK data field setup",
          "resp": "Meghan / Sivem / Sean",
          "due": "Meghan",
          "status": "46173",
          "summary": "In Progress",
          "linkedTaskId": "Meghan confirmed she would start entering data fields into Nested Knowledge",
          "linkedAction": "task-phase1-02-007",
          "sourceType": "Enter NK data fields",
          "sourceLink": "Email"
        },
        {
          "id": "",
          "date": "comm-phase1-02-006",
          "subject": "46167",
          "people": "Psoriasis updated data item list",
          "resp": "Sean / Sivem / Meghan",
          "due": "Sean / Meghan",
          "status": "46167",
          "summary": "Complete",
          "linkedTaskId": "Updated data item list uploaded to shared folder",
          "linkedAction": "task-phase1-02-006",
          "sourceType": "Finalize data items",
          "sourceLink": "Email"
        },
        {
          "id": "",
          "date": "comm-phase1-02-007",
          "subject": "46168",
          "people": "Psoriasis conventional extraction format",
          "resp": "Emilie / Sean / Meghan",
          "due": "Emilie / Robin",
          "status": "46173",
          "summary": "In Progress",
          "linkedTaskId": "Conventional team clarified planned Excel and Word outputs",
          "linkedAction": "task-phase1-02-008",
          "sourceType": "Confirm conventional extraction format",
          "sourceLink": "Email"
        },
        {
          "id": "",
          "date": "comm-phase1-02-008",
          "subject": "46169",
          "people": "Psoriasis extraction definitions",
          "resp": "Sean / Emilie / Meghan / Sivem",
          "due": "Review Team",
          "status": "Immediate",
          "summary": "Open",
          "linkedTaskId": "Sean asked extractors to follow agreed definitions before AI extraction begins",
          "linkedAction": "task-phase1-02-009",
          "sourceType": "Confirm no further changes",
          "sourceLink": "Email"
        },
        {
          "id": "Critical Items Displayed in Dashboard",
          "date": "Recent",
          "subject": "Mail follow-up",
          "people": "Laurence Le Cleach / Sivem Afach",
          "resp": "Laurence Le Cleach / Sivem Afach",
          "due": "TBD",
          "status": "Pending",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "CriticalItem",
          "date": "Severity",
          "subject": "Owner",
          "people": "DueDate",
          "resp": "Status",
          "due": "Notes",
          "status": "Display",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Remaining full-text gaps",
          "date": "Low",
          "subject": "Mail follow-up",
          "people": "Laurence Le Cleach / Sivem Afach",
          "resp": "Open",
          "due": "TBD",
          "status": "No",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Full-text criteria still need confirmation",
          "date": "Low",
          "subject": "Mail follow-up",
          "people": "Laurence Le Cleach / Sivem Afach",
          "resp": "Open",
          "due": "TBD",
          "status": "No",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Confirm no further data item changes before AI extraction",
          "date": "High",
          "subject": "Sean / Review Team",
          "people": "Immediate",
          "resp": "Open",
          "due": "Needed before AI-assisted data extraction begins in NK",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Conventional extraction format alignment",
          "date": "Medium",
          "subject": "Emilie / Robin / Sean",
          "people": "46173",
          "resp": "In Progress",
          "due": "Conventional outputs need to match agreed standalone data item structure",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        }
      ],
      "files": {
        "RIS": true,
        "PDFs": false,
        "Criteria": false,
        "Extraction": false,
        "Protocol": true,
        "Time Log": true
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
        },
        {
          "name": "Review Workflow Status: Full 63 Actions",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "63",
          "human": 0,
          "ai": 0,
          "status": "Final analysis"
        },
        {
          "name": "Review Tasks Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Recent Mail / Communication Log Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Critical Items Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "CriticalItem",
          "human": 0,
          "ai": 0,
          "status": "DueDate"
        },
        {
          "name": "Remaining full-text gaps",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Full-text criteria still need confirmation",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Confirm no further data item changes before AI extraction",
          "human": 0,
          "ai": 0,
          "status": "Immediate"
        },
        {
          "name": "Conventional extraction format alignment",
          "human": 0,
          "ai": 0,
          "status": "46173"
        }
      ],
      "tasks": [
        {
          "id": "task-phase1-02-005",
          "task": "Confirm NK abstract screening survey responses",
          "owner": "Susan / Ursula",
          "status": "Complete",
          "risk": "Low",
          "due": "2026-05-19",
          "dependency": "NK abstract screening completion",
          "communication": "Susan confirmed two new NK survey responses",
          "source": "Email",
          "sourceDate": "2026-05-19"
        },
        {
          "id": "task-phase1-02-006",
          "task": "Finalize data item list for extraction",
          "owner": "Sean / Sivem / Meghan",
          "status": "Complete",
          "risk": "Medium",
          "due": "2026-05-25",
          "dependency": "Data extraction setup",
          "communication": "Updated data item list uploaded to shared folder",
          "source": "Email",
          "sourceDate": "2026-05-25"
        },
        {
          "id": "task-phase1-02-007",
          "task": "Enter data extraction fields into NK",
          "owner": "Meghan / Response Team",
          "status": "In Progress",
          "risk": "Medium",
          "due": "2026-05-31",
          "dependency": "Final data item list",
          "communication": "Meghan confirmed she would start entering data fields into NK",
          "source": "Email",
          "sourceDate": "2026-05-20"
        },
        {
          "id": "task-phase1-02-008",
          "task": "Confirm conventional extraction format",
          "owner": "Emilie / Robin / Sean",
          "status": "In Progress",
          "risk": "Medium",
          "due": "2026-05-31",
          "dependency": "Standalone data item definitions",
          "communication": "Conventional team clarified expected Excel and Word outputs",
          "source": "Email",
          "sourceDate": "2026-05-26"
        },
        {
          "id": "task-phase1-02-009",
          "task": "Confirm no further data item changes before AI extraction",
          "owner": "Sean / Review Team",
          "status": "Pending",
          "risk": "High",
          "due": "Immediate",
          "dependency": "NK setup completion",
          "communication": "Sean asked extractors to follow agreed instructions before AI extraction begins",
          "source": "Email",
          "sourceDate": "2026-05-27"
        }
      ],
      "criticalItems": [
        "Confirm no further data item changes before AI extraction",
        "Conventional extraction format alignment"
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
        "w18": "Complete",
        "w19": "Complete",
        "w20": "Complete",
        "w21": "Complete",
        "w22": "Complete",
        "w23": "Not Started",
        "w24": "Not Started",
        "w25": "Not Started",
        "w26": "Not Started",
        "w27": "Not Started",
        "w28": "Not Started",
        "w29": "Not Started",
        "w30": "Not Started",
        "w31": "Not Started",
        "w32": "Not Started",
        "w33": "Not Started",
        "w34": "Not Started",
        "w35": "Not Started",
        "w36": "Not Started",
        "w37": "Not Started",
        "w38": "Not Started",
        "w39": "Not Started",
        "w40": "Not Started",
        "w41": "Not Started",
        "w42": "Not Started",
        "w43": "Not Started",
        "w44": "Not Started",
        "w45": "Not Started",
        "w46": "Not Started",
        "w47": "Not Started",
        "w48": "Not Started",
        "w49": "Not Started",
        "w50": "Not Started",
        "w51": "Not Started",
        "w52": "Not Started",
        "w53": "Not Started",
        "w54": "Not Started",
        "w55": "Not Started",
        "w56": "Not Started",
        "w57": "Not Started",
        "w58": "Not Started",
        "w59": "Not Started",
        "w60": "Not Started",
        "w61": "Not Started",
        "w62": "Not Started",
        "w63": "Not Started",
        "Task": "Source",
        "Confirm remaining full-text gaps with review team": "Email",
        "Confirm full-text readiness after Nested Knowledge fixes": "Email",
        "Confirm full-text criteria and handling of remaining full-text issues": "MoM",
        "Send usability survey after abstract screening completion": "Project tracking",
        "Confirm NK abstract screening survey responses": "Email",
        "Finalize data item list for extraction": "Email",
        "Enter data extraction fields into NK": "Email",
        "Confirm conventional extraction format": "Email",
        "Confirm no further data item changes before AI extraction": "Email",
        "comm-phase1-02-004": "Two new NK title and abstract screening survey responses received",
        "comm-phase1-02-005": "Meghan confirmed she would start entering data fields into Nested Knowledge",
        "comm-phase1-02-006": "Updated data item list uploaded to shared folder",
        "comm-phase1-02-007": "Conventional team clarified planned Excel and Word outputs",
        "comm-phase1-02-008": "Sean asked extractors to follow agreed definitions before AI extraction begins",
        "Severity": "Not Started",
        "Low": "Not Started",
        "High": "Not Started",
        "Medium": "Not Started"
      },
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "NK abstract screening survey responses received; data extraction setup underway",
        "targetDate": "2026-05-27",
        "variance": "To be assessed",
        "assessment": "In Progress"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "Abstract Screening",
          "state": "Abstract Screening"
        },
        {
          "label": "Target",
          "value": "2026-05-27",
          "state": "Abstract Screening"
        },
        {
          "label": "Tool",
          "value": "Nested Knowledge",
          "state": "Abstract Screening"
        }
      ]
    },
    {
      "id": "phase1-03",
      "title": "Interventions for increasing fruit and vegetable consumption in children aged five years and under",
      "shortName": "Fruit & Veg",
      "phase": "Phase 1",
      "status": "Training completed; re-onboarding to be scheduled",
      "tool": "Laser AI",
      "lead": "Rebecca K. Hodder",
      "risk": "Medium",
      "currentStage": "Laser AI training completed; Re-onboarding pending",
      "currentUpdate": "Updated search was run on 20 May. Laser AI training has been completed. A brief Re-onboarding/check-in with Gerald is still pending this week before active screening.",
      "nextAction": "Schedule 30-minute methodology re-onboarding with Gerald; confirm search completion and human screening status before active screening.",
      "communicationSupport": "Updated search was run on 20 May. Laser AI training has been completed. A brief Re-onboarding/check-in with Gerald is still pending this week before active screening.",
      "communicationLog": [
        {
          "id": "comm-phase1-03-004",
          "date": "2026-05-20",
          "subject": "Fruit & Veg updated search",
          "people": "Kate / Rebecca / Krishna",
          "resp": "Rebecca / Kate",
          "due": "Immediate",
          "status": "Open",
          "summary": "Kate informed that the updated search was being run and asked about training timing",
          "linkedTaskId": "task-phase1-03-007",
          "linkedAction": "Confirm updated search completion",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-03-005",
          "date": "2026-05-26",
          "subject": "Fruit & Veg Laser AI training invite",
          "people": "Krishna / Rebecca / Kate",
          "resp": "Rebecca / Kate",
          "due": "2026-05-27",
          "status": "Complete",
          "summary": "Team was asked to confirm receipt of Laser AI training invite",
          "linkedTaskId": "task-phase1-03-005",
          "linkedAction": "Confirm Laser AI training completion",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-03-006",
          "date": "2026-05-26",
          "subject": "Rebecca team onboarding update",
          "people": "Krishna / Gerald",
          "resp": "Gerald / Krishna",
          "due": "This week",
          "status": "Open",
          "summary": "Gerald was informed that Laser AI session was scheduled for Rebecca and Kate&#8217;s team",
          "linkedTaskId": "task-phase1-03-006",
          "linkedAction": "Schedule methodology re-onboarding",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-03-007",
          "date": "2026-05-27",
          "subject": "Laser AI training follow-up",
          "people": "Krishna / Kate / Rebecca",
          "resp": "Krishna / Review Team",
          "due": "This week",
          "status": "Open",
          "summary": "Krishna could not join due to 2 AM timing and noted that a separate check-in would be needed",
          "linkedTaskId": "task-phase1-03-006",
          "linkedAction": "Schedule methodology re-onboarding",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "comm-phase1-03-008",
          "date": "2026-05-27",
          "subject": "Human screening status follow-up",
          "people": "Krishna / Rebecca / Kate",
          "resp": "Rebecca / Kate",
          "due": "Immediate",
          "status": "Open",
          "summary": "Human abstract screening status still needs confirmation for parallel workflow tracking",
          "linkedTaskId": "task-phase1-03-008",
          "linkedAction": "Confirm human abstract screening status",
          "sourceType": "Email",
          "sourceLink": ""
        },
        {
          "id": "Critical Items Displayed in Dashboard",
          "date": "Recent",
          "subject": "Mail follow-up",
          "people": "Rebecca K. Hodder",
          "resp": "Rebecca K. Hodder",
          "due": "TBD",
          "status": "Pending",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "CriticalItem",
          "date": "Severity",
          "subject": "Owner",
          "people": "DueDate",
          "resp": "Status",
          "due": "Notes",
          "status": "Display",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "CriticalItem",
          "date": "Severity",
          "subject": "Owner",
          "people": "DueDate",
          "resp": "Status",
          "due": "Notes",
          "status": "Display",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Methodology re-onboarding still pending",
          "date": "Medium",
          "subject": "Gerald / Krishna / Review Team",
          "people": "This week",
          "resp": "Open",
          "due": "Needed because Krishna could not join the Laser AI tool training session",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Human abstract screening status not confirmed",
          "date": "High",
          "subject": "Rebecca / Kate",
          "people": "Immediate",
          "resp": "Open",
          "due": "Needed to ensure AI-assisted and human workflows are tracked in parallel",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Updated search completion not confirmed",
          "date": "Medium",
          "subject": "Rebecca / Kate",
          "people": "Immediate",
          "resp": "Open",
          "due": "Search was run around 20 May, but final completion/status needs confirmation",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
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
        },
        {
          "name": "Review Workflow Status: Full 63 Actions",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "63",
          "human": 0,
          "ai": 0,
          "status": "Final analysis"
        },
        {
          "name": "Review Tasks Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Critical Items Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "CriticalItem",
          "human": 0,
          "ai": 0,
          "status": "DueDate"
        },
        {
          "name": "CriticalItem",
          "human": 0,
          "ai": 0,
          "status": "DueDate"
        },
        {
          "name": "Methodology re-onboarding still pending",
          "human": 0,
          "ai": 0,
          "status": "This week"
        },
        {
          "name": "Human abstract screening status not confirmed",
          "human": 0,
          "ai": 0,
          "status": "Immediate"
        },
        {
          "name": "Updated search completion not confirmed",
          "human": 0,
          "ai": 0,
          "status": "Immediate"
        }
      ],
      "tasks": [
        {
          "id": "task-phase1-03-005",
          "task": "Confirm Laser AI training completion",
          "owner": "Rebecca / Kate / Laser AI",
          "status": "Complete",
          "risk": "Low",
          "due": "2026-05-27",
          "dependency": "Training invite",
          "communication": "Team proceeded with Laser AI training",
          "source": "Email",
          "sourceDate": "2026-05-27"
        },
        {
          "id": "task-phase1-03-006",
          "task": "Schedule methodology re-onboarding",
          "owner": "Gerald / Krishna / Review Team",
          "status": "Pending",
          "risk": "Medium",
          "due": "This week",
          "dependency": "Krishna could not join tool training",
          "communication": "Separate check-in needed to confirm workflow and methodology",
          "source": "Email",
          "sourceDate": "2026-05-27"
        },
        {
          "id": "task-phase1-03-007",
          "task": "Confirm updated search completion",
          "owner": "Rebecca / Kate",
          "status": "Pending",
          "risk": "Medium",
          "due": "Immediate",
          "dependency": "Search run around 20 May",
          "communication": "Need confirmation of final search status",
          "source": "Email",
          "sourceDate": "2026-05-20"
        },
        {
          "id": "task-phase1-03-008",
          "task": "Confirm human abstract screening status",
          "owner": "Rebecca / Kate",
          "status": "Pending",
          "risk": "High",
          "due": "Immediate",
          "dependency": "Parallel workflow tracking",
          "communication": "Need to confirm whether human screening started, postponed, or ongoing",
          "source": "Email",
          "sourceDate": "2026-05-27"
        },
        {
          "id": "task-phase1-03-009",
          "task": "Confirm time recording",
          "owner": "Rebecca / Kate",
          "status": "Pending",
          "risk": "Medium",
          "due": "Immediate",
          "dependency": "Training/screening activity",
          "communication": "Confirm training and screening time have been recorded",
          "source": "Email",
          "sourceDate": "2026-05-27"
        }
      ],
      "criticalItems": [
        "Methodology re-onboarding still pending",
        "Human abstract screening status not confirmed",
        "Updated search completion not confirmed"
      ],
      "history": [],
      "milestones": {
        "onboarding": "Active",
        "setup": "",
        "abstract": "",
        "fullText": "",
        "extraction": "",
        "analysis": ""
      },
      "workflowStatus": {
        "46162": "task-phase1-03-007",
        "46168": "task-phase1-03-006",
        "46169": "task-phase1-03-008",
        "w01": "Complete",
        "w02": "Complete",
        "w03": "Complete",
        "w04": "Complete",
        "w05": "Not Started",
        "w06": "Complete",
        "w07": "Complete",
        "w08": "Not Started",
        "w09": "Not Started",
        "w10": "Not Started",
        "w11": "Not Started",
        "w12": "Not Started",
        "w13": "Not Started",
        "w14": "Not Started",
        "w15": "Not Started",
        "w16": "Not Started",
        "w17": "Not Started",
        "w18": "Not Started",
        "w19": "Not Started",
        "w20": "Not Started",
        "w21": "Not Started",
        "w22": "Not Started",
        "w23": "Not Started",
        "w24": "Not Started",
        "w25": "Not Started",
        "w26": "Not Started",
        "w27": "Not Started",
        "w28": "Not Started",
        "w29": "Not Started",
        "w30": "Not Started",
        "w31": "Not Started",
        "w32": "Not Started",
        "w33": "Not Started",
        "w34": "Not Started",
        "w35": "Not Started",
        "w36": "Not Started",
        "w37": "Not Started",
        "w38": "Not Started",
        "w39": "Not Started",
        "w40": "Not Started",
        "w41": "Not Started",
        "w42": "Not Started",
        "w43": "Not Started",
        "w44": "Not Started",
        "w45": "Not Started",
        "w46": "Not Started",
        "w47": "Not Started",
        "w48": "Not Started",
        "w49": "Not Started",
        "w50": "Not Started",
        "w51": "Not Started",
        "w52": "Not Started",
        "w53": "Not Started",
        "w54": "Not Started",
        "w55": "Not Started",
        "w56": "Not Started",
        "w57": "Not Started",
        "w58": "Not Started",
        "w59": "Not Started",
        "w60": "Not Started",
        "w61": "Not Started",
        "w62": "Not Started",
        "w63": "Not Started",
        "Task": "Source",
        "Confirm allocated AI tool and review team access": "Project tracking",
        "Arrange allocated tool training closer to study start date": "Project tracking",
        "Collect search results after 20 May search": "Project tracking",
        "Begin setup only after RIS and review materials are available": "Project tracking",
        "Confirm Laser AI training completion": "Email",
        "Schedule methodology re-onboarding": "Email",
        "Confirm updated search completion": "Email",
        "Confirm human abstract screening status": "Email",
        "Confirm time recording": "Email",
        "Severity": "Not Started",
        "Medium": "Not Started",
        "High": "Not Started"
      },
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Laser AI training completed; Re-onboarding pending",
        "targetDate": "2026-05-28",
        "variance": "Waiting for search/RIS before setup can proceed.",
        "assessment": "In Progress"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "Training completed; re-onboarding to be scheduled",
          "state": "Training completed; re-onboarding to be scheduled"
        },
        {
          "label": "Target",
          "value": "2026-05-28",
          "state": "Training completed; re-onboarding to be scheduled"
        },
        {
          "label": "Tool",
          "value": "Laser AI",
          "state": "Training completed; re-onboarding to be scheduled"
        }
      ]
    },
    {
      "id": "phase1-04",
      "title": "Interventions for improving medication-taking ability and adherence in older adults prescribed multiple medications",
      "shortName": "Med Adherence",
      "phase": "Phase 1",
      "status": "Onboarding Scheduled",
      "tool": "Nested Knowledge",
      "lead": "Amanda Cross / Rehan Sarwar",
      "risk": "Low",
      "currentStage": "Search complete; screening not started; NK training/onboarding scheduled",
      "currentUpdate": "Amanda Cross / Monash medication adherence review has been converted into the Phase 1 dashboard. NK training and onboarding are scheduled.",
      "nextAction": "Conduct NK training/onboarding; confirm split-team workflow.",
      "communicationSupport": "Amanda Cross / Monash medication adherence review has been converted into the Phase 1 dashboard. NK training and onboarding are scheduled.",
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
        },
        {
          "id": "Critical Items Displayed in Dashboard",
          "date": "Recent",
          "subject": "Mail follow-up",
          "people": "Amanda Cross / Rehan Sarwar",
          "resp": "Amanda Cross / Rehan Sarwar",
          "due": "TBD",
          "status": "Pending",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "CriticalItem",
          "date": "Severity",
          "subject": "Owner",
          "people": "DueDate",
          "resp": "Status",
          "due": "Notes",
          "status": "Display",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Eligibility and participation not confirmed",
          "date": "High",
          "subject": "Mail follow-up",
          "people": "Amanda Cross / Rehan Sarwar",
          "resp": "Open",
          "due": "TBD",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
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
        },
        {
          "name": "Review Workflow Status: Full 63 Actions",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "63",
          "human": 0,
          "ai": 0,
          "status": "Final analysis"
        },
        {
          "name": "Review Tasks Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Recent Mail / Communication Log Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Critical Items Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "CriticalItem",
          "human": 0,
          "ai": 0,
          "status": "DueDate"
        },
        {
          "name": "Eligibility and participation not confirmed",
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
        "onboarding": "Active",
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
        "w06": "Not Started",
        "w07": "Not Started",
        "w08": "Not Started",
        "w09": "Not Started",
        "w10": "Not Started",
        "w11": "Not Started",
        "w12": "Not Started",
        "w13": "Not Started",
        "w14": "Not Started",
        "w15": "Not Started",
        "w16": "Not Started",
        "w17": "Not Started",
        "w18": "Not Started",
        "w19": "Not Started",
        "w20": "Not Started",
        "w21": "Not Started",
        "w22": "Not Started",
        "w23": "Not Started",
        "w24": "Not Started",
        "w25": "Not Started",
        "w26": "Not Started",
        "w27": "Not Started",
        "w28": "Not Started",
        "w29": "Not Started",
        "w30": "Not Started",
        "w31": "Not Started",
        "w32": "Not Started",
        "w33": "Not Started",
        "w34": "Not Started",
        "w35": "Not Started",
        "w36": "Not Started",
        "w37": "Not Started",
        "w38": "Not Started",
        "w39": "Not Started",
        "w40": "Not Started",
        "w41": "Not Started",
        "w42": "Not Started",
        "w43": "Not Started",
        "w44": "Not Started",
        "w45": "Not Started",
        "w46": "Not Started",
        "w47": "Not Started",
        "w48": "Not Started",
        "w49": "Not Started",
        "w50": "Not Started",
        "w51": "Not Started",
        "w52": "Not Started",
        "w53": "Not Started",
        "w54": "Not Started",
        "w55": "Not Started",
        "w56": "Not Started",
        "w57": "Not Started",
        "w58": "Not Started",
        "w59": "Not Started",
        "w60": "Not Started",
        "w61": "Not Started",
        "w62": "Not Started",
        "w63": "Not Started",
        "Task": "Source",
        "Confirm review eligibility and participation": "Project tracking",
        "Confirm review timeline and start date": "Project tracking",
        "Confirm allocated AI tool after eligibility decision": "Project tracking",
        "Hold setup materials request until confirmation": "Project tracking",
        "2026-05-08": "task-phase1-04-001",
        "Severity": "Not Started",
        "High": "Not Started"
      },
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Search complete; screening not started; NK training/onboarding scheduled",
        "targetDate": "2026-06-08",
        "variance": "Onboarding scheduled; confirm split-team workflow before screening starts.",
        "assessment": "In Progress"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "Onboarding Scheduled",
          "state": "Onboarding Scheduled"
        },
        {
          "label": "Target",
          "value": "2026-06-08",
          "state": "Onboarding Scheduled"
        },
        {
          "label": "Tool",
          "value": "Nested Knowledge",
          "state": "Onboarding Scheduled"
        }
      ]
    },
    {
      "id": "phase1-05",
      "title": "Vitamin C supplementation for prevention and treatment of pneumonia",
      "shortName": "Vitamin C",
      "phase": "Phase 1",
      "status": "Onboarding Scheduled",
      "tool": "AI tool pending",
      "lead": "Jai Das",
      "risk": "Low",
      "currentStage": "Search by July 2026; onboarding to be scheduled",
      "currentUpdate": "Vitamin C review has been converted into the Phase 1 dashboard sheet for onboarding tracking.",
      "nextAction": "Confirm eligibility, timeline, allocated AI tool, and onboarding plan.",
      "communicationSupport": "Vitamin C review has been converted into the Phase 1 dashboard sheet for onboarding tracking.",
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
        },
        {
          "id": "Critical Items Displayed in Dashboard",
          "date": "Recent",
          "subject": "Mail follow-up",
          "people": "Jai Das",
          "resp": "Jai Das",
          "due": "TBD",
          "status": "Pending",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "CriticalItem",
          "date": "Severity",
          "subject": "Owner",
          "people": "DueDate",
          "resp": "Status",
          "due": "Notes",
          "status": "Display",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "Open Phase 1 review slot",
          "date": "High",
          "subject": "Mail follow-up",
          "people": "Jai Das",
          "resp": "Open",
          "due": "TBD",
          "status": "Yes",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
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
        },
        {
          "name": "Review Workflow Status: Full 63 Actions",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "63",
          "human": 0,
          "ai": 0,
          "status": "Final analysis"
        },
        {
          "name": "Review Tasks Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Recent Mail / Communication Log Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Critical Items Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "CriticalItem",
          "human": 0,
          "ai": 0,
          "status": "DueDate"
        },
        {
          "name": "Open Phase 1 review slot",
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
        "onboarding": "Active",
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
        "w06": "Not Started",
        "w07": "Not Started",
        "w08": "Not Started",
        "w09": "Not Started",
        "w10": "Not Started",
        "w11": "Not Started",
        "w12": "Not Started",
        "w13": "Not Started",
        "w14": "Not Started",
        "w15": "Not Started",
        "w16": "Not Started",
        "w17": "Not Started",
        "w18": "Not Started",
        "w19": "Not Started",
        "w20": "Not Started",
        "w21": "Not Started",
        "w22": "Not Started",
        "w23": "Not Started",
        "w24": "Not Started",
        "w25": "Not Started",
        "w26": "Not Started",
        "w27": "Not Started",
        "w28": "Not Started",
        "w29": "Not Started",
        "w30": "Not Started",
        "w31": "Not Started",
        "w32": "Not Started",
        "w33": "Not Started",
        "w34": "Not Started",
        "w35": "Not Started",
        "w36": "Not Started",
        "w37": "Not Started",
        "w38": "Not Started",
        "w39": "Not Started",
        "w40": "Not Started",
        "w41": "Not Started",
        "w42": "Not Started",
        "w43": "Not Started",
        "w44": "Not Started",
        "w45": "Not Started",
        "w46": "Not Started",
        "w47": "Not Started",
        "w48": "Not Started",
        "w49": "Not Started",
        "w50": "Not Started",
        "w51": "Not Started",
        "w52": "Not Started",
        "w53": "Not Started",
        "w54": "Not Started",
        "w55": "Not Started",
        "w56": "Not Started",
        "w57": "Not Started",
        "w58": "Not Started",
        "w59": "Not Started",
        "w60": "Not Started",
        "w61": "Not Started",
        "w62": "Not Started",
        "w63": "Not Started",
        "Task": "Source",
        "Identify additional eligible review": "Project tracking",
        "Confirm team availability after candidate selection": "Project tracking",
        "Assign allocated AI tool after candidate selection": "Project tracking",
        "Hold onboarding until review is confirmed": "Project tracking",
        "2026-05-14": "task-phase1-05-001",
        "Severity": "Not Started",
        "High": "Not Started"
      },
      "tracker": {
        "plannedWindow": "",
        "plannedGate": "Search by July 2026; onboarding to be scheduled",
        "targetDate": "2026-06-12",
        "variance": "Onboarding metadata pending confirmation.",
        "assessment": "In Progress"
      },
      "timelineGates": [
        {
          "label": "Status",
          "value": "Onboarding Scheduled",
          "state": "Onboarding Scheduled"
        },
        {
          "label": "Target",
          "value": "2026-06-12",
          "state": "Onboarding Scheduled"
        },
        {
          "label": "Tool",
          "value": "AI tool pending",
          "state": "Onboarding Scheduled"
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
      "communicationLog": [
        {
          "id": "Critical Items Displayed in Dashboard",
          "date": "Recent",
          "subject": "Mail follow-up",
          "people": "TBD",
          "resp": "TBD",
          "due": "TBD",
          "status": "Pending",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "CriticalItem",
          "date": "Severity",
          "subject": "Owner",
          "people": "DueDate",
          "resp": "Status",
          "due": "Notes",
          "status": "Display",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
          "sourceLink": ""
        },
        {
          "id": "",
          "date": "Recent",
          "subject": "Mail follow-up",
          "people": "TBD",
          "resp": "TBD",
          "due": "TBD",
          "status": "No",
          "summary": "Follow-up conversation pending.",
          "linkedTaskId": "",
          "linkedAction": "",
          "sourceType": "",
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
        },
        {
          "name": "Review Workflow Status: Full 63 Actions",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "63",
          "human": 0,
          "ai": 0,
          "status": "Final analysis"
        },
        {
          "name": "Review Tasks Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Recent Mail / Communication Log Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "Critical Items Displayed in Dashboard",
          "human": 0,
          "ai": 0,
          "status": "Not Started"
        },
        {
          "name": "CriticalItem",
          "human": 0,
          "ai": 0,
          "status": "DueDate"
        },
        {
          "name": "Stage",
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
      "workflowStatus": {
        "w01": "Not Started",
        "w02": "Not Started",
        "w03": "Not Started",
        "w04": "Not Started",
        "w05": "Not Started",
        "w06": "Not Started",
        "w07": "Not Started",
        "w08": "Not Started",
        "w09": "Not Started",
        "w10": "Not Started",
        "w11": "Not Started",
        "w12": "Not Started",
        "w13": "Not Started",
        "w14": "Not Started",
        "w15": "Not Started",
        "w16": "Not Started",
        "w17": "Not Started",
        "w18": "Not Started",
        "w19": "Not Started",
        "w20": "Not Started",
        "w21": "Not Started",
        "w22": "Not Started",
        "w23": "Not Started",
        "w24": "Not Started",
        "w25": "Not Started",
        "w26": "Not Started",
        "w27": "Not Started",
        "w28": "Not Started",
        "w29": "Not Started",
        "w30": "Not Started",
        "w31": "Not Started",
        "w32": "Not Started",
        "w33": "Not Started",
        "w34": "Not Started",
        "w35": "Not Started",
        "w36": "Not Started",
        "w37": "Not Started",
        "w38": "Not Started",
        "w39": "Not Started",
        "w40": "Not Started",
        "w41": "Not Started",
        "w42": "Not Started",
        "w43": "Not Started",
        "w44": "Not Started",
        "w45": "Not Started",
        "w46": "Not Started",
        "w47": "Not Started",
        "w48": "Not Started",
        "w49": "Not Started",
        "w50": "Not Started",
        "w51": "Not Started",
        "w52": "Not Started",
        "w53": "Not Started",
        "w54": "Not Started",
        "w55": "Not Started",
        "w56": "Not Started",
        "w57": "Not Started",
        "w58": "Not Started",
        "w59": "Not Started",
        "w60": "Not Started",
        "w61": "Not Started",
        "w62": "Not Started",
        "w63": "Not Started",
        "Task": "Source",
        "Keep Phase 2 placeholder until Phase 1 stabilizes": "Project tracking",
        "Severity": "Not Started"
      },
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
      "id": "task-phase1-01-005",
      "task": "Confirm AI abstract screening completion",
      "owner": "Review Team / Response Team",
      "status": "Complete",
      "risk": "Low",
      "due": "2026-05-27",
      "dependency": "AI screening completion",
      "communication": "Survey shared after AI screening completion",
      "source": "Email",
      "sourceDate": "2026-05-27",
      "linkedReviewId": "phase1-01"
    },
    {
      "id": "task-phase1-01-006",
      "task": "Collect AI abstract screening usability survey",
      "owner": "Review Team",
      "status": "In Progress",
      "risk": "Medium",
      "due": "2026-05-31",
      "dependency": "AI abstract screening completion",
      "communication": "Survey shared with review team",
      "source": "Email",
      "sourceDate": "2026-05-27",
      "linkedReviewId": "phase1-01"
    },
    {
      "id": "task-phase1-01-007",
      "task": "Confirm human abstract screening status",
      "owner": "Doreen Larvie / Review Team",
      "status": "Pending",
      "risk": "High",
      "due": "Immediate",
      "dependency": "Parallel workflow tracking",
      "communication": "Asked team to confirm human screening status and time log",
      "source": "Email",
      "sourceDate": "2026-05-27",
      "linkedReviewId": "phase1-01"
    },
    {
      "id": "task-phase1-01-008",
      "task": "Confirm abstract screening time log",
      "owner": "Doreen Larvie / Review Team",
      "status": "Pending",
      "risk": "Medium",
      "due": "Immediate",
      "dependency": "Human screening status confirmation",
      "communication": "Time recording needed for study analysis",
      "source": "Email",
      "sourceDate": "2026-05-27",
      "linkedReviewId": "phase1-01"
    },
    {
      "task": "Data items finalization recently resolved",
      "owner": "TBD",
      "status": "Open",
      "due": "Monitor",
      "dependency": "Monitor risk",
      "linkedReviewId": "phase1-01",
      "communication": ""
    },
    {
      "task": "Human abstract screening status not yet confirmed",
      "owner": "Doreen Larvie / Review Team",
      "status": "Open",
      "due": "Immediate",
      "dependency": "Monitor risk",
      "linkedReviewId": "phase1-01",
      "communication": "Needed to confirm whether AI and conventional workflows are aligned before next stage"
    },
    {
      "task": "Abstract screening time log pending",
      "owner": "Review Team",
      "status": "Open",
      "due": "Immediate",
      "dependency": "Monitor risk",
      "linkedReviewId": "phase1-01",
      "communication": "Required for study analysis and comparison"
    },
    {
      "id": "task-phase1-02-005",
      "task": "Confirm NK abstract screening survey responses",
      "owner": "Susan / Ursula",
      "status": "Complete",
      "risk": "Low",
      "due": "2026-05-19",
      "dependency": "NK abstract screening completion",
      "communication": "Susan confirmed two new NK survey responses",
      "source": "Email",
      "sourceDate": "2026-05-19",
      "linkedReviewId": "phase1-02"
    },
    {
      "id": "task-phase1-02-006",
      "task": "Finalize data item list for extraction",
      "owner": "Sean / Sivem / Meghan",
      "status": "Complete",
      "risk": "Medium",
      "due": "2026-05-25",
      "dependency": "Data extraction setup",
      "communication": "Updated data item list uploaded to shared folder",
      "source": "Email",
      "sourceDate": "2026-05-25",
      "linkedReviewId": "phase1-02"
    },
    {
      "id": "task-phase1-02-007",
      "task": "Enter data extraction fields into NK",
      "owner": "Meghan / Response Team",
      "status": "In Progress",
      "risk": "Medium",
      "due": "2026-05-31",
      "dependency": "Final data item list",
      "communication": "Meghan confirmed she would start entering data fields into NK",
      "source": "Email",
      "sourceDate": "2026-05-20",
      "linkedReviewId": "phase1-02"
    },
    {
      "id": "task-phase1-02-008",
      "task": "Confirm conventional extraction format",
      "owner": "Emilie / Robin / Sean",
      "status": "In Progress",
      "risk": "Medium",
      "due": "2026-05-31",
      "dependency": "Standalone data item definitions",
      "communication": "Conventional team clarified expected Excel and Word outputs",
      "source": "Email",
      "sourceDate": "2026-05-26",
      "linkedReviewId": "phase1-02"
    },
    {
      "id": "task-phase1-02-009",
      "task": "Confirm no further data item changes before AI extraction",
      "owner": "Sean / Review Team",
      "status": "Pending",
      "risk": "High",
      "due": "Immediate",
      "dependency": "NK setup completion",
      "communication": "Sean asked extractors to follow agreed instructions before AI extraction begins",
      "source": "Email",
      "sourceDate": "2026-05-27",
      "linkedReviewId": "phase1-02"
    },
    {
      "task": "Confirm no further data item changes before AI extraction",
      "owner": "Sean / Review Team",
      "status": "Open",
      "due": "Immediate",
      "dependency": "Monitor risk",
      "linkedReviewId": "phase1-02",
      "communication": "Needed before AI-assisted data extraction begins in NK"
    },
    {
      "task": "Conventional extraction format alignment",
      "owner": "Emilie / Robin / Sean",
      "status": "In Progress",
      "due": "2026-05-31",
      "dependency": "Monitor risk",
      "linkedReviewId": "phase1-02",
      "communication": "Conventional outputs need to match agreed standalone data item structure"
    },
    {
      "id": "task-phase1-03-005",
      "task": "Confirm Laser AI training completion",
      "owner": "Rebecca / Kate / Laser AI",
      "status": "Complete",
      "risk": "Low",
      "due": "2026-05-27",
      "dependency": "Training invite",
      "communication": "Team proceeded with Laser AI training",
      "source": "Email",
      "sourceDate": "2026-05-27",
      "linkedReviewId": "phase1-03"
    },
    {
      "id": "task-phase1-03-006",
      "task": "Schedule methodology re-onboarding",
      "owner": "Gerald / Krishna / Review Team",
      "status": "Pending",
      "risk": "Medium",
      "due": "This week",
      "dependency": "Krishna could not join tool training",
      "communication": "Separate check-in needed to confirm workflow and methodology",
      "source": "Email",
      "sourceDate": "2026-05-27",
      "linkedReviewId": "phase1-03"
    },
    {
      "id": "task-phase1-03-007",
      "task": "Confirm updated search completion",
      "owner": "Rebecca / Kate",
      "status": "Pending",
      "risk": "Medium",
      "due": "Immediate",
      "dependency": "Search run around 20 May",
      "communication": "Need confirmation of final search status",
      "source": "Email",
      "sourceDate": "2026-05-20",
      "linkedReviewId": "phase1-03"
    },
    {
      "id": "task-phase1-03-008",
      "task": "Confirm human abstract screening status",
      "owner": "Rebecca / Kate",
      "status": "Pending",
      "risk": "High",
      "due": "Immediate",
      "dependency": "Parallel workflow tracking",
      "communication": "Need to confirm whether human screening started, postponed, or ongoing",
      "source": "Email",
      "sourceDate": "2026-05-27",
      "linkedReviewId": "phase1-03"
    },
    {
      "id": "task-phase1-03-009",
      "task": "Confirm time recording",
      "owner": "Rebecca / Kate",
      "status": "Pending",
      "risk": "Medium",
      "due": "Immediate",
      "dependency": "Training/screening activity",
      "communication": "Confirm training and screening time have been recorded",
      "source": "Email",
      "sourceDate": "2026-05-27",
      "linkedReviewId": "phase1-03"
    },
    {
      "task": "Methodology re-onboarding still pending",
      "owner": "Gerald / Krishna / Review Team",
      "status": "Open",
      "due": "This week",
      "dependency": "Monitor risk",
      "linkedReviewId": "phase1-03",
      "communication": "Needed because Krishna could not join the Laser AI tool training session"
    },
    {
      "task": "Human abstract screening status not confirmed",
      "owner": "Rebecca / Kate",
      "status": "Open",
      "due": "Immediate",
      "dependency": "Monitor risk",
      "linkedReviewId": "phase1-03",
      "communication": "Needed to ensure AI-assisted and human workflows are tracked in parallel"
    },
    {
      "task": "Updated search completion not confirmed",
      "owner": "Rebecca / Kate",
      "status": "Open",
      "due": "Immediate",
      "dependency": "Monitor risk",
      "linkedReviewId": "phase1-03",
      "communication": "Search was run around 20 May, but final completion/status needs confirmation"
    },
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
      "sourceDate": "2026-05-14",
      "linkedReviewId": "phase1-04"
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
      "sourceDate": "2026-05-14",
      "linkedReviewId": "phase1-04"
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
      "sourceDate": "2026-05-14",
      "linkedReviewId": "phase1-04"
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
      "sourceDate": "2026-05-14",
      "linkedReviewId": "phase1-04"
    },
    {
      "task": "Eligibility and participation not confirmed",
      "owner": "TBD",
      "status": "Open",
      "due": "Monitor",
      "dependency": "Monitor risk",
      "linkedReviewId": "phase1-04",
      "communication": ""
    },
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
      "sourceDate": "2026-05-14",
      "linkedReviewId": "phase1-05"
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
      "sourceDate": "2026-05-14",
      "linkedReviewId": "phase1-05"
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
      "sourceDate": "2026-05-14",
      "linkedReviewId": "phase1-05"
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
      "sourceDate": "2026-05-14",
      "linkedReviewId": "phase1-05"
    },
    {
      "task": "Open Phase 1 review slot",
      "owner": "TBD",
      "status": "Open",
      "due": "Monitor",
      "dependency": "Monitor risk",
      "linkedReviewId": "phase1-05",
      "communication": ""
    },
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
      "sourceDate": "2026-05-14",
      "linkedReviewId": "phase2-01"
    },
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
      "sourceDate": "2026-05-07",
      "linkedReviewId": "pilot-01"
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
      "sourceDate": "2026-05-07",
      "linkedReviewId": "pilot-01"
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
      "sourceDate": "2026-05-10",
      "linkedReviewId": "pilot-01"
    },
    {
      "task": "Full-text time not reported",
      "owner": "TBD",
      "status": "Open",
      "due": "Monitor",
      "dependency": "Monitor risk",
      "linkedReviewId": "pilot-01",
      "communication": ""
    },
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
      "sourceDate": "2026-05-10",
      "linkedReviewId": "pilot-02"
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
      "sourceDate": "2026-05-10",
      "linkedReviewId": "pilot-02"
    },
    {
      "task": "Pilot output status unclear",
      "owner": "TBD",
      "status": "Open",
      "due": "Monitor",
      "dependency": "Monitor risk",
      "linkedReviewId": "pilot-02",
      "communication": ""
    }
  ],
  "criticalItems": [
    {
      "id": "critical-phase1-01-1",
      "phase": "Phase 1",
      "item": "Data items finalization recently resolved",
      "description": "",
      "severity": "Low",
      "status": "Open",
      "owner": "TBD",
      "due": "Monitor",
      "linkedReviewId": "phase1-01",
      "mitigation": "",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "critical-phase1-01-2",
      "phase": "Phase 1",
      "item": "Human abstract screening status not yet confirmed",
      "description": "Needed to confirm whether AI and conventional workflows are aligned before next stage",
      "severity": "High",
      "status": "Open",
      "owner": "Doreen Larvie / Review Team",
      "due": "Immediate",
      "linkedReviewId": "phase1-01",
      "mitigation": "Needed to confirm whether AI and conventional workflows are aligned before next stage",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "critical-phase1-01-3",
      "phase": "Phase 1",
      "item": "Abstract screening time log pending",
      "description": "Required for study analysis and comparison",
      "severity": "Medium",
      "status": "Open",
      "owner": "Review Team",
      "due": "Immediate",
      "linkedReviewId": "phase1-01",
      "mitigation": "Required for study analysis and comparison",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "critical-phase1-02-4",
      "phase": "Phase 1",
      "item": "Confirm no further data item changes before AI extraction",
      "description": "Needed before AI-assisted data extraction begins in NK",
      "severity": "High",
      "status": "Open",
      "owner": "Sean / Review Team",
      "due": "Immediate",
      "linkedReviewId": "phase1-02",
      "mitigation": "Needed before AI-assisted data extraction begins in NK",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-05-27"
    },
    {
      "id": "critical-phase1-02-5",
      "phase": "Phase 1",
      "item": "Conventional extraction format alignment",
      "description": "Conventional outputs need to match agreed standalone data item structure",
      "severity": "Medium",
      "status": "In Progress",
      "owner": "Emilie / Robin / Sean",
      "due": "2026-05-31",
      "linkedReviewId": "phase1-02",
      "mitigation": "Conventional outputs need to match agreed standalone data item structure",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-05-27"
    },
    {
      "id": "critical-phase1-03-6",
      "phase": "Phase 1",
      "item": "Methodology re-onboarding still pending",
      "description": "Needed because Krishna could not join the Laser AI tool training session",
      "severity": "Medium",
      "status": "Open",
      "owner": "Gerald / Krishna / Review Team",
      "due": "This week",
      "linkedReviewId": "phase1-03",
      "mitigation": "Needed because Krishna could not join the Laser AI tool training session",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-05-27"
    },
    {
      "id": "critical-phase1-03-7",
      "phase": "Phase 1",
      "item": "Human abstract screening status not confirmed",
      "description": "Needed to ensure AI-assisted and human workflows are tracked in parallel",
      "severity": "High",
      "status": "Open",
      "owner": "Rebecca / Kate",
      "due": "Immediate",
      "linkedReviewId": "phase1-03",
      "mitigation": "Needed to ensure AI-assisted and human workflows are tracked in parallel",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-05-27"
    },
    {
      "id": "critical-phase1-03-8",
      "phase": "Phase 1",
      "item": "Updated search completion not confirmed",
      "description": "Search was run around 20 May, but final completion/status needs confirmation",
      "severity": "Medium",
      "status": "Open",
      "owner": "Rebecca / Kate",
      "due": "Immediate",
      "linkedReviewId": "phase1-03",
      "mitigation": "Search was run around 20 May, but final completion/status needs confirmation",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-05-27"
    },
    {
      "id": "critical-phase1-04-9",
      "phase": "Phase 1",
      "item": "Eligibility and participation not confirmed",
      "description": "",
      "severity": "High",
      "status": "Open",
      "owner": "TBD",
      "due": "Monitor",
      "linkedReviewId": "phase1-04",
      "mitigation": "",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-06-07"
    },
    {
      "id": "critical-phase1-05-10",
      "phase": "Phase 1",
      "item": "Open Phase 1 review slot",
      "description": "",
      "severity": "High",
      "status": "Open",
      "owner": "TBD",
      "due": "Monitor",
      "linkedReviewId": "phase1-05",
      "mitigation": "",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-06-07"
    },
    {
      "id": "critical-pilot-01-11",
      "phase": "Pilot",
      "item": "Full-text time not reported",
      "description": "",
      "severity": "Medium",
      "status": "Open",
      "owner": "TBD",
      "due": "Monitor",
      "linkedReviewId": "pilot-01",
      "mitigation": "",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-05-14"
    },
    {
      "id": "critical-pilot-02-12",
      "phase": "Pilot",
      "item": "Pilot output status unclear",
      "description": "",
      "severity": "Medium",
      "status": "Open",
      "owner": "TBD",
      "due": "Monitor",
      "linkedReviewId": "pilot-02",
      "mitigation": "",
      "impact": "",
      "source": "Review sheet",
      "sourceDate": "2026-05-14"
    }
  ],
  "resources": [
    {
      "id": "res-001",
      "title": "General information folder",
      "type": "Folder",
      "purpose": "Shared folder with onboarding and scope documents.",
      "description": "Shared folder with onboarding and scope documents.",
      "audience": "Project team",
      "owner": "Krishna",
      "status": "Active",
      "linkedReviewId": "All",
      "linkedPhase": "Phase 1",
      "url": "https://example.com/general-folder"
    },
    {
      "id": "res-002",
      "title": "Scope document",
      "type": "PDF",
      "purpose": "Protocol/scope document for the study.",
      "description": "Protocol/scope document for the study.",
      "audience": "Project team",
      "owner": "Krishna",
      "status": "Active",
      "linkedReviewId": "All",
      "linkedPhase": "Phase 1",
      "url": "https://example.com/scope"
    },
    {
      "id": "res-003",
      "title": "Review team onboarding slides",
      "type": "Presentation",
      "purpose": "Presentation shared with review teams.",
      "description": "Presentation shared with review teams.",
      "audience": "Project team",
      "owner": "Krishna",
      "status": "Active",
      "linkedReviewId": "All",
      "linkedPhase": "Phase 1",
      "url": "https://example.com/onboarding"
    }
  ],
  "upcomingMeetings": [
    {
      "id": "mtg-01",
      "date": "8 June 2026",
      "etTime": "2:00-3:00 AM EDT",
      "ukTime": "7:00-8:00 AM BST",
      "title": "NK Training - Medication Adherence",
      "agenda": "CDT calendar time: Jun 8, 1:00-2:00 AM. Nested Knowledge training for Medication Adherence.",
      "attendees": "Amanda Cross / Rehan Sarwar / Krishna / Nested Knowledge",
      "owner": "Krishna",
      "focus": "Phase 1",
      "status": "Scheduled",
      "linkedReviewId": "phase1-04",
      "meetingLink": ""
    },
    {
      "id": "mtg-02",
      "date": "8 June 2026",
      "etTime": "3:00-4:00 AM EDT",
      "ukTime": "8:00-9:00 AM BST",
      "title": "Onboarding - Medication Adherence",
      "agenda": "CDT calendar time: Jun 8, 2:00-3:00 AM. Onboarding and split-team workflow confirmation.",
      "attendees": "Amanda Cross / Rehan Sarwar / Krishna",
      "owner": "Krishna",
      "focus": "Phase 1",
      "status": "Scheduled",
      "linkedReviewId": "phase1-04",
      "meetingLink": ""
    },
    {
      "id": "mtg-03",
      "date": "12 June 2026",
      "etTime": "5:00-6:00 AM EDT",
      "ukTime": "10:00-11:00 AM BST",
      "title": "Vitamin C Onboarding",
      "agenda": "CDT calendar time: Jun 12, 4:00-5:00 AM. Review onboarding for Vitamin C.",
      "attendees": "Jai Das / Krishna / Core Team",
      "owner": "Krishna",
      "focus": "Phase 1",
      "status": "Scheduled",
      "linkedReviewId": "phase1-05",
      "meetingLink": ""
    },
    {
      "id": "mtg-04",
      "date": "8 June 2026",
      "etTime": "10:00-11:00 AM EDT",
      "ukTime": "3:00-4:00 PM BST",
      "title": "AI Pilot Core Project Team Catch-up",
      "agenda": "CDT calendar time: 9:00-10:00 AM. Core project team catch-up.",
      "attendees": "Core Project Team",
      "owner": "Krishna",
      "focus": "Project coordination",
      "status": "Scheduled",
      "linkedReviewId": "",
      "meetingLink": ""
    }
  ],
  "newReviews": [
    {
      "id": "new-01",
      "reviewName": "Mohan Pammi &#8212; Human milk-derived fortifier versus bovine milk-derived fortifier for prevention of mortality and morbidity in preterm neonates",
      "category": "Shortlisted",
      "status": "Pending",
      "targetPhase": "Phase 1",
      "lead": "Mohan Pammi",
      "expectedTiming": "Future candidate",
      "remarks": "Moved back to shortlisted pipeline.",
      "moveToFullSheet": "No",
      "display": "Yes"
    },
    {
      "id": "new-03",
      "reviewName": "Jai Das &#8212; Preventive lipid-based nutrient supplements given with complementary foods to infants and young children 6 to 23 months of age for health, nutrition, and developmental outcomes",
      "category": "Under Shortlisting",
      "status": "Search by July 2026",
      "targetPhase": "Phase 1",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": "Yes"
    },
    {
      "id": "new-06",
      "reviewName": "Lesly Chavez Rimache / Cochrane Peru",
      "category": "Future Phase",
      "status": "Two systematic review proposals have been submitted to Cochrane, but they are still awaiting evaluation/acceptance and are not yet at protocol/search stage.",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    },
    {
      "id": "new-07",
      "reviewName": "Minyahil Tadesse / Cochrane Ethiopia",
      "category": "Future Phase",
      "status": "Two Cochrane protocols have been published, but the full review work/searches have not yet started",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    },
    {
      "id": "new-08",
      "reviewName": "Francesco Nonino",
      "category": "Future Phase",
      "status": "No suitable updates are currently available, but he will monitor and share any potential review updates later this year.",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    },
    {
      "id": "new-09",
      "reviewName": "Giulio Cherubini &#8212; Impact of Manual Therapy on Instrumentalist Musicians With Playing-Related Musculoskeletal Disorders: A Systematic Review",
      "category": "Not Eligible",
      "status": "Non-Cochrane review",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    },
    {
      "id": "new-10",
      "reviewName": "Francesca Cecchi / Giulio Cherubini &#8212; Effects of lower limb botulinum toxin injections on gait functional outcomes in stroke survivors",
      "category": "Not Eligible",
      "status": "Non-Cochrane review",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    },
    {
      "id": "new-11",
      "reviewName": "Feng Sun / Zuhaer &#8212; Automated Insulin Delivery Systems in Children and Adolescents With Type 1 Diabetes",
      "category": "Not Eligible",
      "status": "Non-Cochrane review",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    },
    {
      "id": "new-12",
      "reviewName": "Patricia Clark &#8212; Effectiveness and safety of pharmacological interventions for the primary prevention of osteoporosis in postmenopausal women",
      "category": "Not Eligible",
      "status": "Independent/non-Cochrane review",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    },
    {
      "id": "new-13",
      "reviewName": "Alison Edelman &#8212; Meningioma and hormonal contraceptives",
      "category": "Not Eligible",
      "status": "Currently planned outside Cochrane",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    },
    {
      "id": "new-14",
      "reviewName": "Elena Kostova &#8212; Screening for genital chlamydia infection",
      "category": "Not Eligible",
      "status": "Cochrane review update, but not eligible because abstract screening had already started and more than half of the records had already been screened. The team also could not meet the required parallel workflow structure.",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    },
    {
      "id": "new-15",
      "reviewName": "Patricia C. Heyn &#8212; Aerobic and Resistance Training Interventions for Cognitive Outcomes in Older Adults with Mild Cognitive Impairment and Alzheimer's Disease and Related Dementias: An Umbrella Review of Meta-Analyses of Randomized Trials",
      "category": "Not Eligible",
      "status": "Not eligible because it is not a Cochrane review update and most methods are already completed, with the team validating the database and starting analysis.",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    },
    {
      "id": "new-16",
      "reviewName": "Zuhaer / Feng Sun &#8212; Gas gangrene Cochrane Review update",
      "category": "Not Eligible",
      "status": "Not eligible for the current phase because the team is considering expanding the scope to include observational studies, which would require a major methodological change and may not align with the current validation workflow/timeline.",
      "targetPhase": "",
      "lead": "",
      "expectedTiming": "",
      "remarks": "",
      "moveToFullSheet": "No",
      "display": ""
    }
  ]
};
