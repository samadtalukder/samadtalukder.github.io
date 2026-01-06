import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutMeSection from '@/components/sections/AboutMeSection';
import HireMeSection from '@/components/sections/HireMeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import RecommendationsSection from '@/components/sections/RecommendationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutMeSection />
        <HireMeSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <PortfolioSection />
        <RecommendationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
