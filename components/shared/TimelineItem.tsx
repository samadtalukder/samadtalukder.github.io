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
  type?: 'experience' | 'education';
  isLast?: boolean;
  isFirst?: boolean;
}

export default function TimelineItem({ title, subtitle, period, description, index, type, isLast = false, isFirst = false }: TimelineItemProps) {
  // Calculate vertical line position
  const getLinePosition = () => {
    if (isFirst && isLast) {
      // Only one item - line from top to center
      return 'top-0 bottom-1/2';
    } else if (isFirst) {
      // First item - line from top to beyond bottom
      return 'top-0 -bottom-8';
    } else if (isLast) {
      // Last item - line from beyond top to center
      return '-top-8 bottom-1/2';
    } else {
      // Middle items - line extends beyond both top and bottom
      return '-top-8 -bottom-8';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-4 pb-8"
    >
      {/* Timeline Line and Dot Container */}
      <div className="relative w-4 flex-shrink-0 self-stretch">
        {/* Vertical Line - positioned based on item position */}
        <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 ${getLinePosition()} ${
          type === 'experience' ? 'bg-blue-200' : 'bg-green-200'
        }`}></div>

        {/* Dot - positioned at vertical center of the card */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 ${
          type === 'experience' ? 'bg-blue-500' : 'bg-green-500'
        }`}></div>
      </div>

      {/* Content Card */}
      <div className="flex-1">
        <Card className="p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#FD853A] group">
          <span className="text-sm text-[#FD853A] font-semibold block transition-colors duration-300 group-hover:text-white">{period}</span>
          <h3 className="text-2xl font-extrabold text-gray-800 leading-tight transition-colors duration-300 group-hover:text-white">{title}</h3>
          <p className="text-[#FD853A] font-medium transition-colors duration-300 group-hover:text-white">{subtitle}</p>
{/*
          {description && (
            <div className="text-gray-600 space-y-2 mt-3">
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
          )} */}
        </Card>
      </div>
    </motion.div>
  );
}
