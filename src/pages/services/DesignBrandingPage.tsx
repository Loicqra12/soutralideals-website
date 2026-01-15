import { ServiceLayout } from '../../components/services/ServiceLayout';

export const DesignBrandingPage = () => {
  return (
    <ServiceLayout
      title="Design, Expérience & Branding"
      subtitle="Identité & UI/UX"
      description="Le beau ne suffit pas. Nous concevons des identités qui marquent et des interfaces qui convertissent. L'alliance de l'esthétique et de l'ergonomie."
      colorTheme="gold"
      valueProps={{
        problem: "Une image de marque incohérente ou une interface utilisateur complexe qui fait fuir vos clients.",
        solution: "Une approche Design Thinking centrée sur l'utilisateur et une direction artistique premium.",
        result: "Une marque forte, mémorable et des produits digitaux que vos utilisateurs adorent utiliser."
      }}
      offerings={[
        {
          title: "UI/UX Design",
          description: "Conception d'interfaces centrées sur l'usage et la conversion.",
          features: ["Prototypage interactif (Figma)", "User Research & Tests", "Design Systems", "Animation & Micro-interactions"]
        },
        {
          title: "Branding & Identité",
          description: "Création d'univers de marque cohérents et impactants.",
          features: ["Stratégie de marque", "Logos & Chartes graphiques", "Tone of Voice", " Brand Guidelines"]
        },
        {
          title: "Design de Service",
          description: "Optimisation de l'ensemble du parcours client, online et offline.",
          features: ["Customer Journey Maps", "Blueprints de service", "Optimisation des points de contact", "Design Sprint"]
        },
        {
          title: "Contenu Visuel",
          description: "Production d'assets visuels premium pour tous vos canaux.",
          features: ["Illustrations 3D & 2D", "Motion Design", "Présentations investisseurs", "Assets réseaux sociaux"]
        }
      ]}
      targetAudience={[
        "Marques ambitieuses voulant monter en gamme",
        "Produits digitaux (SaaS/Apps) cherchant à améliorer leur UX",
        "Entreprises lançant une nouvelle offre"
      ]}
      benefits={[
        "Une différenciation immédiate face à la concurrence.",
        "Une réduction des coûts de développement grâce au prototypage précis.",
        "Une augmentation mesurable du taux de conversion et de rétention.",
        "Une cohérence visuelle absolue sur tous vos supports."
      ]}
    />
  );
};
