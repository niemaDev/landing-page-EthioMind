import React, { useState } from "react";

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="home" className="pt-24 pb-20 px-6 text-center max-w-5xl mx-auto">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Study Smarter with <span className="text-blue-400">EthioMind</span>
      </h1>

      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        AI-powered study platform designed for Ethiopian students. Focus better,
        learn faster, and achieve more.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
          Get Started
        </button>

        <button
          onClick={() => setShowDemo(!showDemo)}
          className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10"
        >
          {showDemo ? "Hide Demo" : "Try Demo"}
        </button>
      </div>

      {/* INTERACTIVE DEMO */}
      {showDemo && (
        <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-xl">
          <p className="text-gray-300">
            🎯 Demo Mode: AI suggests a distraction-free study plan for you.
          </p>
        </div>
      )}
    </section>
  );
}