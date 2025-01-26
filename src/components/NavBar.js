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
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const navSections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Me' },
        { id: 'services', label: 'Services' },
        { id: 'skills', label: 'Skills' },
        { id: 'resume', label: 'Resume' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'blog', label: 'Blog' },
        { id: 'contact', label: 'Contact' }
    ];

    const NavLink = ({section, label}) => (
        <button
            onClick={() => scrollToSection(section)}
            className="w-full md:w-auto text-left md:text-center hover:text-[#0077FF] transition-colors duration-300 py-2 md:py-0"
        >
            {label}
        </button>
    );

    return (
        <nav className={`fixed w-full z-50 transition-all font-poppins duration-300 ${isScrolled ? 'shadow-md bg-white' : 'bg-white/90'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <span className="text-xl md:text-2xl font-poppins font-black text-[#222222]">{"{Samad Talukder}"}</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex font-poppins font-semibold text-[#222222] items-center space-x-6 lg:space-x-8">
                        {navSections.map((section) => (
                            <NavLink
                                key={section.id}
                                section={section.id}
                                label={section.label}
                            />
                        ))}
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className="text-[#333333] hover:text-[#0077FF] transition-colors duration-300"
                        >
                            {isMenuOpen ? <i className="fa-solid fa-xmark"/> : <i className="fa-solid fa-bars"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navSections.map((section) => (
                            <div
                                key={section.id}
                                className="border-b border-gray-200 last:border-b-0"
                            >
                                <NavLink
                                    section={section.id}
                                    label={section.label}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-[#0077FF] text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-[#0077FF] transition-colors duration-300 z-50"
                >
                    {/*<ChevronUp size={20} className="md:w-6 md:h-6"/>*/}
                    <i className="fa-solid fa-chevron-up md:w-6 md:h-6"/>
                </button>
            )}
        </nav>
    );
}

export default NavBar;