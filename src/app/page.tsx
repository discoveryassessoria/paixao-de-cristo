import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroHome } from "@/components/HeroHome";
import { HomeContent } from "@/components/HomeContent";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroHome />
      <HomeContent />
      <Footer />
    </main>
  );
}
