import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  BookOpen, 
  ExternalLink, 
  Filter
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projectsData } from '../data/projectsData';
import type { Project, ProjectCategory } from '../types';
import { useRouter } from '../router/RouterContext';

export const ProjectsPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = [
    'All',
    'Deep Learning & NLP',
    'Machine Learning',
    'Graph Neural Networks',
    'MLOps & Systems',
    'Full-Stack & Web'
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
          <div className="w-full bg-[#0c0d14] rounded-2xl p-3 sm:p-4 border border-zinc-800/80 flex flex-col justify-between relative group-hover:border-rose-500/40 transition-colors gap-3">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] sm:text-xs font-mono uppercase bg-cyan-500/20 text-cyan-300 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-semibold whitespace-nowrap shrink-0">
                  Healthcare ML
                </span>
                <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">
                  SmartCare Health Engine
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 whitespace-nowrap shrink-0">
                ● Calibrated
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-zinc-800/90 aspect-[16/8] sm:aspect-[16/7.5] group/thumb">
              <img 
                src="/smartcare_thumb.png" 
                alt="SmartCare Clinical Intake & Diagnostics" 
                className="w-full h-full object-cover object-top group-hover/thumb:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-zinc-300">
                <span className="bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">Clinical Intake Form</span>
                <span className="text-cyan-300 font-semibold bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">Platt Scaling</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-300 border-t border-zinc-800/80 pt-2.5 gap-2">
              <span className="truncate">Probability Calibration</span>
              <span className="text-cyan-400 font-semibold whitespace-nowrap shrink-0">ROC-AUC: 0.94</span>
            </div>
          </div>
        );

      case 'ogbn-arxiv-gnn':
        return (
          <div className="w-full bg-[#0c0d14] rounded-2xl p-3 sm:p-4 border border-zinc-800/80 flex flex-col justify-between relative group-hover:border-rose-500/40 transition-colors gap-3">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] sm:text-xs font-mono uppercase bg-violet-500/20 text-violet-300 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-semibold whitespace-nowrap shrink-0">
                  Graph Deep Learning
                </span>
                <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">
                  OGBN-Arxiv Graph Suite
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-violet-400 font-semibold whitespace-nowrap shrink-0">169K Nodes</span>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-zinc-800/90 aspect-[16/8] sm:aspect-[16/7.5] group/thumb">
              <img 
                src="/ogbn_arxiv_thumb.png" 
                alt="OGBN-Arxiv Deep Graph Intelligence Suite" 
                className="w-full h-full object-cover object-top group-hover/thumb:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-zinc-300">
                <span className="bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">3D Citation Manifold</span>
                <span className="text-violet-300 font-semibold bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">GCN vs GAT</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-300 border-t border-zinc-800/80 pt-2.5 gap-2">
              <span className="truncate">Streamlit Visual Subgraph</span>
              <span className="text-violet-400 font-semibold whitespace-nowrap shrink-0">Word2Vec 128D</span>
            </div>
          </div>
        );

      case 'interactive-data-science-portfolio':
        return (
          <div className="w-full bg-[#0c0d14] rounded-2xl p-4 sm:p-5 border border-zinc-800/80 flex flex-col justify-between relative group-hover:border-rose-500/40 transition-colors gap-3">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] sm:text-xs font-mono uppercase bg-rose-500/20 text-rose-300 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-semibold whitespace-nowrap shrink-0">
                  Web &amp; UI/UX
                </span>
                <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">
                  React 18 &amp; TypeScript
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" /> Live System
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 font-mono">
              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[10px] sm:text-xs text-zinc-400 block truncate">Framework</span>
                <span className="text-xs sm:text-sm font-bold text-white block truncate mt-0.5">Vite + React 18</span>
                <span className="text-[10px] sm:text-xs text-rose-400 block mt-0.5 font-semibold">Strict TS</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[10px] sm:text-xs text-zinc-400 block truncate">Motion Engine</span>
                <span className="text-xs sm:text-sm font-bold text-white block truncate mt-0.5">Framer Motion</span>
                <span className="text-[10px] sm:text-xs text-cyan-400 block mt-0.5 font-semibold">60/120 FPS</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-300 border-t border-zinc-800/80 pt-2.5 gap-2">
              <span className="truncate">Tailwind CSS + Radar Grid</span>
              <span className="text-rose-400 font-semibold whitespace-nowrap shrink-0">100% Mobile Fluid</span>
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
    <div className="min-h-screen py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link & Title */}
        <div className="mb-10">
          <button
            onClick={() => navigate('#/')}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-rose-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Overview</span>
          </button>

          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              COMPLETE PORTFOLIO CATALOG
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase">
              ENGINEERED ML &amp; DL SYSTEMS
            </h1>
            <div className="w-12 h-1 bg-rose-400 rounded-full mt-3 mb-4" />
            <p className="max-w-2xl text-xs sm:text-sm text-zinc-400 font-mono">
              In-depth research projects, neural network architectures, healthcare diagnostics, and production MLOps pipelines.
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-zinc-900 border border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-rose-500 text-white font-bold shadow-lg shadow-rose-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, model, or stack (e.g. PyTorch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-rose-500 transition-colors font-mono"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#09090c] border border-zinc-800 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group shadow-xl"
            >
              <div>
                {/* Visual Preview Box */}
                <div 
                  onClick={() => navigate(`#/project/${project.id}`)}
                  className="mb-6 cursor-pointer"
                >
                  {getProjectPreviewMock(project)}
                </div>

                {/* Category & Status */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20 font-semibold">
                    {project.category}
                  </span>
                  {project.isFYP && (
                    <span className="text-[11px] font-mono text-blue-300 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 font-semibold">
                      ★ FYP Lead
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 
                  onClick={() => navigate(`#/project/${project.id}`)}
                  className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-rose-300 transition-colors mb-1.5 cursor-pointer"
                >
                  {project.title}
                </h2>

                <p className="text-xs font-mono text-rose-400/90 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                  {project.overview}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-3">
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
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-xs font-mono font-medium transition-all"
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#09090c] rounded-3xl border border-zinc-800 p-8">
            <Filter className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-display font-bold text-white mb-1">No Projects Found</h3>
            <p className="text-xs text-zinc-400 font-mono mb-4">No projects match "{searchQuery}" in category "{selectedCategory}".</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-mono text-zinc-200 hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
