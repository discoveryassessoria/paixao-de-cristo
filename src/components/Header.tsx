"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Início" },
    { href: "/#sinopse", label: "Sinopse" },
    { href: "/#protagonista", label: "Protagonista" },
    { href: "/#equipe", label: "Equipe" },
    { href: "/#publico", label: "Público" },
    { href: "/#cotas", label: "Cotas" },
    { href: "/#locais", label: "Locais" },
    { href: "/#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "backdrop-blur-xl" : ""
      }`}
    >
      {/* Background layers */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          scrolled
            ? "bg-black/70 border-b"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
        style={{ borderColor: scrolled ? "rgba(200,169,97,0.08)" : "transparent" }}
      />

      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-4">
          <span className="text-gold text-xl animate-cross-pulse opacity-80 group-hover:opacity-100 transition-opacity">
            ✝
          </span>
          <div className="flex flex-col">
            <span className="font-cinzel-decorative text-sm tracking-[0.3em] text-gold-light leading-none">
              A Paixão
            </span>
            <span className="font-cormorant text-[10px] tracking-[0.4em] uppercase mt-0.5"
              style={{ color: "var(--text-muted)" }}>
              de Cristo
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-cinzel text-[11px] tracking-[0.2em] uppercase transition-all duration-500 group"
              style={{ color: pathname === link.href ? "var(--gold)" : "var(--text-secondary)" }}
            >
              <span className="group-hover:text-gold transition-colors duration-500">
                {link.label}
              </span>
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-3"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px transition-all duration-500 ${
              menuOpen ? "rotate-45 translate-y-[3px] bg-gold" : "bg-gold/60"
            }`}
          />
          <span
            className={`block w-5 h-px bg-gold/60 transition-all duration-500 ${
              menuOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px transition-all duration-500 ${
              menuOpen ? "-rotate-45 -translate-y-[3px] bg-gold" : "bg-gold/60"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b transition-all duration-600 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(5,5,5,0.95)",
          borderColor: "rgba(200,169,97,0.08)",
        }}
      >
        <div className="px-8 py-8 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-cinzel text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: pathname === link.href ? "var(--gold)" : "var(--text-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}