import React from 'react';
import { User, Compass, Heart, BookOpen, Code2 } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-zinc-50 border-t border-zinc-200/70">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-4">
          <User className="w-4 h-4 text-emerald-600" />
          <span>Sobre mim</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative (7 columns) */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-6">
              {personalInfo.about.title}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              {personalInfo.about.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "text-zinc-900 font-semibold text-xl" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Subtle Values tags */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                <Code2 className="w-3.5 h-3.5 text-zinc-500" />
                Processos & Automação
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                Catequista & Comunidade
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                Criação de Produtos
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                Curiosidade Contínua
              </span>
            </div>
          </div>

          {/* Photo / Visual Frame (5 columns) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-card p-3">
              {/* Photo Container */}
              <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/80 group">
                <img
                  src="/lucas-barata.png"
                  alt="Lucas Barata"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                
                {/* Discreet overlay badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-900/85 backdrop-blur-md text-white text-xs">
                  <span className="font-medium">Lucas Barata</span>
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-subtle" />
                    ES, Brasil
                  </span>
                </div>
              </div>

              {/* Caption note */}
              <div className="px-3 pt-3 pb-1 text-center">
                <p className="text-xs text-zinc-600 font-mono">
                  lucasbarata.com • CRM, Automação & Negócios
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
