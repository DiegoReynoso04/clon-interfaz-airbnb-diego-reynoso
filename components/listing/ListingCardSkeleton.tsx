/**
 * Esqueleto de tarjeta que se muestra mientras `ExploreView` simula la
 * carga de datos. Reproduce las mismas proporciones que `ListingCard`
 * para que no haya salto de layout al llegar los datos.
 */
export default function ListingCardSkeleton() {
  return (
    <div aria-hidden="true" className="w-full animate-pulse">
      <div className="bg-surface-muted aspect-square w-full rounded-xl" />
      <div className="space-y-2 pt-3">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-surface-muted h-3.5 w-2/5 rounded-full" />
          <div className="bg-surface-muted h-3.5 w-10 rounded-full" />
        </div>
        <div className="bg-surface-muted h-3 w-3/5 rounded-full" />
        <div className="bg-surface-muted h-3 w-1/3 rounded-full" />
        <div className="bg-surface-muted h-3.5 w-1/2 rounded-full" />
      </div>
    </div>
  );
}
