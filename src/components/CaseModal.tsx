import React, { useEffect } from 'react';
import { X, CheckCircle, Wrench, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseModal: React.FC<CaseModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-xs transition-opacity">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden z-10 animate-scaleUp">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100 bg-zinc-50/70">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-200/80 text-zinc-700">
            {caseStudy.category}
          </span>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/60 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-zinc-950 tracking-tight mb-2">
              {caseStudy.title}
            </h3>
            <p className="text-base text-zinc-600 leading-relaxed font-normal">
              {caseStudy.description}
            </p>
          </div>

          {/* Destaque / Métrica */}
          <div className="p-4 rounded-xl bg-zinc-900 text-white flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                {caseStudy.highlightLabel || "Ponto Chave"}
              </p>
              <p className="text-base sm:text-lg font-semibold text-zinc-100">
                {caseStudy.highlight}
              </p>
            </div>
          </div>

          {caseStudy.impact && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Contexto & Solução
              </h4>
              <p className="text-sm text-zinc-700 leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                {caseStudy.impact}
              </p>
            </div>
          )}

          {caseStudy.details && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                O Que Foi Desenvolvido
              </h4>
              <ul className="space-y-2.5">
                {caseStudy.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy.tools && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" />
                Ferramentas & Integrações
              </h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-100 bg-zinc-50/50">
          <span className="text-xs text-zinc-600">
            Tem um processo parecido na sua operação?
          </span>
          <a
            href="#contato"
            onClick={onClose}
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
          >
            Falar sobre isso
          </a>
        </div>
      </div>
    </div>
  );
};
