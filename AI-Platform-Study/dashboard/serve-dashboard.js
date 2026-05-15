const http = require("http");
const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");

const root = __dirname;
const port = 4173;
let exportInProgress = null;

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function shouldRefreshData(target) {
  return target === "/index.html" || target === "/data.js";
}

function refreshData() {
  if (!exportInProgress) {
    exportInProgress = new Promise((resolve, reject) => {
      childProcess.execFile("node", ["export-data-js.js"], { cwd: root }, (error, stdout, stderr) => {
        exportInProgress = null;
        if (stdout) process.stdout.write(stdout);
        if (stderr) process.stderr.write(stderr);
        if (error) reject(error);
        else resolve();
      });
    });
  }
  return exportInProgress;
}

const server = http.createServer(async (req, res) => {
  const cleanPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const target = cleanPath === "/" ? "/index.html" : cleanPath;
  const filePath = path.join(root, target);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (shouldRefreshData(target)) {
    try {
      await refreshData();
    } catch (error) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`Could not regenerate data.js from Excel.\n\n${error.message}`);
      return;
    }
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    res.end(content);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Dashboard available at http://127.0.0.1:${port}/`);
  console.log("Local refresh mode: Excel is exported to data.js when index.html or data.js is requested.");
});
