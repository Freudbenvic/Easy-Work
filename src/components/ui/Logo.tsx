interface LogoProps {
  withTagline?: boolean;
  className?: string;
}

/**
 * Marque Easy Work : un "C" construit à partir de blocs pixelisés,
 * clin d'œil au traitement d'image "pixel par pixel".
 */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ew-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#ew-grad)" />
      {/* Blocs pixelisés en dégradé, débordant légèrement en haut à gauche */}
      <rect x="-4" y="4" width="4" height="4" fill="#6366F1" opacity="0.5" />
      <rect x="-4" y="10" width="4" height="4" fill="#6366F1" opacity="0.35" />
      <rect x="2" y="-4" width="4" height="4" fill="#6366F1" opacity="0.5" />
      {/* Le "C" en négatif, dessiné comme un anneau ouvert */}
      <path
        d="M28 14.5C26.4 12.1 23.6 10.5 20.4 10.5C15.3 10.5 11.2 14.7 11.2 20C11.2 25.3 15.3 29.5 20.4 29.5C23.6 29.5 26.4 27.9 28 25.5"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="27" cy="14" r="2.2" fill="white" />
    </svg>
  );
}

export default function Logo({ withTagline = false, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <div className="leading-tight">
        <span className="font-display font-semibold text-lg text-[var(--color-ink)]">
          Easy <span className="brand-gradient-text font-bold">Work</span>
        </span>
        {withTagline && (
          <p className="text-xs text-slate-500 -mt-0.5">L'édition d'images, simplement.</p>
        )}
      </div>
    </div>
  );
}
