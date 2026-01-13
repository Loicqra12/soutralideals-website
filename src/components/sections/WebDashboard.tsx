import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Layout, BarChart3, Users, Settings } from 'lucide-react';
import { Button } from '../ui/Button';

export const WebDashboard = () => {
    return (
        <SectionWrapper id="web-dashboard">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Browser Window Mockup */}
                <motion.div
                    className="order-2 lg:order-1 relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-dark-card border border-dark-border rounded-xl shadow-2xl overflow-hidden aspect-[16/10] relative group">
                        {/* Browser Header */}
                        <div className="bg-dark-bg border-b border-dark-border p-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="bg-dark-card rounded-md px-3 py-1 text-xs text-text-muted flex-1 text-center border border-dark-border mx-4">
                                admin.soutralideals.com
                            </div>
                        </div>

                        {/* Dashboard UI Fake */}
                        <div className="p-6 grid grid-cols-4 gap-4 h-full bg-dark-bg/50">
                            {/* Sidebar */}
                            <div className="col-span-1 border-r border-dark-border pr-4 space-y-3 hidden md:block">
                                <div className="h-8 bg-dark-border/40 rounded w-3/4 mb-6"></div>
                                <div className="h-4 bg-primary-blue/20 rounded w-full"></div>
                                <div className="h-4 bg-dark-border/20 rounded w-full"></div>
                                <div className="h-4 bg-dark-border/20 rounded w-full"></div>
                                <div className="h-4 bg-dark-border/20 rounded w-full"></div>
                            </div>

                            {/* Main Content */}
                            <div className="col-span-4 md:col-span-3 space-y-4">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="h-6 bg-dark-border/40 rounded w-1/3"></div>
                                    <div className="h-8 bg-primary-green/20 rounded w-24"></div>
                                </div>

                                {/* Chart Area */}
                                <div className="h-40 bg-gradient-to-t from-primary-blue/10 to-transparent rounded-lg border border-primary-blue/20 flex items-end justify-around px-4 pb-2 relative overflow-hidden group-hover:border-primary-blue/40 transition-colors">
                                    {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-8 bg-primary-blue/40 rounded-t-sm"
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="h-24 bg-dark-card border border-dark-border rounded-lg p-3">
                                        <div className="w-8 h-8 rounded bg-primary-orange/20 mb-2"></div>
                                        <div className="h-4 bg-dark-border/30 rounded w-1/2"></div>
                                    </div>
                                    <div className="h-24 bg-dark-card border border-dark-border rounded-lg p-3">
                                        <div className="w-8 h-8 rounded bg-primary-green/20 mb-2"></div>
                                        <div className="h-4 bg-dark-border/30 rounded w-1/2"></div>
                                    </div>
                                    <div className="h-24 bg-dark-card border border-dark-border rounded-lg p-3">
                                        <div className="w-8 h-8 rounded bg-gold-premium/20 mb-2"></div>
                                        <div className="h-4 bg-dark-border/30 rounded w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Overaly Glow */}
                        <div className="absolute inset-0 bg-blue-500/5 pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
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

                    <div className="mt-10">
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
