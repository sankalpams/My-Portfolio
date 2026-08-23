import React, { useState } from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2,
  Award,
  FileText,
  GitBranch,
  Code2,
  Languages,
  Atom,
  MapPin,
  Network,
  Cpu
} from 'lucide-react';
import { certifications, educationTimeline } from '../data/portfolioData';

export const Milestones: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certificates'>('education');

  return (
    <section id="milestones" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            ACADEMIC &amp; CREDENTIAL MILESTONES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            EDUCATION &amp; CERTIFICATIONS
          </h2>
          <div className="w-12 h-1 bg-rose-500 rounded-full mt-3" />
        </div>

        {/* Tab Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-col sm:flex-row p-1.5 rounded-2xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 gap-1.5 w-full sm:w-auto shadow-sm dark:shadow-none">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education Journey</span>
            </button>

            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeTab === 'certificates'
                  ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Certificates</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Education Tree Structure */}
        {activeTab === 'education' && (
          <div className="relative max-w-5xl mx-auto animate-fadeIn py-2">
            
            {/* Central Trunk - Desktop: centered, Mobile: left-aligned */}
            <div className="relative">
              {/* Glowing Ambient Glow Mesh behind trunk */}
              <div className="absolute left-6 md:left-1/2 top-4 bottom-8 w-1 -translate-x-1/2 bg-gradient-to-b from-rose-500 via-purple-500 to-cyan-500 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.4)]" />
              <div className="absolute left-6 md:left-1/2 top-4 bottom-8 w-4 -translate-x-1/2 bg-gradient-to-b from-rose-500/30 via-purple-500/20 to-cyan-500/20 rounded-full blur-sm" />

              {/* Tree Nodes & Branches */}
              <div className="space-y-12 md:space-y-16 relative z-10">
                {educationTimeline.map((edu, idx) => {
                  const isLeft = idx % 2 === 0;
                  
                  // Custom branch theme colors & icons
                  let nodeIcon = <GraduationCap className="w-5 h-5 text-rose-400" />;
                  let nodeBorder = 'border-rose-500 shadow-rose-500/30';
                  let nodePulse = 'bg-rose-500';
                  let cardHoverBorder = 'group-hover:border-rose-500/50';
                  let titleHover = 'group-hover:text-rose-300';
                  let tagBg = 'bg-rose-500/10 text-rose-300 border-rose-500/20';

                  if (edu.id === 'esoft-diplomas') {
                    nodeIcon = <Code2 className="w-5 h-5 text-cyan-400" />;
                    nodeBorder = 'border-cyan-500 shadow-cyan-500/30';
                    nodePulse = 'bg-cyan-500';
                    cardHoverBorder = 'group-hover:border-cyan-500/50';
                    titleHover = 'group-hover:text-cyan-300';
                    tagBg = 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
                  } else if (edu.id === 'al-physics') {
                    nodeIcon = <Atom className="w-5 h-5 text-indigo-400" />;
                    nodeBorder = 'border-indigo-500 shadow-indigo-500/30';
                    nodePulse = 'bg-indigo-500';
                    cardHoverBorder = 'group-hover:border-indigo-500/50';
                    titleHover = 'group-hover:text-indigo-300';
                    tagBg = 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20';
                  }

                  return (
                    <div 
                      key={edu.id}
                      className={`relative flex flex-col md:flex-row items-start md:items-center ${
                        isLeft ? 'md:flex-row-reverse' : ''
                      } gap-6 md:gap-0 group`}
                    >
                      {/* Central Trunk Node Icon */}
                      <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-[#0c0d14] border-2 flex items-center justify-center card-3d z-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${nodeBorder}`}>
                        <div className={`absolute inset-0 rounded-2xl ${nodePulse} opacity-15 blur-sm`} />
                        {nodeIcon}
                        {/* Node mini pulse dot */}
                        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${nodePulse} border-2 border-white dark:border-black animate-pulse`} />
                      </div>

                      {/* Desktop Horizontal Branch Arm Connector */}
                      <div 
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[calc(50%-1.5rem)] h-0.5 z-0 ${
                          isLeft 
                            ? 'right-1/2 bg-gradient-to-l from-rose-500/60 to-transparent' 
                            : 'left-1/2 bg-gradient-to-r from-rose-500/60 to-transparent'
                        }`} 
                      />

                      {/* Mobile Horizontal Branch Connector */}
                      <div className="md:hidden absolute left-6 top-10 w-8 h-0.5 bg-gradient-to-r from-rose-500/60 to-zinc-400 dark:to-zinc-700 z-0" />

                      {/* Education Tree Card */}
                      <div className="w-full md:w-[calc(50%-3.5rem)] pl-16 md:pl-0">
                        <div className={`rounded-3xl bg-white/95 dark:bg-[#0c0d14]/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/90 p-6 sm:p-7 card-3d relative overflow-hidden ${cardHoverBorder}`}>
                          
                          {/* Top Date / Status Strip */}
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-3 mb-4">
                            <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md border pill-3d ${tagBg}`}>
                              {edu.period}
                            </span>
                            {edu.status && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20 font-semibold whitespace-nowrap pill-3d">
                                ● {edu.status}
                              </span>
                            )}
                          </div>

                          {/* Degree Title */}
                          <h3 className={`text-lg sm:text-xl font-display font-bold text-zinc-900 dark:text-white mb-1.5 transition-colors ${titleHover}`}>
                            {edu.degree}
                          </h3>

                          {/* Institution & Location */}
                          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">
                            <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{edu.institution}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                              <MapPin className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
                              {edu.location}
                            </span>
                          </div>

                          {/* Summary */}
                          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 font-sans">
                            {edu.summary}
                          </p>

                          {/* Highlights / Dual Tracks */}
                          {edu.id === 'esoft-diplomas' ? (
                            <div className="pt-3.5 border-t border-zinc-200 dark:border-zinc-800/80 space-y-3 font-mono text-xs">
                              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
                                <span className="text-cyan-600 dark:text-cyan-300 font-bold text-xs flex items-center gap-1.5 mb-1">
                                  <Code2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                                  Diploma in Information Technology (DIT)
                                </span>
                                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                                  Relational Databases (SQL Server, MySQL), Object-Oriented Programming (Java, C#), Web Systems &amp; Architecture.
                                </p>
                              </div>

                              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
                                <span className="text-amber-600 dark:text-amber-300 font-bold text-xs flex items-center gap-1.5 mb-1">
                                  <Languages className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                                  Diploma in English
                                </span>
                                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                                  Technical Documentation, Research Synthesis, Professional Public Speaking &amp; Formal Presentations.
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="pt-3.5 border-t border-zinc-200 dark:border-zinc-800/80 space-y-2 font-mono text-xs">
                              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-bold">
                                Core Disciplines &amp; Highlights:
                              </span>
                              {edu.courseworkOrHighlights.map((hl, hlIdx) => (
                                <div key={hlIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-sans">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 mt-0.5 shrink-0" />
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
        )}

        {/* Tab 2: Verified Certificates */}
        {activeTab === 'certificates' && (
          <div className="space-y-20 animate-fadeIn">

            {/* ========================================================================= */}
            {/* 1: DeepLearning.AI Machine Learning Specialization                       */}
            {/* ========================================================================= */}
            <div className="relative max-w-5xl mx-auto py-2">
              
              {/* Header */}
              <div className="flex flex-col items-center text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-900 dark:text-white">
                  Machine Learning Specialization
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                  Stanford University &amp; DeepLearning.AI Curricula by Andrew Ng
                </p>
              </div>

              {/* 1. Master Specialization Card */}
              {(() => {
                const mlSpec = certifications.find((c) => c.id === 'dl-ml-specialization');
                if (!mlSpec) return null;
                return (
                  <div className="max-w-xl mx-auto relative z-20">
                    <div className="rounded-3xl bg-white/95 dark:bg-[#0c0d14]/95 backdrop-blur-xl border-2 border-amber-500/60 dark:border-amber-400/60 p-6 sm:p-7 card-3d relative overflow-hidden group hover:border-amber-500 dark:hover:border-amber-400">
                      
                      {/* Ambient Glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                      {/* Header Badge Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-3 mb-4">
                        <span className="text-[10px] sm:text-[11px] font-mono tracking-wider font-bold text-amber-600 dark:text-amber-300 flex items-center gap-1.5 uppercase">
                          <Award className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                          <span>DeepLearning.AI &amp; Stanford</span>
                        </span>

                        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md border bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30 pill-3d">
                          {mlSpec.issueDate}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                        {mlSpec.issuer}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-display font-black text-zinc-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                        {mlSpec.title}
                      </h4>

                      {/* Summary Bullet Points */}
                      <div className="space-y-1.5 mb-5 pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                        <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-1 font-bold">
                          Specialization Architecture Pillars:
                        </span>
                        {mlSpec.skillsLearned.map((skill, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-sans">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 mt-0.5 shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action */}
                      <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                        <a
                          href={mlSpec.credentialUrl || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-mono font-bold transition-all btn-3d-primary group/btn"
                        >
                          <ShieldCheck className="w-4 h-4 text-slate-950" />
                          <span>Verify Master Specialization on Coursera</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                        </a>
                      </div>

                    </div>
                  </div>
                );
              })()}

              {/* 2. Top-Down Branching Connectors (Desktop) */}
              <div className="relative w-full hidden md:block py-6">
                {/* Center Drop Stem from Root */}
                <div className="w-0.5 h-6 mx-auto bg-gradient-to-b from-amber-400 to-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                
                {/* Horizontal Crossbar spanning across 3 column centers */}
                <div className="relative w-[calc(66.666%+2rem)] mx-auto h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                  {/* Left Node Pin */}
                  <div className="absolute left-0 -top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-black shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                  {/* Center Node Pin */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-black shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                  {/* Right Node Pin */}
                  <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-black shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                </div>

                {/* 3 Drop Stems into the 3 Children Cards */}
                <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-400 to-emerald-500" />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-400 to-emerald-500" />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-400 to-emerald-500" />
                  </div>
                </div>
              </div>

              {/* Mobile connecting stem */}
              <div className="md:hidden flex justify-center py-4">
                <div className="w-0.5 h-8 bg-gradient-to-b from-amber-400 to-emerald-400" />
              </div>

              {/* 3. Child Nodes (3 Course Cards in 3-Column Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {certifications
                  .filter((c) => 
                    c.id === 'dl-supervised-ml' || 
                    c.id === 'dl-advanced-learning-algorithms' || 
                    c.id === 'dl-unsupervised-recommenders-rl'
                  )
                  .map((cert, idx) => (
                    <div
                      key={cert.id}
                      className="rounded-3xl bg-white/95 dark:bg-[#0c0d14]/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/90 p-6 flex flex-col justify-between card-3d relative overflow-hidden group hover:border-emerald-500/50"
                    >
                      <div>
                        {/* Header Strip */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-3 mb-3">
                          <span className="text-[10px] font-mono tracking-wider font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 uppercase">
                            <GitBranch className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                            <span>{`COURSE 0${idx + 1}`}</span>
                          </span>

                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 pill-3d">
                            {cert.issueDate}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-base sm:text-lg font-display font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                          {cert.title}
                        </h4>

                        {/* Competencies */}
                        <div className="space-y-1.5 mb-5 pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                          {cert.skillsLearned.map((skill, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-sans">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                        <a
                          href={cert.credentialUrl || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 text-xs font-mono font-bold border border-zinc-300 dark:border-zinc-800 hover:border-emerald-500/40 transition-all btn-3d-secondary group/btn"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span>Verify Course</span>
                          <ExternalLink className="w-3 h-3 text-zinc-500 group-hover/btn:text-emerald-500" />
                        </a>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Auxiliary GenAI Node */}
              {(() => {
                const genAi = certifications.find((c) => c.id === 'dl-genai');
                if (!genAi) return null;
                return (
                  <div className="mt-8 max-w-xl mx-auto">
                    <div className="rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 group hover:border-emerald-500/40 card-3d">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">
                              GenAI Module
                            </span>
                            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">{genAi.issueDate}</span>
                          </div>
                          <h5 className="text-sm font-bold text-zinc-900 dark:text-white mt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                            {genAi.title}
                          </h5>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans mt-0.5">
                            {genAi.issuer} • Prompt Engineering &amp; RAG Lifecycle
                          </p>
                        </div>
                      </div>

                      <a
                        href={genAi.credentialUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 py-2 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold border border-zinc-300 dark:border-zinc-800 hover:border-emerald-500/40 shrink-0 transition-all"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })()}

            </div>

            {/* ========================================================================= */}
            {/* 2: Cisco Networking Academy (CCNA) Curriculum                            */}
            {/* ========================================================================= */}
            <div className="relative max-w-5xl mx-auto py-4 border-t border-zinc-200 dark:border-zinc-800/80 pt-16">
              
              {/* Header */}
              <div className="flex flex-col items-center text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-900 dark:text-white">
                  CCNA Enterprise Infrastructure
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                  Cisco Networking Academy • University of Moratuwa
                </p>
              </div>

              {/* 1. CCNA Master Curriculum Card */}
              <div className="max-w-xl mx-auto relative z-20">
                <div className="rounded-3xl bg-white/95 dark:bg-[#0c0d14]/95 backdrop-blur-xl border-2 border-cyan-500/60 dark:border-cyan-400/60 p-6 sm:p-7 card-3d relative overflow-hidden group hover:border-cyan-500 dark:hover:border-cyan-400">
                  
                  {/* Ambient Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Header Badge Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-3 mb-4">
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider font-bold text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5 uppercase">
                      <Network className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>Cisco Networking Academy</span>
                    </span>

                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md border bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 pill-3d">
                      June 2026
                    </span>
                  </div>

                  {/* Title */}
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                    Cisco Networking Academy (University of Moratuwa)
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-black text-zinc-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    CCNA: Cisco Certified Network Associate
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed mb-4">
                    Comprehensive enterprise networking engineering curriculum covering routing architectures, switching protocols, wireless security, and software-defined network automation.
                  </p>

                  <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px] pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                    <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 pill-3d">
                      <span className="block text-cyan-600 dark:text-cyan-400 font-bold">CCNA 1</span>
                      <span>Networks (ITN)</span>
                    </div>
                    <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 pill-3d">
                      <span className="block text-cyan-600 dark:text-cyan-400 font-bold">CCNA 2</span>
                      <span>Switching (SRWE)</span>
                    </div>
                    <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 pill-3d">
                      <span className="block text-cyan-600 dark:text-cyan-400 font-bold">CCNA 3</span>
                      <span>Enterprise (ENSA)</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* 2. Top-Down Branching Connectors (Desktop) */}
              <div className="relative w-full hidden md:block py-6">
                {/* Center Drop Stem from Root */}
                <div className="w-0.5 h-6 mx-auto bg-gradient-to-b from-cyan-400 to-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                
                {/* Horizontal Crossbar spanning across 3 column centers */}
                <div className="relative w-[calc(66.666%+2rem)] mx-auto h-0.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]">
                  {/* Left Node Pin */}
                  <div className="absolute left-0 -top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-white dark:border-black shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                  {/* Center Node Pin */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-white dark:border-black shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                  {/* Right Node Pin */}
                  <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-white dark:border-black shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                </div>

                {/* 3 Drop Stems into the 3 Children Cards */}
                <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-cyan-500" />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-cyan-500" />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-cyan-500" />
                  </div>
                </div>
              </div>

              {/* Mobile connecting stem */}
              <div className="md:hidden flex justify-center py-4">
                <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-cyan-500" />
              </div>

              {/* 3. Child Nodes (3 CCNA Course Cards in 3-Column Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {certifications
                  .filter((c) => c.issuer.includes('Cisco'))
                  .map((cert, idx) => (
                    <div
                      key={cert.id}
                      className="rounded-3xl bg-white/95 dark:bg-[#0c0d14]/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/90 p-6 flex flex-col justify-between card-3d relative overflow-hidden group hover:border-cyan-500/50"
                    >
                      <div>
                        {/* Header Strip */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-3 mb-3">
                          <span className="text-[10px] font-mono tracking-wider font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5 uppercase">
                            <GitBranch className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                            <span>{`MODULE 0${idx + 1}`}</span>
                          </span>

                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 pill-3d">
                            {cert.issueDate}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-base sm:text-lg font-display font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {cert.title}
                        </h4>

                        {cert.credentialId && (
                          <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 mb-3 font-mono text-[10px] pill-3d">
                            <span className="text-zinc-500 dark:text-zinc-400 block uppercase">CREDENTIAL ID:</span>
                            <span className="text-zinc-800 dark:text-zinc-300 font-bold break-all">{cert.credentialId}</span>
                          </div>
                        )}

                        {/* Competencies */}
                        <div className="space-y-1.5 mb-5 pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                          {cert.skillsLearned.map((skill, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-sans">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href={cert.badgeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-amber-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-amber-300 text-xs font-mono font-bold border border-zinc-300 dark:border-zinc-800 hover:border-amber-500/40 transition-all btn-3d-secondary group/btn"
                            title="View Official Credly Badge"
                          >
                            <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                            <span>Badge</span>
                            <ExternalLink className="w-3 h-3 text-zinc-400 group-hover/btn:text-amber-500" />
                          </a>

                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-cyan-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-cyan-400 text-xs font-mono font-bold border border-zinc-300 dark:border-zinc-800 hover:border-cyan-500/40 transition-all btn-3d-secondary group/btn"
                            title="View Official Certificate PDF"
                          >
                            <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                            <span>PDF</span>
                            <ExternalLink className="w-3 h-3 text-zinc-400 group-hover/btn:text-cyan-500" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
