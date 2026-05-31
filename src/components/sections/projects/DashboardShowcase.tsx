import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, Users, Activity } from 'lucide-react';
import dashboardImage from '../../../assets/images/project/project_dashboard_admin.png';

const FLOAT_METRICS = [
  {
    label: 'Utilisateurs actifs',
    value: '+12 %',
    Icon: Users,
    className: 'left-[4%] top-[12%] md:left-[2%] md:top-[18%]',
    delay: 0,
  },
  {
    label: 'Chiffre d’affaires',
    value: '24,8 M',
    Icon: TrendingUp,
    className: 'right-[2%] top-[22%] md:right-[0%] md:top-[28%]',
    delay: 0.15,
  },
  {
    label: 'Services en ligne',
    value: '1 240',
    Icon: Activity,
    className: 'bottom-[18%] left-[8%] md:bottom-[22%] md:left-[6%]',
    delay: 0.3,
  },
] as const;

type DashboardShowcaseProps = {
  className?: string;
};

export function DashboardShowcase({ className = '' }: DashboardShowcaseProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={`relative flex min-h-[340px] w-full items-center justify-center overflow-visible sm:min-h-[400px] lg:min-h-[480px] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,hsl(142,71%,45%)/0.12,transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(142,71%,45%) 1px, transparent 1px), linear-gradient(90deg, hsl(142,71%,45%) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />

      {FLOAT_METRICS.map((metric) => (
        <motion.div
          key={metric.label}
          className={`pointer-events-none absolute z-20 hidden rounded-xl border border-white/10 bg-[#0c1018]/90 px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:block ${metric.className}`}
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={reduced ? undefined : { y: [0, -5, 0] }}
          transition={
            reduced
              ? { delay: 0.4 + metric.delay, duration: 0.45 }
              : {
                  opacity: { delay: 0.4 + metric.delay, duration: 0.45 },
                  y: { duration: 3.5 + metric.delay * 2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
                }
          }
        >
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-green/15 text-primary-green">
              <metric.Icon className="h-3.5 w-3.5" aria-hidden />
            </span>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-white/45">{metric.label}</p>
              <p className="font-heading text-sm font-bold text-white">{metric.value}</p>
            </div>
          </div>
        </motion.div>
      ))}

      <motion.figure
        className="relative z-10 m-0 w-full max-w-[min(100%,720px)] [perspective:1200px]"
        initial={reduced ? false : { opacity: 0, y: 32, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={dashboardImage}
          alt="Dashboard administrateur Soutrali Deals — pilotage de l’écosystème"
          className="h-auto w-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
          loading="lazy"
          animate={reduced ? undefined : { y: [0, -6, 0] }}
          transition={
            reduced ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }
          }
          style={{ transform: 'rotateX(2deg) rotateY(-3deg)' }}
        />
      </motion.figure>
    </div>
  );
}
