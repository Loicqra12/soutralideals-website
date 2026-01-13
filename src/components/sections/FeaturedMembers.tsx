import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

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
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        quote: "La communauté m'a permis de trouver mes premiers clients internationaux.",
        color: "bg-primary-blue"
    },
    {
        id: 2,
        name: "Amina Koné",
        role: "Designer UX/UI",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        quote: "J'adore l'ambiance d'entraide. On apprend tous les jours des autres.",
        color: "bg-gold-premium"
    },
    {
        id: 3,
        name: "Moussa Diaby",
        role: "E-commerçant",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        quote: "Les conseils business partagés dans le groupe valent de l'or !",
        color: "bg-primary-green"
    },
    {
        id: 4,
        name: "Sarah Touré",
        role: "Rédactrice Web",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        quote: "Soutrali Deals m'a donné la visibilité qu'il manquait à mon activité.",
        color: "bg-gold-premium"
    }
];

export const FeaturedMembers = () => {
    return (
        <div className="py-20 bg-dark-bg border-y border-dark-border overflow-hidden">
            <div className="container-custom mb-12 text-center">
                <h3 className="text-2xl font-bold font-heading">Ils nous font confiance</h3>
            </div>

            <div className="relative w-full">
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x px-4 md:justify-center no-scrollbar">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="min-w-[300px] bg-dark-card border border-dark-border p-6 rounded-2xl relative snap-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-dark-border/50" />

                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-1 rounded-full ${member.color}/20`}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{member.name}</h4>
                                    <p className="text-xs text-text-muted uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>

                            <p className="text-text-secondary italic text-sm leading-relaxed">
                                "{member.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
