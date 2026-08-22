import React from 'react';

export const SkillsMarquee: React.FC = () => {
  const row1 = [
    { name: 'Python', icon: '🐍' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Scikit-learn', icon: '⚙️' },
    { name: 'TensorFlow / Keras', icon: '🧠' },
    { name: 'XGBoost', icon: '⚡' },
    { name: 'Graph Neural Networks (PyG)', icon: '🕸️' },
    { name: 'LSTM & Time Series', icon: '📈' },
    { name: 'BERT & Transformers', icon: '🤖' },
    { name: 'Explainable AI (SHAP)', icon: '🔍' },
    { name: 'LIME Interpretability', icon: '📊' },
    { name: 'Model Calibration', icon: '🎯' },
    { name: 'Statistical Testing', icon: '📐' },
  ];

  const row2 = [
    { name: 'Python', icon: '🐍' },
    { name: 'R', icon: '📊' },
    { name: 'JavaScript (JS)', icon: '💛' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Java', icon: '☕' },
    { name: 'C / C++', icon: '🔷' },
    { name: 'C#', icon: '🟣' },
    { name: 'Dart', icon: '🎯' },
    { name: 'SQL & Querying', icon: '💾' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'Streamlit', icon: '🎈' },
  ];

  const row3 = [
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Exploratory Data Analysis', icon: '🔬' },
    { name: 'Feature Engineering', icon: '🛠️' },
    { name: 'Seaborn & Matplotlib', icon: '📉' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'Flutter Framework', icon: '📱' },
    { name: 'DagsHub (MLOps)', icon: '🐶' },
    { name: 'DVC Versioning', icon: '📦' },
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'Power BI', icon: '📊' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white dark:text-white tracking-tight uppercase">
          MY SKILLS
        </h2>
        <div className="w-12 h-1 bg-rose-400 rounded-full mx-auto mt-3" />
      </div>

      {/* Marquee Container */}
      <div className="space-y-4 w-full overflow-hidden select-none">
        
        {/* Row 1: Left Scroll */}
        <div className="marquee-container">
          <div className="marquee-track-left">
            {row1.map((skill, idx) => (
              <div
                key={`r1-a-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0d0d12] border border-zinc-800/90 hover:border-rose-500/40 text-xs font-mono font-medium text-zinc-200 shadow-sm shrink-0 hover:scale-105 transition-transform cursor-default"
              >
                <span className="text-sm">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="marquee-track-left">
            {row1.map((skill, idx) => (
              <div
                key={`r1-b-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0d0d12] border border-zinc-800/90 hover:border-rose-500/40 text-xs font-mono font-medium text-zinc-200 shadow-sm shrink-0 hover:scale-105 transition-transform cursor-default"
              >
                <span className="text-sm">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right Scroll (Reverse) */}
        <div className="marquee-container">
          <div className="marquee-track-right">
            {row2.map((skill, idx) => (
              <div
                key={`r2-a-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0d0d12] border border-zinc-800/90 hover:border-rose-500/40 text-xs font-mono font-medium text-zinc-200 shadow-sm shrink-0 hover:scale-105 transition-transform cursor-default"
              >
                <span className="text-sm">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="marquee-track-right">
            {row2.map((skill, idx) => (
              <div
                key={`r2-b-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0d0d12] border border-zinc-800/90 hover:border-rose-500/40 text-xs font-mono font-medium text-zinc-200 shadow-sm shrink-0 hover:scale-105 transition-transform cursor-default"
              >
                <span className="text-sm">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Left Scroll */}
        <div className="marquee-container">
          <div className="marquee-track-left">
            {row3.map((skill, idx) => (
              <div
                key={`r3-a-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0d0d12] border border-zinc-800/90 hover:border-rose-500/40 text-xs font-mono font-medium text-zinc-200 shadow-sm shrink-0 hover:scale-105 transition-transform cursor-default"
              >
                <span className="text-sm">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="marquee-track-left">
            {row3.map((skill, idx) => (
              <div
                key={`r3-b-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0d0d12] border border-zinc-800/90 hover:border-rose-500/40 text-xs font-mono font-medium text-zinc-200 shadow-sm shrink-0 hover:scale-105 transition-transform cursor-default"
              >
                <span className="text-sm">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
