import './App.css';
import React from 'react';
import resumeData from './assets/resume_data.json';
import Home from "./components/home/Home";
import NavBar from "./components/NavBar";
import Blog from "./components/blog/Blog";
import Contacts from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import SkillsDisplay from "./components/skills/Skills";
import Services from "./components/services/Services";
import Testimonials from "./components/recommendations/Testimonials";

const App = () => {

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <NavBar/>

            {/* Home Section */}
            <Home resumeBasicInfo={resumeData.about}/>

            {/* About Section */}
            <About resumeBasicInfo={resumeData.about}/>

            {/* Services Section */}
            <Services servicesInfo={resumeData.services}/>

            {/* Skills Section */}
            <Skills skillsInfo={resumeData.skills}/>

            {/* Resume Section */}
            <Resume experienceInfo={resumeData.experience}/>

            {/* Portfolio Section */}
            <Portfolio portfolioInfo={resumeData.portfolioInfo}/>

            {/* Testimonials Section */}
            <Testimonials testimonialInfo={resumeData.recommendations}/>

            {/* Blog Section */}
            <Blog blogInfo={resumeData.blog}/>

            {/* Contact Section */}
            <Contacts/>

        </div>
    );
};

export default App;
/*function App() {
    return (
        <div className="App">
            <nav className="navbar">
                <div className="container">
                    <h1 className="nav-logo">John Doe</h1>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <header className="header">
                <div className="container">
                    <h1 className="name">John Doe</h1>
                    <p className="title">Senior Android Developer</p>
                </div>
            </header>
            <section id="about" className="section">
                <div className="container">
                    <h2>About Me</h2>
                    <p>
                        I am a Senior Android Developer with 7 years of resume
                        specializing in mobile app development. I excel in building
                        high-quality, scalable applications using Kotlin, Java, and Jetpack
                        Compose.
                    </p>
                </div>
            </section>
            <section id="resume" className="section">
                <div className="container">
                    <h2>Resume</h2>
                    {/!* Content *!/}
                </div>
            </section>

            <section id="education" className="section">
                <div className="container">
                    <h2 className="section-title">Education</h2>
                    <div className="education-timeline">
                        <div className="education-item left">
                            <div className="content">
                                <h3>Eastern University (BD)</h3>
                                <h4>BSC in CSE</h4>
                                <div className="badge">2017-2020</div>
                            </div>
                        </div>
                        <div className="education-item right">
                            <div className="content">
                                <div className="education-item-title">Feni Computer Institute</div>
                                <div className="education-item-garde">Diploma in Engineering</div>
                                <div className="badge">2012-2016</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="skills" className="section">
                <div className="container">
                    <h2>Skills</h2>
                    {/!* Content *!/}
                </div>
            </section>
            <section id="projects" className="section">
                <div className="container">
                    <h2>Projects</h2>
                    {/!* Content *!/}
                </div>
            </section>
            <section id="blogs" className="section">
                <div className="container">
                    <h2>Blogs</h2>
                    {/!* Content *!/}
                </div>
            </section>
            <section id="contact" className="section">
                <div className="container">
                    <h2>Contact</h2>
                    <p>Email: johndoe@example.com</p>
                    <p>LinkedIn: linkedin.com/in/johndoe</p>
                    <p>GitHub: github.com/johndoe</p>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <p>© 2025 John Doe. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;*/


/*function App() {
    return (
        <div className="App">
            <About resumeBasicInfo={resumeData.about}/>
            <Education educationInfo={resumeData.education}/>
            <Resume experienceInfo={resumeData.resume}/>
            <Portfolio portfolioInfo={resumeData.portfolio}/>
            <Recommendation recommendationInfo={resumeData.recommendations}/>
            <Skills skillsInfo={resumeData.skills}/>
            <Contact contactInfo={resumeData.contact}/>
        </div>
    );
}

export default App;*/
