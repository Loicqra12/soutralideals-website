import { motion, useReducedMotion } from 'framer-motion';
import { Globe, Store, Search, Heart, ShoppingBag } from 'lucide-react';
import webImage from '../../../assets/images/project/project_web_marketplace.png';

const FLOAT_TOP = [
  { Icon: Globe, color: 'text-primary-green', bg: 'bg-primary-green/15' },
  { Icon: Store, color: 'text-primary-blue', bg: 'bg-primary-blue/15' },
  { Icon: Search, color: 'text-gold-premium', bg: 'bg-gold-premium/15' },
] as const;

type WebLaptopShowcaseProps = {
  className?: string;
};

export function WebLaptopShowcase({ className = '' }: WebLaptopShowcaseProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={`relative flex min-h-[340px] w-full items-center justify-center overflow-visible sm:min-h-[400px] lg:min-h-[480px] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,hsl(217,91%,60%)/0.1,transparent_65%)]"
        aria-hidden
      />

      {/* Bulle décorative — style mockup référence */}
      <motion.div
        className="absolute right-[2%] top-[6%] z-20 hidden rounded-2xl border border-white/12 bg-[#0c1018]/95 px-3 py-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-md sm:flex sm:items-center sm:gap-2"
        initial={reduced ? false : { opacity: 0, y: -12, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        animate={reduced ? undefined : { y: [0, -6, 0] }}
        transition={
          reduced
            ? { delay: 0.35, duration: 0.45 }
            : {
                opacity: { delay: 0.35, duration: 0.45 },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 },
              }
        }
        aria-hidden
      >
        {FLOAT_TOP.map(({ Icon, color, bg }) => (
          <span
            key={color}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 ${bg}`}
          >
            <Icon className={`h-4 w-4 ${color}`} />
          </span>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-[14%] left-[4%] z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/95 shadow-lg sm:flex"
        animate={reduced ? undefined : { scale: [1, 1.08, 1] }}
        transition={reduced ? undefined : { duration: 2.5, repeat: Infinity }}
        aria-hidden
      >
        <Heart className="h-4 w-4 fill-primary-blue/20 text-primary-blue" />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[6%] z-20 hidden h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/95 shadow-lg sm:flex"
        animate={reduced ? undefined : { scale: [1, 1.06, 1] }}
        transition={reduced ? undefined : { duration: 3, repeat: Infinity, delay: 0.5 }}
        aria-hidden
      >
        <ShoppingBag className="h-4 w-4 text-primary-green" />
      </motion.div>

      {/* MacBook-style frame */}
      <motion.div
        className="relative z-10 w-full max-w-[min(100%,640px)]"
        initial={reduced ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-t-xl border border-b-0 border-white/15 bg-gradient-to-b from-[#2a2f3a] to-[#1a1e26] p-2 pb-1.5 shadow-[0_32px_80px_rgba(0,0,0,0.55)] sm:p-2.5 sm:pb-2">
          <div className="mb-2 flex items-center gap-1.5 px-1" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="overflow-hidden rounded-lg border border-black/40 bg-[#0a0c10] shadow-inner">
            <img
              src={webImage}
              alt="Marketplace web Soutrali Deals — vitrine et commande en ligne"
              className="aspect-[16/10] w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className="h-3 rounded-b-lg bg-gradient-to-b from-[#3d4452] to-[#252a33] shadow-md"
          aria-hidden
        />
        <div
          className="mx-auto -mt-px h-2 w-[42%] rounded-b-md bg-gradient-to-b from-[#4a5160] to-[#2a2f38]"
          aria-hidden
        />
      </motion.div>
    </div>
  );
}
