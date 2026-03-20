'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import { GradientGlow } from '@/components/ui/gradient-glow';

const VALUE_KEYS = ['concepts', 'architecture', 'foundations', 'products'] as const;

const PARAGRAPH_KEYS = ['p1', 'p2', 'p3', 'p4'] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpFromRight: Variants = {
  hidden: { opacity: 0, x: 20, y: 10 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerContainerCards: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function About() {
  const t = useTranslations('about');
  const prefersReducedMotion = useReducedMotion();

  const instant = { duration: 0, delay: 0 };
  const smooth = (duration = 0.5) => ({
    duration,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  });

  const itemTransition = prefersReducedMotion ? instant : smooth();

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-24 sm:py-32"
      aria-label="About"
    >
      <GradientGlow position="top-right" size="lg" intensity={0.05} color="accent" drift="hero-blob-1" />
      <GradientGlow position="bottom-left" size="md" intensity={0.04} color="secondary" drift="hero-blob-3" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column — Text */}
          <div>
            {/* Eyebrow subtitle */}
            <motion.p
              className="text-accent mb-3 text-sm font-medium uppercase tracking-widest"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={itemTransition}
            >
              {t('subtitle')}
            </motion.p>

            {/* Title */}
            <motion.h2
              className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={itemTransition}
            >
              {t('title')}
            </motion.h2>

            {/* Paragraphs — staggered */}
            <motion.div
              className="space-y-5"
              variants={prefersReducedMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {PARAGRAPH_KEYS.map((key) => (
                <motion.p
                  key={key}
                  className="text-muted-foreground text-base leading-relaxed sm:text-lg"
                  variants={fadeUp}
                  transition={itemTransition}
                >
                  {t(`paragraphs.${key}`)}
                </motion.p>
              ))}
            </motion.div>

            {/* AWS Certification badge */}
            <motion.div
              className="mt-8 flex items-center gap-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={itemTransition}
            >
              <div
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2',
                  'border border-border bg-card text-sm font-medium text-card-foreground',
                )}
              >
                <span aria-hidden="true">☁</span>
                <span>{t('certifications.aws')}</span>
              </div>
            </motion.div>
          </div>

          {/* Right column — Values + Photo placeholder */}
          <div className="flex flex-col gap-8">
            {/* Photo placeholder */}
            <motion.div
              className={cn(
                'flex h-32 w-32 items-center justify-center self-center rounded-full lg:self-start',
                'border border-border bg-card text-3xl font-bold text-accent',
              )}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={itemTransition}
              aria-label="Cesar Ortiz photo placeholder"
            >
              CO
            </motion.div>

            {/* Value cards — 2x2 grid */}
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              variants={prefersReducedMotion ? undefined : staggerContainerCards}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {VALUE_KEYS.map((key) => (
                <motion.div
                  key={key}
                  className={cn(
                    'rounded-lg border border-border bg-card p-5',
                    'transition-colors duration-200 hover:border-accent/50',
                  )}
                  variants={fadeUpFromRight}
                  transition={itemTransition}
                >
                  <h3 className="mb-2 text-sm font-bold text-card-foreground">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`values.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
