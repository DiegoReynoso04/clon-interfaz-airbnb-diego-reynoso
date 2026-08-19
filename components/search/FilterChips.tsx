"use client";

import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/format";
import type { QuickFilter } from "@/lib/types";

/**
 * Slider horizontal de filtros de conveniencia. Es multiselección: cada
 * chip alterna de forma independiente y se acumulan (AND) sobre la lista.
 * El estado vive en `SearchResultsView`.
 */
export default function FilterChips({
  filters,
  active,
  onToggle,
  onClear,
}: {
  filters: QuickFilter[];
  /** Ids de los filtros activos. */
  active: string[];
  onToggle: (id: string) => void;
  onClear: () => void;
}) {
  return (
    <div
      role="group"
      aria-label="Filtros rápidos"
      className="scrollbar-none flex gap-2 overflow-x-auto px-4 pb-3"
    >
      {active.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="border-border-base text-muted hover:border-foreground hover:text-foreground flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[13px] font-medium whitespace-nowrap transition-colors"
        >
          <Icon name="close" size={14} strokeWidth={2.2} />
          Quitar
        </button>
      )}

      {filters.map((filter) => {
        const isActive = active.includes(filter.id);

        return (
          <button
            key={filter.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onToggle(filter.id)}
            className={cn(
              "shrink-0 rounded-full border px-3.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors",
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-border-base text-foreground hover:border-foreground hover:bg-surface-muted",
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
