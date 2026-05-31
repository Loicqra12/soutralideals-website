import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import {
  Database, Cpu, Truck, LineChart,
  ArrowRight, Check, Sparkles, Settings, Zap,
} from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────────────────────
const SOLUTIONS = [
  {
    number: '01',
    title: 'ERP & CRM Sur-mesure',
    description: 'Centralisez vos données clients et vos processus de gestion dans un outil unique, conçu exactement pour vos flux métier.',
    icon: Database,
    features: ['Gestion commerciale & Facturation', 'Suivi de production', 'Portails clients / fournisseurs', 'Tableaux de bord de pilotage'],
  },
  {
    number: '02',
    title: 'Automatisation (RPA)',
    description: "Supprimez les tâches répétitives sans valeur ajoutée. Vos équipes se concentrent sur ce qui compte vraiment.",
    icon: Cpu,
    features: ['Workflows automatisés (n8n/Make)', 'Traitement automatique de documents', 'Connexions API inter-logiciels', 'Bots de notification'],
  },
  {
    number: '03',
    title: 'Outils Terrain & Logistique',
    description: 'Connectez vos équipes mobiles au siège en temps réel. Plus de fichiers Excel, plus de rapports papier.',
    icon: Truck,
    features: ['Applications de suivi de livraison', 'Gestion de stock mobile', "Rapports d'intervention digitaux", 'Géolocalisation de flotte'],
  },
  {
    number: '04',
    title: 'Data & Business Intelligence',
    description: 'Faites parler vos données pour décider mieux et plus vite. La BI n\'est plus réservée aux grands groupes.',
    icon: LineChart,
    features: ['Entrepôts de données (Data Warehousing)', 'Visualisation (PowerBI/Custom)', 'Reporting automatisé', 'Analyse prédictive'],
  },
];

const BEFORE_AFTER = [
  { before: 'Fichiers Excel éparpillés entre équipes', after: 'Source unique de vérité centralisée' },
  { before: 'Saisies manuelles répétitives et erreurs', after: 'Processus 100% automatisés et fiables' },
  { before: 'Décisions prises sans données fiables', after: 'Dashboard temps réel pour décider vite' },
  { before: 'Équipes terrain coupées du siège', after: 'Synchronisation en temps réel sur mobile' },
];

