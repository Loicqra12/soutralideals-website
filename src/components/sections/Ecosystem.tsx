import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { AfricanArtisanPatternBg } from '../ui/AfricanArtisanPatternBg';
import { EcosystemHubFeatures } from './EcosystemHubFeatures';
import ecosystemImage from '../../assets/images/ecosysteme.png';
import heroCommunityBackground from '../../assets/images/community/hero/hero-community-background.jpeg';

/* ── Icônes SVG custom (aucune lib externe) ── */
const IconTeam = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden>
    <circle cx="20" cy="13" r="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="8" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 30c0-4 4-6 4-6s2 1 4 1 4-1 4-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 30c0-4 4-6 4-6s2 1 4 1 4-1 4-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 33c0-5 4-8 9-8s9 3 9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconArtisan = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden>
    <path d="M8 32L22 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="22" y="8" width="10" height="6" rx="2" transform="rotate(45 22 8)" stroke="currentColor" strokeWidth="1.8" />
    <path d="M30 28l-4 4M26 24l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="10" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 10l4 4-2 2-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTech = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden>
    <rect x="6" y="8" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M14 30h12M20 26v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M13 17l3-3 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features = [
  {
    Icon: IconTeam,
    title: 'Une équipe de professionnels',
    description:
      "Développeurs, marketeurs, communicants et gestionnaires qui conçoivent et opèrent l'écosystème au quotidien.",
    accent: 'text-primary-green',
    border: 'group-hover:border-primary-green/50',
    bg: 'bg-primary-green/10',
    line: 'from-primary-green/60',
  },
  {
    Icon: IconArtisan,
    title: 'Artisans & freelances',
    description:
      'Des artisans, freelances et vendeurs issus du terrain, organisés en communautés et connectés à des opportunités réelles.',
    accent: 'text-gold-premium',
    border: 'group-hover:border-gold-premium/50',
    bg: 'bg-gold-premium/10',
    line: 'from-gold-premium/60',
  },
  {
    Icon: IconTech,
    title: 'Une technologie au centre',
    description:
      'Une plateforme web et mobile qui connecte les talents, les clients et les services dans un même environnement.',
    accent: 'text-primary-blue',
    border: 'group-hover:border-primary-blue/50',
    bg: 'bg-primary-blue/10',
    line: 'from-primary-blue/60',
  },
];

const ecosystemIntroText = (
  <>
    SOUTRALI DEALS est un écosystème digital complet qui réunit une{' '}
    <strong className="font-semibold text-white">équipe de professionnels</strong>, une{' '}
    <strong className="font-semibold text-white">communauté de talents</strong> et une{' '}
    <strong className="font-semibold text-white">plateforme technologique</strong> pensée pour connecter, structurer et
    faire grandir les activités en Côte d&apos;Ivoire.
  </>
);

