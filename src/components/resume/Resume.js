import React from "react";

const Resume = ({experienceInfo}) => {

    return (
        <section id="resume" className="pt-60 lg:pt-65 font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
                <div className="space-y-8">
                    {experienceInfo.map((experience) => (
                        <div
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-[#0077FF]">{experience.company}</h3>
                            <p className="text-gray-600">Tech Company
                                • {experience.startDate} - {experience.endDate}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Resume;