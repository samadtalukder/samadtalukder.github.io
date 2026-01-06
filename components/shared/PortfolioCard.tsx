'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
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
      <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer h-full flex flex-col">
        <a href={url} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col">
          <div className="relative h-48 overflow-hidden flex-shrink-0">
            <Image
              src={`/images/${image.replace('img/', '')}`}
              alt={name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
              <div className="flex items-center gap-2 text-white font-semibold">
                <span>View Project</span>
                <ExternalLink className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-start gap-3 mb-2">
              <h3 className="text-lg font-bold text-gray-800 flex-1 line-clamp-2">{name}</h3>
              <Badge variant="secondary" className="capitalize text-xs flex-shrink-0">{category}</Badge>
            </div>
            {description && (
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
            )}
          </div>
        </a>
      </Card>
    </motion.div>
  );
}
