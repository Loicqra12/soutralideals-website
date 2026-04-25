import { motion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { Smartphone, Globe, Server, Cpu } from 'lucide-react';

const techCategories = [
    {
        title: 'Mobile',
        icon: Smartphone,
        technologies: ['Flutter', 'Dart', 'Android (Kotlin)', 'iOS (Swift)', 'Firebase'],
        bgColor: 'bg-gold-premium/10',
        iconColor: 'text-gold-premium'
    },
    {
        title: 'Web',
        icon: Globe,
        technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Flutter Web'],
        bgColor: 'bg-primary-blue/10',
        iconColor: 'text-primary-blue'
    },
    {
        title: 'Backend',
        icon: Server,
        technologies: ['Node.js', 'API REST', 'GraphQL', 'PostgreSQL', 'MongoDB'],
        bgColor: 'bg-primary-green/10',
        iconColor: 'text-primary-green'
    },
    {
        title: 'Outils & Services',
        icon: Cpu,
        technologies: ['IA (OpenAI)', 'Géolocalisation (Mapbox)', 'Mobile Money APIs', 'Analytics', 'CI/CD'],
        bgColor: 'bg-gold-premium/10',
        iconColor: 'text-gold-premium'
    }
];

export const TechnologiesStack = () => {
    return (
        <SectionWrapper id="technologies" bg="dark">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">Compétences</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Un stack technique moderne et performant pour des solutions évolutives
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {techCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-primary-green/50 transition-all"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-14 h-14 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                                        <Icon className={`w-7 h-7 ${category.iconColor}`} />
                                    </div>
                                    <h3 className="font-bold text-white text-2xl">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {category.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-text-secondary text-sm font-mono hover:border-primary-green/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Architecture Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-gradient-to-r from-dark-card to-dark-bg border border-dark-border rounded-2xl p-8 text-center"
                >
                    <h3 className="font-bold text-white text-xl mb-4">Architecture Scalable & Sécurisée</h3>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Notre infrastructure cloud garantit performance, sécurité et scalabilité pour accompagner votre croissance.
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
