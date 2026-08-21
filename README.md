# Trophy Case

Starter scaffold for Trophy Case — a card-collecting app (Next.js + TypeScript + Tailwind + Prisma).

Getting started:

1. Install dependencies

   npm install

2. Generate Prisma client and run migrations (SQLite used for dev)

   npx prisma generate
   npx prisma migrate dev --name init
   npm run prisma:seed

3. Run dev server

   npm run dev

Repo scaffold includes a simple index page and API route with seeded sample data.
