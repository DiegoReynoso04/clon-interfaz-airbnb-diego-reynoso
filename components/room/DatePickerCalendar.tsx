"use client";

import { DayPicker, type DateRange } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/style.css";
import { formatShortDate, nightsBetween } from "@/lib/format";

/**
 * Calendario de selección de entrada y salida, construido sobre
 * `react-day-picker` en modo rango y estilado con clases de Tailwind
 * mediante su prop `classNames` (no usamos su hoja de estilos por
 * defecto más que como base de layout).
 *
 * El rango seleccionado vive en `ReservationCard`, que es quien calcula
 * las noches y el precio total.
 */
export default function DatePickerCalendar({
  range,
  onRangeChange,
  numberOfMonths = 1,
}: {
  range: DateRange | undefined;
  onRangeChange: (range: DateRange | undefined) => void;
  numberOfMonths?: number;
}) {
  const nights = nightsBetween(range?.from, range?.to);

  return (
    <div className="space-y-3">
      <div>
        <p className="text-foreground text-[17px] font-semibold">
          {nights > 0
            ? `${nights} ${nights === 1 ? "noche" : "noches"}`
            : "Selecciona las fechas"}
        </p>
        <p className="text-muted text-[14px]">
          {range?.from
            ? `${formatShortDate(range.from)}${range.to ? ` – ${formatShortDate(range.to)}` : " – …"}`
            : "Añade tus fechas para ver el precio exacto"}
        </p>
      </div>

      <DayPicker
        mode="range"
        locale={es}
        selected={range}
        onSelect={onRangeChange}
        numberOfMonths={numberOfMonths}
        showOutsideDays={false}
        // Bloquea el pasado: no se puede reservar hacia atrás.
        disabled={{ before: new Date() }}
        classNames={{
          root: "relative text-foreground",
          months: "relative flex flex-col gap-4 sm:flex-row",
          // `relative` ancla la navegación absoluta al mes, no a la tarjeta.
          month: "relative space-y-3",
          month_caption: "flex h-9 items-center justify-center",
          caption_label: "text-[15px] font-semibold capitalize",
          nav: "flex items-center justify-between absolute inset-x-0 top-0 h-9 px-1",
          button_previous:
            "grid size-8 place-items-center rounded-full hover:bg-surface-muted transition-colors disabled:opacity-30",
          button_next:
            "grid size-8 place-items-center rounded-full hover:bg-surface-muted transition-colors disabled:opacity-30",
          chevron: "fill-current size-4",
          month_grid: "w-full border-collapse",
          weekdays: "flex",
          weekday:
            "text-muted flex-1 text-[12px] font-medium uppercase pb-1 select-none",
          week: "flex w-full",
          day: "flex-1 p-0 text-center",
          day_button:
            "mx-auto grid size-9 place-items-center rounded-full text-[14px] transition-colors hover:bg-surface-muted",
          today: "font-bold",
          selected: "bg-surface-muted",
          range_start:
            "[&>button]:bg-foreground [&>button]:text-background [&>button]:font-semibold rounded-l-full",
          range_end:
            "[&>button]:bg-foreground [&>button]:text-background [&>button]:font-semibold rounded-r-full",
          range_middle: "[&>button]:hover:bg-transparent",
          disabled: "text-subtle line-through opacity-50",
          outside: "opacity-0",
        }}
        // Anula las variables de tamaño de la hoja base para que encaje.
        style={
          {
            "--rdp-accent-color": "var(--foreground)",
            "--rdp-day-width": "100%",
            "--rdp-day-height": "2.25rem",
          } as React.CSSProperties
        }
      />
    </div>
  );
}
