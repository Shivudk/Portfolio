# Shivakumara D K MERN Portfolio

MERN portfolio website for Shivakumara D K, built with MongoDB, Express, React, and Node.js.

## Stack

- MongoDB + Mongoose for contact-message storage.
- Express + Node.js for the API.
- React + Vite for the frontend.
- Vercel-ready configuration for frontend and `/api/*` routes.

## Run Locally

```bash
npm install
cp .env.example .env
npm run dev
```

Open `http://127.0.0.1:5173`.

Set `MONGODB_URI` in `.env` if you want the contact form to save messages in MongoDB. Without it, the API still runs and returns a setup message.

## Project Structure

- `client/` - React frontend and public assets.
- `server/` - Express app, MongoDB config, models, and routes.
- `api/` - Vercel serverless entry point.
- `vercel.json` - Vercel build and rewrite configuration.

## Vercel Deployment

Deploy the repository root. Vercel should read:

- Build command: `npm run build`
- Output directory: `client/dist`

Add these environment variables in Vercel:

- `MONGODB_URI`
- `MONGODB_DB` optional
- `CLIENT_ORIGIN` optional

## GitHub Push

```bash
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Replace `USERNAME/REPOSITORY` with your GitHub repo path.
