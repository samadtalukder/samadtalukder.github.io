import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeSection from '@/components/sections/HomeSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import HireMeSection from '@/components/sections/HireMeSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import BlogSection from '@/components/sections/BlogSection';
import RecommendationsSection from '@/components/sections/RecommendationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HomeSection />
        <AboutMeSection />
        <ServicesSection />
        {/* <HireMeSection /> */}
        <ResumeSection />
        <ProjectsSection />
        <BlogSection />
        <RecommendationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
