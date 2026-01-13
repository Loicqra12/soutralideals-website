import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Users, Briefcase, MapPin } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = "+" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString('fr-FR');
      }
    });
  }, [springValue]);

  return (
    <span className="flex items-center justify-center">
      <span ref={ref}>0</span>
      <span className="text-primary-green">{suffix}</span>
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="relative z-30 -mt-24 px-4 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-dark-card/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Decorative Gradient Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-green/5 to-transparent pointer-events-none" />

          <div className="grid md:grid-cols-3 gap-12 text-center relative z-10">

            {/* Stat 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-dark-bg border-2 border-primary-green/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 rounded-full border border-primary-green/10 animate-ping opacity-20" />
                <Users className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-white mb-2 flex items-center justify-center gap-1">
                <AnimatedCounter value={400} suffix="+" />
              </h3>
              <p className="text-text-secondary uppercase tracking-widest text-sm font-medium">Membres Actifs</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-dark-bg border-2 border-primary-blue/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 rounded-full border border-primary-blue/10 animate-ping opacity-20 delay-100" />
                <Briefcase className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-white mb-2 flex items-center justify-center gap-1">
                <AnimatedCounter value={150} suffix="+" />
              </h3>
              <p className="text-text-secondary uppercase tracking-widest text-sm font-medium">Services & Missions</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-dark-bg border-2 border-gold-premium/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 rounded-full border border-gold-premium/10 animate-ping opacity-20 delay-200" />
                <MapPin className="w-8 h-8 text-gold-premium" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-white mb-2 flex items-center justify-center gap-1">
                <AnimatedCounter value={10} suffix="" />
              </h3>
              <p className="text-text-secondary uppercase tracking-widest text-sm font-medium">Zones Couvertes</p>
            </div>

          </div>

          {/* Divider & Tagline */}
          <div className="mt-12 pt-10 border-t border-white/10 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white max-w-3xl mx-auto leading-relaxed">
              Pourquoi rejoindre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">l'élite des indépendants</span> en Côte d'Ivoire ?
            </h2>
            <p className="mt-4 text-text-muted">
              Nous connectons les talents aux opportunités avec une plateforme 100% sécurisée.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
