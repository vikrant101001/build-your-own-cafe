import React from 'react';
import Hero from './components/Hero';
import WhyFail from './components/WhyFail';
import WhatWeDo from './components/WhatWeDo';
import AboutUs from './components/AboutUs';

export default function App() {
  return (
    <div className="font-sans bg-beige text-gray-800">
      <Hero />
      <WhyFail />
      <WhatWeDo />
      <AboutUs />
    </div>
  );
}
