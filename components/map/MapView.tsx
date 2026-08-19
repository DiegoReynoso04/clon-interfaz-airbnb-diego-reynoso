"use client";

import dynamic from "next/dynamic";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/format";
import type { Listing } from "@/lib/types";

/**
 * Envoltorio del mapa. Leaflet accede a `window` en cuanto se importa, así
 * que el componente real se carga con `ssr: false` y solo en el navegador.
 * Mientras llega el bundle se muestra un recuadro con el mismo tamaño,
 * para que no haya salto de layout.
 */
const ListingsMap = dynamic(() => import("./ListingsMap"), {
  ssr: false,
  loading: () => (
    <div className="border-border-soft bg-surface-muted text-muted flex size-full animate-pulse flex-col items-center justify-center gap-1 rounded-2xl border">
      <Icon name="map" size={22} strokeWidth={1.6} aria-hidden="true" />
      <p className="text-sm font-medium">Cargando el mapa…</p>
    </div>
  ),
});

export default function MapView({
  listings,
  mode = "pins",
  className,
}: {
  listings: Listing[];
  mode?: "pins" | "area";
  className?: string;
}) {
  if (listings.length === 0) {
    return (
      <div
        className={cn(
          "border-border-soft bg-surface-muted text-muted flex flex-col items-center justify-center gap-1 rounded-2xl border",
          className,
        )}
      >
        <Icon name="map" size={22} strokeWidth={1.6} aria-hidden="true" />
        <p className="text-sm font-medium">Sin alojamientos que mostrar</p>
      </div>
    );
  }

  return <ListingsMap listings={listings} mode={mode} className={className} />;
}
