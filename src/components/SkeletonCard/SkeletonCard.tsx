import clsx from "clsx";
import styles from "./SkeletonCard.module.css";

type Props = {
  className?: string;
  delay?: number;
};

export const SkeletonCard = ({ className, delay = 0 }: Props) => {
  return (
    <div
      className={clsx(styles.skeleton, className)}
      style={{ "--animation-delay": `${delay}s` } as React.CSSProperties}
    />
  );
};
