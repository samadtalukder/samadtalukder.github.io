import {ChevronUp, Menu, X} from "lucide-react";
import React, {useState, useEffect} from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
            setIsScrolled(window.scrollY > 50); // Add shadow when scrolled more than 50px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        // setIsMenuOpen(false);
    };


    const NavLink = ({section, label}) => (
        <button
            onClick={() => scrollToSection(section)}
            className="hover:text-[#0077FF] transition-colors duration-300"
        >
            {label}
        </button>
    );

    return (
        <nav className={`fixed w-full z-50 ${isScrolled ? 'shadow-md bg-white' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-poppins font-black text-[#333333]">{"{Samad Talukder}"}</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden font-poppins font-semibold md:flex text-[#333333] items-center space-x-8">
                        <NavLink section="home" label="Home"/>
                        <NavLink section="about" label="About Me"/>
                        <NavLink section="services" label="Services"/>
                        <NavLink section="skills" label="Skills"/>
                        <NavLink section="resume" label="Resume"/>
                        <NavLink section="portfolio" label="Portfolio"/>
                        <NavLink section="testimonials" label="Testimonials"/>
                        <NavLink section="blog" label="Blog"/>
                        <NavLink section="contact" label="Contact"/>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#15616D] hover:text-[#84BC9C]"
                        >
                            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {['home','about', 'skills', 'resume', 'portfolio','testimonials', 'blog', 'contact'].map((section) => (
                            <div key={section} className="block px-3 py-2 text-base font-medium">
                                <NavLink section={section}
                                         label={section.charAt(0).toUpperCase() + section.slice(1)}/>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-[#5383eb] text-white p-3 rounded-full shadow-lg hover:bg-[#4373db] transition-colors duration-300"
                >
                    <ChevronUp size={24}/>
                </button>
            )}
        </nav>
    );
}
export default NavBar;