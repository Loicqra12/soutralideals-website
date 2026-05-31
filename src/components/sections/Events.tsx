import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { RainBackground } from '../ui/RainBackground';
import { Calendar, Award, MapPin, Code, Building2, GraduationCap, Monitor } from 'lucide-react';
import orangeFabImage from '../../assets/images/community/events/event-orange-fab-2025.jpg';
import imphackImage from '../../assets/images/community/events/event-imphack-2023.jpg';
import scredImage from '../../assets/images/community/events/event-scred-2025.jpg';
import pejedecImage from '../../assets/images/community/events/event-pejedec-cipme3.jpg';
import salonTechImage from '../../assets/images/community/events/event-salon-technologie-2025.jpg';

interface Event {
    id: number;
    date: string;
    title: string;
    category: 'Hackathon' | 'Salon' | 'Programme' | 'Tech';
    location: string;
    image: string;
    description: string;
    impact: string[];
    icon: React.ElementType;
    color: string;
}

const events: Event[] = [
    {
        id: 1,
        date: "2025",
        title: "Hackathon Orange Fab 2025",
        category: "Hackathon",
        location: "Abidjan, Côte d'Ivoire",
        image: orangeFabImage,
        icon: Code,
        color: "text-primary-blue",
        description: "Soutrali Deals a participé au prestigieux Hackathon Orange Fab 2025, l'un des plus grands événements tech d'Afrique de l'Ouest. Organisé par Orange Digital Center, cet hackathon rassemble les meilleurs développeurs, designers et entrepreneurs autour de défis innovants pour la transformation digitale.",
        impact: [
            "Présence auprès de leaders tech internationaux",
            "Réseautage avec startups ambitieuses",
            "Partage de notre vision numérique inclusive",
            "Validation de nos solutions par des experts"
        ]
    },
    {
        id: 2,
        date: "Janvier 2023",
        title: "Hackathon IMP'HACK (Impact Hub + 1XBET)",
        category: "Hackathon",
        location: "Abidjan, Côte d'Ivoire",
        image: imphackImage,
        icon: Code,
        color: "text-primary-green",
        description: "Participation à IMP'HACK, un hackathon d'envergure organisé par Impact Hub Abidjan en collaboration avec 1XBET. Cet événement visait à encourager des solutions innovantes axées sur l'inclusion financière, l'éducation numérique et le développement économique local.",
        impact: [
            "Développement de compétences tech avancées",
            "Collaboration avec la communauté startup locale",
            "Renforcement de l'écosystème d'innovation ivoirien",
            "Visibilité médiatique et réseautage stratégique"
        ]
    },
    {
        id: 3,
        date: "2025",
        title: "SCRED – Salon du Crédit & Financement",
        category: "Salon",
        location: "Abidjan, Côte d'Ivoire",
        image: scredImage,
        icon: Building2,
        color: "text-gold-premium",
        description: "Présence au Salon du Crédit et du Financement de Côte d'Ivoire (SCRED), un événement majeur dédié à l'accès au financement des PME et startups. SCRED réunit les principaux acteurs financiers, banques, fintechs, investisseurs et entrepreneurs pour booster l'inclusion financière.",
        impact: [
            "Rencontre avec investisseurs et institutions financières",
            "Mise en avant de services digitaux adaptés aux PME",
            "Opportunités de partenariats stratégiques",
            "Validation de notre modèle économique"
        ]
    },
    {
        id: 4,
        date: "2023-2025",
        title: "PEJEDEC CIPME 3 – Accompagnement des Jeunes Entrepreneurs",
        category: "Programme",
        location: "Côte d'Ivoire",
        image: pejedecImage,
        icon: GraduationCap,
        color: "text-primary-green",
        description: "Participation active au Projet Emploi Jeune et Développement des Compétences (PEJEDEC 3) — programme national d'accompagnement à l'entrepreneuriat, à la création d'entreprise, et à la formation professionnelle pour les jeunes. Plus de 200 jeunes entrepreneurs ont bénéficié de nos formations.",
        impact: [
            "Soutien à l'employabilité numérique des jeunes",
            "Formation et coaching pour startups en devenir",
            "Renforcement des compétences entrepreneuriales",
            "Création d'un réseau de jeunes entrepreneurs"
        ]
    },
    {
        id: 5,
        date: "2025",
        title: "Salon de la Technologie – Abidjan",
        category: "Tech",
        location: "Abidjan, Côte d'Ivoire",
        image: salonTechImage,
        icon: Monitor,
        color: "text-primary-blue",
        description: "Participation au Salon de la Technologie d'Abidjan, l'événement phare de l'innovation technologique en Côte d'Ivoire. Soutrali Deals y a présenté sa plateforme complète, ses innovations en matière d'IA, ses solutions de gestion intégrées et sa vision de l'économie digitale inclusive.",
        impact: [
            "Visibilité maximale auprès de la communauté tech",
            "Démonstration live de nos produits",
            "Rencontres avec partenaires technologiques",
            "Feedback utilisateurs en temps réel"
        ]
    },
];

