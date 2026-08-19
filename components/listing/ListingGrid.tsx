import ListingCard from "./ListingCard";
import ListingCardSkeleton from "./ListingCardSkeleton";
import type { Listing } from "@/lib/types";

/** Nº de esqueletos que se pintan mientras llegan los datos. */
const SKELETON_COUNT = 8;

/** Tamaños que necesita `next/image` para servir la foto correcta por breakpoint. */
const GRID_IMAGE_SIZES =
  "(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw";

/**
 * Cuadrícula responsiva de alojamientos: 1 columna en móvil, 2 a partir de
 * `sm`, 3 en `lg` y 4 en `xl`. Gestiona también el estado de carga y el
 * estado vacío cuando ningún alojamiento coincide con los filtros.
 */
export default function ListingGrid({
  listings,
  isLoading = false,
  emptyMessage = "Prueba a cambiar la búsqueda o a elegir otra categoría.",
}: {
  listings: Listing[];
  isLoading?: boolean;
  emptyMessage?: string;
}) {
  if (isLoading) {
    return (
      <div
        role="status"
        aria-busy="true"
        className="grid grid-cols-1 gap-x-5 gap-y-8 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <span className="sr-only">Cargando alojamientos…</span>
        {Array.from({ length: SKELETON_COUNT }, (_, i) => (
          <ListingCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 px-8 py-20 text-center">
        <p className="text-foreground text-lg font-semibold">
          No hay resultados
        </p>
        <p className="text-muted max-w-xs text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-8 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((listing, i) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          priority={i < 4}
          sizes={GRID_IMAGE_SIZES}
        />
      ))}
    </div>
  );
}
