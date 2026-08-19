import Icon from "@/components/ui/Icon";
import { getBedSummary } from "@/lib/room-detail";
import type { Listing } from "@/lib/types";

/**
 * Módulo "¿Dónde dormirás?": una tarjeta por dormitorio con el resumen
 * de camas. Se genera a partir de `bedrooms` y `beds` del alojamiento.
 */
export default function RoomDistribution({ listing }: { listing: Listing }) {
  const summary = getBedSummary(listing);

  return (
    <section className="space-y-4">
      <h2 className="text-foreground text-[19px] font-semibold">
        ¿Dónde dormirás?
      </h2>

      <div className="scrollbar-none flex snap-x snap-mandatory gap-3 overflow-x-auto">
        {Array.from({ length: listing.bedrooms }, (_, i) => (
          <article
            key={i}
            className="border-border-soft bg-surface w-56 shrink-0 snap-start rounded-2xl border p-4"
          >
            <span className="text-muted">
              <Icon name="bed" size={26} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <p className="text-foreground pt-3 text-[15px] font-semibold">
              Dormitorio {i + 1}
            </p>
            <p className="text-muted text-[14px]">
              {i === 0 ? summary : "1 cama doble"}
            </p>
          </article>
        ))}

        <article className="border-border-soft bg-surface w-56 shrink-0 snap-start rounded-2xl border p-4">
          <span className="text-muted">
            <Icon name="house" size={26} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <p className="text-foreground pt-3 text-[15px] font-semibold">
            Espacios comunes
          </p>
          <p className="text-muted text-[14px]">
            Salón, cocina y{" "}
            {listing.bathrooms === 1 ? "1 baño" : `${listing.bathrooms} baños`}
          </p>
        </article>
      </div>
    </section>
  );
}
