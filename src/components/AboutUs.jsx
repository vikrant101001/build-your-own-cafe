import React from 'react';
import { assets } from '../assets/assets';

export default function AboutUs() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-16'>
      <div className='relative'>
        
        {/* Animated background elements */}
        <div className='absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse'></div>
        <div className='absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000'></div>
        <div className='absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000'></div>
        
        {/* Main card */}
        <div className='relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-2xl mx-auto'>
          
          {/* Profile image with glow effect */}
          <div className='flex justify-center mb-8'>
            <div className='relative group cursor-pointer' onClick={() => window.open('https://vikrant.bio', '_blank')}>
              <div className='absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
              <img
                src={assets.me}
                alt='Vikrant - Fullstack Developer'
                className='relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-white/30 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3'
              />
              <div className='absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              {/* Hover tooltip */}
              <div className='absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
                Click to visit my website
              </div>
            </div>
          </div>

          {/* Content */}
          <div className='text-center space-y-6'>
            
            {/* Greeting with typewriter effect */}
            <div className='overflow-hidden'>
              <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight animate-fadeInUp'>
                Hi! I'm Vikrant
              </h1>
            </div>
            
            {/* Animated underline */}
            <div className='flex justify-center'>
              <div className='w-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-expandWidth'></div>
            </div>
            
            {/* Description */}
            <div className='relative'>
              <p className='text-lg sm:text-xl text-white/90 leading-relaxed max-w-lg mx-auto font-light animate-fadeInUp animation-delay-500'>
                I am a <span className='font-semibold text-purple-300'>2 YOE Fullstack Developer</span> with experience in both <span className='font-semibold text-pink-300'>MNCs</span> and <span className='font-semibold text-blue-300'>US based Remote Startups.</span>
              </p>
              <p className='text-lg sm:text-xl text-white/90 leading-relaxed max-w-lg mx-auto font-light animate-fadeInUp animation-delay-500'>
                Join me in getting down and dirty on the idea/code to build future cafe owners' dream come true. Click on me to connect through Linkedin/email
              </p>
              
              {/* Floating particles */}
              <div className='absolute -top-4 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-float'></div>
              <div className='absolute -top-2 -right-6 w-1 h-1 bg-pink-400 rounded-full animate-float animation-delay-1000'></div>
              <div className='absolute -bottom-4 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float animation-delay-2000'></div>
            </div>
            
          </div>
          
          {/* Bottom accent */}
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full'></div>
        </div>
        
        {/* Floating rings */}
        <div className='absolute -top-16 -right-16 w-32 h-32 border border-white/10 rounded-full animate-spin-slow'></div>
        <div className='absolute -bottom-16 -left-16 w-24 h-24 border border-white/10 rounded-full animate-spin-slow animation-delay-3000'></div>
      </div>

      <style jsx>{`
        @keyframes expandWidth {
          0% { width: 0; }
          100% { width: 120px; }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        
        .animate-expandWidth {
          animation: expandWidth 1.5s ease-out 0.8s forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}