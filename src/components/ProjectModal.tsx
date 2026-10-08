"use client";

import React, { useEffect } from "react";
import {
  X,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Award,
  Layers,
  Wrench,
  UserCheck,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Featured Architecture
              </span>
            )}
          </div>
          <h3
            id="modal-title"
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            {project.title}
          </h3>
          <p className="text-sm font-medium text-slate-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-cyan-200 border border-slate-700/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Main Sections */}
        <div className="space-y-6 text-sm text-slate-300">
          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-400 font-semibold mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {project.details.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800">
            <div className="flex items-center gap-2 text-white font-semibold mb-3">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Key Features & Architecture</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Role & Engineering Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-semibold mb-2">
                <UserCheck className="w-4 h-4 text-indigo-400" />
                <span>My Role</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.details.role}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-semibold mb-2">
                <Wrench className="w-4 h-4 text-sky-400" />
                <span>Challenges Overcome</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.details.challenges}
              </p>
            </div>
          </div>

          {/* Outcomes & Highlights */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Outcome & Verification</span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
              {project.details.outcome}
            </p>
            <div className="space-y-1.5">
              {project.details.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs font-mono text-cyan-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs text-slate-400 font-mono">
            Status: Fully implemented & documented
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 transition-all"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>View Repository</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
