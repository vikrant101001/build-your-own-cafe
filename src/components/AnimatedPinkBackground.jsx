import React from 'react';

const AnimatedPinkBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50" />
      
      {/* Large floating orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-300/30 to-rose-400/20 rounded-full blur-3xl animate-pulse" 
           style={{ animation: 'float 20s ease-in-out infinite' }} />
      
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-fuchsia-300/25 to-pink-400/15 rounded-full blur-3xl animate-pulse" 
           style={{ animation: 'float 25s ease-in-out infinite reverse' }} />
      
      <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-rose-400/20 to-pink-300/25 rounded-full blur-3xl animate-pulse" 
           style={{ animation: 'float 30s ease-in-out infinite' }} />
      
      {/* Medium floating particles */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-pink-400/40 to-rose-300/30 rounded-full blur-2xl" 
           style={{ animation: 'drift 15s linear infinite' }} />
      
      <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-gradient-to-br from-fuchsia-400/35 to-pink-500/25 rounded-full blur-2xl" 
           style={{ animation: 'drift 18s linear infinite reverse' }} />
      
      <div className="absolute top-1/2 left-1/6 w-40 h-40 bg-gradient-to-br from-rose-300/30 to-pink-400/20 rounded-full blur-2xl" 
           style={{ animation: 'float 22s ease-in-out infinite' }} />
      
      {/* Small twinkling particles */}
      <div className="absolute top-20 right-1/4 w-4 h-4 bg-pink-400/60 rounded-full blur-sm" 
           style={{ animation: 'twinkle 3s ease-in-out infinite' }} />
      
      <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-rose-400/70 rounded-full blur-sm" 
           style={{ animation: 'twinkle 4s ease-in-out infinite 1s' }} />
      
      <div className="absolute bottom-1/3 right-1/6 w-5 h-5 bg-fuchsia-400/50 rounded-full blur-sm" 
           style={{ animation: 'twinkle 3.5s ease-in-out infinite 2s' }} />
      
      <div className="absolute top-1/3 left-2/3 w-4 h-4 bg-pink-500/60 rounded-full blur-sm" 
           style={{ animation: 'twinkle 4.5s ease-in-out infinite 0.5s' }} />
      
      <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-rose-500/70 rounded-full blur-sm" 
           style={{ animation: 'twinkle 3.8s ease-in-out infinite 1.5s' }} />
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-100/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-100/10 to-transparent" />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(1deg); }
          50% { transform: translateY(-10px) translateX(-15px) rotate(-1deg); }
          75% { transform: translateY(-25px) translateX(5px) rotate(0.5deg); }
        }
        
        @keyframes drift {
          0% { transform: translateX(-100px) translateY(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 100px)) translateY(-50px); opacity: 0; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedPinkBackground;