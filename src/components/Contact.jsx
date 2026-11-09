import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { personalData } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate interactive send
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background glow */}
      <div className="ambient-glow bg-primary w-[450px] h-[450px] -bottom-20 -right-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Whether you want to discuss AI research, collaborate on a project, or just say hello — my inbox is open!
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-surface border border-white/[0.08] shadow-2xl">
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Let's Build Something Meaningful
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                As a first-year student, I am actively seeking mentorship, open-source initiatives, hackathons, and software engineering opportunities.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalData.socialLinks.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all text-slate-300 hover:text-white group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email Address</div>
                    <div className="text-sm font-semibold">{personalData.socialLinks.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Location</div>
                    <div className="text-sm font-semibold">{personalData.location}</div>
                  </div>
                </div>
              </div>

              {/* Social handles */}
              <div className="pt-8 mt-8 border-t border-white/[0.08]">
                <div className="text-xs font-mono uppercase text-slate-400 mb-4 tracking-wider">
                  Social Channels
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface-hover hover:bg-primary hover:text-slate-950 border border-white/10 text-slate-300 transition-all hover:scale-105"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface-hover hover:bg-primary hover:text-slate-950 border border-white/10 text-slate-300 transition-all hover:scale-105"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Working-looking interactive form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-surface border border-white/[0.08] shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">Message Dispatched!</h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    Thanks for reaching out! I'll review your note and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white font-mono mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Turing"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-sm text-white placeholder-slate-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-sm text-white placeholder-slate-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Sreeraj, I'd like to talk about..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-sky-400 hover:from-sky-400 hover:to-primary text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="font-mono text-xs">Transmitting...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

