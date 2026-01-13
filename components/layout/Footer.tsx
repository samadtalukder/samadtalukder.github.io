'use client';

import { about } from '@/lib/data';
import { ArrowUp } from 'lucide-react';
import { getSocialIcon } from '@/lib/icons';

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
              const Icon = getSocialIcon(social.icon);
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-brand-orange hover:bg-brand-orange-hover flex items-center justify-center transition-all hover:scale-110 shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

          {/* Copyright */}
          <p className="text-gray-300 text-center font-anton">
            &copy; Copyright {new Date().getFullYear()}. Made by Samad Talukder.
          </p>
        </div>
      </div>
    </footer>
  );
}
