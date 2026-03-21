export interface ProjectData {
  slug: string;
  translationKey: string;
  codeUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    slug: 'nevada-demo',
    translationKey: 'inventory',
    liveUrl: 'https://jubilant-octo-invention-kappa.vercel.app/es/login',
    featured: true,
  },
  {
    slug: 'meeting-scheduler',
    translationKey: 'scheduler',
    codeUrl: 'https://github.com/CesarJOtizM/didactic-doodle',
  },
  {
    slug: 'nevadatech',
    translationKey: 'nevadatech',
    liveUrl: 'https://www.nevadatech.co/',
  },
];
