"use client";

import React from "react";
import {
  ExternalLink,
  FolderGit2,
  CheckCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function GitHubSection() {
  const featuredRepos = [
    {
      name: "Expense-Tracking-System",
      description:
        "Full-stack expense management API & dashboard using Python, FastAPI, Streamlit, Pydantic, MySQL, and Pytest.",
      language: "Python",
      languageColor: "bg-blue-400",
      topics: ["fastapi", "streamlit", "mysql", "pydantic", "pytest"],
      url: "https://github.com/goguakhila/Expense-Tracking-System",
    },
    {
      name: "Finance-Supply-Chain-Analytics",
      description:
        "Comprehensive SQL analytics workflows evaluating net sales, market variance, and forecast accuracy using CTEs and window functions.",
      language: "SQL",
      languageColor: "bg-emerald-400",
      topics: ["sql", "mysql-workbench", "data-analytics", "cte", "dense-rank"],
      url: "https://github.com/goguakhila",
    },
    {
      name: "AI-Chatbot-LLM-Prompt-Engineering",
      description:
        "Conversational AI assistant built using OpenAI APIs, prompt orchestration, and LangChain memory modules.",
      language: "Python",
      languageColor: "bg-blue-400",
      topics: ["genai", "prompt-engineering", "langchain", "llm"],
      url: "https://github.com/goguakhila",
    },
    {
      name: "AI-Image-Generator-GANs",
      description:
        "Deep convolutional generative adversarial network trained on 10,000+ faces to synthesize realistic facial imagery.",
      language: "Python",
      languageColor: "bg-blue-400",
      topics: ["pytorch", "deep-learning", "gan", "computer-vision"],
      url: "https://github.com/goguakhila",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Open Source & Code Activity</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                GitHub Repository Showcase
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-xl">
                Explore repositories showcasing disciplined software design, modular architectures, data engineering pipelines, and modern AI experiments.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all shadow-md"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>Explore My GitHub (@{personalInfo.githubUsername})</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      <FolderGit2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-mono">{repo.name}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${repo.languageColor}`} />
                    <span className="font-mono">{repo.language}</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 group-hover:underline">
                    View on GitHub →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Languages & Metrics Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-4">
              <span>Primary Languages:</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-blue-400" /> Python
              </span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> SQL
              </span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Version Controlled & Production Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
