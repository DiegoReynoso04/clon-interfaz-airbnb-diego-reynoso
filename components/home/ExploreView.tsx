"use client";

import { useEffect, useMemo, useState } from "react";
import HomeHeader from "./HomeHeader";
import ListingGrid from "@/components/listing/ListingGrid";
import { FAKE_FETCH_DELAY, listings as allListings } from "@/lib/data";
import { normalize } from "@/lib/format";
import type { CategoryId, Listing } from "@/lib/types";

/**
 * Vista principal de exploración. Es el único componente con estado:
 *
 * - `listings` / `isLoading`: se rellenan en un `useEffect` que simula
 *   la latencia de una API con un `setTimeout`.
 * - `query`: texto del buscador, filtra las tarjetas en cada pulsación.
 * - `category`: categoría activa de la fila de filtros.
 *
 * El filtrado se recalcula con `useMemo` a partir de esos tres valores,
 * así que la cuadrícula siempre refleja el estado actual.
 */
export default function ExploreView() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId>("todo");

  // Carga simulada al montar: lista vacía -> espera -> datos.
  // `isLoading` ya arranca en `true`, así que el efecto solo tiene que
  // programar el final de la carga.
  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(allListings);
      setIsLoading(false);
    }, FAKE_FETCH_DELAY);

    // Evita actualizar el estado si el componente se desmonta antes.
    return () => clearTimeout(timer);
  }, []);

  const visibleListings = useMemo(() => {
    const term = normalize(query.trim());

    return listings.filter((listing) => {
      const matchesCategory =
        category === "todo" || listing.category === category;

      if (!matchesCategory) return false;
      if (term === "") return true;

      // Busca en título, ubicación y comodidades, ignorando tildes.
      const haystack = normalize(
        `${listing.title} ${listing.location} ${listing.amenities.join(" ")}`,
      );

      return haystack.includes(term);
    });
  }, [listings, query, category]);

  return (
    <>
      <HomeHeader
        query={query}
        onQueryChange={setQuery}
        category={category}
        onCategoryChange={setCategory}
        resultsCount={isLoading ? undefined : visibleListings.length}
      />

      <main className="mx-auto w-full max-w-7xl flex-1 pt-6">
        {!isLoading && (
          <p className="text-muted px-5 pb-4 text-sm">
            {visibleListings.length === 1
              ? "1 alojamiento disponible"
              : `${visibleListings.length} alojamientos disponibles`}
          </p>
        )}

        <ListingGrid listings={visibleListings} isLoading={isLoading} />

        <p className="text-subtle px-5 pt-10 pb-6 text-center text-xs">
          Proyecto educativo · Clon de la interfaz de Airbnb
        </p>
      </main>
    </>
  );
}
