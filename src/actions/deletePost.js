async function deletePost(page, post) {
  try {
    const menu = await post.waitForSelector(
      'button[aria-label*="menu"], button[aria-label*="More"]',
      { timeout: 5000 }
    );
    if (!menu) return false;
    await menu.click();

    const deleteButton = await page.waitForSelector(
      'li.option-delete h5, button:has-text("Delete repost")',
      { timeout: 5000 }
    );
    if (!deleteButton) return false;
    await deleteButton.click();

    const confirmButton = await page.waitForSelector(
      'button.artdeco-button--primary',
      { timeout: 5000 }
    );
    if (!confirmButton) return false;
    await confirmButton.click();

    return true;

  } catch (err) {
    console.log("Error deleting post:", err.message);
    return false;
  }
}

module.exports = { deletePost };