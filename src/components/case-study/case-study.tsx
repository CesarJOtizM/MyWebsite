'use client';

import { useTranslations } from 'next-intl';
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from 'motion/react';
import { ArrowLeft, ExternalLink, Github, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import { useRef, useEffect, useState, useCallback } from 'react';

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */

function AnimatedCounter({
  value,
  duration = 1500,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState('0');

  // Extract numeric part and surrounding text
  const numericMatch = value.match(/^([^0-9]*)([0-9][0-9.,]*)([^0-9]*$)/);
  const prefix = numericMatch?.[1] || '';
  const numericStr = numericMatch?.[2] || '0';
  const suffix = numericMatch?.[3] || '';

  // Parse the numeric value (handle dots/commas as thousand separators)
  const cleanNum = numericStr.replace(/[.,]/g, '');
  const targetValue = parseInt(cleanNum, 10);

  // Detect the thousand separator used in original value
  const thousandSep = numericStr.includes('.') ? '.' : numericStr.includes(',') ? ',' : '';

  const formatNumber = useCallback(
    (n: number) => {
      if (!thousandSep || targetValue < 1000) return String(n);
      return n.toLocaleString(thousandSep === '.' ? 'de-DE' : 'en-US');
    },
    [thousandSep, targetValue],
  );

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion || isNaN(targetValue)) {
      setDisplayValue(numericStr);
      return;
    }

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * targetValue);
      setDisplayValue(formatNumber(current));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValue(numericStr);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, shouldReduceMotion, targetValue, duration, numericStr, formatNumber]);

  return (
    <span ref={ref}>
      {prefix}
      {shouldReduceMotion || !isInView ? numericStr : displayValue}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Section heading with accent border                                 */
/* ------------------------------------------------------------------ */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 border-l-4 border-accent pl-4 text-2xl font-bold sm:text-3xl">
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/*  Main CaseStudy component                                           */
/* ------------------------------------------------------------------ */

type CaseStudyProps = {
  slug: string;
  translationKey: string;
  codeUrl?: string;
  liveUrl?: string;
};

export function CaseStudy({
  slug,
  translationKey,
  codeUrl,
  liveUrl,
}: CaseStudyProps) {
  const t = useTranslations('caseStudies');
  const prefersReducedMotion = useReducedMotion();

  const instant = { duration: 0, delay: 0 };
  const smooth = (delay: number, duration = 0.5) => ({
    duration,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  });

  const transition = (delay: number, duration?: number) =>
    prefersReducedMotion ? instant : smooth(delay, duration);

  /* -- Translate helpers ------------------------------------------- */

  const title = t(`${translationKey}.title`);
  const subtitle = t(`${translationKey}.subtitle`);

  const sectionKeys = [
    'problem',
    'approach',
    'decisions',
    'build',
    'result',
  ] as const;

  const stack: string[] = t.raw(`${translationKey}.stack`) as string[];
  const metricsRaw = t.raw(`${translationKey}.metrics`) as Record<
    string,
    { value: string; label: string }
  >;
  const metrics = Object.values(metricsRaw);

  const decisionsRaw = t.raw(
    `${translationKey}.sections.decisions.items`,
  ) as { title: string; content: string }[];

  /* -- Render ------------------------------------------------------ */

  return (
    <article className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        {/* ── Back link ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0)}
        >
          <Link
            href={'/#projects' as '/'}
            className={cn(
              'mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground',
              'transition-colors hover:text-accent',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm',
            )}
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            {t('backToProjects')}
          </Link>
        </motion.div>

        {/* ── Header ────────────────────────────────────────────── */}
        <motion.header
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.1)}
        >
          <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            {subtitle}
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.header>

        {/* ── Metrics bar ───────────────────────────────────────── */}
        <motion.section
          className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
          aria-label={t('keyMetrics')}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition(0.2)}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <p className="text-2xl font-bold text-accent sm:text-3xl">
                <AnimatedCounter value={metric.value} />
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.section>

        {/* ── Content sections ──────────────────────────────────── */}
        {sectionKeys.map((key) => {
          const sectionTitle = t(
            `${translationKey}.sections.${key}.title`,
          );

          if (key === 'decisions') {
            return (
              <motion.section
                key={key}
                className="mb-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={transition(0)}
              >
                <SectionHeading>{sectionTitle}</SectionHeading>

                <motion.div
                  className="grid gap-4 sm:grid-cols-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {decisionsRaw.map((item) => (
                    <motion.div
                      key={item.title}
                      className="rounded-xl border border-border bg-card p-5"
                      variants={fadeUp}
                      transition={
                        prefersReducedMotion ? instant : smooth(0)
                      }
                    >
                      <h3 className="mb-2 text-base font-semibold text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.content}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            );
          }

          const sectionContent = t(
            `${translationKey}.sections.${key}.content`,
          );

          return (
            <motion.section
              key={key}
              className="mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={transition(0)}
            >
              <SectionHeading>{sectionTitle}</SectionHeading>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {sectionContent}
              </p>
            </motion.section>
          );
        })}

        {/* ── Action buttons ────────────────────────────────────── */}
        <motion.div
          className="flex flex-wrap items-center gap-4 border-t border-border pt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition(0)}
        >
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium',
                'bg-accent text-accent-foreground',
                'transition-colors hover:bg-accent/90',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              )}
            >
              <Github size={16} strokeWidth={1.5} />
              View Code
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium',
                codeUrl
                  ? 'border border-border transition-colors hover:bg-accent/10 hover:text-accent'
                  : 'bg-accent text-accent-foreground transition-colors hover:bg-accent/90',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              )}
            >
              <ExternalLink size={16} strokeWidth={1.5} />
              View Live
            </a>
          )}

          <Link
            href={'/#projects' as '/'}
            className={cn(
              'inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium',
              'transition-colors hover:bg-accent/10 hover:text-accent',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            )}
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            {t('backToProjects')}
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
