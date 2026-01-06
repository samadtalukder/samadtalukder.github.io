'use client';

import { getRecommendations } from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function RecommendationsSection() {
  const recommendations = getRecommendations();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="recommendations" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Recommendations</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <Card className="p-8 md:p-12 shadow-xl min-h-[400px] flex flex-col">
                    <Quote className="w-12 h-12 text-blue-600 mb-6 opacity-30 flex-shrink-0" />

                    <p className="text-gray-700 text-lg leading-relaxed mb-8 italic flex-1 overflow-y-auto max-h-[240px]">
                      "{rec.feedback}"
                    </p>

                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {rec.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-800 text-lg truncate">{rec.name}</div>
                        <div className="text-purple-600 font-medium truncate">{rec.position}</div>
                        <div className="text-gray-600 text-sm truncate">{rec.company}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
