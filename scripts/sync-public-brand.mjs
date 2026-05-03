/**
 * Synchronise les fichiers « marque » vers public/ pour des URLs stables
 * (favicon, og:image, crawlers sans exécution du bundle Vite).
 *
 * - Toujours : src/assets/images/logo.png → public/brand/logo.png
 * - public/og-default.png : créé depuis le logo uniquement s'il n'existe pas encore
 *   (remplacez-le par une image 1200×630 dédiée quand le design est prêt).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const srcLogo = path.join(root, 'src', 'assets', 'images', 'logo.png');
const dirBrand = path.join(root, 'public', 'brand');
const outBrandLogo = path.join(dirBrand, 'logo.png');
const outOgDefault = path.join(root, 'public', 'og-default.png');

if (!fs.existsSync(srcLogo)) {
  console.warn('[sync-public-brand] Fichier source introuvable, sync ignorée :', srcLogo);
  process.exit(0);
}

fs.mkdirSync(dirBrand, { recursive: true });
fs.copyFileSync(srcLogo, outBrandLogo);
console.log('[sync-public-brand] OK →', path.relative(root, outBrandLogo));

if (!fs.existsSync(outOgDefault)) {
  fs.copyFileSync(srcLogo, outOgDefault);
  console.log(
    '[sync-public-brand] Créé',
    path.relative(root, outOgDefault),
    '(remplacez par une image OG 1200×630 quand disponible)'
  );
} else {
  console.log('[sync-public-brand] Conservé', path.relative(root, outOgDefault), '(fichier existant)');
}
