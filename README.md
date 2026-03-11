# LinkedIn Cleaner

Bulk delete LinkedIn posts using Playwright.

## Run

npx linkedin-cleaner 50

## Install globally

npm install -g linkedin-cleaner

linkedin-cleaner 50

## File Structure

linkedin-post-deleter/
│
├─ bin/
│ └─ cli.js
│
├─ src/
│ ├─ auth/
│ │ └─ login.js
│ │
│ ├─ actions/
│ │ ├─ deleteLoop.js
│ │ ├─ deletePost.js
│ │ └─ navigate.js
│ │
│ ├─ utils/
│ │ └─ logger.js
│ │
│ └─ core/
│ └─ cleaner.js
│
├─ storage/
│ └─ linkedin-session.json
│
├─ logs/
│
├─ tests/
│ └─ cli.test.js
│
├─ package.json
├─ README.md
├─ .gitignore
