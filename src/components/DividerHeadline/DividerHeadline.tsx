import styles from "./DividerHeadline.module.css";

type Props = {
  children: React.ReactNode;
};

export const DividerHeadline = ({ children }: Props) => {
  return <h2 className={styles.dividerHeadline}>{children}</h2>;
};
