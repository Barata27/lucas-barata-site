import React from 'react';
import { personalInfo, navItems } from '../data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-zinc-900">
          <div>
            <h4 className="text-lg font-bold text-white tracking-tight mb-1">
              {personalInfo.name}
            </h4>
            <p className="text-xs font-mono text-zinc-400 mb-1">
              {personalInfo.shortRole}
            </p>
            <p className="text-xs text-zinc-500">
              📍 {personalInfo.location}
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 text-xs font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {currentYear} {personalInfo.name}. Construindo coisas que resolvem problemas.</p>
          <p>Conectando aquisição, processos e dados.</p>
        </div>
      </div>
    </footer>
  );
};
