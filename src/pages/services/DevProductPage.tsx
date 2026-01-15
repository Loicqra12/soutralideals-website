import { ServiceLayout } from '../../components/services/ServiceLayout';

export const DevProductPage = () => {
  return (
    <ServiceLayout
      title="Développement & Produits Digitaux"
      subtitle="Expertise Technique"
      description="Nous ne faisons pas que du code. Nous construisons des actifs technologiques robustes, évolutifs et centrés sur vos utilisateurs."
      colorTheme="blue"
      valueProps={{
        problem: "Des logiciels mal conçus qui accumulent de la dette technique ou des applications qui ne scalent pas.",
        solution: "Une architecture moderne (Microservices, Cloud-Native) et des pratiques de développement rigoureuses.",
        result: "Des produits digitaux performants, sécurisés et faciles à maintenir sur le long terme."
      }}
      offerings={[
        {
          title: "Développement Web & SaaS",
          description: "Création de plateformes web complexes et d'applications métier sur mesure.",
          features: ["Applications React/Next.js", "Backends Node.js/Python", "Architectures API-First", "Tableaux de bord analytiques"]
        },
        {
          title: "Applications Mobiles",
          description: "Expériences mobiles natives et cross-platform fluides pour iOS et Android.",
          features: ["Flutter Development", "React Native", "Apps grand public", "Outils terrain pour équipes"]
        },
        {
          title: "E-Commerce & Marketplaces",
          description: "Plateformes de vente en ligne haute performance conçues pour la conversion.",
          features: ["Solutions Headless Shopify", "Marketplaces Multi-vendeurs", "Systèmes de paiement locaux", "Gestion des stocks en temps réel"]
        },
        {
          title: "DevOps & Cloud",
          description: "Infrastructure résiliente et déploiement automatisé pour une disponibilité maximale.",
          features: ["AWS / Google Cloud / Azure", "CI/CD Pipelines", "Docker & Kubernetes", "Monitoring & Sécurité"]
        }
      ]}
      targetAudience={[
        "Startups en phase de croissance (Series A+)",
        "Grandes entreprises en transformation digitale",
        "PME cherchant à lancer un nouveau produit digital"
      ]}
      benefits={[
        "Une qualité de code 'Enterprise-grade' dès le premier jour.",
        "Une méthodologie Agile transparente avec des livraisons régulières.",
        "Une documentation technique exhaustive pour votre indépendance.",
        "Une performance optimisée pour les réseaux africains (Edge Computing)."
      ]}
    />
  );
};
