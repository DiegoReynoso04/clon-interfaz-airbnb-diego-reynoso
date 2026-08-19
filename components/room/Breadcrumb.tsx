import Link from "next/link";
import Icon from "@/components/ui/Icon";

/**
 * Migas de pan de la ficha: Inicio › Alojamientos › ubicación actual.
 * Da una ruta de vuelta explícita al catálogo, además del botón flotante
 * que se superpone a la galería.
 */
export default function Breadcrumb({ location }: { location: string }) {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/search", label: "Alojamientos" },
  ] as const;

  return (
    <nav aria-label="Migas de pan">
      <ol className="text-muted flex flex-wrap items-center gap-1 text-[13px]">
        {links.map((link) => (
          <li key={link.href} className="flex items-center gap-1">
            <Link
              href={link.href}
              className="hover:text-foreground underline underline-offset-2 transition-colors"
            >
              {link.label}
            </Link>
            <Icon
              name="chevron-right"
              size={12}
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </li>
        ))}

        <li className="text-foreground font-medium" aria-current="page">
          {location}
        </li>
      </ol>
    </nav>
  );
}
