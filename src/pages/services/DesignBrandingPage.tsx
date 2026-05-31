import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import {
  Palette, Layout, Layers, Image, ArrowRight, Check,
  ChevronLeft, ChevronRight, Sparkles, Eye, Brush, Smartphone,
} from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    id: 1,
    label: 'Analyse & Immersion',
    icon: Eye,
    description:
      'Nous plongeons dans votre univers pour comprendre votre marque, votre cible et vos ambitions. Sessions Discovery, analyse concurrentielle et positionnement marché ivoirien.',
    checklist: ["Audit de l'identité existante", 'Analyse des personas cibles', 'Benchmark concurrentiel'],
  },
  {
    id: 2,
    label: 'Conception & Idéation',
    icon: Brush,
    description:
      'Nos designers explorent plusieurs directions créatives. Moodboards, esquisses, prototypage en Figma jusqu\'à la direction artistique définitive validée avec vous.',
    checklist: ['Moodboards & directions créatives', 'Wireframes & User Flows', 'Prototype interactif Figma'],
  },
  {
    id: 3,
    label: 'Production & Raffinement',
    icon: Layers,
    description:
      'La direction validée prend vie dans tous ses détails : animations, micro-interactions, assets visuels et design system complet prêt pour vos équipes.',
    checklist: ['Design System & composants', 'Animations & micro-interactions', 'Assets multi-formats exportés'],
  },
  {
    id: 4,
    label: 'Livraison & Suivi',
    icon: Smartphone,
    description:
      'Handoff développeur documenté, tests utilisateurs finaux et accompagnement post-lancement pour affiner le design selon les retours terrain réels.',
    checklist: ['Handoff développeur (Figma/Zeplin)', 'Tests utilisateurs & itérations', 'Accompagnement post-lancement'],
  },
];

const OFFERINGS = [
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: "Conception d'interfaces centrées sur l'usage et la conversion. Chaque écran est pensé pour guider l'utilisateur vers l'action.",
    features: ['Prototypage interactif (Figma)', 'User Research & Tests', 'Design Systems', 'Animation & Micro-interactions'],
  },
  {
    icon: Palette,
    title: 'Branding & Identité',
    description: "Création d'univers de marque cohérents et impactants. Votre logo ne suffit pas — votre marque doit parler avant même que vous ouvriez la bouche.",
    features: ['Stratégie de marque', 'Logos & Chartes graphiques', 'Tone of Voice', 'Brand Guidelines complets'],
  },
  {
    icon: Layers,
    title: 'Design de Service',
    description: "Optimisation de l'ensemble du parcours client, online et offline. Chaque point de contact avec votre marque est une opportunité de conversion.",
    features: ['Customer Journey Maps', 'Blueprints de service', 'Optimisation des points de contact', 'Design Sprint'],
  },
  {
    icon: Image,
    title: 'Contenu Visuel',
    description: "Production d'assets visuels premium pour tous vos canaux. Du motion design à l'illustration, vos contenus se distinguent sur tous les écrans.",
    features: ['Illustrations 3D & 2D', 'Motion Design', 'Présentations investisseurs', 'Assets réseaux sociaux'],
  },
];

