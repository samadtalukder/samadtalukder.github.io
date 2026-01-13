'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import {Card} from '@/components/ui/card';
import {getServiceIcon} from '@/lib/icons';
import resumeData from '@/public/resume_data.json';

export default function ServicesSection() {
    const services = resumeData.services;
    return (
        <section id="services" className="py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <p className="font-montserrat text-center font-semibold text-brand-orange text-xl mb-2">My
                        Services</p>
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">I Would Be A Good Partner With
                        You​</h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = getServiceIcon(service.icon);
                        return (
                            <ScrollReveal key={service.title} delay={0.1 * index}>
                                <Card
                                    className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                                    <div
                                        className="w-16 h-16 rounded-full bg-linear-to-br from-brand-orange to-brand-orange/90 flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-white"/>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>

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
