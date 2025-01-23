import {Typewriter} from "react-simple-typewriter";
import {Github, BookOpen, Linkedin, Mail} from "lucide-react";
import React from "react";


const Home = ({resumeBasicInfo}) => {
    let fullName = resumeBasicInfo ? resumeBasicInfo.name : "";
    let title = resumeBasicInfo ? resumeBasicInfo.title : "";
    let about = resumeBasicInfo ? resumeBasicInfo.bio : "";
    let profilePic = resumeBasicInfo ? resumeBasicInfo.profilePic : "";
    let socialLinks = resumeBasicInfo ? resumeBasicInfo.social : [];
    let typeWriter = resumeBasicInfo ? resumeBasicInfo.typeWriter : [];

    const getIcon = (platform) => {
        const icons = {
            linkedin: (
                <Linkedin
                    className="w-8 h-8 text-white group-hover:text-[#0077B6] relative transition-colors duration-300"/>
            ),
            github: (
                <Github
                    className="w-8 h-8 text-white group-hover:text-[#0077B6] relative transition-colors duration-300"/>
            ),
            medium: (
                <BookOpen
                    className="w-8 h-8 text-white group-hover:text-[#0077B6] relative transition-colors duration-300"/>
            ),
            facebook: (
                <Mail
                    className="w-8 h-8 text-white group-hover:text-[#0077B6] relative transition-colors duration-300"/>
            ),
        };
        return icons[platform] || null;
    };

    return (
        <section
            id="home" className="w-full flex flex-col pt-40 lg:pt-35 pr-32 lg:pr-32 pl-32 lg:pl-32 justify-center">

            <div className="flex flex-col md:flex-row items-center justify-between font-poppins mt-8">

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-xl md:text-2xl font-medium text-[#222222]">Hi, I'm</h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#0077FF] mt-2">Samad Talukder</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-[#222222] mt-2">
                        <Typewriter
                            words={['{An Android & Flutter expert.', 'Passionate about clean code.']}
                            loop
                            cursor
                            cursorStyle="}"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h3>
                    <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-2xl">
                        Mobile app developer focused on crafting clean & user-friendly mobile
                        applications, passionate about building excellent software.
                    </p>
                </div>

                <div className="w-[350px] h-[350px] overflow-hidden">
                    <img src={profilePic} alt={fullName} className="w-full h-full object-cover rounded-full"/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between font-poppins w-full">
                <div className="flex space-x-4">
                    <button
                        className="px-6 py-2 bg-[#0077FF] text-white font-medium rounded-full shadow-md hover:bg-[#0077FF]">
                        Hire Me
                    </button>
                    <button
                        className="px-6 py-2 border-2 border-[#0077FF] text-[#0077FF] font-medium rounded-full hover:bg-[#0077FF] hover:text-white">
                        Download CV
                    </button>
                </div>
                <div className="flex space-x-4 pr-24 lg:pr-24">
                    <a href="#" className="text-gray-600 hover:text-[#0077FF]">
                        <i className="fab fa-linkedin-in text-2xl"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#0077FF]">
                        <i className="fab fa-github text-2xl"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#0077FF]">
                        <i className="fab fa-x-twitter text-2xl"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#0077FF]">
                        <i className="fab fa-stack-overflow text-2xl"></i>
                    </a>
                </div>
            </div>

        </section>


    );
};

export default Home;
