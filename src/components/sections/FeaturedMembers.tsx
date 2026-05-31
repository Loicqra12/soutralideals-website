import { motion, useReducedMotion } from 'framer-motion';
import { QuoteIcon } from '../icons';
import testimonial1 from '../../assets/images/community/testimonials/testimonial-member-1.jpg';
import testimonial2 from '../../assets/images/community/testimonials/testimonial-member-2.jpg';
import testimonial3 from '../../assets/images/community/testimonials/testimonial-member-3.jpg';
import testimonial4 from '../../assets/images/community/testimonials/testimonial-member-4.jpg';
import memberCardTemplate from '../../assets/images/community/members/member-card-template.png';

type MemberColor = 'blue' | 'gold' | 'green';

const RING: Record<MemberColor, string> = {
  blue: 'ring-primary-blue/30  bg-primary-blue/15',
  green: 'ring-primary-green/30 bg-primary-green/15',
  gold: 'ring-gold-premium/30  bg-gold-premium/15',
};

const LINE: Record<MemberColor, string> = {
  blue: 'from-primary-blue',
  green: 'from-primary-green',
  gold: 'from-gold-premium',
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
    quote:
      "Grâce à Soutrali Deals, j'ai trouvé mes premiers clients réguliers. La plateforme m'a permis de professionnaliser mon activité et de gagner en crédibilité. Aujourd'hui, je travaille avec des clients internationaux.",
    color: 'blue',
  },
  {
    id: 2,
    name: 'Amina Koné',
    role: 'Coiffeuse & Entrepreneure',
    image: testimonial2,
    quote:
      "L'application m'a permis de gérer mes clients, mes rendez-vous et mes paiements en un seul endroit. J'ai vu mes revenus augmenter de 40% depuis que je suis sur la plateforme.",
    color: 'gold',
  },
  {
    id: 3,
    name: 'Moussa Diaby',
    role: 'E-commerçant',
    image: testimonial3,
    quote:
      "La communauté Soutrali Deals, c'est une vraie famille. On s'entraide, on partage nos expériences et on apprend les uns des autres. Les formations m'ont permis de développer mes compétences en marketing.",
    color: 'green',
  },
  {
    id: 4,
    name: 'Sarah Touré',
    role: 'Agent de Recensement',
    image: testimonial4,
    quote:
      "En tant qu'agent de recensement, je contribue à construire la base de données de la plateforme. C'est gratifiant de voir comment mon travail aide d'autres prestataires à développer leur activité.",
    color: 'gold',
  },
];

function TestimonialsBackground({ reduced }: { reduced: boolean }) {
  if (reduced) {
    return (
      <>
        <motion.div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary-green/[0.06] blur-[90px]" />
        <motion.div className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-gold-premium/[0.05] blur-[80px]" />
      </>
    );
  }

  return (
    <>
      <motion.div
        className="pointer-events-none absolute -left-32 top-[15%] h-80 w-80 rounded-full bg-primary-green/[0.09] blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-28 bottom-[10%] h-72 w-72 rounded-full bg-gold-premium/[0.08] blur-[95px]"
        animate={{ x: [0, -35, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-[min(90%,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/[0.04] blur-[80px]"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(105deg, transparent 0%, rgba(34,197,94,0.04) 45%, rgba(212,175,55,0.05) 55%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
    </>
  );
}

export const FeaturedMembers = () => {
  const reduced = useReducedMotion();

  return (
    <div className="relative overflow-hidden border-y border-dark-border bg-dark-bg py-20" id="temoignages">
      <TestimonialsBackground reduced={!!reduced} />

      <div className="relative z-10">
        <div className="container-custom mb-12 text-center">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">Ils nous font confiance</h3>
            <p className="text-text-secondary">
              Des histoires vraies de membres qui ont transformé leur activité grâce à Soutrali Deals
            </p>
          </motion.div>
        </div>

        <div className="relative w-full">
          <motion.div className="no-scrollbar flex snap-x gap-6 overflow-x-auto px-4 pb-8 md:justify-center">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                className="group relative min-w-[320px] max-w-[400px] snap-center"
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={reduced ? {} : { y: -8, scale: 1.02 }}
                animate={reduced ? {} : { y: [0, -3, 0] }}
                {...(reduced
                  ? {}
                  : {
                      transition: {
                        y: { duration: 4.5 + index * 0.35, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 },
                      },
                    })}
              >
                <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20">
                  <img src={memberCardTemplate} alt="" className="h-full w-full rounded-2xl object-cover" />
                </div>

                <div className="relative rounded-2xl border border-dark-border bg-dark-card p-6 transition-all group-hover:border-primary-green/50">
                  <motion.div
                    className="absolute right-6 top-6 z-10 opacity-20"
                    animate={reduced ? {} : { opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
                  >
                    <QuoteIcon size={32} className="text-primary-green" />
                  </motion.div>

                  <div className="relative z-10 mb-4 flex items-center gap-4">
                    <motion.div
                      className={`rounded-full p-1 ring-2 ${RING[member.color]}`}
                      whileHover={reduced ? {} : { scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-14 w-14 rounded-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{member.name}</h4>
                      <p className="text-xs uppercase tracking-wider text-text-muted">{member.role}</p>
                    </div>
                  </div>

                  <p className="relative z-10 leading-relaxed text-text-secondary">&ldquo;{member.quote}&rdquo;</p>

                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${LINE[member.color]} to-transparent opacity-0 group-hover:opacity-100`}
                    animate={reduced ? {} : { opacity: [0, 0.35, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.25 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
