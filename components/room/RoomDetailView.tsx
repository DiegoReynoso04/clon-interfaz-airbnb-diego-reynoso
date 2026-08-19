"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import AmenitiesList from "./AmenitiesList";
import Breadcrumb from "./Breadcrumb";
import DetailHeaderNav from "./DetailHeaderNav";
import HostCardFull from "./HostCardFull";
import HostCardMini from "./HostCardMini";
import ImageGalleryMobile from "./ImageGalleryMobile";
import LocationMapPreview from "./LocationMapPreview";
import ReservationCard from "./ReservationCard";
import ReviewsOverview from "./ReviewsOverview";
import RoomDetailSkeleton from "./RoomDetailSkeleton";
import RoomDistribution from "./RoomDistribution";
import RoomHeaderInfo from "./RoomHeaderInfo";
import StickyReservationBar from "./StickyReservationBar";
import { FAKE_FETCH_DELAY, getListing } from "@/lib/data";
import {
  getCategoryRatings,
  getDescription,
  getHostStats,
  getMaxGuests,
  getReviews,
} from "@/lib/room-detail";
import type { Listing } from "@/lib/types";

/**
 * Ficha de habitación. Concentra el estado de la vista:
 *
 * - `listing` / `isLoading`: se cargan en un `useEffect` a partir del `id`
 *   de la URL, con un `setTimeout` que simula la latencia de una API.
 * - `range`: fechas de entrada y salida elegidas en el calendario.
 * - `guests`: nº de huéspedes, acotado entre 1 y la capacidad máxima.
 *
 * El rango y los huéspedes viven aquí, no en la tarjeta de reserva, para
 * que la barra fija inferior muestre siempre el mismo total.
 */
export default function RoomDetailView({ id }: { id: string }) {
  const [listing, setListing] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);

  const reservationRef = useRef<HTMLDivElement>(null);

  // Carga simulada del alojamiento a partir del id de la URL.
  // La página monta este componente con `key={id}`, así que al cambiar de
  // habitación se remonta y el estado arranca limpio: no hace falta
  // resetearlo aquí (y llamar a setState en el cuerpo del efecto provoca
  // renders en cascada que el linter de React 19 marca como error).
  useEffect(() => {
    const timer = setTimeout(() => {
      setListing(getListing(id) ?? null);
      setIsLoading(false);
    }, FAKE_FETCH_DELAY);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) return <RoomDetailSkeleton />;

  if (!listing) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
        <h1 className="text-foreground text-xl font-semibold">
          No encontramos este alojamiento
        </h1>
        <p className="text-muted max-w-xs text-sm">
          Puede que el enlace esté mal o que el anfitrión lo haya retirado.
        </p>
        <Link
          href="/"
          className="border-border-base text-foreground hover:bg-surface-muted mt-2 rounded-xl border px-5 py-2.5 text-[15px] font-semibold transition-colors"
        >
          Volver al inicio
        </Link>
      </main>
    );
  }

  const maxGuests = getMaxGuests(listing);
  const hostStats = getHostStats(listing);

  return (
    <main className="flex-1 pb-28 lg:pb-12">
      <div className="mx-auto max-w-7xl lg:px-6 lg:pt-4">
        <div className="relative">
          <DetailHeaderNav
            listingTitle={listing.title}
            defaultFavorite={listing.isGuestFavorite}
          />
          <ImageGalleryMobile
            images={listing.images}
            alt={`${listing.title} en ${listing.location}`}
          />
        </div>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-12 lg:pt-8">
          {/* Columna de contenido */}
          <div className="space-y-8 px-5 pt-5 lg:px-0 lg:pt-0">
            <div className="space-y-3">
              <Breadcrumb location={listing.location} />
              <RoomHeaderInfo listing={listing} />
            </div>

            <HostCardMini host={listing.host} />

            <section>
              <p className="text-foreground text-[15px] leading-relaxed">
                {getDescription(listing)}
              </p>
            </section>

            <RoomDistribution listing={listing} />

            <AmenitiesList listing={listing} />

            {/* En móvil la reserva va aquí, en el flujo del contenido. */}
            <div ref={reservationRef} className="scroll-mt-6 lg:hidden">
              <ReservationCard
                listing={listing}
                range={range}
                onRangeChange={setRange}
                guests={guests}
                onGuestsChange={setGuests}
                maxGuests={maxGuests}
              />
            </div>

            <LocationMapPreview listing={listing} />

            <ReviewsOverview
              listing={listing}
              categories={getCategoryRatings(listing)}
              reviews={getReviews(listing)}
            />

            <HostCardFull host={listing.host} stats={hostStats} />
          </div>

          {/* Columna fija de reserva en escritorio */}
          <aside className="hidden lg:sticky lg:top-6 lg:block">
            <ReservationCard
              listing={listing}
              range={range}
              onRangeChange={setRange}
              guests={guests}
              onGuestsChange={setGuests}
              maxGuests={maxGuests}
            />
          </aside>
        </div>
      </div>

      <StickyReservationBar
        listing={listing}
        range={range}
        onPickDates={() =>
          reservationRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      />
    </main>
  );
}
