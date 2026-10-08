"use client";

import React from "react";
import {
  ArrowDown,
  Mail,
  MapPin,
  Terminal,
  Database,
  BrainCircuit,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPos = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPos, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[320px] h-[320px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/70 shadow-inner backdrop-blur-md mb-6 hover:border-cyan-500/40 transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-slate-200">
            {personalInfo.status}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-cyan-400" />
            {personalInfo.location}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="block text-gradient-primary">
            {personalInfo.name}
          </span>
        </h1>

        {/* Subheading */}
        <div className="inline-block mb-6">
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 tracking-tight font-mono">
            {personalInfo.title}
          </p>
        </div>

        {/* Supporting text */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 mb-9 leading-relaxed font-normal">
          {personalInfo.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          {/* Primary CTA: View My Work */}
          <button
            type="button"
            onClick={() => handleScrollTo("projects")}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] flex items-center gap-2 group"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Primary CTA: Let's Connect */}
          <button
            type="button"
            onClick={() => handleScrollTo("contact")}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-200 hover:scale-[1.02] flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Let&apos;s Connect</span>
          </button>

          {/* Secondary GitHub Button */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 text-slate-300" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* Secondary LinkedIn Button */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          {/* Resume Preview */}
          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Resume</span>
            </button>
          )}
        </div>

        {/* 3 Core Highlight Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl pt-4">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-colors text-left flex items-start gap-3 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-0.5">
                Modern AI Focus
              </p>
              <p className="text-xs text-slate-300 font-medium">
                Generative AI, LLMs, RAG & Agentic AI Architectures
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/30 transition-colors text-left flex items-start gap-3 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-0.5">
                Backend & Systems
              </p>
              <p className="text-xs text-slate-300 font-medium">
                Python, FastAPI, Pydantic, Streamlit & Pytest
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-emerald-500/30 transition-colors text-left flex items-start gap-3 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-0.5">
                Data & Analytics
              </p>
              <p className="text-xs text-slate-300 font-medium">
                Advanced SQL, CTEs, Window Functions & Power BI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
