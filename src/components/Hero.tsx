import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  GraduationCap, 
  Cpu, 
  Code2, 
  ArrowRight,
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useRouter } from '../router/RouterContext';

interface HeroProps {
  onOpenResume?: () => void;
}

const ROLES = [
  "Aspiring Machine Learning & Deep Learning Student",
  "Data Science Undergraduate",
  "MLOps & Analytics Enthusiast",
  "Data Analytics",
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { navigate } = useRouter();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetRole.substring(0, currentText.length + 1));
        if (currentText.length + 1 === targetRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(targetRole.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleResumeClick = () => {
    if (onOpenResume) {
      onOpenResume();
    } else {
      navigate('#/resume');
    }
  };

  return (
    <section id="overview" className="relative min-h-[70vh] sm:min-h-[85vh] lg:min-h-[92vh] flex items-center pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Hero Meta & Big Typography */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 dark:bg-zinc-900/90 border border-zinc-800 dark:border-zinc-800 text-zinc-300 dark:text-zinc-300 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase mb-4 sm:mb-6 shadow-sm">
              <span>DATA SCIENCE & MACHINE LEARNING</span>
            </div>

            {/* Giant Bold Dual-Line Title */}
            <div className="mb-3">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black tracking-tight uppercase leading-[0.95] text-white dark:text-white">
                MALITH
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black tracking-tight uppercase leading-[0.95] bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-rose-300 to-pink-300 dark:from-rose-200 dark:via-rose-300 dark:to-pink-300">
                SANKALPA
              </h1>
            </div>

            {/* Dynamic Typewriter Animated Subtitle */}
            <div className="h-8 flex items-center gap-2 font-mono text-sm sm:text-base text-rose-300 dark:text-rose-300 font-semibold mb-4">
              <span>&gt; {currentText}</span>
              <span className="w-2 h-5 bg-rose-400 animate-blink inline-block" />
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 leading-relaxed max-w-xl mb-6 font-normal">
              {personalInfo.bio}
            </p>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Opportunities</span>
            </div>

            {/* Tabular Metadata Grid (Sanket Chaudhari Style) */}
            <div className="w-full border-t border-zinc-800/80 dark:border-zinc-800/80 divide-y divide-zinc-900 dark:divide-zinc-900 text-xs font-mono">
              
              {/* Education */}
              <div className="py-3 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline">
                <div className="sm:col-span-4 text-zinc-500 uppercase flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                  <span>EDUCATION</span>
                </div>
                <div className="sm:col-span-8 text-zinc-200 dark:text-zinc-200 font-medium">
                  <span className="font-semibold">{personalInfo.degree}</span>
                  <div className="text-zinc-400 text-[11px]">{personalInfo.university}</div>
                </div>
              </div>

              {/* Status / Year */}
              <div className="py-3 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline">
                <div className="sm:col-span-4 text-zinc-500 uppercase flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                  <span>ACADEMIC STATUS</span>
                </div>
                <div className="sm:col-span-8 text-zinc-200 dark:text-zinc-200 font-semibold">
                  {personalInfo.batch}
                </div>
              </div>

              {/* Languages & Stack */}
              <div className="py-3 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline">
                <div className="sm:col-span-4 text-zinc-500 uppercase flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>LANGUAGES</span>
                </div>
                <div className="sm:col-span-8 text-zinc-200 dark:text-zinc-200">
                  Python • R • JavaScript • HTML/CSS • Java • C • C++ • C# • SQL • Dart
                </div>
              </div>

              {/* Location */}
              <div className="py-3 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline">
                <div className="sm:col-span-4 text-zinc-500 uppercase flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>LOCATION</span>
                </div>
                <div className="sm:col-span-8 text-zinc-200 dark:text-zinc-200">
                  {personalInfo.location}
                </div>
              </div>

            </div>

            {/* Quick Action CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('#/projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-white/10"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-display font-bold text-xs uppercase tracking-wider transition-all hover:scale-105"
              >
                <FileText className="w-4 h-4 text-rose-400" />
                <span>Resume PDF</span>
              </button>
            </div>

          </div>

          {/* Right Column: Prominently Enlarged Cutout Photo */}
          <div className="lg:col-span-6 flex items-center justify-center relative select-none mt-6 sm:mt-10 lg:mt-0">
            <div className="relative w-full flex items-center justify-center py-6">
              
              {/* Circular Dotted Radar Grid Aura */}
              <div className="absolute inset-0 rounded-full radar-grid opacity-60 pointer-events-none scale-150" />

              {/* Theme Ambient Glowing Radial Backdrop */}
              <div className="absolute w-[320px] h-[320px] sm:w-[580px] sm:h-[580px] lg:w-[680px] lg:h-[680px] rounded-full bg-gradient-to-tr from-rose-500/30 via-pink-500/20 to-cyan-500/30 blur-3xl -z-10 animate-pulse-glow" />

              {/* Prominently Enlarged Cutout Photo */}
              <div className="relative z-10 group w-full flex justify-center items-center">
                <div className="relative [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)] w-full flex justify-center items-center">
                  <img 
                    src="/malith_cutout.png" 
                    alt="Malith Shehan Sankalpa" 
                    className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[580px] xl:w-[680px] max-w-full h-auto object-contain drop-shadow-[0_35px_80px_rgba(244,63,94,0.35)] sm:group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/malith_photo.jpg';
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
