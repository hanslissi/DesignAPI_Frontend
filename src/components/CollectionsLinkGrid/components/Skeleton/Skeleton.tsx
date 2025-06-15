import { SkeletonCard } from "../../../SkeletonCard/SkeletonCard";
import styles from "./Skeleton.module.css";

export const Skeleton = () => {
  return (
    <div className={styles.collectionsGrid}>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};
