import { useParams } from "react-router";
import { ErrorBoundarySuspense } from "../components/ErrorBoundarySuspense/ErrorBoundarySuspense";
import { Card } from "../components/Card/Card";

export const CardPage = () => {
  const { cardSlug = '' } = useParams();

  return (
    <main>
      <h1>Hello</h1>

      <ErrorBoundarySuspense
        suspenseFallback={<div>Loading CardsLinkGrid</div>}
      >
        <Card slug={cardSlug}/>
      </ErrorBoundarySuspense>
    </main>
  );
};
