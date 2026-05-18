/**
 * fix-video.cjs
 *
 * Aplica correção do <video> na IntroScreen do paixaodecristo.jsx.
 *
 * Uso:
 *   1. Salva este arquivo na RAIZ do projeto (C:\Users\conta\OneDrive\Documentos\GitHub\paixao-de-cristo\fix-video.cjs)
 *   2. No terminal, na raiz do projeto, roda:  node fix-video.cjs
 *   3. Se aparecer "✅ Tudo certo!", reload o browser e testa
 *   4. Se o arquivo paixaodecristo.jsx tava aberto no VSCode, ele vai recarregar sozinho
 */

const fs = require("fs");
const path = require("path");

const FILE = path.join("src", "paixaodecristo.jsx");

if (!fs.existsSync(FILE)) {
  console.error(`❌ Não achei o arquivo ${FILE}. Roda este script na raiz do projeto.`);
  process.exit(1);
}

let content = fs.readFileSync(FILE, "utf8");
const original = content;
const log = [];

// 1) Adiciona autoPlay + muted depois de ref={videoRef}
//    (só se ainda não estiver lá)
if (!content.includes("autoPlay") || !/<video[\s\S]{0,200}?autoPlay/m.test(content)) {
  const re1 = /(<video\s+ref=\{videoRef\}\s*\n)(\s+)loop/;
  if (re1.test(content)) {
    content = content.replace(re1, `$1$2autoPlay\n$2muted\n$2loop`);
    log.push("autoPlay + muted adicionados antes de loop");
  } else {
    log.push("⚠️  Padrão <video ref={videoRef}\\n loop não encontrado — pulando autoPlay/muted");
  }
} else {
  log.push("autoPlay já estava presente, pulando");
}

// 2) Remove a linha do onCanPlay
const re2 = /\n\s+onCanPlay=\{\(\) => setVideoLoaded\(true\)\}/;
if (re2.test(content)) {
  content = content.replace(re2, "");
  log.push("onCanPlay removido");
} else {
  log.push("onCanPlay já estava removido ou tem formato diferente");
}

// 3) Troca opacity dinâmica por estática
const re3 = /opacity:\s*videoLoaded\s*\?\s*0\.6\s*:\s*0,/;
if (re3.test(content)) {
  content = content.replace(re3, "opacity: 0.6,");
  log.push("opacity: videoLoaded ? 0.6 : 0 → opacity: 0.6");
} else {
  log.push("opacity dinâmica não encontrada (talvez já corrigida)");
}

// 4) Remove a linha de transition opacity
const re4 = /\n\s+transition:\s*"opacity 2s ease",/;
if (re4.test(content)) {
  content = content.replace(re4, "");
  log.push("transition: opacity 2s ease removida");
} else {
  log.push("transition opacity não encontrada (talvez já removida)");
}

if (content === original) {
  console.log("ℹ️  Nada foi alterado. Possivelmente o arquivo já está corrigido ou tem formato diferente.");
  console.log("\nDetalhes:");
  log.forEach((l) => console.log("  -", l));
  process.exit(0);
}

// Backup
const backup = FILE + ".bak";
fs.writeFileSync(backup, original, "utf8");
fs.writeFileSync(FILE, content, "utf8");

console.log("✅ Tudo certo! Arquivo atualizado:", FILE);
console.log("   Backup salvo em:", backup);
console.log("\nMudanças aplicadas:");
log.forEach((l) => console.log("  -", l));
console.log("\nAgora reload o browser e testa. Se algo der errado:");
console.log("  - Restaura com: git checkout " + FILE);
console.log("  - Ou copia o backup de volta: copy " + backup + " " + FILE);