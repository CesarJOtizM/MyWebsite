'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/CesarJOtizM',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cesar-ortiz-m/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:cesarjavierortizmontero@gmail.com',
    icon: Mail,
  },
] as const;

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        {/* Built with */}
        <p className="text-sm text-muted-foreground">{t('builtWith')}</p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className={cn(
                'flex size-9 items-center justify-center rounded-full',
                'text-muted-foreground hover:text-foreground',
                'transition-colors duration-200',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
              )}
              aria-label={link.label}
            >
              <link.icon className="size-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; {year} Cesar Ortiz. {t('rights')}
        </p>
      </div>
    </footer>
  );
}
