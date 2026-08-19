"use client";

import Icon from "@/components/ui/Icon";

/**
 * Contador de huéspedes con botones − / +. El valor vive en
 * `ReservationCard`; aquí solo se aplican los límites mín/máx para que
 * los botones se deshabiliten al llegar a los extremos.
 */
export default function GuestCounter({
  value,
  onChange,
  min = 1,
  max,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max: number;
}) {
  const button =
    "border-border-base text-foreground hover:border-foreground grid size-9 place-items-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-(--border)";

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="leading-tight">
        <p className="text-foreground text-[15px] font-semibold">Huéspedes</p>
        <p className="text-muted text-[13px]">Máximo {max} en total</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label="Quitar un huésped"
          className={button}
        >
          <Icon name="minus" size={16} strokeWidth={2.2} />
        </button>

        <span
          aria-live="polite"
          className="text-foreground w-6 text-center text-[15px] font-semibold tabular-nums"
        >
          {value}
        </span>

        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label="Añadir un huésped"
          className={button}
        >
          <Icon name="plus" size={16} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
