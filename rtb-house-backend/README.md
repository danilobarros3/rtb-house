# RTB House - Backend

Backend API for the RTB House project, built with NestJS, TypeScript, Prisma, and PostgreSQL.

## Technologies

- Framework: NestJS
- Language: TypeScript
- ORM: Prisma
- Database: PostgreSQL
- Validation: class-validator + class-transformer
- Containerization: Docker Compose (database service)

## Requirements

- Node.js (20+ recommended)
- npm
- Docker + Docker Compose (to run PostgreSQL locally)

## Environment variables

Create/update the `.env` file in the backend root with:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/rtb-house-backend?schema=public"
PORT=3001
```

`PORT` is optional. If not set, the API runs on `3001`.

## How to run (local)

0. Enter the backend folder:

```bash
cd rtb-house-backend
```

Then run:

1. Install dependencies:

```bash
npm install
```

2. Start the database with Docker:

```bash
docker compose up -d
```

3. Run database setup (generates Prisma Client, applies migrations, and runs seed):

```bash
npm run db:setup
```

4. Start the API in development mode:

```bash
npm run start:dev
```

API available at `http://localhost:3001`.

## Quick flow (single command)

To run setup + API in watch mode:

```bash
cd rtb-house-backend
npm run start:dev:setup
```

This command runs:

- `npm run prisma:generate`
- `npm run prisma:deploy`
- `npm run prisma:seed`
- `npm run start:dev`

## Docker (database)

The backend `docker-compose.yml` starts only PostgreSQL:

- Container: `rtb-house-backend-db`
- Port: `5432:5432`
- User: `postgres`
- Password: `postgres`
- Database: `rtb-house-backend`

Useful commands:

```bash
docker compose up -d
docker compose ps
docker compose logs -f db
docker compose down
```

## Seed

The seed populates `sellers` and `orders` from JSON files in `src/utils/data`.

Run seed manually:

```bash
npm run prisma:seed
```

Note: seed clears current `orders` and `sellers` data before inserting again.

## Main endpoints

- `GET /orders`
  - filters: `orderId`, `sellerId`, `country`, `product`, `search`, `page`, `limit`
- `GET /sellers`

## Main scripts

- `npm run start:dev` - starts backend in watch mode
- `npm run db:setup` - generate + migrate deploy + seed
- `npm run prisma:generate` - generates Prisma Client
- `npm run prisma:seed` - runs seed
