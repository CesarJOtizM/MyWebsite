'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const MEMBER_KEYS = ['cesar', 'andres', 'marlon'] as const;

const MEMBER_INITIALS: Record<(typeof MEMBER_KEYS)[number], string> = {
  cesar: 'CO',
  andres: 'AS',
  marlon: 'MR',
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export function NevadaTech() {
  const t = useTranslations('nevadatech');
  const prefersReducedMotion = useReducedMotion();

  const instant = { duration: 0, delay: 0 };
  const smooth = (duration = 0.5) => ({
    duration,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  });

  const itemTransition = prefersReducedMotion ? instant : smooth();

  const services = t.raw('services.items') as string[];
  const clients = t.raw('clients.items') as string[];

  return (
    <section
      id="nevadatech"
      className="bg-card px-4 py-24 sm:py-32"
      aria-label="NevadaTech"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          {/* Eyebrow */}
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
            className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={itemTransition}
          >
            {t('title')}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-muted-foreground mb-8 max-w-3xl text-base leading-relaxed sm:text-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={itemTransition}
          >
            {t('description')}
          </motion.p>

          {/* Mission callout */}
          <motion.blockquote
            className={cn(
              'max-w-3xl border-l-4 border-accent pl-6 py-3',
              'text-muted-foreground text-base italic leading-relaxed sm:text-lg',
            )}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={itemTransition}
          >
            {t('mission')}
          </motion.blockquote>
        </div>

        {/* Team */}
        <div className="mb-16">
          <motion.h3
            className="mb-8 text-xl font-semibold tracking-tight sm:text-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={itemTransition}
          >
            {t('team.title')}
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {MEMBER_KEYS.map((key) => (
              <motion.div
                key={key}
                className={cn(
                  'flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center',
                  'transition-colors duration-200 hover:border-accent/50',
                )}
                variants={fadeUp}
                transition={itemTransition}
              >
                {/* Avatar placeholder with initials */}
                <div
                  className={cn(
                    'mb-4 flex h-20 w-20 items-center justify-center rounded-full',
                    'border border-border bg-card text-xl font-bold text-accent',
                  )}
                  aria-hidden="true"
                >
                  {MEMBER_INITIALS[key]}
                </div>

                <h4 className="text-base font-semibold text-card-foreground">
                  {t(`team.members.${key}.name`)}
                </h4>
                <p className="text-accent mb-2 text-sm font-medium">
                  {t(`team.members.${key}.role`)}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`team.members.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <motion.h3
            className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={itemTransition}
          >
            {t('services.title')}
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            variants={prefersReducedMotion ? undefined : staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.span
                key={service}
                className={cn(
                  'inline-flex items-center justify-center rounded-lg px-4 py-2.5',
                  'border border-border bg-background text-sm font-medium text-card-foreground',
                  'transition-colors duration-200 hover:border-accent/50 hover:text-accent',
                )}
                variants={fadeUp}
                transition={itemTransition}
              >
                {service}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Clients */}
        <div className="mb-12">
          <motion.h3
            className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={itemTransition}
          >
            {t('clients.title')}
          </motion.h3>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={prefersReducedMotion ? undefined : staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clients.map((client) => (
              <motion.span
                key={client}
                className="text-muted-foreground text-base font-medium"
                variants={fadeUp}
                transition={itemTransition}
              >
                {client}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={itemTransition}
        >
          <a
            href="https://nevadatech.co"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-8 py-3',
              'bg-accent text-accent-foreground font-medium',
              'transition-colors hover:bg-accent/90',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            )}
          >
            {t('visitSite')}
            <ExternalLink size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
