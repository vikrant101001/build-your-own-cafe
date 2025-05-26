import React, { useState, useEffect } from 'react';

const messages = [
  "Your step-by-step guide to launching a cozy cafe that thrives.",
  "From dream to doorstep — start your cafe journey here.",
  "Plan smart, grow steady, sip success.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  const [cafeName, setCafeName] = useState('');

  useEffect(() => {
    const handleTyping = () => {
      const fullText = messages[index];
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
          setSpeed(50);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % messages.length);
          setSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed]);

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-12"
      style={{ backgroundImage: `url('/hero-bg.jpg')` }}
    >
      <div
        className="bg-white bg-opacity-90 rounded-3xl shadow-2xl max-w-6xl text-center p-16"
        style={{ maxWidth: '90vw' }}
      >
        <h1
          style={{
            fontSize: '6rem',
            fontWeight: '900',
            lineHeight: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <input
            type="text"
            value={cafeName}
            onChange={(e) => setCafeName(e.target.value)}
            placeholder="Your Cafe Name"
            spellCheck={false}
            autoComplete="off"
            autoFocus
            aria-label="Enter your cafe name"
            style={{
              background: 'transparent',
              borderBottom: '10px solid #fb7185', // rose-500
              color: '#b91c1c', // rose-700
              fontSize: '6rem',
              fontWeight: '900',
              textAlign: 'center',
              outline: 'none',
              padding: 0,
              margin: 0,
              minWidth: '20rem',
              maxWidth: '70vw',
              caretColor: '#b91c1c',
              opacity: 0.85,
            }}
          />
        </h1>

        <p
          style={{
            fontSize: '3rem',
            marginTop: '2rem',
            minHeight: '3.5rem',
            color: 'black', // rose-800
            fontWeight: '600',
            letterSpacing: '0.15em',
          }}
        >
          {displayText}
          <span
            style={{
              display: 'inline-block',
              animation: 'blink 1s step-end infinite',
            }}
          >
            |
          </span>
        </p>

        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
}
