import { MessageCard } from "@components/MessageCard/MessageCard";
import styles from "./OhNoErrorDisplay.module.css";

export type ErrorDisplaySize = "big" | "small";

type Props = {
  size?: ErrorDisplaySize;
};

export const OhNoErrorDisplay = ({ size = "big" }: Props) => {
  return (
    <div className={styles.errorDisplay}>
      {size === "big" && (
        <>
          <img
            src="/404.png"
            alt="Illustration of disconnected cables indicating an error has happened"
          />
          <h2>Oh no...</h2>
        </>
      )}
      <MessageCard>
        Can’t find what you’re looking for...{" "}
        <b>Tip: Check your URL or internet connection 🤫</b>
      </MessageCard>
    </div>
  );
};
