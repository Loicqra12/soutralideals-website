import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Calendar, Award, MapPin } from 'lucide-react';

interface Event {
    id: number;
    date: string;
    title: string;
    category: 'Hackathon' | 'Meetup' | 'Award' | 'Bootcamp';
    location: string;
    image: string;
    description: string;
}

const events: Event[] = [
    {
        id: 1,
        date: "15 Juin 2024",
        title: "Vainqueur du Hackathon Digital CI",
        category: "Award",
        location: "Abidjan, Sofitel Ivoire",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800",
        description: "1er prix catégorie Innovation Sociale pour notre solution d'identification des prestataires."
    },
    {
        id: 2,
        date: "2 Mai 2024",
        title: "Meetup Soutraliens #3",
        category: "Meetup",
        location: "Cocody, Orange Digital Center",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
        description: "Rencontre mensuelle avec plus de 50 freelances pour échanger sur les bonnes pratiques."
    },
    {
        id: 3,
        date: "20 Avril 2024",
        title: "Bootcamp Fullstack JS",
        category: "Bootcamp",
        location: "Marcory, INP-HB",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
        description: "Formation intensive de 3 jours pour apprendre à créer des applications web modernes."
    },
    {
        id: 4,
        date: "10 Mars 2024",
        title: "Lancement Bêta Privée",
        category: "Hackathon",
        location: "En ligne",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        description: "Phase de test avec 100 bêta-testeurs sélectionnés pour valider l'UX de l'application."
    },
];

export const Events = () => {
    return (
        <SectionWrapper id="events">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                    Nos Événements & <span className="text-gold-premium">Distinctions</span>
                </h2>
                <p className="text-lg text-text-secondary">
                    Une équipe active sur le terrain, récompensée pour son impact et son innovation.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-green via-primary-blue to-primary-orange md:-translate-x-1/2 opacity-30"></div>

                <div className="space-y-12">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-dark-bg border-4 border-primary-green rounded-full transform -translate-x-2 md:-translate-x-1/2 z-10 box-content shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>

                            {/* Content Card */}
                            <div className="ml-12 md:ml-0 md:w-1/2 w-full">
                                <div className={`bg-dark-card border border-dark-border p-6 rounded-2xl hover:border-primary-blue/30 transition-colors shadow-lg group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                    }`}>

                                    {/* Date Badge */}
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 ${event.category === 'Award' ? 'bg-gold-premium/10 text-gold-premium border border-gold-premium/20' :
                                        event.category === 'Meetup' ? 'bg-primary-blue/10 text-primary-blue border border-primary-blue/20' :
                                            event.category === 'Bootcamp' ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' :
                                                'bg-primary-green/10 text-primary-green border border-primary-green/20'
                                        } ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                                        <Calendar className="w-3 h-3" />
                                        {event.date}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-blue transition-colors">{event.title}</h3>

                                    <div className={`flex items-center gap-4 text-sm text-text-muted mb-4 ${index % 2 !== 0 ? 'md:justify-end' : ''
                                        }`}>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" /> {event.location}
                                        </div>
                                        {event.category === 'Award' && (
                                            <div className="flex items-center gap-1 text-gold-premium">
                                                <Award className="w-4 h-4" /> Prix d'Excellence
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-text-secondary leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="ml-12 md:ml-0 md:w-1/2 w-full flex justify-center">
                                <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden border border-dark-border group-hover:border-primary-orange/50 transition-all shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-primary-blue/20 mix-blend-overlay z-10"></div>
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
