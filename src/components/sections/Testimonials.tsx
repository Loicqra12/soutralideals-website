import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Koffi Jean-Marc",
        role: "Développeur Freelance",
        content: "Soutrali Deals a transformé ma façon de trouver des missions. La plateforme est intuitive et les clients sont sérieux. J'ai doublé mon chiffre d'affaires en 3 mois.",
        rating: 5
    },
    {
        id: 2,
        name: "Aminata Traoré",
        role: "Gérante Boutique Mode",
        content: "Je cherchais un moyen simple de digitaliser ma boutique à Adjamé. Grâce aux partenaires de l'écosystème, j'ai maintenant une boutique en ligne qui tourne 24/7.",
        rating: 5
    },
    {
        id: 3,
        name: "Cabinet Kouassi & Associés",
        role: "Client Business",
        content: "Nous avons recruté une équipe complète de développeurs via Soutrali Deals pour notre digitalisation. Le niveau de compétence est impressionnant.",
        rating: 4
    },
    {
        id: 4,
        name: "Sarah Doumbia",
        role: "Artisan Coiffeuse",
        content: "Enfin une plateforme qui pense aux artisans ! J'ai pu trouver une formation et du matériel à prix réduit grâce aux deals proposés.",
        rating: 5
    },
    {
        id: 5,
        name: "Tech Solutions Abidjan",
        role: "Partenaire Technologique",
        content: "Collaborer avec Soutrali Deals nous a ouvert les portes d'un marché immense. Une équipe dynamique et visionnaire.",
        rating: 5
    }
];

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <SectionWrapper id="avis" bg="dark" className="relative group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
                    Ce qu'ils disent de <span className="text-primary-orange">Nous</span>
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                    La satisfaction de notre communauté est notre plus belle réussite.
                </p>
            </div>

            <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
                {/* Navigation Buttons */}
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-card border border-dark-border text-white hover:bg-primary-orange hover:border-primary-orange transition-all duration-300 shadow-lg group-hover:opacity-100 opacity-0 sm:opacity-100"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-card border border-dark-border text-white hover:bg-primary-orange hover:border-primary-orange transition-all duration-300 shadow-lg group-hover:opacity-100 opacity-0 sm:opacity-100"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                <div className="overflow-hidden relative min-h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-dark-card border border-dark-border p-8 md:p-12 rounded-2xl relative shadow-2xl w-full"
                        >
                            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary-orange/20" />

                            <div className="flex flex-col items-center text-center">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-primary-orange fill-primary-orange' : 'text-gray-600'}`}
                                        />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-white font-medium italic mb-8 leading-relaxed">
                                    "{testimonials[currentIndex].content}"
                                </p>

                                <div>
                                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <span className="text-primary-blue font-medium">
                                        {testimonials[currentIndex].role}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary-orange w-8' : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
