import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import heroSlide1 from '../../assets/images/Hero/Hero-1.png';
import appStoreBadge from '../../assets/images/appstore.png';
import googlePlayBadge from '../../assets/images/googleplay.png';
import heroSlide2 from '../../assets/images/Hero/Hero-2.png';
import heroSlide3 from '../../assets/images/Hero/Hero-3.png';
import heroSlide4 from '../../assets/images/Hero/Hero-4.png';

const SLIDE_INTERVAL_MS = 5500;

const HERO_SLIDES = [
  { src: heroSlide1, alt: 'Professionnel ivoirien — Soutrali Deals' },
  { src: heroSlide2, alt: 'Artisan au travail — Soutrali Deals' },
  { src: heroSlide3, alt: 'Communauté Soutrali Deals en action' },
  { src: heroSlide4, alt: 'Écosystème digital ivoirien — Soutrali Deals' },
];

export const Hero = () => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goTo = useCallback((index: number) => {
    setActive(index % HERO_SLIDES.length);
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(next, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduced, next]);

  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-[#071228] pt-20">

      {/* ── Carousel fond plein écran ── */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={reduced ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={active}
            src={HERO_SLIDES[active].src}
            alt={HERO_SLIDES[active].alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={reduced ? false : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
            loading={active === 0 ? 'eager' : 'lazy'}
          />
        </AnimatePresence>

        {/* Overlay lecture texte (gauche plus sombre, style Gozem) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#061024]/92 via-[#061024]/55 to-[#061024]/25"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071228]/90 via-transparent to-[#061024]/40" />
      </motion.div>

      {/* ── Contenu (textes inchangés) ── */}
      <div className="container-custom relative z-10 w-full pb-36 pt-10 md:pb-40 md:pt-14">
        <motion.div
          className="max-w-2xl space-y-7 text-white"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <motion.h1
            className="font-heading text-4xl font-bold leading-snug text-white md:text-6xl lg:text-[3.5rem]"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            Transformez <br />
            Votre Avenir Digital !
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg font-medium leading-relaxed text-white md:text-xl"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
          >
            La plateforme tout-en-un pour propulser les freelance, artisans et entrepreneurs ivoiriens vers le succès.
          </motion.p>

          <motion.div
            className="space-y-4 pt-2"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.34 }}
          >
            <motion.div
              className="flex items-center gap-4 opacity-80"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.42 }}
            >
              <motion.div
                className="h-px w-8 bg-white/30"
                initial={reduced ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                style={{ originX: 0 }}
              />
              <span className="text-xs font-medium uppercase tracking-widest text-white">
                Disponible sur mobile
              </span>
              <motion.div
                className="h-px w-8 bg-white/30"
                initial={reduced ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.58 }}
                style={{ originX: 1 }}
              />
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.48 }}
            >
              <motion.a
                href="#projet"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projet');
                }}
                className="inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                whileHover={reduced ? {} : { y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Télécharger sur l'App Store"
              >
                <img
                  src={appStoreBadge}
                  alt="Télécharger sur l'App Store"
                  className="h-11 w-auto md:h-12"
                  loading="lazy"
                />
              </motion.a>
              <motion.a
                href="#projet"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projet');
                }}
                className="inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                whileHover={reduced ? {} : { y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Télécharger sur Google Play"
              >
                <img
                  src={googlePlayBadge}
                  alt="Disponible sur Google Play"
                  className="h-11 w-auto md:h-12"
                  loading="lazy"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Indicateurs carousel (style Gozem) ── */}
        <motion.div
          className="absolute bottom-28 left-4 flex items-center gap-2 md:left-8 lg:left-[max(2rem,calc((100vw-1280px)/2+2rem))]"
          role="group"
          aria-label="Diaporama hero"
        >
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              {...(i === active ? { 'aria-current': 'true' } : {})}
              aria-label={`Afficher l'image ${i + 1} sur ${HERO_SLIDES.length}`}
              onClick={() => goTo(i)}
              className="group p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
            >
              <motion.span
                className="block h-[3px] rounded-full bg-white/35"
                animate={{
                  width: i === active ? 40 : 24,
                  backgroundColor: i === active ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.35)',
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </button>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-32 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={reduced ? { opacity: 1 } : { opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, delay: 1 }}
      >
        <button
          onClick={() => scrollToSection('ecosysteme')}
          className="group flex flex-col items-center gap-4 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Défiler vers le bas"
        >
          <motion.div
            className="flex h-[50px] w-[30px] justify-center rounded-full border-2 border-white/30 p-2 backdrop-blur-sm transition-colors group-hover:border-white/60"
            whileHover={reduced ? {} : { scale: 1.05 }}
          >
            <motion.div
              animate={reduced ? {} : { y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
          </motion.div>
          <span className="text-xs font-medium uppercase tracking-wide text-white/60 transition-colors group-hover:text-white">
            Défiler
          </span>
        </button>
      </motion.div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" className="block h-auto w-full fill-dark-bg">
          <path d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z" />
        </svg>
      </div>
    </section>
  );
};
