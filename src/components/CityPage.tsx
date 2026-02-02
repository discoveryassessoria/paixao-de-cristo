"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { Particles, DivineLight, Vignette, Grain, OrnamentLine, Cross } from "./Effects";
import { RevealSection } from "./ScrollReveal";
import { CityEvent, sinopse, henriCastelli, galleryImages, siteConfig, contactInfo } from "@/data/content";
import { useState } from "react";

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function HeroCity({ city }: { city: CityEvent }) {
  return (
    <>
      <Grain />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, #1a1510 0%, #0d0b08 50%, #050505 100%)" }}>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="hero-atmosphere">
          <DivineLight />
          <Particles />
        </div>
        <Vignette />

        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto pt-20">
          <div className="mb-8 animate-fade-in">
            <span className="text-gold text-5xl md:text-6xl animate-cross-pulse animate-float inline-block">✝</span>
          </div>

          <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4 animate-fade-in opacity-0" style={{ color: "var(--text-muted)" }}>
            {siteConfig.subtitle}
          </p>

          <h1 className="animate-fade-in-up delay-200 opacity-0">
            <span className="font-cinzel-decorative text-5xl md:text-7xl lg:text-8xl tracking-[0.08em] text-gradient-gold block leading-[0.9]">
              A Paixão
            </span>
            <span className="font-cinzel text-2xl md:text-3xl tracking-[0.3em] block mt-3" style={{ color: "var(--gold-light)" }}>
              de Cristo
            </span>
          </h1>

          <p className="font-cormorant italic text-xl md:text-2xl mt-6 animate-fade-in-up delay-400 opacity-0" style={{ color: "var(--text-secondary)" }}>
            Com <span className="text-gold font-semibold not-italic">Henri Castelli</span> como Jesus
          </p>

          <div className="animate-fade-in delay-500 opacity-0 my-6">
            <OrnamentLine variant="wide" />
          </div>

          <div className="animate-fade-in-up delay-600 opacity-0 mt-8">
            <p className="font-cinzel text-lg md:text-2xl tracking-[0.1em]" style={{ color: "var(--text-primary)" }}>
              {city.city} — {city.state}
            </p>
            <p className="font-cormorant text-2xl md:text-4xl text-gold font-semibold mt-2">
              {city.dateFormatted}
            </p>
            <p className="font-cormorant text-lg mt-1" style={{ color: "var(--text-secondary)" }}>
              {city.dayOfWeek} • {city.time} · {city.venue}
            </p>
          </div>

          <div className="mt-12 animate-fade-in-up delay-800 opacity-0">
            <a href={city.ticketUrl} className="btn-gold">Garanta seu Ingresso</a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-1200 opacity-0 flex flex-col items-center">
          <div className="w-px h-12 mb-2" style={{ background: "linear-gradient(180deg, transparent, var(--gold-dark), transparent)" }} />
          <span className="font-cinzel text-[8px] tracking-[0.5em] uppercase" style={{ color: "var(--text-muted)" }}>Rolar</span>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════
   SINOPSE
   ═══════════════════════════════════════════ */
function SinopseSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(26,24,22,0.3), var(--bg-secondary))" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-8 py-28 md:py-36">
        <RevealSection>
          <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "var(--gold)" }}>Sinopse</p>
          <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold mb-10 leading-tight">
            {sinopse.title}
          </h2>
        </RevealSection>
        <RevealSection delay={200}>
          <p className="font-cormorant italic text-xl md:text-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {sinopse.text}
          </p>
        </RevealSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROTAGONISTA
   ═══════════════════════════════════════════ */
