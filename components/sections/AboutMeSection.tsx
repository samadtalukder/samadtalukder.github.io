'use client';

import { about } from '@/lib/data';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutMeSection() {
  return (
    <section id="about-me" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >

            <p className="text-center font-medium text-brand-orange text-lg mb-2">About Me</p>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Who Am I</h2>

          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                {/* Blob Shape Container with Gradient Background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 via-brand-orange to-orange-600"
                  style={{
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
                  }}
                >
                  {/* Profile Image */}
                  <div className="relative w-full h-full"
                    style={{
                      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
                    }}
                  >
                    <Image
                      src={`/images/${about.image.replace('img/', '')}`}
                      alt={about.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark">
                I'm <span className="text-brand-orange">{about.name}</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {about.bio}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
