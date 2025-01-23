import React from "react";

const Resume = ({experienceInfo}) => {

    return (
        <section id="resume" className="pt-60 lg:pt-65">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
                <div className="space-y-8">
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-[#5383eb]">Senior Android Developer</h3>
                        <p className="text-gray-600">Tech Company • 2020 - Present</p>
                        <p className="mt-4">
                            Led the development of multiple successful Android applications, implementing modern
                            architecture patterns and best practices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;