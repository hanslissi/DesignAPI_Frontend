import { SkeletonCard } from "@components/SkeletonCard/SkeletonCard";
import styles from "./Skeleton.module.css";

export const Skeleton = () => {
  return (
    <div className={styles.cardsLinkGrid}>
      {[...Array(4)].map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
};
