"use client";

import Icon from "@/components/ui/Icon";
import type { SortOrder } from "@/lib/types";

const OPTIONS: { value: SortOrder; label: string }[] = [
  { value: "recomendados", label: "Recomendados" },
  { value: "precio-asc", label: "Precio: de menor a mayor" },
  { value: "precio-desc", label: "Precio: de mayor a menor" },
];

/**
 * Cabecera de resultados: número de alojamientos encontrados y control de
 * ordenación. Se usa un `<select>` nativo (accesible y sin dependencias)
 * envuelto para poder dibujar la flecha con nuestro propio icono.
 */
export default function ResultsToolbar({
  count,
  sort,
  onSortChange,
}: {
  count: number;
  sort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-4">
      <p aria-live="polite" className="text-foreground text-[15px] font-medium">
        {count === 1
          ? "1 alojamiento encontrado"
          : `${count} alojamientos encontrados`}
      </p>

      <div className="relative">
        <label htmlFor="orden" className="sr-only">
          Ordenar resultados
        </label>

        <select
          id="orden"
          value={sort}
          onChange={(event) => onSortChange(event.target.value as SortOrder)}
          className="border-border-base bg-surface text-foreground hover:border-foreground focus:border-foreground cursor-pointer appearance-none rounded-full border py-2 pr-9 pl-4 text-[13px] font-medium transition-colors outline-none"
        >
          {OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span className="text-muted pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
          <Icon name="chevron-down" size={14} strokeWidth={2.2} />
        </span>
      </div>
    </div>
  );
}
