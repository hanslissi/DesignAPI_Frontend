import { use, useContext } from "react";
import { getCardsFromCollection } from "@api/sanityClient";
import styles from "./CardsLinkGrid.module.css";
import { Link } from "react-router";
import { ErrorBoundarySuspense } from "@components/ErrorBoundarySuspense/ErrorBoundarySuspense";
import { Skeleton } from "./components/Skeleton";
import { ThemeContext } from "@layouts/PageLayoutWrapper/PageLayoutWrapper";

type Props = {
  collectionSlug: string;
};

const SuspenseComponent = ({ collectionSlug }: Props) => {
  const { theme } = useContext(ThemeContext);
  const { cards } = use(getCardsFromCollection(collectionSlug));

  return (
    <div className={styles.cardsLinkGrid}>
      {cards.map((card, index) => (
        <Link
          to={`/${card.collectionSlug}/${card.slug}`}
          className={styles.cardLink}
          key={`${card.slug}.${index}`}
          style={
            {
              "--animation-delay": `${index * 0.2}s`,
            } as React.CSSProperties
          }
        >
          <img
            src={
              theme === "light" ? card.imgFrontLightUrl : card.imgFrontDarkUrl
            }
            alt="Front Light"
          />
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
