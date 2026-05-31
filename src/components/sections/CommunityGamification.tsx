import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { ProgressBar } from '../icons';
import { StarsIcon } from '../icons';
import { BadgeDebutant, BadgeExpert, BadgeAmbassadeur } from '../icons';

const levels = [
  {
    id: 'debutant',
    step: '01',
    name: 'Débutant',
    tagline: 'Premiers pas dans la communauté',
    description: 'Nouveau membre : accès aux bases, au réseau et aux premières opportunités.',
    progress: 25,
    color: 'text-primary-green',
    ring: 'ring-primary-green/50',
    nodeBg: 'bg-primary-green/15 border-primary-green/40',
    accent: 'from-primary-green/80 to-emerald-500/60',
    cardGlow: 'shadow-[0_0_48px_-12px_rgba(34,197,94,0.35)]',
    border: 'border-primary-green/25',
    Icon: BadgeDebutant,
    perks: ['Profil visible dans le réseau', 'Accès aux formations de base', 'Participation aux discussions'],
  },
  {
    id: 'intermediaire',
    step: '02',
    name: 'Intermédiaire',
    tagline: 'Votre réputation grandit',
    description: 'Expérience acquise : plus de visibilité et de missions adaptées à votre profil.',
    progress: 50,
    color: 'text-primary-blue',
    ring: 'ring-primary-blue/50',
    nodeBg: 'bg-primary-blue/15 border-primary-blue/40',
    accent: 'from-primary-blue/80 to-cyan-500/60',
    cardGlow: 'shadow-[0_0_48px_-12px_rgba(59,130,246,0.3)]',
    border: 'border-primary-blue/25',
    Icon: StarsIcon,
    perks: ['Badges affichés sur votre profil', 'Missions standard prioritaires', 'Recommandations clients'],
  },
  {
    id: 'expert',
    step: '03',
    name: 'Expert',
    tagline: 'Référence sur la plateforme',
    description: 'Réputation établie : missions premium et reconnaissance communautaire.',
    progress: 75,
    color: 'text-gold-premium',
    ring: 'ring-gold-premium/50',
    nodeBg: 'bg-gold-premium/15 border-gold-premium/40',
    accent: 'from-gold-premium/80 to-amber-500/60',
    cardGlow: 'shadow-[0_0_48px_-12px_rgba(212,175,55,0.28)]',
    border: 'border-gold-premium/30',
    Icon: BadgeExpert,
    perks: ['Accès prioritaire aux nouvelles missions', 'Taux de commission réduits', 'Événements réservés'],
    badges: ['Premier projet', '100 % satisfaction', 'Mentor actif'],
  },
  {
    id: 'ambassadeur',
    step: '04',
    name: 'Ambassadeur',
    tagline: 'Leader de la communauté',
    description: 'Vous inspirez et fédérez : avantages exclusifs et rôle de référence.',
    progress: 100,
    color: 'text-gold-premium',
    ring: 'ring-gold-premium/60',
    nodeBg: 'bg-gold-premium/20 border-gold-premium/50',
    accent: 'from-gold-premium via-amber-400 to-primary-green/70',
    cardGlow: 'shadow-[0_0_56px_-10px_rgba(212,175,55,0.4)]',
    border: 'border-gold-premium/35',
    Icon: BadgeAmbassadeur,
    perks: ['Support prioritaire dédié', 'Visibilité maximale sur la plateforme', 'Invitations événements VIP'],
    badges: ['Innovateur', 'Ambassadeur', 'Top contributeur'],
  },
] as const;

const TEXT_BODY = 'text-[#d4dae4]';
const TEXT_MUTED = 'text-[#aeb8c8]';

function LevelNode({
  level,
  isActive,
  onSelect,
}: {
  level: (typeof levels)[number];
  isActive: boolean;
  onSelect: () => void;
}) {
  const Icon = level.Icon;
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all ${
        isActive
          ? `${level.nodeBg} ${level.border} ${level.cardGlow}`
          : 'border-transparent bg-transparent hover:bg-white/[0.04]'
      }`}
    >
      <span
        className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
          isActive ? `${level.nodeBg} ${level.ring} ring-2` : 'border-[#3a4250] bg-[#141820] group-hover:border-[#505868]'
        }`}
      >
        {isActive && (
          <motion.span
            layoutId="gamification-node-glow"
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${level.accent} opacity-40 blur-sm`}
          />
        )}
        <Icon size={isActive ? 22 : 18} className={`relative z-10 ${isActive ? level.color : 'text-[#8a96a8]'}`} />
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block text-[10px] font-bold uppercase tracking-widest ${isActive ? level.color : 'text-[#6e7a8c]'}`}>
          {level.step}
        </span>
        <span className={`block text-sm font-semibold ${isActive ? 'text-white' : 'text-[#c8d0dc]'}`}>{level.name}</span>
      </span>
    </button>
  );
}

