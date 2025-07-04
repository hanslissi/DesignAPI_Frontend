import { ErrorBoundarySuspense } from "@components/ErrorBoundarySuspense/ErrorBoundarySuspense";
import { SkeletonCard } from "@components/SkeletonCard/SkeletonCard";
import { getCardsFromCollection } from "@api/sanityClient";
import { use } from "react";
import { Link } from "react-router";
import { Card } from "@components/Card/Card";
import styles from "./CardGallery.module.css";
import clsx from "clsx";
import { SvgIcon } from "@components/Icon/Icon";

import SvgArrowLeftIcon from "@assets/arrow_left_icon.svg?react";
import SvgArrowRightIcon from "@assets/arrow_right_icon.svg?react";

type Props = {
  collectionSlug: string;
  cardSlug: string;
};

const SuspenseComponent = ({ collectionSlug, cardSlug }: Props) => {
  const {
    cards,
    collection: { color },
  } = use(getCardsFromCollection(collectionSlug));
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
    <div
      className={styles.cardGallery}
      style={
        {
          "--shadow-color": `${color}44`,
          "--collection-color": `${color}`,
        } as React.CSSProperties
      }
    >
      <div className={styles.cardDisplay}>
        <Card slug={cardSlug} collectionSlug={collectionSlug} />
      </div>

      <nav className={styles.galleryNav}>
        {nextCardSlug && prevCardSlug && (
          <>
            <Link
              to={`/collections/${collectionSlug}/${prevCardSlug}`}
              className={clsx(styles.navButton, styles.prevButton)}
              aria-label="Previous Card"
            >
              <SvgIcon
                className={styles.icon}
                IconComponent={SvgArrowLeftIcon}
                size={24}
                alt="Previous Card Icon"
              />
            </Link>
            <Link
              to={`/collections/${collectionSlug}/${nextCardSlug}`}
              className={clsx(styles.navButton, styles.nextButton)}
              aria-label="Next Card"
            >
              <SvgIcon
                className={styles.icon}
                IconComponent={SvgArrowRightIcon}
                size={24}
                alt="Previous Card Icon"
              />
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export const CardGallery = ({ collectionSlug, cardSlug }: Props) => {
  return (
    <ErrorBoundarySuspense
      suspenseFallback={<SkeletonCard className={styles.skeleton} />}
    >
      <SuspenseComponent collectionSlug={collectionSlug} cardSlug={cardSlug} />
    </ErrorBoundarySuspense>
  );
};
