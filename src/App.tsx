import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './router/RouterContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ResumePage } from './pages/ResumePage';
import { ArcadePage } from './pages/ArcadePage';
import { ContactPage } from './pages/ContactPage';

export const AppContent: React.FC = () => {
  const { route } = useRouter();

  const renderPage = () => {
    const { pathname } = route;

    if (pathname.startsWith('/project/')) {
      return <ProjectDetailsPage />;
    }

    switch (pathname) {
      case '/projects':
        return <ProjectsPage />;
      case '/resume':
      case '/cv':
        return <ResumePage />;
      case '/arcade':
      case '/game':
        return <ArcadePage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-rose-500 selection:text-white overflow-x-hidden" style={{ perspective: '1200px' }}>
      
      {/* 1. Global Radar Grid Background Texture (Same as Photo Backdrop) */}
      <div className="fixed inset-0 pointer-events-none z-0 radar-grid opacity-60" />

      {/* 2. Floating Ambient Glowing Radial Orbs across the entire Portfolio */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Right Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-rose-500/25 via-pink-500/15 to-transparent blur-[120px] animate-pulse-glow" />
        
        {/* Mid-Left Cyan/Rose Accent Glow */}
        <div className="absolute top-[30%] -left-40 w-[400px] h-[400px] sm:w-[650px] sm:h-[650px] lg:w-[850px] lg:h-[850px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-rose-500/15 to-transparent blur-[140px] animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
        
        {/* Mid-Right Rose Glow */}
        <div className="absolute top-[60%] -right-40 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-bl from-rose-500/20 via-pink-500/10 to-transparent blur-[130px] animate-pulse-glow" style={{ animationDelay: '5s' }} />
        
        {/* Bottom Ambient Glow */}
        <div className="absolute -bottom-32 left-[20%] w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full bg-gradient-to-t from-rose-500/20 via-cyan-500/15 to-transparent blur-[140px] animate-pulse-glow" style={{ animationDelay: '3.5s' }} />
      </div>

      {/* 3. Outer Ambient Vignette */}
      <div className="ambient-vignette fixed inset-0 pointer-events-none z-30" />

      {/* Persistent Multi-Page Navigation Bar */}
      <Navbar />

      {/* Active Dedicated Page View */}
      <main className="relative z-10 min-h-screen">
        {renderPage()}
      </main>

    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
