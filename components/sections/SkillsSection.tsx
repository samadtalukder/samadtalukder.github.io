import { skills } from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SkillBar from '@/components/shared/SkillBar';
import { Card } from '@/components/ui/card';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Card className="max-w-3xl mx-auto p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
