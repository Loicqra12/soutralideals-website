import { SectionWrapper } from '../ui/SectionWrapper';
import { PricingCard } from '../ui/PricingCard';
import { Calculator, Code2, Megaphone, Rocket } from 'lucide-react';

export const Services = () => {
  return (
    <SectionWrapper id="services">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          Nos <span className="text-primary-blue">Prestations</span> & Tarifs
        </h2>
        <p className="text-lg text-text-secondary">
          Des solutions digitales sur mesure pour propulser votre activité.
          Qualité professionnelle, tarifs adaptés au marché ivoirien.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* IT & Dev */}
        <PricingCard
          title="Développement & IT"
          price="Sur Devis"
          variant="blue"
          icon={<Code2 className="w-8 h-8" />}
          features={[
            "Site Vitrine & E-commerce",
            "Applications Mobiles (iOS/Android)",
            "Gestion d'entreprise / ERP / CRM",
            "Intégration API & Paiements",
            "Solutions d'Automatisation & IA"
          ]}
        />

        {/* Marketing */}
        <PricingCard
          title="Marketing & Com"
          price="Dès 20.000 FCFA"
          variant="orange"
          icon={<Megaphone className="w-8 h-8" />}
          features={[
            "Création de Logo & Identité Visuelle",
            "Flyers, Affiches & Visuels RS",
            "Gestion Réseaux Sociaux (CM)",
            "Campagnes Publicitaires (Ads)",
            "Stratégie de Communication"
          ]}
        />

        {/* Compta */}
        <PricingCard
          title="Comptabilité & Gestion"
          price="Sur Mesure"
          variant="green"
          icon={<Calculator className="w-8 h-8" />}
          features={[
            "Rédaction de Business Plan",
            "Mise en place Comptabilité Simplifiée",
            "Audit Interne & Conseils",
            "Assistance Administrative",
            "Déclarations Fiscales"
          ]}
        />
      </div>

      {/* Startup Special */}
      <div className="bg-dark-card border border-gold-premium/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-premium/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-premium/10 border border-gold-premium/30 text-gold-premium text-sm font-bold mb-4">
              <Rocket className="w-4 h-4" />
              OFFRE SPÉCIALE
            </div>
            <h3 className="text-3xl font-bold mb-4">Pack Startups & Entrepreneurs</h3>
            <p className="text-text-secondary mb-6">
              Vous lancez votre projet ? Profitez de nos packs tout-en-un conçus pour accélérer votre démarrage sans vous ruiner.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-dark-bg rounded-lg border border-dark-border text-sm">🚀 Pack Lancement</span>
              <span className="px-4 py-2 bg-dark-bg rounded-lg border border-dark-border text-sm">💎 Pack Premium</span>
              <span className="px-4 py-2 bg-dark-bg rounded-lg border border-dark-border text-sm">👑 Pack Pro XL</span>
            </div>
          </div>

          <div className="bg-dark-bg/50 rounded-xl p-6 border border-dark-border/50">
            <h4 className="font-bold mb-4 text-gold-premium">On s'occupe de tout :</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-text-light">
                <div className="w-5 h-5 rounded-full bg-gold-premium/20 flex items-center justify-center text-gold-premium text-xs">✓</div>
                Logo + Identité Visuelle
              </li>
              <li className="flex items-center gap-2 text-sm text-text-light">
                <div className="w-5 h-5 rounded-full bg-gold-premium/20 flex items-center justify-center text-gold-premium text-xs">✓</div>
                Site Web One-Page ou Vitrine
              </li>
              <li className="flex items-center gap-2 text-sm text-text-light">
                <div className="w-5 h-5 rounded-full bg-gold-premium/20 flex items-center justify-center text-gold-premium text-xs">✓</div>
                Cartes de visite & Flyers
              </li>
              <li className="flex items-center gap-2 text-sm text-text-light">
                <div className="w-5 h-5 rounded-full bg-gold-premium/20 flex items-center justify-center text-gold-premium text-xs">✓</div>
                1 mois de Community Management offert
              </li>
            </ul>
            <button className="w-full mt-6 bg-gold-premium hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-colors">
              Je booste mon projet 🚀
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
