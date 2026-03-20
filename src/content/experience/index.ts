export const experienceOrder = [
  'nevadatech',
  'momento',
  'flou',
  'mox',
  'frava',
] as const;

export type ExperienceKey = (typeof experienceOrder)[number];
