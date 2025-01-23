import React from "react";

const About = ({resumeBasicInfo}) => {
    let profilePic = resumeBasicInfo ? resumeBasicInfo.profilePic : "";

    return (
        <section id="about" className="py-16 flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-between pr-24 lg:pr-24">
                <div className="w-[500px] h-[500px] md:items-end p-16 lg:p-20">
                    <img src={profilePic} alt={"fullName"} className="object-cover rounded-full"/>
                </div>
                <div className="flex flex-col md:items-start md:text-start">
                    <p className="text-xl md:text-xl font-medium text-[#0077FF]">About Me</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#0077FF] mt-6">7+ Year's Experience</h2>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#222222] mt-3">on Mobile Application</h2>
                    <p className="mt-4 text-[#222222] font-normal text-sm md:text-base max-w-2xl">Hello there! I'm Samad
                        Talukder. I specialize in native android and flutter, and I'm deeply passionate and committed to
                        my craft. With 7 years of experience as a mobile application developer.</p>
                </div>
            </div>
        </section>
    );
};

export default About;