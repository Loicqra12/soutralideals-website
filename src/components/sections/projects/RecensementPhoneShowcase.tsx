import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Trophy, UserPlus } from 'lucide-react';
import recensementImage from '../../../assets/images/project/project_recensement.png';

type RecensementPhoneShowcaseProps = {
  className?: string;
};

/**
 * Présentation type Yango : un seul téléphone centré, mis en avant, sans cadre autour.
 */
export function RecensementPhoneShowcase({ className = '' }: RecensementPhoneShowcaseProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={`relative flex min-h-[360px] w-full items-center justify-center overflow-visible sm:min-h-[420px] lg:min-h-[500px] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_65%_at_50%_45%,hsl(142,71%,45%)/0.14,transparent_62%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[55%] max-w-[320px] -translate-x-1/2 -translate-y-[48%] rounded-[3rem] bg-[#f5e6a8]/[0.07] blur-3xl"
        aria-hidden
      />

      <motion.div
        className="absolute left-[6%] top-[20%] z-20 hidden rounded-xl border border-white/10 bg-[#0c1018]/90 px-3 py-2 shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-md sm:flex sm:items-center sm:gap-2"
        initial={reduced ? false : { opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={reduced ? undefined : { y: [0, -5, 0] }}
        transition={
          reduced
            ? { delay: 0.5, duration: 0.4 }
            : {
                opacity: { delay: 0.5, duration: 0.4 },
                x: { delay: 0.5, duration: 0.4 },
                y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 },
              }
        }
        aria-hidden
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-green/15 text-primary-green">
          <UserPlus className="h-4 w-4" />
        </span>
        <span className="text-xs font-semibold text-white">Nouveau recensement</span>
      </motion.div>

      <motion.div
        className="absolute bottom-[22%] right-[4%] z-20 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#0c1018]/90 px-3 py-2 shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-md sm:flex"
        initial={reduced ? false : { opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={reduced ? undefined : { y: [0, 5, 0] }}
        transition={
          reduced
            ? { delay: 0.55, duration: 0.4 }
            : {
                opacity: { delay: 0.55, duration: 0.4 },
                x: { delay: 0.55, duration: 0.4 },
                y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.85 },
              }
        }
        aria-hidden
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-premium/15 text-gold-premium">
          <Trophy className="h-4 w-4" />
        </span>
        <span className="text-xs font-semibold text-white">Points & badges</span>
      </motion.div>

      <motion.figure
        className="relative z-10 m-0 w-full max-w-[min(100%,300px)] sm:max-w-[320px] lg:max-w-[340px]"
        initial={reduced ? false : { opacity: 0, y: 48, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={recensementImage}
          alt="Application Soutrali Recensement — identification terrain"
          className="h-auto w-full object-contain drop-shadow-[0_48px_80px_rgba(0,0,0,0.6)]"
          loading="lazy"
          animate={reduced ? undefined : { y: [0, -10, 0] }}
          transition={
            reduced ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
          }
        />
        <figcaption className="sr-only">Soutrali Recensement sur smartphone</figcaption>
      </motion.figure>

      <motion.span
        className="absolute bottom-[8%] left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-primary-green/30 bg-primary-green/10 px-3 py-1.5 text-xs font-medium text-primary-green"
        initial={reduced ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65 }}
        aria-hidden
      >
        <MapPin className="h-3.5 w-3.5" />
        Mode terrain · hors ligne
      </motion.span>
    </div>
  );
}
