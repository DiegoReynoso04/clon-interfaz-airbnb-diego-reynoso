import MapView from "@/components/map/MapView";
import type { Listing } from "@/lib/types";

/**
 * Ubicación del alojamiento sobre un mapa real de OpenStreetMap. Se pinta
 * un círculo con la zona aproximada en lugar de un pin exacto: igual que
 * Airbnb, la dirección concreta solo se revela al confirmar la reserva.
 */
export default function LocationMapPreview({ listing }: { listing: Listing }) {
  return (
    <section className="space-y-4">
      <h2 className="text-foreground text-[19px] font-semibold">
        Dónde vas a estar
      </h2>

      <MapView
        listings={[listing]}
        mode="area"
        className="h-64 w-full sm:h-80"
      />

      <div className="space-y-1">
        <p className="text-foreground text-[15px] font-semibold">
          {listing.location}
        </p>
        <p className="text-muted text-[15px]">
          Te mostramos la ubicación exacta cuando confirmes la reserva.
        </p>
      </div>
    </section>
  );
}
