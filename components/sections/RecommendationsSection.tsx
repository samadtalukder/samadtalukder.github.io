'use client';

import { getRecommendations } from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RecommendationsSection() {
  const recommendations = getRecommendations();
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    dragFree: false,
    containScroll: 'trimSnaps'
  });

  return (
    <section id="recommendations" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-gray-600 text-lg mb-2">Testimonial of few folks</p>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Word on the street about me</h2>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto relative group">
          {/* Left swipe indicator */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none hidden lg:flex items-center">
            <div className="ml-2 animate-pulse">
              <ChevronLeft className="w-8 h-8 text-[#FD853A] opacity-60" />
            </div>
          </div>

          {/* Right swipe indicator */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none hidden lg:flex items-center justify-end">
            <div className="mr-2 animate-pulse">
              <ChevronRight className="w-8 h-8 text-[#FD853A] opacity-60" />
            </div>
          </div>

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-0.5rem)] lg:flex-[0_0_calc(33.333%-0.75rem)] min-w-0">
                  <Card className="p-6 shadow-lg h-full flex flex-col">
                    <Quote className="w-8 h-8 text-[#FD853A] mb-4 opacity-30 flex-shrink-0" />

                    <p className="text-gray-700 text-base leading-relaxed mb-6 italic flex-1 line-clamp-3">
                      "{rec.feedback}"
                    </p>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#213448] to-[#FD8A6B] flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                        {rec.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[#FD853A] text-base truncate">{rec.name}</div>
                        <div className="text-gray-600 text-sm truncate">{rec.position}</div>
                        <div className="text-gray-600 text-xs truncate">{rec.company}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
