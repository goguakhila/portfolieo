"use client";

import React, { useState } from "react";
import {
  BrainCircuit,
  Network,
  Code2,
  Database,
  Terminal,
  CheckCircle,
  Layers,
  Sparkles,
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTabs = [
    "All",
    "AI & Generative AI",
    "Machine Learning & Deep Learning",
    "Programming & Backend",
    "Database & Data Analytics",
    "Engineering Tools & Cloud",
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case "Network":
        return <Network className="w-5 h-5 text-sky-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories =
    activeFilter === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Modern Tech Stack
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            A comprehensive, verified skill set spanning foundational computer science, machine learning models, database architecture, and bleeding-edge Generative AI workflows.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === tab
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {tab === "All" ? "All Categories" : tab}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 backdrop-blur-md flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/50">
                    {cat.skills.length} Skills
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Interactive List */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950/70 text-slate-200 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-200 transition-all cursor-default flex items-center gap-1.5"
                    >
                      <span>{skill.name}</span>
                      {skill.badge && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Verified in Projects</span>
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Note on Real Skills */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-xs text-slate-400 flex items-center justify-between flex-wrap gap-2 font-mono">
          <span>* Evaluated through actual project implementations and real problem-solving tasks.</span>
          <span className="text-cyan-400">Zero Artificial Percentages</span>
        </div>
      </div>
    </section>
  );
}
