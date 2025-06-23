import { use } from "react";
import { getCollections } from "@api/sanityClient";
import { CollectionPanel } from "../CollectionPanel/CollectionPanel";
import { ErrorBoundarySuspense } from "../ErrorBoundarySuspense/ErrorBoundarySuspense";
import { SkeletonCard } from "@components/SkeletonCard/SkeletonCard";
import styles from "./CollectionsLinkGrid.module.css";
import clsx from "clsx";

const SuspenseComponent = () => {
  const collections = use(getCollections);

  return (
    <div className={styles.collectionsGrid}>
      {collections.map((collection, index) => (
        <CollectionPanel
          collection={collection}
          key={`${collection.slug}.${index}`}
        />
      ))}
    </div>
  );
};

const Skeleton = () => (
  <div className={clsx(styles.collectionsGrid, styles.skeleton)}>
    {[...Array(7)].map((_, idx) => (
      <SkeletonCard key={idx} />
    ))}
  </div>
);

export const CollectionsLinkGrid = () => {
  return (
    <ErrorBoundarySuspense suspenseFallback={<Skeleton />}>
      <SuspenseComponent />
    </ErrorBoundarySuspense>
  );
};
