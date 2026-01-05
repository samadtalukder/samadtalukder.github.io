'use client';

import { about } from '@/lib/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, BookOpen, Mail, MapPin, Phone, Globe, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '@/components/animations/ParticlesBackground';

const socialIcons: Record<string, any> = {
  'fa-linkedin': Linkedin,
  'fa-github': Github,
  'fa-medium': BookOpen,
  'fa-facebook': Facebook,
};

export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <ParticlesBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left side - Profile Image */}
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex flex-col items-center justify-center text-white relative overflow-hidden">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative z-10"
                >
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
                    <Image
                      src={`/images/${about.image.replace('img/', '')}`}
                      alt={about.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold text-center mb-2 relative z-10"
                >
                  {about.name}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-blue-100 text-center mb-6 h-8 relative z-10"
                >
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
                  />
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4 relative z-10"
                >
                  {about.social.map((social, index) => {
                    const Icon = socialIcons[social.icon] || Globe;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </motion.div>
              </div>

              {/* Right side - About Info */}
              <div className="md:col-span-3 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {about.bio}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Email:</span>
                      <a href={`mailto:${about.email}`} className="text-blue-600 hover:underline">
                        {about.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Mobile:</span>
                      <span>{about.mobile}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Website:</span>
                      <a href={about.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {about.website}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Address:</span>
                      <span>{about.address}</span>
                    </div>
                  </div>

                  {/* Download Resume Button */}
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="lg"
                    asChild
                  >
                    <a href="/resume.pdf" download>
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
