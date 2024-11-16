import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Globe } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ 
  id, 
  title, 
  description, 
  image, 
  category,
  technologies,
  demoUrl,
  githubUrl 
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl border border-black/5">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <span className="absolute bottom-4 left-4 text-sm bg-white/90 text-black px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-black group-hover:text-black/80 transition-colors">
          {title}
        </h3>
        <p className="text-black/60 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to={`/projects/${id}`}
            className="flex items-center gap-2 text-black hover:text-black/70 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Detaylar
          </Link>

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black/60 hover:text-black transition-colors"
            >
              <Globe className="w-4 h-4" />
              Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black/60 hover:text-black transition-colors"
            >
              <Github className="w-4 h-4" />
              Kod
            </a>
          )}
        </div>
      </div>
    </div>
  );
}