import Link from "next/link";
import Icon from "@/components/ui/Icon";

/**
 * Barra de búsqueda comprimida en forma de píldora que aparece en la
 * cabecera de la Home. Es un enlace, no un input: al pulsarla se abre
 * la vista de búsqueda completa.
 */
export default function SearchBarCompact({
  placeholder = "Empieza a buscar",
  href = "/search",
}: {
  placeholder?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="border-border-base bg-surface text-foreground flex h-13 w-full items-center gap-3 rounded-full border px-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_3px_12px_rgba(0,0,0,0.14)] active:scale-[0.99]"
    >
      <Icon name="search" size={20} strokeWidth={2.2} />
      <span className="text-[15px] font-medium">{placeholder}</span>
    </Link>
  );
}
