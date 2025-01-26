import React from "react";

const Home = ({resumeBasicInfo}) => {
    let fullName = resumeBasicInfo ? resumeBasicInfo.name : "";
    let profilePic = resumeBasicInfo ? resumeBasicInfo.profilePic : "";

    const handleHireMe = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        window.location.href = '/contact';
    };

    return (
        <section
            id="home"
            className="w-full flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 py-16 md:py-24 justify-center font-poppins"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <h1 className="text-lg md:text-xl font-medium text-[#222222]">Hi, I'm</h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0077FF]">{fullName}</h2>
                    <h3 className="text-2xl md:text-4xl font-extrabold text-[#222222]">
                        An Android & Flutter expert
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 max-w-md">
                        Mobile app developer focused on crafting clean & user-friendly mobile applications, passionate about building excellent software.
                    </p>

                    <div className="flex space-x-4 pt-4">
                        <button
                            onClick={handleHireMe}
                            className="px-4 md:px-6 py-2 bg-[#0077FF] text-white font-medium rounded-full hover:bg-[#0066CC] transition"
                        >
                            Hire Me
                        </button>
                        <button className="px-4 md:px-6 py-2 border-2 border-[#0077FF] text-[#0077FF] font-medium rounded-full hover:bg-[#0077FF] hover:text-white transition">
                            Download CV
                        </button>
                    </div>

                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full">
                        <img
                            src={profilePic}
                            alt={fullName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
