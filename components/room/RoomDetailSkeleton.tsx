/**
 * Estado de carga de la ficha: reproduce la galería, la cabecera y los
 * bloques de contenido para que no haya salto de layout al llegar los datos.
 */
export default function RoomDetailSkeleton() {
  const bar = "bg-surface-muted rounded-full";

  return (
    <div role="status" aria-busy="true" className="animate-pulse">
      <span className="sr-only">Cargando el alojamiento…</span>

      <div className="bg-surface-muted aspect-[4/3] w-full sm:aspect-[16/9] lg:rounded-2xl" />

      <div className="mx-auto max-w-7xl space-y-3 px-5 pt-6 lg:px-0">
        <div className={`${bar} h-6 w-3/5`} />
        <div className={`${bar} h-4 w-2/5`} />
        <div className={`${bar} h-4 w-1/2`} />

        <div className="flex items-center gap-3 pt-6">
          <div className="bg-surface-muted size-12 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className={`${bar} h-4 w-1/3`} />
            <div className={`${bar} h-3 w-1/4`} />
          </div>
        </div>

        <div className="space-y-2 pt-6">
          <div className={`${bar} h-4 w-full`} />
          <div className={`${bar} h-4 w-full`} />
          <div className={`${bar} h-4 w-4/5`} />
        </div>

        <div className="bg-surface-muted h-56 rounded-2xl" />
      </div>
    </div>
  );
}
