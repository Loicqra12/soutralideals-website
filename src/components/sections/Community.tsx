import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { Users, Briefcase, ShoppingBag, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import heroBackground from '../../assets/images/community/hero/hero-community-background.jpg';
import heroIllustration from '../../assets/images/community/hero/hero-community-illustration.jpg';
import heroPeopleConnected from '../../assets/images/community/hero/hero-people-connected.jpg';

// Floating Particles Component
const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                    }}
                    animate={{
                        x: [null, Math.random() * 100 + '%'],
                        y: [null, Math.random() * 100 + '%'],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />
            ))}
        </div>
    );
};

export const Community = () => {
  const whatsappLink = 'https://chat.whatsapp.com/JnPGnE5qAFPLTg5foFozm5';
  const prefersReducedMotion = useReducedMotion();

  const audienceCards = [
    {
      title: 'Pour les Freelances',
      subtitle: 'Developpeurs, graphistes, redacteurs...',
      to: '/communaute#freelances',
      Icon: Briefcase,
      tone: 'text-primary-blue',
      bgTone: 'bg-primary-blue/12',
    },
    {
      title: 'Pour les Artisans',
      subtitle: 'Menuisiers, mecaniciens, coiffeurs...',
      to: '/communaute#artisans',
      Icon: Users,
      tone: 'text-primary-green',
      bgTone: 'bg-primary-green/12',
    },
    {
      title: 'Pour les Commercants',
      subtitle: 'Boutiques, vendeurs, e-commercants...',
      to: '/communaute#commercants',
      Icon: ShoppingBag,
      tone: 'text-gold-premium',
      bgTone: 'bg-gold-premium/12',
    },
  ];

  const softReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.45, ease: 'easeOut' as const },
      };

  return (
    <SectionWrapper id="communaute" bg="dark" className="relative overflow-hidden">
      <FloatingParticles />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img src={heroBackground} alt="" className="h-full w-full object-cover opacity-15" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061024] via-[#0b2557]/90 to-[#163f88]/85" />
        <div className="absolute -left-24 top-0 h-[140%] w-[40%] bg-primary-blue/20 [clip-path:polygon(0_0,75%_0,25%_100%,0_100%)]" />
      </div>

      <div className="relative z-10 grid items-start gap-8 lg:grid-cols-12">
        <motion.div {...softReveal} className="rounded-3xl border border-white/15 bg-[#0a1a37]/75 p-6 backdrop-blur-sm sm:p-8 lg:col-span-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
            <Users className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white">La Force du Nombre</span>
            <Sparkles className="h-4 w-4 text-primary-green" />
          </div>

          <motion.h2
            className="mb-5 font-heading text-3xl font-bold text-white md:text-5xl"
            initial={prefersReducedMotion ? false : { opacity: 0, filter: 'blur(4px)' }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Une communaute qui construit <span className="text-primary-green">l&apos;economie locale</span>
          </motion.h2>

          <p className="mb-7 text-base leading-relaxed text-white/85 md:text-lg">
            Prestataires, freelances, vendeurs, entrepreneurs et equipes terrain avances ensemble.
            Plus qu&apos;un reseau, c&apos;est un cadre d&apos;entraide, d&apos;opportunites et de progression concrete.
          </p>

          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="group w-full rounded-xl bg-[#25D366] text-white hover:bg-[#20BA5A]">
                <MessageCircle className="h-4 w-4" />
                Rejoindre WhatsApp
              </Button>
            </motion.a>
            <Link to="/communaute#piliers">
              <Button variant="outline" className="w-full rounded-xl border-white/30 text-white hover:bg-white/15">
                Avantages
              </Button>
            </Link>
            <Link to="/communaute#events">
              <Button variant="outline" className="w-full rounded-xl border-white/30 text-white hover:bg-white/15">
                Evenements
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 border-t border-white/15 pt-6">
            {[
              ['400+', 'Membres actifs'],
              ['50+', 'Partenaires'],
              ['24/7', 'Entraide'],
            ].map(([value, label], idx) => (
              <motion.div
                key={label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.12 + idx * 0.05 }}
                whileHover={prefersReducedMotion ? {} : { y: -3 }}
                className="rounded-xl border border-white/15 bg-white/5 p-3"
              >
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-white/75">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...softReveal} transition={{ duration: 0.55, delay: 0.08 }} className="space-y-4 lg:col-span-6">
          <motion.div
            whileHover={prefersReducedMotion ? {} : { y: -4 }}
            className="overflow-hidden rounded-2xl border border-white/20 bg-white/5"
          >
            <img src={heroPeopleConnected} alt="Photo de la communaute Soutrali Deals" className="h-56 w-full object-cover md:h-64" loading="lazy" />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
              className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 sm:col-span-2"
            >
              <img src={heroIllustration} alt="Illustration de la communaute connectee" className="h-40 w-full object-cover" loading="eager" />
            </motion.div>

            {audienceCards.map(({ title, subtitle, to, Icon, tone, bgTone }, index) => (
              <Link key={title} to={to} className={index === 2 ? 'sm:col-span-2' : ''}>
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { y: -3 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="group flex h-full items-center gap-3 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl transition"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bgTone} ${tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-sm text-gray-600">{subtitle}</p>
                  </div>
                  <motion.div
                    animate={prefersReducedMotion ? {} : { x: [0, 2, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight className="ml-auto h-5 w-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-gray-700" />
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
