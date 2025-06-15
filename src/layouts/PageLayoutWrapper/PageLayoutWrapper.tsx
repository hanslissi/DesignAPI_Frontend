import { Header } from "./components";
import styles from "./PageLayoutWrapper.module.css";

type Props = {
  children: React.ReactNode;
};

export const PageLayoutWrapper = ({ children }: Props) => {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};
