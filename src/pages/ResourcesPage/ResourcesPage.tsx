import { DividerHeadline } from "../../components/DividerHeadline/DividerHeadline";
import { PageLayoutWrapper } from "../../layouts/PageLayoutWrapper/PageLayoutWrapper";
import { ResourcesList } from "./components/ResourcesList";
import styles from "./ResourcesPage.module.css";

export const ResourcesPage = () => {
  return (
    <PageLayoutWrapper>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span><b>Free</b> Resources</span>
            <span>
              Woohoo! <b>Free</b> stuff!
            </span>
          </h1>

          <div className={styles.sections}>
            <section>
              <DividerHeadline>Figma Community</DividerHeadline>
              <ResourcesList resourceType="links"/>
            </section>
            <section>
              <DividerHeadline>Print at Home</DividerHeadline>
              <ResourcesList resourceType="files"/>
            </section>
          </div>

        </div>
      </div>
    </PageLayoutWrapper>
  );
};
