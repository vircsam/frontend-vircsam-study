import React from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Pricing: React.FC = () => {
  return (
    <></>
    // <section id="pricing" className="py-24 bg-[#0c0c0e]">
    //   <div className="max-w-7xl mx-auto px-6">
    //     <div className="text-center max-w-2xl mx-auto mb-16">
    //        <h2 className="text-3xl font-bold text-white mb-4">Simple, transparent pricing.</h2>
    //        <p className="text-[#a1a1aa]">Start for free. Upgrade for power.</p>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    //       {/* Free Tier */}
    //       <FadeIn delay={0} className="h-full">
    //         <div className="h-full p-8 rounded-2xl border border-[#27272a] bg-[#09090b] flex flex-col">
    //            <h3 className="text-xl font-semibold text-white mb-2">Personal</h3>
    //            <div className="text-3xl font-bold text-white mb-6">$0</div>
    //            <p className="text-sm text-[#a1a1aa] mb-8">Perfect for individuals organizing their life.</p>
               
    //            <ul className="space-y-4 mb-8 flex-1">
    //              {['Unlimited Tasks', 'Basic Staying Planner', 'Local Sync', 'Community Support'].map((feature, i) => (
    //                 <li key={i} className="flex items-center gap-3 text-sm text-[#d4d4d8]">
    //                    <Check className="w-4 h-4 text-[#52525b]" />
    //                    {feature}
    //                 </li>
    //              ))}
    //            </ul>
    //            <Button variant="outline" className="w-full">Get Started Free</Button>
    //         </div>
    //       </FadeIn>

    //       {/* Pro Tier */}
    //       <FadeIn delay={100} className="h-full">
    //         <div className="h-full p-8 rounded-2xl border border-brand-blue/20 bg-[#09090b] relative flex flex-col shadow-[0_0_40px_-10px_rgba(56,182,255,0.1)]">
    //            <div className="absolute top-0 right-0 px-3 py-1 bg-brand-blue text-xs font-bold text-[#09090b] rounded-bl-xl rounded-tr-xl">POPULAR</div>
    //            <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
    //            <div className="text-3xl font-bold text-white mb-6">$12<span className="text-base font-normal text-[#71717a]">/mo</span></div>
    //            <p className="text-sm text-[#a1a1aa] mb-8">For power users and small teams.</p>
               
    //            <ul className="space-y-4 mb-8 flex-1">
    //              {['Everything in Personal', 'Unlimited AI Suggestions', 'Advanced Analytics', 'RootSprout Priority Access', 'Encrypted Backups'].map((feature, i) => (
    //                 <li key={i} className="flex items-center gap-3 text-sm text-[#d4d4d8]">
    //                    <Check className="w-4 h-4 text-brand-blue" />
    //                    {feature}
    //                 </li>
    //              ))}
    //            </ul>
    //            <Button variant="primary" className="w-full">Start Pro Trial</Button>
    //         </div>
    //       </FadeIn>
    //     </div>
    //   </div>
    // </section>
  );
};