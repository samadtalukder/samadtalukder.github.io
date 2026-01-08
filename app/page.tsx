import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeSection from '@/components/sections/HomeSection';

// Lazy load below-the-fold sections for better performance
const AboutMeSection = dynamic(() => import('@/components/sections/AboutMeSection'));
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const ResumeSection = dynamic(() => import('@/components/sections/ResumeSection'));
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'));
const BlogSection = dynamic(() => import('@/components/sections/BlogSection'));
const RecommendationsSection = dynamic(() => import('@/components/sections/RecommendationsSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <HomeSection />
        <AboutMeSection />
        <ServicesSection />
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
