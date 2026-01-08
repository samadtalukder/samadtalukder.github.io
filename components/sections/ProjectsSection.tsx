'use client';

import { projects } from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import PortfolioCard from '@/components/shared/PortfolioCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-[#FD853A] font-medium text-lg mb-2">Latest Portfolio</p>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Transforming Ideas into Exceptional​</h2>
        </ScrollReveal>

        {/* Complete Apps Section */}
        <div className="mb-16 max-w-6xl mx-auto">
          <ScrollReveal delay={0.2}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Available on app stores</h3>

          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.completeApps.map((item) => (
              <PortfolioCard
                key={item.name}
                name={item.name}
                category={item.category}
                image={item.image}
                url={item.url}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Small Projects Section */}
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.4}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Available on GitHub</h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.smallProjects.map((item) => (
              <PortfolioCard
                key={item.name}
                name={item.name}
                category={item.category}
                image={item.image}
                url={item.url}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
