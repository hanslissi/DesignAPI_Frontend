import { Link } from "react-router";
import styles from "./Header.module.css";
import { DesignApiLogo } from "@components/DesignApiLogo/DesignApiLogo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">
          <DesignApiLogo size="small" />
        </Link>
      </nav>
    </header>
  );
};
