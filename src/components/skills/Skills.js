import React from "react";


const CircularProgressBar = ({value, size = 100}) => {
    const clampedValue = Math.max(0, Math.min(100, value));

    return (
        <div className="relative">
            <svg
                width={size}
                height={size}
                viewBox="0 0 36 36"
                className="block"
            >
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-gray-300"
                    strokeWidth="4"
                />
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className='stroke-[#0077FF]'
                    strokeWidth="4"
                    strokeDasharray="100"
                    strokeDashoffset={100 - clampedValue}
                    transform="rotate(-90 18 18)"
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-lg font-bold">{clampedValue}%</span>
            </div>
        </div>
    );
};

const Skills = ({skillsInfo}) => {
    return (
        <section
            id="skills"
            className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 font-poppins"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 justify-center">
                    {skillsInfo.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center space-y-4"
                        >
                            <CircularProgressBar value={skill.rating} size={130}/>
                            <p className="text-base md:text-lg font-semibold text-center">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;