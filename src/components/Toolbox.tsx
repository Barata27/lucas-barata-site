import React from 'react';
import { Wrench, Award, CheckCircle2, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import { credentials } from '../data/siteData';

export const Toolbox: React.FC = () => {
  const toolCategories = [
    {
      name: "CRM & Processos Comerciais",
      tools: ["Kommo", "HubSpot", "Pipedrive", "ActiveCampaign"]
    },
    {
      name: "Automação, Integrações & IA",
      tools: ["n8n", "Make", "Zapier", "WhatsApp API", "APIs / Webhooks", "IA / LLMs"]
    },
    {
      name: "Aquisição & Análise de Dados",
      tools: ["Meta Ads", "Google Ads", "Power BI", "Looker Studio"]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-zinc-200/70">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Tag */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-3">
            <Wrench className="w-4 h-4 text-emerald-600" />
            <span>Caixa de Ferramentas & Credenciais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-3">
            Algumas coisas que fazem parte da minha caixa de ferramentas
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            Tecnologias, ambientes e credenciais oficiais que sustentam a construção e operação de projetos na prática.
          </p>
        </div>

        {/* 1. Formações & Reconhecimentos Oficiais (Grid horizontal proporcional com 4 cards) */}
        <div className="mb-10">
          <div className="flex items-center justify-between gap-2 mb-5">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              Formações & Reconhecimentos Oficiais
            </h3>
            <span className="text-[11px] font-mono text-emerald-600 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Validado na prática
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((cred) => {
              const isPartner = cred.category === 'Parceria Oficial';
              const isDegree = cred.category === 'Formação';

              return (
                <div
                  key={cred.id}
                  className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    isPartner
                      ? 'bg-emerald-50/60 border-emerald-300 shadow-2xs hover:border-emerald-400'
                      : 'bg-zinc-50 border-zinc-200/90 hover:border-zinc-300 hover:bg-white shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isPartner
                            ? 'bg-emerald-200/80 text-emerald-900'
                            : isDegree
                            ? 'bg-zinc-200/80 text-zinc-800'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {cred.badge || cred.category}
                      </span>

                      {isPartner ? (
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : isDegree ? (
                        <GraduationCap className="w-4 h-4 text-zinc-700 shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-zinc-950 leading-snug mb-1">
                      {cred.title}
                    </h4>
                  </div>

                  <p className="text-xs text-zinc-600 font-mono mt-3 pt-3 border-t border-zinc-200/60">
                    {cred.issuer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Ferramentas com as quais trabalho (Organizadas por categoria funcional) */}
        <div className="p-7 sm:p-9 rounded-3xl bg-zinc-50 border border-zinc-200/90 shadow-subtle">
          <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-zinc-200">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              Ferramentas com as quais trabalho
            </h3>
            <span className="text-xs text-zinc-600 font-mono hidden sm:inline-block">
              Tecnologias de operação
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolCategories.map((group, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
                <h4 className="text-xs font-bold font-mono text-zinc-700 uppercase tracking-wider mb-4 pb-2 border-b border-zinc-100">
                  {group.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-800 hover:border-zinc-400 hover:text-zinc-950 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-zinc-600 font-mono">
            <span>O foco é sempre no problema e no processo; a ferramenta é o meio de viabilização.</span>
            <span className="text-emerald-700 font-medium">Sem dependência de ferramenta específica</span>
          </div>
        </div>
      </div>
    </section>
  );
};
