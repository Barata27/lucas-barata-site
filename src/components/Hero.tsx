import React from 'react';
import { ArrowDown, MapPin, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Header Tag / Positioning */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-xs font-medium tracking-wide mb-6">
            <Sparkles className="w-3.5 h-3.5 text-zinc-600" />
            <span>{personalInfo.shortRole}</span>
          </div>

          {/* Large Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.12] mb-6">
            {personalInfo.heroTitle}
          </h1>

          {/* Primary Lead */}
          <p className="text-lg md:text-xl text-zinc-800 font-medium leading-relaxed mb-5">
            {personalInfo.heroLead}
          </p>

          {/* Journey perspective and products note */}
          <div className="space-y-3 text-base text-zinc-600 leading-relaxed mb-8 border-l-2 border-zinc-200 pl-4">
            <p>{personalInfo.heroJourneyNote}</p>
            <p className="text-zinc-800 font-medium">{personalInfo.heroProductsNote}</p>
          </div>

          {/* Location Badge (Discreet) */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-600 font-mono mb-10">
            <MapPin className="w-3.5 h-3.5 text-zinc-600" />
            <span>{personalInfo.location}</span>
          </div>

          {/* Actions / CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-all shadow-subtle hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
            >
              Ver o que estou construindo
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-zinc-300 text-zinc-800 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-400 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 text-zinc-500" />
              Falar comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
