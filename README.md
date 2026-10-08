# Gogu Akhila — AI & Data Science Portfolio

> **Production-Ready Personal Portfolio Website**  
> Tailored for Data Science, Generative AI, and Agentic AI roles.  
> Built with Next.js 14, TypeScript, Tailwind CSS, Lucide Icons, and Canvas Animations. Optimized for high-speed deployment on **Vercel**.

---

## 🌟 Overview

This portfolio represents the engineering capabilities and technical progression of **Gogu Akhila**:
- **Education:** B.Tech in Computer Science & Engineering (VITS / JNTUH, 2022–2026).
- **Core Focus:** Data Science | Generative AI | Agentic AI.
- **Key Foundations:** Python, SQL (MySQL), FastAPI, Streamlit, Pydantic, Pytest, Power BI, LLMs, RAG, and LangChain.

The architecture emphasizes clean typography, dark theme aesthetic, subtle neural network canvas animations, zero fake metrics, and deep-dive technical project breakdowns.

---

## 🚀 Key Features

1. **Modern Dark Tech Aesthetic**
   - Elegant dark theme (`#07090e`) with subtle cyan, sky, and emerald glowing accents.
   - Interactive HTML5 canvas neural particle network responding gracefully to cursor movement.
   - Restrained glassmorphic panels and crisp high-contrast typography.

2. **Full-Stack & Analytics Project Showcase**
   - **Expense Tracking System:** Full-stack app with FastAPI, Streamlit, MySQL, Pydantic & Pytest.
   - **Finance & Supply Chain Analytics:** SQL engine with CTEs, window functions (`DENSE_RANK()`), stored procedures.
   - **AI Chatbot using LLM + Prompt Engineering:** Context-aware assistant built with OpenAI APIs and LangChain.
   - **AI Image Generator using GANs:** Deep convolutional generative model trained on 10,000+ faces.
   - **Resume Analyzer using NLP:** ATS scanner with TF-IDF cosine similarity achieving 92% matching.
   - **Disease Prediction using ML:** Clinical classifier benchmarked with 89% diagnostic accuracy.
   - **Interactive Technical Modals:** In-depth breakdowns of Problem, Solution, Architecture, Role, Challenges, and Verified Outcomes.

3. **Learning Journey Progression**
   - Truthful timeline charting the technical progression from Computer Science foundations through SQL to Agentic AI workflows.

4. **Interactive Competencies & Skills**
   - Categorized by domain with filter tabs and verified tags.
   - Zero misleading percentages (no "95% Python").

5. **Recruiter-Friendly Contact & Resume System**
   - One-click copy for Email (`goguakhila668@gmail.com`) and Phone (`+91 7981653928`) with real-time feedback.
   - Interactive contact form with confetti celebration and plug-and-play Formspree / mailto support.
   - In-app printable and downloadable resume preview modal.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React + Accessible SVGs
- **Effects:** Canvas Neural Graph, Canvas Confetti
- **Deployment:** Vercel (Production Ready)

---

## 🏃 Getting Started Locally

### Prerequisites
- Node.js 18.x or later installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/goguakhila/portfolieo.git

# Navigate into the project directory
cd portfolieo

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Vercel Deployment Instructions

1. Push this repository to your GitHub account (`https://github.com/goguakhila/portfolieo`).
2. Log in to [Vercel](https://vercel.com) using your GitHub account.
3. Click **"Add New..."** -> **"Project"**.
4. Select your `portfolieo` repository from the list.
5. In the configuration screen:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
6. Click **Deploy**.
7. Your portfolio will be live with a free custom SSL domain (`https://<your-project>.vercel.app`) in under 2 minutes!

---

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── fonts/           # Local Geist Sans & Mono fonts
│   │   ├── globals.css      # Dark theme utilities & glassmorphism
│   │   ├── layout.tsx       # Root layout & comprehensive SEO metadata
│   │   └── page.tsx         # Assembled portfolio page
│   ├── components/
│   │   ├── About.tsx        # Bento grid introduction & education roadmap
│   │   ├── Certifications.tsx # Honest technical learning milestones
│   │   ├── Contact.tsx      # Contact form, direct details & copy buttons
│   │   ├── Education.tsx    # Academic timeline (B.Tech & Secondary)
│   │   ├── Footer.tsx       # Branding, copyright & back-to-top action
│   │   ├── GitHubSection.tsx# Open-source repositories showcase
│   │   ├── Hero.tsx         # Hero section, CTAs & focus badges
│   │   ├── Icons.tsx        # Custom accessible GitHub & LinkedIn SVGs
│   │   ├── LearningJourney.tsx # Progression timeline from CS to Agentic AI
│   │   ├── Navbar.tsx       # Sticky navbar with scroll spy & mobile menu
│   │   ├── NeuralBackground.tsx # HTML5 canvas particle node network
│   │   ├── ProjectModal.tsx # In-depth technical architecture modal
│   │   ├── Projects.tsx     # Filterable project showcase
│   │   ├── ResumeModal.tsx  # In-browser resume viewer & printer
│   │   ├── ScrollToTop.tsx  # Floating quick return button
│   │   └── Skills.tsx       # Interactive categorized skills
│   └── data/
│       └── portfolioData.ts # Centralized truthful resume & project data
├── .env.example             # Optional environment variable templates
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📝 Customization

All personal details, projects, skills, education, and links are cleanly decoupled from the UI inside `src/data/portfolioData.ts`. You can update your phone, email, bio, or add new projects in one single file.

---

## 📄 License & Rights

© 2026 Gogu Akhila. All rights reserved.
