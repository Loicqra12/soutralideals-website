import { ServiceLayout } from '../../components/services/ServiceLayout';

export const SolutionsToolsPage = () => {
  return (
    <ServiceLayout
      title="Solutions Digitales & Outils Métiers"
      subtitle="Efficacité Opérationnelle"
      description="Optimisez vos opérations internes. Nous développons et intégrons les outils qui font gagner du temps à vos équipes et de l'argent à votre entreprise."
      colorTheme="blue"
      valueProps={{
        problem: "Des processus manuels, des fichiers Excel dispersés et une perte de productivité quotidienne.",
        solution: "Des outils métiers sur-mesure ou l'intégration intelligente de solutions SaaS éprouvées.",
        result: "Une entreprise pilotée par la donnée, automatisée et capable de scaler sans chaos."
      }}
      offerings={[
        {
          title: "ERP & CRM Sur-mesure",
          description: "Centralisez vos données clients et vos processus de gestion.",
          features: ["Gestion commerciale & Facturation", "Suivi de production", "Portails clients / fournisseurs", "Tableaux de bord de pilotage"]
        },
        {
          title: "Automatisation (RPA)",
          description: "Supprimez les tâches répétitives sans valeur ajoutée.",
          features: ["Workflows automatisés (n8n/Make)", "Traitement automatique de documents", "Connexions API inter-logiciels", "Bots de notification"]
        },
        {
          title: "Outils Terrain & Logistique",
          description: "Connectez vos équipes mobiles au siège en temps réel.",
          features: ["Applications de suivi de livraison", "Gestion de stock mobile", "Rapports d'intervention digitaux", "Géolocalisation de flotte"]
        },
        {
          title: "Data & Business Intelligence",
          description: "Faites parler vos données pour décider mieux.",
          features: ["Entrepôts de données (Data Warehousing)", "Visualisation de données (PowerBI/Custom)", "Reporting automatisé", "Analyse prédictive"]
        }
      ]}
      targetAudience={[
        "PME industrielles et logistiques",
        "Entreprises de services à fort volume",
        "Directeurs Opérationnels et DAF"
      ]}
      benefits={[
        "Réduction drastique des erreurs de saisie et des pertes de données.",
        "Gain de temps mesurable pour chaque collaborateur (ROI rapide).",
        "Visibilité temps réel sur l'activité de l'entreprise.",
        "Satisfaction client améliorée grâce à une meilleure réactivité."
      ]}
    />
  );
};
