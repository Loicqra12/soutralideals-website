import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import {
  TrendingUp, Users, BookOpen, MessageSquare,
  ArrowRight, Check, ChevronLeft, ChevronRight,
  Sparkles, Target, Rocket, BarChart2,
} from 'lucide-react';

// ── Counter hook ──────────────────────────────────────────────────────────────
function useCounter(end: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const start = () => {
    if (started.current) return;
    started.current = true;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  return { count, start };
}

// ── Data ──────────────────────────────────────────────────────────────────────
const KPIS = [
  { end: 300, suffix: '%', label: 'Croissance moyenne du trafic SEO sur 6 mois', icon: TrendingUp },
  { end: 50, suffix: '+', label: 'Clients accompagnés en Côte d\'Ivoire & Afrique de l\'Ouest', icon: Users },
  { end: 12, suffix: 'x', label: 'Retour sur investissement campagnes Social Ads', icon: BarChart2 },
];

const OFFERINGS = [
  {
    icon: TrendingUp,
    title: 'Growth & Acquisition',
    description: 'Attirez des leads qualifiés et convertissez-les en clients. Du SEO aux Social Ads, chaque canal est optimisé pour votre ROI.',
    features: ['SEO / SEA (Référencement)', 'Stratégie de contenu (Inbound)', 'Campagnes Social Ads', 'Optimisation du taux de conversion (CRO)'],
  },
  {
    icon: BookOpen,
    title: 'Formation Équipes',
    description: 'Programmes de formation sur-mesure pour vos collaborateurs. Montez en compétence, gagnez en autonomie, réduisez votre dépendance.',
    features: ['Formation aux outils digitaux', 'Initiation au code pour non-techs', 'Formation Design Thinking', 'Ateliers Product Management'],
  },
  {
    icon: Rocket,
    title: 'Accompagnement Startup',
    description: 'Coaching pour founders et équipes produit. De l\'idée au lancement, nous structurons votre croissance et votre go-to-market.',
    features: ['Mentoring Produit', 'Préparation aux levées de fonds', 'Structuration des ventes', 'Recrutement des premiers profils'],
  },
  {
    icon: MessageSquare,
    title: 'Community Management',
    description: 'Animation et engagement de vos communautés. Votre présence en ligne doit être vivante, cohérente et génératrice de confiance.',
    features: ['Stratégie Social Media', 'Création de contenu', 'Gestion de crise', 'Newsletter & Emailing'],
  },
];

const STEPS = [
  { id: 1, label: 'Audit & Diagnostic', description: "Analyse complète de votre présence digitale actuelle, de vos canaux d'acquisition et de vos objectifs de croissance à 12 mois.", checklist: ['Audit SEO & contenu', 'Analyse des canaux payants', 'Benchmark concurrents'] },
  { id: 2, label: 'Stratégie & Roadmap', description: "Définition d'une stratégie de croissance sur-mesure avec des objectifs SMART, des KPIs clairs et une roadmap d'exécution priorisée.", checklist: ['Objectifs SMART & KPIs', 'Plan de contenu 3 mois', 'Budget & allocation par canal'] },
  { id: 3, label: 'Exécution & Création', description: "Mise en œuvre opérationnelle par nos experts : création de contenus, lancement de campagnes, A/B tests et optimisation continue.", checklist: ['Création de contenus premium', 'Lancement des campagnes', 'A/B tests & optimisation'] },
  { id: 4, label: 'Analyse & Reporting', description: "Reporting mensuel détaillé avec les métriques clés, les enseignements et les ajustements stratégiques pour la période suivante.", checklist: ['Rapport mensuel complet', 'Analyse des performances', 'Recommandations actionnables'] },
];

// ── Composant KPI ─────────────────────────────────────────────────────────────
function KpiCard({ end, suffix, label, icon: Icon }: { end: number; suffix: string; label: string; icon: React.ElementType }) {
  const { count, start } = useCounter(end);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={start}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-green/10">
          <Icon className="h-5 w-5 text-primary-green" />
        </div>
        <div className="h-0.5 flex-1 rounded-full bg-primary-green/20" />
      </div>
      <p className="mb-1 font-heading text-5xl font-black text-gray-900">
        {count}
        <span className="text-primary-green">{suffix}</span>
      </p>
      <p className="text-sm leading-relaxed text-gray-600">{label}</p>
    </motion.div>
  );
}

