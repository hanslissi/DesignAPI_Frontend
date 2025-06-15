import { use } from "react";
import { getCard } from "@api/sanityClient";
import styles from "./Card.module.css";

type Props = { slug: string; collectionSlug?: string };

export const Card = ({ slug, collectionSlug }: Props) => {
  const card = use(getCard(slug, collectionSlug));

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img
          className={styles.front}
          src={card.imgFrontLightUrl}
          alt="Front Light"
        />
        <img
          className={styles.back}
          src={card.imgBackLightUrl}
          alt="Back Light"
        />
      </div>
    </div>
  );
};
