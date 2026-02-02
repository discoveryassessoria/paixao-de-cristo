"use client";

export function Particles() {
  return (
    <div className="particles">
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="particle" />
      ))}
    </div>
  );
}

export function DivineLight() {
  return (
    <>
      <div className="divine-light" />
      <div className="light-rays" />
    </>
  );
}

export function Vignette() {
  return <div className="vignette" />;
}

export function Grain() {
  return <div className="grain" />;
}

export function OrnamentLine({ variant = "default" }: { variant?: "default" | "simple" | "wide" }) {
  const className = {
    default: "ornament-line",
    simple: "ornament-line-simple",
    wide: "ornament-line-wide",
  }[variant];

  return <div className={className} />;
}

export function SectionDivider() {
  return (
    <div className="section-divider">
      <span style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "0.3em" }}>✦</span>
    </div>
  );
}

export function Cross({ size = "md", animate = true }: { size?: "sm" | "md" | "lg" | "xl"; animate?: boolean }) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl md:text-6xl",
    xl: "text-6xl md:text-8xl",
  };

  return (
    <span
      className={`text-gold ${sizeClasses[size]} ${animate ? "animate-cross-pulse animate-float" : ""} block`}
      style={{ fontFamily: "serif" }}
    >
      ✝
    </span>
  );
}
