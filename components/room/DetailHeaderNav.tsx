"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/format";

/**
 * Botones flotantes sobre la galería: volver, compartir y guardar.
 * Van en círculos blancos semitransparentes para que se lean encima de
 * cualquier foto, como en la app de Airbnb.
 */
export default function DetailHeaderNav({
  listingTitle,
  defaultFavorite = false,
}: {
  listingTitle: string;
  defaultFavorite?: boolean;
}) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(defaultFavorite);
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    // `navigator.share` solo existe en móvil; en escritorio copiamos la URL.
    try {
      if (navigator.share) {
        await navigator.share({ title: listingTitle, url: window.location.href });
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    } catch {
      // El usuario canceló el diálogo de compartir: no hay nada que hacer.
    }
  };

  const circle =
    "grid size-9 place-items-center rounded-full bg-white/90 text-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.25)] backdrop-blur transition-transform active:scale-90";

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between p-3">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Volver"
        className={cn(circle, "pointer-events-auto")}
      >
        <Icon name="chevron-left" size={18} strokeWidth={2.4} />
      </button>

      <div className="pointer-events-auto flex items-center gap-2">
        {shared && (
          <span className="rounded-full bg-neutral-900/85 px-3 py-1.5 text-xs font-medium text-white">
            Enlace copiado
          </span>
        )}

        <button
          type="button"
          onClick={handleShare}
          aria-label={`Compartir ${listingTitle}`}
          className={circle}
        >
          <Icon name="share" size={17} strokeWidth={2} />
        </button>

        <button
          type="button"
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((value) => !value)}
          aria-label={
            isFavorite
              ? `Quitar ${listingTitle} de favoritos`
              : `Guardar ${listingTitle} en favoritos`
          }
          className={circle}
        >
          <Icon
            name={isFavorite ? "heart-filled" : "heart"}
            size={18}
            strokeWidth={2}
            className={isFavorite ? "text-rausch" : undefined}
          />
        </button>
      </div>
    </div>
  );
}
