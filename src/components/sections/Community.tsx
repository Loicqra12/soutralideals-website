import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { Users, Briefcase, ShoppingBag, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import heroBackground from '../../assets/images/community/hero/hero-community-background.jpg';
import heroPeopleConnected from '../../assets/images/community/hero/hero-people-connected.jpg';

// Positions déterministes — pas de Math.random() pour éviter les re-renders instables
const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
  x1: `${(i * 7 + 3) % 93}%`,
  y1: `${(i * 13 + 8) % 88}%`,
  x2: `${(i * 11 + 55) % 93}%`,
  y2: `${(i * 17 + 35) % 88}%`,
  dur: 20 + (i * 3) % 12,
}));

const FloatingParticles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    {PARTICLES.map((p, i) => (
      <motion.div
        key={i}
        className="absolute h-1.5 w-1.5 rounded-full bg-white/20"
        initial={{ left: p.x1, top: p.y1 }}
        animate={{ left: p.x2, top: p.y2 }}
        transition={{ duration: p.dur, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
    ))}
  </div>
);

export interface CommunityProps {
  /** Sur la page /communaute : un H1 unique pour le SEO */
  heroAsH1?: boolean;
}

export const Community = ({ heroAsH1 = false }: CommunityProps) => {
  const whatsappLink = 'https://chat.whatsapp.com/JnPGnE5qAFPLTg5foFozm5';
  const prefersReducedMotion = useReducedMotion();
  const TitleTag = heroAsH1 ? motion.h1 : motion.h2;

  const audienceCards = [
    {
      title: 'Pour les Freelances',
      subtitle: 'Developpeurs, graphistes, redacteurs...',
      to: '/communaute#freelances',
      Icon: Briefcase,
      tone: 'text-primary-blue',
      bgTone: 'bg-primary-blue/12',
    },
    {
      title: 'Pour les Artisans',
      subtitle: 'Menuisiers, mecaniciens, coiffeurs...',
      to: '/communaute#artisans',
      Icon: Users,
      tone: 'text-primary-green',
      bgTone: 'bg-primary-green/12',
    },
    {
      title: 'Pour les Commercants',
      subtitle: 'Boutiques, vendeurs, e-commercants...',
      to: '/communaute#commercants',
      Icon: ShoppingBag,
      tone: 'text-gold-premium',
      bgTone: 'bg-gold-premium/12',
    },
  ];

  const ecosystemNodes = [
    { label: 'Freelance', x: '16%', y: '26%' },
    { label: 'Artisan', x: '36%', y: '66%' },
    { label: 'Commercant', x: '58%', y: '34%' },
    { label: 'Client', x: '80%', y: '62%' },
  ];

  const softReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.45, ease: 'easeOut' as const },
      };

  return (
    <SectionWrapper id="communaute" bg="dark" className="relative overflow-hidden">
      <FloatingParticles />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img src={heroBackground} alt="" className="h-full w-full object-cover opacity-15" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061024] via-[#0b2557]/90 to-[#163f88]/85" />
        <div className="absolute -left-24 top-0 h-[140%] w-[40%] bg-primary-blue/20 [clip-path:polygon(0_0,75%_0,25%_100%,0_100%)]" />
      </div>

      <div className="relative z-10 grid items-start gap-8 lg:grid-cols-12">
        <motion.div {...softReveal} className="rounded-3xl border border-white/15 bg-[#0a1a37]/75 p-6 backdrop-blur-sm sm:p-8 lg:col-span-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
            <Users className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white">La Force du Nombre</span>
            <Sparkles className="h-4 w-4 text-primary-green" />
          </div>

          <TitleTag
            className="mb-5 font-heading text-3xl font-bold text-white md:text-5xl"
            initial={prefersReducedMotion ? false : { opacity: 0, filter: 'blur(4px)' }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Une communaute qui construit <span className="text-primary-green">l&apos;economie locale</span>
          </TitleTag>

          <p className="mb-7 text-base leading-relaxed text-white/85 md:text-lg">
            Prestataires, freelances, vendeurs, entrepreneurs et equipes terrain avances ensemble.
            Plus qu&apos;un reseau, c&apos;est un cadre d&apos;entraide, d&apos;opportunites et de progression concrete.
          </p>

          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, -1.5, 0],
                      boxShadow: [
                        '0 8px 22px rgba(37,211,102,0.22)',
                        '0 12px 30px rgba(37,211,102,0.34)',
                        '0 8px 22px rgba(37,211,102,0.22)',
                      ],
                    }
              }
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={prefersReducedMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl"
            >
              <Button
                variant="ghost"
                className="h-12 w-full rounded-xl border border-[#25D366]/60 bg-gradient-to-r from-[#25D366] to-[#1fb158] px-4 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(37,211,102,0.28)] transition hover:bg-[#20BA5A] hover:shadow-[0_12px_28px_rgba(37,211,102,0.38)]"
              >
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/85 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <MessageCircle className="h-4 w-4" />
                Rejoindre WhatsApp
              </Button>
            </motion.a>
            <Link to="/communaute#piliers">
              <Button
                variant="outline"
                className="h-12 w-full rounded-xl border-white/30 px-4 text-sm font-semibold text-white hover:bg-white/15"
              >
                Avantages
              </Button>
            </Link>
            <Link to="/communaute#events">
              <Button
                variant="outline"
                className="h-12 w-full rounded-xl border-white/30 px-4 text-sm font-semibold text-white hover:bg-white/15"
              >
                Evenements
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 border-t border-white/15 pt-6">
            {[
              ['400+', 'Membres actifs'],
              ['50+', 'Partenaires'],
              ['24/7', 'Entraide'],
            ].map(([value, label], idx) => (
              <motion.div
                key={label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.12 + idx * 0.05 }}
                whileHover={prefersReducedMotion ? {} : { y: -3 }}
                className="rounded-xl border border-white/15 bg-white/5 p-3"
              >
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-white/75">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...softReveal} transition={{ duration: 0.55, delay: 0.08 }} className="space-y-4 lg:col-span-6">
          <motion.div
            whileHover={prefersReducedMotion ? {} : { y: -4 }}
            className="overflow-hidden rounded-2xl border border-white/20 bg-white/5"
          >
            <img src={heroPeopleConnected} alt="Photo de la communaute Soutrali Deals" className="h-56 w-full object-cover md:h-64" loading="lazy" />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
              className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 sm:col-span-2"
            >
              <div className="relative h-40 w-full overflow-hidden bg-gradient-to-r from-[#061629] via-[#0a2a4f] to-[#0a3f45]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.28),transparent_45%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.3),transparent_45%)]" />

                {/* Lignes de connexion */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden>
                  <defs>
                    <linearGradient id="communityLine" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="rgba(74,222,128,0.65)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0.65)" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M16 11 L36 27 L58 14 L80 25"
                    fill="none"
                    stroke="url(#communityLine)"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    strokeDasharray="2.2 2.2"
                    animate={prefersReducedMotion ? {} : { pathLength: [0.4, 1, 0.4], opacity: [0.45, 0.95, 0.45] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </svg>

                {/* Nodes + badges */}
                {ecosystemNodes.map((node, index) => (
                  <motion.div
                    key={node.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: node.x, top: node.y }}
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            y: [0, -3, 0],
                            scale: [1, 1.03, 1],
                          }
                    }
                    transition={{ duration: 2.8, delay: index * 0.22, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]" />
                    <div className="mt-1 rounded-full border border-white/20 bg-[#081428]/85 px-2 py-0.5 text-[10px] font-semibold text-white/80 backdrop-blur-sm">
                      {node.label}
                    </div>
                  </motion.div>
                ))}

                {/* Label principal */}
                <motion.div
                  className="absolute right-3 top-3 rounded-full border border-primary-green/35 bg-[#071b1f]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-green backdrop-blur-sm"
                  animate={prefersReducedMotion ? {} : { opacity: [0.72, 1, 0.72] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Reseau actif
                </motion.div>
              </div>
            </motion.div>

            {audienceCards.map(({ title, subtitle, to, Icon, tone, bgTone }, index) => (
              <Link key={title} to={to} className={index === 2 ? 'sm:col-span-2' : ''}>
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { y: -3 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="group flex h-full items-center gap-3 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl transition"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bgTone} ${tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-sm text-gray-600">{subtitle}</p>
                  </div>
                  <motion.div
                    animate={prefersReducedMotion ? {} : { x: [0, 2, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight className="ml-auto h-5 w-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-gray-700" />
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
