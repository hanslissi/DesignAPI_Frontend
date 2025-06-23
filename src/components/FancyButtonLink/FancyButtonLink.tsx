import { SvgIcon, type SvgIconProps } from "@components/Icon/Icon";
import styles from "./FancyButtonLink.module.css";
import clsx from "clsx";
import { Link, type LinkProps } from "react-router";

type Props = {
  to: LinkProps["to"];
  Icon: SvgIconProps["IconComponent"];
  iconAlt: string;
  variant: "Primary" | "Secondary";
  className?: string;
  children?: React.ReactNode;
};

export const FancyButtonLink = ({
  to,
  Icon,
  iconAlt,
  variant,
  className,
  children,
}: Props) => {
  return (
    <Link
      to={to}
      tabIndex={0}
      className={clsx(
        styles.fancyButtonLink,
        styles[`fancyButtonLink${variant}`],
        className
      )}
    >
      <SvgIcon
        size={16}
        IconComponent={Icon}
        alt={iconAlt}
        className={styles.icon}
      />
      <span className={styles.fancyText}>{children}</span>
    </Link>
  );
};
