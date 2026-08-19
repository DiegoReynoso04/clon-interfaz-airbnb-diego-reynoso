import Icon from "@/components/ui/Icon";
import HostAvatar from "./HostAvatar";
import type { Host } from "@/lib/types";

/**
 * Fila compacta del anfitrión bajo la cabecera: avatar, nombre y años
 * hospedando. La ficha extendida es `HostCardFull`.
 */
export default function HostCardMini({ host }: { host: Host }) {
  return (
    <section className="border-border-soft flex items-center gap-3 border-y py-4">
      <HostAvatar src={host.avatarUrl} name={host.name} size={48} />

      <div className="min-w-0 leading-tight">
        <p className="text-foreground text-[15px] font-semibold">
          Anfitrión: {host.name}
        </p>
        <p className="text-muted flex items-center gap-1.5 text-[14px]">
          {host.isSuperhost && (
            <>
              <Icon name="medal" size={14} strokeWidth={1.8} aria-hidden="true" />
              <span>Superanfitrión</span>
              <span aria-hidden="true">·</span>
            </>
          )}
          <span>
            {host.yearsHosting}{" "}
            {host.yearsHosting === 1 ? "año hospedando" : "años hospedando"}
          </span>
        </p>
      </div>
    </section>
  );
}
