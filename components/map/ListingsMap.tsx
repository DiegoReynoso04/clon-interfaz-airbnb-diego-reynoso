"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import { cn, formatPrice, formatRating } from "@/lib/format";
import type { Listing } from "@/lib/types";

/** Radio (m) del círculo que marca la zona aproximada en la ficha. */
const AREA_RADIUS = 700;

/**
 * Mapa interactivo con OpenStreetMap. Se usa en dos modos:
 *
 * - `pins`: un pin con el precio por cada alojamiento (catálogo).
 * - `area`: un círculo sobre la zona aproximada, sin punto exacto (ficha).
 *
 * Este componente toca `window` a través de Leaflet, así que siempre se
 * carga desde `MapView`, que lo importa dinámicamente con `ssr: false`.
 */

/**
 * Pin con forma de píldora y el precio dentro, al estilo de Airbnb.
 *
 * El tamaño se estima a partir de la longitud del texto: Leaflet necesita
 * un `iconSize` real para dar al marcador una caja pulsable y anclarlo
 * centrado sobre la coordenada. Con [0, 0] el badge se veía pero no
 * recibía clics.
 */
function priceIcon(label: string) {
  const width = Math.max(46, label.length * 8 + 20);
  const height = 26;

  return L.divIcon({
    className: "airbnb-price-pin",
    html: `<span class="grid size-full place-items-center whitespace-nowrap rounded-full border border-neutral-300 bg-white text-[12px] font-semibold text-neutral-900 shadow-md">${label}</span>`,
    iconSize: [width, height],
    iconAnchor: [width / 2, height / 2],
    popupAnchor: [0, -height / 2],
  });
}

/** Ajusta el encuadre para que quepan todos los puntos. */
function FitToPoints({ listings }: { listings: Listing[] }) {
  const map = useMap();

  useEffect(() => {
    if (listings.length === 0) return;

    if (listings.length === 1) {
      const { lat, lng } = listings[0].coordinates;
      map.setView([lat, lng], 13);
      return;
    }

    const bounds = L.latLngBounds(
      listings.map((l) => [l.coordinates.lat, l.coordinates.lng]),
    );
    map.fitBounds(bounds, { padding: [48, 48] });
  }, [map, listings]);

  return null;
}

export default function ListingsMap({
  listings,
  mode = "pins",
  className,
}: {
  listings: Listing[];
  mode?: "pins" | "area";
  className?: string;
}) {
  // Centro inicial: el primer alojamiento, o el centro de España si no hay.
  const center = useMemo<[number, number]>(() => {
    const first = listings[0];
    return first
      ? [first.coordinates.lat, first.coordinates.lng]
      : [40.4168, -3.7038];
  }, [listings]);

  return (
    <div
      className={cn(
        // `isolate` crea un contexto de apilamiento propio: sin esto los
        // paneles de Leaflet (z-index 400+) taparían la cabecera fija.
        "border-border-soft bg-surface-muted isolate overflow-hidden rounded-2xl border",
        className,
      )}
    >
      <MapContainer
        center={center}
        zoom={mode === "area" ? 13 : 6}
        scrollWheelZoom={false}
        className="size-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        <FitToPoints listings={listings} />

        {mode === "area"
          ? listings.map((listing) => (
              <Circle
                key={listing.id}
                center={[listing.coordinates.lat, listing.coordinates.lng]}
                radius={AREA_RADIUS}
                pathOptions={{
                  color: "#ff385c",
                  weight: 2,
                  fillColor: "#ff385c",
                  fillOpacity: 0.15,
                }}
              />
            ))
          : listings.map((listing) => (
              <Marker
                key={listing.id}
                position={[listing.coordinates.lat, listing.coordinates.lng]}
                icon={priceIcon(
                  formatPrice(listing.pricePerNight, listing.currency),
                )}
                title={listing.title}
              >
                <Popup>
                  <Link
                    href={`/rooms/${listing.id}`}
                    className="block max-w-[180px] no-underline"
                  >
                    <span className="block text-[14px] font-semibold text-neutral-900">
                      {listing.title}
                    </span>
                    <span className="block text-[13px] text-neutral-600">
                      {listing.location}
                    </span>
                    <span className="block pt-1 text-[13px] text-neutral-900">
                      <strong>
                        {formatPrice(listing.pricePerNight, listing.currency)}
                      </strong>{" "}
                      por noche · ★ {formatRating(listing.rating)}
                    </span>
                  </Link>
                </Popup>
              </Marker>
            ))}
      </MapContainer>
    </div>
  );
}
