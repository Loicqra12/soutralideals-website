import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import {
  Code2, Smartphone, ShoppingCart, Cloud, ArrowRight, Check,
  Sparkles, Terminal, Zap, Shield,
} from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────────────────────
const TABS = [
  {
    id: 'web',
    label: 'Web & SaaS',
    icon: Code2,
    title: 'Développement Web & SaaS',
    description: "Création de plateformes web complexes et d'applications métier sur mesure. De l'API au front-end, chaque couche est pensée pour scaler.",
    features: ['Applications React/Next.js', 'Backends Node.js/Python', 'Architectures API-First', 'Tableaux de bord analytiques'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Expériences mobiles natives et cross-platform fluides pour iOS et Android. Vos utilisateurs veulent une app qui répond au doigt et à l\'œil.',
    features: ['Flutter Development', 'React Native', 'Apps grand public', 'Outils terrain pour équipes'],
  },
  {
    id: 'ecom',
    label: 'E-Commerce',
    icon: ShoppingCart,
    title: 'E-Commerce & Marketplaces',
    description: 'Plateformes de vente en ligne haute performance conçues pour la conversion. Du catalogue produit au paiement mobile money.',
    features: ['Solutions Headless Shopify', 'Marketplaces multi-vendeurs', 'Systèmes de paiement locaux', 'Gestion des stocks en temps réel'],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    icon: Cloud,
    title: 'DevOps & Infrastructure Cloud',
    description: 'Infrastructure résiliente et déploiement automatisé pour une disponibilité maximale, même sur les réseaux africains.',
    features: ['AWS / Google Cloud / Azure', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Monitoring & Sécurité'],
  },
];

const PROCESS_STEPS = [
  { n: '01', title: 'Découverte', text: "Analyse de vos besoins, audit de votre stack existante et définition de l'architecture cible." },
  { n: '02', title: 'Architecture', text: "Conception technique détaillée : choix des technologies, schémas de base de données, design des APIs." },
  { n: '03', title: 'Développement', text: "Sprints Agile avec livraisons régulières, code review systématique et documentation continue." },
  { n: '04', title: 'Déploiement', text: "Mise en production sécurisée, monitoring, formation de vos équipes et support post-lancement." },
];

// ── Composant ─────────────────────────────────────────────────────────────────
export const DevProductPage = () => {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState('web');
  const current = TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      <SEO
        title="Développement & Produits Digitaux"
        description="Développement d'applications web, mobiles et SaaS pour entreprises en Côte d'Ivoire. React, Flutter, Node.js, Cloud. Architecture moderne et scalable."
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Développement & Produits', path: pathname },
        ]}
      />

      <div className="min-h-screen bg-white pt-24">

        {/* ══════════════════════════════════════════════════════════════
            1. HERO — Centré avec snippet de code décoratif
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-gray-100 bg-white py-20">
          {/* Grille de points en fond */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#111 1px, transparent 1px), linear-gradient(to right, #111 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="container-custom relative max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5">
                <Terminal className="h-3.5 w-3.5 text-primary-green" />
                <span className="font-mono text-xs font-bold text-gray-700">Expertise Technique</span>
              </div>
              <h1 className="mb-6 font-heading text-5xl font-black leading-[1.1] text-gray-900 md:text-6xl lg:text-7xl">
                Développement &{' '}
                <span className="text-primary-green">Produits Digitaux</span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-gray-600">
                Nous ne faisons pas que du code. Nous construisons des actifs technologiques robustes,
                évolutifs et centrés sur vos utilisateurs.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/devis"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
                >
                  Démarrer mon projet tech
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-8 py-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                >
                  Parler à un architecte
                </Link>
              </div>
            </motion.div>

            {/* Snippet de code décoratif */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mx-auto mt-14 max-w-2xl rounded-2xl border border-gray-200 bg-gray-950 p-6 shadow-2xl"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-primary-green" />
                <span className="ml-3 font-mono text-xs text-gray-500">api/product.ts</span>
              </div>
              <pre className="overflow-hidden font-mono text-sm leading-7">
                <span className="text-purple-400">import</span>
                <span className="text-white">{" { createProduct } "}</span>
                <span className="text-purple-400">from</span>
                <span className="text-green-400">{" '@soutrali/api'"}</span>
                {'\n\n'}
                <span className="text-blue-400">const</span>
                <span className="text-yellow-300">{" launch "}</span>
                <span className="text-white">= </span>
                <span className="text-blue-400">async</span>
                <span className="text-white">{" () => {"}</span>
                {'\n  '}
                <span className="text-blue-400">const</span>
                <span className="text-yellow-300">{" result "}</span>
                <span className="text-white">= </span>
                <span className="text-blue-400">await</span>
                <span className="text-white">{" createProduct({"}</span>
                {'\n    '}
                <span className="text-green-400">name</span>
                <span className="text-white">: </span>
                <span className="text-orange-300">{'\'Votre MVP\''}</span>
                <span className="text-white">,</span>
                {'\n    '}
                <span className="text-green-400">scalable</span>
                <span className="text-white">: </span>
                <span className="text-blue-400">true</span>
                <span className="text-white">,</span>
                {'\n    '}
                <span className="text-green-400">madeIn</span>
                <span className="text-white">: </span>
                <span className="text-orange-300">{"'Abidjan 🇨🇮'"}</span>
                {'\n  '}
                <span className="text-white">{"}) "}</span>
                {'\n  '}
                <span className="text-gray-500">{"// ✅ Produit livré dans les délais"}</span>
                {'\n  '}
                <span className="text-blue-400">return</span>
                <span className="text-white">{" result"}</span>
                {'\n'}
                <span className="text-white">{"}"}</span>
              </pre>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. DÉFI / SOLUTION / RÉSULTAT — Cards avec indicateurs
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: 'Le Défi', text: "Des logiciels mal conçus qui accumulent de la dette technique ou des applications qui ne scalent pas face à la croissance.", border: 'border-l-red-400', bg: 'bg-red-50', badge: 'text-red-500 bg-red-100', dot: 'bg-red-400' },
                { label: 'Notre Solution', text: "Une architecture moderne (Microservices, Cloud-Native) et des pratiques de développement rigoureuses, dès le premier sprint.", border: 'border-l-primary-green', bg: 'bg-primary-green/5', badge: 'text-primary-green bg-primary-green/10', dot: 'bg-primary-green' },
                { label: 'Le Résultat', text: "Des produits digitaux performants, sécurisés et faciles à maintenir sur le long terme. Un actif, pas une dette technologique.", border: 'border-l-gray-900', bg: 'bg-white', badge: 'text-gray-900 bg-gray-100', dot: 'bg-gray-900' },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -4 }}
                  className={`rounded-2xl border-l-4 p-8 shadow-sm transition-shadow hover:shadow-md ${card.border} ${card.bg}`}
                >
                  <span className={`mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${card.badge}`}>
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
            3. NOS EXPERTISES — Système d'onglets
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="container-custom max-w-6xl">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-green">Nos domaines</span>
              <h2 className="mt-3 font-heading text-4xl font-black text-gray-900 md:text-5xl">Nos Expertises</h2>
            </div>

            {/* Onglets */}
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenu onglet actif */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-10"
              >
                <div className="grid items-center gap-12 md:grid-cols-2">
                  <div>
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-green/10">
                      <current.icon className="h-7 w-7 text-primary-green" />
                    </div>
                    <h3 className="mb-4 font-heading text-3xl font-black text-gray-900">{current.title}</h3>
                    <p className="mb-6 text-lg leading-relaxed text-gray-600">{current.description}</p>
                    <Link
                      to="/devis"
                      className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
                    >
                      Démarrer ce projet <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="space-y-3">
                    {current.features.map((f, i) => (
                      <motion.div
                        key={f}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary-green" />
                        <span className="font-medium text-gray-800">{f}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. PROCESSUS — Timeline horizontale numérotée
        ══════════════════════════════════════════════════════════════ */}
        <section className="border-y border-gray-100 bg-gray-50 py-20">
          <div className="container-custom max-w-6xl">
            <div className="mb-14 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-green">Méthodologie</span>
              <h2 className="mt-3 font-heading text-4xl font-black text-gray-900">Comment nous livrons</h2>
              <p className="mx-auto mt-2 max-w-lg text-gray-600">
                Agile, documenté, transparent — vous savez où en est votre projet à tout moment.
              </p>
            </div>

            <div className="relative grid gap-8 md:grid-cols-4">
              {/* Ligne de connexion */}
              <div
                className="absolute top-8 hidden h-0.5 bg-gray-200 md:block"
                style={{ left: '12.5%', right: '12.5%' }}
              />
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-sm">
                    <span className="font-heading text-lg font-black text-gray-900">{step.n}</span>
                  </div>
                  <h4 className="mb-2 font-heading text-lg font-black text-gray-900">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{step.text}</p>
                </motion.div>
              ))}
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
                  <span className="h-8 w-1 rounded-full bg-primary-blue" />
                  Pour qui ?
                </h3>
                <div className="space-y-3">
                  {[
                    'Startups en phase de croissance (Series A+)',
                    'Grandes entreprises en transformation digitale',
                    'PME cherchant à lancer un nouveau produit digital',
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
                  <span className="h-8 w-1 rounded-full bg-primary-green" />
                  Pourquoi nous choisir
                </h3>
                <div className="space-y-5">
                  {[
                    'Une qualité de code Enterprise-grade dès le premier jour.',
                    'Une méthodologie Agile transparente avec des livraisons régulières.',
                    'Une documentation technique exhaustive pour votre indépendance.',
                    'Une performance optimisée pour les réseaux africains (Edge Computing).',
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
            6. CTA
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-900 py-20">
          <div className="container-custom max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Zap className="mx-auto mb-6 h-10 w-10 text-primary-green" />
              <h2 className="mb-4 font-heading text-4xl font-black text-white md:text-5xl">
                Construisons votre produit ensemble
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">
                Architecture solide, code propre, livraison dans les délais. Toujours.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/devis"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-green px-8 py-4 text-sm font-bold text-[#062013] shadow-glow-green transition hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4" />
                  Démarrer mon projet tech
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
