const { deletePost } = require("./deletePost");
const { logDeleted, logError } = require("../utils/logger");

async function runDeletionLoop(page, maxDeletes) {
  let deleted = 0;

  while (deleted < maxDeletes) {
    try {
      const post = await page.waitForSelector('div.feed-shared-update-v2', { timeout: 10000 });

      if (!post) {
        console.log("No posts visible after waiting, stopping...");
        break;
      }

      const success = await deletePost(page, post);

      if (success) {
        deleted++;
        console.log(`Deleted post ${deleted}`);
        logDeleted(`Deleted post ${deleted} at ${new Date().toISOString()}`);
        await page.reload({ waitUntil: "domcontentloaded" });

      } else {
        console.log("Could not delete post, skipping...");
        await page.reload({ waitUntil: "domcontentloaded" });
      }

    } catch (err) {
      if (err.name === 'TimeoutError') {
        console.log("No posts appeared after waiting, finishing loop.");
        break;
      } else {
        console.log("Error during deletion loop:", err.message);
        logError(err.message);
        if (!page.isClosed()) {
          await page.reload({ waitUntil: "domcontentloaded" });
        } else {
          break;
        }
      }
    }
  }

  console.log(`Finished. Total deleted: ${deleted}`);
}

module.exports = { runDeletionLoop };