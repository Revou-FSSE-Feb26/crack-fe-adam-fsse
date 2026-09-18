# Crack LMS Frontend

Responsive Next.js client for the Crack learning management system.

## Features

- API-backed login with JWT storage and role-based dashboard routing
- Admin, Teacher, and Student dashboard views
- Learning deck and assignment activity loaded from the backend
- Loading and error states for asynchronous requests

## Tech Stack

Next.js, React, JavaScript, CSS Modules, and the Crack LMS REST API.

## Setup

npm install
set NEXT_PUBLIC_API_URL=http://localhost:3000
npm run dev

Open `http://localhost:3000`. For deployment, define `NEXT_PUBLIC_API_URL` as the deployed backend URL.

## User Flow

1. Register a Student, Teacher, or Admin through `POST /auth/register`.
2. Sign in at `/login`.
3. The app stores the access token and redirects to the matching role dashboard.
4. Dashboards retrieve learning decks and assignment statuses from the protected API.

## Deployment

Frontend deployment URL: add the verified Vercel URL here after deployment.

Backend deployment URL: add the verified API URL here after deployment.

Add screenshots for login, Student dashboard, Teacher grading, and Admin management before submission.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
