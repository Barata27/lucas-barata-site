import React from 'react';
import { ArrowRight, Compass, Route } from 'lucide-react';
import { personalInfo, journeySteps } from '../data/siteData';

export const CustomerJourney: React.FC = () => {
  return (
    <section id="jornada" className="py-20 md:py-28 bg-white border-t border-zinc-200/70">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Tag */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-4">
            <Route className="w-4 h-4 text-emerald-600" />
            <span>Visão Integrada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-6">
            {personalInfo.customerJourney.title}
          </h2>

          {/* Intro Lines */}
          <div className="space-y-2 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mb-6">
            {personalInfo.customerJourney.introLines.map((line, idx) => (
              <p key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>{line}</span>
              </p>
            ))}
          </div>

          <p className="text-lg font-semibold text-zinc-900 border-l-2 border-zinc-900 pl-4 py-1">
            {personalInfo.customerJourney.closingNote}
          </p>
        </div>

        {/* Minimalist Journey Flow Representation */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-subtle">
          <div className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Compass className="w-4 h-4 text-zinc-600" />
            <span>Da atração ao resultado: um único processo conectado</span>
          </div>

          {/* Flow Grid / Pathway */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {journeySteps.map((step, idx) => (
              <div
                key={step.id}
                className="relative flex flex-col justify-between p-4 rounded-xl bg-white border border-zinc-200 shadow-xs hover:border-zinc-400 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-semibold text-emerald-600">
                      {step.stepNumber}
                    </span>
                    {idx < journeySteps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-600 transition-colors" />
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-zinc-950 tracking-wider mb-1.5">
                    {step.title}
                  </h4>
                </div>

                <p className="text-[11px] text-zinc-600 font-mono leading-relaxed mt-2 pt-2 border-t border-zinc-100">
                  {step.subitems}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom insight banner */}
          <div className="mt-6 pt-4 border-t border-zinc-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-zinc-600">
            <span>O diferencial não é uma ferramenta isolada. É conectar cada etapa sem perda de informação.</span>
            <span className="font-mono text-zinc-600">Sem pontas soltas</span>
          </div>
        </div>
      </div>
    </section>
  );
};
