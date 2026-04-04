
import React, { useState } from 'react';

const faqs = [
  { q: "Is EthioMind free to use?", a: "Yes! EthioMind offers a free version for students with essential features." },
  { q: "Which universities are supported?", a: "Currently AAU, ASTU, HU, JU, and MU students can use EthioMind." },
  { q: "Can I track my progress?", a: "Absolutely! EthioMind shows mastery scores and AI summaries for your modules." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      
      <div className="mt-12 space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 cursor-pointer"
               onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <h3 className="font-bold">{faq.q}</h3>
            {openIndex === i && <p className="text-gray-400 mt-2">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}