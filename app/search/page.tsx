import { Suspense } from "react";
import SearchResultsView from "@/components/search/SearchResultsView";

/**
 * `SearchResultsView` usa `useSearchParams()`, así que necesita un límite
 * de Suspense para que Next pueda seguir prerenderizando la ruta.
 */
export default function SearchPage() {
  return (
    <Suspense>
      <SearchResultsView />
    </Suspense>
  );
}
