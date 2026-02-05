import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChoicePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#050505",
      }}
    >
      {/* Conteúdo */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "2rem",
          animation: "introContentAppear 2s ease forwards",
        }}
      >
        {/* Cruz */}
        <div
          style={{
            fontSize: "3rem",
            color: "#C8A961",
            marginBottom: "1.5rem",
            textShadow: "0 0 40px rgba(200,169,97,0.5)",
            animation: "crossPulse 3s ease-in-out infinite",
          }}
        >
          ✝
        </div>

        {/* Título */}
        <h1
          style={{
            fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
            fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            background: "linear-gradient(135deg, #9B7B30, #C8A961, #E8D5A0, #C8A961)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
            textTransform: "uppercase",
            fontVariant: "small-caps",
          }}
        >
          A Paixão de Cristo
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontStyle: "italic",
            color: "#C4BAA8",
            letterSpacing: "0.15em",
            marginBottom: "2.5rem",
          }}
        >
          O Maior Espetáculo da Fé
        </p>

        {/* Botão Lindóia */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => navigate('/lindoia')}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.85rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "16px 50px",
              border: "1px solid #C8A961",
              background: "transparent",
              color: "#C8A961",
              cursor: "pointer",
              transition: "all 0.5s ease",
              minWidth: "280px",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "linear-gradient(135deg, #9B7B30, #C8A961)";
              e.target.style.color = "#050505";
              e.target.style.boxShadow = "0 0 40px rgba(200,169,97,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#C8A961";
              e.target.style.boxShadow = "none";
            }}
          >
            Lindóia — SP
            <span style={{ display: "block", fontSize: "0.7rem", marginTop: "4px", letterSpacing: "0.15em", opacity: 0.8 }}>
              28 de Março de 2026
            </span>
          </button>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.65rem, 1.3vw, 0.85rem)",
            color: "#C8A961",
            letterSpacing: "0.1em",
            maxWidth: "500px",
            lineHeight: 1.6,
            fontVariant: "small-caps",
            textTransform: "uppercase",
            textAlign: "center",
            margin: "2.5rem auto 0",
          }}
        >
          O Circuito das Águas Paulista será a capital estadual da Paixão de Cristo.
        </p>
      </div>

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap');
        
        @keyframes introContentAppear {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes crossPulse {
          0%, 100% { opacity: 0.8; text-shadow: 0 0 30px rgba(200,169,97,0.4); }
          50% { opacity: 1; text-shadow: 0 0 60px rgba(200,169,97,0.7); }
        }
      `}</style>
    </div>
  );
}