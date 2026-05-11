# RTB House — Frontend

Next.js app with shadcn/ui.

## Frontend technologies

- Framework: Next.js 16 (with React 19 + React DOM 19)
- Language: TypeScript
- Styling: Tailwind CSS 4
- UI / Components: shadcn/ui
- Icons: lucide-react
- HTTP client: axios

## Getting started

### Prerequisites

- **[Node.js](https://nodejs.org/) ≥ 20.9.0** — Next.js 16 refuses to run on older versions. If you see `Node.js version ">=20.9.0" is required`, upgrade Node (e.g. with [nvm](https://github.com/nvm-sh/nvm): `nvm install 20 && nvm use 20`, or install the current LTS from nodejs.org).

### 0. Enter the frontend folder

```bash
cd rtb-house-frontend
```

### 1. Install dependencies

```bash
npm install
```

### 2. Development server

```bash
npm run dev
```

Runs Next.js with Turbopack at [http://localhost:3000](http://localhost:3000).

## Adding components (shadcn/ui)

To add UI components:

```bash
npx shadcn@latest add button
```

Components are placed under `components/ui`.

## Using components

```tsx
import { Button } from "@/components/ui/button";
```
