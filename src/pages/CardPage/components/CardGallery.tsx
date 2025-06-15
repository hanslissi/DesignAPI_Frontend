import { ErrorBoundarySuspense } from "@components/ErrorBoundarySuspense/ErrorBoundarySuspense";
import { SkeletonCard } from "@components/SkeletonCard/SkeletonCard";
import { getCardsFromCollection } from "@api/sanityClient";
import { use } from "react";
import { Link } from "react-router";
import { Card } from "@components/Card/Card";
import styles from "./CardGallery.module.css";

type Props = {
  collectionSlug: string;
  cardSlug: string;
};

const SuspenseComponent = ({ collectionSlug, cardSlug }: Props) => {
  const { cards } = use(getCardsFromCollection(collectionSlug));
  const currIdx = cards.findIndex((card) => card.slug === cardSlug);
  const nextCardSlug =
    currIdx !== -1
      ? cards[(currIdx + cards.length + 1) % cards.length].slug
      : null;
  const prevCardSlug =
    currIdx !== -1
      ? cards[(currIdx + cards.length - 1) % cards.length].slug
      : null;

  return (
    <div className={styles.cardGallery}>
      <nav className={styles.galleryNav}>
        {nextCardSlug && prevCardSlug && (
          <>
            <Link to={`/${collectionSlug}/${prevCardSlug}`}>Prev</Link>
            <Link to={`/${collectionSlug}/${nextCardSlug}`}>Next</Link>
          </>
        )}
      </nav>
      <div className={styles.cardDisplay}>
        <Card slug={cardSlug} collectionSlug={collectionSlug} />
      </div>
    </div>
  );
};

export const CardGallery = ({ collectionSlug, cardSlug }: Props) => {
  return (
    <ErrorBoundarySuspense suspenseFallback={<SkeletonCard />}>
      <SuspenseComponent collectionSlug={collectionSlug} cardSlug={cardSlug} />
    </ErrorBoundarySuspense>
  );
};
