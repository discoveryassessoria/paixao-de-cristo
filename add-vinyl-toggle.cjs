/**
 * add-vinyl-toggle.cjs
 *
 * Adiciona o componente MusicToggle (disco de vinil) ao paixaodecristo.jsx:
 *   1. Cria o componente `MusicToggle` antes do export default
 *   2. Renderiza <MusicToggle /> quando !showIntro
 *   3. Adiciona o CSS no final do <style> block
 *
 * Uso:
 *   1. Salva este arquivo na raiz do projeto
 *   2. node add-vinyl-toggle.cjs
 *   3. Reload o browser
 */

const fs = require("fs");
const path = require("path");

const FILE = path.join("src", "paixaodecristo.jsx");

if (!fs.existsSync(FILE)) {
  console.error("❌ Arquivo não encontrado:", FILE);
  process.exit(1);
}

let content = fs.readFileSync(FILE, "utf8");
const original = content;
const log = [];

/* ════════════════════════════════════════════════════════════════
   1) Componente MusicToggle (inserido antes do export default)
   ════════════════════════════════════════════════════════════════ */

const COMPONENT_CODE = `
/* ═══════════════════════════════════════════════════════════════
   VINYL TOGGLE
   ═══════════════════════════════════════════════════════════════ */

function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const audio = window.__bgAudio;
    if (audio) {
      setIsPlaying(!audio.paused);
    } else {
      setIsPlaying(false);
    }
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  const toggle = () => {
    const audio = window.__bgAudio;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      className={\`vinyl-toggle \${isPlaying ? "vinyl-toggle--playing" : "vinyl-toggle--paused"} \${mounted ? "vinyl-toggle--in" : ""}\`}
      aria-label={isPlaying ? "Pausar música" : "Tocar música"}
      title={isPlaying ? "Pausar música" : "Tocar música"}
    >
      <span className="vinyl-disc">
        <span className="vinyl-shine" />
        <span className="vinyl-label">
          <span className="vinyl-label-inner" />
          <span className="vinyl-spindle" />
        </span>
      </span>
      <span className="vinyl-icon" aria-hidden="true">
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </span>
    </button>
  );
}

`;

if (content.includes("function MusicToggle()")) {
  log.push("MusicToggle já existia, pulando");
} else {
  const exportLine = "export default function PaixaoDeCristo";
  if (content.includes(exportLine)) {
    content = content.replace(exportLine, COMPONENT_CODE + exportLine);
    log.push("Componente MusicToggle adicionado");
  } else {
    log.push("⚠️  Não achei 'export default function PaixaoDeCristo' — pulando componente");
  }
}

/* ════════════════════════════════════════════════════════════════
   2) Renderizar <MusicToggle /> no return
   ════════════════════════════════════════════════════════════════ */

const renderTarget = "{showIntro && <IntroScreen onEnter={() => setShowIntro(false)} pageType={pageType} />}";
const renderReplace = renderTarget + "\n    {!showIntro && <MusicToggle />}";

if (content.includes("{!showIntro && <MusicToggle />}")) {
  log.push("<MusicToggle /> já estava no return");
} else if (content.includes(renderTarget)) {
  content = content.replace(renderTarget, renderReplace);
  log.push("<MusicToggle /> adicionado no return");
} else {
  log.push("⚠️  Não achei o {showIntro && <IntroScreen ...>} — pulando render");
}

/* ════════════════════════════════════════════════════════════════
   3) CSS do disco (inserido antes do fechamento do <style>)
   ════════════════════════════════════════════════════════════════ */

