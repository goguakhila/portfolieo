"use client";

import React from "react";
import {
  GraduationCap,
  Sparkles,
  Compass,
  CheckCircle2,
  Code2,
  Cpu,
} from "lucide-react";
import { personalInfo, educationData } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Foundations & Modern AI Ambition
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            A disciplined approach to computer science, focused on turning theoretical AI and data engineering into tangible, reliable software.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Professional Introduction & Mindset (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Professional Summary
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {personalInfo.about.intro}
                </p>
                <p>
                  {personalInfo.about.passion}
                </p>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-cyan-200 text-sm font-medium">
                  &ldquo;{personalInfo.about.mindset}&rdquo;
                </div>
              </div>

              {/* Core Strengths Chips */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Key Strengths
                </p>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Three Foundation Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-left">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  Strong Basics
                </h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Solid groundwork in Data Structures, SQL, Algorithms, and Object-Oriented Python.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-left">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  Practical Projects
                </h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Building working full-stack and analytics apps rather than passive tutorials.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-left">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  AI Trajectory
                </h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Actively advancing in Generative AI, RAG architectures, and Agentic systems.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Academic Milestone Timeline (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  Education Roadmap
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  Accredited
                </span>
              </div>

              {/* Education Visual Timeline */}
              <div className="relative border-l-2 border-slate-800 pl-6 space-y-8 my-auto">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-mono text-cyan-400 font-semibold">
                          {edu.duration}
                        </span>
                        <span className="text-[11px] text-slate-400 px-2 py-0.5 rounded bg-slate-800/60">
                          {edu.location}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h4>

                      <p className="text-xs font-medium text-slate-300">
                        {edu.institution}
                      </p>

                      {edu.university && (
                        <p className="text-xs text-slate-400 font-mono">
                          Affiliated with {edu.university}
                        </p>
                      )}

                      <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                <span>Location: Hyderabad / Karimnagar</span>
                <span className="text-cyan-400 font-mono">B.Tech (2022–2026)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
