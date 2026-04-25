import { SectionWrapper } from '../ui/SectionWrapper';
import { Mail, ArrowRight } from 'lucide-react';

export const Newsletter = () => {
  return (
    <SectionWrapper id="newsletter" bg="dark" className="py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#07142b] via-[#0b2350] to-[#1e4f9a] p-6 shadow-2xl md:p-10">
        {/* Figures discretes de fond */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-16 top-0 h-full w-[38%] bg-primary-blue/20 [clip-path:polygon(0_0,78%_0,38%_100%,0_100%)]" />
          <div className="absolute right-0 top-0 h-full w-[30%] bg-white/10 [clip-path:polygon(32%_0,100%_0,100%_100%,0_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.16),transparent_48%)]" />
        </div>

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-2xl border border-white/10 bg-[#0a1733]/60 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white">
              <Mail className="h-6 w-6" />
            </div>

            <h2 className="mb-4 font-heading text-3xl font-black uppercase text-white md:text-4xl">
              Newsletter <span className="text-primary-green">Soutrali Deals</span>
            </h2>

            <p className="mb-7 text-base leading-relaxed text-white/80 md:text-lg">
              Inscris-toi pour recevoir nos meilleurs deals, les actualites tech d&apos;Abidjan et des conseils utiles pour booster ton activite.
            </p>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Ton adresse email"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-primary-green/60 focus:ring-2 focus:ring-primary-green/20"
              />
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#07142b] transition hover:bg-white/90">
                S&apos;inscrire <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            <p className="mt-4 text-xs text-white/60">Nous respectons ta vie privee. Desinscription a tout moment.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <article className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#0d1f42]">
              <img
                src="https://images.pexels.com/photos/6693650/pexels-photo-6693650.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Artisans et prestataires en intervention"
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07142b]/80 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-white">
                Prestataires verifies pour vos besoins du quotidien
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#0d1f42]">
              <img
                src="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Metiers techniques et services de proximite"
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07142b]/80 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-white">
                Focus metiers: artisans, techniciens, services locaux
              </p>
            </article>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
