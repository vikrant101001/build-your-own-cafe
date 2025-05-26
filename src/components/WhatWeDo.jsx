import React from 'react';

const solutionReasons = [
  {
    title: "Strategic Location Research",
    description: "Conduct thorough market analysis and footfall studies before choosing location",
    icon: "🎯"
  },
  {
    title: "Strong Brand Development", 
    description: "Create compelling brand story and build emotional connections with customers",
    icon: "💎"
  },
  {
    title: "Complete Legal Compliance",
    description: "Secure all necessary permits, licenses and meet regulatory requirements", 
    icon: "✅"
  },
  {
    title: "Digital Marketing Strategy",
    description: "Build strong online presence and implement effective customer acquisition",
    icon: "🚀"
  },
  {
    title: "Smart Financial Planning",
    description: "Implement proper budgeting, cash flow management and financial controls",
    icon: "📊"
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">
          How We Help Cafes Succeed
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {solutionReasons.map((reason, index) => (
            <div
              key={index}
              className="flex-1 min-w-64 max-w-72 bg-white rounded-xl shadow-lg border border-emerald-200 p-6 hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}