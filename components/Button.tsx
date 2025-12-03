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
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    // Cursor style: White bg, Black text for primary actions
    primary: "bg-white text-black hover:bg-gray-200 border border-transparent",
    // Secondary: Dark bg, White text, subtle border
    secondary: "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800",
    // Outline: Transparent bg, lighter border
    outline: "bg-transparent border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500",
    ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2.5 text-base",
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