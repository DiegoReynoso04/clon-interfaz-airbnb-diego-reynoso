import Icon from "@/components/ui/Icon";
import type { Listing } from "@/lib/types";

/**
 * Previsualización de la ubicación. Como el resto del proyecto, no hay
 * mapa real: se dibuja una retícula de calles con gradientes de CSS y un
 * círculo que representa la zona aproximada, igual que hace Airbnb antes
 * de confirmar la reserva.
 */
export default function LocationMapPreview({ listing }: { listing: Listing }) {
  return (
    <section className="space-y-4">
      <h2 className="text-foreground text-[19px] font-semibold">
        Dónde vas a estar
      </h2>

      <div className="border-border-soft bg-surface-muted relative h-64 overflow-hidden rounded-2xl border sm:h-80">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:48px_48px]"
        />

        {/* Zona aproximada */}
        <div
          aria-hidden="true"
          className="border-rausch bg-rausch/15 absolute top-1/2 left-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 sm:size-44"
        />

        <span className="text-muted absolute inset-x-0 bottom-4 flex flex-col items-center gap-1">
          <Icon name="map" size={22} strokeWidth={1.6} aria-hidden="true" />
          <span className="text-sm font-medium">Mapa</span>
        </span>
      </div>

      <div className="space-y-1">
        <p className="text-foreground text-[15px] font-semibold">
          {listing.location}
        </p>
        <p className="text-muted text-[15px]">
          Te mostramos la ubicación exacta cuando confirmes la reserva.
        </p>
      </div>
    </section>
  );
}
