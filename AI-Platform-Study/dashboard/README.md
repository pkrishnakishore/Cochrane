# Cochrane AI Platform Study Dashboard

Static GitHub Pages dashboard for the Cochrane AI Platform Study. The Excel workbook is the source of truth, and `data.js` is generated from it.

Live dashboard: https://pkrishnakishore.github.io/Cochrane/AI-Platform-Study/dashboard/

## Commands

```bash
npm install
npm run validate
npm run export
npm run start
```

## Update Excel

1. Edit `data/cochrane_dashboard_backend_template.xlsx`.
2. Set `DisplayInHTML` to `Yes` for rows that should appear in the dashboard.
3. Use stable `ReviewID`, `WorkflowStepID`, `TaskID`, and `LinkedTaskID` values.
4. Save and close Excel before exporting.

During the transition, the exporter also supports the workbook at the project root. If both root and `data/` copies exist, it uses the newest saved workbook.

## Generate Data

Run:

```bash
npm run export
```

The exporter validates workbook data first, creates `backups/data.backup.js`, and then overwrites `data.js`.

To validate without changing `data.js`, run:

```bash
npm run validate
```

## Run Locally

Run:

```bash
npm run start
```

Open locally:

```text
http://127.0.0.1:4173/
```

Published dashboard:

```text
https://pkrishnakishore.github.io/Cochrane/AI-Platform-Study/dashboard/
```

When using the local server, refreshing the dashboard also regenerates `data.js` from Excel.

## Deploy On GitHub Pages

1. Run `npm run export`.
2. Review the local dashboard.
3. Commit and push:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `data.js`
   - `export-data-js.js`
   - `serve-dashboard.js`
   - `package.json`
   - `README.md`
   - `data/cochrane_dashboard_backend_template.xlsx`
4. Deploy the repository root with GitHub Pages.

GitHub Pages only serves static files. The live dashboard uses `index.html`, `styles.css`, `app.js`, and `data.js`; it does not run the Excel exporter online.

## Ownership

Krishna owns dashboard content updates. The regular workflow is:

```text
Update Excel -> validate/export -> review local dashboard -> commit and push
```
