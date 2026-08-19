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
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
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
  waves: (
    <>
      <circle cx="17.5" cy="6" r="2.5" />
      <path d="M2.5 14.5c1.6 0 1.6 1.6 3.2 1.6s1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6 1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6" />
      <path d="M2.5 18.9c1.6 0 1.6 1.6 3.2 1.6s1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6 1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6" />
      <path d="M4 11.5c2.5-3.4 6-5 10.5-4.7" />
    </>
  ),
  mansion: (
    <>
      <path d="M3 20.5h18" />
      <path d="M4.5 20.5V9.5l7.5-5 7.5 5v11" />
      <path d="M8.5 20.5v-5h7v5" />
      <path d="M8.5 11.5h2M13.5 11.5h2" />
    </>
  ),
  flame: (
    <>
      <path d="M12 20.8c3.3 0 6-2.5 6-5.7 0-1.5-.5-2.9-1.5-4.2-.4 1-1 1.7-1.9 2.1.4-3-.8-5.9-3.7-8.3.2 2.8-1 4.6-2.5 6.1C6.9 12.3 6 13.9 6 15.6c0 2.9 2.7 5.2 6 5.2Z" />
      <path d="M12 20.8c-1.6 0-2.8-1.1-2.8-2.6 0-1.5 1.3-2.2 1.9-3.6.8 1 1.6 1.5 2.4 2.4.4.5.6 1 .6 1.6 0 1.3-1 2.2-2.1 2.2Z" />
    </>
  ),
  cabin: (
    <>
      <path d="M12 3.5 3 11h18l-9-7.5Z" />
      <path d="M5.5 11v9.5h13V11" />
      <path d="M5.5 14.5h13M5.5 17.5h13" />
      <path d="M10.5 20.5V17h3v3.5" />
    </>
  ),
  pool: (
    <>
      <path d="M8 16.5V6.8a2.9 2.9 0 0 1 5.8 0v9.7" />
      <path d="M8 10.2h5.8M8 13.4h5.8" />
      <path d="M2.5 18.6c1.6 0 1.6 1.5 3.2 1.5s1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5" />
    </>
  ),
  palm: (
    <>
      <path d="M12 8.5c0 4-1 8-2.5 12" />
      <path d="M12 8.5c-2.8-2-5.6-1.6-7.5.8" />
      <path d="M12 8.5c2.8-2 5.6-1.6 7.5.8" />
      <path d="M12 8.5c-1.6-2.8-4-3.8-6.5-3" />
      <path d="M12 8.5c1.6-2.8 4-3.8 6.5-3" />
      <path d="M6 20.5h9" />
    </>
  ),
  mountain: (
    <>
      <path d="M2.5 19.5 9 8l4 6.5 2-3 6.5 8H2.5Z" />
      <circle cx="17" cy="5.5" r="2" />
    </>
  ),
  sliders: (
    <>
      <path d="M3.5 7.5h4M11.5 7.5h9" />
      <path d="M3.5 16.5h9M16.5 16.5h4" />
      <circle cx="9.5" cy="7.5" r="2" />
      <circle cx="14.5" cy="16.5" r="2" />
    </>
  ),
  map: (
    <>
      <path d="M9 4.5 3.5 6.8v12.7L9 17.2l6 2.3 5.5-2.3V4.5L15 6.8 9 4.5Z" />
      <path d="M9 4.5v12.7M15 6.8v12.7" />
    </>
  ),
  "chevron-down": <path d="M5 9.5 12 16l7-6.5" />,
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
