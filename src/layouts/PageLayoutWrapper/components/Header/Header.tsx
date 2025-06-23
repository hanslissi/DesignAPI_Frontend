import { Link } from "react-router";
import styles from "./Header.module.css";
import { DesignApiLogo } from "@components/DesignApiLogo/DesignApiLogo";

import SvgFigmaIcon from "@assets/figma_icon.svg?react";
import { FancyButtonLink } from "@components/FancyButtonLink/FancyButtonLink";

export const Header = () => {
  return (
    <header>
      <nav className={styles.header}>
        <Link to="/">
          <DesignApiLogo size="small" />
        </Link>

        <div className={styles.buttonGroup}>
          <FancyButtonLink
            to="https://www.figma.com"
            Icon={SvgFigmaIcon}
            iconAlt="Figma Icon"
            variant="Secondary"
          >
            Get it on Figma
          </FancyButtonLink>
          <FancyButtonLink
            to="https://www.figma.com"
            Icon={SvgFigmaIcon}
            iconAlt="Figma Icon"
            variant="Primary"
          >
            Order Card Deck
          </FancyButtonLink>
        </div>
      </nav>
    </header>
  );
};
