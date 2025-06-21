export type Theme = "light" | "dark";

export const getPreferredTheme = (): Theme => {
  return window.matchMedia("(prefers-color-scheme: light)") ? "light" : "dark";
};
