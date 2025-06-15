import { use } from "react";
import { getCollections } from "@api/sanityClient";
import { CollectionPanel } from "../CollectionPanel/CollectionPanel";
import styles from "./CollectionsLinkGrid.module.css";
import { ErrorBoundarySuspense } from "../ErrorBoundarySuspense/ErrorBoundarySuspense";
import { Skeleton } from "./components/Skeleton";

const SuspenseComponent = () => {
  const collections = use(getCollections);

  return (
    <div className={styles.collectionsGrid}>
      {collections.map((collection) => (
        <CollectionPanel collection={collection} />
      ))}
    </div>
  );
};

export const CollectionsLinkGrid = () => {
  return (
    <ErrorBoundarySuspense suspenseFallback={<Skeleton />}>
      <SuspenseComponent />
    </ErrorBoundarySuspense>
  );
};
