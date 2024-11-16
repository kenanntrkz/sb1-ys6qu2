import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/projects', label: 'Projeler' },
    { path: '/services', label: 'Hizmetler' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'İletişim' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-black/5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? 'text-black font-medium'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-black/60 hover:text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-sm py-4 border-b border-black/5">
            <div className="flex flex-col space-y-4 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors ${
                    location.pathname === item.path
                      ? 'text-black font-medium'
                      : 'text-black/60 hover:text-black'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}