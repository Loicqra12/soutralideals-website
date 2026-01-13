import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-dark-card border-t border-dark-border pt-20 pb-10">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="Soutrali" className="w-10 h-10" onError={(e) => e.currentTarget.style.display = 'none'} />
                            <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-green to-primary-blue">
                                Soutrali Deals
                            </span>
                        </div>
                        <p className="text-text-muted leading-relaxed">
                            L'écosystème digital n°1 en Côte d'Ivoire pour connecter talents, innovations et opportunités.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-text-secondary hover:text-primary-blue hover:border-primary-blue transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-text-secondary hover:text-cyan-400 hover:border-cyan-400 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-text-secondary hover:text-gold-premium hover:border-gold-premium transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-text-secondary hover:text-blue-700 hover:border-blue-700 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="font-bold text-lg text-white mb-6">Nos Services</h4>
                        <ul className="space-y-4 text-text-secondary">
                            <li><Link to="/services" className="hover:text-primary-green transition-colors">Développement Web & Mobile</Link></li>
                            <li><Link to="/services" className="hover:text-primary-green transition-colors">Marketing Digital</Link></li>
                            <li><Link to="/communaute" className="hover:text-primary-green transition-colors">Design UI/UX</Link></li>
                            <li><Link to="/services" className="hover:text-primary-green transition-colors">Conseil Stratégique</Link></li>
                            <li><Link to="/pack-startups" className="hover:text-primary-green transition-colors">Pack Startups</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="font-bold text-lg text-white mb-6">La Société</h4>
                        <ul className="space-y-4 text-text-secondary">
                            <li><Link to="/a-propos" className="hover:text-primary-blue transition-colors">À Propos</Link></li>
                            <li><Link to="/communaute" className="hover:text-primary-blue transition-colors">La Communauté</Link></li>
                            <li><Link to="/communaute" className="hover:text-primary-blue transition-colors">Événements</Link></li>
                            <li><Link to="/carriere" className="hover:text-primary-blue transition-colors">Carrières</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-blue transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg text-white mb-6">Newsletter</h4>
                        <p className="text-text-muted mb-4">
                            Restez informé des dernières actualités tech en CI.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-premium transition-colors"
                            />
                            <Button className="w-full bg-gold-premium hover:bg-yellow-600 text-white border-none">
                                S'abonner
                            </Button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        © 2024 Soutrali Deals. Tous droits réservés.
                    </p>
                    <div className="flex gap-6 text-sm text-text-muted">
                        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-white transition-colors">CGU</a>
                        <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
