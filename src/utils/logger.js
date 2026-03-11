function logDeleted(message) {
  const entry = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync(deletedLog, entry);
}

function logError(message) {
  const entry = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync(errorLog, entry);
}