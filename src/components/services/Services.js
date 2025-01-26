import React from "react";


const Services = ({ servicesInfo }) => {
    return (
        <section
            id="services"
            className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col justify-center font-poppins"
        >
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 place-items-center">
                    {servicesInfo.map((service) => (
                        <div
                            key={service}
                            className="w-full max-w-[250px] p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#0077FF] group"
                        >
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-24 h-24 md:w-32 md:h-32 object-cover transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                                />
                                <h3 className="text-base md:text-xl font-semibold text-[#0077FF] text-center transition-colors duration-300 group-hover:text-white">
                                    {service.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;