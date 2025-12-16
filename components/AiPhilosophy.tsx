import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Sparkles } from 'lucide-react';

export const AiPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 relative overflow-hidden bg-[#f5f8fb]">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/30 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-400 to-green-400 mx-auto flex items-center justify-center mb-8 shadow-lg shadow-blue-200/40">
            <Sparkles className="text-white w-6 h-6" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            AI should be a silent partner,<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              not a loud distraction.
            </span>
          </h2>

          {/* Copy */}
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              We believe generative models are most powerful when they are invisible.
              Vircsam tools use AI to organize your mess, predict your next task,
              and summarize complex threads — without getting in your way.
            </p>
            <p>
              No chat bots popping up. No “magic generate” buttons everywhere.
              Just calm, context-aware utility that respects your attention.
            </p>
          </div>

        </FadeIn>
      </div>
    </section>
  );
};
