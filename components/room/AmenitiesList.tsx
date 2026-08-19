"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { getAllAmenities, getAmenityIcon } from "@/lib/room-detail";
import type { Listing } from "@/lib/types";

/** Comodidades visibles antes de desplegar. */
const PREVIEW_COUNT = 6;

/**
 * Cuadrícula de comodidades (icono + etiqueta) con botón para desplegar
 * la lista completa. El estado de desplegado vive aquí, es local a la
 * sección y no afecta a nada más de la ficha.
 */
export default function AmenitiesList({ listing }: { listing: Listing }) {
  const [expanded, setExpanded] = useState(false);

  const all = getAllAmenities(listing);
  const visible = expanded ? all : all.slice(0, PREVIEW_COUNT);

  return (
    <section className="space-y-4">
      <h2 className="text-foreground text-[19px] font-semibold">
        Lo que este alojamiento ofrece
      </h2>

      <ul className="grid grid-cols-1 gap-y-3.5 sm:grid-cols-2">
        {visible.map((amenity) => (
          <li
            key={amenity}
            className="text-foreground flex items-center gap-3.5 text-[15px]"
          >
            <span className="text-muted shrink-0">
              <Icon
                name={getAmenityIcon(amenity)}
                size={22}
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </span>
            {amenity}
          </li>
        ))}
      </ul>

      {all.length > PREVIEW_COUNT && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="border-border-base text-foreground hover:bg-surface-muted w-full rounded-xl border px-4 py-3 text-[15px] font-semibold transition-colors sm:w-auto"
        >
          {expanded
            ? "Mostrar menos"
            : `Mostrar las ${all.length} comodidades`}
        </button>
      )}
    </section>
  );
}
