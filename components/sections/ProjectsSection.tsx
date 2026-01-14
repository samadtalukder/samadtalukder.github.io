'use client';

import {projects} from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import PortfolioCard from '@/components/shared/PortfolioCard';

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <p className="text-lg sm:text-xl font-montserrat text-center font-semibold text-brand-orange mb-2">Latest
                        Portfolio</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-anton font-bold text-center text-gray-800 mb-8 md:mb-12 lg:mb-16">Transforming Ideas
                        into Exceptional​</h2>
                </ScrollReveal>

                {/* Complete Apps Section */}
                <div className="mb-8 md:mb-12 lg:mb-16 max-w-6xl mx-auto">
                    <ScrollReveal delay={0.2}>
                        <h3 className="text-xl md:text-2xl font-montserrat font-bold text-gray-800 mb-3 md:mb-4">Available on app stores</h3>

                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                        <h3 className="text-xl md:text-2xl font-montserrat font-bold text-gray-800 mb-3 md:mb-4">Available on GitHub</h3>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
