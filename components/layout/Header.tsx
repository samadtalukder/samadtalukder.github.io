'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { about } from '@/lib/data';

const navItems = [
  { name: 'Home', href: '#about' },
  { name: 'About Me', href: '#about-me' },
  { name: 'Services', href: '#services' },
  // { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  // { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-brand-orange focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-4'
            : 'bg-transparent py-6'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <h1
              className={`text-lg sm:text-2xl font-bold truncate ${
                isScrolled ? 'text-brand-dark' : 'text-brand-dark'
              }`}
            >
              {about.name}
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-bold transition-colors ${
                    isScrolled
                      ? 'text-brand-dark hover:text-brand-orange'
                      : 'text-brand-dark hover:text-brand-orange'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden flex-shrink-0 p-2 ${isScrolled ? 'text-brand-orange' : 'text-brand-orange'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <nav className="flex flex-col items-center justify-center h-full gap-8" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-2xl font-bold text-brand-dark hover:text-brand-orange transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
