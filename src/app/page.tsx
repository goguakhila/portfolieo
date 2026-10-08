"use client";

import React, { useState } from "react";
import NeuralBackground from "@/components/NeuralBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import LearningJourney from "@/components/LearningJourney";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 overflow-x-hidden">
      {/* Background Subtle Neural Canvas */}
      <NeuralBackground />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Top ambient radial light */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-radial-vignette pointer-events-none z-0" />

      {/* Main Content Layers */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        <main className="flex-1">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <LearningJourney />
          <Education />
          <Certifications />
          <GitHubSection />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Floating Scroll To Top */}
      <ScrollToTop />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
