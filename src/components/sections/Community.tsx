import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Users, Briefcase, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import heroIllustration from '../../assets/images/community/hero/hero-community-illustration.jpg';

const WHATSAPP_URL = 'https://chat.whatsapp.com/JnPGnE5qAFPLTg5foFozm5';

const STATS = [
  { value: '400+', label: 'Membres actifs' },
  { value: '50+', label: 'Partenaires' },
  { value: '24/7', label: 'Entraide' },
] as const;

const audienceCards = [
  {
    title: 'Pour les Freelances',
    subtitle: 'Développeurs, graphistes, rédacteurs…',
    to: '/communaute#freelances',
    Icon: Briefcase,
    tone: 'text-primary-blue',
    bgTone: 'bg-primary-blue/25',
    borderTone: 'border-primary-blue/35',
  },
  {
    title: 'Pour les Artisans',
    subtitle: 'Menuisiers, mécaniciens, coiffeurs…',
    to: '/communaute#artisans',
    Icon: Users,
    tone: 'text-primary-green',
    bgTone: 'bg-primary-green/25',
    borderTone: 'border-primary-green/35',
  },
  {
    title: 'Pour les Commerçants',
    subtitle: 'Boutiques, vendeurs, e-commerçants…',
    to: '/communaute#commercants',
    Icon: ShoppingBag,
    tone: 'text-gold-premium',
    bgTone: 'bg-gold-premium/25',
    borderTone: 'border-gold-premium/35',
  },
];

const ecosystemNodes = [
  { label: 'Freelance', x: '16%', y: '26%' },
  { label: 'Artisan', x: '36%', y: '66%' },
  { label: 'Commerçant', x: '58%', y: '34%' },
  { label: 'Client', x: '80%', y: '62%' },
];

