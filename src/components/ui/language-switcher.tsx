'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === 'en' ? 'es' : 'en';

  function handleSwitch() {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      className={cn(
        'flex items-center gap-1.5 rounded-full px-2.5 py-1.5',
        'text-sm font-medium text-muted-foreground hover:text-foreground',
        'transition-colors duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        className,
      )}
      aria-label={`Switch to ${nextLocale === 'en' ? 'English' : 'Español'}`}
    >
      <Globe className="size-4" />
      <span className="uppercase">{locale}</span>
    </button>
  );
}
