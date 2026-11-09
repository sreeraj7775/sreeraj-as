import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Sparkles, Code2, Bot, Layers } from 'lucide-react';
import { personalData } from '../data';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background radial effects */}
      <div className="ambient-glow bg-primary w-[550px] h-[550px] -top-32 -left-32" />
      <div className="ambient-glow bg-accent w-[500px] h-[500px] top-1/3 -right-32" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-primary/20 text-xs sm:text-sm font-medium text-slate-300 mb-8 shadow-lg shadow-black/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-primary font-mono text-xs font-semibold">1ST YEAR B.TECH</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Thejus Engineering College</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-300 to-accent">{personalData.name}</span>
          <br />
          <span className="text-slate-300 text-3xl sm:text-5xl md:text-6xl font-bold">
            Engineering Intelligent Systems.
          </span>
        </motion.h1>

        {/* Tagline / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-sans"
        >
          {personalData.tagline}. Exploring deep learning, data structures, and building responsive, high-performance web applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-sky-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl bg-surface border border-white/10 hover:border-primary/50 text-slate-200 hover:text-white font-medium text-sm tracking-wide hover:bg-surface-hover hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm"
          >
            <FileText className="w-4 h-4 text-primary" />
            <span>Get in Touch / Resume</span>
          </a>
        </motion.div>

        {/* Mini Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl w-full border-t border-white/[0.08] pt-8"
        >
          <div className="flex flex-col items-center">
            <Bot className="w-5 h-5 text-primary mb-1.5" />
            <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Major</div>
            <div className="text-sm font-semibold text-slate-200">CSE (AI)</div>
          </div>
          <div className="flex flex-col items-center">
            <Code2 className="w-5 h-5 text-accent mb-1.5" />
            <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Core</div>
            <div className="text-sm font-semibold text-slate-200">C++ / Python</div>
          </div>
          <div className="flex flex-col items-center">
            <Layers className="w-5 h-5 text-emerald-400 mb-1.5" />
            <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Stack</div>
            <div className="text-sm font-semibold text-slate-200">React & Modern Web</div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-primary animate-bounce" />
      </div>
    </section>
  );
}

