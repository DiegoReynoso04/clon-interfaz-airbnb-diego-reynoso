import Link from "next/link";
import Icon from "@/components/ui/Icon";

/**
 * Pantalla provisional para las vistas que aún no están implementadas.
 * Mantiene la navegación coherente mientras se construyen Search y Room Detail.
 */
export default function PlaceholderScreen({
  title,
  description,
  backHref = "/",
}: {
  title: string;
  description: string;
  backHref?: string;
}) {
  return (
    <main className="flex flex-1 flex-col">
      <div className="px-5 pt-4">
        <Link
          href={backHref}
          aria-label="Volver"
          className="border-border-base text-foreground hover:bg-surface-muted grid size-9 place-items-center rounded-full border transition-colors"
        >
          <Icon name="chevron-left" size={18} strokeWidth={2.2} />
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-8 text-center">
        <h1 className="text-foreground text-xl font-semibold">{title}</h1>
        <p className="text-muted max-w-xs text-sm">{description}</p>
      </div>
    </main>
  );
}
