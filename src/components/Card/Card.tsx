import { use, useContext, useState } from "react";
import { getCard } from "@api/sanityClient";
import styles from "./Card.module.css";
import clsx from "clsx";
import { ThemeContext } from "@layouts/PageLayoutWrapper/PageLayoutWrapper";

type Props = { slug: string; collectionSlug?: string };

export const Card = ({ slug, collectionSlug }: Props) => {
  const { theme } = useContext(ThemeContext);
  const card = use(getCard(slug, collectionSlug));
  const [isTurned, setIsTurned] = useState(false);

  return (
    <button
      className={styles.cardContainer}
      onClick={() => setIsTurned((prev) => !prev)}
      aria-label="Turn card around"
    >
      <div
        className={clsx(styles.card, {
          [styles.turnedCard]: isTurned,
        })}
      >
        <img
          className={styles.front}
          src={theme === "light" ? card.imgFrontLightUrl : card.imgFrontDarkUrl}
          alt="Front Light"
        />
        <img
          className={styles.back}
          src={theme === "light" ? card.imgBackLightUrl : card.imgBackDarkUrl}
          alt="Back Light"
        />
      </div>
    </button>
  );
};
