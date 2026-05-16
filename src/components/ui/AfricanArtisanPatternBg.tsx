import { useId } from 'react';

/** Fond sombre + motifs artisanaux (or, ivoire, terre) — sans dominante verte */
export const AfricanArtisanPatternBg = () => {
  const uid = useId().replace(/:/g, '');
  const mud = `${uid}-mud`;
  const weave = `${uid}-weave`;
  const border = `${uid}-border`;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Base identique au site */}
      <div className="absolute inset-0 bg-[hsl(220,26%,8%)]" />

      {/* Bogolan — points & traits ivoire / or sur fond nuit */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.055]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={mud} width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="1.1" fill="#e8dcc8" />
            <circle cx="22" cy="14" r="0.85" fill="#c9a227" opacity="0.7" />
            <circle cx="14" cy="26" r="0.7" fill="#e8dcc8" opacity="0.45" />
            <path
              d="M0 24h12M20 4v10M28 20h4"
              stroke="#d4b896"
              strokeWidth="0.55"
              strokeLinecap="round"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${mud})`} />
      </svg>

      {/* Tissage diagonal — fils dorés discrets */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={weave}
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-32)"
          >
            <line x1="0" y1="10" x2="20" y2="10" stroke="#c9a227" strokeWidth="0.45" />
            <line x1="10" y1="0" x2="10" y2="20" stroke="#e8dcc8" strokeWidth="0.3" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${weave})`} />
      </svg>

      {/* Frise losanges — or & terre cuite, très léger */}
      <svg
        className="absolute -right-[5%] top-[12%] h-[55%] w-[45%] opacity-[0.07]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={border} width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M20 4 L36 20 L20 36 L4 20 Z"
              fill="none"
              stroke="#c9a227"
              strokeWidth="0.8"
            />
            <path
              d="M20 12 L28 20 L20 28 L12 20 Z"
              fill="#a67c52"
              opacity="0.25"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill={`url(#${border})`} />
      </svg>

      {/* Ornement coin — style broderie */}
      <svg
        className="absolute bottom-10 left-6 h-28 w-28 opacity-[0.12]"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 48 Q48 12 84 48 Q48 84 12 48"
          stroke="#d4b896"
          strokeWidth="0.9"
          strokeDasharray="3 5"
        />
        <circle cx="48" cy="48" r="6" fill="#c9a227" opacity="0.35" />
      </svg>
      <svg
        className="absolute right-8 top-10 h-20 w-20 opacity-[0.1]"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 40 L40 8 L72 40 L40 72 Z" stroke="#c9a227" strokeWidth="0.75" />
        <path d="M20 40 L40 20 L60 40 L40 60 Z" stroke="#e8dcc8" strokeWidth="0.5" opacity="0.6" />
      </svg>

      {/* Lueur chaude très légère (pas de vert) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(201,162,39,0.06),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_70%,rgba(166,124,82,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1219] via-transparent to-[#080d14]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1219]/80 via-transparent to-[#0c1219]/60" />
    </div>
  );
};
