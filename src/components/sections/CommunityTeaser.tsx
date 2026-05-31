import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import communityTeaserImage from '../../assets/images/community/community-teaser.png';

const WHATSAPP_URL = 'https://chat.whatsapp.com/JnPGnE5qAFPLTg5foFozm5';

const STATS = [
  { value: '400+', label: 'Membres actifs', caption: 'Artisans, freelances et vendeurs' },
  { value: '50+', label: 'Partenaires', caption: 'Entreprises et institutions locales' },
  { value: '24/7', label: 'Entraide', caption: 'Groupe WhatsApp et événements' },
] as const;

export const CommunityTeaser = () => {
  const reduced = useReducedMotion();

  return (
    <section
      id="communaute"
      className="bg-white py-16 md:py-24 lg:py-28"
      aria-labelledby="communaute-teaser-heading"
    >
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#888]">
              Les Soutraliens
            </p>
            <h2
              id="communaute-teaser-heading"
              className="font-heading text-[1.75rem] font-extrabold tracking-[-0.03em] text-[#111] sm:text-3xl md:text-4xl"
            >
              Rejoignez la communauté qui fait grandir l&apos;économie locale
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#6b6b6b] md:text-lg">
              Événements, entraide, métiers par catégorie et opportunités concrètes — le détail sur
              la page communauté.
            </p>

            <ul className="mt-10 space-y-6" role="list">
              {STATS.map(({ value, label, caption }) => (
                <li key={label} className="flex gap-4">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-green"
                    aria-hidden
                  />
                  <motion.div
                    initial={reduced ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="font-heading text-xl font-bold text-[#111] md:text-2xl">
                      {value}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[#111]">{label}</p>
                    <p className="mt-0.5 text-sm text-[#888]">{caption}</p>
                  </motion.div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="sm:flex-1 sm:max-w-xs">
                <Button
                  variant="ghost"
                  className="h-12 w-full rounded-full border-0 bg-gradient-to-r from-[#25D366] to-[#1fb158] text-sm font-semibold text-white hover:from-[#20BA5A] hover:to-[#1a9e4d]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Rejoindre WhatsApp
                </Button>
              </a>
              <Link to="/communaute" className="sm:flex-1 sm:max-w-xs">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-full border-[#111]/20 text-sm font-semibold text-[#111] hover:bg-[#f5f5f5]"
                >
                  Découvrir la communauté
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="relative overflow-hidden rounded-[24px] bg-[#ebecef] shadow-[0_24px_64px_-24px_rgba(0,0,0,0.12)]">
              {communityTeaserImage ? (
                <img
                  src={communityTeaserImage}
                  alt="Communauté Les Soutraliens — membres et entraide"
                  className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
                  loading="lazy"
                />
              ) : (
                <div
                  className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#e8ebe9] via-[#ebecef] to-[#e2e8e4] lg:aspect-[5/4]"
                  aria-hidden
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
                    <Users className="h-8 w-8 text-primary-green/70" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-medium text-[#999]">Image à venir</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
