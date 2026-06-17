{/* Interactive Simulation Sandbox */}
<div className="border border-slate-800 rounded-xl min-h-[300px]">
  {!activeSimulation ? (
    <p className="text-sm text-slate-500 text-center pt-24 font-mono tracking-wide px-10">Select a tracking node module from the grid above to launch the secure AI simulation walkthrough for this candidate...</p>
  ) : (
    <div className="p-1">
      {activeSimulation === 'excel' && <ExcelSimulation />}
    }
'use client';
import React, { useState } from 'react';

export default function ReadyMeAiProgram() {
  const [candidateName, setCandidateName] = useState('');
  const [candidateProfile, setCandidateProfile] = useState<{name: string} | null>(null);
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);
  const [calibrationData, setCalibrationData] = useState({ excel: 0, coach: 0, shadow: 0 });

  const initializeSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    if (candidateName.trim() !== '') {
      setCandidateProfile({ name: candidateName.trim() });
      setCandidateName('');
    }
  };

  const startModule = (moduleId: string) => {
    setActiveSimulation(moduleId);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <h1 className="text-xl font-bold tracking-tight text-white">ReadyMe <span className="text-indigo-400">AI</span></h1>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 bg-slate-800 rounded border border-slate-700 text-slate-400">
          Tracking Module v1.0.0
        </span>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-8">
        
        {/* Onboarding Box */}
        {!candidateProfile ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl space-y-4">
            <h2 className="text-xl font-semibold text-white">Initialize Candidate Readiness Session</h2>
            <p className="text-sm text-slate-400">Enter the candidate profile metrics to spin up the internal operational assessment simulation tracker.</p>
            <form onSubmit={initializeSimulation} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input 
                type="text" 
                placeholder="Candidate Full Name (e.g., Sadiyah Harmse)" 
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 text-sm"
              />
              <button 
                type="submit"
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm text-white rounded-lg transition-colors"
              >
                Launch Simulation Arena
              </button>
            </form>
          </div>
        ) : (
          /* Active Dashboard View */
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-xl p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Active Pipeline Tracking</p>
                <h2 className="text-2xl font-bold text-white mt-1">{candidateProfile.name}</h2>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg text-slate-200">Export Report</button>
                <button 
                  onClick={() => setCandidateProfile(null)}
                  className="px-3 py-1.5 border border-slate-800 bg-slate-950 hover:bg-slate-900 text-xs rounded-lg text-slate-400 transition-colors"
                >
                  Reset Session
                </button>
              </div>
            </div>

            {/* Simulation Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4 shadow-xl">
                <span className="text-xs font-mono text-indigo-400 font-bold">PHASE 01</span>
                <h3 className="text-lg font-semibold text-white">Excel Proficiency Module</h3>
                <p className="text-sm text-slate-400">This module assesses technical logic without manual formulas. The candidate uses systemic data parsing functions.</p>
                <button 
                  onClick={() => startModule('excel')}
                  className="w-full text-center px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 text-indigo-300 font-medium text-sm rounded-lg hover:bg-indigo-600/20"
                >
                  Enter Excel Simulation
                </button>
              </div>
              {/* Other modules would follow the same pattern */}
            </div>

            {/* Tracking Matrix (placeholder) */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 min-h-[300px]">
              <p className="text-sm text-slate-500 text-center pt-24">Select a tracking module to launch the AI walkthrough for this candidate...</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
