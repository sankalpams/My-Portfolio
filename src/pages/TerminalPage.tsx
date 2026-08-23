import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  ArrowLeft, 
  Trash2, 
  Sparkles
} from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolioData';
import { projectsData } from '../data/projectsData';
import { useRouter } from '../router/RouterContext';

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalPage: React.FC = () => {
  const { navigate } = useRouter();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-zinc-300 space-y-1.5 font-mono text-xs">
          <div className="text-emerald-400 font-bold text-sm">
            Welcome to Malith Shehan Sankalpa's Portfolio CLI Terminal Shell (v1.0.0)
          </div>
          <div className="text-zinc-400">
            Type <span className="text-rose-400 font-bold">help</span> to view all commands, or click any of the quick-action pills below.
          </div>
        </div>
      )
    }
  ]);
  const [commandList, setCommandList] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommandString = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lowerCmd = trimmed.toLowerCase();
    setCommandList(prev => [...prev, trimmed]);
    setHistoryPointer(-1);

    let response: React.ReactNode = null;

    if (lowerCmd.startsWith('project ')) {
      const pId = trimmed.split(' ')[1]?.toLowerCase();
      const match = projectsData.find(p => p.id.toLowerCase().includes(pId) || p.shortTitle.toLowerCase().includes(pId));
      if (match) {
        navigate(`#/project/${match.id}`);
        response = (
          <div className="text-emerald-400 font-mono text-xs">
            Navigating to {match.title} Case Study...
          </div>
        );
      } else {
        response = (
          <div className="text-rose-400 font-mono text-xs">
            Project not found. Type <span className="underline">projects</span> to view all IDs.
          </div>
        );
      }
    } else {
      switch (lowerCmd) {
        case 'help':
          response = (
            <div className="space-y-1 text-xs font-mono">
              <div className="text-zinc-400 mb-1">Available CLI commands:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-zinc-300">
                <div><span className="text-rose-400 font-bold">about</span> — Bio &amp; SLTC Academic Status</div>
                <div><span className="text-rose-400 font-bold">projects</span> — List 5 ML/DL Engineering Systems</div>
                <div><span className="text-rose-400 font-bold">skills</span> — Full Tech Stack Matrix</div>
                <div><span className="text-rose-400 font-bold">certifications</span> — Verified DeepLearning.AI &amp; Cisco Credentials</div>
                <div><span className="text-rose-400 font-bold">contact</span> — Direct Email, Phone, WhatsApp &amp; Socials</div>
                <div><span className="text-rose-400 font-bold">resume</span> — Open Full Printable CV Page</div>
                <div><span className="text-rose-400 font-bold">arcade</span> — Play 2048 Arcade Game</div>
                <div><span className="text-rose-400 font-bold">clear</span> — Clear Terminal Buffer</div>
              </div>
            </div>
          );
          break;

        case 'about':
          response = (
            <div className="space-y-2 text-xs font-mono text-zinc-300">
              <div className="text-white font-bold text-sm">{personalInfo.name}</div>
              <div className="text-rose-400">{personalInfo.tagline}</div>
              <p className="text-zinc-400 font-sans leading-relaxed">{personalInfo.bio}</p>
              <div className="pt-1 text-zinc-400">
                🎓 <strong className="text-zinc-200">{personalInfo.university}</strong> — {personalInfo.degree} ({personalInfo.batch})
              </div>
              <div className="text-zinc-400">
                📍 <strong className="text-zinc-200">Location:</strong> {personalInfo.location}
              </div>
            </div>
          );
          break;

        case 'projects':
          response = (
            <div className="space-y-2.5 text-xs font-mono text-zinc-300">
              <div className="text-emerald-400 font-bold">Engineered Systems ({projectsData.length}):</div>
              {projectsData.map((p, idx) => (
                <div key={idx} className="border-l-2 border-zinc-700 pl-3 py-1">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{idx + 1}. {p.title}</span>
                    <button
                      onClick={() => navigate(`#/project/${p.id}`)}
                      className="text-rose-400 hover:underline text-[11px]"
                    >
                      [View Page →]
                    </button>
                  </div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">{p.overview}</div>
                  <div className="text-rose-400/80 text-[10px] mt-0.5">Stack: {p.tags.join(', ')}</div>
                </div>
              ))}
            </div>
          );
          break;

        case 'skills':
          response = (
            <div className="space-y-1.5 text-xs font-mono text-zinc-300">
              <div><strong className="text-rose-400">Machine Learning &amp; Deep Learning:</strong> PyTorch, Scikit-learn, XGBoost, GCN/GAT (GNNs), LSTM, BERT/Transformers, SHAP, LIME</div>
              <div><strong className="text-rose-400">Data &amp; Analytics:</strong> Pandas, NumPy, EDA, Feature Engineering, Seaborn, Matplotlib, Power BI</div>
              <div><strong className="text-rose-400">Languages &amp; Core:</strong> Python, JavaScript, HTML5, CSS3, Java, C, C#, SQL, Dart (Flutter)</div>
              <div><strong className="text-rose-400">MLOps &amp; Tools:</strong> DagsHub, DVC, Streamlit, Git, GitHub Actions, Supabase, PostgreSQL, MySQL</div>
            </div>
          );
          break;

        case 'certifications':
          response = (
            <div className="space-y-1.5 text-xs font-mono text-zinc-300">
              {certifications.map((c, idx) => (
                <div key={idx}>
                  • <strong className="text-white">{c.title}</strong> — <span className="text-rose-400">{c.issuer}</span> ({c.issueDate}) {c.credentialId ? `[ID: ${c.credentialId}]` : ''}
                </div>
              ))}
            </div>
          );
          break;

        case 'contact':
          response = (
            <div className="space-y-1.5 text-xs font-mono text-zinc-300">
              <div>📧 Email: <a href={`mailto:${personalInfo.email}`} className="text-rose-400 underline">{personalInfo.email}</a></div>
              <div>📞 Phone: <span className="text-zinc-200">{personalInfo.phone}</span></div>
              <div>💼 LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-rose-400 underline">linkedin.com/in/malithshehan</a></div>
              <div>🐙 GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-rose-400 underline">github.com/SankalpaMS</a></div>
              <div>📍 Location: <span className="text-zinc-200">{personalInfo.location}</span></div>
            </div>
          );
          break;

        case 'resume':
          navigate('#/resume');
          response = (
            <div className="text-emerald-400 font-mono text-xs">
              Navigating to Full Curriculum Vitae Page...
            </div>
          );
          break;

        case 'arcade':
          navigate('#/arcade');
          response = (
            <div className="text-emerald-400 font-mono text-xs">
              Launching 2048 Arcade Arena...
            </div>
          );
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;

        default:
          response = (
            <div className="text-rose-400 font-mono text-xs">
              Command not found: "{trimmed}". Type <span className="underline font-bold">help</span> for all commands.
            </div>
          );
          break;
      }
    }

    setHistory(prev => [...prev, { command: trimmed, output: response }]);
    setInput('');
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommandString(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextPointer = historyPointer === -1 ? commandList.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInput(commandList[nextPointer]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= commandList.length) {
        setHistoryPointer(-1);
        setInput('');
      } else {
        setHistoryPointer(nextPointer);
        setInput(commandList[nextPointer]);
      }
    }
  };

  const quickPills = ['help', 'about', 'projects', 'skills', 'certifications', 'resume', 'contact', 'clear'];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => navigate('#/')}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Overview</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20 flex items-center gap-1.5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Shell Interactive</span>
            </span>

            <button
              onClick={() => setHistory([])}
              className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-xs font-mono transition-colors shadow-sm"
              title="Clear Terminal Output"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-rose-500 dark:text-rose-400" />
            Quick Commands:
          </span>
          {quickPills.map(p => (
            <button
              key={p}
              onClick={() => executeCommandString(p)}
              className="px-3 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-300 text-xs font-mono transition-colors shadow-sm"
            >
              ${p}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-3xl bg-[#09090c] border border-zinc-300 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col min-h-[650px] font-mono text-sm">
          
          {/* Window Titlebar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#0d0d12] border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-3 text-xs text-zinc-400 flex items-center gap-1.5 font-bold">
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                visitor@malithsankalpa.me: ~ (bash shell)
              </span>
            </div>
            <span className="text-xs text-zinc-600 hidden sm:inline">bash 5.2.15</span>
          </div>

          {/* Terminal Content Body */}
          <div 
            className="flex-1 p-6 overflow-y-auto space-y-4 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-emerald-400 font-bold">visitor@malith:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}

            {/* Prompt Input Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 text-xs">
              <span className="text-emerald-400 font-bold shrink-0">visitor@malith:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white focus:outline-none border-none p-0 font-mono text-xs"
                placeholder="type help, projects, skills, resume or command..."
                autoFocus
              />
              <button type="submit" className="hidden">
                <CornerDownLeft className="w-3 h-3 text-zinc-500" />
              </button>
            </form>

            <div ref={terminalEndRef} />
          </div>

          {/* Footer bar */}
          <div className="px-5 py-3 bg-[#0d0d12] border-t border-zinc-800 text-xs text-zinc-500 flex flex-wrap justify-between items-center gap-2">
            <span>Type <strong className="text-rose-400">help</strong> to see all commands</span>
            <span>Use <strong className="text-rose-400">↑ / ↓</strong> for command history</span>
          </div>

        </div>

      </div>
    </div>
  );
};
