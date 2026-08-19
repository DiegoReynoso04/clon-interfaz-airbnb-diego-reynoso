import type { Category, Listing, ListingSection } from "./types";

/** Construye una URL de Unsplash con los parámetros de recorte que usamos. */
const img = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const avatar = (n: number) => `https://i.pravatar.cc/160?img=${n}`;

/* -------------------------------------------------------------------------- */
/* Categorías                                                                  */
/* -------------------------------------------------------------------------- */

export const categories: Category[] = [
  { id: "todo", label: "Todo", icon: "compass" },
  { id: "alojamientos", label: "Alojamientos", icon: "house" },
  { id: "experiencias", label: "Experiencias", icon: "balloon" },
  { id: "servicios", label: "Servicios", icon: "bell" },
];

/* -------------------------------------------------------------------------- */
/* Alojamientos                                                                */
/* -------------------------------------------------------------------------- */

export const listings: Listing[] = [
  {
    id: "ronda-cueva",
    title: "Cueva en Ronda",
    location: "Ronda, Málaga",
    images: [
      img("1566073771259-6a8506099945"),
      img("1522708323590-d24dbb6b0267"),
      img("1560448204-e02f11c3d0e2"),
      img("1505693416388-ac5ce068fe85"),
    ],
    pricePerNight: 92,
    originalPricePerNight: 118,
    currency: "EUR",
    rating: 4.94,
    reviewsCount: 218,
    badge: "Favorito entre huéspedes",
    isGuestFavorite: true,
    host: {
      id: "h-lucia",
      name: "Lucía",
      avatarUrl: avatar(45),
      yearsHosting: 7,
      isSuperhost: true,
    },
    beds: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Wifi", "Cocina", "Aire acondicionado", "Vistas a la montaña"],
    availability: "12 – 17 de sep",
  },
  {
    id: "cadaques-mar",
    title: "Casa frente al mar",
    location: "Cadaqués, Girona",
    images: [
      img("1512917774080-9991f1c4c750"),
      img("1600585154340-be6161a56a0c"),
      img("1600566753086-00f18fb6b3ea"),
    ],
    pricePerNight: 214,
    currency: "EUR",
    rating: 4.87,
    reviewsCount: 96,
    isGuestFavorite: false,
    host: {
      id: "h-marc",
      name: "Marc",
      avatarUrl: avatar(12),
      yearsHosting: 4,
      isSuperhost: true,
    },
    beds: 4,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Wifi", "Piscina", "Acceso a la playa", "Parking gratuito"],
    availability: "3 – 8 de oct",
  },
  {
    id: "pirineos-cabana",
    title: "Cabaña en los Pirineos",
    location: "Bielsa, Huesca",
    images: [
      img("1470770841072-f978cf4d019e"),
      img("1499793983690-e29da59ef1c2"),
      img("1540518614846-7eded433c457"),
    ],
    pricePerNight: 138,
    originalPricePerNight: 165,
    currency: "EUR",
    rating: 4.91,
    reviewsCount: 341,
    badge: "Favorito entre huéspedes",
    isGuestFavorite: true,
    host: {
      id: "h-ander",
      name: "Ander",
      avatarUrl: avatar(33),
      yearsHosting: 9,
      isSuperhost: true,
    },
    beds: 3,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Chimenea", "Wifi", "Sauna", "Admite mascotas"],
    availability: "21 – 26 de sep",
  },
  {
    id: "madrid-atico",
    title: "Ático en Malasaña",
    location: "Madrid, Comunidad de Madrid",
    images: [
      img("1502672260266-1c1ef2d93688"),
      img("1493809842364-78817add7ffb"),
      img("1586023492125-27b2c045efd7"),
    ],
    pricePerNight: 156,
    currency: "EUR",
    rating: 4.82,
    reviewsCount: 512,
    isGuestFavorite: true,
    host: {
      id: "h-paula",
      name: "Paula",
      avatarUrl: avatar(20),
      yearsHosting: 6,
      isSuperhost: false,
    },
    beds: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Wifi", "Lavadora", "Terraza", "Cocina equipada"],
    availability: "1 – 5 de nov",
  },
  {
    id: "ibiza-villa",
    title: "Villa con piscina",
    location: "Santa Eulalia, Ibiza",
    images: [
      img("1582719478250-c89cae4dc85b"),
      img("1600596542815-ffad4c1539a9"),
      img("1600607687939-ce8a6c25118c"),
      img("1571003123894-1f0594d2b5d9"),
    ],
    pricePerNight: 486,
    originalPricePerNight: 590,
    currency: "EUR",
    rating: 4.96,
    reviewsCount: 74,
    badge: "Favorito entre huéspedes",
    isGuestFavorite: true,
    host: {
      id: "h-nadia",
      name: "Nadia",
      avatarUrl: avatar(26),
      yearsHosting: 11,
      isSuperhost: true,
    },
    beds: 6,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Piscina privada", "Wifi", "Aire acondicionado", "Barbacoa"],
    availability: "9 – 14 de sep",
  },
  {
    id: "granada-carmen",
    title: "Carmen con vistas a la Alhambra",
    location: "Granada, Andalucía",
    images: [
      img("1554995207-c18c203602cb"),
      img("1600047509807-ba8f99d2cdde"),
      img("1600585154526-990dced4db0d"),
    ],
    pricePerNight: 178,
    currency: "EUR",
    rating: 4.89,
    reviewsCount: 163,
    isGuestFavorite: false,
    host: {
      id: "h-jose",
      name: "José",
      avatarUrl: avatar(59),
      yearsHosting: 3,
      isSuperhost: false,
    },
    beds: 3,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Wifi", "Jardín", "Desayuno incluido", "Vistas"],
    availability: "18 – 23 de oct",
  },
  {
    id: "lisboa-loft",
    title: "Loft en Alfama",
    location: "Lisboa, Portugal",
    images: [
      img("1560185007-cde436f6a4d0"),
      img("1502005229762-cf1b2da7c5d6"),
      img("1520250497591-112f2f40a3f4"),
    ],
    pricePerNight: 121,
    currency: "EUR",
    rating: 4.78,
    reviewsCount: 289,
    isGuestFavorite: false,
    host: {
      id: "h-ines",
      name: "Inês",
      avatarUrl: avatar(48),
      yearsHosting: 5,
      isSuperhost: true,
    },
    beds: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Wifi", "Lavadora", "Balcón", "Autocheck-in"],
    availability: "25 – 30 de sep",
  },
  {
    id: "porto-casa",
    title: "Casa de azulejos",
    location: "Oporto, Portugal",
    images: [
      img("1518780664697-55e3ad937233"),
      img("1600566753151-384129cf4e3e"),
      img("1611892440504-42a792e24d32"),
    ],
    pricePerNight: 145,
    originalPricePerNight: 172,
    currency: "EUR",
    rating: 4.85,
    reviewsCount: 131,
    isGuestFavorite: true,
    host: {
      id: "h-rui",
      name: "Rui",
      avatarUrl: avatar(15),
      yearsHosting: 8,
      isSuperhost: true,
    },
    beds: 4,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Wifi", "Cocina", "Parking gratuito", "Admite mascotas"],
    availability: "6 – 11 de nov",
  },
  {
    id: "asturias-hórreo",
    title: "Hórreo restaurado",
    location: "Cangas de Onís, Asturias",
    images: [
      img("1449824913935-59a10b8d2000"),
      img("1571896349842-33c89424de2d"),
      img("1506905925346-21bda4d32df4"),
    ],
    pricePerNight: 108,
    currency: "EUR",
    rating: 4.92,
    reviewsCount: 202,
    badge: "Favorito entre huéspedes",
    isGuestFavorite: true,
    host: {
      id: "h-covadonga",
      name: "Covadonga",
      avatarUrl: avatar(9),
      yearsHosting: 12,
      isSuperhost: true,
    },
    beds: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Chimenea", "Wifi", "Vistas a la montaña", "Desayuno"],
    availability: "14 – 19 de oct",
  },
  {
    id: "valencia-playa",
    title: "Apartamento en la Malvarrosa",
    location: "Valencia, Comunidad Valenciana",
    images: [
      img("1502672023488-70e25813eb80"),
      img("1560448075-bb4caa6c3d38"),
      img("1522771739844-6a9f6d5f14af"),
    ],
    pricePerNight: 96,
    currency: "EUR",
    rating: 4.71,
    reviewsCount: 405,
    isGuestFavorite: false,
    host: {
      id: "h-sergio",
      name: "Sergio",
      avatarUrl: avatar(52),
      yearsHosting: 2,
      isSuperhost: false,
    },
    beds: 3,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Wifi", "Acceso a la playa", "Aire acondicionado", "Lavadora"],
    availability: "2 – 7 de sep",
  },
  {
    id: "tenerife-domo",
    title: "Domo geodésico",
    location: "Vilaflor, Tenerife",
    images: [
      img("1517824806704-9040b037703b"),
      img("1533105079780-92b9be482077"),
      img("1523217582562-09d0def993a6"),
    ],
    pricePerNight: 167,
    originalPricePerNight: 199,
    currency: "EUR",
    rating: 4.97,
    reviewsCount: 88,
    badge: "Favorito entre huéspedes",
    isGuestFavorite: true,
    host: {
      id: "h-alba",
      name: "Alba",
      avatarUrl: avatar(31),
      yearsHosting: 5,
      isSuperhost: true,
    },
    beds: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Observación de estrellas", "Wifi", "Jacuzzi", "Vistas"],
    availability: "28 de sep – 3 de oct",
  },
  {
    id: "sevilla-patio",
    title: "Casa con patio andaluz",
    location: "Sevilla, Andalucía",
    images: [
      img("1600210492486-724fe5c67fb0"),
      img("1600607688969-a5bfcd646154"),
      img("1600573472550-8090b5e0745e"),
    ],
    pricePerNight: 134,
    currency: "EUR",
    rating: 4.88,
    reviewsCount: 176,
    isGuestFavorite: true,
    host: {
      id: "h-rocio",
      name: "Rocío",
      avatarUrl: avatar(24),
      yearsHosting: 6,
      isSuperhost: true,
    },
    beds: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Patio", "Wifi", "Aire acondicionado", "Cocina"],
    availability: "11 – 16 de nov",
  },
];

