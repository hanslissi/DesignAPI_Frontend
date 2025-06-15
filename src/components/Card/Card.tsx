import { use } from "react";
import { getCard } from "../../api/sanityClient";

type Props = { slug: string };

export const Card = ({ slug }: Props) => {
  const card = use(getCard(slug));

  return (
    <div>
      <h2>{card.title}</h2>
      <img src={card.imgFrontLightUrl} alt="Front Light" />
    </div>
  );
};
