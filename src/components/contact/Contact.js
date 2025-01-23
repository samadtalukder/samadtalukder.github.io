import React from "react";

const Contacts = ({contactInfo}) => {
    let email = contactInfo ? contactInfo.email : "";
    let latitude = contactInfo ? contactInfo.latitude : "";
    let longitude = contactInfo ? contactInfo.longitude : "";

    return (
        <section id="contact" className="pt-60 lg:pt-65">
            <div className="bg-[#F8F8F8] p-20">
                <h2 className="text-3xl font-bold text-center mb-12">Have a project idea to collaborate with?</h2>
                <div className="max-w-lg mx-auto">
                        <p>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
                        <p>samadtalukdar6@gmail.com</p>
                        <p>+60 1139219802</p>
                        <p>You may also find me on these platforms!</p>
                    <div className="flex space-x-4 mr-20 mt-4">
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

            </div>
        </section>
    );

}

export default Contacts;