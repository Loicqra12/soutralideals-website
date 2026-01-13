import { Hero } from '../components/sections/Hero';
import { StatsSection } from '../components/sections/StatsSection';
import { MarqueeSection } from '../components/ui/MarqueeSection';
import { Ecosystem } from '../components/sections/Ecosystem';
import { PartnersSection } from '../components/sections/PartnersSection';
import { Services } from '../components/sections/Services';
import { Portfolio } from '../components/sections/Portfolio';
import { Community } from '../components/sections/Community';
import { IdentificationApp } from '../components/sections/IdentificationApp';
import { Testimonials } from '../components/sections/Testimonials';
import { Newsletter } from '../components/sections/Newsletter';
import { FAQ } from '../components/sections/FAQ';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SEO } from '../components/seo/SEO';

/**
 * HomePage - Copie exacte du App.tsx actuel (one-page)
 * Cette page est temporaire pour migration progressive
 * Elle sera refactorisée pour ne garder que Hero + Stats + CTA
 */
export const HomePage = () => {
    return (
        <>
            <SEO
                title="Accueil"
                description="La plateforme tout-en-un pour les travailleurs indépendants en Côte d'Ivoire. Trouvez des missions, gérez votre activité et rejoignez une communauté."
            />
            <Hero />
            <StatsSection />
            <MarqueeSection />
            <Ecosystem />
            <Services />
            <Portfolio />
            <PartnersSection />
            <Community />
            <Testimonials />
            <Newsletter />
            <FAQ />
            <IdentificationApp />

            <FinalCTA />
        </>
    );
};
