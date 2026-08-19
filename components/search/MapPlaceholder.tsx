import Icon from "@/components/ui/Icon";
import { cn, formatPrice } from "@/lib/format";
import type { Listing } from "@/lib/types";

/**
 * Área de mapa. Todavía no hay mapa real: se dibuja un recuadro con una
 * retícula de calles hecha con gradientes de CSS y, encima, un pin con el
 * precio de cada alojamiento visible, para que el hueco no quede vacío.
 */
export default function MapPlaceholder({
  listings,
  className,
}: {
  listings: Listing[];
  className?: string;
}) {
  // Posiciones deterministas a partir del índice: sin Math.random(), que
  // provocaría un desajuste de hidratación entre servidor y cliente.
  const pins = listings.slice(0, 8).map((listing, i) => ({
    listing,
    top: 12 + ((i * 37) % 70),
    left: 8 + ((i * 53) % 76),
  }));

  return (
    <div
      className={cn(
        "border-border-soft bg-surface-muted relative overflow-hidden rounded-2xl border",
        className,
      )}
    >
      {/* Retícula de "calles" */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:44px_44px]"
      />

      {pins.map(({ listing, top, left }) => (
        <span
          key={listing.id}
          style={{ top: `${top}%`, left: `${left}%` }}
          className="border-border-base bg-surface text-foreground absolute -translate-x-1/2 rounded-full border px-2.5 py-1 text-[12px] font-semibold shadow-sm"
        >
          {formatPrice(listing.pricePerNight, listing.currency)}
        </span>
      ))}

      <div className="text-muted pointer-events-none absolute inset-x-0 bottom-4 flex flex-col items-center gap-1">
        <Icon name="map" size={22} strokeWidth={1.6} />
        <p className="text-sm font-medium">Mapa</p>
      </div>
    </div>
  );
}
