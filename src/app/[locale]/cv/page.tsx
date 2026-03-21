'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'motion/react';
import { Download, ArrowLeft, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const cvFiles: Record<string, string> = {
  en: '/cv/cesar-ortiz-cv-en.pdf',
  es: '/cv/cesar-ortiz-cv-es.pdf',
};

export default function CVPage() {
  const t = useTranslations('cv');
  const locale = useLocale();
  const cvUrl = cvFiles[locale] ?? cvFiles.en;

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto flex max-w-lg flex-col items-center gap-8 text-center"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10">
          <FileText className="h-10 w-10 text-accent" />
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
          <p className="text-lg text-muted">{t('subtitle')}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">{t('description')}</p>

        <a
          href={cvUrl}
          download={`cesar-ortiz-cv-${locale}.pdf`}
          className={cn(
            'inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground',
            'transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]',
            'shadow-lg shadow-accent/20'
          )}
        >
          <Download className="h-5 w-5" />
          {t('download')}
        </a>

        <div className="flex flex-col items-center gap-4 pt-4">
          <Link
            href="/#experience"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            {t('viewOnline')}
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('backHome')}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
