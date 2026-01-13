'use client';

import {about, contact} from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import {Card} from '@/components/ui/card';
import {Mail, MapPin, Phone} from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4">

                <ScrollReveal>
                    <p className="text-xl font-montserrat text-center font-semibold text-brand-orange mb-2">Contact</p>
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Let’s Talk About Ideas​</h2>
                </ScrollReveal>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Map Section */}
                    <ScrollReveal delay={0.3}>
                        <Card className="p-0 overflow-hidden h-full">
                            <div className="relative h-full min-h-100">
                                <iframe
                                    src={`https://www.google.com/maps?q=${contact.latitude},${contact.longitude}&hl=en&z=14&output=embed`}
                                    width="100%"
                                    height="100%"
                                    style={{border: 0}}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                ></iframe>
                                <div
                                    className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-brand-orange"/>
                                    <span className="font-medium text-gray-800">Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>

                    {/* Contact Info Card */}
                    <ScrollReveal delay={0.4}>
                        <Card
                            className="p-8 bg-white hover:shadow-lg transition-shadow duration-300 h-full flex items-center">
                            <div className="w-full space-y-6">
                                <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-6">Message me here</h3>

                                {/* Mobile Number */}
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4 text-white"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-sm font-montserrat font-semibold text-brand-dark mb-1">Mobile no</h4>
                                        <p className="text-gray-800 font-normal">{about.mobile}</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="w-4 h-4 text-white"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-sm font-montserrat font-semibold text-brand-dark mb-1">Email</h4>
                                        <a
                                            href={`mailto:${about.email}`}
                                            className="text-gray-800 font-normal hover:text-brand-orange transition-colors break-all"
                                        >
                                            {about.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4 text-white"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-montserrat font-medium text-brand-dark mb-1">Location</h4>
                                        <p className="font-normal text-gray-800 ">{about.address}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
