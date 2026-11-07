interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function LogoIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 8H48C53.5228 8 58 12.4772 58 18V40C58 45.5228 53.5228 50 48 50H26L16 60V50C10.4772 50 6 45.5228 6 40V18C6 12.4772 10.4772 8 16 8Z"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path
        d="M20 26H29M35 26H44M22 34Q32 42 42 34"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoMark({ className = 'h-8 w-8', showWordmark = true }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoIcon className={`${className} text-white`} />
      {showWordmark && (
        <span className="text-lg font-extrabold tracking-tight text-text-strong">
          Sentimo
        </span>
      )}
    </span>
  );
}
