import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Mail, MapPin, Clock, Send, CheckCircle, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/seo/SEO';

/**
 * ContactPage - Page dédiée "Contact"
 * 
 * Contenu :
 * - Formulaire de contact
 * - Coordonnées (Email, WhatsApp, Localisation)
 * - Réseaux sociaux
 */
export const ContactPage = () => {
    // State pour le formulaire
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulation d'envoi API
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <SEO
                title="Contactez-nous"
                description="Besoin d'un devis ou d'une information ? Notre équipe est à votre écoute 24/7. Contactez-nous par email, téléphone ou WhatsApp."
            />
            <div className="pt-24">
                <SectionWrapper id="contact-page" bg="dark">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="text-gold-premium font-bold tracking-widest uppercase mb-4 block">Parlons de votre projet</span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Contactez <span className="text-primary-blue">L'Équipe</span>
                        </h1>
                        <p className="text-xl text-text-secondary">
                            Une question, une idée, un partenariat ? Nous sommes là pour vous répondre.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Info Contact */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-dark-card border border-dark-border p-8 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden"
                        >
                            {/* Décoration d'arrière-plan */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                            <div>
                                <h3 className="text-2xl font-heading font-bold mb-8 text-white">Nos Coordonnées</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center text-primary-green shrink-0">
                                            <Smartphone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white mb-1">Téléphone & WhatsApp</h4>
                                            <p className="text-text-muted mb-1">Service client disponible 24/7</p>
                                            <a href="https://wa.me/22507000000" className="text-primary-green hover:underline font-bold text-lg">+225 07 00 00 00 00</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white mb-1">Email</h4>
                                            <p className="text-text-muted mb-1">Réponse sous 24h ouvrées</p>
                                            <a href="mailto:contact@soutralideals.com" className="text-primary-blue hover:underline font-bold text-lg">contact@soutralideals.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gold-premium/10 flex items-center justify-center text-gold-premium shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white mb-1">Bureaux</h4>
                                            <p className="text-text-secondary">
                                                Abidjan, Cocody Riviera 2<br />
                                                Côte d'Ivoire
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary-orange/10 flex items-center justify-center text-primary-orange shrink-0">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white mb-1">Horaires</h4>
                                            <p className="text-text-secondary">
                                                Lundi - Vendredi : 08h00 - 18h00<br />
                                                Samedi : 09h00 - 13h00
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links ou autre bas de page */}
                            <div className="mt-12 pt-8 border-t border-dark-border">
                                <p className="text-text-muted text-sm">
                                    Suivez-nous sur les réseaux sociaux pour ne rien manquer de nos actualités.
                                </p>
                            </div>
                        </motion.div>

                        {/* Formulaire */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-dark-card border border-dark-border p-8 rounded-3xl relative"
                        >
                            {isSubmitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Message Envoyé !</h3>
                                    <p className="text-text-secondary mb-8">
                                        Merci de nous avoir contactés. Notre équipe reviendra vers vous dans les plus brefs délais.
                                    </p>
                                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                                        Envoyer un autre message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h3 className="text-2xl font-heading font-bold text-white mb-6">Envoyez-nous un message</h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-text-secondary">Nom complet</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-premium transition-colors"
                                                placeholder="Votre nom"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-premium transition-colors"
                                                placeholder="votre@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-text-secondary">Sujet</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formState.subject}
                                            onChange={handleChange}
                                            className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-premium transition-colors appearance-none"
                                        >
                                            <option value="" disabled>Sélectionnez un sujet</option>
                                            <option value="devis">Demande de Devis</option>
                                            <option value="partenariat">Proposition de Partenariat</option>
                                            <option value="support">Support Technique</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-premium transition-colors resize-none"
                                            placeholder="Détaillez votre demande..."
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gold-premium hover:bg-yellow-500 text-black font-bold py-4 rounded-lg shadow-lg shadow-gold-premium/20"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                Envoi en cours...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Envoyer le message <Send className="w-5 h-5" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </SectionWrapper>
                <FinalCTA />
            </div>
        </>
    );
};
