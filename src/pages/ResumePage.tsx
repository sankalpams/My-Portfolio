import React from 'react';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';
import { useRouter } from '../router/RouterContext';

export const ResumePage: React.FC = () => {
  const { navigate } = useRouter();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-zinc-900 dark:text-white print:p-0 print:py-0 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation & Controls (Hidden when printing) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-200 dark:border-zinc-800 print:hidden">
          <button
            onClick={() => navigate('#/')}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Overview</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white border border-zinc-300 dark:border-zinc-700 text-xs font-mono font-medium transition-all hover:scale-105 btn-3d-secondary"
            >
              <Printer className="w-4 h-4 text-rose-500 dark:text-rose-400" />
              <span>Print CV</span>
            </button>

            <a
              href="/Malith_Shehan_Resume.pdf"
              download="Malith_Shehan_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 dark:hover:bg-rose-400 text-white dark:text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 btn-3d-primary"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Resume Sheet Container */}
        <div className="rounded-3xl bg-white dark:bg-[#09090c] border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 card-3d space-y-8 font-sans print:border-none print:shadow-none print:p-0 print:bg-transparent print:text-black">
          
          {/* Header */}
          <div className="pb-8 border-b border-zinc-200 dark:border-zinc-800 print:border-black/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white print:text-black tracking-tight uppercase">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-mono text-rose-600 dark:text-rose-400 print:text-zinc-800 font-semibold mt-1">
                Aspiring Data Engineer | Data Pipelines · SQL · Cloud Data Platforms
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-4 text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 print:text-zinc-800" />
                  Padukka, Sri Lanka
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 print:text-zinc-800" />
                  +94 71 335 0404
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 print:text-zinc-800" />
                  malithsankalpa52@gmail.com
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <LinkedinIcon className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 print:text-zinc-800" />
                  linkedin.com/in/malithshehan
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <GithubIcon className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 print:text-zinc-800" />
                  github.com/SankalpaMS
                </span>
                <span>•</span>
                <a
                  href="https://malithshehan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 dark:text-rose-400 print:text-zinc-800 hover:underline"
                >
                  malithshehan.vercel.app
                </a>
              </div>
            </div>

            <div className="w-24 h-24 rounded-2xl overflow-hidden border border-rose-500/40 shadow-lg shrink-0 hidden sm:block print:hidden">
              <img src="/malith_photo.jpg" alt="Malith" loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 print:text-zinc-900 font-bold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 print:text-zinc-800 leading-relaxed">
              Final-year Data Science undergraduate focused on building the data infrastructure behind analytics and ML products. Hands-on with end-to-end pipelines: ingestion, cleaning, validation, transformation, relational modelling in PostgreSQL/MySQL, and serving data through decoupled APIs. Curated an 11,500+ record multilingual dataset, designed a zero cost cloud data stack (PostgreSQL on Supabase/Neon, FastAPI, Hugging Face Hub), and packaged reproducible, version tracked workflows with DagsHub, Docker and GitHub Actions. Strong in Python and SQL, with an ML background that helps in building pipelines data scientists can rely on. Seeking a Junior / Associate Data Engineer or Data Engineering Intern role.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 print:text-zinc-900 font-bold mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 print:hidden" />
              TECHNICAL SKILLS
            </h2>

            <div className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800 font-mono">
              <div><strong className="text-zinc-900 dark:text-white print:text-black">• Languages:</strong> Python, SQL, Java (basic), Dart</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">• Databases &amp; Storage:</strong> PostgreSQL, MySQL, Supabase, Neon (serverless Postgres), relational schema design</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">• Data Processing &amp; Pipelines:</strong> Pandas, NumPy, ETL/ELT workflows, data cleaning &amp; validation, deduplication, feature engineering, reproducible pipelines</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">• APIs &amp; Data Serving:</strong> FastAPI, REST microservices, decoupled data/model serving</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">• DevOps &amp; Versioning:</strong> Git, GitHub Actions (CI/CD), Docker (basic), DagsHub (data &amp; experiment versioning), Hugging Face Hub</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">• Analytics &amp; BI:</strong> Power BI, Streamlit dashboards, Excel, Matplotlib, Seaborn, exploratory data analysis</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">• Machine Learning (supporting):</strong> Scikit-learn, XGBoost, PyTorch, Transformers (XLM-RoBERTa, BERT), LSTM, GNNs</div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 print:text-zinc-900 font-bold mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 print:hidden" />
              PROJECTS
            </h2>

            <div className="space-y-5">
              {/* Project 1 */}
              <div className="text-xs sm:text-sm">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    Public Pulse — Civic-Intelligence Data Platform
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600">
                    Group Project
                  </span>
                </div>
                <div className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-700 font-semibold mb-1">
                  Python · PostgreSQL (Supabase/Neon) · FastAPI · Hugging Face · Streamlit · XLM-RoBERTa
                </div>
                <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-700 pl-4 list-disc">
                  <li>Built the data layer for a trilingual (Sinhala, Singlish, English) opinion-mining platform ingesting public political commentary from Sri Lankan YouTube channels.</li>
                  <li>Curated and labelled an 11,500+ row golden dataset across 5 label dimensions (utility, topic, sub-issue, stance, sarcasm), with cleaning, deduplication and spam/flood filtering for code-switched text.</li>
                  <li>Architected a zero-cost, decoupled stack: PostgreSQL on Supabase/Neon for storage, FastAPI as the serving layer, Hugging Face-hosted model checkpoints, and a Streamlit dashboard that never loads model weights directly.</li>
                  <li>Fed the processed data through a 4-stage model cascade (gatekeeper → topic → sub-issue → stance/sarcasm), writing results back to the database for dashboard queries.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="text-xs sm:text-sm">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    End-to-End Customer Churn Pipeline with MLOps
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600">
                    Group Project
                  </span>
                </div>
                <div className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-700 font-semibold mb-1">
                  Python · Pandas · NumPy · Scikit-learn · XGBoost · DagsHub
                </div>
                <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-700 pl-4 list-disc">
                  <li>Designed a full pipeline from raw customer data to a deployable model: ingestion, cleaning, preprocessing, EDA and feature engineering.</li>
                  <li>Applied statistical EDA to identify significant churn indicators, then engineered and selected features to improve downstream model quality.</li>
                  <li>Implemented data and experiment versioning with DagsHub, packaging the workflow into a reproducible, production-ready pipeline.</li>
                  <li>Trained and compared Scikit-learn and XGBoost classifiers on the engineered features to select the best performer.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="text-xs sm:text-sm">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    AI-Based Personal Finance &amp; Investment Training App
                  </span>
                  <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-600 font-semibold">
                    Final Year Project (Ongoing)
                  </span>
                </div>
                <div className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-700 font-semibold mb-1">
                  Python · Supabase · Flutter/Dart · PyTorch · LSTM · BERT · SHAP/LIME
                </div>
                <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-700 pl-4 list-disc">
                  <li>Own the AI and data layer of a 5-member team, within a three-tier architecture: Flutter frontend, decoupled Python microservices, and a Supabase (PostgreSQL) data layer.</li>
                  <li>Building the data flow from user transaction records into an LSTM model for next-month expenditure prediction, and a BERT pipeline for financial-news sentiment classification.</li>
                  <li>Applying SHAP/LIME explainability across all model outputs and designing evaluation with MAE, paired t-tests and SUS scores.</li>
                  <li>Supervised by Dr. Chameera De Silva and Mr. Nethum Dilchitha.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="text-xs sm:text-sm">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    Node Classification on OGBN-Arxiv (Graph Neural Networks)
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600">
                    Group Project
                  </span>
                </div>
                <div className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-700 font-semibold mb-1">
                  Python · PyTorch Geometric · GCN · GAT · Streamlit
                </div>
                <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-700 pl-4 list-disc">
                  <li>Built a full pipeline to load, process and model the OGBN-Arxiv citation network, implementing and comparing GCN and GAT architectures for node classification.</li>
                  <li>Delivered an interactive Streamlit dashboard to visualise predictions and performance, alongside a technical report and public GitHub documentation.</li>
                </ul>
              </div>

              {/* Project 5 */}
              <div className="text-xs sm:text-sm">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    SmartCare Hospital — Clinical Risk Prediction
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600">
                    Group Project
                  </span>
                </div>
                <div className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-700 font-semibold mb-1">
                  Python · Scikit-learn · Logistic Regression
                </div>
                <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-700 pl-4 list-disc">
                  <li>Preprocessed hospital patient data and developed and compared multiple classification models for patient risk prediction.</li>
                  <li>Selected Logistic Regression as the champion model for its simplicity, interpretability and native probability calibration.</li>
                  <li>Investigated near-perfect results to separate genuine signal from data leakage and dataset artifacts, strengthening the evaluation methodology.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 print:text-zinc-900 font-bold mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 print:hidden" />
              EDUCATION
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div>
                <div className="flex justify-between font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                  <span>BSc (Hons) in Data Science — Sri Lanka Technology Campus (SLTC)</span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">2024 – Present</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                  <span>Diploma in Information Technology, Diploma in English — ESOFT Metro Campus</span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">2022 – 2023</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                  <span>G.C.E. Advanced Level — Physical Science</span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 print:text-zinc-900 font-bold mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 print:hidden" />
              CERTIFICATIONS
            </h2>
            <div className="space-y-3 text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
              <div className="border-l-2 border-zinc-300 dark:border-zinc-800 print:border-zinc-300 pl-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-bold text-zinc-900 dark:text-white print:text-black">
                    Machine Learning Specialization — <span className="text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">DeepLearning.AI</span>
                  </span>
                  <span className="font-mono text-[11px] text-rose-600 dark:text-rose-400 print:text-zinc-600 font-semibold">2026</span>
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600 mt-0.5">
                  Supervised Machine Learning · Advanced Learning Algorithms · Unsupervised Learning, Recommenders &amp; Reinforcement Learning
                </div>
                <a
                  href="https://coursera.org/share/1c669829ccd97655d0ed87fc22bb94b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] text-rose-600 dark:text-rose-400/90 hover:underline print:hidden mt-0.5 font-mono"
                >
                  Verify Credential →
                </a>
              </div>

              <div className="border-l-2 border-zinc-300 dark:border-zinc-800 print:border-zinc-300 pl-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-bold text-zinc-900 dark:text-white print:text-black">
                    Cisco Certified Network Associate (CCNA) — <span className="text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">Cisco Networking Academy</span>
                  </span>
                  <span className="font-mono text-[11px] text-rose-600 dark:text-rose-400 print:text-zinc-600 font-semibold">2026</span>
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600 mt-0.5">
                  Introduction to Networks · Switching, Routing &amp; Wireless Essentials · Enterprise Networking, Security &amp; Automation
                </div>
                <div className="flex items-center gap-3 mt-1 font-mono text-[11px] print:hidden">
                  <a
                    href="https://www.credly.com/badges/a3d353ea-6877-4806-baf9-dfa8c06b01e4/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    Credly Badge →
                  </a>
                  <span className="text-zinc-400 dark:text-zinc-600">•</span>
                  <a
                    href="/certificates/CCNA_Introduction_to_Networks_Certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Certificate PDF →
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-zinc-300 dark:border-zinc-800 print:border-zinc-300 pl-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-bold text-zinc-900 dark:text-white print:text-black">
                    Generative AI for Everyone — <span className="text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">DeepLearning.AI</span>
                  </span>
                  <span className="font-mono text-[11px] text-rose-600 dark:text-rose-400 print:text-zinc-600 font-semibold">2025</span>
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600 mt-0.5">
                  Credential ID: ZD3G9ZSXAX6K
                </div>
                <a
                  href="https://coursera.org/share/04c33f8074a2651ba1d71af137a0543a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] text-rose-600 dark:text-rose-400/90 hover:underline print:hidden mt-0.5 font-mono"
                >
                  Verify Credential →
                </a>
              </div>
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 print:text-zinc-900 font-bold mb-2">
              REFERENCES
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700 font-mono">
              Available upon request.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
