import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ScrollAnimation } from '../components/ScrollAnimation';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
}

const blogPosts: Record<string, BlogPost> = {
  'web-technologies-future': {
    title: 'Web Teknolojilerinin Geleceği',
    content: `Web teknolojileri sürekli evrim geçiriyor ve gelecekte bizi heyecan verici gelişmeler bekliyor. Bu yazıda, web dünyasının geleceğini şekillendiren teknolojileri ve trendleri inceleyeceğiz.

    1. Web3 ve Blockchain Teknolojileri
    - Merkeziyetsiz uygulamalar (dApps)
    - Akıllı kontratlar ve blockchain entegrasyonu
    - Kripto cüzdanlar ve kimlik doğrulama
    - NFT tabanlı web uygulamaları

    2. Yapay Zeka ve Machine Learning
    - AI destekli web geliştirme araçları
    - Otomatik kod optimizasyonu
    - Kişiselleştirilmiş kullanıcı deneyimi
    - Doğal dil işleme entegrasyonları

    3. WebAssembly ve Performans
    - Yüksek performanslı web uygulamaları
    - C++ ve Rust kodlarının web'de çalışması
    - Oyun geliştirme ve 3D uygulamalar
    - Gerçek zamanlı işlemler

    4. Progressive Web Apps (PWA)
    - Offline çalışma kabiliyeti
    - Native uygulama deneyimi
    - Push bildirimler
    - Donanım entegrasyonu`,
    date: '15 Ocak 2024',
    category: 'Teknoloji',
    author: 'Kenan Türköz',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800'
  },
  'industrial-automation': {
    title: 'Endüstriyel Otomasyon Sistemleri',
    content: `Endüstriyel otomasyon sistemleri, modern üretim süreçlerinin vazgeçilmez bir parçası haline geldi. Bu yazıda, otomasyon sistemlerinin temellerini ve uygulama alanlarını inceleyeceğiz.

    1. PLC Sistemleri
    - PLC programlama temelleri
    - Ladder lojik ve yapısal programlama
    - HMI tasarımı ve entegrasyonu
    - SCADA sistemleri

    2. Robotik Sistemler
    - Endüstriyel robotlar ve kullanım alanları
    - Robot programlama ve simülasyon
    - Güvenlik sistemleri
    - Collaborative robotlar (Cobots)

    3. Sensör Teknolojileri
    - Endüstriyel sensör tipleri
    - Veri toplama ve analiz
    - Kalite kontrol sistemleri
    - Predictive maintenance

    4. Endüstri 4.0 Entegrasyonu
    - IoT cihazları ve protokoller
    - Bulut tabanlı sistemler
    - Digital twin uygulamaları
    - Big data ve analitik`,
    date: '20 Ocak 2024',
    category: 'Endüstriyel Tasarım',
    author: 'Kenan Türköz',
    readTime: '7 dk',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800'
  },
  'ux-research': {
    title: 'UX Araştırma Metodolojileri',
    content: `Kullanıcı deneyimi araştırmaları, başarılı dijital ürünler geliştirmenin temelini oluşturur. Bu yazıda, etkili UX araştırma metodolojilerini ve tekniklerini inceleyeceğiz.

    1. Kullanıcı Araştırma Teknikleri
    - Derinlemesine görüşmeler
    - Anket tasarımı ve uygulama
    - Etnografik araştırmalar
    - Persona oluşturma

    2. Kullanılabilirlik Testleri
    - Test senaryoları oluşturma
    - Moderasyon teknikleri
    - Eye tracking çalışmaları
    - A/B testleri

    3. Veri Analizi
    - Nitel ve nicel veri analizi
    - Kullanıcı davranış analizi
    - Heat map analizi
    - Analytics araçları

    4. UX Araştırma Çıktıları
    - User journey mapping
    - Empathy mapping
    - Task analysis
    - Research repository oluşturma`,
    date: '25 Ocak 2024',
    category: 'UI/UX Tasarım',
    author: 'Kenan Türköz',
    readTime: '9 dk',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?w=800'
  },
  'web-performance': {
    title: 'Web Performans Optimizasyonu',
    content: `Web performansı, kullanıcı deneyimini ve SEO'yu doğrudan etkileyen kritik bir faktördür. Bu yazıda, web uygulamalarında performans optimizasyonu tekniklerini inceleyeceğiz.

    1. Yükleme Performansı
    - Code splitting ve lazy loading
    - Asset optimizasyonu
    - Cache stratejileri
    - CDN kullanımı

    2. Runtime Performans
    - JavaScript optimizasyonu
    - Memory leaks ve önleme
    - Virtual DOM optimizasyonu
    - Web workers

    3. Render Performansı
    - Critical rendering path
    - CSS optimizasyonu
    - Font loading stratejileri
    - Animation performansı

    4. Performans Ölçümü
    - Core Web Vitals
    - Lighthouse audits
    - Performance monitoring
    - Real user monitoring (RUM)`,
    date: '28 Ocak 2024',
    category: 'Web Geliştirme',
    author: 'Kenan Türköz',
    readTime: '8 dk',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800'
  },
  'solidworks-advanced': {
    title: 'SolidWorks İleri Seviye Teknikler',
    content: `SolidWorks'te ileri seviye teknikleri kullanarak daha kompleks ve verimli tasarımlar oluşturabilirsiniz. Bu yazıda, profesyonel SolidWorks kullanıcıları için ileri seviye teknikleri inceleyeceğiz.

    1. Advanced Surface Modeling
    - Complex surface creation
    - Surface manipulation
    - Hybrid modeling
    - Surface analysis tools

    2. Large Assembly Management
    - Performance optimization
    - Assembly structure
    - Reference management
    - Configuration techniques

    3. Advanced Pattern Features
    - Curve driven patterns
    - Variable patterns
    - Pattern driven components
    - Sketch driven patterns

    4. Design Automation
    - DriveWorks integration
    - Design tables
    - Configurations
    - API programming`,
    date: '1 Şubat 2024',
    category: '3D Modelleme',
    author: 'Kenan Türköz',
    readTime: '10 dk',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800'
  },
  'career-development': {
    title: 'Yazılım Kariyerinde İlerleme',
    content: `Yazılım dünyasında başarılı bir kariyer inşa etmek için sürekli gelişim ve doğru stratejiler gerekir. Bu yazıda, yazılım kariyerinde ilerleme ipuçlarını paylaşacağız.

    1. Teknik Gelişim
    - Sürekli öğrenme stratejileri
    - Yeni teknolojilere adaptasyon
    - Side project geliştirme
    - Open source katkıları

    2. Soft Skills Geliştirme
    - İletişim becerileri
    - Problem çözme
    - Takım çalışması
    - Zaman yönetimi

    3. Kariyer Planlama
    - Uzmanlaşma alanı seçimi
    - Networking stratejileri
    - Portfolio geliştirme
    - Personal branding

    4. Liderlik ve Mentorluk
    - Teknik liderlik
    - Mentorluk programları
    - Bilgi paylaşımı
    - Topluluk katılımı`,
    date: '5 Şubat 2024',
    category: 'Kariyer',
    author: 'Kenan Türköz',
    readTime: '7 dk',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
  },
  'ai-in-design': {
    title: 'Tasarımda Yapay Zeka Kullanımı',
    content: `Yapay zeka teknolojileri, tasarım süreçlerini dönüştürüyor ve yeni olanaklar sunuyor. Bu yazıda, tasarım alanında AI kullanımının farklı yönlerini inceleyeceğiz.

    1. AI Destekli Tasarım Araçları
    - Generative design
    - Style transfer
    - Layout optimization
    - Color scheme generation

    2. Otomatik Tasarım Sistemleri
    - Template generation
    - Design variations
    - Asset creation
    - Responsive adaptations

    3. UX/UI Optimizasyonu
    - Kullanıcı davranış analizi
    - A/B test otomasyonu
    - Personalization
    - Accessibility improvements

    4. Geleceğe Bakış
    - Emerging AI technologies
    - Ethics in AI design
    - Human-AI collaboration
    - Future of design tools`,
    date: '10 Şubat 2024',
    category: 'Teknoloji',
    author: 'Kenan Türköz',
    readTime: '8 dk',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800'
  }
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Yazı bulunamadı</h1>
          <Link to="/blog" className="text-black/60 hover:text-black">
            Blog'a dön
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
              to="/blog"
              className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Blog'a Dön
            </Link>
          </div>

          <ScrollAnimation>
            <article className="bg-white rounded-xl overflow-hidden border border-black/10">
              <div className="aspect-video">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-black/60 mb-4">
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

                <h1 className="text-4xl font-bold text-black mb-4">{post.title}</h1>
                
                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-black/70 whitespace-pre-line mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-black/10">
                  <span className="inline-block px-4 py-2 bg-black/5 rounded-full text-sm text-black/70">
                    {post.category}
                  </span>
                </div>
              </div>
            </article>
          </ScrollAnimation>
        </div>
      </div>
    </PageTransition>
  );
}