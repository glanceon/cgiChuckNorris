# Chuck Norris Joke Generator

Simple React app that shows Chuck Norris jokes using data from https://api.chucknorris.io.

Built it to practice React + Redux Toolkit, and to show I can set up a project structure like I would in a real-world app.

---

## Features

- Shows one random joke when the page loads
- Lets you:
  - Search for a joke by keyword
  - Get a joke from a selected category
- Replaces the previous joke with the new one
- Clean UI with Material UI
- Code quality checks with ESLint and Prettier
- Git hooks (Husky) + lint-staged
- Commit message rules enforced with Commitlint

---

## Stack

- React
- Redux Toolkit
- Material UI
- Vite
- ESLint + Prettier
- Jest (unit tests for reducer only for now)
- Husky, lint-staged, commitlint

---

## Getting Started

```bash
yarn
yarn dev
```

### Other scripts

```bash
yarn test        # Run Jest tests
yarn lint        # Run ESLint
yarn format      # Format files with Prettier
```

---

## Git hooks

- Pre-commit → runs ESLint + Prettier on staged files
- Commit message → must follow conventional commits (`feat:`, `fix:`, etc.)

---

## Notes

- I structured it like a real project (modular features, clear slices)
- Used Flat ESLint config (v9+)
- Hooks are working on Windows with WSL
- Not using TypeScript here, but project is ready for it if needed

---

## License

MIT