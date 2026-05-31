import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ABOUT_MARKET, ABOUT_PROBLEM } from './aboutContent';

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function splitWithEmphasis(text: string, phrases: readonly string[]) {
  if (phrases.length === 0) return [{ text, emphasis: false }];

  const pattern = new RegExp(
    `(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi',
  );
  const parts = text.split(pattern).filter(Boolean);

  return parts.map((part) => ({
    text: part,
    emphasis: phrases.some((p) => p.toLowerCase() === part.toLowerCase()),
  }));
}

function AnimatedEmphasis({
  children,
  reduced,
  delay = 0,
}: {
  children: string;
  reduced: boolean;
  delay?: number;
}) {
  return (
    <span className="relative inline font-semibold text-primary-green">
      {children}
      {!reduced && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-primary-green"
          initial={{ width: 0, opacity: 0.6 }}
          whileInView={{ width: '100%', opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </span>
  );
}

function FramedBlock({
  children,
  className = '',
  reduced,
}: {
  children: React.ReactNode;
  className?: string;
  reduced: boolean;
}) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-white/10 bg-dark-card/40 p-6 md:p-8 ${className}`}
      initial={reduced ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
    >
      {!reduced && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-primary-green/0"
          initial={{ boxShadow: '0 0 0 0px hsl(var(--primary-green) / 0)' }}
          whileInView={{
            boxShadow: [
              '0 0 0 0px hsl(var(--primary-green) / 0)',
              '0 0 0 1px hsl(var(--primary-green) / 0.35)',
              '0 0 0 1px hsl(var(--primary-green) / 0.15)',
            ],
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      )}
      {children}
    </motion.div>
  );
}

export function AboutProblemMarketSection() {
  const reduced = useReducedMotion();

  return (
    <section
      className="border-b border-white/5 bg-dark-bg py-20 md:py-24"
      aria-labelledby="about-problem-title"
    >
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <FramedBlock reduced={!!reduced}>
              <h2
                id="about-problem-title"
                className="font-heading text-2xl font-bold text-white md:text-3xl"
              >
                {ABOUT_PROBLEM.title}
              </h2>

              <motion.ul
                className="mt-6 space-y-4"
                variants={staggerContainer}
                initial={reduced ? false : 'hidden'}
                whileInView={reduced ? undefined : 'visible'}
                viewport={{ once: true, margin: '-40px' }}
              >
                {ABOUT_PROBLEM.points.map((point, index) => (
                  <motion.li
                    key={point.text}
                    variants={fadeUp}
                    className="group relative overflow-hidden rounded-xl border border-white/8 bg-dark-bg/60 px-4 py-4 pl-5 transition-colors hover:border-primary-green/25 md:px-5 md:py-5"
                  >
                    <motion.span
                      aria-hidden
                      className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-primary-green"
                      initial={reduced ? false : { scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                      style={{ originY: 0 }}
                    />
                    <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                      {splitWithEmphasis(point.text, point.emphasis).map((part, i) =>
                        part.emphasis ? (
                          <AnimatedEmphasis
                            key={`${part.text}-${i}`}
                            reduced={!!reduced}
                            delay={0.25 + index * 0.1}
                          >
                            {part.text}
                          </AnimatedEmphasis>
                        ) : (
                          <span key={`${part.text}-${i}`}>{part.text}</span>
                        ),
                      )}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </FramedBlock>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <FramedBlock reduced={!!reduced}>
              <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
                {ABOUT_MARKET.title}
              </h2>

              <motion.div
                className="mt-6 grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial={reduced ? false : 'hidden'}
                whileInView={reduced ? undefined : 'visible'}
                viewport={{ once: true, margin: '-40px' }}
              >
                {ABOUT_MARKET.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className={`relative overflow-hidden rounded-2xl border bg-dark-bg/80 px-4 py-5 ${
                      stat.featured
                        ? 'border-primary-green/30 shadow-[0_0_24px_hsl(var(--primary-green)/0.12)]'
                        : 'border-white/10'
                    }`}
                  >
                    <motion.span
                      aria-hidden
                      className="absolute bottom-0 left-0 top-0 w-1 bg-primary-green"
                      initial={reduced ? false : { scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + index * 0.07, duration: 0.35 }}
                      style={{ originY: 0 }}
                    />
                    {stat.featured && !reduced && (
                      <motion.span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl border border-primary-green/20"
                        animate={{
                          opacity: [0.4, 0.85, 0.4],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.3,
                        }}
                      />
                    )}
                    <motion.p
                      className="relative font-heading text-2xl font-bold text-white md:text-3xl"
                      initial={reduced ? false : { scale: 0.92, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + index * 0.08,
                        type: 'spring',
                        stiffness: 260,
                        damping: 22,
                      }}
                    >
                      <span className={stat.featured ? 'text-primary-green' : undefined}>
                        {stat.value}
                      </span>
                    </motion.p>
                    <p className="relative mt-1 text-sm leading-snug text-text-secondary">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="relative mt-6 rounded-xl border border-white/8 bg-dark-bg/50 px-4 py-3 text-sm text-text-secondary md:text-base"
                initial={reduced ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
              >
                {splitWithEmphasis(ABOUT_MARKET.note, ABOUT_MARKET.noteEmphasis).map((part, i) =>
                  part.emphasis ? (
                    <AnimatedEmphasis key={`${part.text}-${i}`} reduced={!!reduced} delay={0.5}>
                      {part.text}
                    </AnimatedEmphasis>
                  ) : (
                    <span key={`${part.text}-${i}`}>{part.text}</span>
                  ),
                )}
              </motion.p>
            </FramedBlock>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
