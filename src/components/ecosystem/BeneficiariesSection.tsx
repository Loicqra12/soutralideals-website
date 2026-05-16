import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { accent, Chip, EcosystemContainer, sectionSurface, type Accent } from './shared';
import { IconMission, IconProfiles, IconShop, IconVisionGlobe } from './icons';

type Profile = {
  title: string;
  impact: string;
  sub: string;
  benefits: string[];
  color: Accent;
  Icon: ComponentType<{ className?: string }>;
  featured?: boolean;
};

const PROFILES: Profile[] = [
  {
    title: 'Prestataire',
    impact: 'Visibilité accrue',
    sub: 'Artisan, technicien, agent de service',
    benefits: ['Visibilité accrue', 'Plus de clients', 'Badge vérifié'],
    color: 'green',
    Icon: IconProfiles,
  },
  {
    title: 'Freelance',
    impact: 'Missions qualifiées',
    sub: 'Dev, designer, consultant digital',
    benefits: ['Missions qualifiées', 'Crédibilité', 'Portfolio visible'],
    color: 'blue',
    Icon: IconMission,
  },
  {
    title: 'Vendeur',
    impact: 'Ventes en ligne',
    sub: 'Boutique, artisan, commerçant local',
    benefits: ['Ventes en ligne', 'Paiement sécurisé', 'Livraison trackée'],
    color: 'gold',
    Icon: IconShop,
  },
  {
    title: 'Utilisateur',
    impact: 'Confiance totale',
    sub: 'Client, particulier, entreprise',
    benefits: ['Services fiables', 'Géolocalisation', 'Confiance totale'],
    color: 'green',
    Icon: IconVisionGlobe,
    featured: true,
  },
];

const STAGGER_OFFSET = [
  'ml-0',
  'ml-3 sm:ml-6 md:ml-10',
  'ml-6 sm:ml-12 md:ml-20',
  'ml-9 sm:ml-[3.25rem] md:ml-[7.5rem]',
];

function BenefitBanner({
  profile,
  index,
  reduced,
}: {
  profile: Profile;
  index: number;
  reduced: boolean;
}) {
  const { title, impact, sub, benefits, color, Icon, featured } = profile;
  const c = accent(color, 'light');
  const s = sectionSurface('light');

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, x: -28, y: 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.48, delay: 0.08 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced || featured ? {} : { y: -3, transition: { duration: 0.2 } }}
      className={`group relative ${STAGGER_OFFSET[index]}`}
    >
      <div
        className={`flex items-stretch gap-0 overflow-hidden rounded-2xl border transition-shadow duration-300 ${
          featured
            ? 'border-transparent bg-gradient-to-r from-[#0a1a16] via-[#0d3d2e] to-[#0c2847] shadow-[0_20px_50px_-16px_rgba(34,197,94,0.35)]'
            : `border-[#e2e4e8] bg-white/95 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_36px_-10px_rgba(0,0,0,0.12)] ${c.hoverBorder}`
        }`}
      >
        <motion.div
          className={`flex min-w-[7.5rem] shrink-0 items-center justify-center px-4 py-5 sm:min-w-[9.5rem] sm:px-5 md:min-w-[11rem] md:py-6 ${
            featured ? 'bg-white/5' : 'bg-[#f8f9fa]'
          }`}
        >
          <p
            className={`text-center font-heading text-lg font-bold leading-[1.15] tracking-tight sm:text-xl md:text-2xl ${
              featured ? 'text-white' : c.text
            }`}
          >
            {impact}
          </p>
        </motion.div>

        <div
          className={`flex min-w-0 flex-1 flex-col justify-center border-l px-4 py-4 sm:px-5 md:py-5 ${
            featured ? 'border-white/15' : 'border-[#eceef1]'
          }`}
        >
          <p className={`text-sm font-bold sm:text-base ${featured ? 'text-white' : s.heading}`}>{title}</p>
          <p className={`mt-0.5 text-xs sm:text-sm ${featured ? 'text-white/75' : s.muted}`}>{sub}</p>
          <p
            className={`mt-2 hidden text-xs leading-relaxed sm:block md:text-sm ${
              featured ? 'text-white/65' : s.body
            }`}
          >
            {benefits.join(' · ')}
          </p>
        </div>

        <div
          className={`flex w-14 shrink-0 items-center justify-center sm:w-16 ${
            featured ? 'text-white/70' : c.text
          }`}
        >
          <Icon className="h-5 w-5 opacity-80 transition-opacity group-hover:opacity-100 sm:h-6 sm:w-6" />
        </div>
      </div>

      <ul className={`mt-2 flex flex-wrap gap-2 sm:hidden ${STAGGER_OFFSET[index]}`}>
        {benefits.map((b) => (
          <li
            key={b}
            className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
              featured ? 'bg-white/15 text-white/90' : `bg-[#f0f1f3] ${s.body}`
            }`}
          >
            {b}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function BeneficiariesSection({ reduced }: { reduced: boolean }) {
  const s = sectionSurface('light');

  return (
    <section className={`relative overflow-hidden border-t py-20 md:py-28 ${s.bg} ${s.border}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(34,197,94,0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_90%_100%,rgba(59,130,246,0.05),transparent)]" />

      <EcosystemContainer className="relative z-10">
        <div className="lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16 xl:gap-24">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-12 text-center lg:sticky lg:top-28 lg:mb-0 lg:text-left"
          >
            <Chip color="green">Tout le monde gagne</Chip>
            <h2 className={`mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem] ${s.heading}`}>
              Qui{' '}
              <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
                bénéficie
              </span>{' '}
              de l&apos;écosystème ?
            </h2>
            <p className={`mx-auto mt-5 max-w-md text-sm leading-relaxed md:text-base lg:mx-0 ${s.body}`}>
              Chaque profil y trouve sa place : des opportunités concrètes pour les talents, des outils fiables pour
              les commerçants, une expérience rassurante pour les clients.
            </p>
          </motion.div>

          <div className="mx-auto w-full max-w-xl space-y-4 sm:space-y-5 lg:mx-0 lg:max-w-none lg:pt-2">
            {PROFILES.map((profile, i) => (
              <BenefitBanner key={profile.title} profile={profile} index={i} reduced={reduced} />
            ))}
          </div>
        </div>
      </EcosystemContainer>
    </section>
  );
}
