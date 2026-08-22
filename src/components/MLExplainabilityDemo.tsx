import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  BarChart2, 
  RefreshCw, 
  Activity, 
  Sliders
} from 'lucide-react';

export const MLExplainabilityDemo: React.FC = () => {
  const [modelType, setModelType] = useState<'clinical' | 'finance'>('clinical');

  // Clinical Risk State
  const [age, setAge] = useState<number>(58);
  const [glucose, setGlucose] = useState<number>(145);
  const [systolicBP, setSystolicBP] = useState<number>(138);
  const [bmi, setBmi] = useState<number>(29.4);
  const [priorAdmissions, setPriorAdmissions] = useState<number>(2);

  // Financial Forecasting State
  const [monthlyIncome, setMonthlyIncome] = useState<number>(4500);
  const [recentVolatility, setRecentVolatility] = useState<number>(35); // %
  const [savingsRatio, setSavingsRatio] = useState<number>(22); // %
  const [recurringSubscriptions, setRecurringSubscriptions] = useState<number>(8);

  // Clinical Model SHAP Calculation Simulation
  const clinicalResult = useMemo(() => {
    // Base log-odds (E[f(x)])
    const baseLogOdds = -1.2; 
    
    // Feature attributions (approximate SHAP contributions)
    const phiAge = ((age - 45) / 10) * 0.42;
    const phiGlucose = ((glucose - 100) / 30) * 0.55;
    const phiBP = ((systolicBP - 120) / 20) * 0.38;
    const phiBMI = ((bmi - 24.5) / 5) * 0.28;
    const phiAdmissions = (priorAdmissions - 0.5) * 0.65;

    const totalLogOdds = baseLogOdds + phiAge + phiGlucose + phiBP + phiBMI + phiAdmissions;
    
    // Calibrated probability via Logistic Sigmoid
    const probability = 1 / (1 + Math.exp(-totalLogOdds));
    const riskPercentage = Math.min(Math.max(Math.round(probability * 100), 1), 99);

    const contributions = [
      { name: 'Prior Admissions', val: `${priorAdmissions} events`, shap: phiAdmissions },
      { name: 'Blood Glucose', val: `${glucose} mg/dL`, shap: phiGlucose },
      { name: 'Patient Age', val: `${age} yrs`, shap: phiAge },
      { name: 'Systolic BP', val: `${systolicBP} mmHg`, shap: phiBP },
      { name: 'BMI Index', val: `${bmi.toFixed(1)} kg/m²`, shap: phiBMI },
    ].sort((a, b) => Math.abs(b.shap) - Math.abs(a.shap));

    return {
      riskPercentage,
      riskLevel: riskPercentage > 65 ? 'High Clinical Risk' : riskPercentage > 35 ? 'Moderate Risk' : 'Low Baseline Risk',
      riskColor: riskPercentage > 65 ? 'rose' : riskPercentage > 35 ? 'amber' : 'emerald',
      baseValue: 23, // 23% baseline population rate
      contributions
    };
  }, [age, glucose, systolicBP, bmi, priorAdmissions]);

  // Financial Model SHAP Calculation Simulation
  const financeResult = useMemo(() => {
    const baseExpense = 2800; // E[f(x)] base expenditure in $
    
    const phiIncome = (monthlyIncome - 4000) * 0.35;
    const phiVolatility = (recentVolatility - 20) * 22.0;
    const phiSavings = -(savingsRatio - 20) * 28.0;
    const phiSubs = (recurringSubscriptions - 4) * 45.0;

    const predictedExpense = Math.max(1200, Math.round(baseExpense + phiIncome + phiVolatility + phiSavings + phiSubs));
    const expenseRatio = Math.round((predictedExpense / monthlyIncome) * 100);

    const contributions = [
      { name: 'Income Baseline', val: `$${monthlyIncome}`, shap: phiIncome },
      { name: 'Expense Volatility', val: `${recentVolatility}%`, shap: phiVolatility },
      { name: 'Savings Habit', val: `${savingsRatio}% rate`, shap: phiSavings },
      { name: 'Subscriptions', val: `${recurringSubscriptions} active`, shap: phiSubs },
    ].sort((a, b) => Math.abs(b.shap) - Math.abs(a.shap));

    return {
      predictedExpense,
      expenseRatio,
      status: expenseRatio > 80 ? 'High Burn Rate' : expenseRatio > 55 ? 'Balanced Budget' : 'High Savings Potential',
      statusColor: expenseRatio > 80 ? 'rose' : expenseRatio > 55 ? 'amber' : 'emerald',
      contributions
    };
  }, [monthlyIncome, recentVolatility, savingsRatio, recurringSubscriptions]);

  const resetValues = () => {
    if (modelType === 'clinical') {
      setAge(58);
      setGlucose(145);
      setSystolicBP(138);
      setBmi(29.4);
      setPriorAdmissions(2);
    } else {
      setMonthlyIncome(4500);
      setRecentVolatility(35);
      setSavingsRatio(22);
      setRecurringSubscriptions(8);
    }
  };

  return (
    <section id="ml-demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Technical Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 dark:text-white tracking-tight">
            Live Explainable AI (SHAP) Playground
          </h2>
          <p className="mt-3 text-slate-400 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Test how feature values drive calibrated predictions and real-time Shapley attributions, mimicking my implementations in Healthcare & FinTech.
          </p>

          {/* Model Domain Toggle */}
          <div className="mt-6 inline-flex flex-col sm:flex-row p-1.5 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 border border-slate-700/80 gap-1 w-full sm:w-auto">
            <button
              onClick={() => setModelType('clinical')}
              className={`px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                modelType === 'clinical'
                  ? 'bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/30'
                  : 'text-slate-200 dark:text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              🏥 Healthcare Risk Classifier (SmartCare)
            </button>
            <button
              onClick={() => setModelType('finance')}
              className={`px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                modelType === 'finance'
                  ? 'bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/30'
                  : 'text-slate-200 dark:text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              📈 Expenditure Predictor (FYP AI Layer)
            </button>
          </div>
        </div>

        {/* Interactive Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls / Inputs Column */}
          <div className="lg:col-span-6 rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 border border-slate-800/90 dark:border-slate-800/90 p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2 font-display font-bold text-base text-slate-100 dark:text-white">
                <Sliders className="w-4 h-4 text-brand-400" />
                <span>Feature Input Variables</span>
              </div>
              <button
                onClick={resetValues}
                className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-brand-400 transition-colors"
                title="Reset sliders to defaults"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {modelType === 'clinical' ? (
              <div className="space-y-5">
                {/* Age */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-300 dark:text-slate-300">Patient Age</span>
                    <span className="text-brand-400 font-bold">{age} years</span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="90"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>18</span>
                    <span>Baseline (45)</span>
                    <span>90</span>
                  </div>
                </div>

                {/* Blood Glucose */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-300 dark:text-slate-300">Fasting Blood Glucose</span>
                    <span className="text-brand-400 font-bold">{glucose} mg/dL</span>
                  </div>
                  <input
                    type="range"
                    min="70"
                    max="280"
                    value={glucose}
                    onChange={(e) => setGlucose(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>Normal (70-99)</span>
                    <span>Pre-diabetes</span>
                    <span>High (280)</span>
                  </div>
                </div>

                {/* Systolic BP */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-300 dark:text-slate-300">Systolic Blood Pressure</span>
                    <span className="text-brand-400 font-bold">{systolicBP} mmHg</span>
                  </div>
                  <input
                    type="range"
                    min="90"
                    max="200"
                    value={systolicBP}
                    onChange={(e) => setSystolicBP(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* BMI */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-300 dark:text-slate-300">Body Mass Index (BMI)</span>
                    <span className="text-brand-400 font-bold">{bmi.toFixed(1)} kg/m²</span>
                  </div>
                  <input
                    type="range"
                    min="18.0"
                    max="45.0"
                    step="0.5"
                    value={bmi}
                    onChange={(e) => setBmi(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Prior Admissions */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-300 dark:text-slate-300">Prior Hospital Admissions (Past 12 mo)</span>
                    <span className="text-brand-400 font-bold">{priorAdmissions} events</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="6"
                    value={priorAdmissions}
                    onChange={(e) => setPriorAdmissions(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Monthly Income */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-300 dark:text-slate-300">Monthly Net Income</span>
                    <span className="text-brand-400 font-bold">${monthlyIncome}</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="10000"
                    step="250"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Expense Volatility */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-300 dark:text-slate-300">Historical Discretionary Volatility</span>
                    <span className="text-brand-400 font-bold">{recentVolatility}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="75"
                    value={recentVolatility}
                    onChange={(e) => setRecentVolatility(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Savings Ratio */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-300 dark:text-slate-300">Automated Savings Commitment</span>
                    <span className="text-brand-400 font-bold">{savingsRatio}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={savingsRatio}
                    onChange={(e) => setSavingsRatio(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Recurring Subscriptions */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-300 dark:text-slate-300">Active Recurring Subscriptions</span>
                    <span className="text-brand-400 font-bold">{recurringSubscriptions} services</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={recurringSubscriptions}
                    onChange={(e) => setRecurringSubscriptions(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Model Inference & SHAP Explainability Output */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Prediction Gauge Card */}
            <div className="rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 border border-slate-800/90 dark:border-slate-800/90 p-6 sm:p-7 shadow-xl">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-400" />
                  Model Output & Calibration
                </span>
                <span className="text-[11px] font-mono text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
                  Calibrated Probability
                </span>
              </div>

              {modelType === 'clinical' ? (
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <div>
                      <div className="text-3xl sm:text-4xl font-display font-extrabold text-slate-100 dark:text-white">
                        {clinicalResult.riskPercentage}%
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        Predicted 30-Day Readmission Risk
                      </div>
                    </div>
                    <div className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono ${
                      clinicalResult.riskColor === 'rose'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : clinicalResult.riskColor === 'amber'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    }`}>
                      {clinicalResult.riskLevel}
                    </div>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden my-3">
                    <div
                      className={`h-full transition-all duration-300 ${
                        clinicalResult.riskColor === 'rose'
                          ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                          : clinicalResult.riskColor === 'amber'
                          ? 'bg-gradient-to-r from-brand-500 to-amber-500'
                          : 'bg-gradient-to-r from-emerald-500 to-brand-500'
                      }`}
                      style={{ width: `${clinicalResult.riskPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>0% (Safe)</span>
                    <span>Population Baseline (23%)</span>
                    <span>100% (Critical)</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <div>
                      <div className="text-3xl sm:text-4xl font-display font-extrabold text-slate-100 dark:text-white">
                        ${financeResult.predictedExpense}
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        Estimated Next-Month Outflow ({financeResult.expenseRatio}% of income)
                      </div>
                    </div>
                    <div className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono ${
                      financeResult.statusColor === 'rose'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : financeResult.statusColor === 'amber'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    }`}>
                      {financeResult.status}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SHAP Feature Attribution Waterfall / Bar Chart */}
            <div className="rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 border border-slate-800/90 dark:border-slate-800/90 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-brand-400" />
                  <span className="font-display font-bold text-sm text-slate-100 dark:text-white">
                    SHAP Feature Contribution Scores (ϕ)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  Game-Theoretic Attribution
                </span>
              </div>

              <div className="space-y-3">
                {(modelType === 'clinical' ? clinicalResult.contributions : financeResult.contributions).map((item, idx) => {
                  const isPositive = item.shap >= 0;
                  const magnitude = Math.min(Math.abs(item.shap) * (modelType === 'clinical' ? 50 : 0.12), 100);

                  return (
                    <div key={idx} className="text-xs">
                      <div className="flex justify-between items-center mb-1 font-mono">
                        <span className="text-slate-300 dark:text-slate-300 font-medium">
                          {item.name} <span className="text-slate-500 font-normal">({item.val})</span>
                        </span>
                        <span className={`font-semibold ${isPositive ? 'text-rose-400' : 'text-emerald-400'}`}>
                          {isPositive ? '+' : ''}{item.shap.toFixed(2)} ϕ
                        </span>
                      </div>

                      {/* Bi-directional SHAP Bar */}
                      <div className="grid grid-cols-2 gap-1 bg-slate-900/60 dark:bg-slate-900/60 p-1 rounded-md border border-slate-800/60">
                        {/* Negative Impact (Decreases Risk) */}
                        <div className="flex justify-end items-center">
                          {!isPositive && (
                            <div
                              className="h-2 rounded-l bg-emerald-400 transition-all duration-300"
                              style={{ width: `${Math.max(magnitude, 8)}%` }}
                            />
                          )}
                        </div>
                        {/* Positive Impact (Increases Risk) */}
                        <div className="flex justify-start items-center">
                          {isPositive && (
                            <div
                              className="h-2 rounded-r bg-rose-400 transition-all duration-300"
                              style={{ width: `${Math.max(magnitude, 8)}%` }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Reduces Predicted Risk / Outflow
                </span>
                <span className="flex items-center gap-1 text-rose-400">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  Elevates Prediction
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
