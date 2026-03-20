import { cn } from '@/lib/utils';

type GlowPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center';

type GlowSize = 'sm' | 'md' | 'lg' | 'xl';
type GlowColor = 'accent' | 'secondary' | 'mixed';

interface GradientGlowProps {
  position: GlowPosition;
  size?: GlowSize;
  /** Opacity of the glow (0.02 – 0.25). Controls visibility. */
  intensity?: number;
  /** Higher intensity multiplier for light mode (default: 2.5x) */
  lightBoost?: number;
  color?: GlowColor;
  className?: string;
  /** CSS animation class name for drift (e.g. "hero-blob-1") */
  drift?: string;
}

const positionClasses: Record<GlowPosition, string> = {
  'top-left': '-left-1/4 -top-1/4',
  'top-right': '-right-1/4 -top-1/4',
  'bottom-left': '-left-1/4 -bottom-1/4',
  'bottom-right': '-right-1/4 -bottom-1/4',
  center: 'left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2',
};

const sizeClasses: Record<GlowSize, string> = {
  sm: 'h-[300px] w-[300px] blur-[60px]',
  md: 'h-[500px] w-[500px] blur-[100px]',
  lg: 'h-[700px] w-[700px] blur-[140px]',
  xl: 'h-[900px] w-[900px] blur-[180px]',
};

const colorClasses: Record<GlowColor, string> = {
  accent: 'bg-accent',
  secondary: 'bg-[var(--color-accent-secondary)]',
  mixed: '',
};

export function GradientGlow({
  position,
  size = 'md',
  intensity = 0.05,
  lightBoost = 2.5,
  color = 'accent',
  className,
  drift,
}: GradientGlowProps) {
  const clamped = Math.min(0.25, Math.max(0.02, intensity));

  if (color === 'mixed') {
    return (
      <div
        className={cn(
          'pointer-events-none absolute rounded-full',
          positionClasses[position],
          sizeClasses[size],
          drift,
          className,
        )}
        style={{
          background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary))',
          opacity: clamped,
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <>
      {/* Dark mode glow */}
      <div
        className={cn(
          'pointer-events-none absolute rounded-full dark:block hidden',
          colorClasses[color],
          positionClasses[position],
          sizeClasses[size],
          drift,
          className,
        )}
        style={{ opacity: clamped }}
        aria-hidden="true"
      />
      {/* Light mode glow — boosted intensity */}
      <div
        className={cn(
          'pointer-events-none absolute rounded-full dark:hidden block',
          colorClasses[color],
          positionClasses[position],
          sizeClasses[size],
          drift,
          className,
        )}
        style={{ opacity: Math.min(0.25, clamped * lightBoost) }}
        aria-hidden="true"
      />
    </>
  );
}
