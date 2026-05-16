import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { ConstellationBg } from './ConstellationBg';
import { accent, Chip, EcosystemContainer, sectionSurface, type Accent, type SectionTheme } from './shared';

type AnimVariant = 'slideRight' | 'scale3D' | 'wipe';

export interface PCard {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface PillarData {
  num: string;
  badge: string;
  color: Accent;
  title: string;
  desc: string;
  quote: string;
  image: string;
  cards: PCard[];
  variant: AnimVariant;
  reversed?: boolean;
  theme?: SectionTheme;
}

function cardVariant(v: AnimVariant, i: number) {
  const delay = 0.15 + i * 0.14;
  if (v === 'slideRight')
    return {
      initial: { opacity: 0, x: 55 + i * 15 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.5, delay, type: 'spring', stiffness: 95 },
    } as const;
  if (v === 'scale3D')
    return {
      initial: { opacity: 0, scale: 0.72, rotateY: 22 },
      whileInView: { opacity: 1, scale: 1, rotateY: 0 },
      transition: { duration: 0.6, delay, type: 'spring', stiffness: 85 },
    } as const;
  return {
    initial: { opacity: 0, clipPath: 'inset(0 100% 0 0 round 16px)' },
    whileInView: { opacity: 1, clipPath: 'inset(0 0% 0 0 round 16px)' },
    transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  } as const;
}

export function PillarRow({
  num,
  badge,
  color,
  title,
  desc,
  quote,
  image,
  cards,
  variant,
  reduced,
  reversed = false,
  theme = 'dark',
}: PillarData & { reduced: boolean }) {
  const c = accent(color, theme);
  const s = sectionSurface(theme);
  const isLight = theme === 'light';

  const cardShell = isLight
    ? 'rounded-[20px] border border-[#e5e5e5] bg-white p-6 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)]'
    : 'rounded-[20px] border border-white/10 bg-[#0b1528] p-6 hover:shadow-lg';

  const cardTitle = isLight ? 'text-[#111]' : 'text-white';
  const cardDesc = isLight ? 'text-[#6b6b6b]' : 'text-text-secondary';
  const featureLabel = isLight ? 'text-[#bbb]' : 'text-white/22';

  return (
    <section className={`relative overflow-hidden border-t py-20 md:py-24 ${s.bg} ${s.border}`}>
      <ConstellationBg color={color} reduced={reduced} theme={theme} />

      <EcosystemContainer className="relative z-10">
        <div
          className={`grid items-start gap-10 lg:gap-12 ${
            reversed
              ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,30%)]'
              : 'lg:grid-cols-[minmax(0,30%)_minmax(0,1fr)]'
          }`}
        >
          <motion.div
            initial={
              reduced
                ? false
                : {
                    opacity: 0,
                    x: variant === 'scale3D' ? 0 : reversed ? 44 : -44,
                    scale: variant === 'scale3D' ? 0.88 : 1,
                  }
            }
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:sticky lg:top-24 lg:max-w-[400px] ${reversed ? 'order-2' : 'order-1'}`}
          >
            <Chip color={color}>{badge}</Chip>
            <motion.div
              className={`mt-1 select-none font-heading text-[5.5rem] font-black leading-none opacity-[0.06] md:text-[6rem] ${c.text}`}
              aria-hidden
            >
              {num}
            </motion.div>
            <h2 className={`-mt-3 mb-3 font-heading text-2xl font-bold md:text-3xl ${s.heading}`}>{title}</h2>
            <p className={`mb-5 text-sm leading-relaxed md:text-base ${s.body}`}>{desc}</p>
            <div className={`mb-6 rounded-xl border px-4 py-3 ${c.border} ${c.bg}`}>
              <p className={`text-sm font-semibold italic ${c.text}`}>&ldquo;{quote}&rdquo;</p>
            </div>
            <div
              className={`overflow-hidden rounded-2xl border ${isLight ? 'border-[#e5e5e5]' : 'border-white/10'}`}
            >
              <motion.img
                src={image}
                alt={title}
                className="h-48 w-full object-cover md:h-52"
                loading="lazy"
                whileHover={reduced ? {} : { scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          <div
            className={`grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 ${
              variant === 'scale3D' ? '[perspective:1000px]' : ''
            } ${reversed ? 'order-1' : 'order-2'}`}
          >
            {cards.map(({ Icon, title: ct, desc: cd }, i) => {
              const cv = cardVariant(variant, i);
              return (
                <motion.div
                  key={ct}
                  initial={reduced ? false : cv.initial}
                  whileInView={cv.whileInView}
                  viewport={{ once: true }}
                  transition={cv.transition}
                  whileHover={reduced ? {} : { y: -6 }}
                  className={`group relative min-h-[172px] overflow-hidden transition-[box-shadow] sm:min-h-[184px] lg:min-h-[196px] ${cardShell}`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${c.gradFrom} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div
                    className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${isLight ? 'border-[#eee]' : 'border-white/10'} ${c.bg} ${c.text}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className={`mb-2 text-[10px] font-bold uppercase tracking-[0.2em] ${featureLabel}`}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={`mb-2 text-base font-bold md:text-lg ${cardTitle}`}>{ct}</h3>
                  <p className={`text-sm leading-relaxed ${cardDesc}`}>{cd}</p>
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${c.gradFrom} to-transparent transition-[width] duration-500 group-hover:w-full`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </EcosystemContainer>
    </section>
  );
}
