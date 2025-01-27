import React from "react";

const Testimonials = ({testimonialInfo}) => {
    /*let testimonialData;
    testimonialData = testimonialInfo.map((testimonial) => (
        <div
            key={testimonial}
            className="bg-[#eaf1f8] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-[#5383eb] mb-2">
                    {testimonial.name}
                </h3>
                <p className="text-gray-600">
                    {testimonial.feedback}
                </p>
            </div>
        </div>
    ));*/

    return (
        <section id="testimonials" className="py-12 ">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
                    lectus netus in. Aliquet donec morbi convallis pretium.
                </p>
            </div>
            <div className="flex justify-center mt-8">
                {testimonialInfo.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className={`transition-opacity duration-500 ease-in-out ${
                            testimonial.active ? "opacity-100" : "opacity-40"
                        } max-w-lg mx-4 bg-gray-100 p-6 rounded-lg shadow-md`}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.image}
                                alt={`${testimonial.name}'s avatar`}
                                className="w-16 h-16"
                            />
                            <div className="ml-4">
                                <p className="font-bold">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
                {testimonialInfo.map((testimonial) => (
                    <button
                        key={testimonial.id}
                        className={`w-3 h-3 rounded-full ${
                            testimonial.isActive ? "bg-orange-500" : "bg-gray-300"
                        }`}
                    ></button>
                ))}
            </div>
        </section>
        /*<section id="testimonials" className="flex flex-col pt-60 lg:pt-65">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">What they say about me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialData}
                </div>

            </div>

        </section>*/
    );

}

export default Testimonials;