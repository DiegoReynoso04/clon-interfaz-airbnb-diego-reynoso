"use client";

import CategoryFilterBar from "./CategoryFilterBar";
import SearchBar from "./SearchBar";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { categories } from "@/lib/data";
import type { CategoryId } from "@/lib/types";

/**
 * Cabecera sticky de la Home: buscador controlado + fila de categorías.
 * Es puramente presentacional; todo el estado llega por props.
 */
export default function HomeHeader({
  query,
  onQueryChange,
  onQuerySubmit,
  category,
  onCategoryChange,
  resultsCount,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  onQuerySubmit?: (value: string) => void;
  category: CategoryId;
  onCategoryChange: (id: CategoryId) => void;
  resultsCount?: number;
}) {
  return (
    <header className="border-border-soft bg-background sticky top-0 z-40 border-b">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 px-5 pt-3 pb-3">
          <div className="min-w-0 flex-1">
            <SearchBar
              value={query}
              onChange={onQueryChange}
              onSubmit={onQuerySubmit}
              resultsCount={resultsCount}
            />
          </div>
          <ThemeToggle />
        </div>
        <CategoryFilterBar
          categories={categories}
          selected={category}
          onSelect={onCategoryChange}
        />
      </div>
    </header>
  );
}
