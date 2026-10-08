export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Generative AI" | "Data & Analytics" | "Full Stack & APIs" | "Machine Learning";
  featured: boolean;
  shortDescription: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string; // Only if available
  hasRepository: boolean;
  details: {
    problem: string;
    solution: string;
    technologiesUsed: string[];
    role: string;
    challenges: string;
    outcome: string;
    highlights: string[];
  };
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    badge?: string;
  }[];
}

export interface JourneyStep {
  step: number;
  title: string;
  phase: string;
  period: string;
  description: string;
  technologies: string[];
  highlight: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  university?: string;
  duration: string;
  location: string;
  description?: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: "Completed" | "In Progress" | "Upcoming";
  issueDate?: string;
  skills: string[];
  verificationNote: string;
}

export const personalInfo = {
  name: "Gogu Akhila",
  title: "Data Science | Generative AI | Agentic AI",
  location: "Hyderabad, Telangana, India",
  email: "goguakhila668@gmail.com",
  phone: "+91 7981653928",
  github: "https://github.com/goguakhila",
  githubUsername: "goguakhila",
  linkedin: "https://www.linkedin.com/in/goguakhila/",
  status: "Open to Opportunities",
  tagline: "Building practical AI and data-driven solutions with Python, SQL and modern AI technologies.",
  summary:
    "Computer Science Engineering graduate specializing in Generative AI, Prompt Engineering, Machine Learning, and Python Development. Hands-on experience building AI chatbots, LLM applications, computer vision, and data engineering pipelines.",
  about: {
    intro:
      "I recently completed my B.Tech in Computer Science and Engineering and I am actively building my career in Data Science, Generative AI, and Agentic AI.",
    passion:
      "I enjoy working with data, solving practical problems, and engineering systems that turn raw information into dependable, real-world value.",
    focus:
      "My current learning and career focus spans Python, SQL, Data Science, Machine Learning, Generative AI, LLMs, RAG, LangChain and Agentic AI architectures.",
    mindset:
      "I believe in continuous learning, disciplined engineering practices, and building working prototypes rather than solely accumulating theory.",
  },
  strengths: [
    "Problem Solving",
    "Analytical Thinking",
    "System Design Fundamentals",
    "Communication",
    "Team Collaboration",
    "Fast Learner",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Generative AI",
    iconName: "BrainCircuit",
    description: "Modern foundational AI models, agent workflows, and retrieval systems",
    skills: [
      { name: "Generative AI", badge: "Core Focus" },
      { name: "LLMs", badge: "Core Focus" },
      { name: "Agentic AI", badge: "Specialization" },
      { name: "RAG (Retrieval-Augmented Gen)", badge: "Specialization" },
      { name: "LangChain" },
      { name: "Prompt Engineering" },
      { name: "OpenAI APIs" },
      { name: "Hugging Face" },
    ],
  },
  {
    category: "Machine Learning & Deep Learning",
    iconName: "Network",
    description: "Statistical modeling, computer vision, and neural network development",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "NLP (Natural Language Processing)" },
      { name: "Computer Vision" },
      { name: "Scikit-learn" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Keras" },
    ],
  },
  {
    category: "Programming & Backend",
    iconName: "Code2",
    description: "Clean code, API development, validation, and testing frameworks",
    skills: [
      { name: "Python", badge: "Primary" },
      { name: "FastAPI" },
      { name: "Streamlit" },
      { name: "Pydantic" },
      { name: "Pytest" },
      { name: "C++" },
      { name: "Java (Basics)" },
    ],
  },
  {
    category: "Database & Data Analytics",
    iconName: "Database",
    description: "Relational modeling, high-performance SQL querying, and BI reporting",
    skills: [
      { name: "SQL", badge: "Primary" },
      { name: "MySQL" },
      { name: "MySQL Workbench" },
      { name: "MongoDB" },
      { name: "Power BI" },
      { name: "Data Analysis" },
      { name: "ETL & Data Modeling" },
    ],
  },
  {
    category: "Engineering Tools & Cloud",
    iconName: "Terminal",
    description: "Developer workflows, version control, and containerization fundamentals",
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "Jupyter Notebook" },
      { name: "Postman" },
      { name: "AWS (Basics)" },
      { name: "Google Cloud (Basics)" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "expense-tracking-system",
    title: "Expense Tracking System",
    subtitle: "Full-Stack Data Application with FastAPI & Streamlit",
    category: "Full Stack & APIs",
    featured: true,
    shortDescription:
      "An end-to-end expense management application designed to record, update, validate, and analyze personal expenses by date and category.",
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "MySQL",
      "Pydantic",
      "Pytest",
    ],
    keyFeatures: [
      "Add and manage expense records seamlessly",
      "Update and delete operations with transactional integrity",
      "Robust relational MySQL database schema integration",
      "RESTful API backend architecture using FastAPI",
      "Type safety and strict payload validation via Pydantic",
      "Interactive Streamlit dashboard with category analytics",
      "Automated unit & API testing using Pytest and Postman",
    ],
    githubUrl: "https://github.com/goguakhila/Expense-Tracking-System",
    hasRepository: true,
    details: {
      problem:
        "Tracking personal financial transactions manually across spreadsheets often leads to inconsistent formatting, missing validations, and lack of immediate visual insights into monthly category spending.",
      solution:
        "Engineered a full-stack, modular architecture featuring a high-performance FastAPI REST backend, strong data validation with Pydantic schemas, persistent MySQL storage, and a user-friendly Streamlit web frontend.",
      technologiesUsed: [
        "Python 3",
        "FastAPI",
        "Streamlit",
        "MySQL",
        "Pydantic v2",
        "Pytest",
        "Postman",
      ],
      role: "Sole developer responsible for architecture, database schema, REST API implementation, frontend UI in Streamlit, and test suite automation.",
      challenges:
        "Maintaining database transactional safety during updates/deletions, synchronizing Streamlit state transitions with FastAPI response payloads, and crafting comprehensive test fixtures for edge-case validation.",
      outcome:
        "Delivered a clean, production-style application with comprehensive error handling, modular code separation, and full test suite verification.",
      highlights: [
        "100% test coverage across core calculation functions with Pytest",
        "Seamless database connection pooling and query optimization",
        "Clean decoupling of API service and UI rendering layers",
      ],
    },
  },
  {
    id: "finance-supply-chain-analytics",
    title: "Finance & Supply Chain Analytics",
    subtitle: "Enterprise SQL Analytics & Business Intelligence Engine",
    category: "Data & Analytics",
    featured: true,
    shortDescription:
      "An advanced SQL-based analytics project focused on extracting critical business insights from sales, customer, product, manufacturing, and forecast data.",
    technologies: ["SQL", "MySQL Workbench", "Power BI", "Data Modeling"],
    keyFeatures: [
      "Top products classification by division using window functions",
      "Customer net sales analysis and margin contribution breakdown",
      "Forecast accuracy computation comparing estimates vs actuals",
      "Market-level penetration and regional performance evaluation",
      "Modular querying using Common Table Expressions (CTEs)",
      "Automated analytical workflows via Stored Procedures & Views",
      "Rankings and distribution calculations using DENSE_RANK()",
    ],
    githubUrl: "https://github.com/goguakhila",
    hasRepository: true,
    details: {
      problem:
        "Enterprise sales and inventory data across global markets is heavily distributed. Executives need clear, granular visibility into product profitability, forecast deviations, and top-tier customers without waiting for manual batch processing.",
      solution:
        "Designed an optimized analytical SQL querying framework leveraging CTEs, subqueries, analytical window functions (DENSE_RANK), materialized views, and parameterized stored procedures to dynamically compute key metrics.",
      technologiesUsed: [
        "SQL (MySQL Dialect)",
        "MySQL Workbench",
        "Window Functions",
        "Stored Procedures",
        "CTEs & Views",
      ],
      role: "Data & SQL Analyst responsible for relational querying, data sanitization, KPI metric definition, and query performance tuning.",
      challenges:
        "Formulating complex multi-table joins without performance degradation, accurately computing month-over-month variances and forecast errors, and managing edge conditions in fiscal calendar transitions.",
      outcome:
        "Constructed a reliable suite of modular SQL scripts and stored procedures delivering fast, repeatable business intelligence across multiple divisions.",
      highlights: [
        "Calculated customer net sales and division rankings using DENSE_RANK()",
        "Automated forecast error calculation logic with reusable stored procedures",
        "Extracted high-impact insights for inventory reordering and margin optimization",
      ],
    },
  },
  {
    id: "ai-chatbot-llm",
    title: "AI Chatbot using LLM + Prompt Engineering",
    subtitle: "Context-Aware Conversational Assistant with LLMs",
    category: "Generative AI",
    featured: false,
    shortDescription:
      "Intelligent conversational chatbot built using LLM APIs and prompt engineering techniques, improving response accuracy by 35% and reducing manual support workload by 50%.",
    technologies: [
      "Python",
      "OpenAI APIs",
      "Prompt Engineering",
      "LangChain",
      "NLP",
    ],
    keyFeatures: [
      "System prompt orchestration with dynamic role framing",
      "Context preservation across multi-turn conversational threads",
      "Structured output enforcement for consistent replies",
      "Zero-shot and few-shot prompt optimization",
      "35% measured improvement in response precision and relevance",
      "50% reduction in manual support inquiry escalations",
    ],
    githubUrl: "https://github.com/goguakhila",
    hasRepository: true,
    details: {
      problem:
        "Standard heuristic chatbots struggle to comprehend open-ended natural queries, fail to retain dialog context, and require manual human intervention for majority of user requests.",
      solution:
        "Built an adaptive assistant leveraging modern LLM APIs combined with robust system instructions, conversational memory buffers, and guardrails to handle nuanced inquiries systematically.",
      technologiesUsed: [
        "Python",
        "OpenAI API",
        "LangChain",
        "Prompt Design",
        "JSON Schema Parsing",
      ],
      role: "AI Developer responsible for prompt engineering, conversational flow design, API integration, and evaluation benchmarking.",
      challenges:
        "Mitigating hallucinations, token usage optimization for latency control, and ensuring deterministic fallbacks when questions are out of scope.",
      outcome:
        "Achieved a 35% boost in response precision, establishing an automated conversational pipeline capable of handling complex multi-turn discussions.",
      highlights: [
        "35% measured gain in contextual response accuracy",
        "50% decrease in manual inquiry escalations",
        "Configured robust few-shot prompting techniques",
      ],
    },
  },
  {
    id: "ai-image-generator-gans",
    title: "AI Image Generator using GANs",
    subtitle: "Deep Generative Modeling for Realistic Face Synthesis",
    category: "Machine Learning",
    featured: false,
    shortDescription:
      "Generative Adversarial Network (GAN) architecture developed to synthesize realistic face images, improving image quality score by 25% on a 10,000+ image dataset.",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Deep Learning",
      "GANs",
      "Computer Vision",
    ],
    keyFeatures: [
      "Adversarial training loop between Generator and Discriminator",
      "Trained and evaluated on large-scale dataset of 10,000+ images",
      "25% quality metric improvement achieved through loss tuning",
      "Convolutional transposed layers for high-resolution artifact reduction",
      "Evaluation using loss curve stabilization and sample inspections",
    ],
    githubUrl: "https://github.com/goguakhila",
    hasRepository: true,
    details: {
      problem:
        "Generating realistic visual content using deep learning requires balancing adversarial equilibrium to prevent common pitfalls such as mode collapse and blurriness.",
      solution:
        "Implemented a Deep Convolutional GAN (DCGAN) pipeline with batch normalization, LeakyReLU activations, and refined learning rate scheduling across generator and discriminator networks.",
      technologiesUsed: [
        "PyTorch",
        "TensorFlow",
        "Computer Vision",
        "Matplotlib",
        "NumPy",
      ],
      role: "Deep Learning Developer handling dataset preprocessing, network architecture design, GPU training runs, and hyperparameter tuning.",
      challenges:
        "Stabilizing generator-discriminator gradients to avoid mode collapse, and optimizing GPU memory footprint across large image batches.",
      outcome:
        "Successfully produced realistic face image outputs with a 25% boost in visual coherence and structural detail fidelity.",
      highlights: [
        "Trained on 10,000+ high-resolution facial images",
        "Achieved stable training convergence without discriminator divergence",
        "25% image quality score increase compared to baseline",
      ],
    },
  },
  {
    id: "resume-analyzer-nlp",
    title: "Resume Analyzer using NLP",
    subtitle: "Intelligent ATS Resume Scanner & Semantic Matcher",
    category: "Machine Learning",
    featured: false,
    shortDescription:
      "Automated ATS resume evaluation system using Natural Language Processing and keyword extraction algorithms, achieving 92% candidate-job matching accuracy.",
    technologies: [
      "Python",
      "NLP",
      "Scikit-learn",
      "Keyword Extraction",
      "Text Preprocessing",
    ],
    keyFeatures: [
      "Automated PDF & text parsing with regex sanitization",
      "TF-IDF and cosine similarity scoring against job requisitions",
      "Domain skill and keyword extraction pipeline",
      "92% matching accuracy verified against test benchmark resumes",
      "Actionable recommendations report highlighting missing keywords",
    ],
    githubUrl: "https://github.com/goguakhila",
    hasRepository: true,
    details: {
      problem:
        "Job seekers and recruiters spend hours manually comparing resume contents with lengthy job descriptions, missing key technical alignments and qualification keywords.",
      solution:
        "Engineered an ATS-style scoring engine that parses resume documents, tokenizes and removes stop words, calculates TF-IDF vectors, and computes semantic alignment with 92% accuracy.",
      technologiesUsed: [
        "Python",
        "Scikit-learn",
        "NLTK",
        "Cosine Similarity",
        "TF-IDF Vectorization",
      ],
      role: "NLP Developer responsible for document extraction, text vectorization pipeline, similarity algorithm design, and result scoring metrics.",
      challenges:
        "Handling diverse document layouts, varying nomenclature for identical skills (e.g., 'ML' vs 'Machine Learning'), and normalizing weightings.",
      outcome:
        "Delivered a dependable matching tool providing instant percentage fit and pinpointed skill-gap recommendations.",
      highlights: [
        "92% candidate-to-job matching accuracy",
        "Instant multi-page resume parsing and keyword extraction",
        "Actionable skill recommendations generated per job profile",
      ],
    },
  },
  {
    id: "disease-prediction-ml",
    title: "Healthcare Disease Prediction System",
    subtitle: "Clinical Classification Model using Machine Learning",
    category: "Machine Learning",
    featured: false,
    shortDescription:
      "Healthcare prediction model using robust classification algorithms and feature engineering, achieving 89% test accuracy on medical diagnostics data.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Data Preprocessing",
      "Pandas",
    ],
    keyFeatures: [
      "Rigorous medical feature cleaning, imputation, and scaling",
      "Benchmarked multiple classifiers: Random Forest, SVM, Logistic Regression",
      "89% verified prediction test accuracy on clinical validation sets",
      "Confusion matrix, precision-recall curve, and ROC-AUC evaluation",
      "Feature importance ranking identifying top diagnostic indicators",
    ],
    githubUrl: "https://github.com/goguakhila",
    hasRepository: true,
    details: {
      problem:
        "Early detection of chronic health conditions benefits greatly from automated preliminary risk stratification based on biomarker patterns.",
      solution:
        "Developed a supervised classification pipeline with robust outlier detection, standard scaling, and ensemble modeling that reliably classifies health outcomes.",
      technologiesUsed: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Seaborn / Matplotlib",
      ],
      role: "Machine Learning Practitioner leading data exploration, feature scaling, model selection, and cross-validation benchmarking.",
      challenges:
        "Addressing class imbalance in patient diagnosis records, preventing data leakage during preprocessing, and tuning hyperparameters for clinical safety.",
      outcome:
        "Achieved 89% test accuracy with balanced sensitivity and specificity across critical diagnostic features.",
      highlights: [
        "89% classification accuracy achieved on unseen test data",
        "Feature importance insights highlighting key diagnostic metrics",
        "Robust 5-fold cross-validation pipeline",
      ],
    },
  },
];

