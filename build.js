// Builds public/index.html from the files in src/
const fs = require("fs");
const path = require("path");
const src = (f) => fs.readFileSync(path.join(__dirname, "src", f), "utf8");

const scripts = ["data1.js", "data2.js", "data3.js", "data4.js", "data5.js", "data6.js", "en.js", "app.js"].map(src).join("\n");
const favicon = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 92"><path fill="#F0506E" d="M50 88C22 68 4 52 4 30 4 15 15 4 29 4c9 0 16 5 21 12C55 9 62 4 71 4c14 0 25 11 25 26 0 22-18 38-46 58z"/></svg>');

const html = `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="English A1–C1: grammar, exercises, homework, YouTube videos with questions. Английский от A1 до C1.">
<link rel="icon" href="${favicon}">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
${src("head.html")}
</head>
<body>
${src("body.html")}
<script>
${scripts}
</script>
</body>
</html>
`;
fs.mkdirSync(path.join(__dirname, "public"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "public", "index.html"), html);
const page = (title, body) => `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} · English Steps</title><link rel="icon" href="${favicon}"><style>body{margin:0;background:#FFF5F7;color:#3A2430;font:16px/1.6 Nunito,system-ui,sans-serif}main{max-width:720px;margin:0 auto;padding:32px 16px 48px}h1{color:#E8577A;font-size:1.6rem}h2{font-size:1.1rem;margin-top:1.6em}a{color:#E8577A}</style></head><body><main>${body}<p><a href="/">← English Steps / Ступени английского</a></p></main></body></html>`;
fs.writeFileSync(path.join(__dirname, "public", "privacy.html"), page("Privacy Policy", `
<h1>Privacy Policy / Политика конфиденциальности</h1>
<p>Last updated: October 2026.</p>
<h2>What we collect</h2>
<p>When you create an account we store your username, display name and, if you sign in with Google or Telegram, your Google account ID and email address or your Telegram user ID. We also store your learning progress (completed exercises, homework, test level, chosen theme).</p>
<h2>How we use it</h2>
<p>Only to let you sign in and to keep your progress across devices. We do not sell, share or use your data for advertising.</p>
<h2>Where it is stored</h2>
<p>Data is stored in a PostgreSQL database (Supabase) and the site runs on Render. Passwords are stored only as secure hashes.</p>
<h2>Deleting your data</h2>
<p>To delete your account and all progress, contact the site owner at asikfreehouse@gmail.com.</p>
<h2>Кратко по-русски</h2>
<p>Мы храним только логин, имя, идентификатор Google или Telegram и ваш прогресс в обучении. Данные нужны только для входа и сохранения прогресса, мы их никому не передаём. Чтобы удалить аккаунт, напишите на asikfreehouse@gmail.com.</p>`));
fs.writeFileSync(path.join(__dirname, "public", "terms.html"), page("Terms of Service", `
<h1>Terms of Service / Условия использования</h1>
<p>English Steps is a free educational website for learning English. Use it for personal learning. Videos are hosted on YouTube and belong to their authors. The service is provided «as is» without guarantees. We may update the content and these terms at any time.</p>
<p>English Steps — бесплатный сайт для изучения английского. Пользуйтесь им для личного обучения. Видео размещены на YouTube и принадлежат их авторам. Сайт предоставляется «как есть».</p>`));
console.log("Built public/index.html", (html.length / 1024).toFixed(1) + " KB");
