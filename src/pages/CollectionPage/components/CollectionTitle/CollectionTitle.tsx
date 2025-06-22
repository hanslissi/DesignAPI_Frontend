import { use } from "react";
import { getCollection } from "@api/sanityClient";
import { Icon } from "@components/Icon/Icon";
import { ErrorBoundarySuspense } from "@components/ErrorBoundarySuspense/ErrorBoundarySuspense";
import { SkeletonCard } from "@components/SkeletonCard/SkeletonCard";
import styles from "./CollectionTitle.module.css";

type Props = {
  collectionSlug: string;
};

const SuspenseComponent = ({ collectionSlug }: Props) => {
  const { title, iconUrl } = use(getCollection(collectionSlug));

  return (
    <h1 className={styles.collectionTitle}>
      <Icon src={iconUrl} size={64} alt={`${title} collection icon`} />
      <span>{title}</span>
    </h1>
  );
};

export const CollectionTitle = ({ collectionSlug }: Props) => {
  return (
    <ErrorBoundarySuspense
      suspenseFallback={<SkeletonCard className={styles.skeleton} />}
    >
      <SuspenseComponent collectionSlug={collectionSlug} />
    </ErrorBoundarySuspense>
  );
};
