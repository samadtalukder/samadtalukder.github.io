import React, {useState} from "react";

const Contacts = ({contactInfo}) => {
    let email = contactInfo ? contactInfo.email : "";
    let mobileNo = contactInfo ? contactInfo.mobile : "";

    const [copiedField, setCopiedField] = useState(null);

    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (
        <section
            id="contact"
            className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto rounded-lg py-12 px-6 md:px-10 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                    Have a project idea to collaborate with?
                </h2>
                <p className="text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
                    What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply
                    want to connect.
                </p>

                <div className="space-y-4 mb-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <span className="flex items-center text-base md:text-lg">
                            <i className="fa-regular fa-envelope mr-2"/>
                            <span className="font-semibold text-xl md:text-2xl">{email}</span>
                        </span>
                        <button
                            onClick={() => copyToClipboard(email, 'email')}
                            className="text-[#0077FF] hover:text-[#222222] transition-colors">
                            <i className={`fa-regular fa-copy ${copiedField === 'email' ? 'text-green-500' : ''}`}/>
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <span className="flex items-center text-base md:text-lg">
                            <i className="fa-solid fa-phone mr-2"/>
                            <span className="font-semibold text-xl md:text-2xl">{mobileNo}</span>
                        </span>
                        <button
                            onClick={() => copyToClipboard(mobileNo, 'phone')}
                            className="text-[#0077FF] hover:text-[#222222] transition-colors">
                            <i className={`fa-regular fa-copy ${copiedField === 'phone' ? 'text-green-500' : ''}`}/>
                        </button>
                    </div>
                </div>

                <div className="mt-6 md:mt-8">
                    <h3 className="text-base md:text-lg mb-4">You may also find me on these platforms!</h3>
                    <div className="flex justify-center gap-4 md:gap-6 text-xl md:text-2xl">
                        {contactInfo.socialMedia.map((link) => (
                            <a
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0077FF] hover:text-[#222222] transition-colors"
                                aria-label={`${link.platform} profile`}
                            >
                                <i className={`${link.icon} text-xl md:text-2xl`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Contacts;