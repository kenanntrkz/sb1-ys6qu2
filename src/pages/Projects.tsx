import React from 'react';
import { Palette } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { ParallaxSection } from '../components/ParallaxSection';
import { PageTransition } from '../components/PageTransition';

const projects = [
  {
    id: 'ecommerce',
    title: 'E-Ticaret Platformu',
    description: 'Modern ve kullanıcı dostu bir e-ticaret deneyimi. React ve Node.js ile geliştirilmiş tam kapsamlı bir dijital mağaza çözümü.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
    category: 'Web Geliştirme',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/username/ecommerce'
  },
  {
    id: 'automation',
    title: 'Endüstriyel Otomasyon Sistemi',
    description: 'SolidWorks ile tasarlanmış kapsamlı bir endüstriyel otomasyon projesi. Mekanik tasarım ve simülasyon çalışmaları.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500',
    category: '3D Modelleme',
    technologies: ['SolidWorks', 'AutoCAD', 'Ansys'],
    demoUrl: 'https://automation-demo.com'
  },
  {
    id: 'corporate',
    title: 'Kurumsal Web Platformu',
    description: 'Büyük ölçekli bir şirket için geliştirilen modern ve etkileşimli kurumsal web sitesi projesi.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500',
    category: 'Web Tasarım',
    technologies: ['React', 'Next.js', 'TailwindCSS'],
    demoUrl: 'https://corporate-demo.com',
    githubUrl: 'https://github.com/username/corporate'
  }
];

const categories = ['Tümü', 'Web Geliştirme', 'Web Tasarım', '3D Modelleme'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState('Tümü');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'Tümü' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="pt-24 px-4 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <ParallaxSection offset={20}>
            <SectionTitle icon={Palette} title="Projeler" />
          </ParallaxSection>

          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-black/5 text-black hover:bg-black/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Proje ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-black/20"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 0.2}>
                <ProjectCard {...project} />
              </ScrollAnimation>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black/60">Aradığınız kriterlere uygun proje bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}