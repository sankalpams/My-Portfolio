import React, { useState } from 'react';
import { 
  Cpu, 
  BarChart3, 
  Code2, 
  Layers, 
  Users, 
  Search, 
  Sparkles, 
  Terminal,
  Star
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-brand-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Users': return <Users className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-brand-400" />;
    }
  };

  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery && filteredSkills.length === 0) {
      return null;
    }
    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean) as typeof skillCategories;

  return (
    <section id="skills" className="py-20 relative bg-zinc-50/50 dark:bg-dark-bg/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-mono uppercase tracking-wider mb-3 pill-3d">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
            Skills &amp; Core Tooling
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Curated across 4 years of rigorous data science coursework, research prototyping, and collaborative production builds.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900/70 border border-zinc-200 dark:border-slate-800 card-3d">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-rose-500 text-white font-bold btn-3d-primary'
                  : 'text-zinc-600 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-rose-500 text-white font-bold btn-3d-primary'
                    : 'text-zinc-600 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. PyTorch, SHAP, GNN)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900/80 border border-zinc-200 dark:border-slate-800 text-zinc-900 dark:text-slate-200 placeholder:text-zinc-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors pill-3d"
            />
          </div>

        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-white dark:bg-dark-surface/80 border border-zinc-200 dark:border-slate-800/80 p-6 flex flex-col justify-between card-3d group"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-slate-900/90 border border-zinc-200 dark:border-slate-800 group-hover:scale-105 transition-transform pill-3d">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white">
                      {category.name}
                    </h3>
                    <p className="text-[11px] text-zinc-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges List */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all pill-3d ${
                        skill.isKeySkill
                          ? 'bg-rose-50 dark:bg-slate-900 text-zinc-900 dark:text-slate-200 border border-rose-200 dark:border-rose-500/40 hover:border-rose-400 font-medium'
                          : 'bg-zinc-100 dark:bg-slate-900/50 text-zinc-700 dark:text-slate-400 border border-zinc-200 dark:border-slate-800 hover:text-zinc-900 dark:hover:text-slate-200'
                      }`}
                    >
                      {skill.isKeySkill && (
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      )}
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-zinc-500 font-mono">
                          • {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Indicator */}
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{category.skills.length} Competencies</span>
                <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400/80">
                  <Terminal className="w-3 h-3" />
                  Verified in Projects
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout */}
        <div className="mt-12 p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-zinc-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left card-3d">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-500/20 pill-3d">
              <Star className="w-4 h-4" />
            </div>
            <div>
              <div className="font-display font-semibold text-sm text-zinc-900 dark:text-slate-200">
                Core Signature Competencies
              </div>
              <div className="text-xs text-zinc-600 dark:text-slate-400">
                GNNs (PyTorch Geometric), Sequential LSTM Forecasting, Explainable AI (SHAP/LIME), and MLOps on DagsHub.
              </div>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-mono shrink-0"
          >
            <span>See Applied Implementations</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
