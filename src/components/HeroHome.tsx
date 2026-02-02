"use client";

import Link from "next/link";
import { Particles, DivineLight, Vignette, Grain, OrnamentLine } from "./Effects";
import { cities, siteConfig } from "@/data/content";

export function HeroHome() {
  return (
    <>
      <Grain />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with CSS gradient fallback (works without images) */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 30%, #1a1510 0%, #0d0b08 50%, #050505 100%)",
        }}>
          {/* If hero-bg.jpg exists it will show, otherwise gradient */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Atmospheric Effects */}
        <div className="hero-atmosphere">
          <DivineLight />
          <Particles />
        </div>
        <Vignette />

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto pt-20">
          {/* Small label */}
          <p className="font-cinzel text-[10px] tracking-[0.5em] uppercase mb-6 animate-fade-in opacity-0"
            style={{ color: "var(--text-muted)" }}>
            {siteConfig.subtitle}
          </p>

          {/* Main Title */}
          <h1 className="animate-fade-in-up delay-200 opacity-0">
            <span className="font-cinzel-decorative text-6xl md:text-8xl lg:text-9xl tracking-[0.08em] text-gradient-gold block leading-[0.9]">
              A Paixão
            </span>
            <span className="font-cinzel text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] block mt-4"
              style={{ color: "var(--gold-light)" }}>
              de Cristo
            </span>
          </h1>

          {/* Henri Castelli tagline */}
          <p className="font-cormorant italic text-2xl md:text-3xl mt-8 mb-10 animate-fade-in-up delay-400 opacity-0"
            style={{ color: "var(--text-secondary)" }}>
            Com <span className="text-gold font-semibold not-italic">Henri Castelli</span> como Jesus
          </p>

          {/* City Cards */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up delay-600 opacity-0">
            {cities.map((city) => (
              <Link key={city.slug} href={`/${city.slug}`} className="group">
                <div className="relative px-12 py-8 min-w-[240px] transition-all duration-700"
                  style={{ background: "rgba(26,24,22,0.6)", border: "1px solid rgba(200,169,97,0.2)", backdropFilter: "blur(10px)" }}>
                  {/* Hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: "linear-gradient(135deg, rgba(200,169,97,0.1), rgba(200,169,97,0.02))" }} />

                  {/* Corner details */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t border-l opacity-40 group-hover:opacity-80 transition-opacity" style={{ borderColor: "var(--gold)" }} />
                  <div className="absolute top-0 right-0 w-5 h-5 border-t border-r opacity-40 group-hover:opacity-80 transition-opacity" style={{ borderColor: "var(--gold)" }} />
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l opacity-40 group-hover:opacity-80 transition-opacity" style={{ borderColor: "var(--gold)" }} />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r opacity-40 group-hover:opacity-80 transition-opacity" style={{ borderColor: "var(--gold)" }} />

                  <div className="relative z-10">
                    <p className="font-cinzel text-xl tracking-[0.15em] text-gold group-hover:text-gold-light transition-colors">
                      {city.city}-{city.state}
                    </p>
                    <p className="font-cormorant text-lg mt-2" style={{ color: "var(--text-secondary)" }}>
                      {city.dateFormatted}
                    </p>
                    <p className="font-cormorant text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                      {city.dayOfWeek} • {city.time}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-1200 opacity-0 flex flex-col items-center">
          <div className="w-px h-12 mb-2" style={{ background: "linear-gradient(180deg, transparent, var(--gold-dark), transparent)" }} />
          <span className="font-cinzel text-[8px] tracking-[0.5em] uppercase" style={{ color: "var(--text-muted)" }}>Rolar</span>
        </div>
      </section>
    </>
  );
}
