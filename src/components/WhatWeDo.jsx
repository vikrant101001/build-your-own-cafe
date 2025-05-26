import React from 'react';
export default function WhatWeDo() {
  return (
    <section className="py-20 px-4 bg-beige">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">Planning</h3>
            <p>Expert guidance on location, branding, and menu design.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Legal</h3>
            <p>Streamlined license acquisition and tax compliance.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Marketing</h3>
            <p>Digital strategy, social media, and collaboration campaigns.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Operations</h3>
            <p>Tools for POS, inventory, and staff training.</p>
          </div>
        </div>
      </div>
    </section>
  );
}