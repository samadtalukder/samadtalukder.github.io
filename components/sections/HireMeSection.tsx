import { hireMe } from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/card';
import { Smartphone, GraduationCap } from 'lucide-react';

const icons = [Smartphone, GraduationCap];

export default function HireMeSection() {
  return (
    <section id="hire-me" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Hire Me</h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {hireMe.map((service, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={index} delay={index * 0.2}>
                <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service}</h3>
                  <p className="text-gray-600">
                    {index === 0
                      ? "To develop or upgrade your android projects, you can hire me."
                      : "If you want me as a trainer regarding Android, Kotlin please let me know."}
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
