import React from "react";


const Skills = ({skillsInfo}) => {
    let skillData;
    skillData = skillsInfo.map((skill) => (
        <div className="flex flex-col items-center space-y-2">
            <div className="relative flex items-center justify-between rounded-full">
                <CircularProgressBar value={skill.rating} size={130}/>
            </div>
            <div className="text-center">
                <p className="text-lg font-medium">{skill.name}</p>
            </div>
        </div>
    ));

    return (
        <section id="skills" className="flex flex-col pt-60 lg:pt-65">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
                <div className="flex justify-center space-x-32">
                    {skillData}
                </div>
            </div>

        </section>
    );
}

export default Skills;


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
                {/* Background circle */}
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-gray-300"
                    strokeWidth="4"
                />

                {/* Progress circle */}
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className='stroke-blue-500'
                    strokeWidth="4"
                    strokeDasharray="100"
                    strokeDashoffset={100 - clampedValue}
                    transform="rotate(-90 18 18)"
                    strokeLinecap="round"
                />
            </svg>

            {/* Percentage text */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            >
                <span className="text-lg font-bold">{clampedValue}%</span>
            </div>
        </div>
    );
};