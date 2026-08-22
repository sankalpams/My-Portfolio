import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowLeft } from 'lucide-react';
import { useRouter } from '../router/RouterContext';

export const Navbar: React.FC = () => {
  const { route, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = route.pathname === '/' || route.pathname === '';

  const navLinks = [
    { num: '01', name: 'OVERVIEW', target: '#/' },
    { num: '02', name: 'PROJECTS', target: '#/projects' },
    { num: '03', name: 'MILESTONES', target: isHome ? '#milestones' : '#/' },
    { num: '04', name: 'CONTACT', target: '#/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    if (target.startsWith('#/')) {
      navigate(target);
    } else if (isHome && target.startsWith('#')) {
      const el = document.getElementById(target.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('#/');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'py-3.5 bg-black/85 backdrop-blur-md border-b border-white/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram */}
          <button
            onClick={() => navigate('#/')}
            className="flex items-center gap-2.5 focus:outline-none group text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-rose-400 font-display font-bold text-xs tracking-wider group-hover:border-rose-500/50 group-hover:scale-105 transition-all">
              MS
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-widest text-xs sm:text-sm text-white group-hover:text-rose-300 transition-colors uppercase truncate">
                MALITH.SANKALPA
              </span>
              {!isHome && (
                <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                  <ArrowLeft className="w-2.5 h-2.5 text-rose-400" /> Return to Home
                </span>
              )}
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs">
            {navLinks.map((link) => {
              const isCurrentRoute = 
                (link.target === '#/' && isHome) ||
                (link.target === '#/projects' && (route.pathname === '/projects' || route.pathname.startsWith('/project/'))) ||
                (link.target === '#/contact' && route.pathname === '/contact');

              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.target)}
                  className={`flex items-center gap-1.5 transition-colors relative py-1 ${
                    isCurrentRoute
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span className="text-[10px] text-zinc-500 font-normal">{link.num}</span>
                  <span>{link.name}</span>
                  {isCurrentRoute && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2.5">

            {/* Resume Button */}
            <button
              onClick={() => navigate('#/resume')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-mono font-medium transition-all ${
                route.pathname === '/resume'
                  ? 'bg-rose-500 text-white font-bold border-rose-500 shadow-md'
                  : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-zinc-200 hover:border-rose-500/40'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-rose-400" />
              <span>Resume (CV)</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-black/95 backdrop-blur-xl border-b border-zinc-800 p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3 font-mono text-xs">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.target)}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors text-left"
              >
                <span>{link.num} {link.name}</span>
              </button>
            ))}

            <div className="pt-3 border-t border-zinc-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('#/resume');
                }}
                className="w-full p-3 rounded-xl bg-zinc-900 text-zinc-200 font-medium flex items-center justify-center gap-2 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-rose-400" />
                <span>Resume (CV)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
