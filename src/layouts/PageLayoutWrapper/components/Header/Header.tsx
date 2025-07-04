import { Link } from "react-router";
import styles from "./Header.module.css";
import { DesignApiLogo } from "@components/DesignApiLogo/DesignApiLogo";
import { FancyButton } from "@components/FancyButton/FancyButton";
import { ThemeContext } from "@layouts/PageLayoutWrapper/PageLayoutWrapper";
import { useContext } from "react";

import SvgDownloadIcon from "@assets/download_icon.svg?react";
import SvgLightmodeIcon from "@assets/lightmode_icon.svg?react";
import SvgDarkmodeIcon from "@assets/darkmode_icon.svg?react";
import SvgAutomodeIcon from "@assets/automode_icon.svg?react";
import { toTitleCase } from "../../../../util/stringUtils";
import clsx from "clsx";

export const Header = () => {
  const { themeSetting, toggleThemeSetting } = useContext(ThemeContext);

  const ThemeIcon =
    themeSetting === "light"
      ? SvgLightmodeIcon
      : themeSetting === "dark"
      ? SvgDarkmodeIcon
      : SvgAutomodeIcon;

  return (
    <header>
      <nav className={styles.header}>
        <div className={styles.buttonGroup}>
          <Link to="/" className={styles.homeLink}>
            <DesignApiLogo size="small" />
          </Link>
          <FancyButton
            as="button"
            onClick={toggleThemeSetting}
            Icon={ThemeIcon}
            iconAlt="Theme icon"
            variant="Secondary"
          >
            {toTitleCase(themeSetting)}
          </FancyButton>
        </div>

        <div className={clsx(styles.buttonGroup, styles.actionButtons)}>
          <FancyButton
            as="link"
            to="/resources"
            Icon={SvgDownloadIcon}
            iconAlt="Figma Icon"
            variant="Primary"
          >
            Free Resources
          </FancyButton>
        </div>
      </nav>
    </header>
  );
};
