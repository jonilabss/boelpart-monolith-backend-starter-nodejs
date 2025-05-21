# Boelpart Monolith Backend Starter NodeJs

Production-ready Node.js + TypeScript monolithic backend using Express and Yarn.

# Boelpart Monolith Backend Starter

<div align="center">
  <h2>🧱 Node.js + TypeScript Monolithic Starter</h2>
  <p>Production-ready backend starter with Express, TypeScript, ESLint, Prettier, and robust tooling setup.</p>
  <p>Built to scale full-featured Node.js apps with clean structure and maintainability in mind.</p>

  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/node-18+-green.svg" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/coverage-100%25-brightgreen" alt="Test Coverage" />
  <img src="https://img.shields.io/github/actions/workflow/status/YOUR_ORG/boelpart-backend/ci.yml" alt="CI Status" />
</div>

---

## Features

This starter is 🔋 **battery-included** with:

- ⚙️ **Express.js** for routing and API development
- ✨ **TypeScript** with strict compiler settings
- 🧱 **Modular Architecture** — structured by domain
- 🔐 **Security Middleware** — `helmet`, `cors`, `hpp`, `xss-clean`, `express-rate-limit`
- ⚠️ **Centralized Error Handling**
- 📈 **Logging** with `pino` or `winston`
- 🧪 **Jest** for unit and integration testing
- 🧹 **ESLint + Prettier** for clean code
- ⛔ **Conventional Commits** with Husky + Commitlint
- 🚦 **GitHub Actions** for CI linting and testing
- ✍️ **Path Aliases** via `@/`

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/jonilabss/boelpart-nodejs-monolith-ts.git
cd boelpart-nodejs-monolith-ts
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Start the Development Server

```bash
yarn dev
```

Runs the app in development mode with hot reload.

Default port: [http://localhost:3000](http://localhost:3000)

### 4. Run Tests

```bash
yarn test
```

To check test coverage:

```bash
yarn test:coverage
```

---

## Project Structure

```
.
├── src/
│   ├── app.ts             # Main Express app
│   ├── server.ts          # Entry point
│   ├── routes/            # Route modules
│   ├── controllers/       # Route handlers
│   ├── services/          # Business logic
│   ├── middleware/        # Global & custom middleware
│   ├── config/            # Environment/configs
│   └── utils/             # Shared utilities
├── tests/                 # Jest tests
├── dist/                  # Compiled output
├── .husky/                # Git hooks
├── .eslintrc.js           # ESLint config
├── .prettierrc            # Prettier config
├── tsconfig.json          # TS config (with aliases)
└── package.json
```

---

## Scripts

| Script               | Description                   |
| -------------------- | ----------------------------- |
| `yarn dev`           | Run in dev mode (nodemon)     |
| `yarn build`         | Compile TypeScript to `dist/` |
| `yarn start`         | Run built app                 |
| `yarn lint`          | Lint code using ESLint        |
| `yarn format`        | Format code using Prettier    |
| `yarn test`          | Run Jest tests                |
| `yarn test:coverage` | Run tests with coverage       |

---

## Commit Convention

This project uses **Conventional Commits**, enforced via Commitlint + Husky.

Example:

```bash
git commit -m "feat(auth): add login endpoint"
```

---

## Deployment

The project is production-ready and can be deployed to:

- **Docker** container
- **VPS** using **PM2**
- **PaaS**: Railway, Render, Heroku, etc.

To build and start:

```bash
yarn build
yarn start
```

---

## License

MIT License — [LICENSE](./LICENSE)
