import clsx from "clsx";
import styles from "./Icon.module.css";

export const ICON_SIZES = [8, 12, 16, 18, 20, 22, 24, 64] as const;
type IconSize = (typeof ICON_SIZES)[number];

type Props = {
  size: IconSize;
  src: string;
  alt: string;
  className?: string;
};

export const Icon = ({ size, src, alt, className }: Props) => {
  return (
    <img
      src={src}
      className={clsx(styles.icon, className)}
      style={{ "--icon-size": size } as React.CSSProperties}
      alt={alt}
    />
  );
};

type SvgProps = {
  size: IconSize;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  alt: string;
  className?: string;
};

export const SvgIcon = ({ size, IconComponent, alt, className }: SvgProps) => {
  return (
    <IconComponent
      className={clsx(styles.icon, className)}
      style={{ "--icon-size": size } as React.CSSProperties}
      aria-label={alt}
    />
  );
};
