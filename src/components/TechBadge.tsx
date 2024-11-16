import React from 'react';

interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="px-4 py-2 bg-gradient-to-r from-black/5 to-black/10 hover:from-black/10 hover:to-black/20 rounded-full text-sm text-black/70 transition-all duration-300 cursor-default border border-black/10 hover:border-black/20 hover:scale-105 hover:shadow-lg">
      {name}
    </span>
  );
}