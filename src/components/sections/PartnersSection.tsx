import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import partner1 from '../../assets/images/partner/partner1.png';
import partner2 from '../../assets/images/partner/partner2.png';
import partner3 from '../../assets/images/partner/partner3.png';
import partner4 from '../../assets/images/partner/partner4.png';
import partner5 from '../../assets/images/partner/partner5.png';
import partner6 from '../../assets/images/partner/partner6.png';
import partner7 from '../../assets/images/partner/partner7.png';

const partners = [
    { img: partner1, name: "Partner 1" },
    { img: partner2, name: "Partner 2" },
    { img: partner3, name: "Partner 3" },
    { img: partner4, name: "Partner 4" },
    { img: partner5, name: "Partner 5" },
    { img: partner6, name: "Partner 6" },
    { img: partner7, name: "Partner 7" },
];

export const PartnersSection = () => {
    return (
        <SectionWrapper id="partenaires" bg="white" className="py-12 border-t border-gray-100">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gray-900">Ils nous font confiance</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Nos clients sont heureux de travailler avec <span className="font-bold text-gray-900">SOUTRALI DEALS</span> pour accélérer leur croissance digitale en Côte d'Ivoire.
                </p>
            </div>

            <div className="relative w-full overflow-hidden py-4">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

                <div className="flex">
                    {/* First Loop */}
                    <motion.div
                        className="flex gap-20 min-w-max px-8 items-center"
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {partners.map((partner, index) => (
                            <div key={`p1-${index}`} className="w-48 h-28 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110">
                                <img
                                    src={partner.img}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Second Loop */}
                    <motion.div
                        className="flex gap-20 min-w-max px-8 items-center"
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {partners.map((partner, index) => (
                            <div key={`p2-${index}`} className="w-48 h-28 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110">
                                <img
                                    src={partner.img}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};
