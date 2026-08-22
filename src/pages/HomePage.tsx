import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { SkillsMarquee } from '../components/SkillsMarquee';
import { Milestones } from '../components/Milestones';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ScrollSection3D } from '../components/ScrollSection3D';
import { useRouter } from '../router/RouterContext';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="relative z-10">
      <ScrollSection3D variant="rise" offsetY={60} rotationDeg={4}>
        <Hero onOpenResume={() => navigate('#/resume')} />
      </ScrollSection3D>

      <ScrollSection3D variant="tiltLeft" rotationDeg={5}>
        <About />
      </ScrollSection3D>

      <ScrollSection3D variant="tiltRight" rotationDeg={5}>
        <Projects />
      </ScrollSection3D>

      <ScrollSection3D variant="scale">
        <SkillsMarquee />
      </ScrollSection3D>

      <ScrollSection3D variant="rise" rotationDeg={4}>
        <Milestones />
      </ScrollSection3D>

      <ScrollSection3D variant="tiltLeft" rotationDeg={5}>
        <Contact onOpenResume={() => navigate('#/resume')} />
      </ScrollSection3D>

      <ScrollSection3D variant="scale" offsetY={40} rotationDeg={3}>
        <Footer />
      </ScrollSection3D>
    </div>
  );
};
