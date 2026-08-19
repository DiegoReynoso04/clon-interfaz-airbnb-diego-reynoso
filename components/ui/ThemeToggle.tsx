"use client";

import { useCallback, useSyncExternalStore } from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/format";
import { applyTheme, getCurrentTheme, type Theme } from "@/lib/theme";

/**
 * El tema no vive en el estado de React, sino en el atributo `data-theme`
 * del `<html>` (lo escribe un script en línea antes del primer pintado).
 * `useSyncExternalStore` es la forma correcta de leer ese estado externo:
 * evita el `setState` dentro de un `useEffect` y deja que React use el
 * valor del servidor durante la hidratación sin provocar desajustes.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function useTheme(): Theme {
  return useSyncExternalStore(
    subscribe,
    getCurrentTheme,
    () => "light", // valor durante el renderizado en servidor
  );
}

export default function ThemeToggle({
  className,
  variant = "outline",
}: {
  className?: string;
  /** `overlay` para cuando va encima de una foto (círculo blanco). */
  variant?: "outline" | "overlay";
}) {
  const theme = useTheme();
  const next: Theme = theme === "dark" ? "light" : "dark";

  const toggle = useCallback(() => applyTheme(next), [next]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
      }
      title={theme === "dark" ? "Tema claro" : "Tema oscuro"}
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-full transition-transform active:scale-90",
        variant === "overlay"
          ? "size-9 bg-white/90 text-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.25)] backdrop-blur"
          : "border-border-base text-foreground hover:bg-surface-muted border transition-colors",
        className,
      )}
    >
      <Icon
        name={theme === "dark" ? "sun" : "moon"}
        size={18}
        strokeWidth={1.9}
      />
    </button>
  );
}
