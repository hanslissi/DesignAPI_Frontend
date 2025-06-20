import { use, useState } from "react";
import { getCard } from "@api/sanityClient";
import styles from "./Card.module.css";
import clsx from "clsx";

type Props = { slug: string; collectionSlug?: string };

export const Card = ({ slug, collectionSlug }: Props) => {
  const card = use(getCard(slug, collectionSlug));
  const [isTurned, setIsTurned] = useState(false);

  return (
    <button className={styles.cardContainer} onClick={() => setIsTurned(prev => !prev)} aria-label="Turn card around">
      <div className={clsx(styles.card, {
        [styles.turnedCard]: isTurned
      })}>
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
    </button>
  );
};
