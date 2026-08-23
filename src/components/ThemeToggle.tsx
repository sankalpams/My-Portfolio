import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string; showLabel?: boolean }> = ({ 
  className = '',
  showLabel = false 
}) => {
  const { theme, resolvedTheme, toggleTheme } = useTheme();

  const getThemeInfo = () => {
    switch (theme) {
      case 'dark':
        return {
          icon: <Moon className="w-4 h-4 text-rose-400 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />,
          label: 'Dark Mode',
          dotClass: 'bg-rose-400',
          title: 'Theme: Dark Mode (Click to switch to Light Mode)'
        };
      case 'light':
        return {
          icon: <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />,
          label: 'Light Mode',
          dotClass: 'bg-amber-400',
          title: 'Theme: Light Mode (Click to switch to System Mode)'
        };
      case 'system':
      default:
        return {
          icon: <Monitor className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />,
          label: `System (${resolvedTheme === 'dark' ? 'Dark' : 'Light'})`,
          dotClass: 'bg-cyan-400 animate-pulse',
          title: `Theme: System (${resolvedTheme === 'dark' ? 'Dark' : 'Light'}) (Click to switch to Dark Mode)`
        };
    }
  };

  const { icon, label, dotClass, title } = getThemeInfo();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={title}
      title={title}
      className={`relative inline-flex items-center gap-2 p-2 sm:p-2.5 rounded-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-rose-500 dark:hover:text-rose-400 pill-3d focus:outline-none focus:ring-2 focus:ring-rose-500/40 group ${className}`}
    >
      <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center">
        {icon}
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-medium">
          {label}
        </span>
      )}

      {/* Theme indicator dot */}
      <span 
        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${dotClass}`} 
      />
    </button>
  );
};

