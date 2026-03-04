import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-gray-200 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <img
              src="logo.png"
              alt="logo"
              className="w-full h-full object-cover block"
            />
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">Vircsam</span>
        </div>

        Desktop Nav
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Products</a>
          <a href="#services" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Services</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        // <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-6 shadow-md">
        //   <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-base text-gray-700 hover:text-gray-900">Products</a>
        //   <a href="#opensource" onClick={() => setMobileMenuOpen(false)} className="text-base text-gray-700 hover:text-gray-900">Open Source</a>
        // </div>
      )}
    </nav>
  );
};
