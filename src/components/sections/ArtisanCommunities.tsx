import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import prestatairesImage from '../../assets/images/community/members/members-prestataires-category.png';
import freelancesImage from '../../assets/images/community/members/members-freelances-category.png';
import vendeursImage from '../../assets/images/community/members/members-vendeurs-category.png';
import agentsImage from '../../assets/images/community/members/members-agents-category.png';

const jobs = {
    Artisans: {
        jobs: [
            "Plombier", "Électricien", "Menuisier", "Mécanicien", "Peintre",
            "Coiffeur", "Couturier", "Maçon", "Frigoriste", "Vitrier"
        ],
        image: prestatairesImage,
        description: "Plombiers, électriciens, mécaniciens, coiffeurs, couturiers... Tous les métiers locaux et services du quotidien sont représentés. Professionnalisez votre activité et développez votre clientèle grâce à notre plateforme."
    },
    Freelances: {
        jobs: [
            "Développeur Web", "Graphiste", "Redacteur", "Community Manager",
            "Photographe", "Monteur Vidéo", "Traducteur", "Consultant", "Coach", "Architecte"
        ],
        image: freelancesImage,
        description: "Développeurs web, designers UX/UI, marketeurs digitaux, data analysts... Rejoignez une communauté de talents tech qui collaborent sur des projets innovants et développent leurs compétences ensemble."
    },
    Commerce: {
        jobs: [
            "Vendeur Mode", "Électronique", "Cosmétique", "Alimentation",
            "Immobilier", "Véhicules", "Mobilier", "Accessoires", "Livreur", "Grossiste"
        ],
        image: vendeursImage,
        description: "E-commerçants, boutiques en ligne, services digitaux... Créez votre vitrine virtuelle, gérez vos ventes et développez votre business grâce à nos outils de gestion intégrés et notre réseau de clients."
    }
};

type Category = keyof typeof jobs;

export const ArtisanCommunities = () => {
    const [activeTab, setActiveTab] = useState<Category>('Artisans');

    return (
        <SectionWrapper id="metiers">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Les Membres de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">Communauté</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Tous les métiers sont bienvenus. Quel que soit votre savoir-faire, il y a une place pour vous sur Soutrali Deals.
                    </p>
                </motion.div>
            </div>

            {/* Category Image */}
            <div className="max-w-4xl mx-auto mb-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-2xl overflow-hidden border border-dark-border"
                    >
                        <img 
                            src={jobs[activeTab].image} 
                            alt={`${activeTab} - Membres de la communauté`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p className="text-text-light text-sm md:text-base leading-relaxed">
                                {jobs[activeTab].description}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
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
                        {tab === 'Artisans' ? 'Prestataires & Artisans' : 
                         tab === 'Freelances' ? 'Freelances IT & Créatifs' : 
                         'Vendeurs & Entrepreneurs'}
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
                        {jobs[activeTab].jobs.map((job, index) => (
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

            {/* Agents Section */}
            <div className="max-w-4xl mx-auto mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-dark-card border border-dark-border rounded-2xl p-8 overflow-hidden relative group"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">🧭 Agents de Recensement</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Acteurs terrain essentiels qui construisent et enrichissent notre base de données de prestataires. Grâce à leur travail, nous cartographions l'écosystème économique local et connectons les talents aux opportunités.
                            </p>
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <img 
                                src={agentsImage} 
                                alt="Agents de recensement"
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
