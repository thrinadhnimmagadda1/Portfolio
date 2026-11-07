// Content aligned with the supplied résumé, LinkedIn screenshots, and user revisions.

export const personal = {
  name: "Thrinadh Sai Nimmagadda",
  title: "Software Engineer | Backend & AI Engineering",
  tagline:
    "Software engineer with 3+ years of industry experience, focused on backend and AI engineering. I build reliable APIs, RAG pipelines, and intelligent applications.",
  email: "thrinadhnimmagadda20@gmail.com",
  phone: "(803) 354-8350",
  linkedin: "https://www.linkedin.com/in/thrinadhsainimmagadda/",
  github: "https://github.com/thrinadhnimmagadda1",
  about:
    "Software engineer focused on backend engineering and applied AI. At Wipro, I worked on backend services supporting Meta Ads advertiser event-processing workflows, reducing malformed and incomplete event-processing failures by ~30% and improving average response time by ~20%. At the Artificial Intelligence Institute of South Carolina, I built LITE, a research intelligence platform combining hybrid retrieval, cross-encoder reranking, and citation-grounded synthesis with local Llama inference.",
};

export const highlights = [
  { value: "3+", label: "Years of industry software engineering experience" },
  {
    value: "~30%",
    label: "Wipro · fewer malformed and incomplete event-processing failures",
  },
  { value: "~20%", label: "Wipro · faster average API response time" },
  {
    value: "100",
    label: "LITE papers indexed · 101 searchable evidence chunks",
  },
];

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
    summary: "",
  },
  {
    id: 1,
    role: "Research and Development Intern (AI)",
    company: "Artificial Intelligence Institute of South Carolina",
    location: "South Carolina, United States · Hybrid",
    period: "May 2025 – Aug 2025",
    type: "Part-time",
    bullets: [
      "Indexed 100 research papers and 101 searchable evidence chunks.",
      "Reduced retrieved context from 20 candidates to five passages.",
      "Reduced same-query end-to-end latency from 41.2s to 18.4s, a 55.4% improvement on the optimized warm path.",
      "Maintained Recall@5 of 1.0 and MRR of 1.0 on the initial retrieval smoke test.",
      "Added paper-level and chunk-level citations to multi-document answers.",
      "Built automated evaluation for Recall@K, MRR, mean latency, and p95 latency.",
    ],
    tags: [
      "Python",
      "Django REST Framework",
      "React",
      "Sentence Transformers",
      "BM25",
      "Cross-encoder Reranking",
      "HDBSCAN",
      "SQLite",
      "Ollama (Local Inference)",
    ],
    summary:
      "Built LITE, an AI-powered research intelligence platform that discovers, organizes, and compares academic papers. The system combines BM25 lexical retrieval with Sentence Transformer embeddings, retrieves the top 20 passages, reranks them using a cross-encoder, and sends the five strongest evidence passages to a local Llama model for citation-grounded synthesis.",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Wipro",
    location: "",
    period: "Jul 2021 – Aug 2024",
    type: "Full-time",
    bullets: [
      "Contributed to Java/Spring Boot microservices and REST API integrations, implementing data mappings, validation logic, and SQL persistence changes within existing advertiser backend services.",
      "Monitored and optimized Apache Kafka event streams across microservices; analyzed payloads and logs to resolve message-processing failures and ensure downstream data consistency.",
      "Improved advertiser event data quality through field validation, normalization, and duplicate-event handling, reducing malformed and incomplete event-processing failures by ~30%.",
      "Investigated API latency and production issues using service logs, Postman, and database tracing; optimized SQL operations and reduced unnecessary database round trips, improving average response time by ~20%.",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Apache Kafka",
      "SQL",
      "Microservices",
      "Postman",
    ],
    summary:
      "Worked on backend services supporting Meta Ads advertiser event-processing workflows, with a focus on microservices, API integrations, event processing, data quality, and production reliability.",
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
    subtitle: "AI · Research Intelligence",
    description:
      "Discovers, organizes, and compares academic papers using BM25 and Sentence Transformer retrieval. A cross-encoder reranks 20 passages into five evidence passages for local Llama synthesis with paper-level and chunk-level citations. Indexed 100 papers and 101 evidence chunks; same-query latency improved from 41.2s to 18.4s on the optimized warm path. Initial retrieval smoke test: Recall@5 1.0 and MRR 1.0.",
    tags: [
      "Python",
      "Django REST Framework",
      "React",
      "Sentence Transformers",
      "BM25",
      "Cross-encoder Reranking",
      "HDBSCAN",
      "SQLite",
      "Ollama (Local Inference)",
    ],
    impact: "55.4% lower warm-path latency",
    bullets: [
      "Indexed 100 research papers and 101 searchable evidence chunks.",
      "Reduced retrieved context from 20 candidates to five passages.",
      "Reduced same-query end-to-end latency from 41.2s to 18.4s, a 55.4% improvement on the optimized warm path.",
      "Maintained Recall@5 of 1.0 and MRR of 1.0 on the initial retrieval smoke test.",
      "Added paper-level and chunk-level citations to multi-document answers.",
      "Built automated evaluation for Recall@K, MRR, mean latency, and p95 latency.",
    ],
    metrics: [
      {
        value: "100",
        label: "Papers Indexed",
      },
      {
        value: "55.4%",
        label: "Warm-path Latency Improvement",
      },
      {
        value: "1.0",
        label: "Initial Recall@5",
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
      "NLP",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "SMOTE",
      "BERT",
      "Sentence-Transformers",
      "HDBSCAN",
    ],
  },
  {
    category: "LLMs & AI Agents",
    icon: "🔧",
    items: [
      "LLMs (OpenAI API)",
      "RAG Pipelines",
      "LangChain",
      "LangGraph",
      "AutoGen",
      "AI Agents",
      "Hugging Face",
      "RAGAS",
      "Llama",
      "Ollama",
    ],
  },
  {
    category: "Backend & Frontend",
    icon: "⚙️",
    items: [
      "FastAPI",
      "Django",
      "Django REST Framework",
      "Flask",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "React",
    ],
  },
  {
    category: "Databases & Retrieval",
    icon: "🗄️",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Redis",
      "BM25",
      "Cross-encoder Reranking",
      "FAISS",
      "ChromaDB",
      "DBMS",
    ],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    items: ["Pandas", "Power BI", "Excel"],
  },
  {
    category: "Cloud & Engineering Tools",
    icon: "☁️",
    items: ["AWS", "Kafka", "Docker", "Git", "CI/CD", "Postman"],
  },
  {
    category: "Computer Science Foundations",
    icon: "💡",
    items: ["Problem Solving", "Data Structures & Algorithms"],
  },
];

export const certification = {
  name: "Microsoft Certified: Azure Fundamentals",
  issuer: "Microsoft",
  issued: "November 2023",
  credentialId: "AB31F3DFF1D78F8C",
};
