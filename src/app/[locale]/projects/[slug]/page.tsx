import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { projects } from '@/content/projects';
import { CaseStudy } from '@/components/case-study/case-study';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const validSlugs = projects.map((p) => p.slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!validSlugs.includes(slug)) return {};

  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const t = await getTranslations({
    locale,
    namespace: `caseStudies.${project.translationKey}`,
  });

  return {
    title: `${t('title')} | Cesar Ortiz`,
    description: t('subtitle'),
  };
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    validSlugs.map((slug) => ({ locale, slug })),
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <CaseStudy
      slug={slug}
      translationKey={project.translationKey}
      codeUrl={project.codeUrl}
      liveUrl={project.liveUrl}
    />
  );
}
