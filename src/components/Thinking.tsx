import React from 'react';
import { Lightbulb, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export const Thinking: React.FC = () => {
  return (
    <section id="como-penso" className="py-20 md:py-28 border-t border-zinc-200/70 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Section Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-4">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Como eu penso</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-zinc-950 leading-tight mb-8">
            {personalInfo.thinking.title}
          </h2>

          {/* Styled Editorial Manifesto */}
          <div className="relative p-7 sm:p-9 rounded-2xl bg-zinc-900 text-zinc-100 shadow-card">
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-zinc-300 font-normal mb-8">
              {personalInfo.thinking.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "text-white font-medium" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Highlighted Quote in special prominence */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-800/90 border border-zinc-700/80 mb-6">
              <div className="space-y-1 text-base sm:text-lg font-medium text-white">
                {personalInfo.thinking.highlightQuote.map((quoteLine, qIdx) => (
                  <p key={qIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{quoteLine}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Footnote */}
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                Princípio prático:
              </span>
              <span>Menos burocracia, ferramentas certas no lugar certo.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
