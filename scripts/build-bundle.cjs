// Builds the Azure App Service bundle: deploy/app.zip.
//
//   node scripts/build-bundle.cjs [--skip-build]
//
// 1. frontend build (npm run build -> dist/, which includes public/notes)
// 2. mirror dist/ into server/frontend-dist/ (served by app.ts when NODE_ENV=production)
// 3. type-check the server (npm run build in server/)
// 4. zip server/ the way Azure expects it: sources, data and frontend-dist, but no node_modules,
//    dist, uploads, test or .env (App Service installs and builds on deploy)
//
// It fails when the bundle would be missing the landing page, Study Hub or the notes.
const fs = require("fs");
const path = require("path");
const { execSync, execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const server = path.join(root, "server");
const dist = path.join(root, "dist");
const frontendDist = path.join(server, "frontend-dist");
const outDir = path.join(root, "deploy");
const zipPath = path.join(outDir, "app.zip");
const skipBuild = process.argv.includes("--skip-build");

const EXCLUDE_DIRS = new Set(["node_modules", "dist", "uploads", "coverage", "test"]);
const isExcludedFile = (name) => name === ".env" || (name.startsWith(".env.") && name !== ".env.example") || name.endsWith(".zip") || name.endsWith(".log");
const REQUIRED = ["index.html", "study-hub/index.html", "landing", "notes", "assets"];

function run(cmd, cwd) {
  console.log(`> ${cmd}  (${path.relative(root, cwd) || "."})`);
  execSync(cmd, { cwd, stdio: "inherit" });
}

function sizeOf(dir) {
  let bytes = 0, files = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { const s = sizeOf(p); bytes += s.bytes; files += s.files; }
    else { bytes += fs.statSync(p).size; files++; }
  }
  return { bytes, files };
}

const mb = (b) => `${(b / 1048576).toFixed(1)} MB`;

if (!skipBuild) run("npm run build", root);
if (!fs.existsSync(path.join(dist, "index.html"))) throw new Error("dist/index.html is missing: the frontend build did not run");

fs.rmSync(frontendDist, { recursive: true, force: true });
fs.cpSync(dist, frontendDist, { recursive: true });
const missing = REQUIRED.filter((p) => !fs.existsSync(path.join(frontendDist, p)));
if (missing.length) throw new Error(`server/frontend-dist is missing: ${missing.join(", ")}`);
const fe = sizeOf(frontendDist);
console.log(`frontend-dist: ${fe.files} files, ${mb(fe.bytes)}`);

if (!skipBuild) run("npm run build", server);

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!EXCLUDE_DIRS.has(e.name)) walk(p); }
    else if (!isExcludedFile(e.name)) files.push(path.relative(server, p).split(path.sep).join("/"));
  }
})(server);

fs.mkdirSync(outDir, { recursive: true });
fs.rmSync(zipPath, { force: true });
const listFile = path.join(outDir, "filelist.txt");
fs.writeFileSync(listFile, files.join("\n"), "utf8");
// Windows' bsdtar writes zip archives with -a; GNU tar (Git Bash) cannot.
const tar = process.platform === "win32" ? path.join(process.env.SystemRoot || "C:\\Windows", "System32", "tar.exe") : "bsdtar";
execFileSync(tar, ["-a", "-c", "-f", zipPath, "-T", listFile], { cwd: server, stdio: "inherit" });
fs.rmSync(listFile);

console.log(`bundle: ${path.relative(root, zipPath)}  ${files.length} files, ${mb(fs.statSync(zipPath).size)}`);
