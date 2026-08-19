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
  | "mountain";

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
