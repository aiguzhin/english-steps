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
console.log("Built public/index.html", (html.length / 1024).toFixed(1) + " KB");
