import React, { useState } from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2,
  Award,
  FileText
} from 'lucide-react';
import { certifications, educationTimeline } from '../data/portfolioData';

export const Milestones: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certificates'>('education');

  return (
    <section id="milestones" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            ACADEMIC & CREDENTIAL MILESTONES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white dark:text-white tracking-tight uppercase">
            EDUCATION & CERTIFICATIONS
          </h2>
          <div className="w-12 h-1 bg-rose-400 rounded-full mt-3" />
        </div>

        {/* Tab Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#09090c] border border-zinc-800 gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-rose-500 text-white font-bold shadow-lg shadow-rose-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education Journey</span>
            </button>

            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeTab === 'certificates'
                  ? 'bg-rose-500 text-white font-bold shadow-lg shadow-rose-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Certificates</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Education Timeline */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn max-w-5xl mx-auto">
            {educationTimeline.map((edu) => (
              <div
                key={edu.id}
                className="rounded-3xl bg-[#09090c] border border-zinc-800 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                      {edu.period}
                    </span>
                    {edu.status && (
                      <span className="text-[11px] font-mono text-zinc-400">
                        ● {edu.status}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-rose-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-mono text-rose-400 mb-3">
                    {edu.institution} • {edu.location}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    {edu.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800 space-y-1.5">
                  {edu.courseworkOrHighlights.slice(0, 2).map((hl, hlIdx) => (
                    <div key={hlIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Verified Certificates */}
        {activeTab === 'certificates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="rounded-3xl bg-[#09090c] border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">
                      {cert.issueDate}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-rose-400 font-medium mb-1">
                    {cert.issuer}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-rose-300 transition-colors">
                    {cert.title}
                  </h3>

                  {cert.credentialId && (
                    <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 mb-4 font-mono text-[11px]">
                      <span className="text-zinc-500 block text-[10px] uppercase">CREDENTIAL ID:</span>
                      <span className="text-zinc-200 font-bold">{cert.credentialId}</span>
                    </div>
                  )}

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">Key Competencies:</span>
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <span className="text-rose-400">•</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  {cert.badgeUrl && cert.certificateUrl ? (
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={cert.badgeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-300 hover:text-amber-200 text-xs font-mono font-bold border border-zinc-800 hover:border-amber-500/40 transition-all shadow-sm group/btn"
                        title="View Official Credly Badge"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        <span>Badge</span>
                        <ExternalLink className="w-3 h-3 text-zinc-500 group-hover/btn:text-amber-400" />
                      </a>

                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-emerald-400 hover:text-emerald-300 text-xs font-mono font-bold border border-zinc-800 hover:border-emerald-500/40 transition-all shadow-sm group/btn"
                        title="View Official Certificate PDF"
                      >
                        <FileText className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Certificate</span>
                        <ExternalLink className="w-3 h-3 text-zinc-500 group-hover/btn:text-emerald-400" />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={cert.credentialUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-emerald-400 hover:text-emerald-300 text-xs font-mono font-bold border border-zinc-800 hover:border-emerald-500/40 transition-all shadow-sm"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Verify Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
