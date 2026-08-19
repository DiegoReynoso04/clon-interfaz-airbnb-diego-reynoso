import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb · Alojamientos vacacionales, cabañas y experiencias",
  description:
    "Clon de la interfaz móvil de Airbnb construido con Next.js, React y Tailwind CSS.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // `suppressHydrationWarning`: el script de abajo escribe `data-theme`
    // en el <html> antes de que React hidrate, así que el atributo del
    // servidor y el del cliente no coinciden a propósito.
    <html
      lang="es"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="bg-background text-foreground flex min-h-full flex-col font-sans">
        <div className="flex flex-1 flex-col pb-(--spacing-bottom-nav)">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
