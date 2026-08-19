import CategoryPills from "./CategoryPills";
import SearchBarCompact from "./SearchBarCompact";
import { categories } from "@/lib/data";

/**
 * Cabecera sticky de la Home: buscador en píldora + slider de categorías.
 */
export default function HomeHeader() {
  return (
    <header className="border-border-soft bg-background sticky top-0 z-40 border-b">
      <div className="px-5 pt-3">
        <SearchBarCompact />
      </div>
      <CategoryPills categories={categories} />
    </header>
  );
}
