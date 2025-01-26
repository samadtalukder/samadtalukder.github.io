import React from "react";

const Portfolio = ({portfolioInfo}) => {

    return (
        <section id="portfolio" className="pt-60 lg:pt-65 font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioInfo.map((project) => (
                        <div
                            key={project.name}
                            className="bg-[#eaf1f8] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                            onClick={() => window.open(project.url, '_blank')}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#0077FF] mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600">
                                    {project.category} Project
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default Portfolio;