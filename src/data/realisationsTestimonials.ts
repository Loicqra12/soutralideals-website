export interface ProjectTestimonial {
  id: string;
  projectId: string;
  projectName: string;
  name: string;
  role: string;
  quote: string;
}

export const PROJECT_TESTIMONIALS: ProjectTestimonial[] = [
  {
    id: 't-soutrali',
    projectId: 'soutrali-deals',
    projectName: 'Soutrali Deals',
    name: 'Traoré Aïcha',
    role: 'Product Owner — Soutrali Deals',
    quote:
      'L’équipe a su structurer une vision complexe en modules clairs : marketplace, mobile et dashboards admin. La cohérence entre les trois interfaces est ce qui fait la force du produit aujourd’hui.',
  },
  {
    id: 't-chape',
    projectId: 'chape-chape-residence',
    projectName: 'ChapeChape Residence',
    name: 'Koné Ibrahim',
    role: 'Directeur des opérations — ChapeChape Residence',
    quote:
      'La réservation en ligne et l’espace propriétaire ont transformé notre façon de gérer le parc. Les délais de réponse aux locataires ont été divisés par deux dès les premières semaines.',
  },
  {
    id: 't-apa',
    projectId: 'apa',
    projectName: 'APA – Allo Pièce Auto',
    name: 'Boko Jean-Marc',
    role: 'Tech Lead — APA',
    quote:
      'Soutrali Deals a livré une architecture solide : app client, app vendeur et back-office synchronisés. La recherche de pièces et le suivi livraison répondent enfin aux réalités du terrain.',
  },
  {
    id: 't-artisan',
    projectId: 'artisan-du-bien-etre',
    projectName: 'Artisan du Bien-Être',
    name: 'Diabaté Samuel',
    role: 'Fondateur — Artisan du Bien-Être',
    quote:
      'Le site reflète exactement notre positionnement premium. La prise de rendez-vous en ligne a fluidifié l’accueil et renforcé l’image d’un salon moderne et exigeant.',
  },
  {
    id: 't-ovpr',
    projectId: 'ovpr',
    projectName: 'OVPR',
    name: 'Yao N’Guessan',
    role: 'Responsable produit — OVPR',
    quote:
      'Le matching intelligent et les statuts clairs ont été pensés pour des usages réels. On a une base technique prête pour scaler avec les partenaires institutionnels.',
  },
  {
    id: 't-kps',
    projectId: 'kps-service',
    projectName: 'KPS Services',
    name: 'Müller Sophie',
    role: 'Responsable commerciale — KPS Services',
    quote:
      'Notre vitrine digitale et le parcours de devis en ligne ont modernisé une entreprise de longue date. Les clients B2B nous perçoivent désormais comme plus structurés et professionnels.',
  },
  {
    id: 't-cndpep',
    projectId: 'cndepepci',
    projectName: 'CNDPEP-CI',
    name: 'Bamba Drissa',
    role: 'Secrétaire général — CNDPEP-CI',
    quote:
      'La plateforme institutionnelle donne enfin un cadre visible à la profession. L’annuaire, la certification et les demandes d’enquête sont centralisés avec sérieux et clarté.',
  },
];
