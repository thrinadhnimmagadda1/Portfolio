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
    "Software engineer focused on backend engineering and applied AI. At Wipro, I worked on backend services supporting Meta Ads advertiser event-processing workflows, reducing malformed and incomplete event-processing failures by ~30% and improving average response time by ~20%. At the Artificial Intelligence Institute of South Carolina, I built semantic search and document-grounded RAG for over 100,000 research papers.",
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
      "Built an NLP clustering pipeline using Sentence-BERT embeddings and UMAP dimensionality reduction to organize 100K+ research papers into explorable topic clusters, enabling semantic search beyond keyword matching.",
      "Added a per-paper RAG chat feature — chunking and embedding each paper’s PDF on demand, retrieving the top-3 most relevant chunks for a user’s question, and generating answers with a locally-run LLaMA model (via Ollama) to avoid per-query token costs — allowing researchers to ask questions directly about a specific paper’s methods and findings.",
      "Developed Django REST Framework APIs to serve clustered document data and built a React frontend so researchers could interactively query and visualize results rather than working with static output.",
      "Used asynchronous processing and caching to keep the interface responsive at scale, reducing query time from minutes to seconds for large cluster queries.",
    ],
    tags: ["Python", "Sentence-BERT", "UMAP", "Django", "React", "RAG"],
    summary: "",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Wipro",
    location: "Hyderabad, Telangana, India",
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
      "NLP",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "SMOTE",
      "BERT",
      "Sentence-Transformers",
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
    ],
  },
  {
    category: "Backend & Frontend",
    icon: "⚙️",
    items: [
      "FastAPI",
      "Django",
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
    items: ["PostgreSQL", "MySQL", "Redis", "FAISS", "ChromaDB", "DBMS"],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    items: ["Pandas", "Power BI", "Excel"],
  },
  {
    category: "Cloud & Engineering Tools",
    icon: "☁️",
    items: ["AWS", "Kafka", "Docker", "Git", "CI/CD"],
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
