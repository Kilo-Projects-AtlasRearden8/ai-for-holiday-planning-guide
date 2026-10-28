// tests/build-test.js - Verifies the static site build output.
const assert = require("assert");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE_DIR = path.join(ROOT, "site");

const EXPECTED_PAGES = [
  "index.html",
  "getting-started.html",
  "gift-ideas-and-budgets.html",
  "travel-plans.html",
  "gathering-checklists.html",
  "meal-plans.html",
  "post-holiday-decluttering.html",
  "ai-prompts.html",
  "printable-planners.html",
];

function read(file) {
  return fs.readFileSync(path.join(SITE_DIR, file), "utf8");
}

let failures = 0;

function check(name, condition) {
  if (!condition) {
    console.error("FAIL: " + name);
    failures++;
  } else {
    console.log("ok: " + name);
  }
}

// 1. Build first
const { build } = require(path.join(ROOT, "build.js"));
let results = build();
console.log("Build produced " + results.length + " pages.");

// 2. Every expected page exists
EXPECTED_PAGES.forEach(function (page) {
  check("site contains " + page, fs.existsSync(path.join(SITE_DIR, page)));
});

// 3. style.css exists
check("site contains style.css", fs.existsSync(path.join(SITE_DIR, "style.css")));

// 4. Print styles exist for the printable planners
let css = read("style.css");
check("style.css has print media query", css.includes("@media print"));

// 5. Content spot checks
let index = read("index.html");
check("index has site title", index.includes("AI for Holiday Planning"));
check("index credits Asdale Dynamics", index.includes("Asdale Dynamics, LLC"));
check("index links to gifts page", index.includes('href="gift-ideas-and-budgets.html"'));
check("index links to travel page", index.includes('href="travel-plans.html"'));
check("index links to gathering page", index.includes('href="gathering-checklists.html"'));
check("index links to meal plans page", index.includes('href="meal-plans.html"'));
check("index links to decluttering page", index.includes('href="post-holiday-decluttering.html"'));
check("index has no dangling .md links", !index.includes(".md"));

// 6. Each page has the credit footer and copyright line
EXPECTED_PAGES.forEach(function (page) {
  let html = read(page);
  check(page + " credits Asdale Dynamics", html.includes("Asdale Dynamics, LLC"));
  check(page + " has copyright line", html.includes("Copyright (c) 2026 Asdale Dynamics, LLC"));
  check(page + " has no dangling .md links", !html.includes(".md"));
  check(page + " has nav", html.includes('<nav class="top-nav">'));
});

// 7. Specific content
check("getting started page mentions free AI tools", read("getting-started.html").includes("free"));
check("gifts page mentions budget table", read("gift-ideas-and-budgets.html").includes("Budget"));
check("travel page mentions packing list", read("travel-plans.html").includes("Packing"));
check("gathering page mentions RSVP", read("gathering-checklists.html").includes("RSVP"));
check("meal plans page mentions grocery list", read("meal-plans.html").includes("Grocery"));
check("decluttering page mentions four piles", read("post-holiday-decluttering.html").includes("donate"));
check("prompts page mentions copy and paste", read("ai-prompts.html").includes("Copy-and-paste"));
check("planners page mentions gift budget planner", read("printable-planners.html").includes("Gift Budget Planner"));

// 8. Each page has substantive content (not empty)
EXPECTED_PAGES.forEach(function (page) {
  let html = read(page);
  let textLength = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().length;
  check(page + " has substantive content (> 300 chars)", textLength > 300);
}

);

if (failures > 0) {
  console.error("\n" + failures + " test(s) failed.");
  process.exit(1);
}
console.log("\nAll tests passed.");
