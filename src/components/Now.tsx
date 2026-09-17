import React from 'react';
import { Clock, Radio } from 'lucide-react';
import { nowItems } from '../data/siteData';

export const Now: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-zinc-200/70">
      <div className="max-w-5xl mx-auto px-6">
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-subtle">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Página Viva</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-1">
                Agora
              </h3>
              <p className="text-sm text-zinc-600 font-normal">
                O que está ocupando minha cabeça ultimamente.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Frentes ativas</span>
            </div>
          </div>

          {/* Grid of Now items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {nowItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-zinc-200/80 shadow-2xs hover:border-zinc-300 transition-colors"
              >
                <span className="text-2xl select-none shrink-0" role="img" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 mb-0.5">
                    {item.text}
                  </h4>
                  {item.detail && (
                    <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between text-xs text-zinc-600 font-mono">
            <span>Inspirado no conceito /now</span>
            <span>Essa seção é atualizada com frequência</span>
          </div>
        </div>
      </div>
    </section>
  );
};
