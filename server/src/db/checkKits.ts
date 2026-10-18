// CLI: npm run check:kit — validates data/exam-kits/*.json (shape, both languages, facts, quotas for published kits).
import path from "path";
import { checkKitFiles } from "./seedExamKits.js";

const data = path.resolve(__dirname, "../../data");
const problems = checkKitFiles(path.join(data, "exam-kits"), path.join(data, "questions"));
if (problems.length) {
  console.error(`${problems.length} problem(s):\n` + problems.map((p) => `  - ${p}`).join("\n"));
  process.exit(1);
}
console.log("exam kits OK");
