import type { SVGProps } from "react";
import type { IconName } from "@/lib/types";

/**
 * Set de iconos SVG propios (sin librerías externas).
 * Todos comparten viewBox 0 0 24 24 y heredan `currentColor`.
 */
const paths: Record<IconName, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  heart: (
    <path d="M12 20.5S3.5 15 3.5 8.9A4.4 4.4 0 0 1 12 6.8a4.4 4.4 0 0 1 8.5 2.1c0 6.1-8.5 11.6-8.5 11.6Z" />
  ),
  "heart-filled": (
    <path
      d="M12 20.5S3.5 15 3.5 8.9A4.4 4.4 0 0 1 12 6.8a4.4 4.4 0 0 1 8.5 2.1c0 6.1-8.5 11.6-8.5 11.6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.75" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  star: (
    <path
      d="m12 3.5 2.6 5.5 5.9.8-4.3 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.5 9.8l5.9-.8L12 3.5Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  "chevron-left": <path d="M14.5 5 8 12l6.5 7" />,
  "chevron-right": <path d="M9.5 5 16 12l-6.5 7" />,
  house: (
    <>
      <path d="M3.5 10.5 12 3.5l8.5 7" />
      <path d="M5.5 9.8V20h13V9.8" />
      <path d="M10 20v-5.5h4V20" />
    </>
  ),
  balloon: (
    <>
      <path d="M12 3.2c3 0 5.2 2.4 5.2 5.6 0 3.7-3 6.6-5.2 6.6s-5.2-2.9-5.2-6.6C6.8 5.6 9 3.2 12 3.2Z" />
      <path d="M12 15.4v1.8" />
      <path d="M10.4 17.2h3.2l-.7 3.4h-1.8l-.7-3.4Z" />
    </>
  ),
  bell: (
    <>
      <path d="M6.5 10a5.5 5.5 0 0 1 11 0c0 4 1.5 5.5 1.5 5.5H5s1.5-1.5 1.5-5.5Z" />
      <path d="M10.2 19a2 2 0 0 0 3.6 0" />
    </>
  ),
};

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  /** Tamaño en píxeles (ancho y alto). Por defecto 24. */
  size?: number;
  strokeWidth?: number;
}

export default function Icon({
  name,
  size = 24,
  strokeWidth = 1.7,
  className,
  ...rest
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
