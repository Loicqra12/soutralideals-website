import { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';

const DROP_COUNT = 42;

function buildDrops() {
  return Array.from({ length: DROP_COUNT }, (_, i) => ({
    id: i,
    left: `${((i * 37 + 11) % 100).toFixed(2)}%`,
    delay: `${((i * 0.22) % 4.5).toFixed(2)}s`,
    duration: `${(1.1 + (i % 10) * 0.14).toFixed(2)}s`,
    opacity: 0.1 + (i % 6) * 0.035,
    width: i % 6 === 0 ? 2 : 1,
    height: 44 + (i % 8) * 14,
    layer: i % 3,
  }));
}

const DROPS = buildDrops();

export function RainBackground() {
  const reduced = useReducedMotion();

  const mist = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: `${((i * 29 + 5) % 100).toFixed(2)}%`,
        delay: `${(i * 0.5).toFixed(2)}s`,
        size: 3 + (i % 3),
      })),
    [],
  );

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-70" aria-hidden>
      <div className="rain-sheets absolute inset-0" />

      {DROPS.map((drop) => (
        <span
          key={drop.id}
          className={`rain-drop absolute top-0 ${
            drop.layer === 0 ? 'rain-drop--back' : drop.layer === 1 ? 'rain-drop--mid' : 'rain-drop--front'
          }`}
          style={{
            left: drop.left,
            width: drop.width,
            height: drop.height,
            opacity: Math.min(drop.opacity, 0.32),
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
        />
      ))}

      {mist.map((m) => (
        <span
          key={`mist-${m.id}`}
          className="rain-mist absolute bottom-0 rounded-full"
          style={{
            left: m.left,
            width: m.size,
            height: m.size,
            animationDelay: m.delay,
          }}
        />
      ))}
    </div>
  );
}
