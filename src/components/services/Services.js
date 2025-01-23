import React from "react";
import profilePic from "../../logo512.png";

const Services = ({ servicesInfo }) => {
    return (
        <section id="services" className="w-full flex flex-col pt-60 lg:pt-60 justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
                <div className="flex flex-row items-center justify-center gap-x-8">
                    {servicesInfo.map((service) => (
                        <div
                            key={service}
                            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-[#0077FF] group"
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <img
                                    src={profilePic}
                                    alt={"fullName"}
                                    className="w-1/2 h-1/2 object-cover rounded-full self-center transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                                />
                                <h3 className="text-xl font-semibold text-[#0077FF] text-center transition-colors duration-300 group-hover:text-white">
                                    {service}
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