import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
}

export function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-2 mb-8 group">
      <Icon className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
      <h2 className="text-3xl font-bold text-black">{title}</h2>
    </div>
  );
}