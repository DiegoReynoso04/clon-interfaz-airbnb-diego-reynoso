export type Theme = "light" | "dark";

/** Clave de `localStorage` donde se guarda la preferencia del usuario. */
export const THEME_STORAGE_KEY = "theme";

/**
 * Script que se inyecta en el `<head>` y se ejecuta antes del primer
 * pintado. Decide el tema en este orden:
 *
 *   1. Lo que el usuario eligió y quedó guardado en `localStorage`.
 *   2. Si no ha elegido nada, la preferencia del sistema operativo.
 *
 * Va en línea y de forma síncrona a propósito: si esperásemos a que React
 * hidratase, la página se pintaría un instante en claro antes de saltar a
 * oscuro (el clásico "flash" blanco).
 */
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

/** Tema activo según el DOM. En el servidor devuelve siempre "light". */
export function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

/** Aplica un tema y lo guarda como preferencia del usuario. */
export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Modo incógnito con almacenamiento bloqueado: el tema se aplica
    // igualmente, solo que no se recordará en la próxima visita.
  }
}