const EcosystemFeatures = ({ reduced }: { reduced: boolean | null }) => (
  <div className="relative space-y-4 pt-2">
    <motion.div
      className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary-green/40 via-gold-premium/30 to-primary-blue/40"
      initial={reduced ? false : { height: 0 }}
      whileInView={{ height: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.3 }}
      aria-hidden
    />

    {features.map(({ Icon, title, description, accent, border, bg, line }, i) => (
      <motion.div
        key={title}
        className="group relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
        initial={reduced ? false : { opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.38, delay: 0.18 + i * 0.1 }}
        whileHover={reduced ? {} : { x: 4 }}
      >
        <div
          className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b ${line} to-transparent opacity-0 transition-opacity group-hover:opacity-100`}
          aria-hidden
        />

        <motion.div
          className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 ${bg} ${accent} transition-all duration-300 ${border} group-hover:scale-105`}
        >
          <Icon />
          <div
            className={`absolute inset-0 rounded-xl ${bg} opacity-0 blur-md transition-opacity group-hover:opacity-80`}
            aria-hidden
          />
        </motion.div>

        <div className="min-w-0">
          <h3 className="mb-1 text-base font-bold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-text-muted">{description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const EcosystemPageHero = ({ reduced }: { reduced: boolean | null }) => (
  <section className="relative flex min-h-[min(72vh,680px)] items-end overflow-hidden md:min-h-[min(80vh,760px)] md:items-center">
    <img
      src={heroCommunityBackground}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-[#040b18]/55" aria-hidden />
    <div
      className="absolute inset-0 bg-gradient-to-r from-[#040b18]/95 via-[#061024]/82 to-[#061024]/35"
      aria-hidden
    />
    <div
      className="absolute inset-0 bg-gradient-to-t from-[#040b18]/75 via-transparent to-[#040b18]/40 md:from-[#040b18]/50"
      aria-hidden
    />

    <div className="relative z-10 mx-auto w-full max-w-[1520px] px-4 pb-14 pt-28 text-left sm:px-6 md:pb-20 md:pt-32 lg:px-8 2xl:px-12">
      <motion.div
        className="relative max-w-xl md:max-w-2xl"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="pointer-events-none absolute -inset-6 -left-4 rounded-2xl bg-black/20 backdrop-blur-[1px] sm:-inset-8 sm:-left-6"
          aria-hidden
        />
        <h1 className="relative mb-5 font-heading text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          L&apos;Écosystème <br />
          Soutrali Deals
        </h1>
        <p className="relative text-base font-normal leading-relaxed text-white drop-shadow-[0_1px_14px_rgba(0,0,0,0.85)] md:text-lg">
          {ecosystemIntroText}
        </p>
      </motion.div>
    </div>
  </section>
);

export interface EcosystemProps {
  pageHero?: boolean;
}

export const Ecosystem = ({ pageHero = false }: EcosystemProps) => {
  const reduced = useReducedMotion();

  if (pageHero) {
    return (
      <>
        <EcosystemPageHero reduced={reduced} />
        <SectionWrapper id="ecosysteme" bg="transparent" decorativeBackground={<AfricanArtisanPatternBg />}>
          <EcosystemHubFeatures reduced={reduced} />
        </SectionWrapper>
      </>
    );
  }

  const HeadingTag = 'h2';

  return (
    <SectionWrapper id="ecosysteme" bg="transparent" decorativeBackground={<AfricanArtisanPatternBg />}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 space-y-8 lg:order-1">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <HeadingTag className="mb-5 font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
              L&apos;Écosystème <br />
              <motion.span
                className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent"
                initial={reduced ? false : { opacity: 0, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Soutrali Deals
              </motion.span>
            </HeadingTag>
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">{ecosystemIntroText}</p>
          </motion.div>

          <EcosystemFeatures reduced={reduced} />
        </div>

        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary-green/20 via-primary-blue/15 to-transparent blur-[80px]"
            aria-hidden
          />

          <motion.div
            className="relative z-10 w-full max-w-lg"
            initial={reduced ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <motion.div
              className="aspect-square w-full overflow-hidden rounded-2xl"
              animate={reduced ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={ecosystemImage}
                alt="Équipe Soutrali Deals au travail"
                className="h-full w-full object-cover drop-shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 rounded-xl border border-primary-green/30 bg-[#0a1a16]/90 px-4 py-3 backdrop-blur-sm shadow-xl"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-green">
                Actif en Côte d&apos;Ivoire
              </p>
              <p className="mt-0.5 text-lg font-bold text-white">400+ membres</p>
            </motion.div>

            <motion.div
              className="absolute -right-4 -top-4 rounded-xl border border-primary-blue/30 bg-[#071324]/90 px-4 py-3 backdrop-blur-sm shadow-xl"
              initial={reduced ? false : { opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.65 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-blue">Secteurs couverts</p>
              <p className="mt-0.5 text-lg font-bold text-white">12+ métiers</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
