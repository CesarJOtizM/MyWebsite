export const categoryOrder = [
  'frontend',
  'backend',
  'database',
  'architecture',
  'cloud',
  'tools',
] as const;

export type CategoryKey = (typeof categoryOrder)[number];

export interface SkillItem {
  name: string;
  level: 'primary' | 'production' | 'familiar';
}
