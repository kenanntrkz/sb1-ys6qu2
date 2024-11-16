import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { PageTransition } from '../components/PageTransition';

const categories = [
  'Tümü',
  'Web Geliştirme',
  '3D Modelleme',
  'UI/UX Tasarım',
  'Teknoloji',
  'Yazılım',
  'Endüstriyel Tasarım',
  'Kariyer'
];

const blogPosts = [
  {
    id: 'modern-web-trends',
    title: 'Modern Web Tasarımında Son Trendler',
    excerpt: 'Web tasarımında 2024 yılının öne çıkan trendleri ve kullanıcı deneyimini artıran modern yaklaşımlar.',
    date: '15 Mart 2024',
    category: 'Web Geliştirme',
    author: 'Kenan Türköz',
    readTime: '5 dk',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800'
  },
  {
    id: 'solidworks-tips',
    title: 'SolidWorks ile Endüstriyel Tasarım',
    excerpt: 'Endüstriyel tasarımda SolidWorks kullanımı ve profesyonel ipuçları.',
    date: '10 Mart 2024',
    category: '3D Modelleme',
    author: 'Kenan Türköz',
    readTime: '7 dk',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800'
  },
  {
    id: 'react-typescript',
    title: 'React ve TypeScript ile Güvenli Kod',
    excerpt: 'Modern web uygulamalarında type-safety ve best practices.',
    date: '5 Mart 2024',
    category: 'Yazılım',
    author: 'Kenan Türköz',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800'
  },
  {
    id: 'ui-design-principles',
    title: 'UI Tasarımında Temel Prensipler',
    excerpt: 'Etkili kullanıcı arayüzü tasarımı için uygulanması gereken temel prensipler ve öneriler.',
    date: '1 Mart 2024',
    category: 'UI/UX Tasarım',
    author: 'Kenan Türköz',
    readTime: '8 dk',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800'
  },
  {
    id: 'mechanical-design',
    title: 'Mekanik Tasarımda İnovasyon',
    excerpt: 'Endüstriyel tasarımda yenilikçi yaklaşımlar ve modern üretim teknikleri.',
    date: '28 Şubat 2024',
    category: 'Endüstriyel Tasarım',
    author: 'Kenan Türköz',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800'
  },
  {
    id: 'frontend-architecture',
    title: 'Frontend Mimarisinde Best Practices',
    excerpt: 'Modern web uygulamalarında frontend mimarisi ve kod organizasyonu.',
    date: '25 Şubat 2024',
    category: 'Web Geliştirme',
    author: 'Kenan Türköz',
    readTime: '7 dk',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800'
  },
  {
    id: '3d-modeling-basics',
    title: '3D Modelleme Temelleri',
    excerpt: 'Başlangıç seviyesinden ileri seviyeye 3D modelleme teknikleri ve ipuçları.',
    date: '20 Şubat 2024',
    category: '3D Modelleme',
    author: 'Kenan Türköz',
    readTime: '9 dk',
    image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800'
  },
  {
    id: 'responsive-design',
    title: 'Responsive Tasarım Stratejileri',
    excerpt: 'Farklı ekran boyutlarına uyumlu web tasarımı için modern yaklaşımlar.',
    date: '15 Şubat 2024',
    category: 'Web Geliştirme',
    author: 'Kenan Türköz',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800'
  },
  {
    id: 'ai-in-design',
    title: 'Tasarımda Yapay Zeka Kullanımı',
    excerpt: 'AI araçlarının tasarım süreçlerine entegrasyonu ve kullanım alanları.',
    date: '10 Şubat 2024',
    category: 'Teknoloji',
    author: 'Kenan Türköz',
    readTime: '8 dk',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800'
  },
  {
    id: 'career-development',
    title: 'Yazılım Kariyerinde İlerleme',
    excerpt: 'Yazılım geliştiriciler için kariyer gelişimi ve uzmanlaşma tavsiyeleri.',
    date: '5 Şubat 2024',
    category: 'Kariyer',
    author: 'Kenan Türköz',
    readTime: '7 dk',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
  },
  {
    id: 'solidworks-advanced',
    title: 'SolidWorks İleri Seviye Teknikler',
    excerpt: 'Profesyonel SolidWorks kullanıcıları için ileri seviye modelleme teknikleri.',
    date: '1 Şubat 2024',
    category: '3D Modelleme',
    author: 'Kenan Türköz',
    readTime: '10 dk',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800'
  },
  {
    id: 'web-performance',
    title: 'Web Performans Optimizasyonu',
    excerpt: 'Web uygulamalarında performans iyileştirme teknikleri ve best practices.',
    date: '28 Ocak 2024',
    category: 'Web Geliştirme',
    author: 'Kenan Türköz',
    readTime: '8 dk',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800'
  },
  {
    id: 'ux-research',
    title: 'UX Araştırma Metodolojileri',
    excerpt: 'Kullanıcı deneyimi araştırmalarında kullanılan modern metodolojiler.',
    date: '25 Ocak 2024',
    category: 'UI/UX Tasarım',
    author: 'Kenan Türköz',
    readTime: '9 dk',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?w=800'
  },
  {
    id: 'industrial-automation',
    title: 'Endüstriyel Otomasyon Sistemleri',
    excerpt: 'Modern üretim süreçlerinde otomasyon sistemleri ve entegrasyonu.',
    date: '20 Ocak 2024',
    category: 'Endüstriyel Tasarım',
    author: 'Kenan Türköz',
    readTime: '7 dk',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800'
  },
  {
    id: 'future-of-web',
    title: 'Web Teknolojilerinin Geleceği',
    excerpt: 'Web geliştirme dünyasındaki yeni trendler ve gelecek öngörüleri.',
    date: '15 Ocak 2024',
    category: 'Teknoloji',
    author: 'Kenan Türköz',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800'
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="pt-24 px-4 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle icon={BookOpen} title="Blog" />
          
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
              placeholder="Blog yazılarında ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-black/20"
            />
          </div>
          
          <div className="grid gap-8">
            {filteredPosts.map((post, index) => (
              <ScrollAnimation key={post.id} delay={index * 0.1}>
                <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-black/5">
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-[4/3] md:aspect-auto md:h-full">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center gap-4 text-sm text-black/60 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-black group-hover:text-black/80">
                          {post.title}
                        </h2>
                        <p className="text-black/60 mb-4">
                          {post.excerpt}
                        </p>
                        <span className="inline-block px-3 py-1 bg-black/5 text-sm rounded-full text-black/70">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </ScrollAnimation>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black/60">Aradığınız kriterlere uygun yazı bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}