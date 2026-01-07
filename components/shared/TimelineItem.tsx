'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string | string[];
  index: number;
}

export default function TimelineItem({ title, subtitle, period, description, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row gap-4 md:gap-8 mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className="flex-1">
        <Card className={`p-6 shadow-lg hover:shadow-xl transition-shadow ${isLeft ? 'md:text-left' : 'md:text-left'}`}>
          <div className="flex items-center gap-2 mb-2 text-[#FD853A] font-semibold">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{period}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-[#FD853A] font-medium mb-3">{subtitle}</p>

          {description && (
            <div className={`text-gray-600 space-y-2 ${isLeft ? 'md:text-left' : 'md:text-left'}`}>
              {Array.isArray(description) ? (
                <ul className="list-disc list-inside space-y-1">
                  {description.map((item, idx) => (
                    <li key={idx} className="text-sm">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm">{description}</p>
              )}
            </div>
          )}
        </Card>
      </div>

      {/* Center dot */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-px h-full bg-[#FD853A]/30"></div>
        <div className="relative z-10 w-4 h-4 rounded-full bg-[#FD853A] border-4 border-white shadow-lg"></div>
      </div>

      {/* Spacer for opposite side */}
      <div className="flex-1 hidden md:block"></div>
    </motion.div>
  );
}
