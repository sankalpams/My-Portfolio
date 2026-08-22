import React from 'react';
import { MLExplainabilityDemo } from './MLExplainabilityDemo';
import { GitCommit } from 'lucide-react';

export const DevActivity: React.FC = () => {
  const telemetryLogs = [
    { time: 'Active', pipeline: 'DagsHub MLflow Experiment', status: 'Tracked', metric: 'ROC-AUC: 0.942', runId: 'run-8f92a1' },
    { time: '4th Year', pipeline: 'PyTorch Geometric GAT Arxiv', status: 'Converged', metric: 'Test Acc: 73.8%', runId: 'run-7b19c4' },
    { time: 'FYP AI', pipeline: 'LSTM Expenditure Predictor', status: 'Calibrated', metric: 'MAE: $42.50', runId: 'run-5e44d0' },
    { time: 'XAI Core', pipeline: 'SHAP Kernel Explainer Audit', status: 'Attributed', metric: '100% Fidelity', runId: 'run-3a11f9' },
  ];

  return (
    <section id="dev-activity" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            DEV ACTIVITY & EXPERIMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white dark:text-white tracking-tight uppercase">
            LIVE ML & CODE TELEMETRY
          </h2>
          <div className="w-12 h-1 bg-rose-400 rounded-full mt-3" />
        </div>

        {/* Telemetry Status Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {telemetryLogs.map((log, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#09090c] border border-zinc-800 font-mono text-xs shadow-sm hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center justify-between text-zinc-500 mb-1 text-[11px]">
                <span className="flex items-center gap-1">
                  <GitCommit className="w-3 hand-3 text-rose-400" />
                  {log.runId}
                </span>
                <span className="text-emerald-400">{log.status}</span>
              </div>
              <div className="font-bold text-white truncate my-1">
                {log.pipeline}
              </div>
              <div className="text-zinc-400 text-[11px] flex items-center justify-between">
                <span>Metric:</span>
                <span className="text-rose-300 font-semibold">{log.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live SHAP Interactive Simulator */}
        <MLExplainabilityDemo />

      </div>
    </section>
  );
};
