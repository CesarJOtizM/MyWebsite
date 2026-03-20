'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from 'motion/react';
import {
  Send,
  Check,
  Loader2,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export function Contact() {
  const t = useTranslations('contact');
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const instant = { duration: 0, delay: 0 };
  const smooth = (duration = 0.5) => ({
    duration,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  });

  const itemTransition = prefersReducedMotion ? instant : smooth();

  function validateForm(): boolean {
    const result = contactFormSchema.safeParse(formData);

    if (result.success) {
      setErrors({});
      return true;
    }

    const fieldErrors: FieldErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof ContactFormData;
      if (!fieldErrors[field]) {
        if (field === 'name') {
          fieldErrors[field] = t('validation.nameMin');
        } else if (field === 'email') {
          fieldErrors[field] = t('validation.emailInvalid');
        } else if (field === 'message') {
          fieldErrors[field] = t('validation.messageMin');
        }
      }
    }

    setErrors(fieldErrors);
    return false;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call — replace with real integration later
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // eslint-disable-next-line no-console
    console.log('Contact form submitted:', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    setIsSubmitting(false);
    setIsSuccess(true);
  }

  function updateField(field: keyof typeof formData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field as keyof FieldErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FieldErrors];
        return next;
      });
    }
  }

  return (
    <section
      id="contact"
      className="px-4 py-24 sm:py-32"
      aria-label={t('title')}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column — Info */}
          <div>
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

            <motion.p
              className="text-muted-foreground mb-10 max-w-lg text-base leading-relaxed sm:text-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={itemTransition}
            >
              {t('description')}
            </motion.p>

            {/* Direct contact links */}
            <motion.div
              className="space-y-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={itemTransition}
            >
              <p className="text-sm font-medium text-muted-foreground">
                {t('direct.title')}
              </p>
              <div className="flex items-center gap-5">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={label}
                    className={cn(
                      'flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm',
                    )}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={itemTransition}
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  className={cn(
                    'flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center',
                  )}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, scale: 0.95 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  transition={itemTransition}
                >
                  <div
                    className={cn(
                      'mb-6 flex h-16 w-16 items-center justify-center rounded-full',
                      'bg-accent/10 text-accent',
                    )}
                  >
                    <Check size={32} strokeWidth={1.5} />
                  </div>
                  <p className="text-lg font-semibold text-card-foreground">
                    {t('form.success')}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className={cn(
                    'space-y-6 rounded-xl border border-border bg-card p-6 sm:p-8',
                  )}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -10 }
                  }
                  transition={itemTransition}
                >
                  {/* Name */}
                  <div className="group relative">
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-medium text-card-foreground"
                    >
                      {t('form.name')}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? 'contact-name-error' : undefined
                      }
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className={cn(
                        'w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground',
                        'transition-colors duration-200',
                        'placeholder:text-muted',
                        'focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20',
                        errors.name
                          ? 'border-red-500'
                          : 'border-border',
                      )}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1.5 text-sm text-red-500"
                          initial={
                            prefersReducedMotion
                              ? { opacity: 1 }
                              : { opacity: 0, y: -4 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          exit={
                            prefersReducedMotion
                              ? { opacity: 0 }
                              : { opacity: 0, y: -4 }
                          }
                          transition={{ duration: 0.2 }}
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email */}
                  <div className="group relative">
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-medium text-card-foreground"
                    >
                      {t('form.email')}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? 'contact-email-error' : undefined
                      }
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={cn(
                        'w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground',
                        'transition-colors duration-200',
                        'placeholder:text-muted',
                        'focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20',
                        errors.email
                          ? 'border-red-500'
                          : 'border-border',
                      )}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1.5 text-sm text-red-500"
                          initial={
                            prefersReducedMotion
                              ? { opacity: 1 }
                              : { opacity: 0, y: -4 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          exit={
                            prefersReducedMotion
                              ? { opacity: 0 }
                              : { opacity: 0, y: -4 }
                          }
                          transition={{ duration: 0.2 }}
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message */}
                  <div className="group relative">
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-card-foreground"
                    >
                      {t('form.message')}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? 'contact-message-error' : undefined
                      }
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className={cn(
                        'w-full resize-none rounded-lg border bg-background px-4 py-3 text-sm text-foreground',
                        'transition-colors duration-200',
                        'placeholder:text-muted',
                        'focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20',
                        errors.message
                          ? 'border-red-500'
                          : 'border-border',
                      )}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          id="contact-message-error"
                          role="alert"
                          className="mt-1.5 text-sm text-red-500"
                          initial={
                            prefersReducedMotion
                              ? { opacity: 1 }
                              : { opacity: 0, y: -4 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          exit={
                            prefersReducedMotion
                              ? { opacity: 0 }
                              : { opacity: 0, y: -4 }
                          }
                          transition={{ duration: 0.2 }}
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Honeypot — hidden from users */}
                  <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                    <label htmlFor="contact-hp">
                      Do not fill this field
                    </label>
                    <input
                      id="contact-hp"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => updateField('honeypot', e.target.value)}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'inline-flex w-full items-center justify-center gap-2 rounded-lg px-8 py-3',
                      'bg-accent text-accent-foreground font-medium',
                      'transition-colors hover:bg-accent/90',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                      'disabled:cursor-not-allowed disabled:opacity-60',
                    )}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isSubmitting ? (
                        <motion.span
                          key="loading"
                          className="inline-flex items-center gap-2"
                          initial={
                            prefersReducedMotion
                              ? { opacity: 1 }
                              : { opacity: 0 }
                          }
                          animate={{ opacity: 1 }}
                          exit={
                            prefersReducedMotion
                              ? { opacity: 0 }
                              : { opacity: 0 }
                          }
                          transition={{ duration: 0.15 }}
                        >
                          <Loader2
                            size={16}
                            strokeWidth={1.5}
                            className="animate-spin"
                          />
                          {t('form.sending')}
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          className="inline-flex items-center gap-2"
                          initial={
                            prefersReducedMotion
                              ? { opacity: 1 }
                              : { opacity: 0 }
                          }
                          animate={{ opacity: 1 }}
                          exit={
                            prefersReducedMotion
                              ? { opacity: 0 }
                              : { opacity: 0 }
                          }
                          transition={{ duration: 0.15 }}
                        >
                          {t('form.submit')}
                          <Send
                            size={16}
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
