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
          <div className="w-full h-48 sm:h-56 bg-[#0c0d14] rounded-2xl p-4 border border-zinc-800/80 flex flex-col justify-between overflow-hidden relative group-hover:border-rose-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded">FYP AI Layer</span>
                <span className="text-xs font-mono text-zinc-400">Expense & Sentiment Engine</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-2 font-mono">
              <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">Forecast Model</span>
                <span className="text-xs font-bold text-white">LSTM Sequential</span>
                <span className="text-[10px] text-rose-400 block mt-0.5">MAE: 4.2%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">Explainability</span>
                <span className="text-xs font-bold text-white">SHAP & LIME</span>
                <span className="text-[10px] text-cyan-400 block mt-0.5">100% Attributed</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-zinc-800/80 pt-2">
              <span>Flutter Presentation &lt;-&gt; FastAPI AI</span>
              <span className="text-rose-400 font-semibold">Supabase DB</span>
            </div>
          </div>
        );

      case 'smartcare-hospital-risk':
        return (
          <div className="w-full h-48 sm:h-56 bg-[#0c0d14] rounded-2xl p-4 border border-zinc-800/80 flex flex-col justify-between overflow-hidden relative group-hover:border-rose-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">Healthcare ML</span>
                <span className="text-xs font-mono text-zinc-400">Clinical Triage Calibration</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">ROC-AUC Grade</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 my-2 font-mono">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-300">Target Leakage Audit</span>
                <span className="text-emerald-400 font-bold">100% Cleared</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full w-[94%]" />
              </div>
              <div className="text-[10px] text-zinc-500 mt-1.5 flex justify-between">
                <span>Model: Calibrated Logistic Reg</span>
                <span>Brier Score: Optimal</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-zinc-800/80 pt-2">
              <span>Native Probability Calibration</span>
              <span className="text-cyan-400">Odds-Ratio Transparent</span>
            </div>
          </div>
        );

      case 'ogbn-arxiv-gnn':
        return (
          <div className="w-full h-48 sm:h-56 bg-[#0c0d14] rounded-2xl p-4 border border-zinc-800/80 flex flex-col justify-between overflow-hidden relative group-hover:border-rose-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded">Graph Deep Learning</span>
                <span className="text-xs font-mono text-zinc-400">PyG Citation Topology</span>
              </div>
              <span className="text-[10px] font-mono text-violet-400">169K Nodes</span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2 font-mono">
              <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                <span className="text-[10px] text-zinc-500 block">GCN Benchmark</span>
                <span className="text-xs font-bold text-violet-300">Spatial Convolution</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                <span className="text-[10px] text-zinc-500 block">GAT Benchmark</span>
                <span className="text-xs font-bold text-pink-300">Multi-Head Attention</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-zinc-800/80 pt-2">
              <span>Streamlit Visual Inference Subgraph</span>
              <span className="text-violet-400">Word2Vec 128D</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-48 sm:h-56 bg-[#0c0d14] rounded-2xl p-4 border border-zinc-800/80 flex flex-col justify-between overflow-hidden relative group-hover:border-rose-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">MLOps & Tracking</span>
                <span className="text-xs font-mono text-zinc-400">{project.shortTitle}</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">DagsHub & DVC</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 my-2 font-mono text-xs">
              <div className="text-zinc-300 font-semibold mb-1">Automated Reproducible Pipeline</div>
              <div className="text-[11px] text-zinc-500">Raw Ingestion -&gt; EDA -&gt; XGBoost Tuning -&gt; Model Registry</div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-zinc-800/80 pt-2">
              <span>100% Reproducible Experiments</span>
              <span className="text-emerald-400 font-semibold">Production Ready</span>
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
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white dark:text-white tracking-tight uppercase">
            FEATURED SYSTEMS
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
