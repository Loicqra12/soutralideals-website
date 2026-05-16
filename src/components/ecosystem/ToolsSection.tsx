import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { accent, Chip, EcosystemContainer, sectionSurface, type Accent } from './shared';
import { IconCheck } from './icons';

type ToolItem = {
  badge: string;
  color: Accent;
  title: string;
  tagline: string;
  desc: string;
  features: string[];
  image: string;
  imageRight: boolean;
};

export function ToolsSection({
  reduced,
  tools,
}: {
  reduced: boolean;
  tools: ToolItem[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const s = sectionSurface('light');

  return (
    <section ref={ref} className={`relative overflow-hidden border-t py-20 md:py-24 ${s.bg} ${s.border}`}>
      <EcosystemContainer>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center md:mb-14"
        >
          <Chip color="gold">Nos Outils</Chip>
          <h2 className={`mt-4 font-heading text-3xl font-bold md:text-4xl ${s.heading}`}>
            La technologie au service du{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              terrain
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {tools.map(({ badge, color, title, tagline, desc, features, image, imageRight }, idx) => {
            const c = accent(color, 'light');
            const clipInit = imageRight ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';

            return (
              <motion.div
                key={title}
                initial={reduced ? false : { opacity: 0, clipPath: clipInit }}
                animate={inView ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}}
                transition={{ duration: 0.75, delay: idx * 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                className={`grid overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-[0_12px_48px_-20px_rgba(0,0,0,0.1)] ${
                  imageRight ? 'lg:grid-cols-[1fr_minmax(280px,42%)]' : 'lg:grid-cols-[minmax(280px,42%)_1fr]'
                }`}
              >
                <div className={`p-8 md:p-10 ${!imageRight ? 'order-2 lg:order-2' : ''}`}>
                  <Chip color={color}>{badge}</Chip>
                  <h3 className={`mt-4 mb-1 font-heading text-2xl font-bold md:text-3xl ${s.heading}`}>{title}</h3>
                  <p className={`mb-4 text-sm font-semibold ${c.text}`}>{tagline}</p>
                  <p className={`mb-6 text-sm leading-relaxed md:text-base ${s.body}`}>{desc}</p>
                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${c.check}`}
                        >
                          <IconCheck />
                        </span>
                        <span className={`text-sm ${s.body}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`relative min-h-[260px] overflow-hidden md:min-h-[300px] ${!imageRight ? 'order-1 lg:order-1' : ''}`}>
                  <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
                  <div
                    className={
                      imageRight
                        ? 'absolute inset-0 bg-gradient-to-r from-white/90 via-white/20 to-transparent'
                        : 'absolute inset-0 bg-gradient-to-l from-white/90 via-white/20 to-transparent'
                    }
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </EcosystemContainer>
    </section>
  );
}
