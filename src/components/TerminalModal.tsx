import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolioData';
import { projectsData } from '../data/projectsData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-slate-300 space-y-1">
          <div className="text-emerald-400 font-bold">
            Welcome to Malith Shehan Sankalpa's Portfolio CLI Shell (v1.0.0)
          </div>
          <div className="text-slate-400 text-xs">
            Type <span className="text-rose-400 font-bold">help</span> to view all available commands, or <span className="text-rose-400 font-bold">exit</span> to close this terminal.
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
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const lowerCmd = cmd.toLowerCase();
    setCommandList(prev => [...prev, cmd]);
    setHistoryPointer(-1);

    let response: React.ReactNode = null;

    switch (lowerCmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs">
            <div className="text-slate-400 mb-1">Available commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
              <div><span className="text-rose-400 font-bold font-mono">about</span> — Bio & Education Summary</div>
              <div><span className="text-rose-400 font-bold font-mono">projects</span> — List All ML / DL Systems</div>
              <div><span className="text-rose-400 font-bold font-mono">skills</span> — Tech Stack & Tooling</div>
              <div><span className="text-rose-400 font-bold font-mono">certifications</span> — Verified Credentials</div>
              <div><span className="text-rose-400 font-bold font-mono">contact</span> — Email, Phone & Social Links</div>
              <div><span className="text-rose-400 font-bold font-mono">resume</span> — Open / Download Resume</div>
              <div><span className="text-rose-400 font-bold font-mono">clear</span> — Clear terminal output</div>
              <div><span className="text-rose-400 font-bold font-mono">exit</span> — Close terminal</div>
            </div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-white font-bold text-sm">{personalInfo.name}</div>
            <div className="text-rose-400 font-mono">{personalInfo.tagline}</div>
            <p className="text-slate-400">{personalInfo.bio}</p>
            <div className="pt-1 text-slate-400">
              🎓 <strong className="text-slate-200">{personalInfo.university}</strong> — {personalInfo.degree} ({personalInfo.batch})
            </div>
            <div className="text-slate-400">
              📍 <strong className="text-slate-200">Location:</strong> {personalInfo.location}
            </div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="text-emerald-400 font-bold">Featured Projects ({projectsData.length}):</div>
            {projectsData.map((p, idx) => (
              <div key={idx} className="border-l-2 border-slate-700 pl-2.5 py-0.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <span>{idx + 1}. {p.title}</span>
                  {p.isFYP && <span className="text-[10px] bg-rose-500/20 text-rose-300 px-1.5 rounded">FYP Lead</span>}
                </div>
                <div className="text-slate-400 text-[11px] mt-0.5">{p.overview}</div>
                <div className="text-rose-400 font-mono text-[10px] mt-0.5">Stack: {p.tags.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div><strong className="text-rose-400 font-mono">ML & Deep Learning:</strong> PyTorch, Scikit-learn, XGBoost, GCN/GAT (GNNs), LSTM, BERT/Transformers, SHAP, LIME</div>
            <div><strong className="text-rose-400 font-mono">Data & Analytics:</strong> Pandas, NumPy, EDA, Feature Engineering, Seaborn, Matplotlib, Power BI</div>
            <div><strong className="text-rose-400 font-mono">Languages & Web:</strong> Python, JavaScript (JS), HTML5, CSS3, Java, C, C#, SQL, Dart (Flutter)</div>
            <div><strong className="text-rose-400 font-mono">MLOps & Tools:</strong> DagsHub, DVC, Streamlit, Git, GitHub Actions, Supabase, PostgreSQL, MySQL</div>
          </div>
        );
        break;

      case 'certifications':
        response = (
          <div className="space-y-1.5 text-xs text-slate-300">
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
          <div className="space-y-1 text-xs text-slate-300">
            <div>📧 Email: <a href={`mailto:${personalInfo.email}`} className="text-rose-400 underline">{personalInfo.email}</a></div>
            <div>📞 Phone: <span className="text-slate-200">{personalInfo.phone}</span></div>
            <div>💼 LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-rose-400 underline">linkedin.com/in/malithshehan</a></div>
            <div>🐙 GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-rose-400 underline">github.com/SankalpaMS</a></div>
            <div>📍 Location: <span className="text-slate-200">{personalInfo.location}</span></div>
          </div>
        );
        break;

      case 'resume':
        if (onOpenResume) onOpenResume();
        response = (
          <div className="text-emerald-400 text-xs">
            Opening CV Preview & Triggering PDF Download...
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        setInput('');
        return;

      default:
        response = (
          <div className="text-rose-400 text-xs">
            Command not found: "{cmd}". Type <span className="underline font-bold">help</span> to see available commands.
          </div>
        );
        break;
    }

    setHistory(prev => [...prev, { command: cmd, output: response }]);
    setInput('');
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Terminal Window */}
      <div className="relative w-full max-w-4xl h-[85vh] rounded-2xl bg-[#09090c] border border-slate-800 shadow-2xl z-10 flex flex-col overflow-hidden font-mono text-sm">
        
        {/* Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d12] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-3 text-xs text-slate-400 flex items-center gap-1.5 font-medium">
              <TerminalIcon className="w-3.5 h-3.5 text-rose-400" />
              visitor@malithsankalpa.me: ~ (bash)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-400 font-bold">visitor@malith:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1 text-xs">
            <span className="text-emerald-400 font-bold shrink-0">visitor@malith:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white focus:outline-none border-none p-0 font-mono"
              placeholder="type help or command..."
              autoFocus
            />
            <button type="submit" className="hidden">
              <CornerDownLeft className="w-3 h-3 text-slate-500" />
            </button>
          </form>

          <div ref={terminalEndRef} />
        </div>

        {/* Footer info strip */}
        <div className="px-4 py-2 bg-[#0d0d12] border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
          <span>Type <strong className="text-rose-400">help</strong> for command list</span>
          <span>Press ESC or type <strong className="text-rose-400">exit</strong> to close</span>
        </div>

      </div>
    </div>
  );
};
