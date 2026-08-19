import Link from "next/link";
import Icon from "@/components/ui/Icon";
import ListingCard from "@/components/listing/ListingCard";
import type { Listing } from "@/lib/types";

/**
 * Sección horizontal de la Home: título, enlace de "ver todo" y carrusel
 * de tarjetas. En móvil las tarjetas ocupan ~72% del ancho para que se
 * insinúe la siguiente; en pantallas grandes pasan a rejilla fluida.
 */
export default function SectionCarousel({
  title,
  href,
  listings,
  priority = false,
}: {
  title: string;
  href: string;
  listings: Listing[];
  priority?: boolean;
}) {
  return (
    <section className="pt-2 pb-6">
      <div className="flex items-center justify-between gap-3 px-5 pb-3">
        <h2 className="text-foreground text-[19px] leading-tight font-semibold">
          {title}
        </h2>
        <Link
          href={href}
          aria-label={`Ver todo: ${title}`}
          className="border-border-base text-foreground hover:bg-surface-muted grid size-8 shrink-0 place-items-center rounded-full border transition-colors"
        >
          <Icon name="chevron-right" size={16} strokeWidth={2.2} />
        </Link>
      </div>

      <div className="scrollbar-none flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1">
        {listings.map((listing, i) => (
          <div
            key={listing.id}
            className="w-[72%] shrink-0 snap-start sm:w-[46%] lg:w-[31%] xl:w-[23%]"
          >
            <ListingCard listing={listing} priority={priority && i === 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
