import { TRUST_LOGOS } from '../../../data/trustLogos';

function LogoItem({ name, src, hidden = false }: { name: string; src: string; hidden?: boolean }) {
  return (
    <li className="flex shrink-0 items-center justify-center px-4 md:px-6">
      <div className="flex h-14 w-[9.5rem] items-center justify-center rounded-xl bg-white px-4 py-3 shadow-md md:h-16 md:w-44">
        <img
          src={src}
          alt={hidden ? '' : name}
          loading="lazy"
          decoding="async"
          className="max-h-9 w-full object-contain md:max-h-10"
        />
      </div>
    </li>
  );
}

function LogoStrip({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="flex shrink-0 list-none items-center"
      {...(duplicate ? { 'aria-hidden': 'true' } : {})}
    >
      {TRUST_LOGOS.map((logo) => (
        <LogoItem key={`${duplicate ? 'dup-' : ''}${logo.name}`} name={logo.name} src={logo.src} hidden={duplicate} />
      ))}
    </ul>
  );
}

export const RealisationsTrust = () => {
  return (
    <section className="border-t border-white/10 bg-dark-bg py-14 md:py-20" aria-labelledby="realisations-trust-title">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="realisations-trust-title"
            className="font-heading text-2xl font-black leading-snug text-white md:text-4xl"
          >
            Ils nous font confiance et vous pouvez en faire autant&nbsp;!
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55 md:text-lg">
            Ils ont choisi Soutrali Deals pour les accompagner dans leur transformation numérique.
          </p>
        </div>
      </div>

      {/* Défilement infini (masqué si prefers-reduced-motion) */}
      <div className="relative mt-10 overflow-hidden bg-[#0a0c10] py-6 motion-reduce:hidden md:mt-12 md:py-8">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/80 to-transparent md:w-32"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0a0c10] via-[#0a0c10]/80 to-transparent md:w-32"
          aria-hidden
        />

        <div className="trust-marquee-track">
          <LogoStrip />
          <LogoStrip duplicate />
        </div>
      </div>

      {/* Fallback statique si réduction des animations */}
      <div className="container-custom mt-8 hidden flex-wrap items-center justify-center gap-4 motion-reduce:flex">
        {TRUST_LOGOS.map((logo) => (
          <div
            key={logo.name}
            className="flex h-14 w-36 items-center justify-center rounded-xl bg-white px-3 py-2"
          >
            <img src={logo.src} alt={logo.name} className="max-h-9 w-full object-contain" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};
