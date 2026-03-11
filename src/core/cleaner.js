const { startBrowser } = require("../auth/login");
const { goToActivity } = require("../actions/navigate");
const { runDeletionLoop } = require("../actions/deleteLoop");

async function runCleaner(maxDeletes) {

  console.log("LinkedIn Cleaner\n");

  const { browser, page } = await startBrowser();

  await goToActivity(page);

  await runDeletionLoop(page, maxDeletes);

  await browser.close();

  console.log("Cleaning completed.");
}

module.exports = { runCleaner };