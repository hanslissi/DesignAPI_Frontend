import { SkeletonCard } from "../../SkeletonCard/SkeletonCard";
import styles from "./Skeleton.module.css";

export const Skeleton = () => {
  return (
    <div className={styles.collectionsGrid}>
      {[...Array(7)].map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
};
