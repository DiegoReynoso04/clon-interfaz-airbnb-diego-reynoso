import Link from "next/link";
import Icon from "@/components/ui/Icon";
import ThemeToggle from "@/components/ui/ThemeToggle";
import type { SearchSummary } from "@/lib/types";

/**
 * Cabecera fija del catálogo: botón de volver, resumen de la búsqueda
 * activa (destino · fechas · viajeros) y acceso a los filtros avanzados.
 */
export default function SearchHeader({
  summary,
  activeFiltersCount = 0,
  onOpenFilters,
}: {
  summary: SearchSummary;
  /** Nº de chips activos, se muestra como contador sobre el botón. */
  activeFiltersCount?: number;
  onOpenFilters?: () => void;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <Link
        href="/"
        aria-label="Volver a la página de inicio"
        className="border-border-base text-foreground hover:bg-surface-muted grid size-10 shrink-0 place-items-center rounded-full border transition-colors"
      >
        <Icon name="chevron-left" size={18} strokeWidth={2.2} />
      </Link>

      <div className="min-w-0 flex-1 leading-tight">
        <p className="text-foreground truncate text-[15px] font-semibold">
          {summary.destination}
        </p>
        <p className="text-muted truncate text-[13px]">
          {summary.dates} · {summary.guests}
        </p>
      </div>

      <ThemeToggle />

      <button
        type="button"
        onClick={onOpenFilters}
        aria-label={
          activeFiltersCount > 0
            ? `Filtros y ajustes, ${activeFiltersCount} activos`
            : "Filtros y ajustes"
        }
        className="border-border-base text-foreground hover:bg-surface-muted relative grid size-10 shrink-0 place-items-center rounded-full border transition-colors"
      >
        <Icon name="sliders" size={18} strokeWidth={1.9} />

        {activeFiltersCount > 0 && (
          <span className="bg-rausch absolute -top-1 -right-1 grid size-[18px] place-items-center rounded-full text-[10px] font-bold text-white">
            {activeFiltersCount}
          </span>
        )}
      </button>
    </div>
  );
}