function CommunityPageHero({ reduced }: { reduced: boolean | null }) {
  return (
    <section
      id="communaute"
      className="relative flex min-h-[min(72vh,680px)] items-end overflow-hidden bg-[#070d1c] md:min-h-[min(80vh,760px)] md:items-center"
    >
      <img
        src={heroIllustration}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] md:object-[78%_center]"
        loading="eager"
      />
      <motion.div className="absolute inset-0 bg-[#040b18]/50" aria-hidden />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#040b18]/96 via-[#061024]/88 to-[#061024]/25"
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#040b18]/80 via-transparent to-[#040b18]/45 md:from-[#040b18]/55"
        aria-hidden
      />

      <motion.div className="relative z-10 mx-auto w-full max-w-[1520px] px-4 pb-14 pt-28 text-left sm:px-6 md:pb-20 md:pt-32 lg:px-8 2xl:px-12">
        <motion.div
          className="max-w-xl md:max-w-2xl"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="mb-5 font-heading text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Une communauté qui construit l&apos;économie locale
          </h1>

          <p className="mb-8 text-base leading-relaxed text-white md:text-lg">
            Prestataires, freelances, vendeurs et entrepreneurs avancent ensemble. Plus qu&apos;un réseau :
            un cadre d&apos;entraide, d&apos;opportunités et de progression concrète en Côte d&apos;Ivoire.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduced ? {} : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="sm:flex-1 sm:max-w-xs"
            >
              <Button
                variant="ghost"
                className="h-12 w-full rounded-xl border border-[#25D366]/60 bg-gradient-to-r from-[#25D366] to-[#1fb158] px-5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(37,211,102,0.28)] hover:bg-[#20BA5A]"
              >
                <MessageCircle className="h-4 w-4" />
                Rejoindre WhatsApp
              </Button>
            </motion.a>
            <Link to="/communaute#piliers" className="sm:flex-1 sm:max-w-[11rem]">
              <Button
                variant="outline"
                className="h-12 w-full rounded-xl border-white/40 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Nos avantages
              </Button>
            </Link>
            <Link
              to="/communaute#events"
              className="text-sm font-semibold text-white underline-offset-4 transition hover:underline sm:px-2"
            >
              Voir les événements
            </Link>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/20 pt-8 sm:max-w-xl">
            {STATS.map(({ value, label }, idx) => (
              <motion.div
                key={label}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.35 + idx * 0.06 }}
                className="text-left"
              >
                <motion.div className="font-heading text-2xl font-bold text-white md:text-3xl">{value}</motion.div>
                <p className="mt-0.5 text-xs text-white md:text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function CommunityNetworkBackground({ reduced }: { reduced: boolean | null }) {
  return (
    <motion.div className="absolute inset-0 bg-[#0a1528]" aria-hidden>
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.28),transparent_55%)]" />
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_78%,rgba(59,130,246,0.24),transparent_55%)]" />
      <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#061024]/25 via-transparent to-[#040b18]/50" />

      <svg className="absolute inset-0 h-full w-full opacity-90" viewBox="0 0 100 40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="communityLineProfils" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(74,222,128,0.75)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.75)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M16 11 L36 27 L58 14 L80 25"
          fill="none"
          stroke="url(#communityLineProfils)"
          strokeWidth="0.85"
          strokeLinecap="round"
          strokeDasharray="2.2 2.2"
          animate={reduced ? {} : { pathLength: [0.4, 1, 0.4], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {ecosystemNodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
          animate={reduced ? {} : { y: [0, -4, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 2.8, delay: index * 0.22, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
          <div className="mt-1.5 whitespace-nowrap rounded-full border border-white/25 bg-[#081428]/92 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
            {node.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function CommunityAudienceSection({ reduced }: { reduced: boolean | null }) {
  const softReveal = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section id="profils" className="border-t border-[#e8e8e8]">
      <motion.div
        {...softReveal}
        className="bg-[#f6f7f8] px-4 py-14 sm:px-6 md:py-20 lg:px-8 2xl:px-12"
      >
        <motion.div className="mx-auto max-w-[1520px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#888]">Les Soutraliens</p>
          <h2 className="mx-auto mt-3 max-w-4xl font-heading text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-[#111] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Un réseau pour chaque profil
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6b6b6b] md:text-lg">
            Freelances, artisans et commerçants connectés aux clients et aux opportunités sur la même plateforme.
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="relative min-h-[min(480px,78vw)] overflow-hidden md:min-h-[520px] lg:min-h-[560px]">
        <CommunityNetworkBackground reduced={reduced} />

        <motion.div className="relative z-10 flex min-h-[inherit] items-end px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 md:pb-14 md:pt-10 lg:px-8 2xl:px-12">
          <motion.div className="mx-auto w-full max-w-[1520px]">
            <motion.div
              {...softReveal}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6"
            >
              {audienceCards.map(({ title, subtitle, to, Icon, tone, bgTone, borderTone }, index) => (
                <Link key={title} to={to} className="block h-full">
                  <motion.div
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
                    whileHover={reduced ? {} : { y: -3 }}
                    className="group flex h-full min-h-[140px] items-center gap-4 rounded-3xl border border-white/[0.12] bg-[#1c2636]/55 p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md transition-colors hover:border-white/20 hover:bg-[#243044]/65 sm:min-h-[152px] sm:p-6 md:min-h-[160px] md:p-7"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border sm:h-12 sm:w-12 ${bgTone} ${borderTone} ${tone}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold leading-snug text-white sm:text-lg">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/72">{subtitle}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-white/45 transition group-hover:translate-x-0.5 group-hover:text-white/90" />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export interface CommunityProps {
  /** Sur la page /communaute : hero plein écran + H1 */
  heroAsH1?: boolean;
}

export const Community = ({ heroAsH1 = false }: CommunityProps) => {
  const reduced = useReducedMotion();

  return (
    <>
      <CommunityPageHero reduced={reduced} />
      <CommunityAudienceSection reduced={reduced} />
    </>
  );
};
