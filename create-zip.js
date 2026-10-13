const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const src = "D:\\COACH\\study-app\\server";
const zipPath = "D:\\COACH\\study-app\\deploy4.zip";

const excludeDirs = ["node_modules", "uploads", "dist"];
const excludeFiles = [".env"];

// Collect relative paths with forward slashes
const files = [];
function walk(dir, baseDir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath).replace(/\\/g, "/");
    if (entry.isDirectory()) {
      if (!excludeDirs.includes(entry.name)) {
        walk(fullPath, baseDir);
      }
    } else if (!excludeFiles.includes(entry.name) && !entry.name.endsWith(".env")) {
      files.push(relPath);
    }
  }
}
walk(src, src);
console.log("Files to zip: " + files.length);

const listFile = "D:\\COACH\\study-app\\filelist.txt";
fs.writeFileSync(listFile, files.join("\r\n"), "utf-8");

try {
  execSync(
    `tar -a -c -f "${zipPath}" -T "${listFile}"`,
    { cwd: src, stdio: "pipe" }
  );
  console.log("Created zip via tar");

  // Verify entries (show first 20)
  const result = execSync(`tar -tf "${zipPath}"`, { cwd: src, stdio: "pipe" });
  const entries = result.toString().split("\n").filter(Boolean);
  console.log("Total entries: " + entries.length);
  entries.slice(0, 20).forEach((e) => console.log(e));
} catch (e) {
  console.error("tar failed: " + e.message);
}
