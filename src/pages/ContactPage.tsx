import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Contact } from '../components/Contact';
import { useRouter } from '../router/RouterContext';

export const ContactPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('#/')}
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-rose-400 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home Overview</span>
        </button>

        <Contact onOpenResume={() => navigate('#/resume')} />
      </div>
    </div>
  );
};
