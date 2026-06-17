'use client';
import React, { useState } from 'react';

export default function ExcelSimulation() {
  const [response, setResponse] = useState('');
  const [score, setScore] = useState(0);

  const simulateParse = (e: React.FormEvent) => {
    e.preventDefault();
    if (response.trim()) {
      setScore(Math.min(100, score + 25)); // Increment score on logic entry
      setResponse('');
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-5 animate-fadeIn">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-medium text-white">Technical Skill Calibration Terminal</h4>
          <p className="text-sm text-slate-400 mt-1">Assesses capabilities with complex indexing, systemic validation steps, and internal automated routing structures.</p>
        </div>
        <div className="bg-slate-950 border border-slate-850 rounded-lg p-3 text-center min-w-[80px]">
          <span className="text-xs font-mono tracking-wider text-slate-500">Tier Score</span>
          <p className="text-2xl font-bold text-emerald-400">{score}%</p>
        </div>
      </div>

      <div className="bg-slate-950 border border-slate-850 rounded-lg p-4 font-mono text-xs text-slate-400 space-y-2.5">
        <p className="text-indigo-400">// Simulation initialization complete.</p>
        <p className="text-emerald-400">✓ Parsing assessment logging telemetry data...</p>
        <p className="text-emerald-400">✓ Status indicators optimized.</p>
        <p className="text-slate-500">// Status: Isolated simulation arena stable.</p>
      </div>

      <div className="border-t border-slate-800 pt-5 space-y-4">
        <h5 className="text-sm font-semibold text-slate-300">Phase 01 Challenge Node</h5>
        <div className="p-3.5 bg-indigo-950/40 border border-indigo-800/30 rounded-xl text-sm text-indigo-200 shadow-inner">
          💡 The operational reporting pipeline has identified a validation gap on Line 42. You need to map the systemic connections from `DataInputA` to `ValidationNodeC` across the automated workflow routing architecture using only parsing logic (no manual ratio calculations). Log your proposed sequence below.
        </div>
        <form onSubmit={simulateParse} className="flex gap-2">
          <input 
            type="text"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Log systemic mapping logic proposal..."
            className="flex-1 px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 text-sm"
          />
          <button 
            type="submit"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white rounded-lg transition-colors"
          >
            Log Entry
          </button>
        </form>
      </div>
    </div>
  );
}
