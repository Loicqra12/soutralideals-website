import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Gnon Sidney',
    role: 'Entrepreneur digital - Abidjan',
    content: "Soutrali Deals m'a permis de lancer mon projet en 3 semaines avec une equipe fiable.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Yao Sidney Jordan',
    role: 'Responsable operations - Yopougon',
    content: "Service rapide, execution propre et communication tres claire du debut a la fin.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Jocelyn Boka',
    role: 'Fondateur startup - Cocody',
    content: "On sent une vraie exigence pro. Notre visibilite en ligne a clairement augmente.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Aquegnan Codouain',
    role: 'Commercante - Treichville',
    content: "Mon activite est mieux structuree, les clients commandent plus facilement qu'avant.",
    rating: 4,
  },
  {
    id: 5,
    name: 'Nicaise Charles',
    role: 'Consultant IT - Plateau',
    content: 'Une equipe serieuse, des delais respectes et un rendu final vraiment premium.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Atebabierya Booba',
    role: 'Prestataire BTP - Marcory',
    content: "J'ai gagne en credibilite grace a leur approche et aux outils proposes.",
    rating: 5,
  },
  {
    id: 7,
    name: 'Sarah Krobote',
    role: 'Creatrice de marque - Bingerville',
    content: "Le design, l'accompagnement et le suivi sont au-dessus de ce que j'attendais.",
    rating: 5,
  },
  {
    id: 8,
    name: 'Kouadio Hermann',
    role: 'Directeur commercial - Bouake',
    content: 'On a enfin une presence digitale solide et une methode claire pour convertir.',
    rating: 4,
  },
  {
    id: 9,
    name: 'Aminata Doumbia',
    role: 'Gerante e-commerce - Abobo',
    content: "L'equipe comprend vite les besoins et propose des solutions concretes.",
    rating: 5,
  },
  {
    id: 10,
    name: 'Konan Wilfried',
    role: 'Chef de projet - San Pedro',
    content: "La collaboration est fluide et les resultats sont visibles sur nos performances.",
    rating: 5,
  },
  {
    id: 11,
    name: 'Kouame Nestor',
    role: 'Menuisier - Koumassi',
    content: "Depuis Soutrali Deals, je recois plus de demandes serieuses pour mes travaux de menuiserie.",
    rating: 5,
  },
  {
    id: 12,
    name: 'Kone Ibrahim',
    role: 'Mecanicien - Yopougon',
    content: "Les clients me trouvent plus vite, et mes rendez-vous atelier sont mieux organises.",
    rating: 4,
  },
  {
    id: 13,
    name: 'Nguessan Serge',
    role: 'Vigile - Cocody',
    content: "J'ai pu presenter mon profil de securite clairement et trouver des missions stables.",
    rating: 5,
  },
  {
    id: 14,
    name: 'Assande Mariam',
    role: 'Servante - Riviera',
    content: "La plateforme m'aide a trouver des familles fiables et a valoriser mon experience.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <SectionWrapper id="avis" bg="dark" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-10 top-0 h-full w-1/3 bg-primary-blue/10 [clip-path:polygon(0_0,75%_0,35%_100%,0_100%)]" />
        <div className="absolute right-0 top-0 h-full w-1/4 bg-primary-green/10 [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.15),transparent_45%)]" />
      </div>

      <div className="relative z-10 mb-14 text-center">
        <h2 className="mb-6 text-3xl font-heading font-bold text-white md:text-5xl">
          Ce qu&apos;ils disent de <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">Nous</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-text-secondary">
          Des retours reels de clients et partenaires en Cote d&apos;Ivoire.
        </p>
      </div>

      <div className="relative z-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((column) => (
          <div key={column} className="h-[420px] overflow-hidden">
            <motion.div
              className="flex w-full flex-col gap-5"
              animate={{ y: column % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
              transition={{
                duration: column === 1 ? 72 : 80,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {marqueeItems.map((item, index) => (
                <article
                  key={`${column}-${item.id}-${index}`}
                  className="relative w-full min-h-[180px] rounded-2xl border border-white/15 bg-[#0b1324]/90 p-5 shadow-[0_16px_35px_rgba(0,0,0,0.28)] backdrop-blur-sm"
                >
                  <Quote className="mb-3 h-6 w-6 text-primary-blue/35" />

                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < item.rating ? 'fill-primary-green text-primary-green' : 'text-white/20'}`}
                      />
                    ))}
                  </div>

                  <p className="mb-4 line-clamp-4 text-sm leading-relaxed text-white/85">&quot;{item.content}&quot;</p>

                  <div className="border-t border-white/10 pt-3">
                    <h4 className="text-sm font-semibold tracking-wide text-white">{item.name}</h4>
                    <p className="text-xs text-primary-blue/80">{item.role}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
