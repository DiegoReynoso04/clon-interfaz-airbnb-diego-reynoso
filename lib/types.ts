/**
 * Modelo de datos del clon de Airbnb.
 * Todo es local (mock): no hay backend ni fetch remoto.
 */

export type CategoryId =
  | "todo"
  | "playa"
  | "mansiones"
  | "tendencias"
  | "cabanas"
  | "piscinas"
  | "islas"
  | "vistas";

export interface Category {
  id: CategoryId;
  label: string;
  /** Nombre del icono en `components/ui/Icon.tsx` */
  icon: IconName;
}

export type IconName =
  | "search"
  | "close"
  | "heart"
  | "heart-filled"
  | "user"
  | "compass"
  | "star"
  | "chevron-left"
  | "chevron-right"
  | "house"
  | "balloon"
  | "bell"
  | "waves"
  | "mansion"
  | "flame"
  | "cabin"
  | "pool"
  | "palm"
  | "mountain"
  | "sliders"
  | "map"
  | "chevron-down"
  | "share"
  | "minus"
  | "plus"
  | "check"
  | "clock"
  | "medal"
  | "wifi"
  | "kitchen"
  | "snowflake"
  | "washer"
  | "car"
  | "pet"
  | "coffee"
  | "tv"
  | "tree"
  | "sun"
  | "bed";

/** Una reseña de un huésped. */
export interface Review {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  rating: number;
  text: string;
}

/** Puntuación por categoría del bloque de reseñas. */
export interface CategoryRating {
  label: string;
  value: number;
}

/** Estadísticas del anfitrión que muestra `HostCardFull`. */
export interface HostStats {
  reviews: number;
  rating: number;
  yearsHosting: number;
  responseRate: number;
  responseTime: string;
}

/** Criterios de ordenación del catálogo de resultados. */
export type SortOrder = "recomendados" | "precio-asc" | "precio-desc";

/**
 * Filtro rápido de la barra de chips. `match` es el texto (ya normalizado,
 * sin tildes) que debe aparecer en alguna comodidad del alojamiento.
 */
export interface QuickFilter {
  id: string;
  label: string;
  match: string;
}

/** Parámetros de la búsqueda activa que resume `SearchHeader`. */
export interface SearchSummary {
  destination: string;
  dates: string;
  guests: string;
}

export interface Host {
  id: string;
  name: string;
  avatarUrl: string;
  /** Años hospedando */
  yearsHosting: number;
  isSuperhost: boolean;
}

export interface Listing {
  id: string;
  /** Título corto que se muestra sobre la tarjeta (ej. "Cabaña en Ronda") */
  title: string;
  location: string;
  /** Categoría a la que pertenece, usada por la fila de filtros */
  category: Exclude<CategoryId, "todo">;
  /** URLs de las fotos del carrusel (mínimo 1) */
  images: string[];
  pricePerNight: number;
  /** Precio anterior, si hay descuento */
  originalPricePerNight?: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  /** Etiqueta destacada sobre la imagen: "Favorito entre huéspedes", etc. */
  badge?: string;
  isGuestFavorite: boolean;
  host: Host;
  beds: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  /** Rango de fechas disponible mostrado bajo el título */
  availability: string;
}

export interface ListingSection {
  id: string;
  title: string;
  /** Ruta a la que lleva el botón "ver todo" de la sección */
  href: string;
  listingIds: string[];
}
