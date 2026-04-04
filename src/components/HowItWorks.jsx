import React from 'react';
const steps = [
  {
    title: "Sign Up",
    desc: "Create your EthioMind account in seconds to access personalized modules."
  },
  {
    title: "Select Module",
    desc: "Pick the subject or topic you want to master, fully distraction-free."
  },
  {
    title: "AI Assistance",
    desc: "Get AI-powered summaries, explanations, and predictive tips for your exams."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
      <p className="text-gray-400 mb-12">Follow 3 simple steps to boost your learning.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}