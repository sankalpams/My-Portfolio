import React from 'react';
import { 
  Star, 
  Bookmark,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const focusAreas = [
    { 
      title: 'Data Engineering', 
      desc: 'Architecting end-to-end ETL/ELT pipelines, automated ingestion, validation, deduplication, and relational schema modeling in PostgreSQL & MySQL.' 
    },
    { 
      title: 'Cloud Data Platforms & APIs', 
      desc: 'Designing zero-cost cloud data stacks (Supabase, Neon serverless Postgres) and serving decoupled data via FastAPI REST microservices.' 
    },
    { 
      title: 'Machine Learning & Deep Learning', 
      desc: 'Building and evaluating models across tabular data, time series forecasting, NLP (BERT, XLM-RoBERTa), and Graph Neural Networks (GNNs).' 
    },
    { 
      title: 'MLOps & CI/CD Pipelines', 
      desc: 'Packaging reproducible, version-controlled workflows with DagsHub, Docker containerization, and automated GitHub Actions pipelines.' 
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Academic Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-mono text-rose-500 dark:text-rose-400 uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Background &amp; Philosophy</span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                I'm a <strong className="text-zinc-900 dark:text-white font-semibold">final-year Data Science undergraduate</strong> focused on building the data infrastructure behind modern analytics and ML products. Hands-on with end-to-end pipelines: ingestion, cleaning, validation, transformation, relational modelling in PostgreSQL/MySQL, and serving data through decoupled APIs.
              </p>

              <p>
                Currently studying at <strong className="text-rose-600 dark:text-rose-300 font-medium">Sri Lanka Technology Campus (SLTC)</strong>, I combine strong Python and SQL skills with reproducible workflows (DagsHub, Docker, GitHub Actions) and a practical machine learning background to engineer data systems teams can rely on.
              </p>
            </div>

            {/* Clean Academic Highlight Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 card-3d flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-zinc-900 text-rose-500 dark:text-rose-400 border border-rose-100 dark:border-zinc-800 pill-3d">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block uppercase font-medium">Degree Program</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-xs">{personalInfo.degree}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 card-3d flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-zinc-800 pill-3d">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block uppercase font-medium">Academic Batch</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-xs">{personalInfo.batch}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Focus Areas Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-7 card-3d">
              
              <div className="flex items-center gap-2.5 mb-6 text-zinc-900 dark:text-white font-display font-bold text-base">
                <Bookmark className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                <span>Focus Areas</span>
              </div>

              <div className="space-y-4">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <Star className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors">
                        {area.title}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {area.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
