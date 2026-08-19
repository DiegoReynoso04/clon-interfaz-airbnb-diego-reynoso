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
  share: (
    <>
      <path d="M12 3.5v12" />
      <path d="m8 7.5 4-4 4 4" />
      <path d="M5.5 12.5v6a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-6" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  plus: (
    <>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="14.5" r="5" />
      <path d="M9 9.8 6.5 3.5h11L15 9.8" />
      <path d="m12 12.4.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3.9-1.9Z" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.5 9.5a13.5 13.5 0 0 1 19 0" />
      <path d="M6 13a8.5 8.5 0 0 1 12 0" />
      <path d="M9.3 16.4a4 4 0 0 1 5.4 0" />
      <circle cx="12" cy="19.8" r="1" fill="currentColor" />
    </>
  ),
  kitchen: (
    <>
      <path d="M6 3.5v7a2.5 2.5 0 0 0 5 0v-7" />
      <path d="M8.5 13v7.5" />
      <path d="M17 3.5c-1.5 1.5-2 3.2-2 5.5s.5 3 2 3.2v8.3" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
      <path d="M12 6.6 9.8 4.8M12 6.6l2.2-1.8M12 17.4l-2.2 1.8M12 17.4l2.2 1.8" />
    </>
  ),
  washer: (
    <>
      <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
      <circle cx="12" cy="13.5" r="4" />
      <path d="M7.5 7h2" />
    </>
  ),
  car: (
    <>
      <path d="M4 15.5h16" />
      <path d="M5.5 15.5 7 9.2A2 2 0 0 1 9 7.6h6a2 2 0 0 1 2 1.6l1.5 6.3" />
      <path d="M4 15.5v3h3v-3M17 15.5v3h3v-3" />
      <path d="M7.5 12.2h9" />
    </>
  ),
  pet: (
    <>
      <ellipse cx="6.5" cy="9.5" rx="1.8" ry="2.3" />
      <ellipse cx="10.5" cy="6.8" rx="1.8" ry="2.3" />
      <ellipse cx="15" cy="6.8" rx="1.8" ry="2.3" />
      <ellipse cx="18.5" cy="10" rx="1.8" ry="2.3" />
      <path d="M12.5 12.5c2.6 0 4.8 2 4.8 4.3 0 1.9-1.5 2.9-3 2.9-1 0-1.4-.4-1.8-.4s-.8.4-1.8.4c-1.5 0-3-1-3-2.9 0-2.3 2.2-4.3 4.8-4.3Z" />
    </>
  ),
  coffee: (
    <>
      <path d="M4.5 9.5h11v5.5a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4V9.5Z" />
      <path d="M15.5 11h1.8a2.5 2.5 0 0 1 0 5h-1.8" />
      <path d="M7 6.5c0-1 .8-1.2.8-2.2M11 6.5c0-1 .8-1.2.8-2.2" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M8.5 20.5h7M12 16.5v4" />
    </>
  ),
  tree: (
    <>
      <path d="M12 3.5 6.5 11h11L12 3.5Z" />
      <path d="M12 8.5 7 15.5h10L12 8.5Z" />
      <path d="M12 15.5v5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
    </>
  ),
  moon: (
    <path d="M20 14.3A8.5 8.5 0 0 1 9.7 4a8.5 8.5 0 1 0 10.3 10.3Z" />
  ),
  bed: (
    <>
      <path d="M3 19.5v-13" />
      <path d="M3 11.5h18v8" />
      <path d="M3 15.5h18" />
      <path d="M6.5 11.5V9a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v2.5" />
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
