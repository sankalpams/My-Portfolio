import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 dark:text-white tracking-tight">
            Education & Academic Journey
          </h2>
          <p className="mt-3 text-slate-400 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Structured foundation across quantitative sciences, computational statistics, software engineering, and technical communication.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-blue-500 to-slate-800 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800 sm:hidden" />

          <div className="space-y-12">
            {educationTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-8 h-8 rounded-full bg-dark-bg dark:bg-dark-bg border-2 border-brand-400 flex items-center justify-center shadow-md shadow-brand-500/20 z-10 group-hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-400" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                    <div className="rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 border border-slate-800/90 dark:border-slate-800/90 p-6 sm:p-7 shadow-lg group-hover:border-brand-500/40 transition-all duration-300">
                      
                      {/* Period & Status Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-brand-500/10 text-brand-300 border border-brand-500/20">
                          <Calendar className="w-3 h-3 text-brand-400" />
                          <span>{item.period}</span>
                        </div>

                        {item.status && (
                          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            ● {item.status}
                          </span>
                        )}
                      </div>

                      {/* Degree & Institution */}
                      <h3 className="text-xl font-display font-bold text-slate-100 dark:text-white mb-1 group-hover:text-brand-300 transition-colors">
                        {item.degree}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-slate-400 mb-4">
                        <span className="text-brand-400 font-semibold">{item.institution}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-2 pt-3 border-t border-slate-800/80 dark:border-slate-800/80">
                        {item.courseworkOrHighlights.map((hl, hlIdx) => (
                          <div key={hlIdx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 mt-0.5 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
