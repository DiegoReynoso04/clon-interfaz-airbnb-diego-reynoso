import Icon from "@/components/ui/Icon";
import HostAvatar from "./HostAvatar";
import { formatRating } from "@/lib/format";
import type { CategoryRating, Listing, Review } from "@/lib/types";

/**
 * Bloque de reseñas: puntuación global, desglose por categorías con
 * barras de progreso y tarjetas de comentarios individuales.
 */
export default function ReviewsOverview({
  listing,
  categories,
  reviews,
}: {
  listing: Listing;
  categories: CategoryRating[];
  reviews: Review[];
}) {
  return (
    <section className="space-y-5">
      <h2 className="text-foreground flex items-center gap-2 text-[19px] font-semibold">
        <Icon name="star" size={16} aria-hidden="true" />
        {formatRating(listing.rating)} · {listing.reviewsCount} reseñas
      </h2>

      <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        {categories.map((category) => (
          <div key={category.label} className="flex items-center gap-3">
            <dt className="text-foreground w-32 shrink-0 text-[14px]">
              {category.label}
            </dt>
            <div
              aria-hidden="true"
              className="bg-surface-muted h-1 flex-1 overflow-hidden rounded-full"
            >
              <div
                className="bg-foreground h-full rounded-full"
                style={{ width: `${(category.value / 5) * 100}%` }}
              />
            </div>
            <dd className="text-foreground w-8 text-right text-[13px] tabular-nums">
              {category.value.toFixed(1).replace(".", ",")}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {reviews.map((review) => (
          <li key={review.id} className="space-y-2">
            <div className="flex items-center gap-3">
              <HostAvatar
                src={review.avatarUrl}
                name={review.author}
                size={40}
              />
              <div className="leading-tight">
                <p className="text-foreground text-[15px] font-semibold">
                  {review.author}
                </p>
                <p className="text-muted text-[13px]">{review.date}</p>
              </div>
            </div>

            <p
              className="text-foreground flex items-center gap-0.5"
              aria-label={`${review.rating} de 5 estrellas`}
            >
              {Array.from({ length: review.rating }, (_, i) => (
                <Icon key={i} name="star" size={11} aria-hidden="true" />
              ))}
            </p>

            <p className="text-foreground text-[15px] leading-relaxed">
              {review.text}
            </p>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="border-border-base text-foreground hover:bg-surface-muted w-full rounded-xl border px-4 py-3 text-[15px] font-semibold transition-colors sm:w-auto"
      >
        Mostrar las {listing.reviewsCount} reseñas
      </button>
    </section>
  );
}
