import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { personalData } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-surface/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Education & Journey
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-3" />
        </div>

        {/* Timeline Component */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-12">
          {personalData.education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Marker Bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors flex items-center justify-center shadow-lg shadow-primary/30" />

              {/* Period Pill (Desktop positioned on left if screen wide) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 sm:text-right mb-2 sm:mb-0">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-primary">
                  {item.period}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-surface border border-white/[0.08] hover:border-primary/40 transition-all shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    {item.degree}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 font-medium mb-3">
                  <span className="text-primary font-semibold">{item.institution}</span>
                  <span className="text-slate-500">•</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlight && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{item.highlight}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        {personalData.certifications && (
          <div className="mt-20">
            <h3 className="text-xl font-bold text-white font-display text-center mb-8 flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span>Certifications & Continuous Learning</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {personalData.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-surface/80 border border-white/[0.08] hover:border-accent/40 transition-all text-center flex flex-col items-center justify-center"
                >
                  <Award className="w-7 h-7 text-accent mb-2" />
                  <div className="text-sm font-semibold text-white mb-1">{cert.title}</div>
                  <div className="text-xs text-slate-400">{cert.issuer} • {cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

