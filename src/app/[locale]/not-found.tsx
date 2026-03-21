'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { GradientGlow } from '@/components/ui/gradient-glow';
import { LostPenguin } from '@/components/ui/lost-penguin';
import { cn } from '@/lib/utils';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <section
      className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4"
      aria-label="Page not found"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <GradientGlow position="top-left" size="lg" intensity={0.08} color="accent" drift="hero-blob-1" />
        <GradientGlow position="bottom-right" size="lg" intensity={0.06} color="secondary" drift="hero-blob-2" />
        <GradientGlow position="center" size="md" intensity={0.04} color="mixed" drift="hero-blob-3" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        {/* Giant 404 */}
        <motion.h1
          className="select-none font-mono text-[8rem] font-black leading-none tracking-tighter text-foreground/5 sm:text-[12rem] md:text-[16rem]"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t('code')}
        </motion.h1>

        {/* Penguin walking area */}
        <motion.div
          className="-mt-16 w-full max-w-2xl sm:-mt-24"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <LostPenguin />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="mt-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t('title')}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-4 max-w-md text-base text-muted-foreground"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t('description')}
        </motion.p>

        {/* Hint */}
        <motion.p
          className="mt-2 max-w-md font-mono text-sm text-muted italic"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t('hint')}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link
            href="/"
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-8 py-3',
              'bg-accent text-accent-foreground font-medium',
              'transition-colors hover:bg-accent/90',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
            )}
          >
            <Home size={18} strokeWidth={1.5} />
            {t('cta')}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
