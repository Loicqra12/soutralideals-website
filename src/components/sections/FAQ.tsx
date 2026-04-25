import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { HelpCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
    {
        question: "C'est quoi exactement Soutrali Deals ?",
        answer: "Soutrali Deals est le premier écosystème digital ivoirien qui connecte les talents locaux (freelances, artisans) et les commerçants avec des clients potentiels. Nous offrons aussi des outils digitaux pour gérer votre activité."
    },
    {
        question: "Comment devenir prestataire sur la plateforme ?",
        answer: "C'est très simple ! Cliquez sur 'Rejoindre le réseau', créez votre compte, complétez votre profil avec vos compétences et réalisations. Notre équipe validera votre profil sous 24h."
    },
    {
        question: "Est-ce que l'inscription est payante ?",
        answer: "L'inscription de base est 100% gratuite. Nous proposons ensuite des forfaits 'Premium' pour ceux qui souhaitent plus de visibilité et d'outils avancés, mais vous pouvez commencer sans rien payer."
    },
    {
        question: "Comment fonctionne le système de paiement ?",
        answer: "Nous intégrons les moyens de paiement locaux (Mobile Money : Orange, MTN, Wave) et les cartes bancaires. Les paiements pour les missions sont sécurisés via notre plateforme."
    },
    {
        question: "Puis-je vendre mes produits sur Soutrali Deals ?",
        answer: "Absolument. Nous avons une section dédiée aux commerçants qui permet de créer une vitrine digitale et de vendre vos produits directement à notre communauté."
    },
    {
        question: "J'ai besoin d'un site web, comment faire ?",
        answer: "Vous êtes au bon endroit. Consultez notre section 'Services' ou 'Portfolio'. Nous proposons des packages de création de sites web adaptés à tous les budgets."
    },
    {
        question: "Soutrali Deals est-il disponible partout en Côte d'Ivoire ?",
        answer: "Oui, notre plateforme est accessible sur tout le territoire. Cependant, la majorité des missions physiques se concentrent actuellement sur le Grand Abidjan."
    },
    {
        question: "Comment garantissez-vous la qualité des prestataires ?",
        answer: "Nous avons un processus de vérification strict (Identité, Portfolio). De plus, le système de notation par les clients permet de maintenir un haut niveau de qualité."
    },
    {
        question: "Proposez-vous des formations ?",
        answer: "Oui, nous organisons régulièrement des ateliers et masterclasses pour aider nos membres à monter en compétence sur le digital, la vente et la gestion."
    },
    {
        question: "J'ai un problème technique, qui contacter ?",
        answer: "Notre support est disponible 7j/7 via WhatsApp et Email. Vous trouverez les coordonnées dans la page Contact."
    },
    {
        question: "Qu'est-ce que l'application Soutrali Identité ?",
        answer: "C'est notre application de sécurité qui permet de vérifier l'identité d'un prestataire qui se présente chez vous via un QR Code securisé, pour éviter les arnaques."
    },
    {
        question: "Puis-je annuler une commande ou une mission ?",
        answer: "Oui, les conditions d'annulation dépendent du type de service. Tout est détaillé dans nos Conditions Générales d'Utilisation."
    }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const progressWidth = useMemo(() => `${((activeIndex + 1) / faqData.length) * 100}%`, [activeIndex]);

  const moveTo = (nextIndex: number) => {
    const normalized = (nextIndex + faqData.length) % faqData.length;
    setActiveIndex(normalized);
    const card = scrollerRef.current?.querySelector<HTMLElement>(`[data-faq-index="${normalized}"]`);
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <SectionWrapper id="faq" bg="white" className="py-20">
      <div className="mb-14 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary-blue/10 p-3 text-primary-blue">
          <HelpCircle className="h-8 w-8" />
        </div>
        <h2 className="mb-6 text-3xl font-heading font-bold text-gray-900 md:text-5xl">
          Questions <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">Fréquentes</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Un format plus moderne pour explorer rapidement les réponses clés de Soutrali Deals.
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold tracking-wide text-gray-500">
            Question {activeIndex + 1} / {faqData.length}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => moveTo(activeIndex - 1)}
              className="rounded-full border border-gray-200 p-2.5 text-gray-600 transition hover:border-primary-blue/40 hover:text-primary-blue"
              aria-label="Question précédente"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => moveTo(activeIndex + 1)}
              className="rounded-full border border-gray-200 p-2.5 text-gray-600 transition hover:border-primary-blue/40 hover:text-primary-blue"
              aria-label="Question suivante"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {faqData.map((item, index) => (
            <motion.button
              key={item.question}
              type="button"
              data-faq-index={index}
              whileHover={{ y: -3 }}
              onClick={() => moveTo(index)}
              className={`min-w-[280px] snap-center rounded-2xl border p-5 text-left transition md:min-w-[360px] ${
                index === activeIndex
                  ? 'border-primary-blue/40 bg-white shadow-lg shadow-primary-blue/10'
                  : 'border-gray-200 bg-gray-50/70 hover:border-gray-300'
              }`}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">FAQ</p>
              <h3 className={`text-base font-semibold leading-snug ${index === activeIndex ? 'text-gray-900' : 'text-gray-700'}`}>
                {item.question}
              </h3>
            </motion.button>
          ))}
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary-green to-primary-blue"
            animate={{ width: progressWidth }}
            transition={{ duration: 0.35 }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-100"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-blue">Réponse</p>
            <p className="text-lg leading-relaxed text-gray-700">{faqData[activeIndex].answer}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500">
          Vous n&apos;avez pas trouvé votre réponse ?{' '}
          <Link to="/contact" className="font-bold text-primary-blue hover:underline">
            Contactez notre support
          </Link>
        </p>
      </div>
    </SectionWrapper>
  );
};
