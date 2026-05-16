import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full border font-semibold tracking-[0.01em] transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  const variants = {
    primary:
      'border-gold-premium/35 bg-[#070d18] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:-translate-y-0.5 hover:border-gold-premium/55 hover:bg-[#0b1528] hover:shadow-[0_10px_24px_rgba(0,0,0,0.32)] focus:ring-gold-premium/70 focus:ring-offset-transparent',
    secondary:
      'border-gold-premium/30 bg-gradient-to-r from-[#b8860b] via-gold-premium to-[#cfb53b] text-[#0b0f1a] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_10px_22px_rgba(212,175,55,0.28)] focus:ring-gold-premium/70 focus:ring-offset-transparent',
    outline:
      'border-white/22 bg-white/[0.03] text-text-light hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08] focus:ring-primary-blue/60 focus:ring-offset-transparent',
    ghost:
      'border-transparent bg-transparent text-text-secondary hover:-translate-y-0.5 hover:text-text-light hover:bg-dark-card/50 focus:ring-gold-premium/60 focus:ring-offset-transparent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-[15px]',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
