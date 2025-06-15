import { useParams } from "react-router";
import { PageLayoutWrapper } from "../../layouts/PageLayoutWrapper/PageLayoutWrapper";
import styles from "./CollectionPage.module.css";
import { CardsLinkGrid } from "./components/CardsLinkGrid/CardsLinkGrid";

export const CollectionPage = () => {
  const { collectionSlug = "" } = useParams();

  return (
    <PageLayoutWrapper>
      <div className={styles.content}>
        <h1 className={styles.collectionTitle}>
          <span>Collection Title</span>
        </h1>

        <section className={styles.cardsGrid}>
          <CardsLinkGrid collectionSlug={collectionSlug} />
        </section>
      </div>
    </PageLayoutWrapper>
  );
};
