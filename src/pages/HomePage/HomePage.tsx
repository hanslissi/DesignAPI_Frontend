import { CollectionsLinkGrid } from "../../components/CollectionsLinkGrid/CollectionsLinkGrid";
import { DividerHeadline } from "../../components/DividerHeadline/DividerHeadline";
import { MessageCard } from "../../components/MessageCard/MessageCard";
import { PageLayoutWrapper } from "../../layouts/PageLayoutWrapper/PageLayoutWrapper";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <PageLayoutWrapper>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>
            The <b>DesignAPI</b>
          </span>
          <span>
            A <b>Shared Interface</b> Between <b>Design</b> and <b>Code</b>.
          </span>
        </h1>

        

        <div className={styles.sections}>
          <section>
            <DividerHeadline>Card Collections</DividerHeadline>
            <CollectionsLinkGrid />
          </section>
          <section>
            <DividerHeadline>Message Templates</DividerHeadline>
            <p>
              <b>{"<"}</b>Available as a <b>Figma file{"/>"}</b>
            </p>
          </section>
        </div>

        <MessageCard>
          Hi! I’m Johannes Riedmüller. What I built here is the practical part
          of my bachelor thesis. The goal of these educational cards is to make
          UI Design and Development work better together.
        </MessageCard>
      </div>
    </PageLayoutWrapper>
  );
};
