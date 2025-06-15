import { use } from "react";
import { getCardsFromCollection } from "@api/sanityClient";
import styles from "./CardsLinkGrid.module.css";
import { Link } from "react-router";
import { ErrorBoundarySuspense } from "@components/ErrorBoundarySuspense/ErrorBoundarySuspense";
import { Skeleton } from "./components/Skeleton";

type Props = {
  collectionSlug: string;
};

const SuspenseComponent = ({ collectionSlug }: Props) => {
  const { cards } = use(getCardsFromCollection(collectionSlug));

  return (
    <div className={styles.cardsLinkGrid}>
      {cards.map((card) => (
        <Link
          to={`/${card.collectionSlug}/${card.slug}`}
          className={styles.cardLink}
        >
          <img src={card.imgFrontLightUrl} alt="Front Light" />
        </Link>
      ))}
    </div>
  );
};

export const CardsLinkGrid = ({ collectionSlug }: Props) => {
  return (
    <ErrorBoundarySuspense suspenseFallback={<Skeleton />}>
      <SuspenseComponent collectionSlug={collectionSlug} />
    </ErrorBoundarySuspense>
  );
};
