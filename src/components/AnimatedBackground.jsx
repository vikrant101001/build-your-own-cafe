// components/WaveBackground.jsx
import React, { useEffect } from 'react';

const WaveBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('wave-bg');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let time = 0;
    
    // Color stops for the gradient
    const colors = [
      { stop: 0, color: 'rgba(255, 182, 193, 0.8)' }, // Light Pink
      { stop: 0.5, color: 'rgba(255, 105, 180, 0.6)' }, // Hot Pink
      { stop: 1, color: 'rgba(255, 20, 147, 0.4)' } // Deep Pink
    ];
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      colors.forEach(c => gradient.addColorStop(c.stop, c.color));
      
      // Draw animated waves
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      for (let x = 0; x <= canvas.width; x += 20) {
        const y = canvas.height / 2 + 
          Math.sin(x * 0.01 + time) * 50 +
          Math.sin(x * 0.02 + time * 0.7) * 30;
        
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      time += 0.02;
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      id="wave-bg"
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-50"
    />
  );
};

export default WaveBackground;