// ── Composant ─────────────────────────────────────────────────────────────────
export const DesignBrandingPage = () => {
  const { pathname } = useLocation();
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <SEO
        title="Design, Expérience & Branding"
        description="Identité de marque premium et UI/UX design pour entreprises ambitieuses en Côte d'Ivoire. Prototypage Figma, Brand Guidelines, Motion Design, Design Systems."
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Design & Branding', path: pathname },
        ]}
      />

      <div className="min-h-screen bg-white pt-24">

        {/* ══════════════════════════════════════════════════════════════
            1. HERO — Split layout image ↔ texte
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
                  Identité & UI/UX
                </span>
                <h1 className="mb-6 font-heading text-5xl font-black leading-[1.1] text-gray-900 md:text-6xl">
                  Design qui{' '}
                  <span className="relative inline-block text-primary-green">
                    convertit
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary-green"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </span>{' '}
                  et marque les esprits
                </h1>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
                  Le beau ne suffit pas. Nous concevons des identités qui marquent et des interfaces
                  qui convertissent. L'alliance de l'esthétique et de l'ergonomie, au service de votre croissance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/devis"
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-800"
                  >
                    Démarrer mon projet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-bold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                  >
                    Parler à un expert
                  </Link>
                </div>
              </motion.div>

              {/* → Visuel CSS art (brand system mock) */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto max-w-sm"
              >
                {/* Main card */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
                  {/* Window dots */}
                  <div className="mb-5 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-primary-green" />
                    <span className="ml-2 font-mono text-xs text-gray-400">brand_system.fig</span>
                  </div>
                  {/* Color palette swatches */}
                  <div className="mb-5 flex gap-2">
                    {['#111111', '#22C55D', '#3B82F6', '#F59E0B', '#EC4899'].map((c) => (
                      <motion.div
                        key={c}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="h-10 w-10 cursor-pointer rounded-xl shadow-sm"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  {/* Typography preview */}
                  <div className="mb-4 rounded-xl bg-gray-50 p-4">
                    <p className="mb-1 font-mono text-[10px] text-gray-400">HEADING / Outfit Black</p>
                    <p className="font-heading text-2xl font-black text-gray-900">Votre Marque</p>
                    <p className="mt-1 text-sm text-gray-400">Corps / Inter Regular — lisible</p>
                  </div>
                  {/* Logo placeholder */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-green/15">
                      <Sparkles className="h-5 w-5 text-primary-green" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Votre Logo</p>
                      <p className="text-xs text-gray-400">identité visuelle unifiée</p>
                    </div>
                  </div>
                </div>
                {/* Floating accents */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-4 -top-4 rounded-2xl bg-primary-green p-3 shadow-lg shadow-primary-green/30"
                >
                  <Palette className="h-5 w-5 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 rounded-2xl bg-gray-900 p-3 shadow-lg"
                >
                  <Layout className="h-5 w-5 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. DÉFI / SOLUTION / RÉSULTAT — 3 cards colorées
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  label: 'Le Défi',
                  text: "Une image de marque incohérente ou une interface utilisateur complexe qui fait fuir vos clients avant même qu'ils découvrent votre offre.",
                  borderColor: 'border-l-red-400',
                  bg: 'bg-red-50',
                  badgeClass: 'text-red-500 bg-red-100',
                  dot: 'bg-red-400',
                },
                {
                  label: 'Notre Solution',
                  text: 'Une approche Design Thinking centrée sur l\'utilisateur et une direction artistique premium, adaptée au marché ivoirien et à votre cible.',
                  borderColor: 'border-l-primary-green',
                  bg: 'bg-primary-green/5',
                  badgeClass: 'text-primary-green bg-primary-green/10',
                  dot: 'bg-primary-green',
                },
                {
                  label: 'Le Résultat',
                  text: 'Une marque forte, mémorable et des produits digitaux que vos utilisateurs adorent utiliser — et surtout, recommandent autour d\'eux.',
                  borderColor: 'border-l-gray-900',
                  bg: 'bg-white',
                  badgeClass: 'text-gray-900 bg-gray-100',
                  dot: 'bg-gray-900',
                },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -4 }}
                  className={`rounded-2xl border-l-4 p-8 shadow-sm transition-shadow hover:shadow-md ${card.borderColor} ${card.bg}`}
                >
                  <span className={`mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${card.badgeClass}`}>
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${card.dot}`} />
                    {card.label}
                  </span>
                  <p className="leading-relaxed text-gray-700">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. NOS EXPERTISES — Alternance gauche / droite (comme capture 1)
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="container-custom max-w-6xl">
            <div className="mb-16 text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest text-primary-green"
              >
                Ce que nous créons
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-3 font-heading text-4xl font-black text-gray-900 md:text-5xl"
              >
                Nos Expertises
              </motion.h2>
            </div>

            <div className="space-y-20">
              {OFFERINGS.map((offer, i) => (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid items-center gap-12 lg:grid-cols-2"
                >
                  {/* Texte — alterne gauche/droite */}
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-green/10">
                      <offer.icon className="h-7 w-7 text-primary-green" />
                    </div>
                    <h3 className="mb-3 font-heading text-3xl font-black text-gray-900">{offer.title}</h3>
                    <p className="mb-6 text-lg leading-relaxed text-gray-600">{offer.description}</p>
                    <ul className="mb-8 space-y-3">
                      {offer.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-gray-700">
                          <Check className="h-4 w-4 shrink-0 text-primary-green" />
                          <span className="font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/devis"
                      className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
                    >
                      Je veux ce service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Visuel illustratif */}
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-gray-100 bg-gray-50 p-10"
                    >
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-green/10">
                        <offer.icon className="h-10 w-10 text-primary-green" />
                      </div>
                      <p className="mb-1 font-heading text-xl font-black text-gray-900">{offer.title}</p>
                      <p className="mb-4 text-sm text-gray-500">Expertise Soutrali Deals</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {offer.features.slice(0, 2).map((f) => (
                          <span
                            key={f}
                            className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. NOTRE PROCESSUS — Carousel d'étapes (comme capture 2)
        ══════════════════════════════════════════════════════════════ */}
        <section className="border-y border-gray-100 bg-gray-50 py-20">
          <div className="container-custom max-w-6xl">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-green">
                Comment nous travaillons
              </span>
              <h2 className="mt-3 font-heading text-4xl font-black text-gray-900">
                Notre Processus Créatif
              </h2>
              <p className="mt-2 max-w-xl text-gray-600">
                Chaque projet suit une méthode éprouvée pour garantir un résultat à la hauteur de vos ambitions.
              </p>
              {/* Bénéfices rapides */}
              <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-600">
                {[
                  'Direction artistique alignée à votre ADN',
                  'Processus transparent étape par étape',
                  'Livrables documentés & clé en main',
                ].map((b) => (
                  <span key={b} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-green" /> {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Étape active */}
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
                    {(() => { const Icon = STEPS[currentStep].icon; return <Icon className="h-8 w-8 text-primary-green" />; })()}
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

            {/* Navigation étapes */}
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
            5. POUR QUI + BÉNÉFICES — 2 colonnes
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-20">
          <div className="container-custom max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h3 className="mb-8 flex items-center gap-3 font-heading text-2xl font-black text-gray-900">
                  <span className="h-8 w-1 rounded-full bg-primary-green" />
                  Pour qui ?
                </h3>
                <div className="space-y-3">
                  {[
                    'Marques ambitieuses voulant monter en gamme',
                    "Produits digitaux (SaaS/Apps) cherchant à améliorer leur UX",
                    "Entreprises lançant une nouvelle offre",
                  ].map((t, i) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-colors hover:border-primary-green/20 hover:bg-primary-green/5"
                    >
                      <div className="h-2 w-2 shrink-0 rounded-full bg-primary-green" />
                      <span className="font-medium text-gray-800">{t}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-8 flex items-center gap-3 font-heading text-2xl font-black text-gray-900">
                  <span className="h-8 w-1 rounded-full bg-gray-900" />
                  Bénéfices clés
                </h3>
                <div className="space-y-5">
                  {[
                    'Une différenciation immédiate face à la concurrence.',
                    'Une réduction des coûts de développement grâce au prototypage précis.',
                    'Une augmentation mesurable du taux de conversion et de rétention.',
                    'Une cohérence visuelle absolue sur tous vos supports.',
                  ].map((b, i) => (
                    <motion.div
                      key={b}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-green/10">
                        <Check className="h-3.5 w-3.5 text-primary-green" />
                      </div>
                      <p className="leading-relaxed text-gray-700">{b}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            6. CTA — Bande sombre finale
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-900 py-20">
          <div className="container-custom max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 font-heading text-4xl font-black text-white md:text-5xl">
                Prêt à créer votre identité de marque ?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">
                Démarrons avec un audit gratuit de votre image actuelle. Aucun engagement.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/devis"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-green px-8 py-4 text-sm font-bold text-[#062013] shadow-glow-green transition hover:-translate-y-0.5 hover:bg-primary-green/90"
                >
                  <Sparkles className="h-4 w-4" />
                  Démarrer mon projet design
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
