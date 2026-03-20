import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cesar Ortiz — Full Stack Developer & Founder',
    short_name: 'Cesar Ortiz',
    description: 'Full Stack Developer, CEO & Co-Founder of NevadaTech',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#38bdf8',
  };
}
