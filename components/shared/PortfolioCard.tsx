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
}

export default function PortfolioCard({ name, category, image, url }: PortfolioCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="relative h-64 overflow-hidden">
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
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800">{name}</h3>
              <Badge variant="secondary" className="capitalize">{category}</Badge>
            </div>
          </div>
        </a>
      </Card>
    </motion.div>
  );
}
