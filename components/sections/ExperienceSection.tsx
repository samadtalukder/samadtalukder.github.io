import { experience } from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TimelineItem from '@/components/shared/TimelineItem';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Experience</h2>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {experience.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.position}
              subtitle={exp.company}
              period={`${exp.startDate} - ${exp.endDate}`}
              description={exp.responsibility}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
