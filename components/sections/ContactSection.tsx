'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact</h2>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Message Section */}
          <ScrollReveal delay={0.2}>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>
                I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
              </p>
            </div>
          </ScrollReveal>

          {/* Email Card */}
          <ScrollReveal delay={0.3}>
            <Card className="p-8 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Message me here</h3>
                <a
                  href="mailto:samadtalukdar6@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors"
                >
                  samadtalukdar6@gmail.com
                </a>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
