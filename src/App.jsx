import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import WhyFail from './components/WhyFail';
import WhatWeDo from './components/WhatWeDo';
import AboutUs from './components/AboutUs';
import AnimatedBackground from './components/AnimatedBackground'; // or WaveBackground

export default function App() {
  return (
    <div className="font-sans bg-white min-h-screen w-full overflow-x-hidden relative">
      <AnimatedBackground /> {/* Add this line */}
      <div className="relative z-10"> {/* Wrap your content in this div */}
        <NavBar />
        <main>
          <Hero />
          <WhyFail />
          <WhatWeDo />
          <AboutUs />
        </main>
      </div>
    </div>
  );
}