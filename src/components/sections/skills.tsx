'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import { categoryOrder, type CategoryKey } from '@/content/skills';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const skillItemVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const skillItemContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const LEVEL_STYLES: Record<string, string> = {
  primary: 'bg-accent/15 text-accent',
  production: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  familiar: 'bg-muted/30 text-muted-foreground',
};

export function Skills() {
  const t = useTranslations('skills');
  const prefersReducedMotion = useReducedMotion();

  const instant: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const resolvedFadeUp = prefersReducedMotion ? instant : fadeUp;
  const resolvedCard = prefersReducedMotion ? instant : cardVariant;
  const resolvedSkillItem = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : skillItemVariant;

  return (
    <section
      id="skills"
      className="px-4 py-24 sm:py-32"
      aria-label={t('title')}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          variants={resolvedFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
          }
        >
          <p className="text-accent mb-2 text-sm font-medium uppercase tracking-wider">
            {t('subtitle')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('title')}
          </h2>
        </motion.div>

        {/* Category grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categoryOrder.map((categoryKey) => (
            <CategoryCard
              key={categoryKey}
              categoryKey={categoryKey}
              t={t}
              cardVariant={resolvedCard}
              skillItemVariant={resolvedSkillItem}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({
  categoryKey,
  t,
  cardVariant: cardV,
  skillItemVariant: skillV,
  prefersReducedMotion,
}: {
  categoryKey: CategoryKey;
  t: ReturnType<typeof useTranslations<'skills'>>;
  cardVariant: Variants;
  skillItemVariant: Variants;
  prefersReducedMotion: boolean | null;
}) {
  const items = t.raw(`categories.${categoryKey}.items`) as Array<{
    name: string;
    level: string;
  }>;

  return (
    <motion.div
      className={cn(
        'rounded-xl border border-border bg-card p-6',
        'transition-colors hover:border-accent/30',
      )}
      variants={cardV}
    >
      <h3
        className={cn(
          'mb-4 border-l-4 border-accent pl-3 text-lg font-semibold',
          'text-card-foreground',
        )}
      >
        {t(`categories.${categoryKey}.title`)}
      </h3>

      <motion.ul
        className="flex flex-wrap gap-2"
        variants={prefersReducedMotion ? {} : skillItemContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item) => (
          <motion.li key={item.name} variants={skillV}>
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium',
                LEVEL_STYLES[item.level] ?? LEVEL_STYLES.familiar,
              )}
            >
              {item.name}
              <span
                className={cn(
                  'hidden text-[10px] font-normal opacity-70 sm:inline',
                )}
              >
                {t(`levels.${item.level as 'primary' | 'production' | 'familiar'}`)}
              </span>
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
