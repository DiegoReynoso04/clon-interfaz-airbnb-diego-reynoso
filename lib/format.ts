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

/** Une clases condicionales sin dependencias externas (sustituto de clsx). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
