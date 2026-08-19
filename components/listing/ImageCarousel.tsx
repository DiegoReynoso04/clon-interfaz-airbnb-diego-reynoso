"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/format";

/**
 * Carrusel horizontal de imágenes con scroll-snap nativo y puntos de
 * navegación. Sin librerías: el índice activo se calcula a partir del
 * scroll del contenedor.
 */
export default function ImageCarousel({
  images,
  alt,
  priority = false,
  sizes = "(min-width: 768px) 320px, 85vw",
  className,
}: {
  images: string[];
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.round(track.scrollLeft / track.clientWidth);
    setIndex((current) => (current === next ? current : next));
  };

  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="scrollbar-none flex h-full snap-x snap-mandatory overflow-x-auto"
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="bg-surface-muted relative h-full w-full shrink-0 snap-center"
          >
            {failed[i] ? (
              <div
                aria-hidden="true"
                className="size-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800"
              />
            ) : (
              <Image
                src={src}
                alt={i === 0 ? alt : `${alt} — foto ${i + 1}`}
                fill
                sizes={sizes}
                priority={priority && i === 0}
                loading={priority && i === 0 ? undefined : "lazy"}
                onError={() => setFailed((prev) => ({ ...prev, [i]: true }))}
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
          {images.map((src, i) => (
            <span
              key={src}
              className={cn(
                "rounded-full bg-white transition-all",
                i === index
                  ? "size-1.5 opacity-100"
                  : "size-1.5 opacity-60 scale-75",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
