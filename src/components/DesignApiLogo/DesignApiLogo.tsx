import { Icon } from "@components/Icon/Icon";
import styles from "./DesignApiLogo.module.css";
import clsx from "clsx";

type Props = {
  size: "big" | "small";
};

export const DesignApiLogo = ({ size }: Props) => {
  return (
    <div
      className={clsx(styles.logo, {
        [styles.big]: size === "big",
        [styles.small]: size === "small",
      })}
    >
      <Icon
        src="/designapi_icon.svg"
        size={size === "big" ? 64 : 24}
        alt="The DesignAPI icon"
      />
      <span>
        The <b>DesignAPI</b>
      </span>
    </div>
  );
};
