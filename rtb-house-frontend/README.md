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

## Orders Page
<img width="2560" height="1080" alt="image" src="https://github.com/user-attachments/assets/2133fa62-e847-41ff-8985-01de572c5052" />
<img width="484" height="922" alt="Screenshot 2026-05-11 at 07 56 03" src="https://github.com/user-attachments/assets/035aa5f4-427e-468a-bbf9-e1005fe96e9e" />

## Informations Page
<img width="2560" height="1080" alt="Screenshot 2026-05-12 at 06 34 13" src="https://github.com/user-attachments/assets/e1ae0224-27f9-47b8-8cb7-839f93554a20" />
<img width="441" height="918" alt="Screenshot 2026-05-11 at 08 06 15" src="https://github.com/user-attachments/assets/3536734e-5bad-421f-b7b0-b57999794e51" />

## Not Found Page
<img width="2560" height="1080" alt="Screenshot 2026-05-11 at 08 07 04" src="https://github.com/user-attachments/assets/cc076fe9-4cca-44ef-af79-8d774b27217c" />
<img width="468" height="948" alt="Screenshot 2026-05-11 at 08 07 49" src="https://github.com/user-attachments/assets/540c3dd5-2686-4a75-af37-908959ae9051" />




