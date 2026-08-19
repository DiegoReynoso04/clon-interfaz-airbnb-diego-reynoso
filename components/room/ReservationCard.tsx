"use client";

import type { DateRange } from "react-day-picker";
import DatePickerCalendar from "./DatePickerCalendar";
import GuestCounter from "./GuestCounter";
import { formatPrice, nightsBetween } from "@/lib/format";
import type { Listing } from "@/lib/types";

/** Comisión de servicio simulada sobre el subtotal. */
const SERVICE_FEE_RATE = 0.12;

/**
 * Tarjeta de reserva: calendario de entrada/salida, contador de huéspedes,
 * desglose del precio según las noches elegidas y CTA.
 *
 * No guarda estado propio: el rango de fechas y el nº de huéspedes viven
 * en `RoomDetailView`, para que la barra fija inferior muestre el mismo
 * total que esta tarjeta.
 */
export default function ReservationCard({
  listing,
  range,
  onRangeChange,
  guests,
  onGuestsChange,
  maxGuests,
}: {
  listing: Listing;
  range: DateRange | undefined;
  onRangeChange: (range: DateRange | undefined) => void;
  guests: number;
  onGuestsChange: (guests: number) => void;
  maxGuests: number;
}) {
  const nights = nightsBetween(range?.from, range?.to);
  const subtotal = listing.pricePerNight * nights;
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);
  const total = subtotal + serviceFee;

  const { originalPricePerNight: was, pricePerNight: now } = listing;
  const hasDiscount = typeof was === "number" && was > now;

  return (
    <div className="border-border-soft bg-surface space-y-5 rounded-2xl border p-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <p className="text-foreground flex flex-wrap items-baseline gap-x-2">
        {hasDiscount && (
          <span className="text-muted text-[15px] line-through">
            {formatPrice(was, listing.currency)}
          </span>
        )}
        <span className="text-[20px] font-semibold">
          {formatPrice(now, listing.currency)}
        </span>
        <span className="text-[15px]">por noche</span>
      </p>

      <DatePickerCalendar range={range} onRangeChange={onRangeChange} />

      <div className="border-border-soft border-t pt-4">
        <GuestCounter
          value={guests}
          onChange={onGuestsChange}
          max={maxGuests}
        />
      </div>

      <button
        type="button"
        disabled={nights === 0}
        className="bg-rausch hover:bg-rausch-dark w-full rounded-xl py-3.5 text-[16px] font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-45"
      >
        Reservar
      </button>

      {nights === 0 ? (
        <p className="text-muted text-center text-[13px]">
          Elige las fechas para ver el precio total
        </p>
      ) : (
        <dl className="text-foreground space-y-2 text-[15px]">
          <div className="flex justify-between gap-4">
            <dt className="text-muted underline underline-offset-2">
              {formatPrice(now, listing.currency)} × {nights}{" "}
              {nights === 1 ? "noche" : "noches"}
            </dt>
            <dd>{formatPrice(subtotal, listing.currency)}</dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-muted underline underline-offset-2">
              Comisión de servicio
            </dt>
            <dd>{formatPrice(serviceFee, listing.currency)}</dd>
          </div>

          <div className="border-border-soft flex justify-between gap-4 border-t pt-3 font-semibold">
            <dt>Total</dt>
            <dd>{formatPrice(total, listing.currency)}</dd>
          </div>
        </dl>
      )}
    </div>
  );
}
