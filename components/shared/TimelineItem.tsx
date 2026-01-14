'use client';

import {Card} from '@/components/ui/card';
import {motion} from 'framer-motion';

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

export default function TimelineItem({
                                         title,
                                         subtitle,
                                         period,
                                         index,
                                         type,
                                         isLast = false,
                                         isFirst = false
                                     }: TimelineItemProps) {
    // Calculate vertical line position
    const getLinePosition = () => {
        if (isFirst && isLast) {
            // Only one item - line from top to center
            return 'top-0 bottom-1/2';
        } else if (isFirst) {
            // First item - line from top to beyond bottom
            return 'top-0 -bottom-4';
        } else if (isLast) {
            // Last item - line from beyond top to center
            return '-top-4 bottom-1/2';
        } else {
            // Middle items - line extends beyond both top and bottom
            return '-top-4 -bottom-4';
        }
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="relative flex gap-3 md:gap-4 pb-4 group/timeline"
        >
            {/* Timeline Line and Dot Container */}
            <div className="relative w-4 shrink-0 self-stretch">
                {/* Vertical Line - positioned based on item position */}
                <div
                    className={`absolute left-1/2 -translate-x-1/2 w-0.5 ${getLinePosition()} transition-all duration-500 ease-out ${
                        type === 'experience' ? 'bg-blue-200 group-hover/timeline:bg-blue-400 group-hover/timeline:w-1' : 'bg-green-200 group-hover/timeline:bg-green-400 group-hover/timeline:w-1'
                    }`}></div>

                {/* Dot - positioned at vertical center of the card */}
                <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-500 ease-out group-hover/timeline:scale-150 group-hover/timeline:shadow-xl ${
                        type === 'experience' ? 'bg-blue-500 group-hover/timeline:bg-blue-600' : 'bg-green-500 group-hover/timeline:bg-green-600'
                    }`}></div>
            </div>

            {/* Content Card */}
            <div className="flex-1">
                <Card
                    className="p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-brand-orange-hover group cursor-pointer">
                    <span
                        className="text-sm text-brand-orange font-semibold block transition-all duration-500 ease-out group-hover:text-white group-hover:scale-105">{period}</span>
                    <h3 className="text-xl md:text-2xl font-montserrat font-bold text-gray-800 leading-tight transition-all duration-500 ease-out group-hover:text-white group-hover:tracking-wide">{title}</h3>
                    <p className="text-brand-orange  font-medium transition-all duration-500 ease-out group-hover:text-white group-hover:opacity-90">{subtitle}</p>
                </Card>
            </div>
        </motion.div>
    );
}
