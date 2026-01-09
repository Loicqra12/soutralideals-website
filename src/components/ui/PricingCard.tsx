import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

interface PricingItemProps {
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  variant?: 'green' | 'blue' | 'orange' | 'gold';
  onAction?: () => void;
}

export const PricingCard = ({
  title,
  price,
  features,
  icon,
  variant = 'blue',
  onAction
}: PricingItemProps) => {

  const variantStyles = {
    green: {
      border: 'hover:border-primary-green',
      iconBg: 'bg-primary-green/10',
      iconColor: 'text-primary-green',
      button: 'bg-primary-green hover:bg-green-600'
    },
    blue: {
      border: 'hover:border-primary-blue',
      iconBg: 'bg-primary-blue/10',
      iconColor: 'text-primary-blue',
      button: 'bg-primary-blue hover:bg-blue-600'
    },
    orange: {
      border: 'hover:border-primary-orange',
      iconBg: 'bg-primary-orange/10',
      iconColor: 'text-primary-orange',
      button: 'bg-primary-orange hover:bg-orange-600'
    },
    gold: {
      border: 'hover:border-gold-premium',
      iconBg: 'bg-gold-premium/10',
      iconColor: 'text-gold-premium',
      button: 'bg-gold-premium hover:bg-yellow-500 text-black'
    }
  };

  const style = variantStyles[variant];

  return (
    <div className={`bg-dark-card border border-dark-border rounded-2xl p-8 transition-all duration-300 ${style.border} hover:shadow-xl hover:-translate-y-2 flex flex-col h-full`}>
      <div className={`w-14 h-14 ${style.iconBg} rounded-xl flex items-center justify-center mb-6`}>
        <div className={style.iconColor}>{icon}</div>
      </div>

      <h3 className="text-2xl font-bold mb-2 break-words">{title}</h3>
      <div className="text-3xl font-bold mb-6 font-mono text-white/90">
        {price} <span className="text-sm font-sans font-normal text-text-muted">/ projet</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-text-secondary text-sm">
            <Check className={`w-5 h-5 shrink-0 ${style.iconColor}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${style.button} text-white border-none`}
        onClick={onAction}
      >
        Demander un devis
      </Button>
    </div>
  );
};
