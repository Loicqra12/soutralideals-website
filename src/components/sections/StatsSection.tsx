import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Star, ShieldCheck, ArrowRight } from 'lucide-react';

/* ── Compteur animé ── */
const AnimatedCounter = ({ value, suffix = '+' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 90, damping: 28 });
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest).toLocaleString('fr-FR');
    });
  }, [springValue]);

  return (
    <span className="inline-flex items-baseline gap-0.5">
      <span ref={ref} className="tabular-nums">0</span>
      <span>{suffix}</span>
    </span>
  );
};

/* ── Mini carte CI (SVG simple) ── */
const CoteDIvoireMini = () => (
  <svg viewBox="0 0 80 66" className="h-12 w-14 opacity-90" aria-hidden>
    <path
      d="M18 8 C14 10 10 16 12 22 C8 26 6 32 10 36 C8 42 12 50 18 52 C22 58 30 60 36 56
         C40 62 48 62 54 58 C60 62 68 58 70 52 C74 46 72 38 68 34 C72 28 70 20 64 16
         C60 10 52 8 46 12 C42 6 34 4 28 8 Z"
      fill="rgba(34,197,94,0.28)"
      stroke="rgba(34,197,94,0.7)"
      strokeWidth="1.5"
    />
    <circle cx="30" cy="34" r="2.5" fill="rgba(34,197,94,0.95)" />
    <circle cx="48" cy="26" r="1.8" fill="rgba(59,130,246,0.95)" />
    <circle cx="40" cy="46" r="1.5" fill="rgba(212,175,55,0.95)" />
  </svg>
);

export const StatsSection = () => {
  const reduced = useReducedMotion();

  const cards = [
    { id: 'rating', delay: 0 },
    { id: 'members', delay: 0.1 },
    { id: 'coverage', delay: 0.2 },
  ];

  return (
    <section className="relative z-30 -mt-24 px-4 pb-20">
      <div className="container-custom">
        <div className="grid gap-4 md:grid-cols-3">

          {/* ── Carte 1 : Note communauté ── */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0 }}
            whileHover={reduced ? {} : { y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[#0b1528]/90 p-6 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.12),transparent_55%)]" />
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Satisfaction membres
            </p>
            <div className="mb-3 flex items-baseline gap-2">
              <span className="font-heading text-5xl font-black text-white">4.8</span>
              <span className="text-2xl font-bold text-white/60">/5</span>
            </div>
            <div className="mb-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`h-4 w-4 ${s <= 4 ? 'fill-primary-green text-primary-green' : 'fill-primary-green/40 text-primary-green/40'}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <p className="text-sm text-white/55">Basé sur les retours de la communauté</p>
              <ShieldCheck className="h-5 w-5 text-primary-green/70" />
            </div>
          </motion.div>

          {/* ── Carte 2 : Prestataires vérifiés (grande) ── */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            whileHover={reduced ? {} : { y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-primary-green/25 bg-gradient-to-b from-[#0b2518]/90 to-[#0b1528]/90 p-6 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.18),transparent_60%)]" />
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-green/35 bg-primary-green/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-green" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary-green">
                Certifié Soutrali ID
              </span>
            </div>
            <div className="mb-1 font-heading text-5xl font-black text-white">
              <AnimatedCounter value={400} suffix="+" />
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/55">
              Prestataires vérifiés
            </p>
            <p className="mb-5 text-sm leading-relaxed text-white/65">
              Artisans, freelances et vendeurs identifiés et certifiés via l&apos;application Soutrali ID.
            </p>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary-green transition group-hover:gap-3">
              Rejoindre le réseau <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          {/* ── Carte 3 : Couverture géographique ── */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            whileHover={reduced ? {} : { y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[#0b1528]/90 p-6 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.14),transparent_55%)]" />
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Présence terrain
            </p>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-heading text-5xl font-black text-white">
                <AnimatedCounter value={10} suffix="" />
              </span>
              <CoteDIvoireMini />
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/55">
              Zones couvertes
            </p>
            <div className="flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
              {['Abidjan', 'Bouaké', 'San-Pedro', 'Yamoussoukro', 'Daloa'].map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-primary-blue/25 bg-primary-blue/10 px-2.5 py-0.5 text-[11px] text-primary-blue/80"
                >
                  {city}
                </span>
              ))}
              <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] text-white/40">
                +5
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Tagline bas ── */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 rounded-2xl border border-white/10 bg-[#0b1528]/70 px-6 py-5 text-center backdrop-blur-xl"
        >
          <h2 className="text-xl font-heading font-bold text-white md:text-2xl">
            Pourquoi rejoindre{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              l&apos;élite des indépendants
            </span>{' '}
            en Côte d&apos;Ivoire ?
          </h2>
          <p className="mt-2 text-sm text-white/50">
            Nous connectons les talents aux opportunités avec une plateforme 100% sécurisée.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
