import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Feature } from '../types';
import { Focus, Zap, BrainCircuit, Code2 } from 'lucide-react';

const features: Feature[] = [
  {
    title: "Deep Focus",
    description: "Interfaces designed to reduce cognitive load and protect your flow state.",
    icon: Focus
  },
  {
    title: "Instant Speed",
    description: "Local-first architecture ensures every interaction happens in under 16ms.",
    icon: Zap
  },
  {
    title: "Thoughtful AI",
    description: "Intelligence that waits for you. Suggestions only when you need them.",
    icon: BrainCircuit
  },
  {
    title: "Open Source",
    description: "Built for developers, by developers. Transparent and extensible.",
    icon: Code2
  }
];

export const ValueProps: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#f5f8fb]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif italic font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200">
            We Value
          </h2>
        </FadeIn>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all group h-full">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