// ── Composant ─────────────────────────────────────────────────────────────────
export const SolutionsToolsPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <SEO
        title="Solutions Digitales & Outils Métiers"
        description="ERP, CRM, automatisation RPA, outils terrain et Business Intelligence sur-mesure pour entreprises ivoiriennes. Optimisez vos opérations et pilotez par la donnée."
        breadcrumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Solutions & Outils', path: pathname },
        ]}
      />

      <div className="min-h-screen bg-white pt-24">

        {/* ══════════════════════════════════════════════════════════════
            1. HERO — Centré avec tags flottants
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-gray-100 bg-white py-20">
          <div className="container-custom max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* ← Texte */}
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="mb-6 inline-block rounded-full border border-primary-blue/30 bg-primary-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-blue">
                  Efficacité Opérationnelle
                </span>
                <h1 className="mb-6 font-heading text-5xl font-black leading-[1.1] text-gray-900 md:text-6xl">
                  Vos opérations,{' '}
                  <span className="text-primary-green">enfin sous contrôle</span>
                </h1>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
                  Optimisez vos opérations internes. Nous développons et intégrons les outils qui font
                  gagner du temps à vos équipes et de l'argent à votre entreprise — de façon mesurable.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/devis"
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                  >
                    Analyser mes besoins
                    <Settings className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                  >
                    Voir une démo
                  </Link>
                </div>
              </motion.div>

              {/* → Tags flottants (feature pills) */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative flex min-h-[320px] items-center justify-center"
              >
                {/* Centre : icône principale */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border-2 border-primary-green/30 bg-primary-green/10 shadow-lg">
                  <Zap className="h-12 w-12 text-primary-green" />
                </div>

                {/* Tags orbite */}
                {[
                  { label: 'ERP & CRM', top: '5%', left: '50%', delay: 0.3 },
                  { label: 'Automatisation', top: '30%', left: '85%', delay: 0.4 },
                  { label: 'Data & BI', top: '70%', left: '80%', delay: 0.5 },
                  { label: 'Mobile Terrain', top: '85%', left: '40%', delay: 0.6 },
                  { label: 'Logistique', top: '65%', left: '5%', delay: 0.7 },
                  { label: 'API Connect', top: '25%', left: '5%', delay: 0.8 },
                ].map(({ label, top, left, delay }) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-default"
                    style={{ top, left }}
                  >
                    <span className="whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm">
                      {label}
                    </span>
                  </motion.div>
                ))}

                {/* Cercles décoratifs */}
                <div className="absolute h-48 w-48 rounded-full border border-dashed border-gray-200" />
                <div className="absolute h-72 w-72 rounded-full border border-dashed border-gray-100" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. LE PROBLÈME — Bande sombre
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-900 py-14">
          <div className="container-custom max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary-green">
                La réalité de nombreuses entreprises
              </p>
              <p className="text-2xl font-bold leading-relaxed text-white md:text-3xl">
                "Des processus manuels, des fichiers Excel éparpillés et une perte de productivité{' '}
                <span className="text-primary-green">quotidienne</span>{' '}
                qui coûte des millions en opportunités manquées."
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. NOS SOLUTIONS — Split : intro gauche / liste droite (capture 4)
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="container-custom max-w-6xl">
            <div className="grid items-start gap-16 lg:grid-cols-[400px_1fr]">
              {/* ← Bloc intro */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-28"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-primary-green">
                  Nos solutions
                </span>
                <h2 className="mt-3 font-heading text-4xl font-black text-gray-900">
                  4 Piliers d'Efficacité
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Notre approche est centrée sur l'adaptabilité et vos besoins concrets. Nous construisons
                  des outils sur-mesure ou intégrons intelligemment des solutions éprouvées.
                </p>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Nous travaillons en étroite collaboration avec vos équipes pour comprendre vos flux
                  métier et proposer des solutions pragmatiques et actionnables.
                </p>
                <div className="mt-6 space-y-3">
                  {['Livrables testés avec vos équipes', 'Formation incluse dans chaque projet', 'Support post-déploiement garanti'].map((b) => (
                    <div key={b} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <Check className="h-4 w-4 shrink-0 text-primary-green" />
                      <span className="font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* → Liste numérotée */}
              <div className="space-y-6">
                {SOLUTIONS.map((sol, i) => (
                  <motion.div
                    key={sol.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-primary-green/20 hover:bg-white hover:shadow-md"
                  >
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-green/10">
                        <sol.icon className="h-5 w-5 text-primary-green" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-gray-400">{sol.number}</span>
                          <h3 className="font-heading text-xl font-black text-gray-900">{sol.title}</h3>
                        </div>
                        <p className="mt-2 leading-relaxed text-gray-600">{sol.description}</p>
                      </div>
                    </div>
                    <div className="ml-14 grid gap-2 sm:grid-cols-2">
                      {sol.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-green" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. AVANT / APRÈS — Tableau comparatif
        ══════════════════════════════════════════════════════════════ */}
        <section className="border-y border-gray-100 bg-gray-50 py-20">
          <div className="container-custom max-w-5xl">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-green">Transformation concrète</span>
              <h2 className="mt-3 font-heading text-4xl font-black text-gray-900">Avant & Après Soutrali</h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* En-tête tableau */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="border-r border-gray-200 bg-red-50 px-8 py-4">
                  <p className="text-sm font-bold text-red-500">❌ Avant</p>
                </div>
                <div className="bg-primary-green/5 px-8 py-4">
                  <p className="text-sm font-bold text-primary-green">✅ Après Soutrali Deals</p>
                </div>
              </div>
              {/* Lignes */}
              {BEFORE_AFTER.map(({ before, after }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-2 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-3 border-r border-gray-100 px-8 py-5">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <p className="text-gray-600">{before}</p>
                  </div>
                  <div className="flex items-center gap-3 px-8 py-5">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-green" />
                    <p className="font-medium text-gray-900">{after}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. POUR QUI — Tags horizontaux
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-16">
          <div className="container-custom max-w-4xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-green">Profils concernés</span>
            <h2 className="mt-3 mb-8 font-heading text-3xl font-black text-gray-900">Pour qui ?</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'PME industrielles et logistiques',
                'Entreprises de services à fort volume',
                'Directeurs Opérationnels (COO)',
                'Directeurs Financiers (DAF)',
                'DSI & Responsables SI',
                'Groupes multi-sites',
              ].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-default rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-primary-green/30 hover:bg-primary-green/5 hover:text-primary-green"
                >
                  {t}
                </motion.span>
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
              <h2 className="mb-4 font-heading text-4xl font-black text-white md:text-5xl">
                Prêt à piloter votre activité par la donnée ?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">
                Un atelier de 2h avec notre équipe pour cartographier vos processus et identifier les gains rapides.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/devis"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-green px-8 py-4 text-sm font-bold text-[#062013] shadow-glow-green transition hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4" />
                  Analyser mes besoins
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/5"
                >
                  Planifier un atelier <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};
