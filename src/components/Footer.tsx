import Link from "next/link";
import { contactInfo, siteConfig, contatos } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid rgba(200,169,97,0.08)" }}>
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-10">
        {/* Cross ornament */}
        <div className="text-center mb-10">
          <div className="ornament-line-wide" />
          <span className="text-gold text-xl block mt-4">✝</span>
        </div>

        <div className="text-center mb-10">
          <p className="font-cinzel text-sm tracking-[0.2em] uppercase" style={{ color: "var(--text-muted)" }}>
            A Paixão de Cristo — {siteConfig.subtitle}
          </p>
          <p className="font-cormorant italic text-base mt-2" style={{ color: "var(--text-muted)" }}>
            A história do maior homem que já viveu sobre a terra, contada de maneira espetacular e envolvente!
          </p>
        </div>

        {/* Bottom */}
        <div className="text-center">
          <p className="font-cormorant text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} A Paixão de Cristo — Circuito das Águas Paulista
          </p>
        </div>
      </div>
    </footer>
  );
}