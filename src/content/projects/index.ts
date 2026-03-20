export interface ProjectData {
  slug: string;
  translationKey: string;
  codeUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    slug: 'nevada-inventory',
    translationKey: 'inventory',
    codeUrl: 'https://github.com/CesarJOtizM/improved-parakeet',
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
