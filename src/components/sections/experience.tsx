'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import { experienceOrder, type ExperienceKey } from '@/content/experience';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cardFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const cardFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const dotScale: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const STAGGER_DELAY = 0.15;

function TimelineCard({
  experienceKey,
  index,
  prefersReducedMotion,
}: {
  experienceKey: ExperienceKey;
  index: number;
  prefersReducedMotion: boolean | null;
}) {
  const t = useTranslations('experience');
  const isEven = index % 2 === 0;
  const isNevadatech = experienceKey === 'nevadatech';

  const endDate = t.raw(`items.${experienceKey}.endDate`) as string;
  const displayEndDate = endDate || t('present');

  const achievements = t.raw(`items.${experienceKey}.achievements`) as string[];

  const instant = { duration: 0 };
  const smooth = {
    duration: 0.5,
    delay: index * STAGGER_DELAY,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  };
  const springSmooth = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
    delay: index * STAGGER_DELAY,
  };

  const cardTransition = prefersReducedMotion ? instant : smooth;
  const dotTransition = prefersReducedMotion ? instant : springSmooth;

  return (
    <div
      className={cn(
        'relative grid items-center gap-4',
        'grid-cols-[24px_1fr] md:grid-cols-[1fr_24px_1fr]',
      )}
    >
      {/* Desktop left card */}
      <div
        className={cn(
          'hidden md:block',
          !isEven && 'md:col-start-1 md:row-start-1',
        )}
      >
        {isEven && (
          <motion.div
            className={cn(
              'rounded-lg border border-border bg-card p-5',
              isNevadatech && 'border-accent/50 shadow-[0_0_24px_-6px] shadow-accent/10',
            )}
            variants={cardFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={cardTransition}
          >
            <CardContent
              experienceKey={experienceKey}
              displayEndDate={displayEndDate}
              achievements={achievements}
              isNevadatech={isNevadatech}
              t={t}
            />
          </motion.div>
        )}
      </div>

      {/* Timeline dot — center column on desktop, first column on mobile */}
      <div className="relative flex justify-center md:col-start-2 md:row-start-1">
        <motion.div
          className={cn(
            'z-10 h-3 w-3 rounded-full bg-accent',
            isNevadatech && 'h-4 w-4 ring-2 ring-accent/30 ring-offset-2 ring-offset-background',
          )}
          variants={dotScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={dotTransition}
          aria-hidden="true"
        />
      </div>

      {/* Desktop right card */}
      <div
        className={cn(
          'hidden md:block',
          isEven && 'md:col-start-3 md:row-start-1',
        )}
      >
        {!isEven && (
          <motion.div
            className={cn(
              'rounded-lg border border-border bg-card p-5',
              isNevadatech && 'border-accent/50 shadow-[0_0_24px_-6px] shadow-accent/10',
            )}
            variants={cardFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={cardTransition}
          >
            <CardContent
              experienceKey={experienceKey}
              displayEndDate={displayEndDate}
              achievements={achievements}
              isNevadatech={isNevadatech}
              t={t}
            />
          </motion.div>
        )}
      </div>

      {/* Mobile card — always col 2 */}
      <motion.div
        className={cn(
          'col-start-2 md:hidden rounded-lg border border-border bg-card p-4',
          isNevadatech && 'border-accent/50 shadow-[0_0_24px_-6px] shadow-accent/10',
        )}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={cardTransition}
      >
        <CardContent
          experienceKey={experienceKey}
          displayEndDate={displayEndDate}
          achievements={achievements}
          isNevadatech={isNevadatech}
          t={t}
        />
      </motion.div>
    </div>
  );
}

function CardContent({
  experienceKey,
  displayEndDate,
  achievements,
  isNevadatech,
  t,
}: {
  experienceKey: ExperienceKey;
  displayEndDate: string;
  achievements: string[];
  isNevadatech: boolean;
  t: ReturnType<typeof useTranslations<'experience'>>;
}) {
  return (
    <>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <h3 className={cn('text-lg font-bold', isNevadatech && 'text-xl')}>
          {t(`items.${experienceKey}.company`)}
        </h3>
        {isNevadatech && (
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
            Founder
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-accent">
        {t(`items.${experienceKey}.role`)}
      </p>
      <p className="text-muted mt-1 text-xs">
        {t(`items.${experienceKey}.startDate`)} — {displayEndDate}
      </p>
      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
        {t(`items.${experienceKey}.description`)}
      </p>
      {achievements.length > 0 && (
        <ul className="mt-3 space-y-1.5" role="list">
          {achievements.map((achievement, i) => (
            <li
              key={i}
              className="text-muted-foreground flex items-start gap-2 text-sm"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export function Experience() {
  const t = useTranslations('experience');
  const prefersReducedMotion = useReducedMotion();

  const instant = { duration: 0 };
  const smooth = {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  };
  const headerTransition = prefersReducedMotion ? instant : smooth;

  return (
    <section id="experience" className="px-4 py-24 sm:py-32" aria-label={t('title')}>
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={headerTransition}
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={cn(
              'absolute top-0 bottom-0 w-0.5 bg-border',
              'left-[11px] md:left-1/2 md:-translate-x-1/2',
            )}
            aria-hidden="true"
          />

          {/* Entries */}
          <div className="space-y-12">
            {experienceOrder.map((key, index) => (
              <TimelineCard
                key={key}
                experienceKey={key}
                index={index}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
