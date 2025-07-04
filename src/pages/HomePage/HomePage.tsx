import { DesignApiLogo } from "@components/DesignApiLogo/DesignApiLogo";
import { CollectionsLinkGrid } from "../../components/CollectionsLinkGrid/CollectionsLinkGrid";
import { DividerHeadline } from "../../components/DividerHeadline/DividerHeadline";
import { MessageCard } from "../../components/MessageCard/MessageCard";
import { PageLayoutWrapper } from "../../layouts/PageLayoutWrapper/PageLayoutWrapper";
import styles from "./HomePage.module.css";
import { Link } from "react-router";

export const HomePage = () => {
  return (
    <PageLayoutWrapper>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <DesignApiLogo size="big" />
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
                <b>{"<"}</b>Available as a <b>Figma file</b> as a Free Resource
                <b>{"/>"}</b>
              </p>
            </section>
          </div>

          <MessageCard>
            Hi! I’m Johannes Riedmüller . What I built here is the practical
            part of my <b>bachelor thesis</b>. The goal of these educational
            cards is to make UI Design and Development work better together!{" "}
            <br />I hope they can help you and your collegues and boost
            collaboration. Any feedback is appreciated, just drop me a message
            on{" "}
            <Link
              className={styles.linkedInLink}
              to="https://www.linkedin.com/in/johannes-riedm%C3%BCller-87a643317/"
            >
              LinkedIn!
            </Link>
          </MessageCard>
        </div>
      </div>
    </PageLayoutWrapper>
  );
};
