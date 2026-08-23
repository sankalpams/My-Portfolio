import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  FileText, 
  Download,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useRouter } from '../router/RouterContext';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const { navigate } = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleResumeClick = () => {
    if (onOpenResume) {
      onOpenResume();
    } else {
      navigate('#/resume');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.75 },
          colors: ['#fda4af', '#f43f5e', '#38bdf8', '#ffffff']
        });
      } catch (err) {}

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            CONNECT WITH ME
          </h2>
          <div className="w-12 h-1 bg-rose-500 rounded-full mt-3" />
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* LinkedIn Card */}
          <div className="rounded-3xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between card-3d group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 text-blue-600 dark:text-blue-400 pill-3d">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  LINKEDIN
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-500 mb-1">CONNECT</div>
              <div className="font-display font-bold text-base text-zinc-900 dark:text-white truncate mb-6">
                Malith Shehan
              </div>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-800 group-hover:border-rose-500/40 transition-all btn-3d-secondary"
            >
              <span>Connect On LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="rounded-3xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between card-3d group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white pill-3d">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  GITHUB
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-500 mb-1">REPOSITORIES</div>
              <div className="font-display font-bold text-base text-zinc-900 dark:text-white truncate mb-6">
                @SankalpaMS
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-800 group-hover:border-rose-500/40 transition-all btn-3d-secondary"
            >
              <span>Explore Repos</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email Card */}
          <div className="rounded-3xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between card-3d group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-rose-50 dark:bg-zinc-900 border border-rose-100 dark:border-zinc-800 text-rose-600 dark:text-rose-400 pill-3d">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  DIRECT EMAIL
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-500 mb-1">INQUIRIES</div>
              <div className="font-display font-bold text-sm text-zinc-900 dark:text-white truncate mb-6" title={personalInfo.email}>
                {personalInfo.email}
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-800 transition-all btn-3d-secondary"
              >
                <span>Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-300 border border-zinc-200 dark:border-zinc-800 transition-all btn-3d-secondary"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="rounded-3xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between card-3d group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-800 text-emerald-600 dark:text-emerald-400 pill-3d">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  PHONE &amp; WA
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-500 mb-1">DIRECT CALL</div>
              <div className="font-display font-bold text-base text-zinc-900 dark:text-white truncate mb-6">
                {personalInfo.phone}
              </div>
            </div>

            <a
              href={`tel:${personalInfo.phoneClean}`}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-800 group-hover:border-rose-500/40 transition-all btn-3d-secondary"
            >
              <span>Call Directly</span>
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Location & Status Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono mb-12 card-3d">
          <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
            <MapPin className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0" />
            <span>Based in <strong className="text-zinc-900 dark:text-white">Ampara, Sri Lanka</strong></span>
          </div>

          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Actively open to data science &amp; ML engineering opportunities</span>
          </div>
        </div>

        {/* Message Form & Resume Download CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Message Form */}
          <div className="lg:col-span-8 rounded-3xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 card-3d">
            <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              Drop a note for internship inquiries, ML discussions, or project collaboration.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 card-3d">
                <Check className="w-8 h-8 text-emerald-500 dark:text-emerald-400 mx-auto" />
                <h4 className="font-display font-bold text-base text-emerald-700 dark:text-emerald-300">Message Dispatched!</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-300">Thank you for getting in touch. I will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider text-[10px] font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-rose-500 transition-colors pill-3d"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider text-[10px] font-medium">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-rose-500 transition-colors pill-3d"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider text-[10px] font-medium">Subject</label>
                  <input
                    type="text"
                    placeholder="DS / ML Internship Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-rose-500 transition-colors pill-3d"
                  />
                </div>

                <div>
                  <label className="block text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider text-[10px] font-medium">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Malith, I reviewed your GNN and financial ML project work..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-rose-500 transition-colors resize-none pill-3d"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 dark:hover:bg-rose-400 text-white dark:text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 btn-3d-primary"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Resume Box */}
          <div className="lg:col-span-4 rounded-3xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between card-3d">
            <div>
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-display font-bold text-base mb-2">
                <FileText className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                <span>Curriculum Vitae</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 font-mono">
                Download my up-to-date resume covering academic standing at SLTC, GNN research, and technical project stack.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleResumeClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium border border-zinc-300 dark:border-zinc-800 hover:border-rose-500/40 transition-all btn-3d-secondary"
              >
                <FileText className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
                <span>Open Full Resume Page</span>
              </button>

              <a
                href="/Malith_Shehan_Resume.pdf"
                download="Malith_Shehan_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-slate-950 text-xs font-display font-bold uppercase tracking-wider transition-all btn-3d-primary"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF Resume</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
