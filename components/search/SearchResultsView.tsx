"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import FilterChips from "./FilterChips";
import MapFloatingButton from "./MapFloatingButton";
import ResultsToolbar from "./ResultsToolbar";
import MapView from "@/components/map/MapView";
import SearchHeader from "./SearchHeader";
import ListingCardDetailed from "@/components/listing/ListingCardDetailed";
import ListingCardSkeleton from "@/components/listing/ListingCardSkeleton";
import {
  FAKE_FETCH_DELAY,
  listings as allListings,
  quickFilters,
  searchSummary,
} from "@/lib/data";
import { normalize } from "@/lib/format";
import type { Listing, SortOrder } from "@/lib/types";

/**
 * Catálogo de resultados. Concentra el estado de la vista:
 *
 * - `listings` / `isLoading`: carga simulada, igual que en la Home.
 * - `activeFilters`: ids de los chips activos, se acumulan (AND).
 * - `sort`: criterio de ordenación por precio.
 * - `showingMap`: solo en móvil, controla a qué zona salta el botón flotante.
 */
export default function SearchResultsView() {
  // Texto que llega desde el buscador de la Home: /search?q=...
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";

  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOrder>("recomendados");
  const [showingMap, setShowingMap] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(allListings);
      setIsLoading(false);
    }, FAKE_FETCH_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const toggleFilter = (id: string) =>
    setActiveFilters((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id],
    );

  const visibleListings = useMemo(() => {
    const term = normalize(query);

    const filtered = listings.filter((listing) => {
      // 1) Texto que viene de la Home, si lo hay.
      if (term !== "") {
        const haystack = normalize(
          `${listing.title} ${listing.location} ${listing.amenities.join(" ")}`,
        );
        if (!haystack.includes(term)) return false;
      }

      // 2) Chips de conveniencia: todos los activos deben cumplirse.
      const amenities = normalize(listing.amenities.join(" "));

      return activeFilters.every((id) => {
        const filter = quickFilters.find((f) => f.id === id);
        return filter ? amenities.includes(filter.match) : true;
      });
    });

    // `sort` muta el array, así que se ordena sobre una copia.
    if (sort === "precio-asc") {
      return [...filtered].sort((a, b) => a.pricePerNight - b.pricePerNight);
    }
    if (sort === "precio-desc") {
      return [...filtered].sort((a, b) => b.pricePerNight - a.pricePerNight);
    }
    return filtered;
  }, [listings, query, activeFilters, sort]);

  const handleToggleMap = () => {
    const next = !showingMap;
    setShowingMap(next);
    const target = next ? mapRef.current : listRef.current;
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className="border-border-soft bg-background sticky top-0 z-40 border-b">
        <div className="mx-auto max-w-[1600px]">
          <SearchHeader
            summary={
              query
                ? { ...searchSummary, destination: `Resultados de «${query}»` }
                : searchSummary
            }
            activeFiltersCount={activeFilters.length}
          />
          <FilterChips
            filters={quickFilters}
            active={activeFilters}
            onToggle={toggleFilter}
            onClear={() => setActiveFilters([])}
          />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1600px] flex-1 pt-4">
        {!isLoading && (
          <ResultsToolbar
            count={visibleListings.length}
            sort={sort}
            onSortChange={setSort}
          />
        )}

        {/* Móvil: lista y mapa apilados. Escritorio: dos columnas. */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,40%)] lg:gap-6 lg:px-4">
          <div ref={listRef} className="scroll-mt-32">
            {isLoading ? (
              <div
                role="status"
                aria-busy="true"
                className="grid grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-1 lg:px-0 xl:grid-cols-2"
              >
                <span className="sr-only">Cargando resultados…</span>
                {Array.from({ length: 4 }, (_, i) => (
                  <ListingCardSkeleton key={i} />
                ))}
              </div>
            ) : visibleListings.length === 0 ? (
              <div className="flex flex-col items-center gap-2 px-8 py-20 text-center">
                <p className="text-foreground text-lg font-semibold">
                  No hay resultados
                </p>
                <p className="text-muted max-w-xs text-sm">
                  {query
                    ? `Ningún alojamiento coincide con «${query}». Prueba con otro destino o quita algún filtro.`
                    : "Prueba a quitar alguno de los filtros para ver más alojamientos."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-1 lg:px-0 xl:grid-cols-2">
                {visibleListings.map((listing, i) => (
                  <ListingCardDetailed
                    key={listing.id}
                    listing={listing}
                    priority={i < 2}
                  />
                ))}
              </div>
            )}
          </div>

          <div
            ref={mapRef}
            className="scroll-mt-32 px-4 pt-8 lg:sticky lg:top-32 lg:h-[calc(100vh-11rem)] lg:px-0 lg:pt-0"
          >
            <MapView
              listings={visibleListings}
              className="h-72 w-full lg:h-full"
            />
          </div>
        </div>

        <p className="text-subtle px-5 pt-10 pb-6 text-center text-xs">
          Proyecto educativo · Clon de la interfaz de Airbnb
        </p>
      </main>

      <MapFloatingButton showingMap={showingMap} onToggle={handleToggleMap} />
    </>
  );
}
