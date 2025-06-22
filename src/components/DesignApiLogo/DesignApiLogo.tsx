import { SvgIcon } from "@components/Icon/Icon";
import styles from "./DesignApiLogo.module.css";
import clsx from "clsx";

import SvgDesignApiIcon from "@assets/designapi_icon.svg?react";

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
      <SvgIcon
        IconComponent={SvgDesignApiIcon}
        size={size === "big" ? 64 : 24}
        alt="The DesignAPI icon"
      />
      <span>
        The <b>DesignAPI</b>
      </span>
    </div>
  );
};
