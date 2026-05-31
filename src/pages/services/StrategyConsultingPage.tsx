import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import {
  TrendingUp,
  Shield,
  Activity,
  Award,
  Users,
  Compass,
  ArrowRight,
  Check,
  Sparkles,
  Milestone,
  FileCheck,
  Search,
  Code,
  LineChart,
} from 'lucide-react';

// ── Données ──────────────────────────────────────────────────────────────────
const VALUE_PROPS = {
  problem: {
    title: "Le Problème",
    subtitle: "Des choix technologiques risqués",
    description: "Des prises de décision technologiques incertaines, un manque de vision à long terme sur la roadmap digitale et des investissements sans ROI clair.",
    color: "border-red-100 bg-red-50/30 text-red-700",
    icon: Shield,
  },
  solution: {
    title: "La Solution",
    subtitle: "Accompagnement senior sur-mesure",
    description: "Un cadrage et une gouvernance stratégique par des directeurs techniques seniors ayant piloté des projets technologiques d'envergure internationale.",
    color: "border-primary-green/20 bg-primary-green/5 text-primary-green",
    icon: Compass,
  },
  result: {
    title: "Le Résultat",
    subtitle: "Roadmap claire & risques maîtrisés",
    description: "Une feuille de route technologique claire alignée sur vos objectifs business, une propriété intellectuelle sécurisée et un ROI maximisé.",
    color: "border-gray-200 bg-gray-50/50 text-gray-900",
    icon: Award,
  }
};

const OFFERINGS = [
  {
    id: 'audit',
    number: '01',
    title: "Audit & Architecture",
    description: "Analyse approfondie de votre existant technique pour pérenniser votre infrastructure.",
    icon: Search,
    features: [
      "Audit de code & Sécurité applicative",
      "Audit ergonomique & UX/UI",
      "Conception d'architecture Cloud scalable",
      "Optimisation des performances de base de données"
    ],
  },
  {
    id: 'cto',
    number: '02',
    title: "CTO as a Service",
    description: "Une direction technique externalisée flexible pour piloter vos choix stratégiques.",
    icon: Code,
    features: [
      "Direction technique à temps partagé",
      "Recrutement & Management des équipes tech",
      "Sélection et validation des stacks technologiques",
      "Supervision technique des prestataires externes"
    ],
  },
  {
    id: 'transformation',
    number: '03',
    title: "Transformation Digitale",
    description: "Accompagnement opérationnel pour automatiser et digitaliser vos processus métier.",
    icon: TrendingUp,
    features: [
      "Dématérialisation complète des flux",
      "Cadrage et intégration ERP/CRM",
      "Automatisation de tâches répétitives (RPA)",
      "Accompagnement et formation des collaborateurs"
    ],
  },
  {
    id: 'cadrage',
    number: '04',
    title: "Cadrage de Projet",
    description: "Préparation et spécification rigoureuse en amont pour éviter les dérives de budget.",
    icon: FileCheck,
    features: [
      "Rédaction du Cahier des Charges technique",
      "Spécifications fonctionnelles détaillées",
      "Roadmap produit & jalons de livraison",
      "Estimation budgétaire et planification des ressources"
    ],
  }
];

const TARGETS = [
  {
    role: "Fonds d'investissement",
    context: "Due Diligence Technique",
    needs: "Évaluer la maturité technologique, la dette technique et la sécurité d'une startup avant une prise de participation ou une acquisition.",
  },
  {
    role: "DG / CEO sans associé technique",
    context: "Partenaire de Confiance",
    needs: "Besoin d'un traducteur business-tech pour valider les devis des prestataires et s'assurer que les développements avancent dans le bon sens.",
  },
  {
    role: "DSI / Responsable Informatique",
    context: "Expertise Spécifique Ponctuelle",
    needs: "Besoin de renforcer ponctuellement la gouvernance ou d'apporter une expertise pointue sur une transition d'architecture critique.",
  }
];

const BENEFITS = [
  {
    title: "Sécurité & ROI",
    desc: "Évitez les choix technologiques inadaptés qui coûtent des millions et retardent vos lancements de plusieurs mois."
  },
  {
    title: "Time-to-market accéléré",
    desc: "Bénéficiez d'une feuille de route structurée et de méthodologies agiles éprouvées pour livrer de la valeur rapidement."
  },
  {
    title: "Propriété intellectuelle sécurisée",
    desc: "Nous veillons à ce que votre code source, vos bases de données et vos infrastructures vous appartiennent à 100%."
  },
  {
    title: "Montée en compétences",
    desc: "Nous formons vos équipes et structurons vos recrutements pour vous rendre autonome à moyen terme."
  }
];

