'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import {Card} from '@/components/ui/card';
import {getServiceIcon} from '@/lib/icons';
import resumeData from '@/public/resume_data.json';

export default function ServicesSection() {
    const services = resumeData.services;
    return (
        <section id="services" className="py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <p className="font-montserrat text-center font-semibold text-brand-orange text-lg sm:text-xl mb-2">My
                        Services</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12 lg:mb-16">I Would Be A Good Partner With
                        You​</h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = getServiceIcon(service.icon);
                        return (
                            <ScrollReveal key={service.title} delay={0.1 * index}>
                                <Card
                                    className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                                    <div
                                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br from-brand-orange to-brand-orange/90 flex items-center justify-center mb-4 md:mb-6">
                                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white"/>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-montserrat font-bold text-gray-800 mb-3 md:mb-4">{service.title}</h3>

                                    <p className="text-gray-600 leading-relaxed flex-1">
                                        {service.description}
                                    </p>
                                </Card>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
