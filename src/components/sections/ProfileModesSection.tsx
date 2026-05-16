import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import prestatairesImage from '../../assets/images/community/members/members-prestataires-category.png';
import freelancesImage from '../../assets/images/community/members/members-freelances-category.png';
import vendeursImage from '../../assets/images/community/members/members-vendeurs-category.png';

const PROFILES = [
  {
    title: 'Prestataires & artisans',
    tagline: 'Services sur le terrain',
    description:
      'Plombiers, coiffeurs, techniciens, agents de service — trouvez des clients près de chez vous et développez votre activité sur le terrain.',
    to: '/communaute#artisans',
    image: prestatairesImage,
    imageAlt: 'Prestataires et artisans Soutrali Deals',
    badge: 'Profil terrain',
    badgeClass: 'bg-primary-green text-[#0a1a16]',
  },
  {
    title: 'Freelances & missions',
    tagline: 'Digital & administratif',
    description:
      'Développeurs, designers, rédacteurs, assistants — missions qualifiées, portfolio visible et crédibilité renforcée.',
    to: '/communaute#freelances',
    image: freelancesImage,
    imageAlt: 'Freelances et missions digitales',
    badge: 'Missions en ligne',
    badgeClass: 'bg-primary-blue text-white',
  },
  {
    title: 'Vendeurs & boutiques',
    tagline: 'E-marché & commerce local',
    description:
      'Boutiques, e-commerçants, vendeurs WhatsApp — vendez en ligne avec paiement sécurisé et une vitrine professionnelle.',
    to: '/communaute#commercants',
    image: vendeursImage,
    imageAlt: 'Vendeurs et boutiques locales',
    badge: 'Vente & stocks',
    badgeClass: 'bg-gold-premium text-[#1a1408]',
  },
] as const;

type ProfileRowProps = (typeof PROFILES)[number] & { reversed?: boolean; index: number };

const ProfileRow = ({
  title,
  tagline,
  description,
  to,
  image,
  imageAlt,
  badge,
  badgeClass,
  reversed = false,
  index,
}: ProfileRowProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reversed ? 'lg:[direction:rtl]' : ''}`}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <div className={`${reversed ? 'lg:[direction:ltr]' : ''}`}>
        <div className="relative overflow-hidden rounded-[24px] bg-[#ebecef]">
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-md ${badgeClass}`}
          >
            {badge}
          </span>
        </div>
      </div>

      <div className={`flex flex-col justify-center ${reversed ? 'lg:[direction:ltr]' : ''}`}>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#888]">
          {tagline}
        </p>
        <h3 className="font-heading text-2xl font-bold tracking-tight text-[#111] md:text-3xl lg:text-[2rem]">
          {title}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-[#6b6b6b] md:text-lg">
          {description}
        </p>
        <Link
          to={to}
          className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-[#111]/25 bg-white px-6 py-3 text-sm font-semibold text-[#111] transition hover:border-[#111]/50 hover:bg-[#f9f9f9] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-premium/40"
        >
          En savoir plus
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
        </Link>
      </div>
    </motion.article>
  );
};

export const ProfileModesSection = () => {
  const reduced = useReducedMotion();

  return (
    <section
      id="profils"
      className="bg-white py-16 md:py-24 lg:py-28"
      aria-labelledby="profils-heading"
    >
      <div className="container-custom">
        <motion.header
          className="mx-auto mb-14 max-w-2xl text-center md:mb-20"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#888]">
            Un compte, plusieurs activités
          </p>
          <h2
            id="profils-heading"
            className="font-heading text-[1.75rem] font-extrabold tracking-[-0.03em] text-[#111] sm:text-3xl md:text-4xl"
          >
            Prestataire, freelance ou vendeur — activez ce qui vous correspond
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6b6b6b]">
            Vous pouvez cumuler les profils : un coiffeur qui vend des produits, un freelance qui
            fait aussi de l&apos;administratif. Un seul compte Soutrali ID.
          </p>
        </motion.header>

        <div className="flex flex-col gap-16 md:gap-20 lg:gap-28">
          {PROFILES.map((profile, index) => (
            <ProfileRow key={profile.title} {...profile} reversed={index % 2 === 1} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
