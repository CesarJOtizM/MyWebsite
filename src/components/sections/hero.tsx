'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GradientGlow } from '@/components/ui/gradient-glow';

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/CesarJOtizM',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/cesar-ortiz-m/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:cesarjavierortizmontero@gmail.com',
    icon: Mail,
    label: 'Email',
  },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpScale: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const nameContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const nameWord: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Hero() {
  const t = useTranslations('hero');
  const prefersReducedMotion = useReducedMotion();

  const nameWords = t('name').split(' ');

  const instant = { duration: 0, delay: 0 };
  const smooth = (delay: number, duration = 0.5) => ({
    duration,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  });

  const transition = (delay: number, duration?: number) =>
    prefersReducedMotion ? instant : smooth(delay, duration);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
      aria-label="Hero"
    >
      {/* Background gradient mesh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <GradientGlow position="top-left" size="xl" intensity={0.10} color="accent" drift="hero-blob-1" />
        <GradientGlow position="bottom-right" size="lg" intensity={0.08} color="secondary" drift="hero-blob-2" />
        <GradientGlow position="center" size="md" intensity={0.06} color="mixed" drift="hero-blob-3" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Greeting */}
        <motion.p
          className="text-muted-foreground mb-2 text-lg sm:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0)}
        >
          {t('greeting')}
        </motion.p>

        {/* Name — split word reveal */}
        <motion.h1
          className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
          variants={nameContainer}
          initial="hidden"
          animate="visible"
          transition={prefersReducedMotion ? instant : { delayChildren: 0.2 }}
        >
          {nameWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={prefersReducedMotion ? fadeUp : nameWord}
            >
              {word}
              {i < nameWords.length - 1 && '\u00A0'}
            </motion.span>
          ))}
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-accent mb-3 text-xl font-medium sm:text-2xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.6)}
        >
          {t('title')}
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-muted-foreground mx-auto mb-10 max-w-2xl text-base sm:text-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.8)}
        >
          {t('tagline')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={fadeUpScale}
          initial="hidden"
          animate="visible"
          transition={transition(1)}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className={cn(
              'inline-flex items-center justify-center rounded-lg px-8 py-3',
              'bg-accent text-accent-foreground font-medium',
              'transition-colors hover:bg-accent/90',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            )}
          >
            {t('cta.work')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={cn(
              'inline-flex items-center justify-center rounded-lg px-8 py-3',
              'border border-border font-medium',
              'transition-colors hover:bg-accent/10 hover:text-accent',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            )}
          >
            {t('cta.contact')}
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-5"
          variants={fadeUpScale}
          initial="hidden"
          animate="visible"
          transition={transition(1)}
        >
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className={cn(
                'text-muted-foreground transition-colors hover:text-accent',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm',
              )}
            >
              <Icon size={22} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={transition(1.2)}
        aria-hidden="true"
      >
        <ChevronDown
          size={24}
          className={cn(
            'text-muted',
            !prefersReducedMotion && 'hero-scroll-bounce',
          )}
          strokeWidth={1.5}
        />
      </motion.div>
    </section>
  );
}
