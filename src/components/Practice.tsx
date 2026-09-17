import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { practiceAreas } from '../data/siteData';

export const Practice: React.FC = () => {
  return (
    <section id="na-pratica" className="py-20 md:py-28 bg-white border-t border-zinc-200/70">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>Na prática</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-3">
            Como eu trabalho
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            São partes diferentes de um mesmo processo.
          </p>
        </div>

        {/* 4 Connected Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="p-7 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-subtle hover:border-zinc-300 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">
                    {area.number}
                  </span>
                  <span className="text-xs font-mono text-zinc-600">
                    Etapa Integrada
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-2">
                  {area.title}
                </h3>

                <p className="text-xs font-mono text-zinc-600 mb-4 pb-3 border-b border-zinc-200/80">
                  {area.skills}
                </p>

                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center gap-2 text-xs text-zinc-600 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Conectado à jornada completa</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
