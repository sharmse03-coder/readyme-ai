import React from 'react';
import '@/styles/globals.css';

export const metadata = {
  title: 'ReadyMe AI - Career Simulation Platform',
  description: 'AI-guided simulated tracking framework for rapid career progression mapping.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
