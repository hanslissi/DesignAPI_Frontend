import { Link } from "react-router";
import type { SanityCollection } from "../../api/sanityClient";
import styles from "./CollectionPanel.module.css";
import { Icon } from "../Icon/Icon";

type Props = {
  collection: SanityCollection;
};

export const CollectionPanel = ({ collection }: Props) => {
  return (
    <Link
      to={`/${collection.slug}`}
      className={styles.collectionPanel}
      style={{ "--shadow-color": `${collection.color}44` } as React.CSSProperties}
    >
      <Icon src={collection.iconUrl} size={24} alt={`${collection.title} collection icon`}/>
      {collection.title}
    </Link>
  );
};
