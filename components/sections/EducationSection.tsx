import { education } from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TimelineItem from '@/components/shared/TimelineItem';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Education</h2>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              title={edu.degree}
              subtitle={edu.institution}
              period={`${edu.startYear} - ${edu.endYear}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
