import { useParams } from "react-router";
import { CardsLinkGrid } from "../components/CardsLinkGrid/CardsLinkGrid";
import { ErrorBoundarySuspense } from "../components/ErrorBoundarySuspense/ErrorBoundarySuspense";
import { PageLayoutWrapper } from "../layouts/PageLayoutWrapper/PageLayoutWrapper";

export const CollectionPage = () => {
  const { collectionSlug = "" } = useParams();

  return (
    <PageLayoutWrapper>
      <h1>Hello</h1>

      <ErrorBoundarySuspense
        suspenseFallback={<div>Loading CardsLinkGrid</div>}
      >
        <CardsLinkGrid collectionSlug={collectionSlug} />
      </ErrorBoundarySuspense>
    </PageLayoutWrapper>
  );
};
