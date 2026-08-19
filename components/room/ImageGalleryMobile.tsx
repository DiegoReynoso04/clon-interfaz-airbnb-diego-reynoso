"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/format";

/**
 * Galería principal de la ficha. El índice de la foto visible vive en
 * `useState` y se mueve con los botones Anterior / Siguiente; el contador
 * "1/4" de la esquina refleja ese estado.
 *
 * Cada foto arranca sobre un placeholder que se desvanece al cargar y se
 * mantiene si la imagen falla.
 */
export default function ImageGalleryMobile({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const total = images.length;
  const goTo = (next: number) => setIndex((next + total) % total);

  const arrow =
    "grid size-9 place-items-center rounded-full bg-white/90 text-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.25)] backdrop-blur transition-transform active:scale-90 disabled:opacity-40";

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-300 sm:aspect-[16/9] lg:aspect-auto lg:h-[440px] lg:rounded-2xl dark:from-neutral-700 dark:to-neutral-800">
      {images.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          {!failed[i] && (
            <Image
              src={src}
              alt={`${alt} — foto ${i + 1} de ${total}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority={i === 0}
              onLoad={() => setLoaded((prev) => ({ ...prev, [i]: true }))}
              onError={() => setFailed((prev) => ({ ...prev, [i]: true }))}
              className={cn(
                "object-cover transition-opacity duration-300",
                loaded[i] ? "opacity-100" : "opacity-0",
              )}
            />
          )}
        </div>
      ))}

      {total > 1 && (
        <>
          <div className="absolute inset-y-0 left-3 flex items-center">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Foto anterior"
              className={arrow}
            >
              <Icon name="chevron-left" size={18} strokeWidth={2.4} />
            </button>
          </div>

          <div className="absolute inset-y-0 right-3 flex items-center">
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Foto siguiente"
              className={arrow}
            >
              <Icon name="chevron-right" size={18} strokeWidth={2.4} />
            </button>
          </div>

          <div className="absolute right-3 bottom-3 rounded-full bg-neutral-900/70 px-2.5 py-1 text-xs font-semibold text-white tabular-nums">
            {index + 1}/{total}
          </div>

          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a la foto ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "size-1.5 rounded-full bg-white transition-all",
                  i === index ? "opacity-100" : "scale-75 opacity-60",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
