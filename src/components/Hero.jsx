import React from 'react';
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/hero-bg.jpg')` }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg max-w-2xl text-center">
        <h1 className="text-5xl mb-4 font-bold">Build Your Own Cafe</h1>
        <p className="text-lg">Your step-by-step guide to launching a cozy cafe that thrives.</p>
        <button className="mt-6 px-6 py-3 bg-rose-400 hover:bg-rose-500 text-white rounded-full transition">Get Started</button>
      </div>
    </section>
  );
}