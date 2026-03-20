'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

const NAV_ITEMS = [
  { key: 'about', href: '#about' },
  { key: 'howIThink', href: '#how-i-think' },
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'nevadatech', href: '#nevadatech' },
  { key: 'contact', href: '#contact' },
] as const;

export function Header() {
  const t = useTranslations('nav');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = lastScrollY.current;
    lastScrollY.current = latest;

    // Show background when scrolled past 50px
    setScrolled(latest > 50);

    // Auto-hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Intersection Observer for active section
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-20% 0px -70% 0px' },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [],
  );

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-colors duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent',
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            CO
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    'nav-link relative px-3 py-2 text-sm font-medium transition-colors duration-200',
                    activeSection === item.href.replace('#', '')
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {t(item.key)}
                  <span
                    className={cn(
                      'absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-accent',
                      'transition-transform duration-300 origin-center',
                      activeSection === item.href.replace('#', '')
                        ? 'w-full scale-x-100'
                        : 'w-full scale-x-0',
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-1 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="/cv.pdf"
              download
              className={cn(
                'ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2',
                'text-sm font-medium',
                'bg-accent text-accent-foreground',
                'hover:opacity-90 transition-opacity duration-200',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
              )}
            >
              <Download className="size-4" />
              {t('downloadCV')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={cn(
              'relative z-50 flex size-10 items-center justify-center rounded-full lg:hidden',
              'text-foreground',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            )}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="size-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={cn(
                'fixed top-0 right-0 bottom-0 z-40 w-[min(80vw,320px)] lg:hidden',
                'bg-card border-l border-border',
                'flex flex-col',
              )}
            >
              <div className="flex flex-1 flex-col justify-center px-8">
                <ul className="space-y-2">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.li
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={cn(
                          'block rounded-lg px-4 py-3 text-lg font-medium transition-colors duration-200',
                          activeSection === item.href.replace('#', '')
                            ? 'text-accent bg-accent/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5',
                        )}
                      >
                        {t(item.key)}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.05 + 0.1 }}
                  className="mt-8 flex flex-col gap-4 border-t border-border pt-6"
                >
                  <div className="flex items-center gap-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                  </div>
                  <a
                    href="/cv.pdf"
                    download
                    className={cn(
                      'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5',
                      'text-sm font-medium',
                      'bg-accent text-accent-foreground',
                      'hover:opacity-90 transition-opacity duration-200',
                    )}
                  >
                    <Download className="size-4" />
                    {t('downloadCV')}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
