import React from 'react';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 800,
  height = 600,
  text = 'Image à venir',
  className = '',
}) => {
  return (
    <div
      className={`bg-dark-card border border-dark-border rounded-lg flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }}
    >
      <div className="text-center p-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-dark-border rounded-lg flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-text-muted"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <p className="text-text-muted text-sm">{text}</p>
      </div>
    </div>
  );
};
