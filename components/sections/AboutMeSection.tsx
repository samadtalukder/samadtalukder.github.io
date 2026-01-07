'use client';

import { about } from '@/lib/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, BookOpen, Globe, Download, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';

const socialIcons: Record<string, any> = {
  'fa-linkedin': Linkedin,
  'fa-github': Github,
  'fa-medium': BookOpen,
  'fa-facebook': Facebook,
};

export default function AboutMeSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto pb-16 sm:pb-20 md:pb-24">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 lg:space-y-12"
          >
            {/* Name and Title */}
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] mb-6 md:mb-8 lg:mb-12"
              >
                Hello<span className="text-[#FD853A]">,</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="border-l-4 border-[#FD853A] pl-4 mb-8 md:mb-10 lg:mb-14"
              >
                <p className="text-lg sm:text-xl text-[#171717] mb-2">I'm {about.name}</p>
                <div className="text-2xl sm:text-3xl md:text-4xl text-[#FD853A] font-bold h-12 sm:h-14">
                  <TypeAnimation
                    sequence={[
                      'Android Developer',
                      2000,
                      'Kotlin Expert',
                      2000,
                      'Flutter Developer',
                      2000,
                      'Mobile App Developer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={false}
                  />
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons with Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button
                className="bg-[#FD853A] hover:bg-[#fc7422] text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded"
                size="lg"
                asChild
              >
                <a href="#contact">
                  Got a project?
                </a>
              </Button>

              {/* Social Links */}
              {about.social.map((social, index) => {
                const Icon = socialIcons[social.icon] || Globe;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-gray-700 hover:border-[#FD853A] hover:bg-gray-800 flex items-center justify-center transition-all hover:scale-110 text-gray-400 hover:text-[#FD853A]"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>

            
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative angle brackets */}
              <div className="absolute -left-8 sm:-left-10 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 text-[#FD853A] text-4xl md:text-5xl lg:text-6xl font-light opacity-40">
                {'{'}
              </div>
              <div className="absolute -right-8 sm:-right-10 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 text-[#FD853A] text-4xl md:text-5xl lg:text-6xl font-light opacity-40">
                {'}'}
              </div>
              {/* Coral background behind */}
              <div className="absolute inset-0 rounded-lg -z-10 scale-90"></div>
              {/* Photo with original aspect ratio */}
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={`/images/${about.image.replace('img/', '')}`}
                  alt={about.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills List - full width background strip at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 py-3 sm:py-4 z-20"
        style={{
          background: 'radial-gradient(ellipse at center, #FAFAFA 100%, #E9E3DE 0%)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 justify-center lg:justify-between max-w-5xl mx-auto">
            {['Android', 'Flutter', 'iOS', 'React Native', 'KMP', 'Jetpack Compose', 'Github'].map((skill) => (
              <span
                key={skill}
                className="text-gray-400 text-xs sm:text-sm md:text-base font-normal px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-transparent hover:border-[#FD853A] hover:text-[#171717] transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
