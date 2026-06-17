'use client';
import React, { useState } from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-black text-white tracking-tight">
        ReadyMe AI
      </h1>
      <p className="text-slate-400 mt-2 text-center max-w-md">
        Your web-based tracking terminal and career simulation engine is ready.
      </p>
      <div className="mt-6 px-4 py-2 bg-slate-900 border border-slate-8xl rounded text-xs font-mono text-emerald-400">
        Status: Initialized Successfully
      </div>
    </div>
  );
}