export const learningJourney: JourneyStep[] = [
  {
    step: 1,
    title: "Computer Science Engineering",
    phase: "Core Foundations",
    period: "Foundational Phase",
    description:
      "Gained comprehensive grounding in computational theory, data structures, algorithms, operating systems, and computer architecture at Vivekananda Institute of Technology and Science (JNTUH).",
    technologies: ["Data Structures", "Algorithms", "DBMS", "C++", "Java Basics"],
    highlight: "Strong algorithmic grounding and computational thinking.",
  },
  {
    step: 2,
    title: "Python & Software Engineering",
    phase: "Programming Discipline",
    period: "Development Phase",
    description:
      "Mastered Python programming, object-oriented software design, modular architectures, package management, and writing clean, maintainable, readable code.",
    technologies: ["Python 3", "OOP", "Data Structures", "Pytest", "Git"],
    highlight: "Transitioned from theoretical coding to disciplined software craft.",
  },
  {
    step: 3,
    title: "SQL & Databases",
    phase: "Data Persistence",
    period: "Data Systems Phase",
    description:
      "Engineered relational database schemas, mastered advanced SQL queries with CTEs, subqueries, indexing, window functions (DENSE_RANK), and stored procedures with MySQL.",
    technologies: ["SQL", "MySQL", "MySQL Workbench", "Database Design", "MongoDB"],
    highlight: "Architected relational schemas and optimized high-performance queries.",
  },
  {
    step: 4,
    title: "Data Analytics & BI",
    phase: "Business Insights",
    period: "Analytics Phase",
    description:
      "Turned raw operational datasets into actionable executive insights, mastering exploratory data analysis (EDA), forecast variance analysis, and Power BI interactive dashboards.",
    technologies: ["Power BI", "Data Analysis", "Exploratory Data Analysis", "KPI Design"],
    highlight: "Extracted commercial insights from sales, finance, and supply chain data.",
  },
  {
    step: 5,
    title: "Data Science & Machine Learning",
    phase: "Predictive Intelligence",
    period: "ML Engineering Phase",
    description:
      "Built predictive machine learning models using Scikit-learn, PyTorch, and TensorFlow. Developed pipelines for NLP text parsing, computer vision GANs, and clinical risk classification.",
    technologies: [
      "Machine Learning",
      "Scikit-learn",
      "Deep Learning",
      "NLP",
      "PyTorch",
      "TensorFlow",
    ],
    highlight: "Created predictive classifiers and generative GAN face models.",
  },
  {
    step: 6,
    title: "Generative AI & LLM Systems",
    phase: "Next-Gen AI",
    period: "GenAI Phase",
    description:
      "Harnessed foundational Large Language Models (LLMs), prompt engineering strategies, embeddings, vector search, and Retrieval-Augmented Generation (RAG) for conversational applications.",
    technologies: [
      "LLMs",
      "Prompt Engineering",
      "OpenAI APIs",
      "RAG Architectures",
      "Vector Search",
    ],
    highlight: "Engineered context-grounded AI chatbots with 35% higher response accuracy.",
  },
  {
    step: 7,
    title: "Agentic AI & Autonomous Workflows",
    phase: "Active Frontier",
    period: "Current Focus",
    description:
      "Exploring and constructing autonomous AI agent workflows using LangChain, function calling, tool use, multi-step reasoning loops, and structured output orchestration.",
    technologies: [
      "Agentic AI",
      "LangChain",
      "Autonomous Agents",
      "Tool Calling",
      "FastAPI Integration",
    ],
    highlight:
      "Building practical skills through structured learning, projects and hands-on problem solving.",
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Vivekananda Institute of Technology and Science (VITS), Karimnagar",
    university: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    duration: "2022 – 2026",
    location: "Telangana, India",
    description:
      "Comprehensive 4-year undergraduate engineering degree curriculum focused on computer science fundamentals, software engineering, databases, machine learning, and artificial intelligence.",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Object-Oriented Programming, Computer Networks",
      "Specialization Focus: Artificial Intelligence, Machine Learning, and Data Science systems",
      "Hands-on project work emphasizing full-stack Python engineering and database modeling",
    ],
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "ZPHS Nandhimedaram",
    duration: "2020",
    location: "Telangana, India",
    description: "Foundational secondary education with distinction in mathematics and physical sciences.",
    highlights: [
      "Academic foundation in mathematics, analytical sciences, and languages",
      "Active participation in regional science exhibitions and problem-solving contests",
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Generative AI & LLM Engineering Track",
    issuer: "Independent Structured Learning / Online",
    status: "In Progress",
    skills: ["Generative AI", "RAG", "LangChain", "OpenAI APIs"],
    verificationNote: "Hands-on projects and implementation repository actively maintained on GitHub.",
  },
  {
    title: "Relational Database & Advanced SQL Modeling",
    issuer: "Technical Project Portfolio Milestone",
    status: "Completed",
    skills: ["Advanced SQL", "MySQL", "CTEs", "Window Functions"],
    verificationNote: "Demonstrated through the Finance & Supply Chain Analytics project.",
  },
  {
    title: "Python Software Development & Testing",
    issuer: "Full-Stack Project Benchmark",
    status: "Completed",
    skills: ["Python", "FastAPI", "Pydantic", "Pytest"],
    verificationNote: "Verified with production codebase in Expense Tracking System.",
  },
];
