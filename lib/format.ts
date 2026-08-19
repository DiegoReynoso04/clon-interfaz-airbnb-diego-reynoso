/** Formatea un importe como precio en euros sin decimales (estilo Airbnb ES). */
export function formatPrice(amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Formatea una valoración con dos decimales: 4.9 -> "4,90". */
export function formatRating(rating: number): string {
  return new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rating);
}

/**
 * Normaliza texto para buscar: minúsculas y sin tildes, de modo que
 * "malaga" encuentre "Málaga".
 */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/** Formatea una fecha como "21 ago". */
export function formatShortDate(date: Date): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
  }).format(date);
}

/** Nº de noches entre dos fechas (0 si falta alguna o el rango es inverso). */
export function nightsBetween(from?: Date, to?: Date): number {
  if (!from || !to) return 0;
  const ms = to.getTime() - from.getTime();
  return Math.max(0, Math.round(ms / 86_400_000));
}

/** Une clases condicionales sin dependencias externas (sustituto de clsx). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
