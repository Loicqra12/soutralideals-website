import { useId } from 'react';

type Props = { className?: string };

const IllPresence = ({ className }: Props) => {
  const uid = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden>
      <rect width="200" height="120" rx="12" fill="#e8eaef" />
      <rect x="24" y="20" width="152" height="72" rx="8" fill="#fff" stroke="#d1d5db" strokeWidth="1.5" />
      <rect x="36" y="32" width="56" height="6" rx="3" fill={`url(#${uid}-g)`} />
      <rect x="36" y="44" width="88" height="4" rx="2" fill="#e2e8f0" />
      <rect x="36" y="54" width="72" height="4" rx="2" fill="#e2e8f0" />
      <rect x="36" y="68" width="40" height="14" rx="7" fill="#c9a227" opacity="0.85" />
      <defs>
        <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#22c55e" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const IllCroissance = ({ className }: Props) => {
  const uid = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden>
      <rect width="200" height="120" rx="12" fill="#e8eaef" />
      <rect x="20" y="18" width="72" height="84" rx="6" fill="#1e293b" />
      <rect x="28" y="28" width="56" height="40" rx="4" fill="#0f172a" />
      <path d="M34 58h44M34 50h32" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      <rect x="104" y="28" width="76" height="56" rx="6" fill="#fff" stroke="#d1d5db" />
      <path d={`M112 72 L128 52 L144 62 L168 38`} stroke={`url(#${uid}-l)`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id={`${uid}-l`} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#22c55e" />
          <stop offset="1" stopColor="#c9a227" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const IllVente = ({ className }: Props) => {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden>
      <rect width="200" height="120" rx="12" fill="#e8eaef" />
      <rect x="28" y="24" width="64" height="64" rx="8" fill="#fff" stroke="#d1d5db" />
      <rect x="36" y="32" width="48" height="36" rx="4" fill="#fef3c7" />
      <circle cx="52" cy="48" r="10" fill="#fbbf24" opacity="0.5" />
      <rect x="104" y="36" width="68" height="40" rx="8" fill="#1e293b" />
      <rect x="112" y="48" width="52" height="8" rx="4" fill="#22c55e" opacity="0.8" />
      <circle cx="156" cy="52" r="6" fill="#c9a227" />
      <path d="M44 88h24l-6 12H38z" fill="#c9a227" opacity="0.7" />
    </svg>
  );
};

const IllEcosysteme = ({ className }: Props) => {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden>
      <rect width="200" height="120" rx="12" fill="#e8eaef" />
      <rect x="24" y="22" width="48" height="76" rx="10" fill="#c9a227" opacity="0.9" />
      <rect x="32" y="34" width="32" height="44" rx="4" fill="#fef9c3" opacity="0.4" />
      <rect x="80" y="28" width="96" height="52" rx="8" fill="#1e293b" />
      <rect x="88" y="36" width="80" height="32" rx="4" fill="#0f172a" />
      <circle cx="100" cy="78" r="8" fill="#3b82f6" opacity="0.6" />
      <circle cx="128" cy="78" r="8" fill="#22c55e" opacity="0.6" />
      <circle cx="156" cy="78" r="8" fill="#c9a227" opacity="0.6" />
    </svg>
  );
};

export const categoryIllustrations = {
  presence: IllPresence,
  croissance: IllCroissance,
  vente: IllVente,
  ecosysteme: IllEcosysteme,
} as const;
