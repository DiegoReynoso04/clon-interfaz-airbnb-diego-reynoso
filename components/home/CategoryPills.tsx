"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/format";
import type { Category, CategoryId } from "@/lib/types";

/**
 * Slider horizontal de categorías con estilo de píldoras seleccionables
 * ("Todo", "Alojamientos", "Experiencias"...). Scroll con snap y sin
 * scrollbar visible, como en la app móvil.
 */
export default function CategoryPills({
  categories,
  defaultSelected = "todo",
  onChange,
}: {
  categories: Category[];
  defaultSelected?: CategoryId;
  onChange?: (id: CategoryId) => void;
}) {
  const [selected, setSelected] = useState<CategoryId>(defaultSelected);

  const handleSelect = (id: CategoryId) => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <div
      role="tablist"
      aria-label="Categorías"
      className="scrollbar-none flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 py-3"
    >
      {categories.map((category) => {
        const isSelected = category.id === selected;

        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => handleSelect(category.id)}
            className={cn(
              "flex shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors",
              isSelected
                ? "border-foreground bg-foreground text-background"
                : "border-border-base text-muted hover:border-foreground hover:text-foreground",
            )}
          >
            <Icon name={category.icon} size={18} strokeWidth={1.8} />
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
