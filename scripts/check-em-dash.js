#!/usr/bin/env node
/* Fails the build/lint if an em dash (—) shows up anywhere in the live app
   source or the legacy static HTML files. Scope matches the 25A/25B cleanup:
   app/, components/, and the three root-level index.html/about.html/work.html
   files. docs/ and AGENT.md are intentionally excluded (internal docs, not
   site copy). */
const fs = require("fs");
const path = require("path");

const EM_DASH = "—";
const ROOT = path.resolve(__dirname, "..");

const SCAN_DIRS = ["app", "components"];
const SCAN_FILES = ["index.html", "about.html", "work.html"];
const EXTENSIONS = new Set([".ts", ".tsx", ".css", ".html"]);

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, out);
    } else if (EXTENSIONS.has(path.extname(entry.name))) {
      out.push(fullPath);
    }
  }
}

const files = [];
for (const dir of SCAN_DIRS) {
  const abs = path.join(ROOT, dir);
  if (fs.existsSync(abs)) walk(abs, files);
}
for (const file of SCAN_FILES) {
  const abs = path.join(ROOT, file);
  if (fs.existsSync(abs)) files.push(abs);
}

let violations = [];
for (const file of files) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  lines.forEach((line, index) => {
    if (line.includes(EM_DASH)) {
      violations.push(`${path.relative(ROOT, file)}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (violations.length > 0) {
  console.error("\nEm dash (—) found. Replace with a comma, colon, period, or parentheses:\n");
  violations.forEach((v) => console.error("  " + v));
  console.error(`\n${violations.length} occurrence(s) found.\n`);
  process.exit(1);
}

console.log("No em dashes found in app/, components/, or the legacy static HTML files.");
