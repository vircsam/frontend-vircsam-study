import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white";

  const variants = {
    primary: "bg-blue-400 text-white hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(56,182,255,0.3)] border border-transparent",
    secondary: "bg-green-200 text-gray-900 hover:bg-green-300 border border-green-300",
    outline: "bg-transparent border border-gray-300 text-gray-800 hover:text-white hover:bg-blue-100",
    ghost: "bg-transparent text-gray-800 hover:text-white hover:bg-gray-200"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
