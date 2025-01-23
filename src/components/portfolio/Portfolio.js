import React from "react";

const Portfolio = ({portfolioInfo}) => {

    return (
        <section id="portfolio" className="pt-60 lg:pt-65">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="bg-[#eaf1f8] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="h-48 bg-gray-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#5383eb] mb-2">
                                    Project {item}
                                </h3>
                                <p className="text-gray-600">
                                    A brief description of the project and its key features.
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