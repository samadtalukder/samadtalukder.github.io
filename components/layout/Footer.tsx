'use client';

import { about } from '@/lib/data';
import { Github, Linkedin, Facebook, BookOpen, ArrowUp } from 'lucide-react';

const socialIcons: Record<string, any> = {
  'fa-linkedin': Linkedin,
  'fa-github': Github,
  'fa-medium': BookOpen,
  'fa-facebook': Facebook,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {about.social.map((social, index) => {
              const Icon = socialIcons[social.icon];
              return Icon ? (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ) : null;
            })}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

          {/* Copyright */}
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} All rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
