import { motion, useReducedMotion } from 'framer-motion';
import { useId } from 'react';

type EcosystemFlowConnectorProps = {
  className?: string;
};

export function EcosystemFlowConnector({ className = '' }: EcosystemFlowConnectorProps) {
  const reduced = useReducedMotion();
  const uid = useId().replace(/:/g, '');
  const gradId = `flow-grad-${uid}`;

  return (
    <svg
      className={`pointer-events-none h-8 w-full min-w-[2rem] flex-1 text-primary-green/50 lg:h-12 ${className}`}
      viewBox="0 0 120 48"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(142, 71%, 45%)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="hsl(142, 71%, 45%)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        d="M 4 24 C 40 8, 80 40, 116 24"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 8"
        className="opacity-60"
      />
      {!reduced &&
        [0, 0.35, 0.7].map((delay, i) => (
          <motion.circle
            key={i}
            r="3.5"
            fill="hsl(142, 71%, 55%)"
            filter="drop-shadow(0 0 4px hsl(142, 71%, 45%))"
            initial={{ offsetDistance: '0%', opacity: 0.4 }}
            animate={{ offsetDistance: '100%', opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'linear',
              delay,
            }}
            style={{
              offsetPath: "path('M 4 24 C 40 8, 80 40, 116 24')",
            }}
          />
        ))}
    </svg>
  );
}
