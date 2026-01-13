import { motion } from 'framer-motion';

export const Loading = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-dark-bg">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-dark-card border-t-gold-premium rounded-full"
            />
        </div>
    );
};
