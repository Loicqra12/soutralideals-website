import charlesPhoto from '../../../assets/images/Team/charles.jpg';
import jeanPaulPhoto from '../../../assets/images/Team/jeanpaul.jpg';
import jocelynPhoto from '../../../assets/images/Team/jocelyn.jpg';
import sidneyPhoto from '../../../assets/images/Team/sidneyjordan.png';
import yannPhoto from '../../../assets/images/Team/yannlandry.png';

export type TeamMemberSocial = {
  github?: string;
  linkedin?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  description: string;
  photo: string;
  social: TeamMemberSocial;
};

/** Renseignez les URLs GitHub / LinkedIn quand elles sont disponibles */
export const FOUNDING_TEAM: TeamMember[] = [
  {
    id: 'sidney',
    name: 'Sidney Jordan',
    role: 'CEO / COO',
    description: 'Vision globale, stratégie produit, pilotage opérationnel.',
    photo: sidneyPhoto,
    social: {
      github: '',
      linkedin: '',
    },
  },
  {
    id: 'jocelyn',
    name: 'Jocelyn Boka',
    role: 'CTO',
    description: 'Supervision tech web & mobile, sécurité et infrastructure.',
    photo: jocelynPhoto,
    social: {
      github: '',
      linkedin: '',
    },
  },
  {
    id: 'yann',
    name: 'Yann Landry',
    role: 'CMO',
    description: 'Marketing digital, acquisition client, branding.',
    photo: yannPhoto,
    social: {
      linkedin: '',
    },
  },
  {
    id: 'charles',
    name: 'Charles Gnahoure',
    role: 'CM',
    description: 'Animation des communautés, fidélisation utilisateur.',
    photo: charlesPhoto,
    social: {
      linkedin: '',
    },
  },
  {
    id: 'jean-paul',
    name: 'Jean Paul Danick',
    role: 'Expert Front-End',
    description: '',
    photo: jeanPaulPhoto,
    social: {
      github: '',
      linkedin: '',
    },
  },
];
