"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/format";

/**
 * Botón de corazón que se superpone sobre la imagen de la tarjeta.
 * Estado local: no hay backend, solo feedback visual.
 */
export default function FavoriteButton({
  listingTitle,
  defaultActive = false,
  className,
}: {
  listingTitle: string;
  defaultActive?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState(defaultActive);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={
        active
          ? `Quitar ${listingTitle} de favoritos`
          : `Guardar ${listingTitle} en favoritos`
      }
      onClick={(event) => {
        // La tarjeta entera es un enlace: evitamos navegar al pulsar el corazón.
        event.preventDefault();
        event.stopPropagation();
        setActive((value) => !value);
      }}
      className={cn(
        "grid size-9 place-items-center rounded-full transition-transform active:scale-90",
        className,
      )}
    >
      <Icon
        name={active ? "heart-filled" : "heart"}
        size={24}
        strokeWidth={2}
        className={cn(
          "drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]",
          active ? "text-rausch" : "text-white",
        )}
      />
    </button>
  );
}
