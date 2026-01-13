'use client';

import {getRecommendations} from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import {Card} from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import {ArrowLeft, ArrowRight, Quote} from 'lucide-react';
import {useCallback} from 'react';

export default function RecommendationsSection() {
    const recommendations = getRecommendations();
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        dragFree: false,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section id="recommendations" className="py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <p className="text-xl font-montserrat text-center font-semibold text-brand-orange mb-2">Endorsements</p>
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Word on the street about me</h2>
                </ScrollReveal>

                <div className="max-w-7xl mx-auto">

                    <div className="overflow-hidden cursor-grab active:cursor-grabbing mb-8" ref={emblaRef}>
                        <div className="flex">
                            {recommendations.map((rec, index) => (
                                <div key={index}
                                     className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pr-4">
                                    <Card className="p-6 flex flex-col h-full">
                                        <Quote className="w-8 h-8 text-brand-orange mb-4 opacity-30 shrink-0"/>

                                        <p className="text-gray-700 text-base leading-relaxed mb-6 italic flex-1 line-clamp-3">
                                            {rec.feedback}
                                        </p>

                                        <div className="flex items-center gap-3 shrink-0">
                                            <div
                                                className="w-12 h-12 rounded-full bg-linear-to-br from-[#213448] to-[#FD8A6B] flex items-center justify-center text-white text-lg font-bold shrink-0">
                                                {rec.name.charAt(0)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div
                                                    className="font-bold text-brand-orange text-base truncate">{rec.name}</div>
                                                <div className="text-gray-600 text-sm truncate">{rec.position}</div>
                                                <div className="text-gray-600 text-xs truncate">{rec.company}</div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation buttons at bottom */}
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-110"
                            aria-label="Previous recommendation"
                        >
                            <ArrowLeft className="w-6 h-6"/>
                        </button>

                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-110"
                            aria-label="Next recommendation"
                        >
                            <ArrowRight className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
