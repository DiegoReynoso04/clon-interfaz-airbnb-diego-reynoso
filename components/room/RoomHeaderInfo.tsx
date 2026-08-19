import Icon from "@/components/ui/Icon";
import { formatPrice, formatRating } from "@/lib/format";
import { getMaxGuests } from "@/lib/room-detail";
import type { Listing } from "@/lib/types";

/**
 * Cabecera del alojamiento: título, ubicación, valoración con estrella,
 * número de reseñas, etiqueta de descuento y desglose rápido de capacidad.
 */
export default function RoomHeaderInfo({ listing }: { listing: Listing }) {
  const { originalPricePerNight: was, pricePerNight: now } = listing;
  const hasDiscount = typeof was === "number" && was > now;
  const discountPercent = hasDiscount
    ? Math.round(((was - now) / was) * 100)
    : 0;

  const breakdown = [
    `${getMaxGuests(listing)} huéspedes`,
    `${listing.bedrooms} ${listing.bedrooms === 1 ? "dormitorio" : "dormitorios"}`,
    `${listing.beds} ${listing.beds === 1 ? "cama" : "camas"}`,
    `${listing.bathrooms} ${listing.bathrooms === 1 ? "baño" : "baños"}`,
  ].join(" · ");

  return (
    <section className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        {listing.isGuestFavorite && (
          <span className="border-border-base text-foreground rounded-full border px-2.5 py-1 text-[11px] font-semibold">
            Favorito entre huéspedes
          </span>
        )}
        {hasDiscount && (
          <span className="bg-rausch rounded-full px-2.5 py-1 text-[11px] font-bold text-white">
            {discountPercent}% de descuento
          </span>
        )}
      </div>

      <h1 className="text-foreground text-[22px] leading-tight font-semibold">
        {listing.title}
      </h1>

      <p className="text-muted text-[15px]">{listing.location}</p>
      <p className="text-muted text-[15px]">{breakdown}</p>

      <div className="text-foreground flex items-center gap-1.5 pt-1 text-[15px]">
        <Icon name="star" size={14} aria-hidden="true" />
        <span className="font-semibold">{formatRating(listing.rating)}</span>
        <span aria-hidden="true" className="text-muted">
          ·
        </span>
        <span className="text-muted underline underline-offset-2">
          {listing.reviewsCount} reseñas
        </span>
      </div>

      {hasDiscount && (
        <p className="text-muted pt-1 text-[14px]">
          Antes{" "}
          <span className="line-through">
            {formatPrice(was, listing.currency)}
          </span>{" "}
          por noche · ahora{" "}
          <span className="text-foreground font-semibold">
            {formatPrice(now, listing.currency)}
          </span>
        </p>
      )}
    </section>
  );
}
