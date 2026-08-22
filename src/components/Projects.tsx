import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projectsData';
import type { Project } from '../types';
import { useRouter } from '../router/RouterContext';

export const Projects: React.FC = () => {
  const { navigate } = useRouter();
  const [showAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  const getProjectPreviewMock = (project: Project) => {
    switch (project.id) {
      case 'financial-ai-coaching':
        return (
          <div className="w-full bg-[#0c0d14] rounded-2xl p-4 sm:p-5 border border-zinc-800/80 flex flex-col justify-between relative group-hover:border-rose-500/40 transition-colors gap-3">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] sm:text-xs font-mono uppercase bg-rose-500/20 text-rose-300 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-semibold whitespace-nowrap shrink-0">
                  FYP AI Layer
                </span>
                <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">
                  Expense &amp; Sentiment Engine
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" /> Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 font-mono">
              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[10px] sm:text-xs text-zinc-400 block truncate">Forecast Model</span>
                <span className="text-xs sm:text-sm font-bold text-white block truncate mt-0.5">LSTM Sequential</span>
                <span className="text-[10px] sm:text-xs text-rose-400 block mt-0.5 font-semibold">MAE: 4.2%</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[10px] sm:text-xs text-zinc-400 block truncate">Explainability</span>
                <span className="text-xs sm:text-sm font-bold text-white block truncate mt-0.5">SHAP &amp; LIME</span>
                <span className="text-[10px] sm:text-xs text-cyan-400 block mt-0.5 font-semibold">100% Attributed</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-300 border-t border-zinc-800/80 pt-2.5 gap-2">
              <span className="truncate">Flutter UI ↔ FastAPI AI</span>
              <span className="text-rose-400 font-semibold whitespace-nowrap shrink-0">Supabase DB</span>
            </div>
          </div>
        );

      case 'smartcare-hospital-risk':
        return (
          <div className="w-full bg-[#0c0d14] rounded-2xl p-4 sm:p-5 border border-zinc-800/80 flex flex-col justify-between relative group-hover:border-rose-500/40 transition-colors gap-3">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] sm:text-xs font-mono uppercase bg-cyan-500/20 text-cyan-300 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-semibold whitespace-nowrap shrink-0">
                  Healthcare ML
                </span>
                <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">
                  Clinical Triage Calibration
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-zinc-400 whitespace-nowrap shrink-0">ROC-AUC Grade</span>
            </div>

            <div className="p-2.5 sm:p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 font-mono">
              <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-1.5">
                <span className="text-zinc-200 truncate">Target Leakage Audit</span>
                <span className="text-emerald-400 font-bold whitespace-nowrap ml-2">100% Cleared</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 sm:h-2.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full w-[94%]" />
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 mt-1.5 sm:mt-2 flex justify-between gap-2">
                <span className="truncate">Calibrated Logistic Reg</span>
                <span className="whitespace-nowrap shrink-0">Brier: Optimal</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-300 border-t border-zinc-800/80 pt-2.5 gap-2">
              <span className="truncate">Probability Calibration</span>
              <span className="text-cyan-400 font-semibold whitespace-nowrap shrink-0">Odds-Ratio Open</span>
            </div>
          </div>
        );

      case 'ogbn-arxiv-gnn':
        return (
          <div className="w-full bg-[#0c0d14] rounded-2xl p-4 sm:p-5 border border-zinc-800/80 flex flex-col justify-between relative group-hover:border-rose-500/40 transition-colors gap-3">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] sm:text-xs font-mono uppercase bg-violet-500/20 text-violet-300 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-semibold whitespace-nowrap shrink-0">
                  Graph Deep Learning
                </span>
                <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">
                  PyG Citation Topology
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-violet-400 font-semibold whitespace-nowrap shrink-0">169K Nodes</span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 font-mono">
              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                <span className="text-[10px] sm:text-xs text-zinc-400 block truncate">GCN Benchmark</span>
                <span className="text-xs sm:text-sm font-bold text-violet-300 block truncate mt-0.5">Spatial Conv</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                <span className="text-[10px] sm:text-xs text-zinc-400 block truncate">GAT Benchmark</span>
                <span className="text-xs sm:text-sm font-bold text-pink-300 block truncate mt-0.5">Multi-Head Attn</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-300 border-t border-zinc-800/80 pt-2.5 gap-2">
              <span className="truncate">Streamlit Visual Subgraph</span>
              <span className="text-violet-400 font-semibold whitespace-nowrap shrink-0">Word2Vec 128D</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full bg-[#0c0d14] rounded-2xl p-4 sm:p-5 border border-zinc-800/80 flex flex-col justify-between relative group-hover:border-rose-500/40 transition-colors gap-3">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] sm:text-xs font-mono uppercase bg-emerald-500/20 text-emerald-300 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-semibold whitespace-nowrap shrink-0">
                  MLOps &amp; Tracking
                </span>
                <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">
                  {project.shortTitle}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-zinc-400 whitespace-nowrap shrink-0">DagsHub &amp; DVC</span>
            </div>

            <div className="p-2.5 sm:p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 font-mono">
              <div className="text-xs sm:text-sm text-zinc-200 font-semibold mb-1 truncate">Automated Reproducible Pipeline</div>
              <div className="text-[10px] sm:text-xs text-zinc-400 truncate">Ingestion ➔ EDA ➔ XGBoost ➔ Registry</div>
            </div>

            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-300 border-t border-zinc-800/80 pt-2.5 gap-2">
              <span className="truncate">100% Reproducible Experiments</span>
              <span className="text-emerald-400 font-semibold whitespace-nowrap shrink-0">Production Ready</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white dark:text-white tracking-tight uppercase">
            MY PROJECTS &amp; CONTRIBUTIONS
          </h2>
          <div className="w-12 h-1 bg-rose-400 rounded-full mt-3" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#09090c] dark:bg-[#09090c] border border-zinc-800/90 dark:border-zinc-800/90 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:border-zinc-700 hover:shadow-2xl shadow-black/40"
            >
              <div>
                {/* Visual Preview Box */}
                <div 
                  onClick={() => navigate(`#/project/${project.id}`)}
                  className="mb-6 cursor-pointer"
                >
                  {getProjectPreviewMock(project)}
                </div>

                {/* Title & Subtitle */}
                <h3 
                  onClick={() => navigate(`#/project/${project.id}`)}
                  className="text-xl sm:text-2xl font-display font-bold text-white dark:text-white group-hover:text-rose-300 transition-colors mb-1.5 cursor-pointer"
                >
                  {project.title}
                </h3>
                
                <p className="text-xs font-mono text-rose-400/90 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 leading-relaxed mb-6">
                  {project.overview}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 dark:bg-zinc-900 text-zinc-300 dark:text-zinc-300 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate(`#/project/${project.id}`)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 text-xs font-mono font-bold transition-all shadow-md shadow-rose-500/20 hover:scale-105"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Open Full Case Study</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 hover:border-rose-500/40 text-xs font-mono font-medium transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Source</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-slate-950 text-xs font-mono font-bold transition-all shadow-md"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{project.dagshubUrl ? 'DagsHub' : 'Live App'}</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Show More Works button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('#/projects')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-rose-500/40 text-xs font-mono text-rose-300 font-bold tracking-wider uppercase transition-all shadow-lg hover:scale-105"
          >
            <span>EXPLORE ALL 5 SYSTEMS &amp; RESEARCH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
