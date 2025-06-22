import { useParams } from "react-router";
import { PageLayoutWrapper } from "../../layouts/PageLayoutWrapper/PageLayoutWrapper";
import styles from "./CollectionPage.module.css";
import { CardsLinkGrid } from "./components/CardsLinkGrid/CardsLinkGrid";
import { CollectionTitle } from "./components/CollectionTitle/CollectionTitle";

export const CollectionPage = () => {
  const { collectionSlug = "" } = useParams();

  return (
    <PageLayoutWrapper>
      <div className={styles.content}>
        <CollectionTitle collectionSlug={collectionSlug} />

        <section className={styles.cardsGrid}>
          <CardsLinkGrid collectionSlug={collectionSlug} />
        </section>
      </div>
    </PageLayoutWrapper>
  );
};
