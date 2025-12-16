import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { ProductShowcase } from './components/ProductShowcase';
import { AiPhilosophy } from './components/AiPhilosophy';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#e4e4e7] selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* <ValueProps /> */}
        <ProductShowcase />
        <AiPhilosophy />
        <Pricing />
        
        {/* Trust/Open Source Banner */}
        <section id="opensource" className="py-20 border-t border-b border-[#27272a] bg-[#18181b]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Built on Open Source</h3>
              <p className="text-[#a1a1aa] max-w-lg">
                We believe in giving back. RootSprout and core parts of our stack are open for inspection and contribution.
              </p>
            </div>
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                {/* Mock Logos for Trust */}
                <div className="text-xl font-bold font-mono">GITHUB</div>
                <div className="text-xl font-bold font-mono">REACT</div>
                <div className="text-xl font-bold font-mono">VITE</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;