/** Índice por id para búsquedas rápidas. */
export const listingsById: Record<string, Listing> = Object.fromEntries(
  listings.map((l) => [l.id, l]),
);

export const getListing = (id: string): Listing | undefined => listingsById[id];

/* -------------------------------------------------------------------------- */
/* Secciones de la Home                                                        */
/* -------------------------------------------------------------------------- */

export const homeSections: ListingSection[] = [
  {
    id: "populares-malaga",
    title: "Populares cerca de Málaga",
    href: "/search?location=Malaga",
    listingIds: ["ronda-cueva", "granada-carmen", "sevilla-patio", "ibiza-villa"],
  },
  {
    id: "escapadas-fin-semana",
    title: "Disponibles este fin de semana",
    href: "/search?when=weekend",
    listingIds: [
      "valencia-playa",
      "madrid-atico",
      "lisboa-loft",
      "cadaques-mar",
    ],
  },
  {
    id: "naturaleza",
    title: "Alojamientos en plena naturaleza",
    href: "/search?category=naturaleza",
    listingIds: [
      "pirineos-cabana",
      "asturias-hórreo",
      "tenerife-domo",
      "porto-casa",
    ],
  },
];

/** Devuelve los alojamientos de una sección, en orden. */
export function getSectionListings(section: ListingSection): Listing[] {
  return section.listingIds
    .map((id) => listingsById[id])
    .filter((l): l is Listing => Boolean(l));
}
