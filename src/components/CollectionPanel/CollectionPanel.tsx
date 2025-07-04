import { Link } from "react-router";
import type { SanityCollection } from "@api/sanityClient";
import styles from "./CollectionPanel.module.css";
import { Icon } from "../Icon/Icon";

type Props = {
  collection: SanityCollection;
};

export const CollectionPanel = ({
  collection: { title, slug, iconUrl, color },
}: Props) => {
  return (
    <Link
      to={`/collections/${slug}`}
      className={styles.collectionPanel}
      style={{ "--shadow-color": `${color}44` } as React.CSSProperties}
    >
      <Icon src={iconUrl} size={24} alt={`${title} collection icon`} />
      {title}
    </Link>
  );
};
