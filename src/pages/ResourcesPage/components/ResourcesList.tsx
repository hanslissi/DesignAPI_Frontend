import { use } from "react";
import { getResources, type SanityResource } from "@api/sanityClient";
import { ErrorBoundarySuspense } from "@components/ErrorBoundarySuspense/ErrorBoundarySuspense";
import { SkeletonCard } from "@components/SkeletonCard/SkeletonCard";
import { Link } from "react-router";
import { SvgIcon } from "@components/Icon/Icon";
import styles from "./ResourcesList.module.css";

import SvgExternalLinkIcon from "@assets/external_link_icon.svg?react";
import SvgDownloadIcon from "@assets/download_icon.svg?react";
import clsx from "clsx";

type Props = {
  resourceType: "links" | "files";
};

const SuspenseComponent = ({ resourceType }: Props) => {
  const resources = use(getResources);
  const filteredResources = resources
    .map((res) => {
      const linkUrl =
        resourceType === "files" ? res.resourceFileUrl : res.resourceUrl;
      return linkUrl ? { ...res, linkUrl } : null;
    })
    .filter((res): res is SanityResource & { linkUrl: string } => res !== null);

  return (
    <div className={styles.resourcesList}>
      {filteredResources.map((res, idx) => (
        <Link
          to={res.linkUrl}
          className={styles.resourceLink}
          key={`resource${idx}`}
        >
          <img
            src={res.imgThumbnailUrl}
            alt={`Thumbnail for ${res.title} resource`}
          />

          <div className={styles.resourceInfo}>
            <div className={styles.resourceHeader}>
              <h3>{res.title}</h3>
              <SvgIcon
                className={styles.icon}
                IconComponent={
                  resourceType === "files"
                    ? SvgDownloadIcon
                    : SvgExternalLinkIcon
                }
                size={18}
                alt={
                  resourceType === "files"
                    ? "Download Icon"
                    : "External Link Icon"
                }
              />
            </div>

            <p>{res.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className={clsx(styles.resourcesList, styles.skeleton)}>
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export const ResourcesList = ({ resourceType }: Props) => {
  return (
    <ErrorBoundarySuspense suspenseFallback={<Skeleton />}>
      <SuspenseComponent resourceType={resourceType} />
    </ErrorBoundarySuspense>
  );
};
