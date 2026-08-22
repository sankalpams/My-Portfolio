import React, { useMemo } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  Cpu,
  BarChart3
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projectsData } from '../data/projectsData';
import { useRouter } from '../router/RouterContext';

export const ProjectDetailsPage: React.FC = () => {
  const { route, navigate } = useRouter();
  const projectId = route.params.id;

  const projectIndex = useMemo(() => {
    return projectsData.findIndex(p => p.id === projectId);
  }, [projectId]);

  const project = projectIndex !== -1 ? projectsData[projectIndex] : null;

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  if (!project) {
    return (
      <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-zinc-400 text-sm mb-8 font-mono">The requested project case study could not be located.</p>
        <button
          onClick={() => navigate('#/projects')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-mono text-xs font-bold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Projects Catalog</span>
        </button>
      </div>
    );
  }

  const getCustomProjectBanner = () => {
    switch (project.id) {
      case 'financial-ai-coaching':
        return (
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0d0e17] border border-rose-500/30 font-mono shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 pb-3 sm:pb-4 mb-4 sm:mb-6 gap-2 sm:gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">
                  FYP AI Architecture Subsystem
                </span>
              </div>
              <span className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                Flutter Mobile Presentation ↔ FastAPI AI Service ↔ Supabase DB
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Sequential Forecaster</span>
                <span className="text-base font-bold text-white mt-1 block">LSTM Regressor</span>
                <span className="text-xs text-rose-400 mt-1 block font-semibold">Mean Absolute Error: 4.2%</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Sentiment Engine</span>
                <span className="text-base font-bold text-white mt-1 block">Fine-Tuned BERT</span>
                <span className="text-xs text-emerald-400 mt-1 block font-semibold">Real-Time Risk Scoring</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Explainable AI</span>
                <span className="text-base font-bold text-white mt-1 block">SHAP & LIME</span>
                <span className="text-xs text-cyan-400 mt-1 block font-semibold">100% Attributed Inferences</span>
              </div>
            </div>

            <div className="text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-zinc-800/80">
              <span>Supervised by: Dr. Chameera De Silva & Mr. Nethum Dilchitha</span>
              <span className="text-rose-400 font-semibold">SLTC Final Year Research</span>
            </div>
          </div>
        );

      case 'smartcare-hospital-risk':
        return (
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#090e14] border border-cyan-500/30 font-mono shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 pb-3 sm:pb-4 mb-4 sm:mb-6 gap-2 sm:gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Healthcare Triage & Diagnostic Audit
                </span>
              </div>
              <span className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                Target Leakage Audit Cleared
              </span>
            </div>

            {/* Visual Screenshot Showcase */}
            <div className="mb-6 rounded-2xl overflow-hidden border border-zinc-800 bg-black/40 shadow-inner group">
              <img 
                src="/smartcare_thumb.png" 
                alt="SmartCare Clinical Intake & Diagnostics" 
                className="w-full h-auto max-h-[360px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-500" 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Champion Model</span>
                <span className="text-base font-bold text-white mt-1 block">Calibrated Logistic Reg</span>
                <span className="text-xs text-cyan-400 mt-1 block font-semibold">Native Odds-Ratio Transparency</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Calibration Metric</span>
                <span className="text-base font-bold text-white mt-1 block">Optimal Brier Score</span>
                <span className="text-xs text-emerald-400 mt-1 block font-semibold">Platt Scaling Applied</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Leakage Audit</span>
                <span className="text-base font-bold text-white mt-1 block">Zero Artifacts</span>
                <span className="text-xs text-emerald-400 mt-1 block font-semibold">Verified Robust Generalization</span>
              </div>
            </div>

            <div className="text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-zinc-800/80">
              <span>Healthcare Clinical Risk Stratification</span>
              <span className="text-cyan-400 font-semibold">Scikit-learn · Pandas · Seaborn</span>
            </div>
          </div>
        );

      case 'ogbn-arxiv-gnn':
        return (
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#110d1c] border border-violet-500/30 font-mono shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 pb-3 sm:pb-4 mb-4 sm:mb-6 gap-2 sm:gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-xs font-bold text-violet-300 uppercase tracking-wider">
                  Graph Neural Network Architecture Pipeline
                </span>
              </div>
              <span className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                PyTorch Geometric (PyG) + Streamlit
              </span>
            </div>

            {/* Visual Screenshot Showcase */}
            <div className="mb-6 rounded-2xl overflow-hidden border border-zinc-800 bg-black/40 shadow-inner group">
              <img 
                src="/ogbn_arxiv_thumb.png" 
                alt="OGBN-Arxiv Deep Graph Intelligence Suite" 
                className="w-full h-auto max-h-[360px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-500" 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Graph Topology</span>
                <span className="text-base font-bold text-white mt-1 block">169,343 Nodes</span>
                <span className="text-xs text-violet-400 mt-1 block font-semibold">1.16M+ Directed Citations</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Benchmark</span>
                <span className="text-base font-bold text-white mt-1 block">GCN vs Multi-Head GAT</span>
                <span className="text-xs text-pink-400 mt-1 block font-semibold">Spatial Convolution & Attention</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Visual Inference</span>
                <span className="text-base font-bold text-white mt-1 block">Interactive Subgraph</span>
                <span className="text-xs text-emerald-400 mt-1 block font-semibold">Streamlit Live App</span>
              </div>
            </div>

            <div className="text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-zinc-800/80">
              <span>Open Graph Benchmark (OGBN-Arxiv) Dataset</span>
              <span className="text-violet-400 font-semibold">PyTorch Geometric Benchmark</span>
            </div>
          </div>
        );

      case 'customer-churn-mlops':
        return (
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#09120e] border border-emerald-500/30 font-mono shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 pb-3 sm:pb-4 mb-4 sm:mb-6 gap-2 sm:gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Reproducible MLOps Lifecycle & Tracking
                </span>
              </div>
              <span className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                DagsHub Registry + DVC Data Versioning
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Experiment Tracking</span>
                <span className="text-base font-bold text-white mt-1 block">DagsHub & DVC</span>
                <span className="text-xs text-emerald-400 mt-1 block font-semibold">100% Reproducible Runs</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Trained Model</span>
                <span className="text-base font-bold text-white mt-1 block">Tuned XGBoost</span>
                <span className="text-xs text-amber-400 mt-1 block font-semibold">PR-AUC Optimized</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Feature Analysis</span>
                <span className="text-base font-bold text-white mt-1 block">Mutual Information</span>
                <span className="text-xs text-cyan-400 mt-1 block font-semibold">Hypothesis Tested Drivers</span>
              </div>
            </div>

            <div className="text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-zinc-800/80">
              <span>Production Pipeline Architecture</span>
              <span className="text-emerald-400 font-semibold">Scikit-learn · XGBoost · DagsHub</span>
            </div>
          </div>
        );

      case 'interactive-data-science-portfolio':
        return (
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#14090c] border border-rose-500/30 font-mono shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 pb-3 sm:pb-4 mb-4 sm:mb-6 gap-2 sm:gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-rose-400 animate-pulse" />
                <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">
                  Interactive Web Architecture & Design System
                </span>
              </div>
              <span className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                React 18 + TypeScript + Tailwind CSS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Motion Performance</span>
                <span className="text-base font-bold text-white mt-1 block">60/120 FPS Framer Motion</span>
                <span className="text-xs text-rose-400 mt-1 block font-semibold">GPU Subpixel Keyframes</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Design Aesthetic</span>
                <span className="text-base font-bold text-white mt-1 block">Radar Grid & Glow Mesh</span>
                <span className="text-xs text-cyan-400 mt-1 block font-semibold">Unified Poppins Typography</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Responsiveness</span>
                <span className="text-base font-bold text-white mt-1 block">100% Fluid Scaling</span>
                <span className="text-xs text-emerald-400 mt-1 block font-semibold">Mobile-First 320px to 4K</span>
              </div>
            </div>

            <div className="text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-zinc-800/80">
              <span>Client-Side Hash Router & Deep Linking</span>
              <span className="text-rose-400 font-semibold">Vite · TypeScript · Tailwind CSS</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#141009] border border-amber-500/30 font-mono shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 pb-3 sm:pb-4 mb-4 sm:mb-6 gap-2 sm:gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  IoT Real-Time Telemetry & Automation Backend
                </span>
              </div>
              <span className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                PostgreSQL Time-Series + Python Engine
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Architecture</span>
                <span className="text-base font-bold text-white mt-1 block">Real-Time Event Driven</span>
                <span className="text-xs text-amber-400 mt-1 block font-semibold">Automated Actuation Logic</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Database Layer</span>
                <span className="text-base font-bold text-white mt-1 block">PostgreSQL</span>
                <span className="text-xs text-emerald-400 mt-1 block font-semibold">Time-Series Indexed</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <span className="text-[11px] text-zinc-500 block uppercase">Telemetry Pipeline</span>
                <span className="text-base font-bold text-white mt-1 block">Multi-Sensor Ingestion</span>
                <span className="text-xs text-cyan-400 mt-1 block font-semibold">Zero-Latency Alerts</span>
              </div>
            </div>

            <div className="text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-zinc-800/80">
              <span>Smart Agriculture & Greenhouse Telemetry</span>
              <span className="text-amber-400 font-semibold">Python · PostgreSQL · IoT</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <button
              onClick={() => navigate('#/')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <button
              onClick={() => navigate('#/projects')}
              className="hover:text-white transition-colors"
            >
              Projects
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-rose-300 font-semibold truncate max-w-[200px] sm:max-w-none">
              {project.shortTitle}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('#/projects')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </button>
            
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              Project {projectIndex + 1} of {projectsData.length}
            </span>
          </div>
        </div>

        {/* Project Hero Header */}
        <div className="mb-12">
          
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30">
              {project.category}
            </span>

            {project.status && (
              <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-semibold ${
                project.status === 'In Progress'
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                  : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
              }`}>
                ● {project.status}
              </span>
            )}

            {project.isFYP && (
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                ★ Final Year Project (Lead)
              </span>
            )}

            {project.role && (
              <span className="px-3.5 py-1 rounded-full text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800">
                Role: {project.role}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase mb-3">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg font-mono text-rose-400/90 max-w-3xl mb-8">
            {project.subtitle}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-700 hover:border-rose-500/50 text-xs font-mono font-bold transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4 text-zinc-300" />
              <span>Inspect Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-slate-950 text-xs font-mono font-bold transition-all shadow-lg hover:scale-105"
              >
                <span>{project.dagshubUrl ? 'View DagsHub MLOps Pipeline' : 'Launch Live Streamlit App'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={() => navigate('#/contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono font-medium transition-all"
            >
              <span>Discuss This Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
            </button>
          </div>

        </div>

        {/* Project Custom Showcase Visual Banner */}
        <div className="mb-14">
          {getCustomProjectBanner()}
        </div>

        {/* Grid: Overview & Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Overview */}
          <div className="lg:col-span-7 rounded-3xl bg-[#09090c] border border-zinc-800 p-6 sm:p-8 shadow-xl">
            <h2 className="text-sm font-mono uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Project Executive Summary
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans mb-6">
              {project.overview}
            </p>

            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Key Engineering Innovations:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 text-xs text-zinc-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Cards */}
          <div className="lg:col-span-5 rounded-3xl bg-[#09090c] border border-zinc-800 p-6 sm:p-8 shadow-xl">
            <h2 className="text-sm font-mono uppercase tracking-wider text-rose-400 mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Benchmark & Architecture Metrics
            </h2>

            <div className="grid grid-cols-2 gap-3.5">
              {project.metrics?.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800"
                >
                  <div className="text-[11px] font-mono text-zinc-400">
                    {metric.label}
                  </div>
                  <div className="text-base sm:text-lg font-display font-extrabold text-rose-300 my-0.5">
                    {metric.value}
                  </div>
                  {metric.subtext && (
                    <div className="text-[10px] text-zinc-500 font-mono">
                      {metric.subtext}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Technical Architecture Layer Breakdown */}
        {project.architecture && (
          <div className="rounded-3xl bg-[#09090c] border border-zinc-800 p-6 sm:p-8 shadow-xl mb-14">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
                <Layers className="w-5 h-5 text-rose-400" />
                <span>Technical Architecture & Layer Breakdown</span>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                {project.architecture.length} System Layers
              </span>
            </div>

            <div className="space-y-4">
              {project.architecture.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-zinc-700 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 font-mono text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <h4 className="font-display font-bold text-base text-white">
                        {layer.layer}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 pl-8.5">
                      {layer.responsibility}
                    </p>
                  </div>

                  <div className="shrink-0 pl-8.5 md:pl-0">
                    <span className="inline-block text-xs font-mono font-semibold px-3 py-1.5 rounded-xl bg-zinc-800 text-rose-300 border border-zinc-700">
                      {layer.technology}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deep Engineering Methodologies & Implementation Details */}
        <div className="rounded-3xl bg-[#09090c] border border-zinc-800 p-6 sm:p-8 shadow-xl mb-14">
          <h2 className="text-sm font-mono uppercase tracking-wider text-rose-400 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Detailed Engineering Responsibilities & Methodological Rigor
          </h2>

          <div className="space-y-3.5">
            {project.bullets.map((bullet, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 leading-relaxed"
              >
                <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>



        {/* Technologies & Frameworks */}
        <div className="rounded-3xl bg-[#09090c] border border-zinc-800 p-6 sm:p-8 shadow-xl mb-14">
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-rose-400" />
            Technologies, Frameworks & Tooling
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-rose-500/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Previous & Next Project Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-zinc-800/80 mb-12">
          {/* Previous */}
          <button
            onClick={() => navigate(`#/project/${prevProject.id}`)}
            className="rounded-3xl bg-[#09090c] border border-zinc-800 p-6 flex flex-col items-start justify-between text-left hover:border-rose-500/40 transition-all group"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-rose-400" />
              <span>PREVIOUS CASE STUDY</span>
            </div>
            <div className="font-display font-bold text-lg text-white group-hover:text-rose-300 transition-colors">
              {prevProject.title}
            </div>
            <div className="text-xs font-mono text-zinc-400 mt-1">
              {prevProject.category}
            </div>
          </button>

          {/* Next */}
          <button
            onClick={() => navigate(`#/project/${nextProject.id}`)}
            className="rounded-3xl bg-[#09090c] border border-zinc-800 p-6 flex flex-col items-end justify-between text-right hover:border-rose-500/40 transition-all group"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
              <span>NEXT CASE STUDY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-rose-400" />
            </div>
            <div className="font-display font-bold text-lg text-white group-hover:text-rose-300 transition-colors">
              {nextProject.title}
            </div>
            <div className="text-xs font-mono text-zinc-400 mt-1">
              {nextProject.category}
            </div>
          </button>
        </div>

      </div>
    </div>
  );
};
