"use client";

import React from "react";
import {
  Sparkles,
  ArrowDown,
  CheckCircle2,
  Terminal,
  Database,
  LineChart,
  BrainCircuit,
  Bot,
  GraduationCap,
  Code2,
} from "lucide-react";
import { learningJourney } from "@/data/portfolioData";

export default function LearningJourney() {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 2:
        return <Code2 className="w-4 h-4 text-sky-400" />;
      case 3:
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 4:
        return <LineChart className="w-4 h-4 text-teal-400" />;
      case 5:
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      case 6:
        return <BrainCircuit className="w-4 h-4 text-purple-400" />;
      case 7:
        return <Bot className="w-4 h-4 text-cyan-300" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Progression & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Learning Journey
          </h2>
          <p className="mt-3 text-base text-cyan-300 font-medium max-w-2xl bg-cyan-950/40 px-4 py-2 rounded-xl border border-cyan-500/20">
            &ldquo;Currently building practical skills through structured learning, projects and hands-on problem solving.&rdquo;
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {learningJourney.map((item, index) => {
            const isLast = index === learningJourney.length - 1;
            return (
              <div
                key={item.step}
                className="relative group transition-all"
              >
                {/* Node indicator */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    isLast
                      ? "bg-cyan-500/20 border-cyan-400 shadow-md shadow-cyan-500/20 ring-4 ring-cyan-500/10 scale-110"
                      : "bg-slate-900 border-slate-700/80 group-hover:border-cyan-500/50 group-hover:scale-105"
                  }`}
                >
                  {getStepIcon(item.step)}
                </div>

                {/* Content Card */}
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md ${
                    isLast
                      ? "bg-slate-900/90 border-cyan-500/40 shadow-xl shadow-cyan-500/5"
                      : "bg-slate-900/60 border-slate-800/80 group-hover:border-slate-700 group-hover:bg-slate-900/80"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700/80">
                        Phase 0{item.step}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        {item.phase}
                      </span>
                    </div>
                    {isLast && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 animate-pulse">
                        ● Current Focus
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Key highlight quote */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-medium text-slate-200 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Vertical Step Connector Arrow */}
                {!isLast && (
                  <div className="flex items-center justify-center my-2 text-slate-600 sm:hidden">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
