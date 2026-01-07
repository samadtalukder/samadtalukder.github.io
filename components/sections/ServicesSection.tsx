'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/card';
import { Smartphone, Users, Globe } from 'lucide-react';

const services = [
  {
    title: 'App Development',
    description: 'Building native and cross-platform mobile applications for Android and iOS with modern technologies like Kotlin, Flutter, and React Native.',
    icon: Smartphone,
  },
  {
    title: 'Mentorship',
    description: 'Guiding aspiring developers through personalized mentorship programs, code reviews, and career development strategies.',
    icon: Users,
  },
  {
    title: 'Web Development',
    description: 'Creating responsive and performant web applications using modern frameworks and best practices for optimal user experience.',
    icon: Globe,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-gray-600 text-lg mb-2">My Services</p>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Diverse services to meet needs</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={0.1 * index}>
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FD853A] to-[#fc7422] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
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
