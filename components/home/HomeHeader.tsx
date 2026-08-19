"use client";

import CategoryFilterBar from "./CategoryFilterBar";
import SearchBar from "./SearchBar";
import { categories } from "@/lib/data";
import type { CategoryId } from "@/lib/types";

/**
 * Cabecera sticky de la Home: buscador controlado + fila de categorías.
 * Es puramente presentacional; todo el estado llega por props.
 */
export default function HomeHeader({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  resultsCount,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  category: CategoryId;
  onCategoryChange: (id: CategoryId) => void;
  resultsCount?: number;
}) {
  return (
    <header className="border-border-soft bg-background sticky top-0 z-40 border-b">
      <div className="mx-auto max-w-7xl">
        <div className="px-5 pt-3 pb-3">
          <SearchBar
            value={query}
            onChange={onQueryChange}
            resultsCount={resultsCount}
          />
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
