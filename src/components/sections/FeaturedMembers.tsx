import { motion } from 'framer-motion';
import { QuoteIcon } from '../icons';
import testimonial1 from '../../assets/images/community/testimonials/testimonial-member-1.jpg';
import testimonial2 from '../../assets/images/community/testimonials/testimonial-member-2.jpg';
import testimonial3 from '../../assets/images/community/testimonials/testimonial-member-3.jpg';
import testimonial4 from '../../assets/images/community/testimonials/testimonial-member-4.jpg';
import memberCardTemplate from '../../assets/images/community/members/member-card-template.png';

type MemberColor = 'blue' | 'gold' | 'green';

const RING: Record<MemberColor, string> = {
  blue:  'ring-primary-blue/30  bg-primary-blue/15',
  green: 'ring-primary-green/30 bg-primary-green/15',
  gold:  'ring-gold-premium/30  bg-gold-premium/15',
};

const LINE: Record<MemberColor, string> = {
  blue:  'from-primary-blue',
  green: 'from-primary-green',
  gold:  'from-gold-premium',
};

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  color: MemberColor;
}

const members: Member[] = [
  {
    id: 1,
    name: 'Kouamé Jean',
    role: 'Développeur Fullstack',
    image: testimonial1,
    quote: 'Grâce à Soutrali Deals, j\'ai trouvé mes premiers clients réguliers. La plateforme m\'a permis de professionnaliser mon activité et de gagner en crédibilité. Aujourd\'hui, je travaille avec des clients internationaux.',
    color: 'blue',
  },
  {
    id: 2,
    name: 'Amina Koné',
    role: 'Coiffeuse & Entrepreneure',
    image: testimonial2,
    quote: 'L\'application m\'a permis de gérer mes clients, mes rendez-vous et mes paiements en un seul endroit. J\'ai vu mes revenus augmenter de 40% depuis que je suis sur la plateforme.',
    color: 'gold',
  },
  {
    id: 3,
    name: 'Moussa Diaby',
    role: 'E-commerçant',
    image: testimonial3,
    quote: 'La communauté Soutrali Deals, c\'est une vraie famille. On s\'entraide, on partage nos expériences et on apprend les uns des autres. Les formations m\'ont permis de développer mes compétences en marketing.',
    color: 'green',
  },
  {
    id: 4,
    name: 'Sarah Touré',
    role: 'Agent de Recensement',
    image: testimonial4,
    quote: 'En tant qu\'agent de recensement, je contribue à construire la base de données de la plateforme. C\'est gratifiant de voir comment mon travail aide d\'autres prestataires à développer leur activité.',
    color: 'gold',
  },
];

export const FeaturedMembers = () => {
  return (
    <div className="overflow-hidden border-y border-dark-border bg-dark-bg py-20" id="temoignages">
      <div className="container-custom mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            Ils nous font{' '}
            <span className="bg-gradient-to-r from-primary-green to-gold-premium bg-clip-text text-transparent">
              confiance
            </span>
          </h3>
          <p className="text-text-secondary">
            Des histoires vraies de membres qui ont transformé leur activité grâce à Soutrali Deals
          </p>
        </motion.div>
      </div>

      <div className="relative w-full">
        <div className="no-scrollbar flex snap-x gap-6 overflow-x-auto pb-8 px-4 md:justify-center">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              className="relative min-w-[320px] max-w-[400px] snap-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Template en fond */}
              <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20">
                <img src={memberCardTemplate} alt="" className="h-full w-full rounded-2xl object-cover" />
              </div>

              {/* Contenu */}
              <div className="relative rounded-2xl border border-dark-border bg-dark-card p-6 transition-all group-hover:border-primary-green/50">
                {/* Icône quote */}
                <div className="absolute right-6 top-6 z-10 opacity-20 transition-opacity group-hover:opacity-40">
                  <QuoteIcon size={32} className="text-primary-green" />
                </div>

                {/* Infos membre — ring en Tailwind, zéro inline style */}
                <div className="relative z-10 mb-4 flex items-center gap-4">
                  <div className={`rounded-full p-1 ring-2 ${RING[member.color]}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-14 w-14 rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{member.name}</h4>
                    <p className="text-xs uppercase tracking-wider text-text-muted">{member.role}</p>
                  </div>
                </div>

                {/* Citation */}
                <p className="relative z-10 leading-relaxed text-text-secondary">
                  &ldquo;{member.quote}&rdquo;
                </p>

                {/* Ligne basse — Tailwind gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${LINE[member.color]} to-transparent opacity-0 transition-opacity group-hover:opacity-100`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
