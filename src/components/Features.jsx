const features = [
  { title: "Amharic & English AI", desc: "Learn in your language." },
  { title: "Predictive Analytics", desc: "Know weak topics early." },
  { title: "Localized Repository", desc: "Aligned with Ethiopian curriculum." }
];
import React from 'react';
export default function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Features built for focus.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 bg-white/5 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}