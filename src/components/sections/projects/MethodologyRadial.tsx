import { motion, useReducedMotion } from 'framer-motion';
import { METHODOLOGY_STEPS } from './methodologySteps';

type MethodologyRadialProps = {
  activeIndex: number;
};

const POSITIONS = [
  { x: 50, y: 88 },
  { x: 18, y: 68 },
  { x: 8, y: 38 },
  { x: 22, y: 12 },
  { x: 78, y: 12 },
  { x: 92, y: 38 },
];

export function MethodologyRadial({ activeIndex }: MethodologyRadialProps) {
  const reduced = useReducedMotion();
  const active = METHODOLOGY_STEPS[activeIndex];

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      initial={reduced ? false : { opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <svg
        className="absolute inset-0 h-full w-full text-white/10"
        viewBox="0 0 100 100"
        aria-hidden
      >
        {[22, 34, 46].map((r) => (
          <circle
            key={r}
            cx="50"
            cy="58"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            strokeDasharray="2 3"
          />
        ))}
        {POSITIONS.map((pos, i) => (
          <line
            key={i}
            x1="50"
            y1="58"
            x2={pos.x}
            y2={pos.y}
            stroke="currentColor"
            strokeWidth={i === activeIndex ? 0.8 : 0.35}
            className={i === activeIndex ? 'text-primary-green/60' : 'text-white/10'}
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-1/2 top-[58%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        animate={reduced ? undefined : { scale: [1, 1.04, 1] }}
        transition={reduced ? undefined : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="rounded-2xl border border-primary-green/40 bg-primary-green/20 px-4 py-3 text-center shadow-[0_0_40px_hsl(142,71%,45%,0.2)] backdrop-blur-sm">
          <p className="text-[10px] font-bold uppercase tracking-wider text-primary-green">Votre idée</p>
          <p className="mt-0.5 max-w-[120px] text-xs font-semibold leading-snug text-white">
            {active.title}
          </p>
        </div>
      </motion.div>

      {METHODOLOGY_STEPS.map((step, i) => {
        const pos = POSITIONS[i];
        const isActive = i === activeIndex;
        const Icon = step.Icon;

        return (
          <div
            key={step.id}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            aria-hidden
          >
            <motion.span
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lg md:h-11 md:w-11 ${
                isActive
                  ? 'border-primary-green bg-primary-green/25 text-primary-green'
                  : 'border-white/15 bg-[#0c1018]/90 text-white/50'
              }`}
              animate={isActive && !reduced ? { scale: [1, 1.08, 1] } : { scale: 1 }}
              transition={
                isActive && !reduced
                  ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 0.2 }
              }
            >
              <Icon className="h-4 w-4 md:h-[18px] md:w-[18px]" />
            </motion.span>
            {isActive && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#0c1018]/95 px-2.5 py-1 text-[11px] font-medium text-white sm:block"
              >
                {step.tab}
              </motion.span>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
