import React from "react";

const About = ({resumeBasicInfo}) => {
    let profilePic = resumeBasicInfo ? resumeBasicInfo.profilePic : "";
    let aboutMe = resumeBasicInfo ? resumeBasicInfo.about : "";
    let yearsExp = resumeBasicInfo ? resumeBasicInfo.yearsExperience : "";

    return (
        <section id="about" className="py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-32 font-poppins">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                <div className="flex justify-center md:justify-start">
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-4 text-center md:text-left">
                    <p className="text-lg font-medium text-[#0077FF]">About Me</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0077FF]">
                        {yearsExp}
                    </h2>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#222222]">
                        on Mobile Application
                    </h2>
                    <p className="text-sm md:text-base text-[#222222] max-w-2xl">
                        {aboutMe}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;