import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../seo/SEO';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string; // Optional: distinct hero image per service
  valueProps: {
    problem: string;
    solution: string;
    result: string;
  };
  offerings: {
    title: string;
    description: string;
    features: string[];
  }[];
  targetAudience: string[];
  benefits: string[];
  ctaText?: string;
  colorTheme?: 'green' | 'blue' | 'gold'; // To vary slightly the accent color
}

export const ServiceLayout = ({
  title,
  subtitle,
  description,
  valueProps,
  offerings,
  targetAudience,
  benefits,
  ctaText = "Demander un devis sur mesure",
  colorTheme = 'gold'
}: ServiceLayoutProps) => {

  const themeColors = {
    green: 'text-primary-green border-primary-green bg-primary-green/10',
    blue: 'text-primary-blue border-primary-blue bg-primary-blue/10',
    gold: 'text-gold-premium border-gold-premium bg-gold-premium/10'
  };

  const gradientTheme = {
    green: 'from-primary-green to-emerald-600',
    blue: 'from-primary-blue to-cyan-600',
    gold: 'from-[#B8860B] via-[#D4AF37] to-[#CFB53B]'
  };

  return (
    <>
      <SEO title={title} description={subtitle} />
      <div className="pt-24 bg-dark-bg min-h-screen">

        {/* 1. Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-0 right-0 w-96 h-96 bg-${colorTheme === 'gold' ? 'gold-premium' : 'primary-' + colorTheme} opacity-10 blur-[100px] rounded-full`}></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue opacity-10 blur-[80px] rounded-full"></div>
          </div>

          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 border ${themeColors[colorTheme]}`}>
                {subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
                {description}
              </p>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white transition-transform hover:scale-105 shadow-lg bg-gradient-to-r ${gradientTheme[colorTheme]}`}
              >
                <Sparkles className="w-5 h-5" />
                {ctaText}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. Value Proposition (Problem -> Solution -> Result) */}
        <section className="py-16 bg-dark-card border-y border-white/5">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-dark-bg border border-white/5 hover:border-red-500/30 transition-colors group"
              >
                <div className="text-red-400 font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  Le Défi
                </div>
                <p className="text-text-secondary text-lg group-hover:text-white transition-colors">{valueProps.problem}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`p-8 rounded-2xl bg-dark-bg border border-white/5 hover:border-${colorTheme === 'gold' ? 'gold-premium' : 'primary-' + colorTheme}/30 transition-colors group`}
              >
                <div className={`font-bold mb-4 flex items-center gap-2 ${colorTheme === 'gold' ? 'text-gold-premium' : 'text-primary-' + colorTheme}`}>
                  <span className={`w-2 h-2 rounded-full ${colorTheme === 'gold' ? 'bg-gold-premium' : 'bg-primary-' + colorTheme}`}></span>
                  Notre Solution
                </div>
                <p className="text-text-secondary text-lg group-hover:text-white transition-colors">{valueProps.solution}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-2xl bg-dark-bg border border-white/5 hover:border-green-500/30 transition-colors group"
              >
                <div className="text-green-400 font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Le Résultat
                </div>
                <p className="text-text-secondary text-lg group-hover:text-white transition-colors">{valueProps.result}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Offerings */}
        <section className="py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Nos <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientTheme[colorTheme]}`}>Expertises</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {offerings.map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-dark-card border border-white/5 hover:border-white/20 transition-all group"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {offer.title}
                  </h3>
                  <p className="text-text-secondary mb-8 text-lg">
                    {offer.description}
                  </p>
                  <ul className="space-y-3">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 mt-1 ${colorTheme === 'gold' ? 'text-gold-premium' : 'text-primary-' + colorTheme}`} />
                        <span className="text-text-muted group-hover:text-white/80 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Target Audience & Benefits */}
        <section className="py-20 bg-dark-card border-t border-white/5">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Audience */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className={`w-1 h-8 rounded-full bg-gradient-to-b ${gradientTheme[colorTheme]}`}></span>
                  Pour qui ?
                </h3>
                <div className="space-y-4">
                  {targetAudience.map((target, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-dark-bg/50 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradientTheme[colorTheme]}`}></div>
                      <span className="text-white font-medium">{target}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className={`w-1 h-8 rounded-full bg-gradient-to-b ${gradientTheme[colorTheme]}`}></span>
                  Bénéfices clés
                </h3>
                <div className="grid gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className={`mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-lg text-white/90 leading-relaxed font-light">{benefit}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className={`absolute inset-0 opacity-20 bg-gradient-to-b ${gradientTheme[colorTheme]} opacity-5 mix-blend-overlay`}></div>
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 max-w-4xl mx-auto">
              Prêt à passer au niveau <span className="text-gold-premium">supérieur</span> ?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
              Discutons de vos enjeux et construisons la solution adaptée à votre contexte.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:scale-105 shadow-xl bg-gradient-to-r ${gradientTheme[colorTheme]}`}
              >
                <Sparkles className="w-5 h-5" />
                Start your project
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all"
              >
                Voir nos réalisations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