function LevelDetailCard({ level, reduced }: { level: (typeof levels)[number]; reduced: boolean }) {
  const Icon = level.Icon;
  const badges = 'badges' in level ? level.badges : undefined;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduced ? undefined : { opacity: 0, x: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-3xl border bg-[#100e14]/90 p-6 backdrop-blur-md md:p-8 ${level.border} ${level.cardGlow}`}
    >
      <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${level.accent} opacity-20 blur-3xl`} aria-hidden />

      <div className="relative z-10">
        <p className={`text-xs font-bold uppercase tracking-[0.2em] ${level.color}`}>{level.tagline}</p>
        <div className="mt-4 flex flex-wrap items-start gap-4">
          <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border bg-[#0a0c10]/80 ${level.border}`}>
            <Icon size={36} className={level.color} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">{level.name}</h3>
            <p className={`mt-2 text-sm leading-relaxed md:text-base ${TEXT_BODY}`}>{level.description}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs font-medium">
            <span className={TEXT_MUTED}>Progression du niveau</span>
            <span className="text-white">{level.progress}%</span>
          </div>
          <ProgressBar progress={level.progress} height={10} showLabel={false} />
        </div>

        <ul className="mt-6 space-y-3">
          {level.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary-green/15">
                <Check className="h-3.5 w-3.5 text-primary-green" strokeWidth={2.5} />
              </span>
              <span className={`text-sm ${TEXT_BODY}`}>{perk}</span>
            </li>
          ))}
        </ul>

        {badges && (
          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#9aa8b8]">Badges débloqués</p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-gold-premium/25 bg-gold-premium/10 px-3 py-1 text-xs font-medium text-[#e8d5a3]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export const CommunityGamification = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const reduced = useReducedMotion();
  const active = levels[activeIndex];

  return (
    <section
      id="gamification"
      className="relative scroll-mt-28 overflow-hidden border-y border-[#1f1a14] bg-[#0c0a0f] py-16 md:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-gold-premium/[0.09] blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-primary-green/[0.06] blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 xl:grid-cols-[minmax(0,380px)_1fr]">
          {/* Colonne éditoriale */}
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial={reduced ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-premium">
              <Sparkles className="h-3.5 w-3.5" />
              Progression
            </p>
            <h2 className="font-heading text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.75rem]">
              Chaque action vous fait{' '}
              <span className="bg-gradient-to-r from-gold-premium via-amber-300 to-primary-green bg-clip-text text-transparent">
                monter
              </span>
            </h2>
            <p className={`mt-4 text-base leading-relaxed md:text-lg ${TEXT_BODY}`}>
              Missions, avis clients, formations et entraide : votre engagement se transforme en visibilité, crédibilité
              et opportunités concrètes.
            </p>

            <Link to="/contact" className="mt-8 inline-block">
              <Button variant="secondary" className="h-12 rounded-xl px-6">
                Découvrir mon parcours
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <p className={`mt-6 text-sm ${TEXT_MUTED}`}>
              4 niveaux · De Débutant à Ambassadeur
            </p>
          </motion.div>

          {/* Parcours + carte détail */}
          <div className="relative min-w-0">
            {/* Filigrane décoratif */}
            <div
              className="pointer-events-none absolute inset-0 hidden opacity-[0.07] lg:block"
              aria-hidden
            >
              <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-gold-premium/40" />
              <div className="absolute right-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-primary-green/30" />
            </div>

            <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-10">
              {/* Timeline */}
              <div className="relative lg:w-[220px] lg:shrink-0">
                <div
                  className="absolute bottom-3 left-[19px] top-3 hidden w-px bg-gradient-to-b from-primary-green via-primary-blue to-gold-premium lg:block"
                  aria-hidden
                />
                <div className="flex flex-col gap-2">
                  {levels.map((level, index) => (
                    <LevelNode
                      key={level.id}
                      level={level}
                      isActive={activeIndex === index}
                      onSelect={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Carte active */}
              <div className="min-w-0 flex-1">
                <AnimatePresence mode="wait">
                  <LevelDetailCard key={active.id} level={active} reduced={!!reduced} />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
