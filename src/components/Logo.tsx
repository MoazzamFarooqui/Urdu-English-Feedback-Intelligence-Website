interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function LogoMark({ className = 'h-8 w-8', showWordmark = true }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M10 14C10 11.7909 11.7909 10 14 10H50C52.2091 10 54 11.7909 54 14V38C54 40.2091 52.2091 42 50 42H30L18 54V42H14C11.7909 42 10 40.2091 10 38V14Z"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path d="M20 22H26M30 28H40M44 22H50" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="24" cy="22" r="2" fill="#FFFFFF" />
        <circle cx="40" cy="22" r="2" fill="#FFFFFF" />
      </svg>
      {showWordmark && (
        <span className="text-lg font-extrabold tracking-tight text-text-strong">
          Sentimo
        </span>
      )}
    </span>
  );
}
