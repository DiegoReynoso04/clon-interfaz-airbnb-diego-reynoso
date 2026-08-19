import Link from "next/link";
import Icon from "@/components/ui/Icon";
import FavoriteButton from "./FavoriteButton";
import ImageCarousel from "./ImageCarousel";
import { cn, formatPrice, formatRating } from "@/lib/format";
import type { Listing } from "@/lib/types";

const CARD_IMAGE_SIZES =
  "(min-width: 1280px) 30vw, (min-width: 1024px) 45vw, (min-width: 640px) 45vw, 92vw";

/**
 * Variante ampliada de la tarjeta para el catálogo de resultados.
 * Reutiliza `ImageCarousel` y `FavoriteButton` de la tarjeta de la Home y
 * añade lo que pide la vista de búsqueda: insignia de Superanfitrión,
 * distribución de camas y baños, desglose de precio antes/ahora, tag de
 * descuento y total de la estancia.
 */
export default function ListingCardDetailed({
  listing,
  priority = false,
  /** Noches de la estancia, para calcular el total mostrado bajo el precio. */
  nights = 7,
  className,
}: {
  listing: Listing;
  priority?: boolean;
  nights?: number;
  className?: string;
}) {
  const { originalPricePerNight: was, pricePerNight: now } = listing;
  const hasDiscount = typeof was === "number" && was > now;
  const discountPercent = hasDiscount
    ? Math.round(((was - now) / was) * 100)
    : 0;

  const distribution = [
    `${listing.bedrooms} ${listing.bedrooms === 1 ? "dormitorio" : "dormitorios"}`,
    `${listing.beds} ${listing.beds === 1 ? "cama" : "camas"}`,
    `${listing.bathrooms} ${listing.bathrooms === 1 ? "baño" : "baños"}`,
  ].join(" · ");

  return (
    <article
      className={cn(
        "border-border-soft bg-surface overflow-hidden rounded-2xl border",
        className,
      )}
    >
      <Link href={`/rooms/${listing.id}`} className="block">
        <div className="relative">
          <ImageCarousel
            images={listing.images}
            alt={`${listing.title} en ${listing.location}`}
            priority={priority}
            sizes={CARD_IMAGE_SIZES}
            className="aspect-[4/3] w-full"
          />

          <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
            {listing.host.isSuperhost && (
              <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-neutral-900 shadow-sm">
                Superanfitrión
              </span>
            )}
            {hasDiscount && (
              <span className="bg-rausch rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                -{discountPercent}%
              </span>
            )}
          </div>

          <FavoriteButton
            listingTitle={listing.title}
            defaultActive={listing.isGuestFavorite}
            className="absolute top-2 right-2"
          />
        </div>

        <div className="space-y-1 p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-foreground text-[16px] leading-snug font-semibold">
              {listing.title}
            </h3>
            <span
              className="text-foreground flex shrink-0 items-center gap-1 pt-0.5 text-[13px]"
              aria-label={`Valoración: ${formatRating(listing.rating)} sobre 5, ${listing.reviewsCount} reseñas`}
            >
              <Icon name="star" size={12} aria-hidden="true" />
              <span aria-hidden="true">{formatRating(listing.rating)}</span>
              <span aria-hidden="true" className="text-muted font-normal">
                ({listing.reviewsCount})
              </span>
            </span>
          </div>

          <p className="text-muted text-[14px]">{listing.location}</p>
          <p className="text-muted text-[14px]">{distribution}</p>
          <p className="text-muted text-[14px]">{listing.availability}</p>

          <div className="flex flex-wrap items-baseline gap-x-2 pt-2">
            {hasDiscount && (
              <span className="text-muted text-[14px] line-through">
                {formatPrice(was, listing.currency)}
              </span>
            )}
            <span className="text-foreground text-[17px] font-semibold">
              {formatPrice(now, listing.currency)}
            </span>
            <span className="text-foreground text-[14px]">por noche</span>
          </div>

          <p className="text-muted text-[13px] underline underline-offset-2">
            {formatPrice(now * nights, listing.currency)} en total · {nights}{" "}
            noches
          </p>
        </div>
      </Link>
    </article>
  );
}
