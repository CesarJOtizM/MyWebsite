import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { HowIThink } from '@/components/sections/how-i-think';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { NevadaTech } from '@/components/sections/nevadatech';
import { Contact } from '@/components/sections/contact';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <About />
      <HowIThink />
      <Projects />
      <Experience />
      <Skills />
      <NevadaTech />
      <Contact />
    </main>
  );
}
