"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/format";
import type { IconName } from "@/lib/types";

interface NavItem {
  href: string;
  label: string;
  icon: IconName;
}

const items: NavItem[] = [
  { href: "/", label: "Explorar", icon: "search" },
  { href: "/favoritos", label: "Favoritos", icon: "heart" },
  { href: "/login", label: "Iniciar sesión", icon: "user" },
];

/**
 * Barra de navegación inferior fija, propia de la app móvil de Airbnb.
 * Se oculta en pantallas grandes, donde la navegación pasa al header.
 */
export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación principal"
      className="border-border-soft bg-surface pb-safe fixed inset-x-0 bottom-0 z-50 border-t"
    >
      <ul className="mx-auto flex h-16 max-w-md items-stretch">
        {items.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex h-full flex-col items-center justify-center gap-1 transition-colors",
                  isActive
                    ? "text-rausch"
                    : "text-muted hover:text-foreground active:text-foreground",
                )}
              >
                <Icon
                  name={isActive && item.icon === "heart" ? "heart-filled" : item.icon}
                  size={22}
                  strokeWidth={isActive ? 2 : 1.7}
                />
                <span className="text-[10px] leading-none font-medium">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
