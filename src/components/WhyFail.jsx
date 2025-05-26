import React from 'react';

const failureReasons = [
  {
    title: "Poor Location Analysis",
    description: "Inadequate footfall and demographic research",
    icon: "📍"
  },
  {
    title: "Weak Brand Identity", 
    description: "Lack of emotional connection with customers",
    icon: "🎨"
  },
  {
    title: "Legal Non-Compliance",
    description: "Missing permits and regulatory requirements", 
    icon: "⚖️"
  },
  {
    title: "Marketing Failures",
    description: "Poor online presence and customer acquisition",
    icon: "📱"
  },
  {
    title: "Financial Mismanagement",
    description: "Inadequate planning and cash flow control",
    icon: "💰"
  },
];

export default function WhyFail() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-rose-600 mb-12">
          Why Cafes Fail
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {failureReasons.map((reason, index) => (
            <div
              key={index}
              className="flex-1 min-w-64 max-w-72 bg-white rounded-xl shadow-lg border border-rose-200 p-6 hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300"
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