import React from 'react';

interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
  height?: number;
  showLabel?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = '',
  height = 12,
  showLabel = true,
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`relative ${className}`}>
      <div
        className="w-full bg-dark-border rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div
          className="h-full bg-gradient-to-r from-primary-green via-primary-blue to-gold-premium transition-all duration-500 ease-out rounded-full"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showLabel && (
        <span className="absolute right-0 top-0 text-xs text-text-secondary font-medium">
          {Math.round(clampedProgress)}%
        </span>
      )}
    </div>
  );
};
