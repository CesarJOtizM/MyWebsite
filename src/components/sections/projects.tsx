'use client';

import { useTranslations } from 'next-intl';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  type Variants,
} from 'motion/react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import { projects, type ProjectData } from '@/content/projects';
import { GradientGlow } from '@/components/ui/gradient-glow';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCard({
  project,
  index,
  featured,
  prefersReducedMotion,
}: {
  project: ProjectData;
  index: number;
  featured?: boolean;
  prefersReducedMotion: boolean | null;
}) {
  const t = useTranslations('projects');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.06), transparent 40%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const instant = { duration: 0, delay: 0 };
  const smooth = {
    duration: 0.5,
    delay: index * 0.2,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  };

  const badge = t.has(`items.${project.translationKey}.badge`)
    ? t(`items.${project.translationKey}.badge`)
    : null;

  const tags: string[] = t
    .raw(`items.${project.translationKey}.tags`) as string[];

  return (
    <motion.article
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-card',
        featured && 'md:col-span-2',
      )}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={prefersReducedMotion ? instant : smooth}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlightBackground }}
        aria-hidden="true"
      />

      <div className={cn(
        'relative z-20 flex flex-col',
        featured ? 'md:flex-row' : 'flex-col',
      )}>
        {/* Gradient placeholder for project image */}
        <div
          className={cn(
            'flex shrink-0 items-center justify-center',
            featured
              ? 'h-48 md:h-auto md:w-2/5'
              : 'h-48',
            'bg-gradient-to-br from-accent/10 via-accent/5 to-transparent',
          )}
          aria-hidden="true"
        >
          <div className="text-accent/20 text-6xl font-bold select-none">
            {project.translationKey === 'inventory' && '{}'}
            {project.translationKey === 'scheduler' && '</>'}
            {project.translationKey === 'nevadatech' && 'NT'}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          {/* Badge */}
          {badge && (
            <span className="inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {badge}
            </span>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-card-foreground">
            {t(`items.${project.translationKey}.title`)}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(`items.${project.translationKey}.description`)}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={`/projects/${project.slug}` as '/'}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                'bg-accent text-accent-foreground',
                'transition-colors hover:bg-accent/90',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              )}
            >
              {t('viewCase')}
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>

            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium',
                  'transition-colors hover:bg-accent/10 hover:text-accent',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                )}
              >
                <Github size={16} strokeWidth={1.5} />
                {t('viewCode')}
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium',
                  'transition-colors hover:bg-accent/10 hover:text-accent',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                )}
              >
                <ExternalLink size={16} strokeWidth={1.5} />
                {t('viewLive')}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const t = useTranslations('projects');
  const prefersReducedMotion = useReducedMotion();

  const instant = { duration: 0, delay: 0 };
  const smooth = (delay: number) => ({
    duration: 0.5,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  });

  return (
    <section id="projects" className="relative overflow-hidden px-4 py-24 sm:py-32" aria-label="Projects">
      {/* Background glow */}
      <GradientGlow position="top-right" size="lg" intensity={0.06} color="secondary" drift="hero-blob-2" />
      <GradientGlow position="bottom-left" size="md" intensity={0.05} color="accent" drift="hero-blob-3" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={prefersReducedMotion ? instant : smooth(0)}
        >
          <p className="text-accent mb-2 text-sm font-medium uppercase tracking-wider">
            {t('subtitle')}
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">{t('title')}</h2>
        </motion.div>

        {/* Project cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              featured={project.featured}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
