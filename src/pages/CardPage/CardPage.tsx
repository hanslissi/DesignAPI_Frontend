import { useParams } from "react-router";
import { PageLayoutWrapper } from "../../layouts/PageLayoutWrapper/PageLayoutWrapper";
import { CardGallery } from "./components/CardGallery";

export const CardPage = () => {
  const { collectionSlug = "", cardSlug = "" } = useParams();

  return <PageLayoutWrapper key={`${collectionSlug}/${cardSlug}`}>
    <CardGallery collectionSlug={collectionSlug} cardSlug={cardSlug}/>
  </PageLayoutWrapper>;
};