// ── Composant Principal ──────────────────────────────────────────────────────
export const StrategyConsultingPage = () => {
  const { pathname } = useLocation();
  const [activePillar, setActivePillar] = useState('audit');
  const [hoveredTarget, setHoveredTarget] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Stratégie, Conseil & Structuration"
        description="Accompagnement stratégique, audit technique, CTO as a Service et transformation digitale pour sécuriser vos investissements technologiques."
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Stratégie & Conseil', path: pathname },
        ]}
      />

      <div className="min-h-screen bg-white text-gray-900 pt-24 font-sans">
        
        {/* ══════════════════════════════════════════════════════════════
            1. HERO SECTION — Minimaliste, typographie forte & schéma SVG
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-gray-100">
          {/* Grille de fond subtile */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          
          <div className="container-custom max-w-7xl relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Texte */}
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-green/20 bg-primary-green/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary-green uppercase">
                  <Activity className="h-3.5 w-3.5 animate-pulse" />
                  Vision & Gouvernance
                </div>
                <h1 className="mb-6 font-heading text-4xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl leading-[1.1]">
                  Alignez votre technologie sur <br />
                  <span className="text-primary-green">vos ambitions business</span>
                </h1>
                <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
                  Sécurisez vos investissements technologiques. Nous agissons comme votre partenaire stratégique pour auditer vos systèmes, diriger vos équipes de développement et cadrer vos projets.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/devis"
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-primary-green hover:shadow-lg hover:shadow-primary-green/20 hover:-translate-y-0.5"
                  >
                    Demander un diagnostic gratuit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50 hover:border-gray-300"
                  >
                    Parler à un expert
                  </Link>
                </div>
              </motion.div>

              {/* Schéma Interactif SVG */}
              <motion.div
                className="lg:col-span-5 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full max-w-[400px] aspect-square rounded-3xl border border-gray-100 bg-gray-50/50 p-6 flex flex-col justify-between shadow-sm">
                  {/* Filigranes décoratifs */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <svg className="absolute w-full h-full text-primary-green/10" viewBox="0 0 100 100" fill="none">
                      <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>

                  {/* Top node */}
                  <div className="flex justify-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl border border-primary-green bg-white px-4 py-2.5 shadow-sm text-xs font-bold text-gray-900 flex items-center gap-2"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary-green animate-ping" />
                      Vision Business
                    </motion.div>
                  </div>

                  {/* Middle Row */}
                  <div className="flex justify-between items-center relative z-10 px-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm text-[11px] font-semibold text-gray-600 flex items-center gap-1.5"
                    >
                      <Search className="h-3.5 w-3.5 text-primary-green" />
                      Audit
                    </motion.div>
                    
                    {/* Center point */}
                    <div className="w-12 h-12 rounded-full bg-primary-green/10 border border-primary-green/30 flex items-center justify-center">
                      <Compass className="h-6 w-6 text-primary-green animate-spin-[20s]" />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm text-[11px] font-semibold text-gray-600 flex items-center gap-1.5"
                    >
                      <Code className="h-3.5 w-3.5 text-primary-green" />
                      Architecture
                    </motion.div>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex justify-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl border border-gray-900 bg-gray-900 px-4 py-2.5 shadow-md text-xs font-bold text-white flex items-center gap-2"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-primary-green" />
                      ROI Technologique
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. SECTION TRANSFORMATION — 3 étapes fluides (Problème -> Solution -> Résultat)
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50/50 py-20 border-b border-gray-100">
          <div className="container-custom max-w-7xl">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-green">
                Méthode de Travail
              </span>
              <h2 className="mt-2 font-heading text-3xl font-black text-gray-900 md:text-4xl">
                La transformation stratégique par l'action
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-600">
                Nous identifions les zones de risques de votre infrastructure pour les transformer en piliers de valeur opérationnelle.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {Object.entries(VALUE_PROPS).map(([key, prop], index) => {
                const Icon = prop.icon;
                return (
                  <motion.div
                    key={key}
                    className={`relative rounded-2xl border p-8 shadow-sm bg-white transition-all hover:shadow-md hover:border-gray-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${prop.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-heading text-sm font-bold uppercase tracking-wider text-gray-400">
                        Étape 0{index + 1}
                      </span>
                    </div>

                    <h3 className="mb-2 font-heading text-xl font-bold text-gray-900">
                      {prop.title}
                    </h3>
                    <p className="mb-3 text-xs font-semibold text-primary-green">
                      {prop.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {prop.description}
                    </p>

                    {/* Ligne de connexion décorative entre les étapes (uniquement sur grand écran) */}
                    {index < 2 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gray-200 z-10 transform -translate-y-1/2" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. SECTION PILIERS D'INTERVENTION — Onglets interactifs & checklists
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 border-b border-gray-100">
          <div className="container-custom max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12">
              
              {/* Menu de sélection vertical (col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-green mb-2">
                  Nos Expertises
                </span>
                <h2 className="mb-6 font-heading text-3xl font-black text-gray-900 md:text-4xl leading-[1.15]">
                  4 piliers pour structurer <br className="hidden md:inline" />
                  <span className="text-primary-green">votre croissance tech</span>
                </h2>
                <p className="mb-8 text-gray-600 max-w-md">
                  Chaque pilier d'intervention répond à un besoin précis de votre entreprise, de la vérification de vos acquis à la direction quotidienne de vos développeurs.
                </p>

                <div className="space-y-3">
                  {OFFERINGS.map((offering) => {
                    const Icon = offering.icon;
                    const isActive = activePillar === offering.id;
                    return (
                      <button
                        key={offering.id}
                        onClick={() => setActivePillar(offering.id)}
                        className={`w-full flex items-center justify-between text-left p-4 rounded-xl border transition-all ${
                          isActive
                            ? 'border-primary-green bg-primary-green/5 text-gray-900 shadow-sm'
                            : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 text-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-xs font-bold ${isActive ? 'text-primary-green' : 'text-gray-400'}`}>
                            {offering.number}
                          </span>
                          <span className="font-heading text-sm font-bold">
                            {offering.title}
                          </span>
                        </div>
                        <Icon className={`h-4 w-4 transition-transform ${isActive ? 'text-primary-green rotate-12' : 'text-gray-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Détails du pilier actif (col-span-7) */}
              <div className="lg:col-span-7 flex items-center">
                <div className="relative w-full min-h-[380px] rounded-2xl border border-gray-100 bg-gray-50/30 p-8 md:p-10 flex flex-col justify-between overflow-hidden">
                  
                  {/* Filigrane numéro géant */}
                  <div className="absolute -right-4 -bottom-10 font-heading text-[180px] font-black text-primary-green/5 leading-none select-none pointer-events-none">
                    {OFFERINGS.find(o => o.id === activePillar)?.number}
                  </div>

                  <AnimatePresence mode="wait">
                    {OFFERINGS.map((offering) => {
                      if (offering.id !== activePillar) return null;
                      const Icon = offering.icon;
                      return (
                        <motion.div
                          key={offering.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 flex-1 flex flex-col justify-between"
                        >
                          <div>
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-sm text-primary-green">
                              <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 font-heading text-2xl font-black text-gray-900">
                              {offering.title}
                            </h3>
                            <p className="mb-8 text-sm leading-relaxed text-gray-600 max-w-xl">
                              {offering.description}
                            </p>

                            <div className="grid gap-3 sm:grid-cols-2">
                              {offering.features.map((feature, fIdx) => (
                                <motion.div
                                  key={fIdx}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: fIdx * 0.08 }}
                                  className="flex items-start gap-2.5"
                                >
                                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
                                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                                  </div>
                                  <span className="text-xs font-semibold text-gray-700 leading-tight">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-10 pt-6 border-t border-gray-100">
                            <Link
                              to="/devis"
                              className="inline-flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-primary-green transition-colors"
                            >
                              Discuter de cette expertise
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. SECTION PUBLIC CIBLE — Split asymétrique & Cartes Personas
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50/50 py-20 border-b border-gray-100">
          <div className="container-custom max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12">
              
              {/* Titre & Intro */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-green">
                  Profils Clients
                </span>
                <h2 className="mt-2 mb-4 font-heading text-3xl font-black text-gray-900 md:text-4xl leading-tight">
                  À qui s'adresse notre conseil ?
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  Notre expertise s'adapte à vos contraintes. Que vous gériez des fonds d'investissement, pilotiez une PME sans associé technique, ou dirigiez une DSI en pleine restructuration.
                </p>
              </div>

              {/* Grid 3 Personas */}
              <div className="lg:col-span-8 grid gap-6 sm:grid-cols-3">
                {TARGETS.map((target, idx) => (
                  <motion.div
                    key={idx}
                    onMouseEnter={() => setHoveredTarget(idx)}
                    onMouseLeave={() => setHoveredTarget(null)}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-green/30 hover:shadow-md flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div>
                      <div className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        {target.context}
                      </div>
                      <h3 className="mb-4 font-heading text-base font-black text-gray-900">
                        {target.role}
                      </h3>
                      <p className="text-xs leading-relaxed text-gray-600">
                        {target.needs}
                      </p>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <motion.div
                        animate={{ x: hoveredTarget === idx ? 4 : 0 }}
                        className="text-primary-green"
                      >
                        <Milestone className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. SECTION AVANTAGES — Liste d'impact structurée
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 border-b border-gray-100">
          <div className="container-custom max-w-7xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-green">
                Garanties Soutrali Deals
              </span>
              <h2 className="mt-2 font-heading text-3xl font-black text-gray-900 md:text-4xl">
                Pourquoi choisir notre accompagnement stratégique ?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="group rounded-xl border border-gray-100 p-6 bg-white transition-all hover:border-gray-200 hover:bg-slate-50/30"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-green/10 text-primary-green transition-transform group-hover:scale-110">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <h3 className="mb-2 font-heading text-sm font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-500">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            6. CTA SECTION — Section finale minimaliste haut de gamme
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container-custom max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 bg-white p-8 md:p-12 shadow-sm"
            >
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-wider text-primary-green">
                Consultation Gratuite
              </span>
              <h2 className="mb-4 font-heading text-3xl font-black text-gray-900 md:text-4xl">
                Prêt à sécuriser votre roadmap technique ?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-sm text-gray-600">
                Discutons de vos enjeux de gouvernance et de vos choix technologiques. Notre première heure de diagnostic et d'audit préliminaire vous est offerte, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/devis"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-primary-green hover:shadow-md"
                >
                  Obtenir mon devis / audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                >
                  Planifier un appel d'introduction
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};
