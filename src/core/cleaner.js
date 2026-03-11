const { startBrowser } = require("../auth/login");
const { goToActivity } = require("../actions/navigate");
const { runDeletionLoop } = require("../actions/deleteLoop");

async function runCleaner(maxDeletes) {

  console.log(`LinkedIn Post Deleter\n----------------`);

  const { browser, page } = await startBrowser();

  await goToActivity(page);

  await runDeletionLoop(page, maxDeletes);

  await browser.close();

  console.log("Deleting completed.");
}

module.exports = { runCleaner };