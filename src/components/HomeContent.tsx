"use client";

import Link from "next/link";
import { RevealSection } from "./ScrollReveal";
import { OrnamentLine } from "./Effects";
import {
  sinopse, missao, henriCastelli, timeline, momentosDaPaixao,
  equipe, circuitoAguas, publicoEstimado, divulgacao, acessibilidade,
  classificacao, coberturaMidia, sponsorTiers, contatos,
  cities, siteConfig, contactInfo, galleryImages,
} from "@/data/content";
import { useState } from "react";

/* ═══════════════════════════════════════════
   SINOPSE
   ═══════════════════════════════════════════ */
function SinopseSection() {
  return (
    <section id="sinopse" className="relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(26,24,22,0.3), var(--bg-secondary))" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-8 py-28 md:py-36">
        <RevealSection>
          <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "var(--gold)" }}>Sinopse</p>
          <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold mb-10 leading-tight">{sinopse.title}</h2>
        </RevealSection>
        <RevealSection delay={200}>
          <p className="font-cormorant italic text-xl md:text-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>{sinopse.text}</p>
        </RevealSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   MISSÃO
   ═══════════════════════════════════════════ */
function MissaoSection() {
  return (
    <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <div className="text-center mb-12">
            <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold-dark)" }}>Objetivo</p>
            <h2 className="font-cinzel text-3xl md:text-4xl tracking-[0.08em] text-gradient-gold mb-6">{missao.title}</h2>
            <OrnamentLine />
          </div>
        </RevealSection>
        <div className="space-y-8">
          {missao.paragraphs.map((p, i) => (
            <RevealSection key={i} delay={i * 150}>
              <p className="font-cormorant text-lg md:text-xl leading-relaxed text-center" style={{ color: "var(--text-secondary)" }}>{p}</p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROTAGONISTA
   ═══════════════════════════════════════════ */
function ProtagonistaSection() {
  return (
    <section id="protagonista" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold-dark)" }}>O Protagonista</p>
            <h2 className="font-cinzel-decorative text-4xl md:text-6xl tracking-[0.08em] text-gradient-gold">{henriCastelli.name}</h2>
          </div>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12 md:gap-16 items-start">
          <RevealSection variant="scale">
            <div className="relative mx-auto md:mx-0 w-[280px] md:w-full aspect-[3/4] overflow-hidden" style={{ border: "1px solid rgba(200,169,97,0.15)" }}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${henriCastelli.image}')`, backgroundColor: "var(--bg-tertiary)" }} />
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l" style={{ borderColor: "var(--gold-dark)" }} />
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r" style={{ borderColor: "var(--gold-dark)" }} />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l" style={{ borderColor: "var(--gold-dark)" }} />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r" style={{ borderColor: "var(--gold-dark)" }} />
            </div>
          </RevealSection>
          <div>
            <RevealSection delay={100}>
              <h3 className="font-cinzel text-2xl tracking-[0.1em] text-gold mb-1">{henriCastelli.fullName}</h3>
              <p className="font-cinzel text-xs tracking-[0.3em] uppercase mb-8" style={{ color: "var(--text-muted)" }}>{henriCastelli.role}</p>
            </RevealSection>
            <RevealSection delay={200}>
              <p className="font-cormorant text-lg leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{henriCastelli.bio}</p>
            </RevealSection>
            <RevealSection delay={300}>
              <p className="font-cormorant text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{henriCastelli.bio2}</p>
            </RevealSection>
            <RevealSection delay={400}>
              <p className="font-cormorant text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Principais Trabalhos: </span>{henriCastelli.works}
              </p>
            </RevealSection>
            <RevealSection delay={500}>
              <blockquote className="pl-6 py-4" style={{ borderLeft: "2px solid var(--gold-dark)" }}>
                <p className="font-cormorant italic text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>{henriCastelli.quote}</p>
              </blockquote>
            </RevealSection>
          </div>
        </div>

        {/* Timeline */}
        <RevealSection delay={200}>
          <h3 className="font-cinzel text-2xl md:text-3xl tracking-[0.08em] text-gradient-gold mt-24 mb-12">Trajetória na Paixão de Cristo</h3>
        </RevealSection>
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px" style={{ background: "rgba(200,169,97,0.15)" }} />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="relative">
                  <div className="absolute -left-8 md:-left-12 top-1 w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full"
                    style={{ background: item.current ? "var(--gold)" : "var(--bg-tertiary)", border: `2px solid ${item.current ? "var(--gold)" : "var(--gold-dark)"}`, boxShadow: item.current ? "0 0 20px var(--gold-glow)" : "none" }} />
                  <p className="font-cinzel text-lg md:text-xl text-gold mb-2">{item.year}</p>
                  <div className="p-4 md:p-5" style={{ background: "rgba(26,24,22,0.6)", border: "1px solid rgba(200,169,97,0.08)" }}>
                    <p className="font-cinzel text-sm tracking-[0.08em] mb-1" style={{ color: "var(--text-primary)" }}>{item.city}</p>
                    <p className="font-cormorant text-base" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Momentos */}
        <RevealSection delay={200}>
          <h3 className="font-cinzel text-2xl md:text-3xl tracking-[0.08em] text-gradient-gold mt-24 mb-12">Os Momentos da Paixão</h3>
        </RevealSection>
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px" style={{ background: "rgba(200,169,97,0.1)" }} />
          <div className="space-y-5">
            {momentosDaPaixao.map((m, i) => (
              <RevealSection key={i} delay={i * 30}>
                <div className="relative flex items-center">
                  <div className="absolute -left-8 md:-left-12 w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full"
                    style={{ background: "var(--bg-tertiary)", border: "2px solid var(--gold-dark)" }} />
                  <p className="font-cinzel text-sm md:text-base tracking-[0.05em] text-gold">{m}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   EQUIPE
   ═══════════════════════════════════════════ */
function EquipeSection() {
  return (
    <section id="equipe" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealSection>
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold-dark)" }}>Ficha Técnica</p>
            <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold">A Equipe</h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipe.map((m, i) => (
            <RevealSection key={i} delay={i * 100}>
              <div className="text-center p-8" style={{ background: "rgba(26,24,22,0.5)", border: "1px solid rgba(200,169,97,0.1)" }}>
                <p className="font-cinzel text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: "var(--gold-dark)" }}>{m.role}</p>
                <h3 className="font-cinzel text-xl tracking-[0.08em] text-gold mb-4">{m.name}</h3>
                {/* Circular photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden" style={{ border: "2px solid var(--gold-dark)" }}>
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${m.image}')`, backgroundColor: "var(--bg-tertiary)" }} />
                </div>
                {m.bio && <p className="font-cormorant text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{m.bio}</p>}
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   GALERIA
   ═══════════════════════════════════════════ */
function GaleriaSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <h2 className="font-cinzel text-2xl md:text-4xl tracking-[0.08em] text-gradient-gold mb-12">Galeria do Espetáculo</h2>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <RevealSection key={i} variant="scale" delay={i * 40}>
                <div className="relative aspect-[4/3] overflow-hidden cursor-pointer group rounded-sm" onClick={() => setSelected(i)}>
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url('${img.src}')`, backgroundColor: "var(--bg-tertiary)" }} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-6 right-6 text-gold text-3xl hover:text-gold-light transition-colors" onClick={() => setSelected(null)}>×</button>
          <button className="absolute left-4 md:left-8 text-gold text-4xl hover:text-gold-light"
            onClick={(e) => { e.stopPropagation(); setSelected(selected > 0 ? selected - 1 : galleryImages.length - 1); }}>‹</button>
          <div className="relative w-full max-w-5xl aspect-[16/10]">
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url('${galleryImages[selected].src}')` }} />
          </div>
          <button className="absolute right-4 md:right-8 text-gold text-4xl hover:text-gold-light"
            onClick={(e) => { e.stopPropagation(); setSelected(selected < galleryImages.length - 1 ? selected + 1 : 0); }}>›</button>
        </div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════
   CIRCUITO DAS ÁGUAS (Justificativa)
   ═══════════════════════════════════════════ */
function CircuitoSection() {
  return (
    <section id="publico" className="relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
      </div>
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center pt-24 pb-12 px-8">
          <RevealSection>
            <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold-dark)" }}>Justificativa</p>
            <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold">{circuitoAguas.title}</h2>
          </RevealSection>
        </div>

        {/* Content card */}
        <div className="max-w-4xl mx-auto px-8 pb-20">
          <div className="p-10 md:p-14" style={{ background: "rgba(26,24,22,0.7)", border: "1px solid rgba(200,169,97,0.1)" }}>
            <RevealSection>
              <h3 className="font-cinzel text-lg text-gold text-center mb-4">{circuitoAguas.localizacao.title}</h3>
              <p className="font-cormorant text-lg text-center leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>{circuitoAguas.localizacao.text}</p>
            </RevealSection>

            <RevealSection delay={150}>
              <h3 className="font-cinzel text-lg text-gold text-center mb-4">{circuitoAguas.populacao.title}</h3>
              {circuitoAguas.populacao.paragraphs.map((p, i) => (
                <p key={i} className="font-cormorant text-lg text-center leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{p}</p>
              ))}
            </RevealSection>

            <RevealSection delay={300}>
              <h3 className="font-cinzel text-lg text-gold text-center mb-6 mt-8">As principais atrações são:</h3>
              <div className="space-y-4">
                {circuitoAguas.atracoes.map((a, i) => (
                  <p key={i} className="font-cormorant text-lg text-center leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    <span className="text-gold font-semibold">{a.title}:</span> {a.text}
                  </p>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>

        {/* Demographics */}
        <div className="max-w-5xl mx-auto px-8 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {circuitoAguas.demographics.map((d, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="text-center p-8" style={{ background: "rgba(26,24,22,0.5)", border: "1px solid rgba(200,169,97,0.1)" }}>
                  <p className="font-cinzel text-3xl md:text-4xl text-gold mb-2">{d.value}</p>
                  <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase" style={{ color: "var(--text-secondary)" }}>{d.label}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Público Estimado */}
        <div className="text-center pt-16 pb-8 px-8">
          <RevealSection>
            <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold-dark)" }}>Alcance</p>
            <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold">Público Estimado</h2>
          </RevealSection>
        </div>
        <div className="max-w-5xl mx-auto px-8 pb-20">
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

        {/* Divulgação */}
        <div className="max-w-5xl mx-auto px-8 pb-12">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold-dark)" }}>Divulgação</p>
              <h2 className="font-cinzel text-2xl md:text-4xl tracking-[0.08em] text-gradient-gold">Democratização do Acesso</h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {divulgacao.map((d, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
                  <div>
                    <h3 className="font-cinzel text-base tracking-[0.08em] text-gold mb-2">{d.title}</h3>
                    <p className="font-cormorant text-base" style={{ color: "var(--text-secondary)" }}>{d.text}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Acessibilidade + Classificação */}
        <div className="max-w-4xl mx-auto px-8 pb-24">
          <RevealSection>
            <div className="p-8 text-center" style={{ background: "rgba(26,24,22,0.5)", border: "1px solid rgba(200,169,97,0.1)" }}>
              <h3 className="font-cinzel text-xl tracking-[0.08em] text-gold mb-4">♿ Acessibilidade</h3>
              <p className="font-cormorant text-lg" style={{ color: "var(--text-secondary)" }}>{acessibilidade}</p>
            </div>
          </RevealSection>
          <RevealSection delay={150}>
            <div className="mt-6 p-6 text-center flex items-center justify-center gap-3" style={{ background: "rgba(26,24,22,0.3)", border: "1px solid rgba(50,120,50,0.3)" }}>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold" style={{ background: "rgba(50,140,50,0.8)", color: "white" }}>L</span>
              <p className="font-cormorant text-base" style={{ color: "var(--text-secondary)" }}>{classificacao}</p>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   COTAS DE PATROCÍNIO
   ═══════════════════════════════════════════ */
function CotasSection() {
  return (
    <section id="cotas" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
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
                {/* Top accent */}
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
  );
}

/* ═══════════════════════════════════════════
   COBERTURA DE MÍDIA
   ═══════════════════════════════════════════ */
function MidiaSection() {
  return (
    <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <h2 className="font-cinzel text-2xl md:text-3xl tracking-[0.08em] text-gradient-gold mb-12">📰 Cobertura de Mídia</h2>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevealSection>
            <div className="p-8" style={{ background: "rgba(26,24,22,0.5)", border: "1px solid rgba(200,169,97,0.1)" }}>
              <h3 className="font-cinzel text-sm tracking-[0.08em] text-gold mb-4">{coberturaMidia.regional.title}</h3>
              <p className="font-cormorant text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{coberturaMidia.regional.list}</p>
            </div>
          </RevealSection>
          <RevealSection delay={150}>
            <div className="p-8" style={{ background: "rgba(26,24,22,0.5)", border: "1px solid rgba(200,169,97,0.1)" }}>
              <h3 className="font-cinzel text-sm tracking-[0.08em] text-gold mb-4">{coberturaMidia.saoPaulo.title}</h3>
              <p className="font-cormorant text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{coberturaMidia.saoPaulo.list}</p>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   APRESENTAÇÕES (Datas e Locais)
   ═══════════════════════════════════════════ */
function ApresentacoesSection() {
  return (
    <section id="locais" className="relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
      </div>
      <div className="relative z-10 section-padding">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>Quando e Onde</p>
              <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold">Apresentações</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cities.map((city, i) => (
              <RevealSection key={city.slug} delay={i * 150}>
                <div className="p-8 md:p-10" style={{ background: "rgba(26,24,22,0.5)", border: "1px solid rgba(200,169,97,0.15)" }}>
                  <p className="font-cinzel text-2xl md:text-3xl text-gold mb-1">{city.dateFormatted.split(" de ")[0]} de {city.dateFormatted.split(" de ")[1]}</p>
                  <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold mb-6">{city.dayOfWeek} • {city.date.split("-")[0]}</p>

                  <h3 className="font-cinzel text-xl md:text-2xl tracking-[0.08em] mb-4" style={{ color: "var(--text-primary)" }}>{city.city}-{city.state}</h3>
                  <p className="font-cormorant text-base mb-1" style={{ color: "var(--text-secondary)" }}>{city.address}</p>
                  <p className="font-cormorant text-base" style={{ color: "var(--text-muted)" }}>"{city.localName}"</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONTATO
   ═══════════════════════════════════════════ */
function ContatoSection() {
  return (
    <section id="contato" className="relative py-28 overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-8">
        {/* Ornament */}
        <div className="text-center mb-6">
          <div className="ornament-line-wide" />
        </div>

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
                <a href={`tel:${c.phone.replace(/\D/g, "")}`} className="font-cormorant text-lg hover:text-gold transition-colors inline-flex items-center gap-2"
                  style={{ color: "var(--text-secondary)" }}>
                  📱 {c.phone}
                </a>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   EXPORT PRINCIPAL
   ═══════════════════════════════════════════ */
export function HomeContent() {
  return (
    <>
      <SinopseSection />
      <MissaoSection />
      <ProtagonistaSection />
      <EquipeSection />
      <GaleriaSection />
      <CircuitoSection />
      <CotasSection />
      <MidiaSection />
      <ApresentacoesSection />
      <ContatoSection />
    </>
  );
}