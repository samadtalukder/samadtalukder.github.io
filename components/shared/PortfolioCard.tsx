'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  name: string;
  category: string;
  image: string;
  url: string;
  description?: string;
}

export default function PortfolioCard({ name, category, image, url, description }: PortfolioCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden transition-all duration-500 ease-in-out group cursor-pointer flex flex-col hover:shadow-xl relative">
        <a href={url} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col transition-transform duration-500 ease-out hover:-translate-y-2">
          <div className="relative h-24 overflow-hidden flex-shrink-0">
            <Image
              src={`/images/${image.replace('img/', '')}`}
              alt={name}
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <Badge variant="secondary" className="capitalize text-xs absolute top-4 right-4 z-10" style={{ backgroundColor: '#FD853A', color: '#fff' }}>{category}</Badge>
          </div>
          <div className="p-4 flex-1 flex flex-col transition-all duration-500 ease-out">
            <h3 className="text-lg font-bold text-gray-800 line-clamp-1 mb-1 transition-colors duration-300">{name}</h3>
            {description && (
              <p className="text-gray-600 text-sm mt-2 line-clamp-2 transition-colors duration-300">{description}</p>
            )}
          </div>
        </a>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 ease-in-out flex items-center justify-center pointer-events-none z-20">
          <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
            Open Link
          </span>
        </div>
      </Card>
    </motion.div>
  );
}