export const Events = () => {
    return (
        <SectionWrapper id="events" bg="dark" decorativeBackground={<RainBackground />}>
            <div className="text-center max-w-4xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-6 font-heading text-3xl font-bold text-white md:text-5xl">
                        Nos Événements & Distinctions
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Une équipe active sur le terrain, récompensée pour son impact et son innovation.
                    </p>
                </motion.div>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Vertical Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-green via-primary-blue via-gold-premium to-primary-green md:-translate-x-1/2 opacity-30"></div>

                <div className="space-y-16">
                    {events.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot with Icon */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-2 md:-translate-x-1/2 z-10">
                                    <motion.div
                                        className="w-12 h-12 bg-dark-bg border-4 border-primary-green rounded-full flex items-center justify-center shadow-lg shadow-primary-green/30"
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Icon className={`w-5 h-5 ${event.color}`} />
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-1/2 w-full">
                                    <motion.div
                                        className={`bg-dark-card border border-dark-border p-6 md:p-8 rounded-2xl hover:border-primary-blue/30 transition-all shadow-lg group relative overflow-hidden ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                                        whileHover={{ y: -5 }}
                                    >
                                        {/* Background gradient effect */}
                                        <div className={`absolute top-0 right-0 w-32 h-32 ${event.color.replace('text-', 'bg-')}/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                        {/* Date Badge */}
                                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-4 ${
                                            event.category === 'Hackathon' ? 'bg-primary-blue/10 text-primary-blue border border-primary-blue/20' :
                                            event.category === 'Salon' ? 'bg-gold-premium/10 text-gold-premium border border-gold-premium/20' :
                                            event.category === 'Programme' ? 'bg-primary-green/10 text-primary-green border border-primary-green/20' :
                                            'bg-primary-blue/10 text-primary-blue border border-primary-blue/20'
                                        } ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                                            <Calendar className="w-3 h-3" />
                                            {event.date}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary-blue transition-colors relative z-10">
                                            {event.title}
                                        </h3>

                                        {/* Location */}
                                        <div className={`flex items-center gap-2 text-sm text-text-muted mb-4 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                            <MapPin className="w-4 h-4" />
                                            <span>{event.location}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-text-secondary leading-relaxed mb-4 relative z-10">
                                            {event.description}
                                        </p>

                                        {/* Impact Points */}
                                        <div className="space-y-2 mt-6 relative z-10">
                                            <p className="text-sm font-semibold text-text-light mb-2">Impact :</p>
                                            <ul className={`space-y-1.5 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                                                {event.impact.slice(0, 3).map((point, i) => (
                                                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                                                        <span className="text-primary-green mt-1">✓</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Image */}
                                <div className="ml-16 md:ml-0 md:w-1/2 w-full flex justify-center">
                                    <motion.div
                                        className="relative w-full max-w-lg rounded-xl overflow-hidden border border-dark-border group-hover:border-gold-premium/50 transition-all shadow-2xl"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                        />
                                        {/* Category Badge on Image */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <div className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
                                                event.category === 'Hackathon' ? 'bg-primary-blue/80 text-white' :
                                                event.category === 'Salon' ? 'bg-gold-premium/80 text-white' :
                                                event.category === 'Programme' ? 'bg-primary-green/80 text-white' :
                                                'bg-primary-blue/80 text-white'
                                            }`}>
                                                {event.category}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
};
