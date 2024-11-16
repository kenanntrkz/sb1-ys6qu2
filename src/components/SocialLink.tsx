import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="group relative p-4 glass-effect rounded-full hover:bg-black/10 transition-all hover:scale-110 hover:shadow-lg"
      style={{ animationDelay: Math.random() + 's' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-6 h-6 text-black/60 group-hover:text-black transition-colors" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap bg-black/80 px-2 py-1 rounded text-white">
        {label}
      </span>
      <div className="absolute inset-0 animate-shimmer rounded-full"></div>
    </a>
  );
}