import clsx from "clsx";
import styles from "./SkeletonCard.module.css";

type Props = {
  className?: string;
};

export const SkeletonCard = ({ className }: Props) => {
  return <div className={clsx(styles.skeleton, className)} />;
};
