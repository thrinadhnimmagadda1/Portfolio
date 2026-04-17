export const personal = {
  name: 'Thrinadh Sai Nimmagadda',
  title: 'Software Engineer · AI/ML',
  tagline: 'Software Engineer with 3 years of experience building scalable ML systems and low-latency inference services.',
  email: 'thrinadhnimmagadda20@gmail.com',
  phone: '(803) 354-8350',
  linkedin: 'https://linkedin.com/in/thrinadhsainimmagadda',
  github: 'https://github.com/thrinadhnimmagadda1',
  about: `Software Engineer with 3 years of experience building scalable ML systems and low-latency inference services. Delivered real-time ML features (<150ms) for 500+ users and reduced pipeline latency from 10+ minutes to 23ms. Skilled in Python, Java, FastAPI, and end-to-end system design — from data pipelines to production deployment.`,
};

export const experiences = [
  {
    id: 0,
    role: 'Graduate Teaching Assistant',
    company: 'University of South Carolina',
    location: 'Columbia, SC',
    period: 'Jan 2025 – Present',
    type: 'Part-time',
    bullets: [
      'Led engaging weekly lab sessions for 40+ students, focusing on Java, Data Structures, and Object-Oriented Programming (OOP).',
      'Mentored students in debugging techniques and algorithmic problem-solving to enhance their programming skills.',
      'Fostered a collaborative learning environment, encouraging peer-to-peer interaction and support.',
    ],
    tags: ['Java', 'Data Structures', 'OOP', 'Teaching', 'Mentoring'],
  },
  {
    id: 1,
    role: 'AI Research Intern',
    company: 'Artificial Intelligence Institute of South Carolina',
    location: 'Columbia, SC',
    period: 'May 2025 – Aug 2025',
    type: 'Internship',
    bullets: [
      'Built an NLP pipeline in Python processing 100K+ academic paper abstracts using Sentence-BERT (all-mpnet-base-v2) embeddings and K-Means clustering — enabling semantic grouping without any labeled data.',
      'Designed and deployed a Django REST API with async background task execution (subprocess.Popen + exponential backoff polling), reducing end-to-end query response time from 10+ minutes to under 30 seconds.',
      'Evaluated clustering quality using cosine silhouette scores to auto-select optimal k — removing manual parameter tuning from the pipeline entirely.',
      'Built a React frontend with interactive cluster visualization and keyword-based search, giving non-technical researchers a self-serve interface to explore AI-generated paper groupings.',
    ],
    tags: ['Python', 'SBERT', 'K-Means', 'Django', 'React', 'Async', 'Cosine Silhouette'],
  },
  {
    id: 2,
    role: 'Software Engineer (ML & Backend)',
    company: 'Wipro',
    location: 'Bangalore, India',
    period: 'Sept 2022 – Aug 2024',
    type: 'Full-time',
    bullets: [
      'Owned end-to-end delivery of a Python text classification feature inside a Java Spring Boot ATS — from training a TF-IDF + logistic regression model to wiring it into a REST API endpoint, improving candidate shortlisting accuracy by ~20% across 10K+ monthly candidate profiles.',
      'Designed ML inference integration into Java REST APIs with sub-150ms response time — profiled bottlenecks, batched predictions, and validated throughput under concurrent load for 500+ internal recruiting users.',
      'Built a Pandas + SQL preprocessing pipeline that validated, deduplicated, and normalized 50K+ candidate records per batch — reducing dirty input reaching the model by ~35% and stabilizing weekly prediction consistency.',
    ],
    tags: ['Python', 'Java', 'Spring Boot', 'TF-IDF', 'REST APIs', 'Pandas', 'SQL'],
  },
  {
    id: 3,
    role: 'ML Engineer Intern',
    company: 'Wipro',
    location: 'Hyderabad, India',
    period: 'Apr 2022 – Jul 2022',
    type: 'Internship',
    bullets: [
      'Preprocessed 3 structured and text datasets in Pandas and SQL — handling nulls, label encoding, and outlier removal — to produce clean training data for baseline scikit-learn classification experiments.',
      'Integrated a trained classification model into a Java REST endpoint, tested request/response contracts via Postman, and wrote pytest assertions on prediction outputs for internal validation.',
    ],
    tags: ['Python', 'Java', 'Pandas', 'SQL', 'scikit-learn', 'REST APIs', 'pytest'],
  },
];

