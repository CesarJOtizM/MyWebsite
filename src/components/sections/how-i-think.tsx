'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';

const PILLAR_KEYS = ['domain', 'boundaries', 'patterns', 'build', 'iterate'] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepCard: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function HowIThink() {
  const t = useTranslations('howIThink');
  const prefersReducedMotion = useReducedMotion();

  const instant: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const animVariants = prefersReducedMotion ? instant : fadeUp;
  const cardVariants = prefersReducedMotion ? instant : stepCard;
  const containerVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer;

  const smooth = (delay: number, duration = 0.5) => ({
    duration,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  });

  const noTransition = { duration: 0, delay: 0 };

  const transition = (delay: number, duration?: number) =>
    prefersReducedMotion ? noTransition : smooth(delay, duration);

  return (
    <section
      id="how-i-think"
      className="relative overflow-hidden bg-card px-4 py-24 sm:py-32"
      aria-labelledby="how-i-think-heading"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[100px]" />
        <div className="absolute -left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/[0.02] blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent"
            variants={animVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={transition(0)}
          >
            {t('subtitle')}
          </motion.p>

          <motion.h2
            id="how-i-think-heading"
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
            variants={animVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={transition(0.1)}
          >
            {t('title')}
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            variants={animVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={transition(0.2)}
          >
            {t('intro')}
          </motion.p>
        </div>

        {/* Steps / Pillars */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Vertical timeline connector (desktop) */}
          <div
            className="absolute left-[27px] top-0 hidden h-full w-px bg-border sm:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8 sm:gap-10">
            {PILLAR_KEYS.map((key) => (
              <motion.div
                key={key}
                className="group relative flex gap-6"
                variants={cardVariants}
              >
                {/* Step number circle */}
                <div
                  className={cn(
                    'relative z-10 flex h-14 w-14 shrink-0 items-center justify-center',
                    'rounded-full border-2 border-accent/30 bg-card',
                    'text-lg font-bold text-accent',
                    'transition-colors group-hover:border-accent group-hover:bg-accent/10',
                  )}
                  aria-hidden="true"
                >
                  {t(`pillars.${key}.step`)}
                </div>

                {/* Content card */}
                <div
                  className={cn(
                    'flex-1 rounded-lg border-l-4 border-l-accent/40 bg-background p-6',
                    'transition-all group-hover:border-l-accent group-hover:shadow-md',
                  )}
                >
                  <h3 className="mb-2 text-xl font-semibold">
                    {t(`pillars.${key}.title`)}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {t(`pillars.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
