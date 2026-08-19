"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/format";

type ImageState = "loading" | "ready" | "error";

/**
 * Carrusel horizontal de imágenes con scroll-snap nativo y puntos de
 * navegación. Sin librerías: el índice activo se calcula a partir del
 * scroll del contenedor.
 *
 * Cada foto arranca sobre un placeholder gris que se desvanece al cargar,
 * y se queda como fondo definitivo si la imagen falla.
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
  const [states, setStates] = useState<Record<number, ImageState>>({});

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.round(track.scrollLeft / track.clientWidth);
    setIndex((current) => (current === next ? current : next));
  };

  const setState = (i: number, state: ImageState) =>
    setStates((prev) => (prev[i] === state ? prev : { ...prev, [i]: state }));

  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="scrollbar-none flex h-full snap-x snap-mandatory overflow-x-auto"
      >
        {images.map((src, i) => {
          const state = states[i] ?? "loading";

          return (
            <div
              key={src}
              className="relative h-full w-full shrink-0 snap-center bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800"
            >
              {state !== "error" && (
                <Image
                  src={src}
                  alt={i === 0 ? alt : `${alt} — foto ${i + 1}`}
                  fill
                  sizes={sizes}
                  priority={priority && i === 0}
                  loading={priority && i === 0 ? undefined : "lazy"}
                  onLoad={() => setState(i, "ready")}
                  onError={() => setState(i, "error")}
                  className={cn(
                    "object-cover transition-opacity duration-300",
                    state === "ready" ? "opacity-100" : "opacity-0",
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      {images.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
          {images.map((src, i) => (
            <span
              key={src}
              className={cn(
                "size-1.5 rounded-full bg-white transition-all",
                i === index ? "opacity-100" : "scale-75 opacity-60",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