const CSS_CODE = `

/* ═══════════════════════════════════════════
   VINYL TOGGLE
   ═══════════════════════════════════════════ */
.vinyl-toggle {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid rgba(200, 169, 97, 0.22);
  background: transparent;
  cursor: pointer;
  z-index: 100;
  padding: 0;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.65),
    inset 0 0 0 1px rgba(200, 169, 97, 0.1);
  transition: box-shadow 0.4s ease, transform 0.4s ease, opacity 0.6s ease, border-color 0.4s ease;
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}
.vinyl-toggle--in {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.vinyl-toggle:hover {
  border-color: rgba(200, 169, 97, 0.55);
  box-shadow:
    0 10px 34px rgba(0, 0, 0, 0.7),
    0 0 30px rgba(200, 169, 97, 0.22),
    inset 0 0 0 1px rgba(200, 169, 97, 0.35);
  transform: translateY(0) scale(1.06);
}

.vinyl-disc {
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  /* sulcos concêntricos (textura de vinil) + base preta com leve highlight */
  background:
    repeating-radial-gradient(
      circle at center,
      transparent 0px,
      transparent 1px,
      rgba(255, 255, 255, 0.025) 1px,
      rgba(255, 255, 255, 0.025) 2px
    ),
    radial-gradient(circle at 30% 28%, #1f1812 0%, #0b0806 55%, #050402 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vinyl-toggle--playing .vinyl-disc {
  animation: vinylSpin 5s linear infinite;
}

/* brilho diagonal simulando luz refletindo */
.vinyl-shine {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(135deg,
    rgba(200, 169, 97, 0.2) 0%,
    rgba(200, 169, 97, 0) 35%,
    rgba(200, 169, 97, 0) 65%,
    rgba(200, 169, 97, 0.12) 100%
  );
  pointer-events: none;
}

/* etiqueta dourada no centro */
.vinyl-label {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 44%;
  height: 44%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background:
    radial-gradient(circle at 30% 30%,
      #E8D5A0 0%,
      #C8A961 30%,
      #9B7B30 75%,
      #6B5320 100%
    );
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.3),
    inset 0 -1px 2px rgba(0, 0, 0, 0.35),
    0 1px 3px rgba(0, 0, 0, 0.5);
  transition: filter 0.4s ease;
}

/* anel interno da etiqueta (detalhe de profundidade) */
.vinyl-label-inner {
  position: absolute;
  inset: 22%;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);
  background: radial-gradient(circle at 35% 35%,
    rgba(255, 255, 255, 0.18) 0%,
    transparent 60%
  );
}

/* furo central do vinil */
.vinyl-spindle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #050402;
  transform: translate(-50%, -50%);
  box-shadow:
    inset 0 0 2px rgba(0, 0, 0, 0.9),
    0 0 0 1px rgba(0, 0, 0, 0.6);
  z-index: 2;
}

.vinyl-toggle--paused .vinyl-label {
  filter: brightness(0.55) saturate(0.55);
}

/* ícone play/pause no hover */
.vinyl-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C8A961;
  opacity: 0;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  transition: opacity 0.3s ease;
  pointer-events: none;
  filter: drop-shadow(0 0 4px rgba(200, 169, 97, 0.6));
}
.vinyl-toggle:hover .vinyl-icon {
  opacity: 1;
}

@keyframes vinylSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 480px) {
  .vinyl-toggle {
    width: 60px;
    height: 60px;
    bottom: 1rem;
    right: 1rem;
  }
  .vinyl-spindle { width: 4px; height: 4px; }
}
`;

if (content.includes(".vinyl-toggle {")) {
  log.push("CSS do vinyl-toggle já existia, pulando");
} else {
  // procura pelo fechamento do <style>{`...`}</style>
  const styleClose = "`}</style>";
  const idx = content.lastIndexOf(styleClose);
  if (idx === -1) {
    log.push("⚠️  Não achei o fechamento do <style> — pulando CSS");
  } else {
    content = content.slice(0, idx) + CSS_CODE + "\n      " + content.slice(idx);
    log.push("CSS do vinyl-toggle adicionado");
  }
}

/* ════════════════════════════════════════════════════════════════
   Salvar
   ════════════════════════════════════════════════════════════════ */

if (content === original) {
  console.log("ℹ️  Nada foi alterado.");
  log.forEach((l) => console.log("  -", l));
  process.exit(0);
}

const backup = FILE + ".bak2";
fs.writeFileSync(backup, original, "utf8");
fs.writeFileSync(FILE, content, "utf8");

console.log("✅ Vinyl Toggle adicionado!");
console.log("   Backup salvo em:", backup);
console.log("");
log.forEach((l) => console.log("  -", l));
console.log("");
console.log("Reload o browser. Se algo der errado:");
console.log("  git checkout " + FILE);