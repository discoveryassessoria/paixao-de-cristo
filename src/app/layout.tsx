import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Paixão de Cristo | O Maior Espetáculo da Fé",
  description:
    "O Circuito das Águas Paulista será a capital estadual da Paixão de Cristo. Espetáculo grandioso estrelado por Henri Castelli.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
