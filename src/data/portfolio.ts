// Content aligned with the supplied résumé and LinkedIn screenshots.

export const personal = {
  name: "Thrinadh Sai Nimmagadda",
  title: "Software Engineer · Backend & AI/ML",
  tagline:
    "Software Engineer with 3+ years of industry experience building backend systems, NLP pipelines, and applied AI products.",
  email: "thrinadhnimmagadda20@gmail.com",
  phone: "(803) 354-8350",
  linkedin: "https://www.linkedin.com/in/thrinadhsainimmagadda/",
  github: "https://github.com/thrinadhnimmagadda1",
  about:
    "Software engineer focused on backend engineering and applied AI. At Wipro, I improved résumé parsing accuracy from 50% to 80% and reduced API latency by 20%. At the Artificial Intelligence Institute of South Carolina, I built semantic search and document-grounded RAG for over 100,000 research papers.",
};

export const experiences = [
  {
    id: 0,
    role: "Graduate Teaching Assistant",
    company: "University of South Carolina",
    location: "Columbia, South Carolina",
    period: "Jan 2025 – Present",
    type: "Part-time",
    bullets: [
      "Lead weekly hands-on labs for 40+ undergraduate students in Java, data structures, and object-oriented programming, translating complex concepts into approachable exercises.",
    ],
    tags: ["Java", "Data Structures", "OOP"],
  },
  {
    id: 1,
    role: "Research and Development Intern (AI)",
    company: "Artificial Intelligence Institute of South Carolina",
    location: "South Carolina, United States · Hybrid",
    period: "May 2025 – Aug 2025",
    type: "Part-time",
    bullets: [
      "Organized 100K+ research papers using Sentence-BERT embeddings and UMAP, enabling semantic search beyond keyword matching.",
      "Integrated paper-specific RAG Q&A with chunked PDF embeddings and a local LLaMA model; built Django REST APIs and an interactive React frontend.",
      "Reduced query response times from minutes to seconds with asynchronous processing and caching.",
    ],
    tags: ["Python", "Sentence-BERT", "UMAP", "Django", "React", "RAG"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Wipro",
    location: "Hyderabad, Telangana, India",
    period: "Jul 2021 – Aug 2024",
    type: "Full-time",
    bullets: [
      "Improved résumé parsing accuracy from 50% to 80% with secondary extraction passes that identify skills in job descriptions and experience text.",
      "Reduced API latency by 20% through response workflow improvements and batched database writes.",
      "Reconstructed reading order in multi-column PDFs and normalized formatting and line breaks across PDF and Word résumés.",
    ],
    tags: ["Python", "REST APIs", "Document Processing", "Backend Engineering"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Incident Copilot",
    subtitle: "AI Agents · Observability",
    description:
      "An AI agent workflow for anomaly investigation and log search using MCP tools. Deterministic distance-threshold guardrails prevent false-positive matches during adversarial testing; 21 automated tests cover Kafka parsing, anomaly detection, and agent workflows.",
    tags: ["Python", "MCP", "Kafka", "AI Agents"],
    impact: "21 automated tests",
    bullets: [],
    metrics: [
      {
        value: "21 automated tests",
        label: "Project focus",
      },
    ],
    featured: true,
  },
  {
    id: 2,
    name: "ClinicalMatch AI",
    subtitle: "Retrieval · Healthcare AI",
    description:
      "A clinical trial matching system combining BM25 keyword search and semantic retrieval for non-small cell lung cancer trials. A corrective RAG loop expands clinical terminology when initial results are weak; eligibility prefilters and caching optimize operational costs.",
    tags: ["Python", "BM25", "RAG", "LLMs"],
    impact: "13.2× cost optimization",
    bullets: [],
    metrics: [
      {
        value: "13.2× cost optimization",
        label: "Project focus",
      },
    ],
    featured: true,
  },
  {
    id: 3,
    name: "CogniTeam",
    subtitle: "Machine Learning · Workforce Analytics",
    description:
      "Predicts burnout, attrition, and conflict risk with XGBoost and NetworkX communication signals. A local LLaMA RAG assistant combines SQL-grounded risk metrics with HR guidance, with guardrails against sensitive-data exposure and punitive recommendations.",
    tags: ["XGBoost", "NetworkX", "LLaMA", "RAG"],
    impact: "Privacy-conscious AI",
    bullets: [],
    metrics: [
      {
        value: "Privacy-conscious AI",
        label: "Project focus",
      },
    ],
    featured: true,
  },
  {
    id: 4,
    name: "LITE",
    subtitle: "NLP · Research Paper Exploration",
    description:
      "Organizes 100K+ research papers into explorable topics with Sentence-BERT, UMAP, and K-Means. Cosine silhouette scoring selects the cluster count, and TF-IDF surfaces the top three keywords per cluster. Django REST APIs and React support semantic exploration and paper-specific RAG Q&A.",
    tags: ["Sentence-BERT", "UMAP", "K-Means", "TF-IDF", "Django", "React"],
    impact: "100K+ research papers",
    bullets: [],
    metrics: [
      {
        value: "100K+ research papers",
        label: "Project focus",
      },
    ],
    featured: true,
  },
  {
    id: 5,
    name: "Toxic Comment Classifier",
    subtitle: "NLP · Multi-label Classification",
    description:
      "A multi-label NLP system for toxic comment classification using BERT and Flask.",
    tags: ["BERT", "Flask", "NLP"],
    impact: "Multi-label toxicity detection",
    bullets: [],
    metrics: [
      {
        value: "Multi-label toxicity detection",
        label: "Project focus",
      },
    ],
    featured: true,
  },
];

export const education = [
  {
    id: 1,
    degree: "MS in Computer Science",
    school: "University of South Carolina",
    location: "Columbia, South Carolina",
    gpa: "3.5",
    period: "Aug 2024 – Dec 2026 (expected)",
  },
  {
    id: 2,
    degree: "Bachelor’s in Computer Science",
    school: "B.V. Raju Institute of Technology",
    location: "India",
    gpa: "4.0",
    period: "Jul 2018 – Jun 2022",
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "⌨️",
    items: ["Python", "Java", "SQL", "JavaScript", "C++"],
  },
  {
    category: "Machine Learning & NLP",
    icon: "🧠",
    items: [
      "LLMs",
      "RAG Pipelines",
      "NLP",
      "XGBoost",
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "SHAP",
      "Sentence-Transformers",
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚙️",
    items: [
      "FastAPI",
      "Django",
      "Flask",
      "Spring Boot",
      "React",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "FAISS",
    ],
  },
  {
    category: "Databases & Tools",
    icon: "🗄️",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Git",
      "CI/CD",
      "Kafka",
      "ChromaDB",
      "Power BI",
    ],
  },
];

export const certification = {
  name: "Microsoft Certified: Azure Fundamentals",
  issuer: "Microsoft",
  issued: "November 2023",
  credentialId: "AB31F3DFF1D78F8C",
};
