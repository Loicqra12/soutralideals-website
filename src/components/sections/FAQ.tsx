import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Plus, Minus, HelpCircle } from 'lucide-react';

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

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <motion.div
            initial={false}
            className={`border border-gray-200 rounded-xl overflow-hidden mb-4 transition-all duration-300 ${isOpen ? 'bg-white shadow-lg border-primary-orange/30' : 'bg-gray-50 hover:bg-white'}`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <span className={`font-bold text-lg ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
                    {question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-primary-orange text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <SectionWrapper id="faq" bg="white" className="py-20">
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-3 bg-primary-orange/10 text-primary-orange rounded-xl mb-4">
                    <HelpCircle className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
                    Questions <span className="text-primary-orange">Fréquentes</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Tout ce que vous devez savoir sur l'écosystème Soutrali Deals.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={index === openIndex}
                        onClick={() => setOpenIndex(index === openIndex ? null : index)}
                    />
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-gray-500">
                    Vous n'avez pas trouvé votre réponse ? {' '}
                    <a href="/contact" className="text-primary-blue font-bold hover:underline">
                        Contactez notre support
                    </a>
                </p>
            </div>
        </SectionWrapper>
    );
};
