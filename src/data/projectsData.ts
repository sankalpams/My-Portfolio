import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'financial-ai-coaching',
    title: 'AI-Based Personalized Financial Coaching & Sandbox Investment Training App',
    shortTitle: 'AI Personal Finance & Investment Sandbox',
    subtitle: 'Final Year Project (Ongoing) — Leading AI/Data Science Subsystem',
    category: 'Deep Learning & NLP',
    isFYP: true,
    status: 'In Progress',
    role: 'Lead AI & Data Science Engineer (5-Member Team)',
    tags: ['Flutter', 'Dart', 'Supabase', 'Python', 'PyTorch', 'LSTM', 'BERT', 'SHAP', 'LIME', 'FastAPI'],
    overview: 'An intelligent personal finance and simulated trading application designed to deliver trustworthy, hyper-personalized financial coaching and expenditure forecasting while guaranteeing transparent model explainability.',
    bullets: [
      'Own the AI and data science layer of a 5-member Final Year Project, supervised by Dr. Chameera De Silva and Mr. Nethum Dilchitha, within a three-layer architecture (Flutter/Dart presentation, decoupled Python AI microservices, Supabase data layer).',
      'Engineered an LSTM regression architecture for sequential next-month expenditure forecasting across varied transaction categories.',
      'Fine-tuned a domain-adapted BERT Transformer model for real-time financial news sentiment classification to power investment sandbox risk scoring.',
      'Integrated post-hoc explainability using SHAP and LIME across all financial recommendations, allowing users to inspect exact feature contributions behind every AI insight.',
      'Evaluating system effectiveness through quantitative benchmarks (Mean Absolute Error, paired t-tests) and user satisfaction metrics (System Usability Scale — SUS).'
    ],
    keyHighlights: [
      '3-Tier Decoupled Microservice Architecture',
      'LSTM Sequential Expenditure Forecasting',
      'Fine-Tuned BERT Sentiment Risk Engine',
      'Transparent Explainability via SHAP/LIME',
      'Rigorous Statistical & SUS Usability Validation'
    ],
    architecture: [
      {
        layer: 'Presentation Layer',
        technology: 'Flutter & Dart',
        responsibility: 'Cross-platform mobile client with interactive budgeting charts, simulated trading sandbox, and SHAP explanation visualizers.'
      },
      {
        layer: 'AI Microservice Layer',
        technology: 'Python, PyTorch, FastAPI',
        responsibility: 'Decoupled RESTful inference server running pre-trained LSTM sequential models and fine-tuned BERT sentiment pipelines.'
      },
      {
        layer: 'Explainability Engine',
        technology: 'SHAP & LIME Kernel',
        responsibility: 'Calculates real-time Shapley values and local surrogate explanations for transaction categorizations and risk recommendations.'
      },
      {
        layer: 'Data & Persistence Layer',
        technology: 'Supabase (PostgreSQL) + Edge Functions',
        responsibility: 'Secure user authentication, encrypted financial ledgers, transactional logs, and real-time database synchronization.'
      }
    ],
    metrics: [
      { label: 'Architecture', value: '3-Tier Microservices', subtext: 'Flutter + Python + Supabase' },
      { label: 'Team Role', value: 'AI / DS Lead', subtext: '5-Member Project' },
      { label: 'Models Deployed', value: 'LSTM + BERT', subtext: 'Forecasting & NLP' },
      { label: 'Transparency', value: 'SHAP / LIME', subtext: '100% Explained Inferences' }
    ],
    githubUrl: 'https://github.com/SankalpaMS',
    featured: true,
    accentColor: '#06b6d4'
  },
  {
    id: 'smartcare-hospital-risk',
    title: 'SmartCare Hospital — Clinical Risk Prediction System',
    shortTitle: 'Clinical Risk Prediction System',
    subtitle: 'Interpretable Machine Learning for Healthcare Triage',
    category: 'Machine Learning',
    status: 'Completed',
    role: 'Lead ML Developer',
    tags: ['Python', 'Scikit-learn', 'Logistic Regression', 'Probability Calibration', 'EDA', 'Pandas', 'Seaborn'],
    overview: 'A clinical decision-support system built to predict patient hospital admission risks and mortality indicators while ensuring total model transparency, calibrated probabilities, and avoidance of dataset artifacts.',
    bullets: [
      'Developed and benchmarked multiple supervised classification models (Random Forest, Gradient Boosting, SVM, Logistic Regression) for patient clinical risk stratification.',
      'Selected Logistic Regression as the champion production model due to its optimal balance of native probability calibration, clinical interpretability, and robust generalization.',
      'Conducted extensive diagnostic research into suspicious near-perfect validation scores, successfully identifying and mitigating subtle target leakage and dataset artifacts.',
      'Applied Platt scaling and isotonic calibration techniques to ensure predicted probabilities directly correlated with true empirical patient risk ratios.'
    ],
    keyHighlights: [
      'Native Probability Calibration for Clinical Decisions',
      'Target Leakage & Artifact Diagnostic Audits',
      'ROC-AUC & Precision-Recall Curve Optimization',
      'Transparent Odds-Ratio Interpretability for Doctors'
    ],
    architecture: [
      {
        layer: 'Data Preprocessing & Audit',
        technology: 'Pandas & NumPy',
        responsibility: 'Clinical variable imputation, outlier bounding, and verification against target-correlated leakage variables.'
      },
      {
        layer: 'Model Optimization & Selection',
        technology: 'Scikit-learn',
        responsibility: 'Stratified K-Fold cross-validation, hyperparameter grid search, and ROC-AUC vs Brier Score evaluation.'
      },
      {
        layer: 'Calibration Layer',
        technology: 'CalibratedClassifierCV',
        responsibility: 'Ensures confidence score maps to true positive probabilities.'
      }
    ],
    metrics: [
      { label: 'Champion Model', value: 'Logistic Regression', subtext: 'Calibrated Probabilities' },
      { label: 'Audit Result', value: 'Zero Leakage', subtext: 'Artifact Elimination' },
      { label: 'Evaluation', value: 'ROC-AUC & Brier', subtext: 'Clinical Triage Grade' }
    ],
    githubUrl: 'https://github.com/Ravindi373/SmartCare-Hospital.git',
    liveUrl: 'https://smartcare-hospital-group2.streamlit.app/',
    image: '/smartcare_thumb.png',
    featured: true,
    accentColor: '#38bdf8'
  },
  {
    id: 'ogbn-arxiv-gnn',
    title: 'Node Classification on OGBN-Arxiv with Graph Neural Networks',
    shortTitle: 'OGBN-Arxiv Graph Neural Networks',
    subtitle: 'Graph Deep Learning Pipeline & Interactive Streamlit Explorer',
    category: 'Graph Neural Networks',
    status: 'Production Ready',
    role: 'GNN Researcher & Developer',
    tags: ['Python', 'PyTorch Geometric', 'GCN', 'GAT', 'Streamlit', 'NetworkX', 'DGL'],
    overview: 'A full graph representation learning pipeline implementing and benchmarking Graph Convolutional Networks (GCN) and Graph Attention Networks (GAT) for subject area classification across 169,343 arXiv computer science papers.',
    bullets: [
      'Constructed a comprehensive GNN pipeline using PyTorch Geometric on the Open Graph Benchmark (OGBN-Arxiv) citation network dataset.',
      'Implemented, tuned, and compared Graph Convolutional Networks (GCN) with multi-head Graph Attention Networks (GAT) to model complex inter-paper citation topologies.',
      'Handled large-scale citation graph training dynamics with neighborhood sampling, dropout regularization, and self-loop feature preservation.',
      'Built and deployed an interactive Streamlit dashboard allowing users to visualize citation neighborhoods, explore attention weight distributions, and test live inference.'
    ],
    keyHighlights: [
      '169k+ Nodes Citation Graph Processing',
      'GCN vs. Multi-Head GAT Attention Benchmark',
      'Interactive Streamlit Graph Topology Explorer',
      'PyTorch Geometric Pipeline Architecture'
    ],
    architecture: [
      {
        layer: 'Graph Topology Ingestion',
        technology: 'OGB & PyTorch Geometric',
        responsibility: 'Loading 169,343 nodes and 1,166,243 directed citation edges with 128-dimensional Word2Vec embeddings.'
      },
      {
        layer: 'Neural Message Passing',
        technology: 'PyTorch Geometric (GCN/GAT)',
        responsibility: 'Multi-layer spatial convolution and multi-head self-attention aggregating neighboring paper representations.'
      },
      {
        layer: 'Interactive Visualization',
        technology: 'Streamlit & NetworkX',
        responsibility: 'Sub-graph extraction, interactive node exploration, and real-time category prediction visualization.'
      }
    ],
    metrics: [
      { label: 'Nodes Processed', value: '169,343', subtext: 'Arxiv CS Papers' },
      { label: 'Edges Modeled', value: '1.16M+', subtext: 'Citation Network' },
      { label: 'Architectures', value: 'GCN vs GAT', subtext: 'Multi-Head Attention' },
      { label: 'Dashboard', value: 'Streamlit', subtext: 'Live Visual Inference' }
    ],
    githubUrl: 'https://github.com/sankalpams/OGBN-Arxiv-GNN-Classification.git',
    liveUrl: 'https://sankalpams-ogbn-arxiv-gnn-classification-dashboardapp-2jve1n.streamlit.app/',
    image: '/ogbn_arxiv_thumb.png',
    featured: true,
    accentColor: '#818cf8'
  },
  {
    id: 'public-pulse',
    title: 'Public Pulse 🇱🇰 — Grounded LLM System for Sri Lankan Public Discourse',
    shortTitle: 'Public Pulse 🇱🇰 (Grounded LLM System)',
    subtitle: 'Fine-Tuned XLM-RoBERTa Cascade + BM25 Evidence Retrieval + Faithfulness-Verified Grounded LLM Insights (CCS4310 Deep Learning Group Project)',
    category: 'Deep Learning & NLP',
    status: 'Completed',
    role: 'Lead NLP & Machine Learning Engineer (6-Member Group Project)',
    tags: ['Python', 'PyTorch', 'XLM-RoBERTa', 'Transformers', 'Hugging Face', 'Gemini API', 'BM25', 'RAG', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'NLP', 'Code-Switching'],
    overview: 'A grounded, multilingual NLP system built at SLTC to transform Sinhala, Singlish, and English commentary beneath Sri Lankan TV-news YouTube broadcasts (Hiru, Ada Derana, Sirasa, ITN, and others) into trustworthy, evidence-traceable public-discourse insights. Combines a fine-tuned XLM-RoBERTa classification cascade with deterministic BM25 evidence retrieval and a Grounded LLM (Gemini) insight generator whose every claim is independently checked against cited evidence — directly addressing the hallucination risk of unconstrained LLM summarization for civic and journalistic use.',
    bullets: [
      'Co-engineered a grounded LLM civic-intelligence system combining a fine-tuned XLM-RoBERTa classification cascade with deterministic BM25 evidence retrieval and Gemini-powered, citation-restricted insight generation across 14 Sri Lankan TV-news YouTube programs.',
      'Built and validated a 3-layer classification cascade (Utility Gatekeeper ➔ Macro-Topic ➔ Pragmatic Stance) on a 10,000-row stratified Golden Sample drawn from 43,469 raw comments, reaching held-out macro-F1 scores of 0.98, 0.72, and 0.86 respectively.',
      'Designed a 10-stage BM25 evidence-retrieval pipeline with deterministic multi-key sorting, duplicate control, and stance-proportional diversity quotas to prevent manufactured-consensus bias in generated insights.',
      'Implemented a 3-stage faithfulness-verification engine (deterministic rules, lexical overlap, multilingual semantic entailment) that atomically labels every LLM-generated claim as Supported, Partially Supported, Unsupported, or Contradicted.',
      'Engineered ethical safeguards end-to-end — HMAC-SHA256 author pseudonymization, aggregate-only reporting, and prompt-injection isolation for untrusted comment text — validated by 171 passing automated tests.',
      'Shipped a FastAPI backend and a 14-view React 18/TypeScript analytics dashboard (Zustand, TanStack Query) exposing the full pipeline through a versioned REST contract with zero direct database coupling.'
    ],
    keyHighlights: [
      'Grounded LLM System with Independent Faithfulness Verification',
      '3-Layer Fine-Tuned XLM-RoBERTa Cascade (Utility → Topic → Stance)',
      'Deterministic BM25 Evidence Retrieval with Stance-Diversity Quotas',
      'Citation-Bound Insight Generation via Google Gemini API',
      'Four-Class Atomic-Claim Faithfulness Taxonomy (171 Automated Tests)',
      '10,000-Row Golden Dataset Curated from 43,469 Trilingual Comments',
      'HMAC-SHA256 Author Pseudonymization & Aggregate-Only Ethical Safeguards'
    ],
    architecture: [
      {
        layer: 'Data Collection & Extraction',
        technology: 'YouTube Data API v3 (Python)',
        responsibility: 'Idempotent scraping of 14 Sri Lankan TV-news YouTube programs across 8 channels, with HMAC-SHA256 author pseudonymization and a raw-text preservation contract.'
      },
      {
        layer: '3-Layer Classification Cascade',
        technology: 'Fine-Tuned XLM-RoBERTa-base (PyTorch)',
        responsibility: 'Utility gatekeeper (VALID/NOISE) ➔ macro-topic (5 classes) ➔ pragmatic stance (CRIT/NEUT/SUPP), trained with class-weighted loss and stratified oversampling.'
      },
      {
        layer: 'Evidence Retrieval Engine',
        technology: 'BM25 + PostgreSQL',
        responsibility: 'Deterministic 10-stage retrieval pipeline with multi-key sorting, duplicate control, and stance-proportional diversity quotas for citation-grounded evidence sets.'
      },
      {
        layer: 'Grounded LLM Insight Generation',
        technology: 'Google Gemini API (gemini-2.5-flash)',
        responsibility: 'Generates citation-bound findings restricted to retrieved evidence under five prompt-security rules, refusing to generate below a minimum evidence threshold.'
      },
      {
        layer: 'Faithfulness Verification Engine',
        technology: 'Rule-Based + Multilingual Semantic NLI',
        responsibility: 'Three-stage atomic-claim verifier scoring every generated claim as Supported, Partially Supported, Unsupported, or Contradicted against its cited evidence.'
      },
      {
        layer: 'API & Analytics Dashboard',
        technology: 'FastAPI + React 18/TypeScript (Zustand, TanStack Query)',
        responsibility: '14-view dashboard (Overview, Explore, Sources, AI Intelligence, Data) consuming a versioned REST contract with zero direct database coupling.'
      }
    ],
    metrics: [
      { label: 'Golden Dataset', value: '10,000 Rows', subtext: 'Stratified from 43,469 Raw Comments' },
      { label: 'Classifier Macro-F1', value: '0.98 / 0.72 / 0.86', subtext: 'Utility / Topic / Stance' },
      { label: 'Automated Tests', value: '171 / 171 Passing', subtext: 'Full CI Test Suite' },
      { label: 'Architecture', value: 'Cascade + RAG', subtext: 'XLM-RoBERTa + BM25 + Gemini' }
    ],
    githubUrl: 'https://github.com/ThilaniDilmani/public-pulse-srilanka',
    image: '/public_pulse_thumb.png',
    featured: true,
    accentColor: '#f43f5e'
  },
  {
    id: 'customer-churn-mlops',
    title: 'End-to-End Customer Churn Prediction with MLOps Pipeline',
    shortTitle: 'End-to-End Churn MLOps Pipeline',
    subtitle: 'Reproducible ML Lifecycle with Automated DagsHub Experiment Tracking',
    category: 'MLOps & Systems',
    status: 'Completed',
    role: 'MLOps & Data Engineer',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'DagsHub', 'DVC', 'Git'],
    overview: 'A production-grade machine learning system from raw ingestion to model artifact versioning, built to identify customer churn drivers with statistically sound feature importance and automated tracking.',
    bullets: [
      'Designed and executed a full ML lifecycle workflow spanning data ingestion, automated cleaning, categorical encoding, and exhaustive exploratory analysis.',
      'Identified statistically significant churn indicators using hypothesis testing, mutual information scores, and weight-of-evidence transformations.',
      'Trained, hyperparameter-tuned, and benchmarked multiple classification models (Logistic Regression, Random Forest, XGBoost) with stratified cross-validation.',
      'Integrated DagsHub for automated experiment tracking, parameter logging, metric visualization, and DVC data versioning to ensure 100% reproducible pipelines.'
    ],
    keyHighlights: [
      'Reproducible End-to-End Pipeline',
      'Automated Experiment Tracking with DagsHub',
      'Statistical Feature Significance Scoring',
      'Versioned Data & Model Artifact Registries'
    ],
    architecture: [
      {
        layer: 'Data Ingestion & Preprocessing',
        technology: 'Pandas, NumPy, Scikit-learn Pipeline',
        responsibility: 'Automated data validation, missing value imputation, robust scaling, and One-Hot encoding.'
      },
      {
        layer: 'Model Training & Tuning',
        technology: 'XGBoost & Scikit-learn',
        responsibility: 'GridSearchCV optimization maximizing F1-score and PR-AUC on imbalanced customer distributions.'
      },
      {
        layer: 'MLOps Registry & Tracking',
        technology: 'DagsHub & DVC',
        responsibility: 'Logging hyperparameters, ROC curves, confusion matrices, and tracking model weights across commits.'
      }
    ],
    metrics: [
      { label: 'Tracking Tool', value: 'DagsHub & DVC', subtext: 'Reproducible Runs' },
      { label: 'Champion Model', value: 'XGBoost', subtext: 'Tuned Hyperparameters' },
      { label: 'Optimization', value: 'PR-AUC & F1', subtext: 'Imbalanced Handling' }
    ],
    githubUrl: 'https://github.com/sankalpams/End-to-End-Customer-Churn-Prediction-with-Full-MLOps-Pipeline.git',
    dagshubUrl: 'https://dagshub.com/thilanisenarath403/churn-mlops-project',
    liveUrl: 'https://dagshub.com/thilanisenarath403/churn-mlops-project',
    featured: true,
    accentColor: '#10b981'
  },
  {
    id: 'interactive-data-science-portfolio',
    title: 'My Portfolio',
    shortTitle: 'My Portfolio',
    subtitle: 'Responsive High-Performance Personal Web Showcase',
    category: 'Full-Stack & Web',
    status: 'Completed',
    role: 'Lead Designer & Frontend Architect',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'UI/UX', 'Responsive Design'],
    overview: 'A state-of-the-art personal engineering portfolio built with React 18, TypeScript, TailwindCSS, and Framer Motion, featuring buttery smooth 60fps hardware-accelerated animations, Poppins typography, radar grid textures, and deep-dive technical project case studies.',
    bullets: [
      'Engineered a modular React 18 + TypeScript multi-page architecture with lightweight client-side routing and dedicated interactive project case studies.',
      'Crafted a high-contrast dark aesthetic with custom ambient glow meshes, radar texture backdrops, and Poppins font hierarchy across all components.',
      'Implemented buttery smooth scroll reveals with quintic ease-out curves, hardware-accelerated 3D transforms, and seamless dual-track infinite marquee ticker ribbons.',
      'Achieved 100% mobile viewport responsiveness down to 320px with adaptive elastic cards and touch-optimized navigation drawers.'
    ],
    keyHighlights: [
      'Modular React 18 & TypeScript Architecture',
      'Hardware-Accelerated 60fps Framer Motion Physics',
      'Unified Brand Identity with Custom Golden MS Monogram',
      'Deep-Dive Architecture & Metric Case Studies',
      'Zero-Delay Mobile-Optimized Responsive Layouts'
    ],
    architecture: [
      {
        layer: 'Client Presentation Layer',
        technology: 'React 18 & TypeScript',
        responsibility: 'Component-driven user interface with strict typing, modular layout structures, and instant client-side hash routing.'
      },
      {
        layer: 'Design System & Theming',
        technology: 'Tailwind CSS & Custom Theme Context',
        responsibility: 'Custom radar-grid backgrounds, ambient gradient orbs, and glassmorphism styling.'
      },
      {
        layer: 'Motion & Physics Engine',
        technology: 'Framer Motion & GPU Keyframes',
        responsibility: 'Fluid quintic ease-out scroll reveal animations, dual-track skills marquee, and micro-interactions.'
      },
      {
        layer: 'Tooling & Deployment',
        technology: 'Vite & GitHub Pages',
        responsibility: 'Lightning-fast hot module replacement, optimized production bundling, and automated deployment.'
      }
    ],
    metrics: [
      { label: 'Architecture', value: 'React 18 + Vite', subtext: 'TypeScript Strictly Typed' },
      { label: 'Design System', value: 'Tailwind CSS', subtext: 'Dark Radar Theme' },
      { label: 'Animation', value: 'Framer Motion', subtext: '60/120 FPS Buttery Smooth' },
      { label: 'Responsiveness', value: 'Mobile First', subtext: '100% Fluid Scaling' }
    ],
    githubUrl: 'https://github.com/sankalpams/My-Portfolio',
    liveUrl: 'https://sankalpams.github.io/My-Portfolio/',
    image: '/portfolio_thumb.png',
    featured: true,
    accentColor: '#f43f5e'
  },
  {
    id: 'sapro-greenhouse-system',
    title: 'SAPRO v1.0 — Smart Greenhouse Management System',
    shortTitle: 'SAPRO v1.0 Smart Greenhouse',
    subtitle: 'Real-Time Environmental Telemetry & Automated Control Backend',
    category: 'MLOps & Systems',
    status: 'Completed',
    role: 'Backend & Systems Developer',
    tags: ['Backend Development', 'Real-Time Monitoring', 'Automation', 'PostgreSQL', 'Python', 'IoT Telemetry'],
    overview: 'A robust backend and telemetry processing engine engineered for real-time smart greenhouse climate monitoring, automated irrigation actuation, and historical time-series analytics.',
    bullets: [
      'Architected and implemented the core backend services to collect, validate, and persist high-frequency environmental sensor data (temperature, humidity, soil moisture, light intensity).',
      'Engineered relational database schemas in PostgreSQL optimized for time-series aggregation, rapid anomaly querying, and historical crop yield correlation.',
      'Developed automated event-driven rule engines that trigger hardware control actions (ventilation, water pumps, shade motors) upon parameter threshold violations.',
      'Structured structured REST endpoints for real-time dashboard visualization and alert dispatching.'
    ],
    keyHighlights: [
      'Real-Time Multi-Sensor Telemetry Pipeline',
      'Automated Rule-Based Hardware Actuation',
      'Time-Series Database Optimization in PostgreSQL',
      'Zero-Latency Threshold Breach Anomaly Alerts'
    ],
    architecture: [
      {
        layer: 'Telemetry Ingestion & Processing',
        technology: 'Python Backend Engine',
        responsibility: 'Sensor data parsing, timestamp normalization, and out-of-range value validation.'
      },
      {
        layer: 'Automated Control Logic',
        technology: 'Event-Driven Rule Engine',
        responsibility: 'Evaluates environmental thresholds to autonomously command actuators and irrigation pumps.'
      },
      {
        layer: 'Time-Series Storage',
        technology: 'PostgreSQL Relational DB',
        responsibility: 'Stores structured historical logs with indexing for rapid moving-average and trend queries.'
      }
    ],
    metrics: [
      { label: 'Architecture', value: 'Real-Time IoT Backend', subtext: 'Telemetry & Control' },
      { label: 'Database', value: 'PostgreSQL', subtext: 'Time-Series Optimized' },
      { label: 'Automation', value: 'Event-Driven', subtext: 'Threshold Actuation' }
    ],
    githubUrl: 'https://github.com/SankalpaMS',
    featured: false,
    accentColor: '#f59e0b'
  }
];
