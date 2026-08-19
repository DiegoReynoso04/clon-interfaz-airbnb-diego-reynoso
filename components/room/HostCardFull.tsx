import Icon from "@/components/ui/Icon";
import HostAvatar from "./HostAvatar";
import { formatRating } from "@/lib/format";
import type { Host, HostStats } from "@/lib/types";

/**
 * Ficha extendida del anfitrión: foto, insignia de Superanfitrión,
 * estadísticas (evaluaciones, valoración, años) y datos de respuesta.
 */
export default function HostCardFull({
  host,
  stats,
}: {
  host: Host;
  stats: HostStats;
}) {
  const metrics = [
    { value: stats.reviews.toLocaleString("es-ES"), label: "Evaluaciones" },
    { value: formatRating(stats.rating), label: "Valoración", star: true },
    {
      value: String(stats.yearsHosting),
      label: stats.yearsHosting === 1 ? "Año hospedando" : "Años hospedando",
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-foreground text-[19px] font-semibold">
        Conoce a tu anfitrión
      </h2>

      <div className="border-border-soft bg-surface flex flex-col gap-5 rounded-2xl border p-5 sm:flex-row sm:items-center">
        <div className="flex flex-col items-center gap-2 sm:w-40">
          <HostAvatar src={host.avatarUrl} name={host.name} size={80} />
          <p className="text-foreground text-lg leading-tight font-semibold">
            {host.name}
          </p>
          {host.isSuperhost && (
            <p className="text-muted flex items-center gap-1 text-[13px]">
              <Icon name="medal" size={13} strokeWidth={1.8} aria-hidden="true" />
              Superanfitrión
            </p>
          )}
        </div>

        <dl className="flex flex-1 justify-between gap-4 sm:flex-col sm:justify-start sm:gap-3 sm:border-l sm:border-(--border) sm:pl-5">
          {metrics.map((metric) => (
            <div key={metric.label} className="sm:flex sm:items-baseline sm:gap-2">
              <dd className="text-foreground flex items-center gap-1 text-[17px] leading-tight font-semibold">
                {metric.value}
                {metric.star && <Icon name="star" size={12} aria-hidden="true" />}
              </dd>
              <dt className="text-muted text-[12px] sm:text-[13px]">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>

      <ul className="text-muted space-y-1.5 text-[15px]">
        <li className="flex items-center gap-2">
          <Icon name="check" size={16} strokeWidth={2} aria-hidden="true" />
          Índice de respuesta: {stats.responseRate}%
        </li>
        <li className="flex items-center gap-2">
          <Icon name="clock" size={16} strokeWidth={1.8} aria-hidden="true" />
          Responde {stats.responseTime}
        </li>
      </ul>

      <button
        type="button"
        className="border-border-base text-foreground hover:bg-surface-muted w-full rounded-xl border px-4 py-3 text-[15px] font-semibold transition-colors sm:w-auto"
      >
        Enviar un mensaje al anfitrión
      </button>
    </section>
  );
}
