import { motion } from 'framer-motion';
import type { Accent, SectionTheme } from './shared';

const NODES = [
  { cx: 18, cy: 22 },
  { cx: 42, cy: 12 },
  { cx: 68, cy: 30 },
  { cx: 82, cy: 55 },
  { cx: 55, cy: 68 },
  { cx: 28, cy: 75 },
  { cx: 72, cy: 85 },
  { cx: 10, cy: 52 },
  { cx: 90, cy: 18 },
];
const EDGES = [
  [0, 1],
  [1, 2],
  [2, 8],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [5, 7],
  [0, 7],
  [1, 4],
];

export function ConstellationBg({
  color,
  reduced,
  theme = 'dark',
}: {
  color: Accent;
  reduced: boolean;
  theme?: SectionTheme;
}) {
  const alpha = theme === 'dark' ? 0.18 : 0.12;
  const dotAlpha = theme === 'dark' ? 0.35 : 0.28;
  const strokeColor =
    color === 'green'
      ? `rgba(34,197,94,${alpha})`
      : color === 'blue'
        ? `rgba(59,130,246,${alpha})`
        : `rgba(212,175,55,${alpha})`;
  const dotColor =
    color === 'green'
      ? `rgba(34,197,94,${dotAlpha})`
      : color === 'blue'
        ? `rgba(59,130,246,${dotAlpha})`
        : `rgba(212,175,55,${dotAlpha})`;

  return (
    <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {EDGES.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={NODES[a].cx}
            y1={NODES[a].cy}
            x2={NODES[b].cx}
            y2={NODES[b].cy}
            stroke={strokeColor}
            strokeWidth="0.4"
            initial={reduced ? false : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
          />
        ))}
        {NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r="1.1"
            fill={dotColor}
            initial={reduced ? false : { scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
            animate={
              reduced
                ? {}
                : {
                    r: [1.1, 1.6, 1.1],
                    opacity: [dotAlpha, dotAlpha + 0.35, dotAlpha],
                  }
            }
          />
        ))}
      </svg>
    </motion.div>
  );
}
