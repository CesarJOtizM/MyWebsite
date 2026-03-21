import type { MetadataRoute } from 'next';

const baseUrl = 'https://cesarortiz.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'es'];
  const routes = [
    '',
    '/projects/nevada-demo',
    '/projects/meeting-scheduler',
    '/projects/nevadatech',
    '/cv',
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  );
}
