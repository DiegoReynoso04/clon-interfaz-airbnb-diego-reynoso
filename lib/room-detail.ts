import { normalize } from "./format";
import type {
  CategoryRating,
  HostStats,
  IconName,
  Listing,
  Review,
} from "./types";

/**
 * Datos derivados de la ficha de habitación.
 *
 * En lugar de duplicar 14 fichas completas en `data.ts`, todo lo que solo
 * necesita el detalle se calcula aquí a partir del alojamiento. Es
 * determinista (nada de `Math.random()`), así que servidor y cliente
 * producen siempre lo mismo.
 */

/* -------------------------------------------------------------------------- */
/* Descripciones                                                               */
/* -------------------------------------------------------------------------- */

const DESCRIPTIONS: Record<string, string> = {
  "ronda-cueva":
    "Una casa cueva excavada en la roca del Tajo, con temperatura estable todo el año y una terraza suspendida sobre el desfiladero. A diez minutos andando del Puente Nuevo.",
  "cadaques-mar":
    "Casa blanca de pescadores a pie de cala, con acceso directo al agua y un porche cubierto donde se come mirando al Mediterráneo.",
  "pirineos-cabana":
    "Cabaña de madera a 1.200 metros de altitud, con chimenea, sauna y vistas al valle de Pineta. Las rutas de senderismo salen desde la misma puerta.",
  "madrid-atico":
    "Ático reformado en pleno Malasaña, con terraza privada sobre los tejados y todo el barrio a golpe de paseo.",
  "ibiza-villa":
    "Villa contemporánea con piscina privada, cocina exterior y jardín de buganvillas, a cinco minutos en coche de Santa Eulalia.",
  "granada-carmen":
    "Carmen tradicional del Albaicín con jardín escalonado, aljibe y la mejor vista frontal de la Alhambra al atardecer.",
  "lisboa-loft":
    "Loft diáfano en Alfama, entre callejones y patios, con balcón de hierro y vistas al Tajo desde la cama.",
  "porto-casa":
    "Casa señorial revestida de azulejos, con patio interior y suelos originales de madera, en pleno centro histórico.",
  "asturias-horreo":
    "Hórreo asturiano restaurado sobre pilares de piedra, con chimenea y prados alrededor. Los Picos de Europa al fondo.",
  "valencia-playa":
    "Apartamento luminoso a una manzana de la Malvarrosa, con terraza y bicicletas incluidas para recorrer el paseo marítimo.",
  "tenerife-domo":
    "Domo geodésico en Vilaflor, el pueblo más alto de España. Cielo limpio, jacuzzi exterior y noches de observación de estrellas.",
  "sevilla-patio":
    "Casa sevillana en torno a un patio con naranjos y fuente, fresca en verano y a un paseo del barrio de Santa Cruz.",
  "mallorca-finca":
    "Finca de piedra entre olivos con piscina infinita orientada a la Serra de Tramuntana. Silencio absoluto.",
  "lanzarote-jameo":
    "Casa excavada en roca volcánica con patio de lava y terraza sobre el valle. Arquitectura tradicional de Haría.",
};

export function getDescription(listing: Listing): string {
  return (
    DESCRIPTIONS[listing.id] ??
    `${listing.title} en ${listing.location}. Un espacio pensado para descansar, con todo lo necesario a mano.`
  );
}

/* -------------------------------------------------------------------------- */
/* Capacidad y distribución                                                    */
/* -------------------------------------------------------------------------- */

/** Capacidad máxima estimada: dos huéspedes por cama. */
export function getMaxGuests(listing: Listing): number {
  return listing.beds * 2;
}

/** Texto del módulo "¿Dónde dormirás?". */
export function getBedSummary(listing: Listing): string {
  if (listing.beds === 1) return "1 cama doble";
  if (listing.beds === 2) return "1 cama doble · 1 individual";
  return `${listing.beds - 1} camas dobles · 1 individual`;
}

/* -------------------------------------------------------------------------- */
/* Anfitrión                                                                   */
/* -------------------------------------------------------------------------- */

export function getHostStats(listing: Listing): HostStats {
  return {
    // El anfitrión acumula más reseñas que este alojamiento concreto.
    reviews: listing.reviewsCount + listing.host.yearsHosting * 23,
    rating: listing.rating,
    yearsHosting: listing.host.yearsHosting,
    responseRate: listing.host.isSuperhost ? 100 : 96,
    responseTime: listing.host.isSuperhost
      ? "en menos de una hora"
      : "en unas horas",
  };
}

/* -------------------------------------------------------------------------- */
/* Comodidades                                                                 */
/* -------------------------------------------------------------------------- */

