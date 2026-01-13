import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "Package Starter",
    description: "Site vitrine complet pour débuter en ligne",
    price: "99 000 FCFA",
    savings: "Économie de 30 000 FCFA",
    features: [
      "Site Vitrine One-Page",
      "Design Template Pro",
      "Hébergement + .CI offert",
      "Formulaire de Contact",
      "Liens Réseaux Sociaux",
      "Responsive Mobile & PC"
    ]
  },
  {
    name: "Package Pro",
    description: "Site professionnel avec design personnalisé",
    price: "249 000 FCFA",
    savings: "Économie de 50 000 FCFA",
    popular: true,
    features: [
      "Site Complet (5 pages)",
      "Design Sur Mesure",
      "Blog / Actualités",
      "Référencement SEO local",
      "Statistiques Visiteurs",
      "Support Technique 3 mois"
    ]
  },
  {
    name: "Package Premium",
    description: "Site E-commerce complet pour vendre vos produits",
    price: "499 000 FCFA",
    savings: "Économie de 100 000 FCFA",
    features: [
      "Boutique en Ligne",
      "jusqu'à 50 Produits",
      "Paiement Mobile Money",
      "Gestion des Stocks",
      "Facturation Automatique",
      "Formation Gestion Site"
    ]
  },
  {
    name: "Package Business",
    description: "Solution complète pour entreprises ambitieuses",
    price: "749 000 FCFA",
    savings: "Économie de 150 000 FCFA",
    features: [
      "Site Web + App Web (PWA)",
      "CRM / Gestion Clients",
      "Campagne Pub Google/FB",
      "Chatbot WhatsApp",
      "Maintenance Prioritaire",
      "Audit & Stratégie Digitale"
    ]
  }
];

export const Services = () => {
  return (
    <SectionWrapper id="services" bg="dark">
      <motion.div
        className="text-center max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          Packages Prédéfinis <span className="text-gold-premium">- Prix Réduits</span>
        </h2>
        <p className="text-lg text-text-secondary">
          Choisissez un package complet et profitez de tarifs exceptionnels sans devis.
          <br className="hidden md:block" />
          Qualité professionnelle, accessible à tous.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative bg-dark-card border rounded-2xl p-6 flex flex-col h-full group hover:border-gold-premium/50 transition-all duration-300 ${pkg.popular ? 'border-gold-premium/40 shadow-xl shadow-gold-premium/10 ring-1 ring-gold-premium/20' : 'border-dark-border'
              }`}
          >
            {/* Savings Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap z-10">
              {pkg.savings}
            </div>

            <div className="mt-4 mb-6">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gold-premium transition-colors">{pkg.name}</h3>
              <p className="text-sm text-text-muted leading-relaxed h-10">{pkg.description}</p>
            </div>

            {/* Price Box */}
            <div className="bg-dark-bg border border-dark-border rounded-xl py-4 px-2 text-center mb-6 group-hover:border-gold-premium/30 transition-colors">
              <div className="text-2xl lg:text-3xl font-bold font-heading text-white">{pkg.price}</div>
            </div>

            <div className="mb-4">
              <span className="text-sm font-bold text-text-light block mb-4">Inclus dans ce package :</span>
              <ul className="space-y-3">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <Check className="w-5 h-5 text-gold-premium shrink-0" />
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-8">
              <Link to="/contact" className="block w-full">
                <button className="w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 bg-gold-premium hover:bg-yellow-500 text-black hover:shadow-lg hover:scale-[1.02]">
                  Choisir ce package
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/services" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors group">
          <span className="border-b border-transparent group-hover:border-white pb-0.5">Voir tous nos services et options à la carte</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </SectionWrapper>
  );
};
