import { use } from "react";
import { getCardsFromCollection } from "../../api/sanityClient";
import styles from "./CardsLinkGrid.module.css";
import { Link } from "react-router";

type Props = {
  collectionSlug: string;
};

export const CardsLinkGrid = ({ collectionSlug }: Props) => {
  const cards = use(getCardsFromCollection(collectionSlug));

  return (
    <div className={styles.collectionsGrid}>
      {cards.map((card) => (
        <Link to={`/${card.collectionSlug}/${card.slug}`}>
          <h2>{card.title}</h2>
          <img src={card.imgFrontLightUrl} alt="Front Light" />
        </Link>
      ))}
    </div>
  );
};
