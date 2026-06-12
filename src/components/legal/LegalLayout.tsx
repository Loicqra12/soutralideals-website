import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface LegalSection {
  id: string;
  number: string;
  title: string;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  version: string;
  effectiveDate: string;
  sections: LegalSection[];
  children: ReactNode;
}

export function LegalLayout({ title, subtitle, version, effectiveDate, sections, children }: LegalLayoutProps) {
  return (
    <>
      {/* Header ── style letterhead cabinet */}
      <div className="border-b border-white/8 bg-[#050b18] pt-28 pb-14">
        <div className="container-custom max-w-6xl">
          {/* Marque juridique */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-primary-blue/60 to-transparent" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary-blue/70">
              Soutrali Deals · Document Officiel
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-primary-blue/60 to-transparent" />
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/50 leading-relaxed">
            {subtitle}
          </p>

          {/* Métadonnées du document */}
          <div className="mt-8 flex flex-wrap gap-6 border-t border-white/8 pt-6 text-[11px] text-white/35 tracking-wide">
            <span><span className="text-white/55">Version</span> — {version}</span>
            <span><span className="text-white/55">Date d&apos;entrée en vigueur</span> — {effectiveDate}</span>
            <span><span className="text-white/55">Droit applicable</span> — Côte d&apos;Ivoire / RGPD</span>
          </div>
        </div>
      </div>

      {/* Corps ── deux colonnes sur desktop */}
      <div className="bg-[#070d1c] min-h-screen">
        <div className="container-custom max-w-6xl py-16">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16 xl:gap-20">

            {/* Table des matières ── sticky sur desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-1">
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.4em] text-white/25">
                  Sommaire
                </p>
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-start gap-3 rounded-md px-2 py-2 text-[12px] text-white/35 transition-all duration-200 hover:bg-white/[0.03] hover:text-white/80"
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-[10px] text-primary-blue/50 group-hover:text-primary-blue/80">
                      {s.number}
                    </span>
                    <span className="leading-snug">{s.title}</span>
                  </a>
                ))}
                <div className="mt-8 border-t border-white/8 pt-6">
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.4em] text-white/25">
                    Documents connexes
                  </p>
                  <Link to="/informations-legales" className="block text-[11px] text-white/35 hover:text-primary-blue/80 transition-colors py-1">
                    ↑ Portail légal
                  </Link>
                  <Link to="/contact" className="block text-[11px] text-white/35 hover:text-primary-blue/80 transition-colors py-1">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </aside>

            {/* Contenu principal */}
            <main className="space-y-0 text-white/55 leading-[1.85] text-[15px]">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Composants atomiques réutilisables ─────────────────────────── */

export function LegalArticle({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-32 border-b border-white/[0.06] py-12 last:border-b-0"
    >
      {/* En-tête d'article */}
      <div className="mb-7 flex items-baseline gap-4">
        <span className="shrink-0 font-mono text-[11px] font-semibold text-primary-blue/60 tracking-wider">
          {number}
        </span>
        <h2 className="font-heading text-xl font-bold text-white md:text-2xl leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-5 pl-0 lg:pl-10">{children}</div>
    </section>
  );
}

export function LegalCallout({
  type = 'note',
  children,
}: {
  type?: 'note' | 'warning' | 'important';
  children: ReactNode;
}) {
  const styles = {
    note: 'border-l-2 border-primary-blue/40 bg-primary-blue/[0.04] text-white/60',
    warning: 'border-l-2 border-amber-500/50 bg-amber-500/[0.04] text-white/60',
    important: 'border-l-2 border-red-500/40 bg-red-500/[0.04] text-white/60',
  };

  return (
    <div className={`rounded-r-lg px-5 py-4 text-[13px] leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  );
}

export function LegalTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
      <table className="w-full border-collapse text-left text-[12.5px]">
        <thead>
          <tr className="border-b border-white/[0.08] bg-white/[0.03]">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.05]">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-white/[0.02] transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className="px-5 py-4 text-white/55 align-top leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 pl-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-blue/50" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalStrong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white/85">{children}</strong>;
}
