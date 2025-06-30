import { SvgIcon, type SvgIconProps } from "@components/Icon/Icon";
import styles from "./FancyButton.module.css";
import clsx from "clsx";
import { Link, type LinkProps } from "react-router";

type Props = (
  | {
      as: "link";
      to: LinkProps["to"];
      onClick?: never;
    }
  | {
      as: "button";
      onClick: () => void;
      to?: never;
    }
) & {
  Icon: SvgIconProps["IconComponent"];
  iconAlt: string;
  variant: "Primary" | "Secondary";
  className?: string;
  children?: React.ReactNode;
};

export const FancyButton = ({
  as,
  to,
  onClick,
  Icon,
  iconAlt,
  variant,
  className,
  children,
}: Props) => {
  const Content = (
    <>
      <SvgIcon
        size={20}
        IconComponent={Icon}
        alt={iconAlt}
        className={styles.icon}
      />
      <span className={styles.fancyText}>{children}</span>
    </>
  );

  if (as === "button") {
    return (
      <button
        onClick={onClick}
        className={clsx(
          styles.fancyButton,
          styles[`fancyButton${variant}`],
          className
        )}
      >
        {Content}
      </button>
    );
  }

  return (
    <Link
      to={to}
      tabIndex={0}
      className={clsx(
        styles.fancyButton,
        styles[`fancyButton${variant}`],
        className
      )}
    >
      {Content}
    </Link>
  );
};
