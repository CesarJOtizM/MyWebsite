'use client';

import { useTranslations } from 'next-intl';

function Snowflakes() {
  const flakes = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: `${Math.random() * 8}s`,
    duration: `${Math.random() * 5 + 5}s`,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-foreground/20 dark:bg-white/30"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animation: `snowfall ${flake.duration} linear infinite`,
            animationDelay: flake.delay,
          }}
        />
      ))}
    </div>
  );
}

function Penguin() {
  const t = useTranslations('notFound');

  return (
    <div className="penguin-walk relative" style={{ width: 130, height: 150 }}>
      {/* Thought bubble */}
      <div className="thought-float absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <div className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-lg">
          {t('penguinThought')}
        </div>
        <div className="absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-card border border-border" />
        <div className="absolute -bottom-4 left-1/2 h-1.5 w-1.5 translate-x-1 rounded-full bg-card border border-border" />
      </div>

      {/* Question marks floating */}
      <div className="question-float absolute -right-4 -top-6 text-lg font-bold text-accent" style={{ animationDelay: '0.5s' }}>?</div>
      <div className="question-float absolute -left-2 -top-4 text-sm font-bold text-accent-secondary" style={{ animationDelay: '1.2s' }}>?</div>

      <div className="penguin-waddle relative flex items-end justify-center" style={{ width: 130, height: 150 }}>
        <img src="/penguin.svg" alt="Lost penguin" style={{ width: 120 }} />
      </div>
    </div>
  );
}

export function LostPenguin() {
  return (
    <div className="relative flex w-full items-end justify-center" style={{ height: 200 }}>
      <Snowflakes />
      {/* Ground / ice line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-accent/5 to-transparent" />
      <div className="mb-2">
        <Penguin />
      </div>
    </div>
  );
}
