import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_KEY_THEME } from "../util/constants";
import { getPreferredTheme, type Theme } from "../util/getPreferredTheme";

type ThemeSetting = "light" | "dark" | "auto";

export type ThemeConfig = {
  theme: Theme;
  themeSetting: ThemeSetting;
  toggleThemeSetting: () => void;
};

const isThemeSetting = (value: unknown): value is ThemeSetting => {
  return (
    value != null &&
    typeof value === "string" &&
    (value === "light" || value === "dark" || value === "auto")
  );
};

const getTheme = (themeSetting: unknown): Theme => {
  if (isThemeSetting(themeSetting) && themeSetting !== "auto") {
    return themeSetting === "light" ? "light" : "dark";
  }
  return getPreferredTheme();
};

const getThemeSetting = (themeSetting: unknown): ThemeSetting => {
  return isThemeSetting(themeSetting) ? themeSetting : "auto";
};

export const useTheme = (): ThemeConfig => {
  const { value, setValue } = useLocalStorage(STORAGE_KEY_THEME);
  const [themeSetting, setThemeSetting] = useState<ThemeSetting>(
    getThemeSetting(value)
  );
  const [theme, setTheme] = useState<Theme>(getTheme(value));

  useEffect(() => {
    const newSetting: ThemeSetting = getThemeSetting(value);
    setThemeSetting(newSetting);
    setTheme(getTheme(newSetting));
  }, [value]);

  useEffect(() => {
    if (themeSetting !== "auto") return;

    const matchMedia = window.matchMedia("(prefers-color-scheme: light)");
    const handleChangePrefersColorScheme = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "light" : "dark");
    };

    matchMedia.addEventListener("change", handleChangePrefersColorScheme);
    return () => {
      matchMedia.removeEventListener("change", handleChangePrefersColorScheme);
    };
  }, [themeSetting]);

  const toggleThemeSetting = () => {
    let newThemeSetting: ThemeSetting = themeSetting;
    switch (themeSetting) {
      case "light":
        newThemeSetting = "dark";
        break;
      case "dark":
        newThemeSetting = "auto";
        break;
      default:
        newThemeSetting = "light";
    }
    setValue(newThemeSetting);
  };

  return {
    theme,
    themeSetting,
    toggleThemeSetting,
  };
};
