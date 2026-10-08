"use client";

import React, { useEffect } from "react";
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";
import { personalInfo, educationData, projectsData } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h2 id="resume-title" className="text-xl font-bold text-white">
              Official Resume Preview
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Container */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800 space-y-6 text-slate-200 text-xs sm:text-sm">
          {/* Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-cyan-400 font-mono text-xs font-semibold mt-1">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.email}
              </span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Computer Science Engineering graduate specializing in Generative AI, Prompt Engineering, Machine Learning, and Python Development. Hands-on experience building AI chatbots, LLM applications, computer vision, and NLP solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-slate-300">
              <p>
                <strong className="text-white font-mono">Programming Languages:</strong> Python, C++, Java (basics)
              </p>
              <p>
                <strong className="text-white font-mono">AI / ML:</strong> Machine Learning, Deep Learning, NLP, Computer Vision
              </p>
              <p>
                <strong className="text-white font-mono">Generative AI:</strong> LLMs, Prompt Engineering, RAG, LangChain, Hugging Face, OpenAI APIs
              </p>
              <p>
                <strong className="text-white font-mono">Frameworks & Tools:</strong> TensorFlow, PyTorch, Scikit-learn, Keras, Git, Docker, VS Code, Jupyter Notebook
              </p>
              <p>
                <strong className="text-white font-mono">Databases:</strong> MySQL, MongoDB
              </p>
              <p>
                <strong className="text-white font-mono">Cloud:</strong> AWS Basics, Google Cloud Basics
              </p>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Projects & Engineering Work
            </h2>
            <div className="space-y-4">
              {projectsData.slice(0, 4).map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-bold text-white">{p.title}</span>
                    <span className="text-[11px] font-mono text-cyan-300">
                      {p.technologies.slice(0, 4).join(" | ")}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    {p.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, i) => (
                <div key={i} className="flex justify-between items-start flex-wrap gap-1">
                  <div>
                    <p className="font-bold text-white">{edu.degree}</p>
                    <p className="text-slate-400 text-xs">{edu.institution}</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">{edu.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Strengths
            </h2>
            <p className="text-slate-300 font-mono text-xs">
              {personalInfo.strengths.join(" | ")}
            </p>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
