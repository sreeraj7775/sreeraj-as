import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Terminal, Braces, Database, Cpu, Sparkles, 
  Binary, BarChart3, Layout, Palette, Globe, Network, 
  GitBranch, Laptop, TerminalSquare, Figma, CheckCircle2 
} from 'lucide-react';
import { personalData } from '../data';

const iconMap = {
  Code2, Terminal, Braces, Database, Cpu, Sparkles, 
  Binary, BarChart3, Layout, Palette, Globe, Network, 
  GitBranch, Laptop, TerminalSquare, Figma
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', ...Object.keys(personalData.skills)];

  const getFilteredSkills = () => {
    if (activeTab === 'All') {
      return Object.entries(personalData.skills);
    }
    return [[activeTab, personalData.skills[activeTab]]];
  };

  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono font-semibold text-accent mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Skills & Knowledge Base
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A balanced foundation of systems programming, artificial intelligence fundamentals, and modern web software.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-3" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === category
                  ? 'bg-primary text-slate-950 font-bold shadow-lg shadow-primary/25 scale-105'
                  : 'bg-surface border border-white/[0.08] text-slate-400 hover:text-white hover:bg-surface-hover'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getFilteredSkills().map(([categoryTitle, skillsList], catIdx) => (
            <motion.div
              key={categoryTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl bg-surface border border-white/[0.08] hover:border-primary/30 transition-all shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {categoryTitle}
                </h3>
                <span className="text-xs font-mono text-slate-400">{skillsList.length} Competencies</span>
              </div>

              <div className="space-y-4">
                {skillsList.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-slate-200 font-medium">
                          <IconComponent className="w-4 h-4 text-primary" />
                          <span>{skill.name}</span>
                        </div>
                        <span className="font-mono text-slate-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-900 border border-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 + sIdx * 0.05 }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

