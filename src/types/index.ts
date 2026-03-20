export type Locale = 'en' | 'es';

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'architecture' | 'cloud' | 'tools';
  level: 'primary' | 'production' | 'familiar';
}
