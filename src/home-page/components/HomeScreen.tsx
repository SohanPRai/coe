import React from 'react';
import { motion } from 'framer-motion';

export const HomeScreen: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Blueprint Grid lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Card */}
      <motion.div 
        className="z-10 bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-xl text-center shadow-2xl shadow-black/80"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-yellow-500 font-mono text-sm tracking-widest uppercase mb-2">System Active</div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-100 to-yellow-500 bg-clip-text text-transparent">
          Sahyadri CoE Dashboard
        </h1>
        <p className="text-slate-400 mb-6 text-sm leading-relaxed">
          Welcome to the Center of Excellence at Sahyadri College of Engineering & Management. 
          The loading sequence has completed, and all core subsystems are fully operational.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2.5 rounded-lg bg-yellow-500 text-slate-950 font-semibold hover:bg-yellow-400 active:scale-95 transition-all text-xs tracking-wider uppercase cursor-pointer"
          style={{ boxShadow: '0 0 15px rgba(234, 179, 8, 0.3)' }}
        >
          Replay Loader
        </button>
      </motion.div>
    </motion.div>
  );
};
