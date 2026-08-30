import type { SkillCategory, Certification, EducationItem, QuickFact } from '../types';

export const personalInfo = {
  name: 'Malith Shehan Sankalpa',
  preferredName: 'Malith Shehan',
  tagline: 'Data Science Undergraduate | Machine Learning & Analytics',
  roles: [
    'Aspiring Machine Learning & Deep Learning Student',
    'Data Science Undergraduate',
    'MLOps & Analytics Enthusiast'
  ],
  bio: 'Data Science undergraduate with a strong interest in AI/ML, deep learning, and analytics. I enjoy turning data into practical, explainable solutions — from predictive models to intelligent, data-driven systems.',
  university: 'Sri Lanka Technology Campus (SLTC)',
  degree: 'BSc (Hons) in Data Science',
  batch: '2024 – 2027 (4th Year)',
  location: 'Ampara, Sri Lanka',
  email: 'malithsankalpa52@gmail.com',
  phone: '+94 71 335 0404',

  phoneClean: '+94713350404',
  linkedin: 'https://www.linkedin.com/in/malithshehan',
  github: 'https://github.com/SankalpaMS',
  portfolioUrl: 'https://malithshehan.vercel.app/',
  resumeUrl: '/Malith_Shehan_Resume.pdf',
  currentRole: 'Leading AI/Data Science layer of 5-member Final Year Project (Personal Finance & Investment App)',
  openTo: 'Data Science, Machine Learning, or Data Analyst Internship & Entry-Level Roles',
  summaryText: `Fourth year Data Science undergraduate with hands-on experience across the full ML lifecycle, data cleaning, feature engineering, model development, and evaluation spanning healthcare classification, graph neural networks, and time series forecasting. Proficient in Python, SQL, and the Scikit-learn/PyTorch ecosystem, with practical MLOps exposure (experiment tracking, reproducible pipelines) and applied deep learning coursework in CNNs, GNNs, and NLP. Currently leading the AI/data science layer of a 5-member Final Year Project building an AI-powered personal finance application. Seeking a Data Science, Machine Learning, or Data Analyst role to apply predictive modeling and explainable AI skills in an applied setting.`
};

