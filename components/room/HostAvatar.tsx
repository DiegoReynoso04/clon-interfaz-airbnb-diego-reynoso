"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/format";

/**
 * Avatar del anfitrión con placeholder: mientras carga (o si la foto
 * falla) se muestra un círculo con su inicial.
 */
export default function HostAvatar({
  src,
  name,
  size = 56,
  className,
}: {
  src: string;
  name: string;
  size?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <span
      style={{ width: size, height: size }}
      className={cn(
        "bg-surface-muted text-muted relative grid shrink-0 place-items-center overflow-hidden rounded-full font-semibold",
        className,
      )}
    >
      <span aria-hidden="true" style={{ fontSize: size * 0.4 }}>
        {name.charAt(0)}
      </span>

      {!failed && (
        <Image
          src={src}
          alt={`Foto de ${name}`}
          fill
          sizes={`${size}px`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "object-cover transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </span>
  );
}
