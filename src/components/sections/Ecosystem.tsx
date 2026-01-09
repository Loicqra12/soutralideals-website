import { SectionWrapper } from '../ui/SectionWrapper';
import { Users, Lightbulb, PenTool, Rocket } from 'lucide-react';

export const Ecosystem = () => {
  return (
    <SectionWrapper id="ecosysteme" bg="dark">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border mb-6">
          <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse"></span>
          <span className="text-sm font-medium text-text-secondary">Qui sommes-nous ?</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          L'Écosystème <span className="text-primary-green">Soutrali Deals</span>
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed">
          SOUTRALI DEALS est bien plus qu'une plateforme. C'est un écosystème complet : une équipe de prestataires professionnels,
          une technologie innovante, et une communauté vibrante d’artisans et freelances.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Illustrations / Team Grid */}
        <div className="relative hidden md:block">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-green/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10 grid grid-cols-2 gap-6 p-4">
            {/* Card 1 */}
            <div className="bg-dark-card p-6 rounded-2xl border border-dark-border transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-14 h-14 bg-primary-green/10 rounded-xl mb-4 flex items-center justify-center border border-primary-green/20">
                <Users className="w-7 h-7 text-primary-green" />
              </div>
              <h3 className="font-bold text-lg mb-1">L'Équipe</h3>
              <p className="text-sm text-text-muted">IT, Marketing & Admin</p>
            </div>

            {/* Card 2 */}
            <div className="bg-dark-card p-6 rounded-2xl border border-dark-border transform translate-y-8 hover:translate-y-6 transition-transform duration-300 shadow-xl">
              <div className="w-14 h-14 bg-primary-orange/10 rounded-xl mb-4 flex items-center justify-center border border-primary-orange/20">
                <Lightbulb className="w-7 h-7 text-primary-orange" />
              </div>
              <h3 className="font-bold text-lg mb-1">Philosophie</h3>
              <p className="text-sm text-text-muted">Simplicité & Proximité</p>
            </div>

            {/* Card 3 */}
            <div className="bg-dark-card p-6 rounded-2xl border border-dark-border transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-14 h-14 bg-primary-blue/10 rounded-xl mb-4 flex items-center justify-center border border-primary-blue/20">
                <Rocket className="w-7 h-7 text-primary-blue" />
              </div>
              <h3 className="font-bold text-lg mb-1">Mission</h3>
              <p className="text-sm text-text-muted">Digitaliser la CI 🇨🇮</p>
            </div>

            {/* Card 4 */}
            <div className="bg-dark-card p-6 rounded-2xl border border-dark-border transform translate-y-8 hover:translate-y-6 transition-transform duration-300 shadow-xl">
              <div className="w-14 h-14 bg-gold-premium/10 rounded-xl mb-4 flex items-center justify-center border border-gold-premium/20">
                <PenTool className="w-7 h-7 text-gold-premium" />
              </div>
              <h3 className="font-bold text-lg mb-1">Prestataires</h3>
              <p className="text-sm text-text-muted">Services Professionnels</p>
            </div>
          </div>
        </div>

        {/* Content List */}
        <div className="space-y-10">
          <div className="flex gap-5 group">
            <div className="w-14 h-14 bg-dark-card rounded-2xl flex items-center justify-center shrink-0 border border-dark-border group-hover:border-primary-green/50 transition-colors shadow-lg">
              <span className="text-2xl group-hover:scale-110 transition-transform">🤝</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-green transition-colors">Une Communauté Unie</h3>
              <p className="text-text-secondary leading-relaxed">
                Rejoignez plus de 400 artisans, freelances et vendeurs. Un réseau d'entraide pour partager des opportunités, des conseils et grandir ensemble.
              </p>
            </div>
          </div>

          <div className="flex gap-5 group">
            <div className="w-14 h-14 bg-dark-card rounded-2xl flex items-center justify-center shrink-0 border border-dark-border group-hover:border-primary-blue/50 transition-colors shadow-lg">
              <span className="text-2xl group-hover:scale-110 transition-transform">💻</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-blue transition-colors">Nos Propres Services</h3>
              <p className="text-text-secondary leading-relaxed">
                Nous ne somme pas qu'une plateforme, nous sommes aussi prestataires : Développement web, applications mobiles, marketing digital pour votre business.
              </p>
            </div>
          </div>

          <div className="flex gap-5 group">
            <div className="w-14 h-14 bg-dark-card rounded-2xl flex items-center justify-center shrink-0 border border-dark-border group-hover:border-primary-orange/50 transition-colors shadow-lg">
              <span className="text-2xl group-hover:scale-110 transition-transform">🚀</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Innovation Sociale</h3>
              <p className="text-text-secondary leading-relaxed">
                Notre application d'identification révolutionne la confiance en Côte d'Ivoire. Nous vérifions et certifions chaque prestataire pour la sécurité de tous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
