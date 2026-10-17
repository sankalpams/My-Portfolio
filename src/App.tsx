import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './router/RouterContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';

// Lazy-load subpages to reduce initial bundle size and speed up first paint
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage').then(m => ({ default: m.ProjectDetailsPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ResumePage = lazy(() => import('./pages/ResumePage').then(m => ({ default: m.ResumePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex items-center gap-2 font-mono text-xs text-rose-500 dark:text-rose-400">
      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
      <span>Loading...</span>
    </div>
  </div>
);

export const AppContent: React.FC = () => {
  const { route } = useRouter();

  const renderPage = () => {
    const { pathname } = route;

    if (pathname.startsWith('/project/')) {
      return (
        <Suspense fallback={<PageLoadingFallback />}>
          <ProjectDetailsPage />
        </Suspense>
      );
    }

    switch (pathname) {
      case '/projects':
        return (
          <Suspense fallback={<PageLoadingFallback />}>
            <ProjectsPage />
          </Suspense>
        );
      case '/resume':
      case '/cv':
        return (
          <Suspense fallback={<PageLoadingFallback />}>
            <ResumePage />
          </Suspense>
        );
      case '/contact':
        return (
          <Suspense fallback={<PageLoadingFallback />}>
            <ContactPage />
          </Suspense>
        );
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-rose-500 selection:text-white overflow-x-hidden transition-colors duration-300">
      
      {/* 1. Global Radar Grid Background Texture (Hardware Accelerated Layer) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 radar-grid opacity-40 dark:opacity-60 transition-opacity duration-300"
        style={{ contain: 'strict', transform: 'translateZ(0)' }}
      />

      {/* 2. Floating Ambient Glowing Radial Orbs (GPU-Native Radial Gradients, Zero Blur Filter Overhead) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ contain: 'strict', transform: 'translateZ(0)' }}
      >
        {/* Top-Right Ambient Glow */}
        <div 
          className="absolute -top-24 -right-24 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-60 dark:opacity-75"
          style={{ background: 'radial-gradient(circle, rgba(244, 63, 94, 0.22) 0%, rgba(236, 72, 153, 0.08) 40%, transparent 70%)' }}
        />
        
        {/* Mid-Left Cyan/Rose Accent Glow */}
        <div 
          className="absolute top-[30%] -left-40 w-[400px] h-[400px] sm:w-[650px] sm:h-[650px] lg:w-[850px] lg:h-[850px] rounded-full opacity-50 dark:opacity-65"
          style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, rgba(244, 63, 94, 0.06) 40%, transparent 70%)' }}
        />
        
        {/* Mid-Right Rose Glow */}
        <div 
          className="absolute top-[60%] -right-40 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-50 dark:opacity-65"
          style={{ background: 'radial-gradient(circle, rgba(244, 63, 94, 0.18) 0%, rgba(219, 39, 119, 0.06) 40%, transparent 70%)' }}
        />
        
        {/* Bottom Ambient Glow */}
        <div 
          className="absolute -bottom-32 left-[20%] w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full opacity-50 dark:opacity-70"
          style={{ background: 'radial-gradient(circle, rgba(244, 63, 94, 0.18) 0%, rgba(6, 182, 212, 0.06) 45%, transparent 70%)' }}
        />
      </div>

      {/* 3. Outer Ambient Vignette */}
      <div className="ambient-vignette fixed inset-0 pointer-events-none z-30 opacity-50 dark:opacity-100" />

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
