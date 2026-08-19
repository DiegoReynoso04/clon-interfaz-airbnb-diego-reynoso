"use client";

import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/format";
import type { Category, CategoryId } from "@/lib/types";

/**
 * Fila horizontal de categorías bajo el buscador (icono + etiqueta).
 * Igual que en Airbnb: la categoría activa se resalta con opacidad plena
 * y un subrayado inferior. El estado vive en `ExploreView`.
 */
export default function CategoryFilterBar({
  categories,
  selected,
  onSelect,
}: {
  categories: Category[];
  selected: CategoryId;
  onSelect: (id: CategoryId) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Categorías de alojamiento"
      className="scrollbar-none flex gap-7 overflow-x-auto px-5"
    >
      {categories.map((category) => {
        const isActive = category.id === selected;

        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(category.id)}
            className={cn(
              "group flex shrink-0 flex-col items-center gap-1.5 border-b-2 pt-1 pb-2.5 transition-colors",
              isActive
                ? "border-foreground text-foreground"
                : "text-muted hover:text-foreground border-transparent hover:border-border-base",
            )}
          >
            <Icon
              name={category.icon}
              size={24}
              strokeWidth={isActive ? 2 : 1.6}
            />
            <span
              className={cn(
                "text-xs whitespace-nowrap",
                isActive ? "font-semibold" : "font-medium",
              )}
            >
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
