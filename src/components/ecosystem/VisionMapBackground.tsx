import { motion } from 'framer-motion';

/** Silhouette stylisée Afrique (viewBox 500×520) */
const AFRICA_PATH =
  'M115,42 L142,40 L168,52 L192,68 L210,88 L228,112 L242,138 L252,168 L258,198 L260,228 L258,258 L252,288 L242,318 L228,348 L210,378 L188,402 L162,422 L132,438 L102,448 L72,452 L48,444 L32,422 L24,392 L22,358 L26,322 L36,286 L52,252 L72,222 L92,198 L108,178 L118,158 L122,138 L120,118 L115,98 L112,78 L115,42 Z M318,398 L328,392 L338,398 L342,410 L336,422 L324,426 L314,418 L318,398 Z';

/** Silhouette stylisée Côte d\'Ivoire (viewBox ~150×80) */
const CI_PATH =
  'M82,18 L98,14 L118,18 L132,28 L138,42 L136,56 L126,68 L108,74 L88,70 L72,58 L66,42 L70,28 L82,18 Z';

/** Serpent horizontal — flux ouest → est (Abidjan vers l\'Afrique de l\'Est) */
const SNAKE_HORIZONTAL =
  'M 95,395 C 180,330 240,450 340,370 S 480,310 580,355 S 720,410 820,365 S 960,320 1085,390';

/** Serpent vertical — flux nord → sud à travers le continent */
const SNAKE_VERTICAL =
  'M 640,55 C 560,140 720,200 600,290 S 520,420 640,510 S 760,600 680,685';

type City = { name: string; x: number; y: number; hub?: boolean };

const CITIES: City[] = [
  { name: 'Casablanca', x: 548, y: 168 },
  { name: 'Dakar', x: 468, y: 248 },
  { name: 'Bamako', x: 498, y: 298 },
  { name: 'Abidjan', x: 305, y: 382, hub: true },
  { name: 'Accra', x: 508, y: 358 },
  { name: 'Lagos', x: 528, y: 378 },
  { name: 'Kinshasa', x: 598, y: 428 },
  { name: 'Nairobi', x: 698, y: 388 },
  { name: 'Addis-Abeba', x: 728, y: 328 },
  { name: 'Le Caire', x: 688, y: 218 },
  { name: 'Johannesburg', x: 648, y: 528 },
  { name: 'Luanda', x: 568, y: 478 },
  { name: 'Dar es Salaam', x: 748, y: 408 },
];

function SnakeTrail({
  path,
  duration,
  reduced,
  id,
}: {
  path: string;
  duration: number;
  reduced: boolean;
  id: string;
}) {
  return (
    <g>
      <path
        d={path}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        d={path}
        fill="none"
        stroke={`url(#${id}-grad)`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="5 9"
        animate={reduced ? {} : { strokeDashoffset: [-160, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      />
      {!reduced && (
        <>
          <circle r="5" fill="#22c55e" opacity="0.95">
            <animateMotion dur={`${duration}s`} repeatCount="indefinite" path={path} />
          </circle>
          <circle r="8" fill="none" stroke="rgba(34,197,94,0.35)" strokeWidth="1">
            <animateMotion dur={`${duration}s`} repeatCount="indefinite" path={path} />
          </circle>
        </>
      )}
    </g>
  );
}

export function VisionMapBackground({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="vision-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(34,197,94,0.45)" />
            <stop offset="100%" stopColor="rgba(34,197,94,0)" />
          </radialGradient>
          <linearGradient id="snake-h-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34,197,94,0)" />
            <stop offset="35%" stopColor="rgba(34,197,94,0.55)" />
            <stop offset="65%" stopColor="rgba(74,222,128,0.75)" />
            <stop offset="100%" stopColor="rgba(34,197,94,0)" />
          </linearGradient>
          <linearGradient id="snake-v-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34,197,94,0)" />
            <stop offset="40%" stopColor="rgba(34,197,94,0.5)" />
            <stop offset="70%" stopColor="rgba(74,222,128,0.7)" />
            <stop offset="100%" stopColor="rgba(34,197,94,0)" />
          </linearGradient>
        </defs>

        {/* Serpents animés — sous les cartes */}
        <SnakeTrail
          id="snake-h"
          path={SNAKE_HORIZONTAL}
          duration={16}
          reduced={reduced}
        />
        <SnakeTrail
          id="snake-v"
          path={SNAKE_VERTICAL}
          duration={14}
          reduced={reduced}
        />

        {/* Afrique — droite */}
        <g transform="translate(520, 72) scale(1.05)" opacity="0.85">
          <path
            d={AFRICA_PATH}
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Côte d'Ivoire — gauche */}
        <g transform="translate(175, 268) scale(2.1)" opacity="0.95">
          <path
            d={CI_PATH}
            fill="rgba(34,197,94,0.07)"
            stroke="rgba(34,197,94,0.38)"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </g>

        {/* Points villes */}
        {CITIES.map((city, i) => (
          <g key={city.name}>
            {city.hub && (
              <circle cx={city.x} cy={city.y} r={22} fill="url(#vision-hub-glow)" />
            )}
            <motion.circle
              cx={city.x}
              cy={city.y}
              r={city.hub ? 5 : 3}
              fill={city.hub ? '#22c55e' : 'rgba(255,255,255,0.55)'}
              initial={reduced ? false : { opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.4 + i * 0.05 }}
            />
            {city.hub && (
              <circle
                cx={city.x}
                cy={city.y}
                r={8}
                fill="none"
                stroke="rgba(34,197,94,0.35)"
                strokeWidth="1"
              />
            )}
          </g>
        ))}
      </svg>

      <div className="absolute inset-0 bg-[#070d1c]/75" />
      <motion.div className="absolute inset-0 bg-gradient-to-b from-[#070d1c] via-[#070d1c]/40 to-[#070d1c]" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070d1c] via-transparent to-[#070d1c]/60" />
    </motion.div>
  );
}
