import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Globe } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { ParallaxSection } from '../components/ParallaxSection';

const projects = {
  ecommerce: {
    title: 'E-Ticaret Platformu',
    description: 'Modern ve kullanıcı dostu bir e-ticaret deneyimi. React ve Node.js ile geliştirilmiş tam kapsamlı bir dijital mağaza çözümü.',
    fullDescription: `
      Bu e-ticaret platformu, modern web teknolojileri kullanılarak geliştirilmiş kapsamlı bir dijital alışveriş deneyimi sunuyor. 
      Kullanıcı dostu arayüzü, gelişmiş ürün filtreleme özellikleri ve güvenli ödeme sistemi ile tam donanımlı bir çözüm.
    `,
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
      'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'TailwindCSS'],
    features: [
      'Responsive tasarım ile tüm cihazlarda kusursuz görünüm',
      'Gelişmiş ürün filtreleme ve arama özellikleri',
      'Güvenli ödeme entegrasyonu',
      'Gerçek zamanlı stok takibi',
      'Admin paneli ile kolay yönetim',
      'SEO optimizasyonu'
    ],
    demoUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/username/ecommerce',
    duration: '3 ay',
    role: 'Baş Geliştirici',
    client: 'XYZ Şirketi'
  },
  automation: {
    title: 'Endüstriyel Otomasyon Sistemi',
    description: 'SolidWorks ile tasarlanmış kapsamlı bir endüstriyel otomasyon projesi. Mekanik tasarım ve simülasyon çalışmaları.',
    fullDescription: `
      Endüstriyel üretim süreçlerini optimize etmek için tasarlanmış kapsamlı bir otomasyon sistemi. 
      SolidWorks kullanılarak geliştirilen bu proje, üretim verimliliğini artırmak ve maliyetleri düşürmek için özel olarak tasarlandı.
    `,
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200',
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1200',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200'
    ],
    technologies: ['SolidWorks', 'AutoCAD', 'Ansys', 'PLC Programming'],
    features: [
      '3D parametrik modelleme',
      'Hareket analizi ve simülasyon',
      'Montaj optimizasyonu',
      'Teknik dokümantasyon',
      'Üretim süreç optimizasyonu',
      'Maliyet analizi'
    ],
    demoUrl: 'https://automation-demo.com',
    duration: '6 ay',
    role: 'Mekanik Tasarım Uzmanı',
    client: 'ABC Endüstri'
  },
  corporate: {
    title: 'Kurumsal Web Platformu',
    description: 'Büyük ölçekli bir şirket için geliştirilen modern ve etkileşimli kurumsal web sitesi projesi.',
    fullDescription: `
      Kurumsal kimliği dijital dünyaya taşıyan, modern ve etkileşimli bir web platformu. 
      Çok dilli içerik yönetimi, blog sistemi ve entegre iletişim formları ile tam kapsamlı bir kurumsal çözüm.
    `,
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200'
    ],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Strapi CMS', 'PostgreSQL'],
    features: [
      'Özel tasarlanmış UI/UX deneyimi',
      'Çok dilli içerik yönetimi',
      'Blog ve haber sistemi',
      'Entegre iletişim formları',
      'SEO optimizasyonu',
      'Performans odaklı geliştirme'
    ],
    demoUrl: 'https://corporate-demo.com',
    githubUrl: 'https://github.com/username/corporate',
    duration: '4 ay',
    role: 'Frontend Geliştirici',
    client: 'DEF Holding'
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects[id as keyof typeof projects] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Proje bulunamadı</h1>
          <Link to="/projects" className="text-black/60 hover:text-black">
            Projelere dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="pt-24 px-4 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Projelere Dön
            </Link>
          </div>

          <ParallaxSection offset={20}>
            <h1 className="text-4xl font-bold text-black mb-4">{project.title}</h1>
            <p className="text-xl text-black/70 mb-8">{project.description}</p>
          </ParallaxSection>

          <div className="grid gap-8">
            <ScrollAnimation>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="bg-white p-8 rounded-xl border border-black/10">
                <h2 className="text-2xl font-bold text-black mb-4">Proje Detayları</h2>
                <p className="text-black/70 whitespace-pre-line mb-6">
                  {project.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Özellikler</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-black/70">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-3">Teknolojiler</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-black/5 rounded-full text-sm text-black/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-black/70">
                        <span>Süre:</span>
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex justify-between text-black/70">
                        <span>Rol:</span>
                        <span>{project.role}</span>
                      </div>
                      <div className="flex justify-between text-black/70">
                        <span>Müşteri:</span>
                        <span>{project.client}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    Canlı Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black/5 text-black rounded-lg hover:bg-black/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Kaynak Kod
                  </a>
                )}
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6}>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video rounded-xl overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}