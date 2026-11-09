import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { personalData } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-slate-950/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 font-display text-white font-bold">
              <Terminal className="w-4 h-4 text-primary" />
              <span>{personalData.name}</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Sreeraj. Built with React & Tailwind CSS.
            </p>
          </div>

          {/* Quick links & Back to top */}
          <div className="flex items-center gap-6">
            <div className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
              <span>Thejus Eng. College</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-surface border border-white/10 hover:border-primary/40 text-slate-400 hover:text-white transition-all hover:-translate-y-0.5 shadow-lg group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

