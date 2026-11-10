import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, BookOpen, Brain } from 'lucide-react';
import { personalData } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>BACKGROUND & DRIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Card / Avatar Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-sky-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative rounded-2xl bg-surface border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">sreeraj_profile.json</span>
                </div>

                {/* Profile Photo */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-colors shadow-xl">
                  <img
                    src="/profile.jpg"
                    alt={personalData.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-4 flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold text-white mb-0.5">{personalData.name}</h3>
                    <p className="text-xs font-mono text-primary">AI & Systems Engineer in the Making</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                      <MapPin className="w-3 h-3 text-accent" />
                      <span>{personalData.location}</span>
                    </div>
                  </div>
                </div>

                {/* Micro info pills */}
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5">
                    Batch: 2024-2028
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5">
                    Dept: AI & Data Science
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Highlight Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                Hello! I'm <strong className="text-white font-semibold">{personalData.name}</strong>, a first-year undergraduate pursuing Computer Science & Engineering with a dedicated focus in <span className="text-primary font-semibold">Artificial Intelligence</span> at <strong className="text-white">Thejus Engineering College, Thrissur</strong>.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                {personalData.bio}
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                My immediate goal is mastering the core tenets of computer science: low-level systems programming in C/C++, algorithmic problem-solving, and building machine learning models that deliver actionable real-world insights.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {personalData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface border border-white/[0.07] hover:border-primary/30 transition-all hover:-translate-y-1"
                >
                  <div className="text-2xl font-bold font-display text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-sans">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* College Highlights Card */}
            <div className="p-4 rounded-xl bg-surface/50 border border-white/[0.06] flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary mt-1">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Thejus Engineering College</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Vellarakkad, Erumapetty, Thrissur, Kerala. Affiliated to APJ Abdul Kalam Technological University (KTU).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

