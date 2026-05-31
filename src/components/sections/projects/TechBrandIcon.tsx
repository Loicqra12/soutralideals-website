import type { SimpleIcon } from 'simple-icons';

type TechBrandIconProps = {
  icon: SimpleIcon;
  size?: number;
  className?: string;
};

export function TechBrandIcon({ icon, size = 18, className = '' }: TechBrandIconProps) {
  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
