"use client";

import Icon from "@/components/ui/Icon";

/**
 * Campo de búsqueda controlado. No guarda estado propio: el texto vive en
 * `ExploreView`, que es quien filtra las tarjetas en cada pulsación.
 */
export default function SearchBar({
  value,
  onChange,
  resultsCount,
  placeholder = "Empieza a buscar",
}: {
  value: string;
  onChange: (value: string) => void;
  /** Nº de resultados visibles, se anuncia a lectores de pantalla. */
  resultsCount?: number;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <label htmlFor="buscador" className="sr-only">
        Buscar alojamientos por destino o título
      </label>

      <span className="text-muted pointer-events-none absolute top-1/2 left-5 -translate-y-1/2">
        <Icon name="search" size={20} strokeWidth={2.2} />
      </span>

      <input
        id="buscador"
        type="search"
        inputMode="search"
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="border-border-base bg-surface text-foreground placeholder:text-muted focus:border-foreground h-13 w-full rounded-full border pr-12 pl-13 text-[15px] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow outline-none focus:shadow-[0_3px_12px_rgba(0,0,0,0.14)] [&::-webkit-search-cancel-button]:hidden"
      />

      {value.length > 0 && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Borrar búsqueda"
          className="text-muted hover:text-foreground hover:bg-surface-muted absolute top-1/2 right-3 grid size-8 -translate-y-1/2 place-items-center rounded-full transition-colors"
        >
          <Icon name="close" size={18} strokeWidth={2.2} />
        </button>
      )}

      {/* Anuncia el nº de resultados sin interrumpir la escritura */}
      <p aria-live="polite" className="sr-only">
        {typeof resultsCount === "number"
          ? `${resultsCount} alojamientos encontrados`
          : ""}
      </p>
    </div>
  );
}
