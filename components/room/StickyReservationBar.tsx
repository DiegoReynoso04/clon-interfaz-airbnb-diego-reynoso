"use client";

import { formatPrice, formatShortDate, nightsBetween } from "@/lib/format";
import type { Listing } from "@/lib/types";
import type { DateRange } from "react-day-picker";

/**
 * Barra fija inferior de la ficha (solo móvil): precio antes/ahora,
 * resumen de fechas y CTA principal. Si aún no hay fechas, el botón
 * lleva al calendario en vez de reservar.
 */
export default function StickyReservationBar({
  listing,
  range,
  onPickDates,
}: {
  listing: Listing;
  range: DateRange | undefined;
  onPickDates: () => void;
}) {
  const nights = nightsBetween(range?.from, range?.to);
  const total = listing.pricePerNight * nights;

  const { originalPricePerNight: was, pricePerNight: now } = listing;
  const hasDiscount = typeof was === "number" && was > now;

  return (
    <div className="border-border-soft bg-surface pb-safe fixed inset-x-0 bottom-0 z-40 border-t lg:hidden">
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <div className="min-w-0 leading-tight">
          <p className="text-foreground flex flex-wrap items-baseline gap-x-1.5">
            {hasDiscount && (
              <span className="text-muted text-[13px] line-through">
                {formatPrice(was, listing.currency)}
              </span>
            )}
            <span className="text-[17px] font-semibold">
              {nights > 0
                ? formatPrice(total, listing.currency)
                : formatPrice(now, listing.currency)}
            </span>
            <span className="text-[13px]">
              {nights > 0
                ? `por ${nights} ${nights === 1 ? "noche" : "noches"}`
                : "por noche"}
            </span>
          </p>

          <p className="text-muted truncate text-[13px] underline underline-offset-2">
            {range?.from && range?.to
              ? `${formatShortDate(range.from)} – ${formatShortDate(range.to)}`
              : "Selecciona las fechas"}
          </p>
        </div>

        <button
          type="button"
          onClick={nights === 0 ? onPickDates : undefined}
          className="bg-rausch hover:bg-rausch-dark shrink-0 rounded-xl px-6 py-3 text-[15px] font-semibold text-white transition-colors"
        >
          {nights === 0 ? "Ver fechas" : "Reservar"}
        </button>
      </div>
    </div>
  );
}
