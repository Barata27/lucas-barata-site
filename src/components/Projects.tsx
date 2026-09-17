import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, FolderGit2, CheckCircle2, Cpu, Wallet } from 'lucide-react';
import { projects } from '../data/siteData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-20 md:py-28 border-t border-zinc-200/70 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-3">
            <FolderGit2 className="w-4 h-4 text-emerald-600" />
            <span>Produtos & Iniciativas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-3">
            O que estou construindo
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            Algumas ideias que saíram da cabeça e foram parar na prática.
          </p>
        </div>

        {/* 2-Column Projects Grid para Liberte-se e Prospera */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-8">
          {projects.map((project) => {
            const isLiberteSe = project.id === 'liberte-se';

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-white border border-zinc-200/90 shadow-card hover:shadow-card-hover hover:border-zinc-300 transition-all duration-300"
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-md bg-zinc-100 text-zinc-800">
                      {project.category}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        project.statusType === 'active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.statusType === 'active'
                            ? 'bg-emerald-500 animate-pulse-subtle'
                            : 'bg-amber-500 animate-pulse-subtle'
                        }`}
                      />
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-3">
                    {project.name}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-6">
                    {project.description}
                  </p>

                  {/* Highlights preview */}
                  {project.highlights && (
                    <div className="space-y-2 mb-8 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <span className="text-[11px] font-mono text-zinc-600 uppercase tracking-wider block mb-2">
                        Foco da Aplicação
                      </span>
                      {project.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Footer */}
                <div className="pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-600">
                    {isLiberteSe ? (
                      <>
                        <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                        <span>IA & Hábitos</span>
                      </>
                    ) : (
                      <>
                        <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Finanças Pessoais</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 px-3 py-2 rounded-lg hover:bg-zinc-100 transition-colors"
                    >
                      Bastidores
                    </button>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-all shadow-2xs hover:shadow-subtle"
                      >
                        <span>Conhecer projeto →</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Discreto: Outras ideias estão em construção */}
        <div className="p-6 rounded-2xl bg-zinc-50/80 border border-dashed border-zinc-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white border border-zinc-200/80 text-zinc-700 shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 mb-0.5">
                Outras ideias estão em construção.
              </h4>
              <p className="text-xs text-zinc-600 font-normal">
                Laboratório de experimentação com novas soluções e automações saindo do papel.
              </p>
            </div>
          </div>

          <span className="text-xs font-mono text-zinc-600 shrink-0">
            Construindo e testando na prática
          </span>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
