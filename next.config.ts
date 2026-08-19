import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * En desarrollo, Next.js bloquea las peticiones a `/_next/*` que no vengan
   * de `localhost`. Sin esto, abrir la app por la IP de la red local (para
   * probarla en el móvil) devuelve 403 en todos los chunks y React no hidrata.
   */
  allowedDevOrigins: ["192.168.1.132", "*.local"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
