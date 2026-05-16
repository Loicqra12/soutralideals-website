import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { LearnIcon, CollaborateIcon, GrowIcon, ImpactIcon } from '../icons';
import { LearnIllustration, CollaborateIllustration, GrowIllustration, ImpactIllustration } from '../illustrations';

type PillarColor = 'primary-blue' | 'primary-green' | 'gold-premium';

const COLOR: Record<PillarColor, { text: string; bg: string; border: string; hoverBorder: string }> = {
  'primary-blue':  { text: 'text-primary-blue',  bg: 'bg-primary-blue/10',  border: 'border-primary-blue/20',  hoverBorder: 'group-hover:border-primary-blue/50'  },
  'primary-green': { text: 'text-primary-green', bg: 'bg-primary-green/10', border: 'border-primary-green/20', hoverBorder: 'group-hover:border-primary-green/50' },
  'gold-premium':  { text: 'text-gold-premium',  bg: 'bg-gold-premium/10',  border: 'border-gold-premium/20',  hoverBorder: 'group-hover:border-gold-premium/50'  },
};

const pillars = [
  {
    id: 'learn',
    title: 'Apprendre ensemble, grandir ensemble',
    description: 'Formations pratiques, mentorat personnalisé et partage d\'expérience entre pairs. Accédez à des guides pratiques, conseils business & techniques, et bénéficiez de l\'assistance de notre IA Soutrali.',
    icon: LearnIcon,
    illustration: LearnIllustration,
    color: 'primary-blue' as PillarColor,
    gradient: 'from-primary-blue to-primary-green',
  },
  {
    id: 'collaborate',
    title: 'Travailler ensemble sur des projets réels',
    description: 'Rejoignez des missions freelance, créez des partenariats stratégiques et collaborez au sein d\'équipes projet multidisciplinaires. La force du collectif pour des résultats exceptionnels.',
    icon: CollaborateIcon,
    illustration: CollaborateIllustration,
    color: 'primary-green' as PillarColor,
    gradient: 'from-primary-green to-gold-premium',
  },
  {
    id: 'grow',
    title: 'Évoluer professionnellement et économiquement',
    description: 'Système de niveaux progressif, badges de compétence et réputation qui s\'acquiert au fil de vos contributions. Plus vous vous engagez, plus vous accédez à des opportunités exclusives.',
    icon: GrowIcon,
    illustration: GrowIllustration,
    color: 'gold-premium' as PillarColor,
    gradient: 'from-gold-premium to-primary-blue',
  },
  {
    id: 'impact',
    title: 'Développer localement et créer de l\'inclusion',
    description: 'Valorisation des métiers informels, digitalisation des services traditionnels et impact social mesurable. Ensemble, nous transformons l\'économie locale et créons des opportunités durables.',
    icon: ImpactIcon,
    illustration: ImpactIllustration,
    color: 'primary-green' as PillarColor,
    gradient: 'from-primary-green via-primary-blue to-gold-premium',
  },
];

export const CommunityPillars = () => {
  return (
    <SectionWrapper id="piliers" bg="dark">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-5xl">
            Les Piliers de la{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              Communauté
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            Ce qui rend la communauté Soutrali unique et puissante
          </p>
        </motion.div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          const Illustration = pillar.illustration;
          const c = COLOR[pillar.color];

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-8 transition-all duration-300 ${c.hoverBorder}`}>

                {/* Fond dégradé discret au hover — Tailwind uniquement */}
                <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${c.bg.replace('/10', '/0')} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                {/* Icône */}
                <div className="relative z-10 mb-6">
                  <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${c.bg} ${c.border}`}>
                    <Icon size={32} className={c.text} />
                  </div>
                </div>

                {/* Contenu */}
                <div className="relative z-10 flex-1">
                  <h3 className={`mb-4 text-2xl font-bold transition-colors group-hover:${c.text}`}>
                    {pillar.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-text-secondary">
                    {pillar.description}
                  </p>
                </div>

                {/* Illustration */}
                <div className="relative z-10 mt-6">
                  <Illustration className="w-full" />
                </div>

                {/* Ligne basse au hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
