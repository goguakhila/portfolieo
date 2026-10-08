"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-xl">
            A solid academic foundation in computer science engineering and analytical thinking.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all backdrop-blur-md relative overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <GraduationCap className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-base text-slate-300 font-medium pl-10 md:pl-0">
                    {edu.institution}
                  </p>
                  {edu.university && (
                    <p className="text-xs text-slate-400 font-mono pl-10 md:pl-0">
                      {edu.university}
                    </p>
                  )}
                </div>

                <div className="flex items-center md:flex-col md:items-end gap-2 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 text-cyan-400 text-xs font-mono font-medium border border-slate-700">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {edu.description && (
                <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                  {edu.description}
                </p>
              )}

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Academic Focus & Coursework
                </p>
                {edu.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
