import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Resume } from '@/components/sections/resume';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}
