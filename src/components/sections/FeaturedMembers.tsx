import { motion } from 'framer-motion';
import { QuoteIcon } from '../icons';
import testimonial1 from '../../assets/images/community/testimonials/testimonial-member-1.jpg';
import testimonial2 from '../../assets/images/community/testimonials/testimonial-member-2.jpg';
import testimonial3 from '../../assets/images/community/testimonials/testimonial-member-3.jpg';
import testimonial4 from '../../assets/images/community/testimonials/testimonial-member-4.jpg';
import memberCardTemplate from '../../assets/images/community/members/member-card-template.png';

interface Member {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
    color: string;
}

const members: Member[] = [
    {
        id: 1,
        name: "Kouamé Jean",
        role: "Développeur Fullstack",
        image: testimonial1,
        quote: "Grâce à Soutrali Deals, j'ai trouvé mes premiers clients réguliers. La plateforme m'a permis de professionnaliser mon activité de développeur freelance et de gagner en crédibilité. Aujourd'hui, je travaille avec des clients internationaux grâce à la visibilité que m'offre la communauté.",
        color: "bg-primary-blue"
    },
    {
        id: 2,
        name: "Amina Koné",
        role: "Coiffeuse & Entrepreneure",
        image: testimonial2,
        quote: "L'application m'a permis de gérer mes clients, mes rendez-vous et mes paiements en un seul endroit. Avant, je perdais beaucoup de temps avec la gestion administrative. Maintenant, je me concentre sur mon métier et j'ai vu mes revenus augmenter de 40%.",
        color: "bg-gold-premium"
    },
    {
        id: 3,
        name: "Moussa Diaby",
        role: "E-commerçant",
        image: testimonial3,
        quote: "La communauté Soutrali Deals, c'est une vraie famille. On s'entraide, on partage nos expériences et on apprend les uns des autres. Les formations et les événements m'ont permis de développer mes compétences en marketing digital.",
        color: "bg-primary-green"
    },
    {
        id: 4,
        name: "Sarah Touré",
        role: "Agent de Recensement",
        image: testimonial4,
        quote: "En tant qu'agent de recensement, je contribue à construire la base de données de la plateforme. C'est gratifiant de voir comment mon travail aide d'autres prestataires à trouver des clients et à développer leur activité.",
        color: "bg-gold-premium"
    }
];

export const FeaturedMembers = () => {
    return (
        <div className="py-20 bg-dark-bg border-y border-dark-border overflow-hidden" id="temoignages">
            <div className="container-custom mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Ils nous font <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-gold-premium">confiance</span>
                    </h3>
                    <p className="text-text-secondary">
                        Des histoires vraies de membres qui ont transformé leur activité grâce à Soutrali Deals
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full">
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x px-4 md:justify-center no-scrollbar">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="min-w-[320px] max-w-[400px] relative snap-center group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            {/* Card Template Background */}
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <img 
                                    src={memberCardTemplate} 
                                    alt=""
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="relative bg-dark-card border border-dark-border p-6 rounded-2xl group-hover:border-primary-green/50 transition-all">
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity z-10">
                                    <QuoteIcon size={32} className="text-primary-green" />
                                </div>

                                {/* Member Info */}
                                <div className="flex items-center gap-4 mb-4 relative z-10">
                                    <div 
                                        className="p-1 rounded-full ring-2"
                                        style={{
                                            backgroundColor: member.color === 'bg-primary-blue' ? 'rgba(59, 130, 246, 0.2)' :
                                                           member.color === 'bg-primary-green' ? 'rgba(34, 197, 94, 0.2)' :
                                                           'rgba(184, 134, 11, 0.2)',
                                            ringColor: member.color === 'bg-primary-blue' ? 'rgba(59, 130, 246, 0.3)' :
                                                      member.color === 'bg-primary-green' ? 'rgba(34, 197, 94, 0.3)' :
                                                      'rgba(184, 134, 11, 0.3)'
                                        }}
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{member.name}</h4>
                                        <p className="text-xs text-text-muted uppercase tracking-wider">{member.role}</p>
                                    </div>
                                </div>

                                {/* Quote */}
                                <p className="text-text-secondary leading-relaxed relative z-10">
                                    "{member.quote}"
                                </p>

                                {/* Decorative gradient */}
                                <div 
                                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"
                                    style={{
                                        background: member.color === 'bg-primary-blue' ? 'linear-gradient(to right, #3B82F6, transparent)' :
                                                   member.color === 'bg-primary-green' ? 'linear-gradient(to right, #22C55E, transparent)' :
                                                   'linear-gradient(to right, #B8860B, transparent)'
                                    }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
