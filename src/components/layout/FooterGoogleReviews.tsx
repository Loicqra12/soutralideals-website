import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

/** Note et volume (placeholder) jusqu’à liaison Google Business. */
const PLACEHOLDER_RATING = 4.5;
const PLACEHOLDER_COUNT = 23;

/** Étoiles : or lisible sur fond sombre ; demi-vide comme le footer. */
const STAR_FILL = '#E8A317';

function StarsRow() {
  const full = Math.floor(PLACEHOLDER_RATING);
  const rem = PLACEHOLDER_RATING % 1;
  const hasHalf = rem >= 0.25 && rem < 0.75;
  const rest = hasHalf ? 5 - full - 1 : 5 - full;

  return (
    <div className="flex items-center gap-0.5" aria-hidden style={{ color: STAR_FILL }}>
      {Array.from({ length: full }, (_, i) => (
        <Star key={`f-${i}`} className="h-[1.125rem] w-[1.125rem] shrink-0 fill-current stroke-none" strokeWidth={0} />
      ))}
      {hasHalf ? (
        <span className="relative inline-flex h-[1.125rem] w-[1.125rem] shrink-0">
          <Star className="h-[1.125rem] w-[1.125rem] shrink-0 fill-white/20 stroke-none" strokeWidth={0} />
          <span className="absolute left-0 top-0 h-[1.125rem] w-1/2 overflow-hidden text-[#E8A317]">
            <Star className="h-[1.125rem] w-[1.125rem] shrink-0 fill-current stroke-none" strokeWidth={0} />
          </span>
        </span>
      ) : null}
      {Array.from({ length: rest }, (_, i) => (
        <Star key={`e-${i}`} className="h-[1.125rem] w-[1.125rem] shrink-0 fill-white/20 stroke-none" strokeWidth={0} />
      ))}
    </div>
  );
}

/** Même enveloppe que le bloc « Restez informés » dans `Footer.tsx`. */
const reviewsCardClass =
  'rounded-2xl border border-white/10 bg-gradient-to-br from-primary-blue/15 via-[#0b1020] to-dark-card p-6 shadow-xl shadow-black/20';

const ctaClass =
  'inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0a0a0a] transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1020]';

export const FooterGoogleReviews = () => {
  const env = import.meta.env as Record<string, string | undefined>;
  const rawReviews = env.VITE_GOOGLE_REVIEWS_URL?.trim();
  const reviewsUrl =
    rawReviews && /^https?:\/\//i.test(rawReviews) ? rawReviews : undefined;

  const noteStr = PLACEHOLDER_RATING.toLocaleString('fr-FR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <aside className={`${reviewsCardClass} mt-6 max-w-[18.5rem]`} aria-label="Synthèse des avis Google (provisoire)">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-blue/70">Avis Google</p>
      <div className="mt-3">
        <StarsRow />
      </div>
      <p className="mt-3 text-sm font-bold leading-tight text-white">
        Note {noteStr} / 5 ({PLACEHOLDER_COUNT} avis)
      </p>
      <p className="mt-2 text-sm leading-relaxed text-white/50">
        Synthèse provisoire en attendant la fiche d&apos;établissement officielle sur Google Business.
      </p>
      {reviewsUrl ? (
        <a href={reviewsUrl} target="_blank" rel="noopener noreferrer" className={`${ctaClass} mt-5`}>
          Laisser un avis
        </a>
      ) : (
        <Link
          to="/contact"
          className={`${ctaClass} mt-5`}
          title="Lien Google direct bientôt — contactez-nous en attendant"
        >
          Laisser un avis
        </Link>
      )}
    </aside>
  );
};
