import React from 'react';
export default function Hero() {
  return (
    <header className="relative pt-20 pb-32 px-6 text-center max-w-5xl mx-auto">
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
        Now available for BDU, AAU, ASTU & HU Students
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
        One Platform, <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Endless Possibilities.
        </span>
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        EthioMind is an AI-driven ecosystem bridging the gap between classroom teaching and independent study.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
  Get Started Now
</button>
        <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold">
          Try Demo Mode
        </button>
      </div>
    </header>
  );
}