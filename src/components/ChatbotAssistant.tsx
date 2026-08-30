import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { projectsData } from '../data/projectsData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const ChatbotAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Hi there! 👋 I am Malith AI. Ask me anything about Malith's Data Science coursework at SLTC, his GNN/explainable AI projects, Final Year Project leadership, or contact info!`,
      timestamp: 'Just now'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestionPrompts = [
    'What is your tech stack?',
    'Tell me about your Final Year Project',
    'Are you open for DS internships?',
    'How do I contact you?'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const generateAnswer = (question: string): string => {
    const q = question.toLowerCase();

    if (q.includes('tech stack') || q.includes('skill') || q.includes('language') || q.includes('python')) {
      return `Malith specializes in:
• **Machine Learning & Deep Learning**: PyTorch, Scikit-learn, XGBoost, Graph Neural Networks (GCN, GAT), LSTM, BERT, SHAP, and LIME.
• **Data Analytics**: Pandas, NumPy, Exploratory Data Analysis, Feature Engineering, Seaborn, Matplotlib, Power BI.
• **Languages & Backend**: Python, SQL, Dart (Flutter), PostgreSQL, Supabase, FastAPI.
• **MLOps**: DagsHub experiment tracking, DVC, Streamlit, GitHub Actions.`;
    }

    if (q.includes('final year') || q.includes('fyp') || q.includes('finance') || q.includes('project')) {
      const fyp = projectsData[0];
      return `Malith is currently leading the AI & Data Science layer of a 5-member Final Year Project: **${fyp.title}**.
• He engineered an LSTM regression model for next-month expenditure prediction and fine-tuned BERT for financial news sentiment classification.
• He integrated SHAP & LIME for 100% explainable recommendations in a 3-layer architecture (Flutter client, decoupled Python AI microservices, and Supabase data layer).`;
    }

    if (q.includes('open') || q.includes('intern') || q.includes('role') || q.includes('job') || q.includes('hire')) {
      return `Yes! Malith is actively open to **Data Science, Machine Learning Engineer, and Data Analyst** internship or entry-level roles (Batch 2024–2027, 4th Year undergraduate at SLTC). He is available for remote or on-site roles.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('linkedin') || q.includes('reach')) {
      return `You can reach Malith directly:
• 📧 Email: **${personalInfo.email}**
• 📞 Phone: **${personalInfo.phone}**
• 💼 LinkedIn: [linkedin.com/in/malithshehan](${personalInfo.linkedin})
• 🐙 GitHub: [github.com/SankalpaMS](${personalInfo.github})
• 📍 Location: Ampara, Sri Lanka`;
    }

    if (q.includes('gnn') || q.includes('graph') || q.includes('arxiv')) {
      return `For Graph Neural Networks, Malith built an end-to-end node classification pipeline on **OGBN-Arxiv** (169,343 research papers and 1.16M citation edges) using PyTorch Geometric, comparing GCN with multi-head GAT architectures and deploying an interactive Streamlit explorer!`;
    }

    if (q.includes('public pulse') || q.includes('nlp') || q.includes('sarcasm') || q.includes('civic') || q.includes('sinhala') || q.includes('political') || q.includes('roberta')) {
      return `Malith is actively developing **Public Pulse 🇱🇰 (Ongoing Research)**, a 4-layer cascade NLP civic intelligence system fine-tuned on XLM-RoBERTa for Sri Lankan political YouTube broadcasts:
• It processes trilingual code-switched comments (**Sinhala script, Singlish phonetics, English**).
• It disambiguates sarcastic criticism from direct dissent across an 11,540+ ground-truth golden dataset.
• Its Layer 1 Utility Gatekeeper achieves **30%–50% early-exit compute savings** before downstream inference!`;
    }

    if (q.includes('smartcare') || q.includes('hospital') || q.includes('health')) {
      return `Malith developed **SmartCare Hospital**, a clinical risk prediction system using calibrated Logistic Regression, conducting deep audit checks to eliminate dataset artifacts and target leakage for dependable healthcare triage.`;
    }

    return `Thanks for asking! Malith is a 4th-year Data Science undergraduate at SLTC with deep expertise across the ML lifecycle — from data cleaning and feature engineering to GNNs, LSTMs, BERT, and explainable AI (SHAP/LIME). Would you like to check his projects, resume, or contact details?`;
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAnswer(query);
      const botMsg: Message = {
        sender: 'bot',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Malith AI Chatbot"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-xl shadow-rose-500/30 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <div className="relative">
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
              </span>
            </>
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] rounded-3xl bg-[#09090c] border border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="px-4 py-3.5 bg-[#0f0f14] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                  <span>Malith AI</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300">Beta</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online & Ready
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-rose-600 text-white rounded-br-none'
                      : 'bg-[#13131a] text-slate-200 border border-slate-800 rounded-bl-none'
                  }`}
                >
                  <div className="whitespace-pre-line">{m.text}</div>
                  <div className={`text-[9px] mt-1 font-mono text-right ${m.sender === 'user' ? 'text-rose-200' : 'text-slate-500'}`}>
                    {m.timestamp}
                  </div>
                </div>

                {m.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-2.5 rounded-xl bg-[#13131a] border border-slate-800 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          <div className="px-3 py-2 bg-[#0c0c10] border-t border-slate-800/80 flex gap-1.5 overflow-x-auto no-scrollbar">
            {suggestionPrompts.map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-slate-800 hover:border-rose-500/40 text-[11px] font-mono shrink-0 transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0f0f14] border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Malith AI..."
              className="flex-1 bg-slate-900 text-white placeholder:text-slate-500 text-xs px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-rose-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white disabled:opacity-40 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
