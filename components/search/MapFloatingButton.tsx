"use client";

import Icon from "@/components/ui/Icon";

/**
 * Botón flotante centrado en la parte inferior, sobre la BottomNav.
 * En móvil el mapa va apilado debajo de la lista, así que el botón
 * desplaza la vista de una zona a la otra. En escritorio el mapa ya está
 * visible en la columna derecha y el botón se oculta.
 */
export default function MapFloatingButton({
  showingMap,
  onToggle,
}: {
  showingMap: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-20 z-40 flex justify-center lg:hidden">
      <button
        type="button"
        onClick={onToggle}
        className="bg-foreground text-background pointer-events-auto flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold shadow-lg transition-transform active:scale-95"
      >
        {showingMap ? "Lista" : "Mapa"}
        <Icon
          name={showingMap ? "compass" : "map"}
          size={16}
          strokeWidth={1.9}
        />
      </button>
    </div>
  );
}
