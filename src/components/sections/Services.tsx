import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceCategoryCard, type ServiceCategory } from './services/ServiceCategoryCard';
import { categoryIllustrations } from './services/ServiceCategoryIllustrations';

const categories: ServiceCategory[] = [
  {
    id: 'presence',
    title: 'Présence',
    tagline: 'Pour démarrer en ligne',
    examples: ['Site vitrine one-page', 'Carte pro digitale', 'Formulaire & réseaux sociaux'],
    price: '99 000 FCFA',
    priceNote: 'forfait tout inclus',
    features: [
      'Site vitrine one-page',
      'Design template professionnel',
      'Hébergement + domaine .ci',
      'Formulaire de contact',
      'Responsive mobile & desktop',
    ],
    Illustration: categoryIllustrations.presence,
  },
  {
    id: 'croissance',
    title: 'Croissance',
    tagline: 'Pour structurer votre image',
    examples: ['Site 5 pages', 'Blog & actualités', 'SEO local Abidjan'],
    price: '249 000 FCFA',
    priceNote: 'forfait tout inclus',
    popular: true,
    features: [
      'Site complet (5 pages)',
      'Design sur mesure',
      'Blog / actualités',
      'Référencement SEO local',
      'Statistiques visiteurs',
      'Support technique 3 mois',
    ],
    Illustration: categoryIllustrations.croissance,
  },
  {
    id: 'vente',
    title: 'Vente',
    tagline: 'Pour vendre au quotidien',
    examples: ['Boutique en ligne', 'Mobile Money', 'Gestion des stocks'],
    price: '499 000 FCFA',
    priceNote: 'forfait tout inclus',
    features: [
      'Boutique en ligne',
      "Jusqu'à 50 produits",
      'Paiement Mobile Money',
      'Gestion des stocks',
      'Facturation automatique',
      'Formation gestion du site',
    ],
    Illustration: categoryIllustrations.vente,
  },
  {
    id: 'ecosysteme',
    title: 'Écosystème',
    tagline: 'Pour les projets ambitieux',
    examples: ['Web + PWA', 'CRM clients', 'Pub & chatbot WhatsApp'],
    price: '749 000 FCFA',
    priceNote: 'forfait tout inclus',
    features: [
      'Site web + application web (PWA)',
      'CRM / gestion clients',
      'Campagnes Google & Facebook',
      'Chatbot WhatsApp',
      'Maintenance prioritaire',
      'Audit & stratégie digitale',
    ],
    Illustration: categoryIllustrations.ecosysteme,
  },
];

export const Services = () => {
  const reduced = useReducedMotion();

  return (
    <section id="services" className="bg-white py-20 md:py-28" aria-labelledby="services-heading">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#888]">
            Agence digitale Soutrali
          </p>
          <h2
            id="services-heading"
            className="font-heading text-[2rem] font-extrabold tracking-[-0.03em] text-[#111] sm:text-4xl md:text-5xl"
          >
            Ce que nous construisons pour vous
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6b6b6b] md:text-lg">
            Sites, e-commerce et solutions complètes — forfaits clairs pour entrepreneurs et PME en
            Côte d&apos;Ivoire. Détail et devis sur la page services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 xl:grid-cols-4">
          {categories.map((category, index) => (
            <ServiceCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-sm text-[#888] md:mt-12"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Tarifs indicatifs · Devis personnalisé sur{' '}
          <Link to="/contact" className="font-semibold text-[#111] underline-offset-2 hover:underline">
            demande
          </Link>
        </motion.p>

        <div className="mt-6 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#555] transition hover:text-[#111]"
          >
            <span className="border-b border-transparent pb-0.5 group-hover:border-[#111]">
              Tous nos services et options à la carte
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};
