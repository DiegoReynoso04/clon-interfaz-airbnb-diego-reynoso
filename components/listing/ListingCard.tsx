import Link from "next/link";
import Icon from "@/components/ui/Icon";
import FavoriteButton from "./FavoriteButton";
import ImageCarousel from "./ImageCarousel";
import { cn, formatPrice, formatRating } from "@/lib/format";
import type { Listing } from "@/lib/types";

/**
 * Tarjeta de alojamiento: carrusel de fotos (con placeholder mientras
 * cargan), corazón de favoritos, insignia, título, ubicación, fechas,
 * precio por noche y valoración con estrella.
 */
export default function ListingCard({
  listing,
  priority = false,
  sizes,
  className,
}: {
  listing: Listing;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const hasDiscount =
    typeof listing.originalPricePerNight === "number" &&
    listing.originalPricePerNight > listing.pricePerNight;

  return (
    <article className={cn("group w-full", className)}>
      <Link href={`/rooms/${listing.id}`} className="block">
        <div className="relative">
          <ImageCarousel
            images={listing.images}
            alt={`${listing.title} en ${listing.location}`}
            priority={priority}
            sizes={sizes}
            className="aspect-square w-full rounded-xl"
          />

          {listing.badge && (
            <span className="absolute top-3 left-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-neutral-900 shadow-sm">
              {listing.badge}
            </span>
          )}

          <FavoriteButton
            listingTitle={listing.title}
            defaultActive={listing.isGuestFavorite}
            className="absolute top-2 right-2"
          />
        </div>

        <div className="pt-2.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-foreground truncate text-[15px] font-semibold">
              {listing.title}
            </h3>
            <span
              className="text-foreground flex shrink-0 items-center gap-1 text-[13px]"
              aria-label={`Valoración: ${formatRating(listing.rating)} sobre 5, ${listing.reviewsCount} reseñas`}
            >
              <Icon name="star" size={12} aria-hidden="true" />
              <span aria-hidden="true">{formatRating(listing.rating)}</span>
            </span>
          </div>

          <p className="text-muted truncate text-[14px]">{listing.location}</p>
          <p className="text-muted text-[14px]">{listing.availability}</p>

          <p className="text-foreground pt-1 text-[14px]">
            {hasDiscount && (
              <span className="text-muted mr-1 line-through">
                {formatPrice(listing.originalPricePerNight!, listing.currency)}
              </span>
            )}
            <span className="font-semibold">
              {formatPrice(listing.pricePerNight, listing.currency)}
            </span>{" "}
            por noche
          </p>
        </div>
      </Link>
    </article>
  );
}
