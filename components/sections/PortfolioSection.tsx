'use client';

import { useState } from 'react';
import { portfolio } from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import PortfolioCard from '@/components/shared/PortfolioCard';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Android', 'Flutter', 'React'];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPortfolio = portfolio.filter(
    (item) => activeFilter === 'All' || item.category.toLowerCase() === activeFilter.toLowerCase()
  );

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <PortfolioCard
                key={item.name}
                name={item.name}
                category={item.category}
                image={item.image}
                url={item.url}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
