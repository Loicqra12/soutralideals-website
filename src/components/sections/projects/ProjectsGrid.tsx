import { motion } from 'framer-motion';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { MobileProjectSection } from './MobileProjectSection';
import { DashboardProjectSection } from './DashboardProjectSection';
import { WebProjectSection } from './WebProjectSection';
import { RecensementProjectSection } from './RecensementProjectSection';

export const ProjectsGrid = () => {
  return (
    <SectionWrapper id="projects-grid" bg="dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-5xl">
            Quatre briques,{' '}
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              une plateforme
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            Pilotage, mobile, marketplace et terrain — chaque module en détail, au service de la même
            vision.
          </p>
        </motion.div>

        <div className="space-y-24">
          <MobileProjectSection />
          <DashboardProjectSection />
          <WebProjectSection />
          <RecensementProjectSection />
        </div>
      </div>
    </SectionWrapper>
  );
};
