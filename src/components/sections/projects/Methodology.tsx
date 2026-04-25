import { motion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import approcheProjectImage from '../../../assets/images/project/approcheproject.png';

export const Methodology = () => {
    return (
        <SectionWrapper id="methodology" bg="dark">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Notre approche projet <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">de A à Z</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Une méthodologie éprouvée pour transformer vos idées en produits digitaux performants
                    </p>
                </motion.div>

                {/* Image de l'approche projet */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark-border group">
                        <img
                            src={approcheProjectImage}
                            alt="Notre approche projet de A à Z - Méthodologie Soutrali Deals"
                            className="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-500"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
