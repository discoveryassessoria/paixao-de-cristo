import CityPage from "@/components/CityPage";
import { cities } from "@/data/content";
import { Metadata } from "next";

const city = cities.find((c) => c.slug === "socorro")!;

export const metadata: Metadata = {
  title: `A Paixão de Cristo | ${city.city} — ${city.dateFormatted}`,
  description: `A Paixão de Cristo em ${city.city}-${city.state}. ${city.dateFormatted} às ${city.time}. O Maior Espetáculo da Fé com Henri Castelli.`,
};

export default function SocorroPage() {
  return <CityPage city={city} />;
}
