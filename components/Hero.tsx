import React from 'react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#f5f8fb] via-[#e0f2ff] to-[#ffffff] text-gray-900">
      
      {/* Background Glows & Animation */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        {/* Static Blue Base */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] opacity-30" />
        
        {/* Animated Green Blobs */}
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-green-200/20 rounded-full blur-[100px] opacity-30 animate-blob mix-blend-screen" />
        <div 
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-green-200/20 rounded-full blur-[100px] opacity-20 animate-blob mix-blend-screen" 
          style={{ animationDelay: '5s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        {/* Notification / Badge */}
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 border border-blue-200/50 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-medium text-gray-800 uppercase tracking-wider">Vircsam is live</span>
          </div>
        </FadeIn>
        
        {/* Headline */}
        <FadeIn delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Solving with<br />
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200">
              Software.
            </span>
          </h1>
        </FadeIn>

        {/* Subheading */}
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            Modern tools for focus, planning, and development. 
            Designed for clarity in a world of noise. 
            Powered by intelligence, not hype.
          </p>
        </FadeIn>

       
        {/* <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products" className="group">
              <Button size="lg">
                Explore Products 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button variant="outline" size="lg">
              Read the Manifesto
            </Button>
          </div>
        </FadeIn> */}


        {/* Hero Mockup Image */}
        <FadeIn delay={400}>
          <div className="mt-16 relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="hero.png"
              alt="Vircsam App Preview"
              className="w-full h-auto object-cover rounded-2xl"
            />
            {/* Optional overlay for subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