export const projects = [
  {
    id: 1,
    name: 'CogniTeam',
    subtitle: 'AI Platform for Workforce Analytics',
    description: 'Behavioral ML platform over 517K Enron emails predicting burnout and attrition with graph features, emotion AI, and SHAP explainability.',
    bullets: [
      'Engineered a behavioral feature extraction pipeline over 517K Enron emails — computing weekly NetworkX graph metrics (degree centrality, clustering coefficient, isolation score) as structured ML features for XGBoost — 96.6% AUC-ROC on burnout, 96.8% on 30/60/90-day attrition with SMOTE, isotonic calibration, and SHAP.',
      'Fine-tuned BERT on GoEmotions (58K samples) for 27-class emotion classification — fused emotion logits with graph-derived isolation and centrality scores to detect social withdrawal patterns weeks before attrition events.',
      'Built a FastAPI + PostgreSQL backend with JWT refresh token rotation, three-tier RBAC (admin/manager/employee), and a GDPR-compliant audit log — serving per-employee real-time risk scores with SHAP value breakdowns.',
    ],
    metrics: [
      { label: 'Burnout AUC-ROC', value: '96.6%' },
      { label: 'Attrition AUC-ROC', value: '96.8%' },
      { label: 'Emails Analyzed', value: '517K' },
    ],
    tags: ['BERT', 'XGBoost', 'SHAP', 'FastAPI', 'PostgreSQL', 'NetworkX', 'SMOTE', 'JWT', 'RBAC'],
    featured: true,
  },
  {
    id: 2,
    name: 'Toxic Comment Classifier',
    subtitle: 'Multi-label NLP Toxicity Detection',
    description: 'Fine-tuned BERT + BiLSTM hybrid for 6-label toxicity classification on 159K+ comments, deployed as a full-stack real-time prediction dashboard.',
    bullets: [
      'Fine-tuned a BERT + BiLSTM hybrid on 159K+ Reddit/Wikipedia comments for 6-label toxicity detection — 96.6% accuracy, toxic-class F1 improved from 0.64 → 0.83 over a TF-IDF baseline using sigmoid multi-label output with metadata fusion.',
      'Addressed extreme class imbalance (threat label: 0.2% of data) using SMOTE oversampling combined with class-weighted focal loss — preventing model collapse on rare toxic categories.',
      'Deployed as a full-stack application: Flask REST API serving sigmoid multi-label predictions + React + Vite dashboard with real-time comment scoring and per-label confidence display.',
    ],
    metrics: [
      { label: 'Accuracy', value: '96.6%' },
      { label: 'Toxic F1', value: '0.83' },
      { label: 'Comments', value: '159K+' },
    ],
    tags: ['BERT', 'BiLSTM', 'SMOTE', 'Focal Loss', 'Flask', 'React', 'Vite', 'PyTorch'],
    featured: true,
  },
  {
    id: 3,
    name: 'LITE',
    subtitle: 'AI Research Paper Exploration Platform',
    description: '3-stage NLP clustering pipeline with SBERT → UMAP → K-Means, reducing end-to-end latency from 10+ minutes to 23ms via async background workers.',
    bullets: [
      'Designed a 3-stage NLP pipeline: SBERT (all-mpnet-base-v2) 768-dim embeddings → UMAP 20-dim reduction (cosine) → K-Means with cosine silhouette scoring to auto-select optimal k — fully unsupervised semantic grouping at scale.',
      'Cut end-to-end response time from 10+ minutes to 23ms by decoupling ML computation into async background workers (subprocess.Popen) and serving cached results via Django REST API with exponential backoff polling.',
      'Applied per-cluster TF-IDF keyword extraction to surface top-3 discriminative terms per cluster as human-readable labels — making AI-generated groupings interpretable without any manual annotation.',
    ],
    metrics: [
      { label: 'Latency Now', value: '23ms' },
      { label: 'Was', value: '10+ min' },
      { label: 'Papers', value: '100K+' },
    ],
    tags: ['SBERT', 'UMAP', 'K-Means', 'TF-IDF', 'Django', 'React', 'Async', 'Python'],
    featured: true,
  },
];

export const education = [
  {
    id: 1,
    degree: 'MS in Computer Science',
    school: 'University of South Carolina',
    location: 'Columbia, SC',
    gpa: '3.5 / 4.0',
    period: 'Aug 2024 – May 2026',
  },
  {
    id: 2,
    degree: 'B.Tech in Computer Science',
    school: 'B.V. Raju Institute of Technology',
    location: 'India',
    gpa: '4.0 / 4.0',
    period: 'Aug 2018 – Jul 2022',
  },
];

export const skills = [
  {
    category: 'Languages',
    icon: '⌨️',
    items: ['Python', 'Java', 'SQL', 'JavaScript'],
  },
  {
    category: 'AI / ML',
    icon: '🧠',
    items: ['LLMs', 'RAG Pipelines', 'NLP', 'XGBoost', 'scikit-learn', 'TensorFlow', 'PyTorch', 'SHAP', 'SMOTE'],
  },
  {
    category: 'LLM / NLP Tools',
    icon: '🔧',
    items: ['LangChain', 'FAISS', 'Hugging Face', 'BERT', 'spaCy', 'sentence-transformers'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['FastAPI', 'Django', 'Flask', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'ChromaDB (Vector DB)'],
  },
  {
    category: 'DevOps',
    icon: '🚀',
    items: ['Docker', 'Git', 'GitHub', 'Alembic', 'CI/CD'],
  },
  {
    category: 'Systems',
    icon: '🏗️',
    items: ['Data Pipelines', 'Inference Systems', 'Latency Optimization', 'Async Processing'],
  },
  {
    category: 'Concepts',
    icon: '💡',
    items: ['Prompt Engineering', 'Model Evaluation', 'RBAC', 'JWT Auth', 'Scalable Backend'],
  },
];
