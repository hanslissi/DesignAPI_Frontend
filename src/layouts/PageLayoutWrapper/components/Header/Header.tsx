import { Link } from "react-router";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">The DesignAPI</Link>
      </nav>
    </header>
  );
};
