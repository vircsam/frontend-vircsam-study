import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Button } from './ui/Button';
import { Check, ArrowUpRight } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageAlt: string;
  features: string[];
  isRightAligned: boolean;
  mockup: string;
};

const products: Product[] = [
  // {
  //   id: 'staying',
  //   name: 'Studier',
  //   tagline: 'The planner that respects your time & study.',
  //   description:
  //     "Studier isn't just a calendar. It's a commitment engine that helps you block noise, prioritize deep work, and actually finish what you start.",
  //   imageAlt: 'Studier App Interface',
  //   features: ['Time blocking', 'Distraction shield', 'Context switching reducer'],
  //   isRightAligned: false,
  //   mockup: 'img2.png',
  // },
  // {
  //   id: 'todo',
  //   name: 'Vircsam Todo',
  //   tagline: 'Capture everything, miss nothing.',
  //   description:
  //     'A lightning-fast task manager that gets out of your way. Keyboard-centric, offline-first, and brutally efficient.',
  //   imageAlt: 'Todo App Interface',
  //   features: ['Natural language input', 'Keyboard shortcuts', 'Collaborative workspaces'],
  //   isRightAligned: true,
  //   mockup: '/mockups/todo.png',
  // },
  // {
  //   id: 'dev',
  //   name: 'Vircsam Dev',
  //   tagline: 'Grow your developer tools.',
  //   description:
  //     'An open-source platform for building developer extensions. Create custom workflows and share them with the community.',
  //   imageAlt: 'Vircsam Dev Interface',
  //   features: ['Plugin architecture', 'TypeScript API', 'Community registry'],
  //   isRightAligned: false,
  //   mockup: '/mockups/rootsprout.png',
  // },
];

export const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-[#f0f8ff] space-y-24">
      {/* Section Heading */}
      {/* <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif italic font-bold text-blue-400 tracking-tight">
            Our Products
          </h2>
        </FadeIn>
      </div> */}

      {products.map((product) => (
        <div key={product.id} className="max-w-7xl mx-auto px-6">
          <div
            className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${
              product.isRightAligned ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* TEXT SIDE */}
            <div className="flex-1 space-y-8">
              <FadeIn>
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-mono text-xs font-semibold uppercase">
                  {product.name}
                </div>

                {/* Tagline */}
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-blue-400 tracking-tight mt-6">
                  {product.tagline}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-800 leading-relaxed max-w-xl">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-100">
                        <Check className="w-3 h-3 text-blue-600" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4 flex items-center gap-4">
                  <Button className="bg-blue-200 text-blue-900 hover:bg-blue-300">
                    Coming Soon
                  </Button>

                  {product.id === 'dev' && (
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900"
                    >
                      View GitHub <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* VISUAL SIDE (MOCKUP FIRST & CLEAR) */}
            <div className="flex-1 w-full">
              <FadeIn delay={200}>
                <div className="relative aspect-[4/3] rounded-3xl bg-white border border-blue-100 shadow-xl overflow-hidden">
                  {/* Subtle background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

                  {/* Mockup Image — TOP LAYER */}
                  <img
                    src={product.mockup}
                    alt={product.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover animate-fade-soft"
                  />
                </div>

                {/* Glow */}
                <div className="absolute inset-0 -z-10 blur-3xl bg-blue-200/40 rounded-full"></div>
              </FadeIn>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