function ProtagonistaSection() {
  return (
    <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
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
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Principais Trabalhos: </span>
                {henriCastelli.works}
              </p>
            </RevealSection>
            <RevealSection delay={500}>
              <blockquote className="pl-6 py-4" style={{ borderLeft: "2px solid var(--gold-dark)" }}>
                <p className="font-cormorant italic text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {henriCastelli.quote}
                </p>
              </blockquote>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   GALERIA
   ═══════════════════════════════════════════ */
function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>Registros</p>
              <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold mb-6">Galeria</h2>
              <OrnamentLine variant="simple" />
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <RevealSection key={i} variant="scale" delay={i * 80}>
                <div className="relative aspect-[4/3] overflow-hidden cursor-pointer group" onClick={() => setSelected(i)}>
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url('${img.src}')`, backgroundColor: "var(--bg-tertiary)" }} />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all duration-700" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-all duration-500" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <button className="absolute top-8 right-8 text-gold text-3xl hover:text-gold-light transition-colors font-cinzel" onClick={() => setSelected(null)}>×</button>
          <button className="absolute left-4 md:left-10 text-gold text-3xl hover:text-gold-light transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelected(selected > 0 ? selected - 1 : galleryImages.length - 1); }}>‹</button>
          <div className="relative w-full max-w-5xl aspect-[16/10]">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${galleryImages[selected].src}')`, backgroundColor: "var(--bg-tertiary)" }} />
          </div>
          <button className="absolute right-4 md:right-10 text-gold text-3xl hover:text-gold-light transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelected(selected < galleryImages.length - 1 ? selected + 1 : 0); }}>›</button>
        </div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════
   INFORMAÇÕES DO EVENTO
   ═══════════════════════════════════════════ */
function EventInfoSection({ city }: { city: CityEvent }) {
  return (
    <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <RevealSection>
          <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold mb-6">Informações</h2>
          <OrnamentLine variant="simple" />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: "☆", label: "Data", main: city.dateFormatted, sub: `${city.dayOfWeek} • ${city.time}` },
            { icon: "♱", label: "Local", main: city.venue, sub: `${city.city} — ${city.state}` },
            { icon: "❖", label: "Ingressos", main: "Comprar", sub: "Garanta seu lugar", link: city.ticketUrl },
          ].map((card, i) => (
            <RevealSection key={i} delay={i * 150}>
              <div className="p-10 text-center transition-all duration-700 hover:-translate-y-1"
                style={{ background: "var(--bg-card)", border: "1px solid rgba(200,169,97,0.12)" }}>
                <span className="text-gold text-3xl block mb-5">{card.icon}</span>
                <h3 className="font-cinzel text-[10px] tracking-[0.3em] text-gold uppercase mb-4">{card.label}</h3>
                {card.link ? (
                  <a href={card.link} className="font-cormorant text-xl text-gold hover:text-gold-light transition-colors underline underline-offset-4">{card.main}</a>
                ) : (
                  <p className="font-cormorant text-xl" style={{ color: "var(--text-primary)" }}>{card.main}</p>
                )}
                <p className="font-cormorant text-base mt-1" style={{ color: "var(--text-secondary)" }}>{card.sub}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={500}>
          <div className="mt-16">
            <a href={city.ticketUrl} className="btn-gold">Garanta seu Lugar</a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CTA PATROCINADORES
   ═══════════════════════════════════════════ */
function CtaSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(200,169,97,0.06), var(--bg-void))" }} />
      </div>
      <div className="relative z-10 text-center px-8">
        <RevealSection>
          <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>Oportunidade</p>
          <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-gradient-gold mb-8">Seja um Patrocinador</h2>
          <p className="font-cormorant text-xl md:text-2xl max-w-2xl mx-auto mb-12" style={{ color: "var(--text-secondary)" }}>
            Associe sua marca ao maior espetáculo da fé e faça parte dessa história.
          </p>
          <Link href="/patrocinadores" className="btn-gold-filled">Conheça as Cotas</Link>
        </RevealSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   EXPORT PRINCIPAL
   ═══════════════════════════════════════════ */
export default function CityPage({ city }: { city: CityEvent }) {
  return (
    <main>
      <Header />
      <HeroCity city={city} />
      <SinopseSection />
      <ProtagonistaSection />
      <GallerySection />
      <EventInfoSection city={city} />
      <CtaSection />
      <Footer />
    </main>
  );
}