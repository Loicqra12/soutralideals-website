import { useRef, useEffect, type ReactNode } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

export type Accent = 'green' | 'blue' | 'gold';
export type SectionTheme = 'dark' | 'light';

export const accent = (color: Accent, theme: SectionTheme = 'dark') => {
  const base = {
    green: {
      text: 'text-primary-green',
      border: 'border-primary-green/20',
      hoverBorder: 'hover:border-primary-green/50',
      bg: 'bg-primary-green/10',
      badge: 'border-primary-green/30 bg-primary-green/10 text-primary-green',
      check: 'bg-primary-green/15 text-primary-green',
      dot: 'bg-primary-green',
      gradFrom: 'from-primary-green/50',
    },
    blue: {
      text: 'text-primary-blue',
      border: 'border-primary-blue/20',
      hoverBorder: 'hover:border-primary-blue/50',
      bg: 'bg-primary-blue/10',
      badge: 'border-primary-blue/30 bg-primary-blue/10 text-primary-blue',
      check: 'bg-primary-blue/15 text-primary-blue',
      dot: 'bg-primary-blue',
      gradFrom: 'from-primary-blue/50',
    },
    gold: {
      text: 'text-gold-premium',
      border: 'border-gold-premium/20',
      hoverBorder: 'hover:border-gold-premium/50',
      bg: 'bg-gold-premium/10',
      badge: 'border-gold-premium/30 bg-gold-premium/10 text-gold-premium',
      check: 'bg-gold-premium/15 text-gold-premium',
      dot: 'bg-gold-premium',
      gradFrom: 'from-gold-premium/50',
    },
  }[color];

  if (theme === 'dark') return base;

  return {
    ...base,
    badge: base.badge.replace('/10 ', '/15 '),
  };
};

export const Chip = ({ children, color }: { children: ReactNode; color: Accent }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${accent(color).badge}`}
  >
    {children}
  </span>
);

export const EcosystemContainer = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    className={`mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-8 2xl:px-12 ${className}`}
  >
    {children}
  </motion.div>
);

export const AnimatedNum = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const sv = useSpring(mv, { stiffness: 80, damping: 25 });
  const inView = useInView(ref, { once: true, margin: '-80px' });
  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);
  useEffect(
    () =>
      sv.on('change', (v) => {
        if (ref.current) ref.current.textContent = Math.floor(v).toLocaleString('fr-FR');
      }),
    [sv],
  );
  return (
    <span className="inline-flex items-baseline gap-0.5">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
};

export const sectionSurface = (theme: SectionTheme) =>
  theme === 'dark'
    ? { bg: 'bg-[#060e1a]', border: 'border-white/5', heading: 'text-white', body: 'text-text-secondary', muted: 'text-text-muted' }
    : { bg: 'bg-[#f6f7f8]', border: 'border-[#e8e8e8]', heading: 'text-[#111]', body: 'text-[#6b6b6b]', muted: 'text-[#888]' };