// ── Composant principal ───────────────────────────────────────────────────────
export const MarketingFormationPage = () => {
  const { pathname } = useLocation();
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <SEO
        title="Marketing Digital & Formation"
        description="Stratégie de croissance digitale, SEO, Social Ads, Community Management et formation équipes en Côte d'Ivoire. Résultats mesurables garantis."
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Marketing & Formation', path: pathname },
        ]}
      />

      <div className="min-h-screen bg-white pt-24">

        {/* ══════════════════════════════════════════════════════════════
            1. HERO — Split : texte gauche / dashboard CSS droite
        ══════════════════════════════════════════════════════════════ */}
        <section className="overflow-hidden border-b border-gray-100 bg-white py-20">
          <div className="container-custom max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* ← Texte */}
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="mb-6 inline-block rounded-full border border-primary-green/30 bg-primary-green/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-green">
                  Croissance & Autonomie
                </span>
                <h1 className="mb-6 font-heading text-5xl font-black leading-[1.1] text-gray-900 md:text-6xl">
                  La tech n'est rien{' '}
                  <span className="text-primary-green">sans utilisateurs</span>
                </h1>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
                  Nous accélérons votre croissance digitale et formons vos équipes pour vous rendre
                  autonomes. Un excellent produit que personne ne connaît, c'est un produit qui échoue.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/devis"
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                  >
                    Accélérer ma croissance
                    <Rocket className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                  >
                    Obtenir un audit gratuit
                  </Link>
                </div>
              </motion.div>

              {/* → Dashboard CSS mock */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto w-full max-w-md"
              >
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
                  {/* Header dashboard */}
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Tableau de bord</p>
                      <p className="font-heading font-black text-gray-900">Croissance — Mai 2025</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-primary-green/10 px-3 py-1.5">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-primary-green" />
                      <span className="text-xs font-bold text-primary-green">Live</span>
                    </div>
                  </div>

                  {/* Mini bar chart */}
                  <div className="mb-5 flex h-20 items-end gap-1.5">
                    {[40, 55, 45, 70, 60, 80, 65, 90, 75, 100, 88, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.4 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                        className={`flex-1 rounded-t-sm ${i === 11 ? 'bg-primary-green' : 'bg-primary-green/20'}`}
                      />
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Sessions', value: '12.4K', up: true },
                      { label: 'Leads', value: '843', up: true },
                      { label: 'Conv.', value: '6.8%', up: true },
                    ].map(({ label, value, up }) => (
                      <div key={label} className="rounded-xl bg-gray-50 p-3 text-center">
                        <p className="font-heading text-lg font-black text-gray-900">{value}</p>
                        <div className="flex items-center justify-center gap-1">
                          <TrendingUp className={`h-3 w-3 ${up ? 'text-primary-green' : 'text-red-400'}`} />
                          <p className="text-[10px] font-semibold text-gray-500">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress bars */}
                  <div className="mt-4 space-y-2.5">
                    {[
                      { label: 'SEO Organique', pct: 72 },
                      { label: 'Social Ads', pct: 54 },
                      { label: 'Email', pct: 38 },
                    ].map(({ label, pct }) => (
                      <div key={label}>
                        <div className="mb-1 flex items-center justify-between">
                          <p className="text-xs font-semibold text-gray-600">{label}</p>
                          <p className="text-xs font-bold text-primary-green">{pct}%</p>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                            className="h-full rounded-full bg-primary-green"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-4 top-8 rounded-2xl bg-primary-green p-3 shadow-lg shadow-primary-green/30"
                >
                  <BarChart2 className="h-5 w-5 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. COMPTEURS KPI — Métriques animées
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom max-w-6xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-green">Résultats concrets</span>
              <h2 className="mt-3 font-heading text-4xl font-black text-gray-900">Des chiffres qui parlent</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {KPIS.map((kpi) => (
                <KpiCard key={kpi.label} {...kpi} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. NOS EXPERTISES — Grille d'icônes (comme capture 3)
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="container-custom max-w-6xl">
            <div className="mb-14 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-green">Nos offres</span>
              <h2 className="mt-3 font-heading text-4xl font-black text-gray-900 md:text-5xl">Nos Expertises</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
                Chaque levier de croissance activé avec précision, selon votre contexte et vos objectifs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {OFFERINGS.map((offer, i) => (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-primary-green/20 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-green/10 transition-colors group-hover:bg-primary-green/20">
                    <offer.icon className="h-6 w-6 text-primary-green" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-black text-gray-900">{offer.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{offer.description}</p>
                  <ul className="space-y-1.5">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="h-3.5 w-3.5 shrink-0 text-primary-green" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. NOTRE APPROCHE — Carousel d'étapes (comme capture 2)
        ══════════════════════════════════════════════════════════════ */}
        <section className="border-y border-gray-100 bg-gray-50 py-20">
          <div className="container-custom max-w-6xl">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-green">Méthodologie</span>
              <h2 className="mt-3 font-heading text-4xl font-black text-gray-900">Notre Approche Growth</h2>
              <p className="mt-2 max-w-xl text-gray-600">
                Un processus structuré pour une croissance maitrisée et durable — pas des quick wins éphémères.
              </p>
              <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-600">
                {[
                  'Stratégie data-driven',
                  'Reporting mensuel transparent',
                  'Objectifs co-construits',
                ].map((b) => (
                  <span key={b} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-green" /> {b}
                  </span>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="grid items-start gap-8 md:grid-cols-[auto_1fr]">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-green/10">
                    <span className="font-heading text-2xl font-black text-primary-green">
                      0{currentStep + 1}
                    </span>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary-green">
                      ÉTAPE {currentStep + 1} / {STEPS.length}
                    </p>
                    <h3 className="mb-3 font-heading text-2xl font-black text-gray-900">
                      {STEPS[currentStep].label}
                    </h3>
                    <p className="mb-5 leading-relaxed text-gray-600">
                      {STEPS[currentStep].description}
                    </p>
                    <ul className="space-y-2">
                      {STEPS[currentStep].checklist.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <Check className="h-4 w-4 shrink-0 text-primary-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                disabled={currentStep === 0}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" /> Précédent
              </button>
              <div className="flex gap-2">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentStep(i)}
                    className={`h-2 rounded-full transition-all ${i === currentStep ? 'w-8 bg-primary-green' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentStep((s) => Math.min(STEPS.length - 1, s + 1))}
                disabled={currentStep === STEPS.length - 1}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 disabled:opacity-30"
              >
                Suivant <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. BÉNÉFICES — Bande verte checkmarks
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-primary-green/5 py-16">
          <div className="container-custom max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="font-heading text-3xl font-black text-gray-900">Ce que vous gagnez</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Une autonomie progressive de vos équipes (moins de dépendance aux prestataires).',
                'Un coût d\'acquisition client (CAC) maîtrisé et continuellement optimisé.',
                'Une marque employeur renforcée par la formation et la montée en compétence.',
                'Une culture digitale diffusée dans toute votre entreprise — durable.',
              ].map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-xl border border-primary-green/20 bg-white p-5"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-green/15">
                    <Check className="h-4 w-4 text-primary-green" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            6. CTA
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-900 py-20">
          <div className="container-custom max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Target className="mx-auto mb-6 h-10 w-10 text-primary-green" />
              <h2 className="mb-4 font-heading text-4xl font-black text-white md:text-5xl">
                Prêt à passer à la vitesse supérieure ?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">
                Un audit gratuit de votre stratégie digitale, sans engagement, pour identifier vos quick wins.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/devis"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-green px-8 py-4 text-sm font-bold text-[#062013] shadow-glow-green transition hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4" />
                  Accélérer ma croissance
                </Link>
                <Link
                  to="/realisations"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/5"
                >
                  Voir nos réalisations <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};
