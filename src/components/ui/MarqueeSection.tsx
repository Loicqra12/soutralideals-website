import { motion } from 'framer-motion';
import { Hammer, Laptop, Wrench, Palette, Scissors, Stethoscope, ChefHat, Truck, PenTool, Camera, GraduationCap, Briefcase } from 'lucide-react';

const icons = [
    { Icon: Hammer, label: "Artisanat" },
    { Icon: Laptop, label: "Tech" },
    { Icon: Wrench, label: "Mécanique" },
    { Icon: Palette, label: "Design" },
    { Icon: Scissors, label: "Couture" },
    { Icon: Stethoscope, label: "Santé" },
    { Icon: ChefHat, label: "Restauration" },
    { Icon: Truck, label: "Transport" },
    { Icon: PenTool, label: "Rédaction" },
    { Icon: Camera, label: "Média" },
    { Icon: GraduationCap, label: "Formation" },
    { Icon: Briefcase, label: "Conseil" },
];

export const MarqueeSection = () => {
    return (
        <div className="relative w-full overflow-hidden bg-dark-bg py-8 -mt-10 mb-10 border-y border-white/5">
            {/* Gradient Masks for fade effect at edges */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-dark-bg to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-dark-bg to-transparent z-10"></div>

            <div className="flex">
                {/* First Loop */}
                <motion.div
                    className="flex gap-16 min-w-max px-8"
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 30, // Vitesse de défilement (plus grand = plus lent)
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {icons.map(({ Icon, label }, index) => (
                        <div key={`icon-1-${index}`} className="flex flex-col items-center gap-2 group opacity-30 hover:opacity-80 transition-opacity duration-300">
                            <Icon className="w-10 h-10 text-white/50 group-hover:text-gold-premium transition-colors" />
                            <span className="text-xs font-mono uppercase tracking-widest text-white/30 group-hover:text-gold-premium transition-colors">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Second Loop (Duplicate for seamless effect) */}
                <motion.div
                    className="flex gap-16 min-w-max px-8"
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {icons.map(({ Icon, label }, index) => (
                        <div key={`icon-2-${index}`} className="flex flex-col items-center gap-2 group opacity-30 hover:opacity-80 transition-opacity duration-300">
                            <Icon className="w-10 h-10 text-white/50 group-hover:text-gold-premium transition-colors" />
                            <span className="text-xs font-mono uppercase tracking-widest text-white/30 group-hover:text-gold-premium transition-colors">{label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