const AMENITY_ICONS: { match: string; icon: IconName }[] = [
  { match: "wifi", icon: "wifi" },
  { match: "cocina", icon: "kitchen" },
  { match: "aire acondicionado", icon: "snowflake" },
  { match: "lavadora", icon: "washer" },
  { match: "parking", icon: "car" },
  { match: "mascotas", icon: "pet" },
  { match: "desayuno", icon: "coffee" },
  { match: "chimenea", icon: "flame" },
  { match: "barbacoa", icon: "flame" },
  { match: "piscina", icon: "pool" },
  { match: "jacuzzi", icon: "pool" },
  { match: "sauna", icon: "snowflake" },
  { match: "playa", icon: "waves" },
  { match: "montana", icon: "mountain" },
  { match: "volcan", icon: "mountain" },
  { match: "vistas", icon: "mountain" },
  { match: "estrellas", icon: "star" },
  { match: "jardin", icon: "tree" },
  { match: "olivar", icon: "tree" },
  { match: "patio", icon: "tree" },
  { match: "terraza", icon: "sun" },
  { match: "balcon", icon: "sun" },
  { match: "autocheck", icon: "clock" },
];

/** Devuelve el icono que corresponde a una comodidad por su texto. */
export function getAmenityIcon(amenity: string): IconName {
  const key = normalize(amenity);
  return AMENITY_ICONS.find((entry) => key.includes(entry.match))?.icon ?? "check";
}

/** Comodidades extra que se muestran al desplegar la lista completa. */
const EXTRA_AMENITIES = [
  "Televisión con Netflix",
  "Secador de pelo",
  "Ropa de cama y toallas",
  "Plancha",
  "Detector de humo",
  "Botiquín",
  "Agua caliente",
  "Espacio para trabajar",
  "Nevera y congelador",
  "Cafetera",
  "Menaje de cocina",
  "Perchas",
];

/** Lista completa: las comodidades del alojamiento más las genéricas. */
export function getAllAmenities(listing: Listing): string[] {
  return [...listing.amenities, ...EXTRA_AMENITIES];
}

/* -------------------------------------------------------------------------- */
/* Reseñas                                                                     */
/* -------------------------------------------------------------------------- */

const CATEGORY_LABELS = [
  "Limpieza",
  "Veracidad",
  "Llegada",
  "Comunicación",
  "Ubicación",
  "Calidad-precio",
];

/**
 * Puntuaciones por categoría alrededor de la nota global, con una
 * variación fija por posición para que no salgan todas idénticas.
 */
export function getCategoryRatings(listing: Listing): CategoryRating[] {
  const offsets = [0.02, -0.03, 0.05, 0.04, -0.01, -0.06];

  return CATEGORY_LABELS.map((label, i) => ({
    label,
    value: Math.min(5, Math.max(3.5, listing.rating + offsets[i])),
  }));
}

const REVIEW_POOL: Omit<Review, "id" | "avatarUrl">[] = [
  {
    author: "Marta",
    date: "agosto de 2026",
    rating: 5,
    text: "El sitio es exactamente como en las fotos, y las vistas todavía mejores. La comunicación fue rapidísima y nos dejaron indicaciones para llegar sin perdernos. Repetiríamos sin dudarlo.",
  },
  {
    author: "Guillaume",
    date: "julio de 2026",
    rating: 5,
    text: "Impecable de limpieza y muy bien equipado. Nos sorprendió lo tranquilo que es teniendo todo tan cerca. Nos costó irnos.",
  },
  {
    author: "Elena",
    date: "julio de 2026",
    rating: 4,
    text: "Muy buena estancia. El único pero es que la calle es algo ruidosa por la mañana, pero con las ventanas cerradas ni se nota.",
  },
  {
    author: "Tom",
    date: "junio de 2026",
    rating: 5,
    text: "Nos recibieron con una botella de vino de la zona y un mapa con recomendaciones que resultaron todas acertadas. Un diez.",
  },
  {
    author: "Sofía",
    date: "junio de 2026",
    rating: 5,
    text: "Perfecto para desconectar unos días. La cama es comodísima y el desayuno de la mañana siguiente valió el viaje.",
  },
  {
    author: "Andreas",
    date: "mayo de 2026",
    rating: 5,
    text: "Todo funcionó como estaba previsto: check-in autónomo, instrucciones claras y respuesta inmediata a las dos dudas que tuvimos.",
  },
];

/**
 * Reseñas del alojamiento. Se toman del pool desplazando el índice según
 * el id, para que dos fichas distintas no muestren los mismos comentarios.
 */
export function getReviews(listing: Listing, count = 4): Review[] {
  const offset = listing.id.length % REVIEW_POOL.length;

  return Array.from({ length: Math.min(count, REVIEW_POOL.length) }, (_, i) => {
    const index = (offset + i) % REVIEW_POOL.length;
    const base = REVIEW_POOL[index];

    return {
      ...base,
      id: `${listing.id}-review-${i}`,
      avatarUrl: `https://i.pravatar.cc/120?img=${((index + offset) % 70) + 1}`,
    };
  });
}
