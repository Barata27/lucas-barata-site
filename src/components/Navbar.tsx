import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo, navItems } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-2xs'
          : 'bg-white/70 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#"
          className="group flex items-center gap-2 text-zinc-900 font-semibold tracking-tight text-base hover:opacity-80 transition-opacity"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
          <span>{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs lg:text-sm text-zinc-600 hover:text-zinc-950 font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contato"
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-zinc-300 hover:border-zinc-900 bg-white text-zinc-800 hover:text-zinc-950 transition-all flex items-center gap-1"
          >
            Falar comigo
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-700 hover:text-zinc-950 rounded-lg hover:bg-zinc-100 transition-colors"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="text-base text-zinc-700 hover:text-zinc-950 font-medium py-1.5 transition-colors border-b border-zinc-100"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={closeMenu}
              className="mt-2 text-center text-sm font-semibold py-3 px-4 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
            >
              Falar comigo
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
