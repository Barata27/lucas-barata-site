import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-xs transition-opacity">
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden z-10 animate-scaleUp">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100 bg-zinc-50/70">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-200/80 text-zinc-700">
              {project.category}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                project.statusType === 'active'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : project.statusType === 'evolving'
                  ? 'bg-amber-50 text-amber-700 border border-amber-200'
                  : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  project.statusType === 'active'
                    ? 'bg-emerald-500'
                    : project.statusType === 'evolving'
                    ? 'bg-amber-500'
                    : 'bg-zinc-400'
                }`}
              />
              {project.status}
            </span>
          </div>

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
              {project.name}
            </h3>
            <p className="text-base text-zinc-600 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {project.longDescription && (
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-700 text-sm leading-relaxed">
              {project.longDescription}
            </div>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Destaques do Projeto
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                Abordagem & Tecnologias
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-zinc-100 bg-zinc-50/50">
          <span className="text-xs text-zinc-600 font-mono">
            Focado em resolver problemas práticos
          </span>
          <div className="flex items-center gap-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
              >
                Acessar aplicação online
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href="#contato"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
            >
              Trocar uma ideia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
