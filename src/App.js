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
            <Portfolio portfolioInfo={resumeData.portfolio}/>

            {/* Testimonials Section */}
            <Testimonials testimonialInfo={resumeData.recommendations}/>

            {/* Blog Section */}
            <Blog blogInfo={resumeData.blog}/>

            {/* Contact Section */}
            <Contacts contactInfo={resumeData.contact}/>

        </div>
    );
};

export default App;

