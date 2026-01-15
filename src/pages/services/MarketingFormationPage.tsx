import { ServiceLayout } from '../../components/services/ServiceLayout';

export const MarketingFormationPage = () => {
  return (
    <ServiceLayout
      title="Marketing Digital & Formation"
      subtitle="Croissance & Autonomie"
      description="La tech n'est rien sans utilisateur. Nous accélérons votre croissance digitale et formons vos équipes pour vous rendre autonomes."
      colorTheme="green"
      valueProps={{
        problem: "Un excellent produit que personne ne connait, ou des équipes dépendantes de prestataires externes.",
        solution: "Des stratégies d'acquisition performantes et un transfert de compétences continu.",
        result: "Une croissance maitrisée du chiffre d'affaires et des équipes internes montées en compétence."
      }}
      offerings={[
        {
          title: "Growth & Acquisition",
          description: "Attirez des leads qualifiés et convertissez-les en clients.",
          features: ["SEO / SEA (Référencement)", "Stratégie de contenu (Inbound)", "Campagnes Social Ads", "Optimisation du taux de conversion (CRO)"]
        },
        {
          title: "Formation Équipes",
          description: "Programmes de formation sur-mesure pour vos collaborateurs.",
          features: ["Formation aux outils digitaux", "Initiation au code pour non-techs", "Formation Design Thinking", "Ateliers Product Management"]
        },
        {
          title: "Accompagnement Startup",
          description: "Coaching pour founders et équipes produit.",
          features: ["Mentoring Produit", "Préparation aux levées de fonds", "Structuration des ventes", "Recrutement des premiers profils"]
        },
        {
          title: "Community Management",
          description: "Animation et engagement de vos communautés.",
          features: ["Stratégie Social Media", "Création de contenu", "Gestion de crise", "Newsletter & Emailing"]
        }
      ]}
      targetAudience={[
        "Directions Marketing & Communication",
        "DRH souhaitant former les collaborateurs",
        "Startups cherchant leur Product-Market Fit"
      ]}
      benefits={[
        "Une autonomie progressive de vos équipes (moins de dépendance).",
        "Un coût d'acquisition client (CAC) maitrisé et optimisé.",
        "Une marque employeur renforcée par la formation.",
        "Une culture digitale diffusée dans toute l'entreprise."
      ]}
    />
  );
};
