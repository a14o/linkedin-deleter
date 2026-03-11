const { spawnSync } = require("child_process");

const result = spawnSync("node", ["bin/cli.js", "1"], {
  encoding: "utf-8"
});

if (result.error) {
  console.error("CLI failed to run");
  process.exit(1);
}

console.log("CLI test passed");