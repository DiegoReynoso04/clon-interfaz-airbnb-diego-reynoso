import HomeHeader from "@/components/home/HomeHeader";
import SectionCarousel from "@/components/home/SectionCarousel";
import { getSectionListings, homeSections } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HomeHeader />

      <main className="flex-1 pt-4">
        {homeSections.map((section, i) => (
          <SectionCarousel
            key={section.id}
            title={section.title}
            href={section.href}
            listings={getSectionListings(section)}
            priority={i === 0}
          />
        ))}

        <p className="text-subtle px-5 pt-2 pb-6 text-center text-xs">
          Proyecto educativo · Clon de la interfaz de Airbnb
        </p>
      </main>
    </>
  );
}
