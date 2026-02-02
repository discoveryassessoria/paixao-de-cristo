"use client";

import { Grain, OrnamentLine, Particles, DivineLight, Vignette } from "./Effects";
import { RevealSection } from "./ScrollReveal";
import {
  sponsorTiers, cities, contatos, contactInfo, siteConfig,
  publicoEstimado, circuitoAguas, divulgacao, coberturaMidia, acessibilidade, classificacao,
} from "@/data/content";

export function PatrocinadoresContent() {
  return (
    <>
      <Grain />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, #1a1510 0%, #0d0b08 50%, #050505 100%)" }}>
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="hero-atmosphere"><DivineLight /><Particles /></div>
        <Vignette />

        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase mb-4 animate-fade-in-up delay-200 opacity-0">Proposta Comercial</p>
          <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl tracking-[0.1em] text-gradient-gold animate-fade-in-up delay-400 opacity-0">Seja um Patrocinador</h1>
          <div className="animate-fade-in delay-500 opacity-0 my-8"><OrnamentLine variant="wide" /></div>
          <p className="font-cormorant text-xl md:text-2xl animate-fade-in-up delay-600 opacity-0 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Associe sua marca ao maior espetáculo da fé e alcance milhares de pessoas no Circuito das Águas Paulista.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>Alcance</p>
              <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold">Números do Projeto</h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {publicoEstimado.map((p, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="text-center p-8" style={{ background: "rgba(26,24,22,0.5)", border: "1px solid rgba(200,169,97,0.1)" }}>
                  <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold-dark)" }}>{p.label}</p>
                  <p className="font-cinzel text-3xl md:text-4xl text-gold mb-1">{p.value}</p>
                  <p className="font-cormorant text-base" style={{ color: "var(--text-muted)" }}>{p.sub}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cotas */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-6">
              <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold-dark)" }}>Investimento</p>
              <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold">Cotas de Patrocínio</h2>
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full" style={{ border: "1px solid rgba(200,169,97,0.3)", background: "rgba(200,169,97,0.05)" }}>
                <span className="text-gold text-sm">⚠</span>
                <span className="font-cormorant text-base" style={{ color: "var(--gold-light)" }}>Cotas Limitadas — Garanta sua participação</span>
              </div>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorTiers.map((tier, i) => (
              <RevealSection key={tier.name} delay={i * 150}>
                <div className="relative p-8 md:p-10 h-full flex flex-col" style={{ background: "var(--bg-card)", border: `1px solid ${i === 2 ? "rgba(200,169,97,0.4)" : "rgba(200,169,97,0.12)"}` }}>
                  {i === 1 && <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)` }} />}
                  <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--text-muted)" }}>Cota</p>
                  <h3 className="font-cinzel text-2xl tracking-[0.08em] mb-4" style={{ color: tier.color }}>{tier.name}</h3>
                  <p className="font-cinzel text-xl text-gold mb-8">{tier.price}</p>
                  <div className="h-px mb-8" style={{ background: "rgba(200,169,97,0.1)" }} />
                  <div className="space-y-4 flex-1">
                    {tier.benefits.map((b, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="text-[8px] mt-2 shrink-0" style={{ color: tier.color }}>✦</span>
                        <p className="font-cormorant text-base" style={{ color: "var(--text-secondary)" }}>{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="relative py-28 overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold-dark)" }}>Fale Conosco</p>
              <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold">Contato</h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contatos.map((c, i) => (
              <RevealSection key={i} delay={i * 150}>
                <div className="text-center p-10" style={{ border: "1px solid rgba(200,169,97,0.2)" }}>
                  <p className="font-cinzel text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: "var(--gold-dark)" }}>{c.role}</p>
                  <h3 className="font-cinzel text-xl tracking-[0.08em] text-gold mb-6">{c.name}</h3>
                  <a href={`tel:${c.phone.replace(/\D/g, "")}`} className="font-cormorant text-lg hover:text-gold transition-colors"
                    style={{ color: "var(--text-secondary)" }}>📱 {c.phone}</a>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}