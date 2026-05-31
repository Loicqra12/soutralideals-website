import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

/** Surface claire unique (inspirée structure agence, teinte verte Soutrali) */
export const servicesSurface = 'bg-[#f4faf6]';

export function ServicesHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg bg-primary-green/15 px-2 py-0.5 text-[#0d1f14]">{children}</span>
  );
}

type PillButtonProps = {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function ServicesPillButton({ to, children, variant = 'primary' }: PillButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2';

  const styles =
    variant === 'primary'
      ? `${base} bg-primary-green text-white hover:bg-primary-green/90`
      : `${base} border border-[#1a1a1a]/15 bg-white text-[#1a1a1a] hover:border-primary-green/40 hover:bg-white`;

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
}

export function ServicesIconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-green/15 text-primary-green">
      {children}
    </span>
  );
}
