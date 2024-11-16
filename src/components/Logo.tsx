import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="group relative">
      <div className="relative flex items-center">
        {/* Logo Shape */}
        <div className="relative w-10 h-10">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-2 border-black rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
          
          {/* Inner Ring */}
          <div className="absolute inset-0.5 border-2 border-black/60 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
          
          {/* K Letter */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-black transform group-hover:scale-110 transition-transform duration-300">
              K
            </span>
          </div>

          {/* Animated Dot */}
          <div className="absolute -right-1 -top-1 w-2 h-2 bg-black rounded-full animate-pulse"></div>
        </div>

        {/* Text */}
        <div className="ml-3 flex flex-col">
          <span className="text-lg font-bold tracking-wider text-black transform group-hover:translate-x-1 transition-transform duration-300">
            KENAN
          </span>
          <span className="text-xs tracking-[0.2em] text-black/60 transform group-hover:translate-x-2 transition-transform duration-500">
            TÜRKÖZ
          </span>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-black/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      </div>
    </Link>
  );
}