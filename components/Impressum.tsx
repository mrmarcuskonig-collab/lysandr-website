import React from 'react';

export const Impressum: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-950 text-white px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Impressum</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              Marcus König<br />
              Dukcerstr. 77<br />
              10437 Berlin
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};