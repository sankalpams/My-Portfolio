import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Network, 
  Brain, 
  Sparkles, 
  ShieldCheck,
  Calendar,
  FileText
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const getCertIcon = (category: string) => {
    switch (category) {
      case 'ML/AI': return <Brain className="w-5 h-5 text-brand-400" />;
      case 'Networking': return <Network className="w-5 h-5 text-blue-400" />;
      case 'GenAI': return <Sparkles className="w-5 h-5 text-indigo-400" />;
      default: return <Award className="w-5 h-5 text-brand-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative bg-dark-bg/40 dark:bg-dark-bg/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 dark:text-white tracking-tight">
            Certifications & Industry Credentials
          </h2>
          <p className="mt-3 text-slate-400 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Professional specializations from premier institutions validating advanced machine learning, neural architectures, enterprise networking, and generative AI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 border border-slate-800/90 dark:border-slate-800/90 p-6 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 shadow-md group"
            >
              <div>
                {/* Header Icon + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getCertIcon(cert.category)}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900/60 dark:bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-800">
                    <Calendar className="w-3 h-3 text-brand-400" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                {/* Issuer */}
                <span className="text-xs font-mono text-brand-400 font-medium uppercase tracking-wider block mb-1">
                  {cert.issuer}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-100 dark:text-white mb-3 group-hover:text-brand-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Credential ID badge if present */}
                {cert.credentialId && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-300 border border-brand-500/20 text-[11px] font-mono">
                    <ShieldCheck className="w-3 h-3 text-brand-400" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}

                {cert.courses && (
                  <div className="mb-4 space-y-1.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[10px] font-mono text-brand-400 uppercase tracking-wider block font-semibold">
                      Specialization Courses ({cert.courses.length}):
                    </span>
                    {cert.courses.map((course, cIdx) => (
                      <a
                        key={cIdx}
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-800/80 text-xs text-slate-300 hover:text-white transition-all group/c"
                      >
                        <span className="truncate text-[11px]">{course.name}</span>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover/c:text-brand-400 shrink-0" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Key Skills Covered */}
                <div className="space-y-2 pt-2 mb-6">
                  <span className="text-xs font-mono text-slate-400 block mb-2">Core Curriculum:</span>
                  {cert.skillsLearned.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 mt-0.5 shrink-0" />
                      <span className="leading-snug">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Verification Link */}
              <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80">
                {cert.badgeUrl && cert.certificateUrl ? (
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={cert.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-amber-200 text-xs font-mono font-bold border border-slate-800 transition-colors"
                      title="View Official Credly Badge"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Badge</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>

                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 text-xs font-mono font-bold border border-slate-800 transition-colors"
                      title="View Official Certificate PDF"
                    >
                      <FileText className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Certificate</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                ) : cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 text-xs font-mono font-bold border border-slate-800 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verify Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                ) : null}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
