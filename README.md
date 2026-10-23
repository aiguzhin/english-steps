# English Steps · Ступени английского

An English course website from A1 to C1: grammar topics with theory, exercises with instant checking, homework, YouTube videos with comprehension questions, the Edvibe course programmes (Elementary, Intermediate, Pre-IELTS) and a placement test. The interface and theory are available in Russian and English.

Accounts are stored in PostgreSQL, so progress is saved and follows the user between devices.

## Structure

- `src/` — the page: styles (`head.html`), markup (`body.html`), content (`data*.js`, `en.js`) and logic (`app.js`)
- `build.js` — assembles `public/index.html` from `src/`
- `server.js` — Express server: static page + API (`/api/register`, `/api/login`, `/api/logout`, `/api/me`, `/api/progress`, `/api/health`)
- `.github/workflows/keepalive.yml` — pings the site every hour so it wakes up on Render

## Run locally

```bash
npm install
npm run build
DATABASE_URL=postgresql://user:pass@localhost:5432/steps npm start
```

Tables are created automatically on start.

## Deploy on Render

- Build command: `npm install && npm run build`
- Start command: `npm start`
- Environment: `DATABASE_URL` (Internal Database URL of the Render Postgres)
