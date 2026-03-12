# LinkedIn Deleter

Bulk delete LinkedIn posts using Playwright via a simple CLI.

## Features

- Automatically logs into LinkedIn
- Deletes posts or reposts from your activity page
- Easy terminal input for the number of posts to delete
- Saves your session to avoid logging in every time
- Safe, educational, and personal automation tool

## Installation

Run via `npx` (no install needed)

```bash
npx linkedin-deleter 10
```

Or install globally

```
npm install -g linkedin-deleter
linkedin-deleter 10
```

## Usage

**Warning:** Deletion is permanent.

```
linkedin-deleter <number-of-posts>
```

The CLI will delete the specified number of posts from your LinkedIn activity.

```
linkedin-deleter 50
```

## File Structure

```
linkedin-deleter/
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
```

## Notes

- LinkedIn UI changes may require updates to selectors in the script.

- Always double-check the number of posts before deletion.

- Use responsibly and in compliance with LinkedIn’s terms of service.

## Contributing

- Fork the repository

- Make your changes

- Open a Pull Request

## License

This project is licensed under the terms of the MIT License.

```

```