export const quickFacts: QuickFact[] = [
  {
    label: 'Education',
    value: 'SLTC (BSc Hons Data Science)',
    subtext: '2024 – 2027 • 4th Year',
    icon: 'GraduationCap'
  },
  {
    label: 'Location',
    value: 'Ampara, Sri Lanka',
    subtext: 'Open to Remote / Relocation',
    icon: 'MapPin'
  },
  {
    label: 'Current Leadership',
    value: 'AI Lead — 5-Member FYP',
    subtext: 'FinTech AI & Microservices',
    icon: 'BrainCircuit'
  },
  {
    label: 'Opportunities',
    value: 'Open to DS / ML / Analyst Roles',
    subtext: 'Internships & Entry-level',
    icon: 'Briefcase'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'ml-dl',
    name: 'Machine Learning & Deep Learning',
    iconName: 'Cpu',
    description: 'Predictive modeling, deep architectures, representation learning, and explainability.',
    skills: [
      { name: 'PyTorch', level: 'Advanced', isKeySkill: true },
      { name: 'Scikit-learn', level: 'Advanced', isKeySkill: true },
      { name: 'XGBoost', level: 'Advanced', isKeySkill: true },
      { name: 'Explainable AI (SHAP / LIME)', level: 'Advanced', isKeySkill: true },
      { name: 'Graph Neural Networks (GCN, GAT)', level: 'Proficient', isKeySkill: true },
      { name: 'LSTM / Time Series', level: 'Proficient', isKeySkill: true },
      { name: 'BERT & Transformers', level: 'Proficient', isKeySkill: true },
      { name: 'Keras / TensorFlow', level: 'Proficient' },
      { name: 'Hyperparameter Tuning & CV', level: 'Advanced' },
      { name: 'Model Calibration & Probability ROC', level: 'Advanced' },
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data Analysis & Visualization',
    iconName: 'BarChart3',
    description: 'Transforming raw telemetry into statistical insights and actionable intelligence.',
    skills: [
      { name: 'Pandas', level: 'Advanced', isKeySkill: true },
      { name: 'NumPy', level: 'Advanced', isKeySkill: true },
      { name: 'Exploratory Data Analysis (EDA)', level: 'Advanced', isKeySkill: true },
      { name: 'Feature Engineering & Selection', level: 'Advanced', isKeySkill: true },
      { name: 'Matplotlib & Seaborn', level: 'Advanced' },
      { name: 'Power BI', level: 'Proficient', isKeySkill: true },
      { name: 'Statistical Hypothesis Testing', level: 'Proficient' },
      { name: 'Microsoft Excel (Advanced)', level: 'Proficient' },
    ]
  },
  {
    id: 'programming',
    name: 'Programming & Querying',
    iconName: 'Code2',
    description: 'Core languages for algorithm formulation, data pipelines, and backend logic.',
    skills: [
      { name: 'Python (NumPy, SciPy, OOP)', level: 'Advanced', isKeySkill: true },
      { name: 'R Programming', level: 'Proficient', isKeySkill: true },
      { name: 'JavaScript (ES6+)', level: 'Proficient', isKeySkill: true },
      { name: 'HTML5 & CSS3', level: 'Advanced', isKeySkill: true },
      { name: 'Java (Core / OOP)', level: 'Proficient', isKeySkill: true },
      { name: 'C / C++', level: 'Proficient' },
      { name: 'C#', level: 'Proficient' },
      { name: 'SQL (Complex Joins, Aggregations)', level: 'Advanced', isKeySkill: true },
      { name: 'Dart / Flutter Framework', level: 'Proficient', isKeySkill: true },
      { name: 'RESTful API Integration', level: 'Proficient' }
    ]
  },
  {
    id: 'mlops-devops',
    name: 'MLOps, Databases & Tooling',
    iconName: 'Layers',
    description: 'Reproducible pipelines, versioning, automated workflows, and persistent storage.',
    skills: [
      { name: 'DagsHub (Tracking & DVC)', level: 'Advanced', isKeySkill: true },
      { name: 'Streamlit (ML Dashboards)', level: 'Advanced', isKeySkill: true },
      { name: 'Git & GitHub Version Control', level: 'Advanced', isKeySkill: true },
      { name: 'Supabase (Postgres & Auth)', level: 'Proficient', isKeySkill: true },
      { name: 'MySQL & PostgreSQL', level: 'Proficient' },
      { name: 'GitHub Actions (CI/CD Basics)', level: 'Familiar' },
      { name: 'Docker (Containerization Basics)', level: 'Familiar' },
      { name: 'Reproducible Data Pipelines', level: 'Advanced' }
    ]
  },
  {
    id: 'soft-skills',
    name: 'Leadership & Core Competencies',
    iconName: 'Users',
    description: 'Strategic leadership, cross-functional collaboration, and technical communication.',
    skills: [
      { name: 'AI Engineering Leadership (5-Member Team)', level: 'Advanced', isKeySkill: true },
      { name: 'Technical Communication & Reporting', level: 'Advanced', isKeySkill: true },
      { name: 'Critical Problem Solving', level: 'Advanced', isKeySkill: true },
      { name: 'System Architecture Design', level: 'Proficient' },
      { name: 'Research Paper Analysis', level: 'Proficient' },
      { name: 'Cross-functional Collaboration', level: 'Advanced' }
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 'dl-ml-specialization',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford University',
    issueDate: '2026',
    credentialUrl: 'https://coursera.org/share/1c669829ccd97655d0ed87fc22bb94b1',
    skillsLearned: [
      'Supervised Learning (Regression & Classification)',
      'Advanced Learning Algorithms (Neural Networks, XGBoost)',
      'Unsupervised Learning (K-Means, PCA, Anomaly Detection)',
      'Recommender Systems & Reinforcement Learning'
    ],
    category: 'ML/AI',
    featured: true
  },
  {
    id: 'dl-supervised-ml',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford University',
    issueDate: '2026',
    credentialUrl: 'https://coursera.org/share/9ce0fd2a4cd48d8536f3cc2b0a6677af',
    skillsLearned: [
      'Multiple Linear Regression & Cost Function Optimization',
      'Logistic Regression for Binary Classification',
      'Gradient Descent & Learning Rate Tuning',
      'Overfitting Prevention with L1/L2 Regularization'
    ],
    category: 'ML/AI',
    featured: true
  },
  {
    id: 'dl-advanced-learning-algorithms',
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI & Stanford University',
    issueDate: '2026',
    credentialUrl: 'https://coursera.org/share/7cad5b415d714a6bb327aa93b87bfc1c',
    skillsLearned: [
      'Multi-layer Artificial Neural Networks (TensorFlow/Keras)',
      'Decision Trees, Random Forests & Gradient Boosted Trees (XGBoost)',
      'Evaluating & Debugging Learning Algorithms (Cross-Validation, Learning Curves)',
      'Multi-class Softmax Classification & Precision/Recall Metrics'
    ],
    category: 'ML/AI',
    featured: true
  },
  {
    id: 'dl-unsupervised-recommenders-rl',
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI & Stanford University',
    issueDate: '2026',
    credentialUrl: 'https://coursera.org/share/75f461ddbd929a082d5cb4c4ae7a2a12',
    skillsLearned: [
      'K-Means Clustering & Gaussian Anomaly Detection',
      'Principal Component Analysis (PCA) Dimensionality Reduction',
      'Content-Based & Collaborative Filtering Recommender Systems',
      'Deep Q-Learning & Continuous State Reinforcement Learning'
    ],
    category: 'ML/AI',
    featured: true
  },
  {
    id: 'dl-genai',
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI',
    issueDate: '2025',
    credentialUrl: 'https://coursera.org/share/04c33f8074a2651ba1d71af137a0543a',
    skillsLearned: [
      'Large Language Model (LLM) Capabilities & Lifecycle',
      'Prompt Engineering & Retrieval-Augmented Generation (RAG)',
      'GenAI Economics, AI Safety, Evaluation, and Enterprise Implementation'
    ],
    category: 'GenAI',
    featured: true
  },
  {
    id: 'ccna-itn',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy (University of Moratuwa)',
    issueDate: 'June 2026',
    credentialId: 'a3d353ea-6877-4806-baf9-dfa8c06b01e4',
    badgeUrl: 'https://www.credly.com/badges/a3d353ea-6877-4806-baf9-dfa8c06b01e4/public_url',
    certificateUrl: '/certificates/CCNA_Introduction_to_Networks_Certificate.pdf',
    credentialUrl: 'https://www.credly.com/badges/a3d353ea-6877-4806-baf9-dfa8c06b01e4/public_url',
    skillsLearned: [
      'IPv4 and IPv6 Addressing & Variable Length Subnet Masking (VLSM)',
      'Ethernet Switching & Network Media Architecture',
      'OSI & TCP/IP Layer Protocol Configuration and Packet Analysis',
      'Initial Cisco Router & Switch Configuration and Diagnostics'
    ],
    category: 'Networking',
    featured: true
  },
  {
    id: 'ccna-srwe',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy (University of Moratuwa)',
    issueDate: 'June 2026',
    credentialId: '25953508-d529-4181-81a1-50cf1c460b81',
    badgeUrl: 'https://www.credly.com/badges/25953508-d529-4181-81a1-50cf1c460b81/public_url',
    certificateUrl: '/certificates/CCNA_Switching_Routing_Wireless_Essentials_Certificate.pdf',
    credentialUrl: 'https://www.credly.com/badges/25953508-d529-4181-81a1-50cf1c460b81/public_url',
    skillsLearned: [
      'VLAN Configuration, Trunking & Inter-VLAN Routing',
      'Spanning Tree Protocol (STP) & EtherChannel Link Aggregation',
      'Wireless LAN (WLAN) Configuration, Security & WLC Management',
      'Layer 2 Threat Mitigation & Switch Port Security'
    ],
    category: 'Networking',
    featured: true
  },
  {
    id: 'ccna-ensa',
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy (University of Moratuwa)',
    issueDate: 'June 2026',
    credentialId: 'e47a6400-334c-4c97-8c10-8f863adf39d2',
    badgeUrl: 'https://www.credly.com/badges/e47a6400-334c-4c97-8c10-8f863adf39d2/public_url',
    certificateUrl: '/certificates/CCNA_Enterprise_Networking_Security_Automation_Certificate.pdf',
    credentialUrl: 'https://www.credly.com/badges/e47a6400-334c-4c97-8c10-8f863adf39d2/public_url',
    skillsLearned: [
      'Single-Area OSPFv2 Dynamic Routing Configuration & Verification',
      'Network Security & Access Control Lists (ACLs, NAT/PAT)',
      'WAN Concepts, Virtual Private Networks (VPNs) & QoS',
      'Network Automation, Software-Defined Networking (SDN) & REST APIs'
    ],
    category: 'Networking',
    featured: true
  }
];

export const educationTimeline: EducationItem[] = [
  {
    id: 'sltc-degree',
    degree: 'BSc (Hons) in Data Science',
    institution: 'Sri Lanka Technology Campus (SLTC)',
    period: '2024 – 2027',
    location: 'Padukka / Meepe, Sri Lanka',
    status: 'Currently in 4th Year',
    summary: 'Comprehensive four-year honors program focused on statistical inference, advanced machine learning, deep neural architectures, distributed computing, database management, and big data engineering.',
    courseworkOrHighlights: [
      'Final Year Project: AI Lead for 5-member team building an AI-Powered Financial Coaching & Investment Sandbox',
      'Advanced Machine Learning, Deep Learning (CNNs, GNNs, LSTMs, Transformers), and Natural Language Processing',
      'Data Mining, Statistical Quality Control, Big Data Analytics, and Cloud Database Systems',
      'Active contributor to student technical forums and data science workshops'
    ]
  },
  {
    id: 'esoft-diplomas',
    degree: 'Diplomas in Information Technology (DIT) & English',
    institution: 'ESOFT Metro Campus',
    period: '2022 – 2023',
    location: 'Sri Lanka',
    summary: 'Dual professional diploma qualifications combining foundational software engineering paradigms, database design, and systems analysis with advanced technical writing and formal communication.',
    courseworkOrHighlights: [
      'Diploma in Information Technology: Relational Databases (SQL Server, MySQL), OOP (Java, C#), Web Fundamentals & Systems Analysis',
      'Diploma in English: Technical Report Writing, Scientific Documentation, Professional Public Speaking & Presentation'
    ]
  },
  {
    id: 'al-physics',
    degree: 'G.C.E. Advanced Level – Physical Science',
    institution: 'Ministry of Education, Sri Lanka',
    period: '2022',
    location: 'Ampara, Sri Lanka',
    summary: 'Rigorous pre-university national examination stream focusing on advanced mathematical analytical methods, classical & modern physics, and chemistry.',
    courseworkOrHighlights: [
      'Combined Mathematics (Pure Mathematics & Mechanics / Calculus / Linear Algebra)',
      'Physics (Mechanics, Waves, Thermodynamics, Electromagnetism, Electronics)',
      'Chemistry (Physical, Inorganic, and Organic Chemistry)'
    ]
  }
];

export const mlLifecyclePhases = [
  {
    step: '01',
    title: 'Data Ingestion & Cleaning',
    tools: 'Pandas, NumPy, SQL',
    description: 'Imputation strategies, outlier detection, data integrity verification, and schema validation.'
  },
  {
    step: '02',
    title: 'EDA & Feature Engineering',
    tools: 'Seaborn, Scikit-learn, Stats',
    description: 'Statistical correlation analysis, distribution skewness correction, domain-driven feature synthesis.'
  },
  {
    step: '03',
    title: 'Model Training & Tuning',
    tools: 'PyTorch, XGBoost, GNNs',
    description: 'Cross-validated hyperparameter optimization, custom loss formulation, loss curve convergence.'
  },
  {
    step: '04',
    title: 'Explainable AI & Audit',
    tools: 'SHAP, LIME, Calibration',
    description: 'Game-theoretic feature attribution, local surrogate modeling, artifact vs. genuine signal validation.'
  },
  {
    step: '05',
    title: 'MLOps & Deployment',
    tools: 'DagsHub, Streamlit, Docker',
    description: 'Automated experiment tracking, model registry versioning, live API endpoints, interactive dashboards.'
  }
];
