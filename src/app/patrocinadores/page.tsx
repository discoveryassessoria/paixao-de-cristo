import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PatrocinadoresContent } from "@/components/PatrocinadoresContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Paixão de Cristo | Patrocínio",
  description: "Seja patrocinador do maior espetáculo da fé. Conheça as cotas de patrocínio.",
};

export default function PatrocinadoresPage() {
  return (
    <main>
      <Header />
      <PatrocinadoresContent />
      <Footer />
    </main>
  );
}
