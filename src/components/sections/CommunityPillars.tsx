import { motion, useReducedMotion } from 'framer-motion';
import { LearnIcon, CollaborateIcon, GrowIcon, ImpactIcon } from '../icons';
import { LearnIllustration, CollaborateIllustration, GrowIllustration, ImpactIllustration } from '../illustrations';

type PillarColor = 'primary-blue' | 'primary-green' | 'gold-premium';

const COLOR: Record<PillarColor, { text: string; bg: string; border: string; num: string }> = {
  'primary-blue': {
    text: 'text-primary-blue',
    bg: 'bg-primary-blue/10',
    border: 'border-primary-blue/20',
    num: 'text-primary-blue/40',
  },
  'primary-green': {
    text: 'text-primary-green',
    bg: 'bg-primary-green/10',
    border: 'border-primary-green/20',
    num: 'text-primary-green/40',
  },
  'gold-premium': {
    text: 'text-gold-premium',
    bg: 'bg-gold-premium/10',
    border: 'border-gold-premium/20',
    num: 'text-gold-premium/40',
  },
};

const pillars = [
  {
    id: 'learn',
    num: '01',
    title: 'Apprendre ensemble, grandir ensemble',
    description:
      "Formations pratiques, mentorat personnalisé et partage d'expérience entre pairs. Guides pratiques, conseils business & techniques, et assistance de notre IA Soutrali.",
    icon: LearnIcon,
    illustration: LearnIllustration,
    color: 'primary-blue' as PillarColor,
    gradient: 'from-primary-blue to-primary-green',
  },
  {
    id: 'collaborate',
    num: '02',
    title: 'Travailler ensemble sur des projets réels',
    description:
      "Missions freelance, partenariats stratégiques et équipes projet multidisciplinaires. La force du collectif pour des résultats exceptionnels.",
    icon: CollaborateIcon,
    illustration: CollaborateIllustration,
    color: 'primary-green' as PillarColor,
    gradient: 'from-primary-green to-gold-premium',
  },
  {
    id: 'grow',
    num: '03',
    title: 'Évoluer professionnellement et économiquement',
    description:
      "Niveaux progressifs, badges de compétence et réputation qui s'acquiert au fil de vos contributions. Plus vous vous engagez, plus vous accédez à des opportunités exclusives.",
    icon: GrowIcon,
    illustration: GrowIllustration,
    color: 'gold-premium' as PillarColor,
    gradient: 'from-gold-premium to-primary-blue',
  },
  {
    id: 'impact',
    num: '04',
    title: "Développer localement et créer de l'inclusion",
    description:
      "Valorisation des métiers informels, digitalisation des services traditionnels et impact social mesurable. Ensemble, nous transformons l'économie locale.",
    icon: ImpactIcon,
    illustration: ImpactIllustration,
    color: 'primary-green' as PillarColor,
    gradient: 'from-primary-green via-primary-blue to-gold-premium',
  },
];

const CARD_SURFACE =
  'rounded-[1.75rem] border border-[#dfe2de] bg-[#eceeed] bg-[linear-gradient(rgba(0,0,0,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.028)_1px,transparent_1px)] bg-[size:40px_40px] shadow-[0_24px_64px_-20px_rgba(0,0,0,0.55)]';

function PillarsIntro() {
  return (
    <div className="relative bg-dark-bg px-4 pb-4 pt-16 text-center sm:px-6 md:pb-8 md:pt-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-5 font-heading text-3xl font-bold text-white md:text-5xl lg:text-[3.25rem]">
          Les Piliers de la{' '}
          <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
            Communauté
          </span>
        </h2>
        <p className="text-base text-text-secondary md:text-lg">
          Ce qui rend la communauté Soutrali unique et puissante
        </p>
      </motion.div>
    </div>
  );
}

function PillarStackCard({
  pillar,
  index,
  reduced,
}: {
  pillar: (typeof pillars)[number];
  index: number;
  reduced: boolean;
}) {
  const Icon = pillar.icon;
  const Illustration = pillar.illustration;
  const c = COLOR[pillar.color];
  const reversed = index % 2 === 1;

  return (
    <article
      className={`${CARD_SURFACE} grid min-h-[min(420px,72vh)] w-full gap-6 overflow-hidden p-6 sm:min-h-[440px] sm:p-8 md:min-h-[460px] md:gap-8 md:p-10 lg:grid-cols-2 lg:items-center ${
        reversed ? '' : ''
      }`}
    >
      <div className={`flex flex-col justify-center ${reversed ? 'lg:order-2' : ''}`}>
        <p className={`mb-2 font-heading text-4xl font-black leading-none md:text-5xl ${c.num}`}>{pillar.num}</p>
        <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${c.bg} ${c.border}`}>
          <Icon size={28} className={c.text} />
        </div>
        <h3 className="mb-4 font-heading text-xl font-bold leading-snug text-[#111] md:text-2xl lg:text-[1.65rem]">
          {pillar.title}
        </h3>
        <p className="max-w-lg text-sm leading-relaxed text-[#5c5c5c] md:text-base">{pillar.description}</p>
        <motion.div
          className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${pillar.gradient}`}
          initial={reduced ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        />
      </div>

      <div
        className={`relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-2xl border border-[#1a2332] bg-[#0b1220] p-4 sm:min-h-[240px] sm:p-6 md:min-h-[280px] ${
          reversed ? 'lg:order-1' : ''
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <Illustration className="relative z-10 w-full max-w-md" />
      </div>
    </article>
  );
}

function CommunityPillarsStack({ reduced }: { reduced: boolean }) {
  return (
    <section id="piliers" className="relative bg-dark-bg">
      <PillarsIntro />

      <div className="relative px-4 pb-28 sm:px-6 lg:px-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            className="sticky flex items-center py-4 md:py-6"
            style={{
              top: '1.25rem',
              zIndex: 10 + index,
              minHeight: index === pillars.length - 1 ? '92vh' : '100vh',
            }}
          >
            <motion.div
              className="mx-auto w-full max-w-[1080px]"
              initial={reduced ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <PillarStackCard pillar={pillar} index={index} reduced={reduced} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CommunityPillarsGrid({ reduced }: { reduced: boolean }) {
  return (
    <section id="piliers" className="border-t border-dark-border bg-dark-bg px-4 py-16 sm:px-6 lg:px-8">
      <PillarsIntro />
      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 lg:gap-12">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={reduced ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <PillarStackCard pillar={pillar} index={index} reduced={reduced} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export const CommunityPillars = () => {
  const reduced = useReducedMotion();

  if (reduced) {
    return <CommunityPillarsGrid reduced />;
  }

  return <CommunityPillarsStack reduced={!!reduced} />;
};
