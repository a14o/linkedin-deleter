#!/usr/bin/env node
require("dotenv").config();

const { program } = require("commander");
const { runCleaner } = require("../src/core/cleaner");

program
  .name("linkedin-deleter")
  .description("Bulk delete LinkedIn posts")
  .version("1.0.0")
  .argument("<count>", "number of posts to delete")
  .option("-v, --verbose", "verbose output")
  .parse();
const count = parseInt(program.args[0], 10);

if (isNaN(count) || count <= 0) {
  console.error("Please provide a valid number of posts to delete.");
  process.exit(1);
}

runCleaner(count).catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});