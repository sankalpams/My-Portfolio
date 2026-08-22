import React from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-dark-surface dark:bg-dark-surface border border-slate-700/80 dark:border-slate-800 shadow-2xl z-10 p-6 sm:p-8 animate-fadeIn">
        
        {/* Header Strip */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800 dark:border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-500/15 text-brand-300 border border-brand-500/30">
                {project.category}
              </span>
              {project.status && (
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                  project.status === 'In Progress'
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                    : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                }`}>
                  ● {project.status}
                </span>
              )}
              {project.isFYP && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  ★ Final Year Project (Lead)
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-400 dark:text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 text-slate-400 hover:text-white dark:hover:text-white:text-slate-900 border border-slate-700/80 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-8">
          
          {/* Overview */}
          <div>
            <h3 className="text-sm font-mono uppercase text-brand-400 tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {project.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 border border-slate-800"
                >
                  <div className="text-[11px] font-mono text-slate-400">
                    {metric.label}
                  </div>
                  <div className="text-base sm:text-lg font-display font-bold text-brand-300 my-0.5">
                    {metric.value}
                  </div>
                  {metric.subtext && (
                    <div className="text-[10px] text-slate-500 font-mono">
                      {metric.subtext}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* System Architecture Blueprint */}
          {project.architecture && (
            <div>
              <h3 className="text-sm font-mono uppercase text-brand-400 tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Technical Architecture & Layer Breakdown
              </h3>

              <div className="space-y-3">
                {project.architecture.map((layer, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-400" />
                        <span className="font-display font-bold text-sm text-slate-200 dark:text-slate-200">
                          {layer.layer}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 dark:text-slate-300 pl-4">
                        {layer.responsibility}
                      </p>
                    </div>

                    <div className="shrink-0 pl-4 sm:pl-0">
                      <span className="inline-block text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-slate-800 dark:bg-slate-800 text-brand-400 border border-slate-700">
                        {layer.technology}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deep Implementation Details */}
          <div>
            <h3 className="text-sm font-mono uppercase text-brand-400 tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Detailed Engineering Responsibilities
            </h3>

            <ul className="space-y-2.5">
              {project.bullets.map((bullet, idx) => (
                <li 
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-sm font-mono uppercase text-slate-400 tracking-wider mb-2.5">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 dark:bg-slate-900 text-slate-300 dark:text-slate-300 border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500">
            Role: <span className="text-slate-300 dark:text-slate-300 font-semibold">{project.role || 'Data Science Engineer'}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 dark:bg-slate-800 text-slate-200 dark:text-slate-200 hover:text-brand-400 border border-slate-700 text-xs font-semibold transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-blue-600 text-slate-950 font-semibold text-xs shadow-md hover:scale-105 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
