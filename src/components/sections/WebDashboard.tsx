import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Layout, BarChart3, Users, Settings } from 'lucide-react';
import { Button } from '../ui/Button';
import dashboardImage from '../../assets/images/project/project_dashboard_admin.png';

export const WebDashboard = () => {
    return (
        <SectionWrapper id="web-dashboard">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Dashboard Image */}
                <motion.div
                    className="order-2 lg:order-1 relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark-border group">
                        <img
                            src={dashboardImage}
                            alt="Dashboard Administrateur Soutrali Deals - Centre de pilotage de l'écosystème"
                            className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                </motion.div>

                {/* Right: Text Content */}
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Dashboard & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-purple-500">Back-Office Web</span>
                    </h2>

                    <p className="text-lg text-text-secondary leading-relaxed mb-8">
                        En plus de l'application mobile, nous proposons une interface web puissante pour les professionnels qui ont besoin de gérer leur activité en détail.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-primary-blue shrink-0">
                                <BarChart3 className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Analyses Détaillées</h4>
                                <p className="text-sm text-text-muted">Suivez vos revenus, vos visites et votre performance en temps réel.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-primary-green shrink-0">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Gestion Clientèle CRM</h4>
                                <p className="text-sm text-text-muted">Gérez votre base clients, vos devis et vos relances facilement.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-gold-premium shrink-0">
                                <Settings className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Outils Avancés</h4>
                                <p className="text-sm text-text-muted">Facturation, catalogue produits et paramétrage boutique.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-8">
                        <Button className="bg-dark-card hover:bg-dark-border border border-dark-border text-white">
                            <Layout className="w-4 h-4 mr-2" />
                            Explorer la démo Web
                        </Button>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};
