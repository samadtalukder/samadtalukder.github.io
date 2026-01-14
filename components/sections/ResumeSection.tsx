'use client';

import {education, experience} from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TimelineItem from '@/components/shared/TimelineItem';

export default function ResumeSection() {
    return (
        <section id="resume" className="py-16 md:py-20 lg:py-24"
                 style={{background: 'radial-gradient(ellipse at center, #FAFAFA 100%, #E9E3DE 0%)'}}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <p className="text-lg sm:text-xl font-montserrat text-center font-semibold text-brand-orange mb-2">Education &
                        Experience</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-anton font-bold text-center text-gray-800 mb-8 md:mb-12 lg:mb-16">Empowering Creativity
                        through​</h2>
                </ScrollReveal>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Experience Column */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-montserrat font-bold text-gray-800 mb-6 md:mb-8 text-center lg:text-left">
                            Experience
                        </h3>
                        <div>
                            {experience.map((exp, index) => (
                                <TimelineItem
                                    key={index}
                                    title={exp.position}
                                    subtitle={`${exp.company}, ${exp.location}`}
                                    period={`${exp.startDate} - ${exp.endDate}`}
                                    type="experience"
                                    index={index}
                                    isFirst={index === 0}
                                    isLast={index === experience.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-montserrat font-bold text-gray-800 mb-6 md:mb-8 text-center lg:text-left">
                            Education
                        </h3>
                        <div>
                            {education.map((edu, index) => (
                                <TimelineItem
                                    key={index}
                                    title={edu.degree}
                                    subtitle={`${edu.institution}, ${edu.location}`}
                                    period={`${edu.startYear} - ${edu.endYear}`}
                                    type="education"
                                    index={index}
                                    isFirst={index === 0}
                                    isLast={index === education.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
