import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';

const jobs = {
    Artisans: [
        "Plombier", "Électricien", "Menuisier", "Mécanicien", "Peintre",
        "Coiffeur", "Couturier", "Maçon", "Frigoriste", "Vitrier"
    ],
    Freelances: [
        "Développeur Web", "Graphiste", "Redacteur", "Community Manager",
        "Photographe", "Monteur Vidéo", "Traducteur", "Consultant", "Coach", "Architecte"
    ],
    Commerce: [
        "Vendeur Mode", "Électronique", "Cosmétique", "Alimentation",
        "Immobilier", "Véhicules", "Mobilier", "Accessoires", "Livreur", "Grossiste"
    ]
};

type Category = keyof typeof jobs;

export const ArtisanCommunities = () => {
    const [activeTab, setActiveTab] = useState<Category>('Artisans');

    return (
        <SectionWrapper id="metiers">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-heading font-bold mb-4">
                    Tous les métiers sont <span className="text-primary-green">Bienvenus</span>
                </h2>
                <p className="text-text-secondary">
                    Quel que soit votre savoir-faire, il y a une place pour vous sur Soutrali Deals.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-12 bg-dark-card/50 p-2 rounded-full w-fit mx-auto border border-dark-border">
                {(Object.keys(jobs) as Category[]).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab
                                ? 'bg-gradient-cta text-white shadow-lg'
                                : 'text-text-muted hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="max-w-4xl mx-auto min-h-[200px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-5 gap-4"
                    >
                        {jobs[activeTab].map((job, index) => (
                            <motion.div
                                key={job}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-dark-card border border-dark-border p-4 rounded-xl text-center hover:border-primary-green/50 hover:bg-dark-card/80 transition-all cursor-default group"
                            >
                                <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors">{job}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </SectionWrapper>
    );
};
