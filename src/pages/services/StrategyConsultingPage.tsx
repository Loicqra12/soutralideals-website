import { ServiceLayout } from '../../components/services/ServiceLayout';

export const StrategyConsultingPage = () => {
  return (
    <ServiceLayout
      title="Stratégie, Conseil & Structuration"
      subtitle="Vision & Gouvernance"
      description="Sécurisez vos investissements technologiques. Nous agissons comme votre partenaire stratégique pour aligner la tech avec vos objectifs business."
      colorTheme="green"
      valueProps={{
        problem: "Des prises de décision technologiques risquées ou un manque de vision claire sur la roadmap digitale.",
        solution: "Un accompagnement stratégique par des experts seniors ayant piloté des projets d'envergure.",
        result: "Une feuille de route claire, des risques maîtrisés et un ROI technologique maximisé."
      }}
      offerings={[
        {
          title: "Audit & Architecture",
          description: "Analyse approfondie de votre existant et recommandations d'évolution.",
          features: ["Audit de code & Sécurité", "Audit UX/UI", "Architecture Cloud", "Optimisation des performances"]
        },
        {
          title: "CTO as a Service",
          description: "Direction technique externalisée pour piloter vos équipes et vos choix.",
          features: ["Direction technique partagée", "Recrutement & Structuration équipe tech", "Choix des stacks technologiques", "Supervision des prestataires"]
        },
        {
          title: "Transformation Digitale",
          description: "Accompagnement au changement pour digitaliser vos processus métier.",
          features: ["Dématérialisation des processus", "Intégration ERP/CRM", "Automatisation des tâches", "Formation aux outils digitaux"]
        },
        {
          title: "Cadrage de Projet",
          description: "Préparation rigoureuse avant tout développement pour éviter les dérives.",
          features: ["Rédaction Cahier des Charges", "Spécifications fonctionnelles", "Roadmap produit", "Estimation budgétaire précise"]
        }
      ]}
      targetAudience={[
        "Fonds d'investissement (Due Diligence)",
        "DG / CEO sans associé technique",
        "DSI cherchant une expertise pointue ponctuelle"
      ]}
      benefits={[
        "Évitez les erreurs coûteuses de choix technologiques.",
        "Accélérez votre time-to-market grâce à une vision claire.",
        "Sécurisez votre propriété intellectuelle et vos données.",
        "Montez en compétence grâce au transfert de savoir."
      ]}
    />
  );
};
