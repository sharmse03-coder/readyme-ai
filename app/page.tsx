'use client';
import React, { useState } from 'react';

export default function ReadyMeDashboard() {
  const [candidateName, setCandidateName] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [notes, setNotes] = useState<string[]>([]);
  const [currentNote, setCurrentNote] = useState('');

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentNote.trim()) {
      setNotes([...notes, currentNote.trim()]);
      setCurrentNote('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Platform Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <h1 className="text-xl font-bold tracking-tight text-white">ReadyMe <span className="text-indigo-400">AI</span></h1>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 bg-slate-800 rounded border border-slate-700 text-slate-400">
          Operational Tracking Engine v1.0
        </span>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-8 space-y-8">
        
        {/* State A: User Session Initialization Entry */}
        {!isInitialized ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 shadow-2xl space-y-4">
            <h2 className="text-xl font-semibold text-white">Initialize Candidate Readiness Session</h2>
            <p className="text-sm text-slate-400">
              Input candidate parameters to mount the simulation workspace. This initializes tracking across operational assessment nodes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <input 
                type="text" 
                placeholder="Candidate Full Name" 
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 text-sm"
              />
              <button 
                onClick={() => candidateName.trim() !== '' && setIsInitialized(true)}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 font-medium text-sm text-white rounded-lg transition-colors shadow-lg shadow-indigo-600/20"
              >
                Launch Simulation Arena
              </button>
            </div>
          </div>
        ) : (
          /* State B: Active User Dashboard Interaction */
          <div className="space-y-6">
            
            {/* Context Profile Bar */}
            <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Active Internal Promotion Pipeline</p>
                <h2 className="text-2xl font-bold text-white mt-1">{candidateName}</h2>
              </div>
              <button 
                onClick={() => { setIsInitialized(false); setCandidateName(''); setActiveStep(1); setNotes([]); }}
                className="self-start sm:self-auto px-3 py-1.5 border border-slate-800 bg-slate-950 hover:bg-slate-900 text-xs rounded-md text-slate-400 transition-colors"
              >
                Reset Session Context
              </button>
            </div>

            {/* Interactive Program Step Switcher */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div 
                onClick={() => setActiveStep(1)}
                className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${activeStep === 1 ? 'bg-slate-900 border-indigo-500 shadow-xl' : 'bg-slate-900/30 border-slate-800 opacity-60 hover:opacity-100'}`}
              >
                <span className="text-xs font-mono text-indigo-400 font-bold">PHASE 01</span>
                <h3 className="font-semibold text-white mt-1">Excel Proficiency</h3>
                <p className="text-xs text-slate-400 mt-1">Evaluating calculation logic parsing, workflow routing, and report compilation accuracy.</p>
              </div>

              <div 
                onClick={() => setActiveStep(2)}
                className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${activeStep === 2 ? 'bg-slate-900 border-indigo-500 shadow-xl' : 'bg-slate-900/30 border-slate-800 opacity-60 hover:opacity-100'}`}
              >
                <span className="text-xs font-mono text-indigo-400 font-bold">PHASE 02</span>
                <h3 className="font-semibold text-white mt-1">Live Simulation</h3>
                <p className="text-xs text-slate-400 mt-1">Interactive operational troubleshooting, prompt evaluation, and real-time response capture.</p>
              </div>

              <div 
                onClick={() => setActiveStep(3)}
                className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${activeStep === 3 ? 'bg-slate-900 border-indigo-500 shadow-xl' : 'bg-slate-900/30 border-slate-800 opacity-60 hover:opacity-100'}`}
              >
                <span className="text-xs font-mono text-indigo-400 font-bold">PHASE 03</span>
                <h3 className="font-semibold text-white mt-1">Shadowing Matrix</h3>
                <p className="text-xs text-slate-400 mt-1">Calibration scores and final readiness matrix maps. (Statistical view clean of ratio metrics).</p>
              </div>
            </div>

            {/* Dynamic Workspace Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 space-y-6">
              
              {activeStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-white">Technical Skill Calibration Terminal</h4>
                    <p className="text-sm text-slate-400 mt-1">Assesses capabilities with complex indexing, systemic validation steps, and internal automated routing structures.</p>
                  </div>
                  <div className="bg-slate-950 border border-slate-850 rounded-lg p-4 font-mono text-xs text-slate-400 space-y-2">
                    <p className="text-indigo-400">// Parsing assessment logging telemetry data...</p>
                    <p className="text-emerald-400">✓ Logical mapping connections verified.</p>
                    <p className="text-emerald-400">✓ Systemic tracking updates routing completely without manual interventions.</p>
                    <p className="text-slate-500">// Status: Structural components stable.</p>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-white">Interactive Coach Scenario Block</h4>
                    <p className="text-sm text-slate-400 mt-1">How candidates process and route complex, real-time procedural shifts under pressure.</p>
                  </div>
                  <div className="p-4 bg-indigo-950/40 border border-indigo-800/30 rounded-xl text-sm text-indigo-200 shadow-inner">
                    <span className="font-bold text-xs bg-indigo-500 text-white px-1.5 py-0.5 rounded mr-2 uppercase tracking-wide">Coach Instruction</span>
                    "The assessment parameters have locked. How would you update your automated flows if the baseline data arrays adapt fluidly to internal candidate selection dynamics?"
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-lg font-medium text-white">Readiness Calibration Summary Matrix</h4>
                    <p className="text-sm text-slate-400 mt-1">Consolidated peer evaluations and tracking markers synced across regional operational boards.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Total Calibration Progress</span>
                      <span className="text-emerald-400">High Readiness Tier</span>
                    </div>
                    <div className="h-2 w-full bg-slate-950 rounded-full border border-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 w-3/4 rounded-full" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic">
                    Note: Statistics completely decoupled from raw mathematical percentage readouts per optimization request profiles.
                  </p>
                </div>
              )}

              {/* Shared Live Workspace Note Capturing Feature */}
              <div className="border-t border-slate-800 pt-6 space-y-4">
                <h5 className="text-sm font-semibold text-slate-300">Live Observation Logs</h5>
                
                <form onSubmit={addNote} className="flex gap-2">
                  <input 
                    type="text"
                    value={currentNote}
                    onChange={(e) => setCurrentNote(e.target.value)}
                    placeholder="Log a tracking milestone or assessment note for this candidate..."
                    className="flex-1 px-3 py-1.5 rounded-md bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white rounded-md transition-colors"
                  >
                    Log Event
                  </button>
                </form>

                {notes.length > 0 && (
                  <ul className="space-y-1.5 pt-1">
                    {notes.map((note, index) => (
                      <li key={index} className="flex items-start text-xs text-slate-300 font-mono bg-slate-950/40 p-2 rounded border border-slate-900">
                        <span className="text-indigo-400 mr-2">»</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Card Context Utility */}
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Isolated Sandbox Environment
                </span>
                <span>Active Track: Phase 0{activeStep}</span>
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}
