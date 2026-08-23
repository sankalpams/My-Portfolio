import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  CheckCircle2,
  Code2,
  Languages,
  Atom
} from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Education &amp; Academic Journey
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
            Structured foundation across quantitative sciences, computational statistics, software engineering, and technical communication.
          </p>
        </div>

        {/* Tree Container */}
        <div className="relative max-w-5xl mx-auto py-2">
          
          {/* Central Glowing Trunk */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-8 w-1 -translate-x-1/2 bg-gradient-to-b from-rose-500 via-purple-500 to-cyan-500 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.4)]" />
          <div className="absolute left-6 md:left-1/2 top-4 bottom-8 w-4 -translate-x-1/2 bg-gradient-to-b from-rose-500/30 via-purple-500/20 to-cyan-500/20 rounded-full blur-sm" />

          {/* Tree Nodes */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {educationTimeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              let nodeIcon = <GraduationCap className="w-5 h-5 text-rose-400" />;
              let nodeBorder = 'border-rose-500 shadow-rose-500/30';
              let nodePulse = 'bg-rose-500';
              let cardHoverBorder = 'group-hover:border-rose-500/50';
              let titleHover = 'group-hover:text-rose-300';
              let tagBg = 'bg-rose-500/10 text-rose-300 border-rose-500/20';

              if (item.id === 'esoft-diplomas') {
                nodeIcon = <Code2 className="w-5 h-5 text-cyan-400" />;
                nodeBorder = 'border-cyan-500 shadow-cyan-500/30';
                nodePulse = 'bg-cyan-500';
                cardHoverBorder = 'group-hover:border-cyan-500/50';
                titleHover = 'group-hover:text-cyan-300';
                tagBg = 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
              } else if (item.id === 'al-physics') {
                nodeIcon = <Atom className="w-5 h-5 text-indigo-400" />;
                nodeBorder = 'border-indigo-500 shadow-indigo-500/30';
                nodePulse = 'bg-indigo-500';
                cardHoverBorder = 'group-hover:border-indigo-500/50';
                titleHover = 'group-hover:text-indigo-300';
                tagBg = 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20';
              }

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-0 group`}
                >
                  {/* Central Trunk Node Icon */}
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-12 h-12 rounded-2xl bg-[#0c0d14] border-2 flex items-center justify-center shadow-xl z-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${nodeBorder}`}>
                    <div className={`absolute inset-0 rounded-2xl ${nodePulse} opacity-15 blur-sm`} />
                    {nodeIcon}
                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${nodePulse} border-2 border-black animate-pulse`} />
                  </div>

                  {/* Desktop Horizontal Branch Connector */}
                  <div 
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[calc(50%-1.5rem)] h-0.5 z-0 ${
                      isLeft 
                        ? 'right-1/2 bg-gradient-to-l from-rose-500/60 to-transparent' 
                        : 'left-1/2 bg-gradient-to-r from-rose-500/60 to-transparent'
                    }`} 
                  />

                  {/* Mobile Horizontal Branch Connector */}
                  <div className="md:hidden absolute left-6 top-10 w-8 h-0.5 bg-gradient-to-r from-rose-500/60 to-zinc-700 z-0" />

                  {/* Education Tree Card */}
                  <div className="w-full md:w-[calc(50%-3.5rem)] pl-16 md:pl-0">
                    <div className={`rounded-3xl bg-[#0c0d14]/90 backdrop-blur-xl border border-zinc-800/90 p-6 sm:p-7 shadow-2xl transition-all duration-300 relative overflow-hidden ${cardHoverBorder} group-hover:-translate-y-1 shadow-black/60`}>
                      
                      {/* Top Date / Status Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3 mb-4">
                        <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md border ${tagBg}`}>
                          {item.period}
                        </span>
                        {item.status && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold whitespace-nowrap">
                            ● {item.status}
                          </span>
                        )}
                      </div>

                      {/* Degree Title */}
                      <h3 className={`text-lg sm:text-xl font-display font-bold text-white mb-1.5 transition-colors ${titleHover}`}>
                        {item.degree}
                      </h3>

                      {/* Institution & Location */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400 mb-4">
                        <span className="text-zinc-200 font-semibold">{item.institution}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-zinc-400">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 font-sans">
                        {item.summary}
                      </p>

                      {/* Highlights / Dual Tracks */}
                      {item.id === 'esoft-diplomas' ? (
                        <div className="pt-3.5 border-t border-zinc-800/80 space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                            <span className="text-cyan-300 font-bold text-xs flex items-center gap-1.5 mb-1">
                              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                              Diploma in Information Technology (DIT)
                            </span>
                            <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                              Relational Databases (SQL Server, MySQL), Object-Oriented Programming (Java, C#), Web Systems & Architecture.
                            </p>
                          </div>

                          <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                            <span className="text-amber-300 font-bold text-xs flex items-center gap-1.5 mb-1">
                              <Languages className="w-3.5 h-3.5 text-amber-400" />
                              Diploma in English
                            </span>
                            <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                              Technical Documentation, Research Synthesis, Professional Public Speaking & Formal Presentations.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="pt-3.5 border-t border-zinc-800/80 space-y-2 font-mono text-xs">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">
                            Core Disciplines &amp; Highlights:
                          </span>
                          {item.courseworkOrHighlights.map((hl, hlIdx) => (
                            <div key={hlIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                              <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 mt-0.5 shrink-0" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}

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
