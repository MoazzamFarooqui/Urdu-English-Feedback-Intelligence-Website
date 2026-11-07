// Pewter, White, Graphite
const DOT_COLORS = ['#8E8E93', '#FFFFFF', '#55555A'] as const;

const sizes = {
  md: 'h-3 w-3',
  sm: 'h-2.5 w-2.5',
} as const;

export function WindowDots({
  size = 'md',
  className = '',
}: {
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {DOT_COLORS.map((color) => (
        <span
          key={color}
          className={`${sizes[size]} rounded-full`}
          style={{ backgroundColor: color }}
        />
      ))}
    </span>
  );
}
