import React, { useState } from 'react';
import { ArrowUpRight, Check, Workflow } from 'lucide-react';
import { caseStudies } from '../data/siteData';
import { CaseStudy } from '../types';
import { CaseModal } from './CaseModal';

export const Cases: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="cases" className="py-20 md:py-28 bg-zinc-50 border-t border-zinc-200/70 overflow-hidden">
      {/* Container mais amplo estendendo-se para as laterais */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-3">
            <Workflow className="w-4 h-4 text-emerald-600" />
            <span>Projetos na Prática</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-3">
            Algumas coisas que já coloquei para funcionar
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            Projetos reais em que tecnologia, processo e comportamento do cliente precisaram conversar.
          </p>
        </div>

        {/* Cases Grid - Mais largo, estendendo para as laterais e sem vácuos brancos internos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {caseStudies.map((caseItem) => (
            <div
              key={caseItem.id}
              className="group flex flex-col justify-between p-7 sm:p-8 lg:p-9 rounded-3xl bg-white border border-zinc-200/90 shadow-card hover:shadow-card-hover hover:border-zinc-300 transition-all duration-300"
            >
              <div className="flex flex-col flex-1">
                {/* Top Category Tag */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200/60">
                    {caseItem.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>

                {/* Case Title */}
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight leading-snug mb-3">
                  {caseItem.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-5">
                  {caseItem.description}
                </p>

                {/* Context Note (Frase de contexto) */}
                {caseItem.contextNote && (
                  <div className="p-3.5 rounded-xl bg-zinc-50 border-l-2 border-emerald-500 mb-5 text-xs sm:text-sm text-zinc-700 italic leading-relaxed">
                    "{caseItem.contextNote}"
                  </div>
                )}

                {/* Highlight Box - Integrado ao fluxo do conteúdo sem forçar espaços brancos */}
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 text-white mb-6">
                  <div className="text-[11px] font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{caseItem.highlightLabel || "Destaque"}</span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-zinc-100 leading-snug">
                    {caseItem.highlight}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedCase(caseItem)}
                  className="w-full py-3.5 px-5 rounded-xl bg-zinc-100 hover:bg-zinc-900 text-zinc-900 hover:text-white font-semibold text-xs transition-all duration-200 flex items-center justify-between group-hover:bg-zinc-900 group-hover:text-white shadow-2xs"
                >
                  <span>Ver case completo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CaseModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </section>
  );
};
