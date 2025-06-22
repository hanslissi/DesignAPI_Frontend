import clsx from "clsx";
import { Header } from "./components";
import styles from "./PageLayoutWrapper.module.css";
import { useTheme, type ThemeConfig } from "../../hooks/useTheme";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeConfig>({
  theme: "light",
  themeSetting: "auto",
  toggleThemeSetting: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const PageLayoutWrapper = ({ children }: Props) => {
  const themeConfig = useTheme();

  return (
    <ThemeContext value={themeConfig}>
      <div
        className={clsx(styles.pageLayout, {
          darkTheme: themeConfig.theme === "dark",
          lightTheme: themeConfig.theme === "light",
        })}
        style={
          {
            "--background-url":
              themeConfig.theme === "dark"
                ? "url('/dot_grid_pattern_dark.png')"
                : "url('/dot_grid_pattern.png')",
          } as React.CSSProperties
        }
      >
        <Header />
        <button onClick={() => themeConfig.toggleThemeSetting()}>
          Toggle Theme {themeConfig.themeSetting}
        </button>

        <main className={styles.mainContent}>{children}</main>
      </div>
    </ThemeContext>
  );
};
