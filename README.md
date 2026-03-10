# ticketing-api-2026

Demo project for the [Kir-Dev Node.js backend development course](https://tanfolyam.kir-dev.hu/docs/node-js/starting-out/project-setup).

## About

A ticketing REST API built step-by-step across the course chapters. The full implementation details, explanations, and exercises are in the [course guide](https://tanfolyam.kir-dev.hu/docs/node-js/starting-out/project-setup).

**Tech stack:** NestJS 11, TypeScript, Prisma (SQLite), SWC

## Chapter Branches

Each course chapter has a corresponding branch with the project state at the end of that chapter. You can checkout any branch to see the code at that point or to catch up:

- `chapter-1` – Project setup, first endpoint
- `chapter-2` – Modules, controllers, services
- `chapter-3` – Configuration, environment variables
- `chapter-4` – Data validation
- `chapter-5` – Documentation
- `chapter-6` – Implementation details
- `chapter-7` – Relationships
- `chapter-8` – Middleware

```bash
git checkout chapter-3
```

## Getting Started with GitHub Codespaces

The easiest way to follow along is using **GitHub Codespaces** — everything is pre-configured.

1. Go to the [GitHub repo](https://github.com/kir-dev/ticketing-api-2026)
2. Click the green **Code** button, then the **Codespaces** tab
3. Click **Create codespace on master**

The devcontainer comes with Node.js 22, NestJS CLI, Prisma extension, and REST Client — ready to go.

## Local Setup

**Prerequisites:** Node.js 22+

```bash
git clone https://github.com/kir-dev/ticketing-api-2026.git
cd ticketing-api-2026
cp .env.example .env
npm install
npx prisma generate
npx prisma db push
npm run start:dev
```

The server starts at `http://localhost:3000`.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run start:dev` | Start in watch mode |
| `npm run build` | Compile the project |
| `npm run test` | Run unit tests |
| `npm run lint` | Lint and auto-fix |
| `npm run format` | Format with Prettier |

## HTTP Request Files

The `requests/` folder contains `.http` files for testing the API with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code extension:

- `boards.http` – Board CRUD
- `tickets.http` – Ticket CRUD and label assignment
- `labels.http` – Label CRUD
