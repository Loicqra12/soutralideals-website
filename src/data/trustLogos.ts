/** Logos clients pour la bande « Ils nous font confiance » — sans Soutrali Deals */
import chapeLogo from '../assets/images/realisations/chape-chape-residence/logo/logo.png';
import apaLogo from '../assets/images/realisations/apa/logo/logo.png';
import artisanLogo from '../assets/images/realisations/artisan-du-bien-etre/logo/logo.png';
import ovprLogo from '../assets/images/realisations/ovpr/logo/logo.png';
import kpsLogo from '../assets/images/realisations/kps-service/logo/logo.png';
import cndpepLogo from '../assets/images/realisations/cndepepci/logo/logo.png';

export interface TrustLogo {
  name: string;
  src: string;
}

export const TRUST_LOGOS: TrustLogo[] = [
  { name: 'ChapeChape Residence', src: chapeLogo },
  { name: 'APA – Allo Pièce Auto', src: apaLogo },
  { name: 'Artisan du Bien-Être', src: artisanLogo },
  { name: 'OVPR', src: ovprLogo },
  { name: 'KPS Services', src: kpsLogo },
  { name: 'CNDPEP-CI', src: cndpepLogo },
];
