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
import { personalInfo, certifications } from '../data/portfolioData';
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
                Data Science Undergraduate | Machine Learning &amp; Analytics
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-4 text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 print:text-zinc-800" />
                  Ampara, Sri Lanka
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
              </div>
            </div>

            <div className="w-24 h-24 rounded-2xl overflow-hidden border border-rose-500/40 shadow-lg shrink-0 hidden sm:block print:hidden">
              <img src="/malith_photo.jpg" alt="Malith" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 print:text-zinc-900 font-bold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 print:text-zinc-800 leading-relaxed">
              Fourth-year Data Science undergraduate with hands-on experience across the full ML lifecycle, data cleaning, feature engineering, model development, and evaluation spanning healthcare classification, graph neural networks, and time series forecasting. Proficient in Python, SQL, and the Scikit-learn/PyTorch ecosystem, with practical MLOps exposure (experiment tracking, reproducible pipelines) and applied deep learning coursework in CNNs, GNNs, and NLP. Currently leading the AI/data science layer of a 4-member Final Year Project building an AI-powered personal finance application. Seeking a Data Science, Machine Learning, or Data Analyst role to apply predictive modeling and explainable AI skills in an applied setting.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 print:text-zinc-900 font-bold mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 print:hidden" />
              TECHNICAL SKILLS
            </h2>

            <div className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800 font-mono">
              <div><strong className="text-zinc-900 dark:text-white print:text-black">Programming:</strong> Python, SQL, Java (basic), Dart</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">Machine Learning &amp; Deep Learning:</strong> Scikit-learn, XGBoost, PyTorch, Keras/TensorFlow, Graph Neural Networks (GCN, GAT), LSTM, BERT/Transformers, supervised &amp; unsupervised learning, model evaluation &amp; hyperparameter tuning, explainable AI (SHAP, LIME)</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">Data Analysis &amp; Visualization:</strong> Pandas, NumPy, Exploratory Data Analysis, Feature Engineering, Matplotlib, Seaborn, Power BI, Excel</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">MLOps &amp; Experimentation:</strong> DagsHub (experiment tracking &amp; versioning), reproducible pipelines, GitHub Actions, Streamlit</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">Databases:</strong> MySQL, PostgreSQL (basic), Supabase</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">Cloud / DevOps:</strong> Docker (basic), Git, GitHub</div>
              <div><strong className="text-zinc-900 dark:text-white print:text-black">Soft Skills:</strong> Leadership, technical communication, problem-solving, adaptability, critical thinking</div>
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
                <div className="flex flex-wrap justify-between items-baseline">
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    AI-Based Personalized Financial Coaching &amp; Sandbox Investment Training App (Final Year Project, Ongoing)
                  </span>
                  <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-600 font-semibold">
                    Flutter · Dart · Supabase · Python · PyTorch · LSTM · BERT · SHAP/LIME
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-700 pl-4 list-disc">
                  <li>Own the AI and data science layer of a 4-member Final Year Project, supervised by Dr. Chameera De Silva and Mr. Nethum Dilchitha, within a three-layer architecture (Flutter/Dart presentation, decoupled Python AI microservices, Supabase data layer).</li>
                  <li>Building an LSTM regression model for next-month expenditure prediction and fine-tuning a BERT model for financial news sentiment classification.</li>
                  <li>Applying SHAP/LIME explainability across all model recommendations to support transparent, trustworthy AI, and designing evaluation via SUS scores, MAE, and paired t-tests.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="text-xs sm:text-sm">
                <div className="flex flex-wrap justify-between items-baseline">
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    SmartCare Hospital — Clinical Risk Prediction System
                  </span>
                  <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-600 font-semibold">
                    Python · Scikit-learn · Logistic Regression · Model Evaluation
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-700 pl-4 list-disc">
                  <li>Developed and evaluated multiple classification models for hospital patient risk prediction as part of a group AI coursework project, covering data preprocessing, model development, and comparative evaluation.</li>
                  <li>Selected Logistic Regression as the champion model based on simplicity, interpretability, and native probability calibration, over more complex alternatives.</li>
                  <li>Investigated and documented near-perfect model performance to distinguish genuine signal from dataset artifacts, strengthening the model evaluation methodology and final report.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="text-xs sm:text-sm">
                <div className="flex flex-wrap justify-between items-baseline">
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    Node Classification on OGBN-Arxiv with Graph Neural Networks
                  </span>
                  <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-600 font-semibold">
                    Python · PyTorch Geometric · GCN · GAT · Streamlit
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-700 pl-4 list-disc">
                  <li>Built a full graph neural network pipeline for node classification on the OGBN-Arxiv citation network, implementing and comparing GCN and GAT architectures as part of a group Tensors &amp; Graphs coursework project.</li>
                  <li>Developed an interactive Streamlit dashboard to visualize model predictions and performance, alongside a technical report and public GitHub documentation.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="text-xs sm:text-sm">
                <div className="flex flex-wrap justify-between items-baseline">
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    End-to-End Customer Churn Prediction with MLOps Pipeline
                  </span>
                  <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-600 font-semibold">
                    Python · Pandas · NumPy · Scikit-learn · XGBoost · DagsHub
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-700 pl-4 list-disc">
                  <li>Designed a full ML workflow from raw customer data to a deployable churn prediction model, including ingestion, cleaning, preprocessing, and EDA to identify statistically significant churn indicators.</li>
                  <li>Engineered predictive features and applied feature selection to improve model performance, then trained and compared multiple classification models (Scikit-learn, XGBoost) to select the best performer.</li>
                  <li>Implemented experiment tracking and model versioning with DagsHub, packaging the workflow into a reproducible, production-ready pipeline.</li>
                </ul>
              </div>

              {/* Project 5 */}
              <div className="text-xs sm:text-sm">
                <div className="flex flex-wrap justify-between items-baseline">
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                    SAPRO v1.0 — Smart Greenhouse Management System
                  </span>
                  <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400 print:text-zinc-600 font-semibold">
                    Backend Development · Real-Time Monitoring · Automation
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-zinc-700 pl-4 list-disc">
                  <li>Designed and implemented the backend for a smart greenhouse system enabling real-time environmental monitoring and automated control for smart agriculture.</li>
                  <li>Built services to collect, process, and store environmental data, structuring the database for historical tracking and trend analysis, with automation logic to trigger control actions based on threshold breaches.</li>
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
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">2024 – 2027</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                  <span>Diploma in Information Technology — ESOFT Metro Campus</span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">2022 – 2023</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                  <span>Diploma in English — ESOFT Metro Campus</span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">2022 – 2023</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                  <span>G.C.E. Advanced Level – Physical Science</span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 print:text-zinc-900 font-bold mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 print:hidden" />
              CERTIFICATIONS
            </h2>
            <div className="space-y-3 text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
              {certifications.map((cert) => (
                <div key={cert.id} className="border-l-2 border-zinc-300 dark:border-zinc-800 print:border-zinc-300 pl-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="font-bold text-zinc-900 dark:text-white print:text-black">
                      {cert.title} — <span className="text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-normal">{cert.issuer}</span>
                    </span>
                    <span className="font-mono text-[11px] text-rose-600 dark:text-rose-400 print:text-zinc-600 font-semibold">{cert.issueDate}</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600 mt-0.5">
                    {cert.skillsLearned.join(' · ')}
                  </div>
                  {cert.badgeUrl && cert.certificateUrl ? (
                    <div className="flex items-center gap-3 mt-1 font-mono text-[11px] print:hidden">
                      <a
                        href={cert.badgeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 dark:text-amber-400 hover:underline"
                      >
                        Credly Badge →
                      </a>
                      <span className="text-zinc-400 dark:text-zinc-600">•</span>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Certificate PDF →
                      </a>
                    </div>
                  ) : cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[11px] text-rose-600 dark:text-rose-400/90 hover:underline print:hidden mt-0.5 font-mono"
                    >
                      Verify Credential →
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
