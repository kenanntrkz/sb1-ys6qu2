import React from 'react';
import { User, Cog, Code, Rocket, Heart, Lightbulb, GraduationCap } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { TechBadge } from '../components/TechBadge';

const technologies = [
  'React', 'TypeScript', 'TailwindCSS', 'Node.js', 
  'Web Design', 'UI/UX', 'SolidWorks', 'Responsive Design',
  '3D Modelleme', 'Teknik Çizim', 'JavaScript', 'HTML/CSS'
];

export default function About() {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl space-y-16">
        <div className="fade-in">
          <SectionTitle icon={User} title="Hakkımda" />
          
          <div className="grid gap-12 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/5 opacity-50 blur-3xl -z-10"></div>
            
            <div className="space-y-8">
              <div className="group p-6 bg-white rounded-xl border border-black/10 hover:border-black/20 transition-all shadow-sm hover:shadow-md">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-black shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Başlangıç Hikayem</h3>
                    <p className="text-black/70 leading-relaxed">
                      Teknolojiye olan tutkum çocukluk yıllarıma dayanıyor. Bilgisayarları sadece kullanmakla kalmayıp, 
                      nasıl çalıştıklarını anlama merakım beni yazılım dünyasına yönlendirdi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white rounded-xl border border-black/10 hover:border-black/20 transition-all shadow-sm hover:shadow-md">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-black shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Eğitim ve Gelişim</h3>
                    <p className="text-black/70 leading-relaxed">
                      Sürekli öğrenme ve kendini geliştirme tutkum sayesinde, modern web teknolojileri ve 
                      endüstriyel tasarım alanlarında kapsamlı bilgi ve deneyim edindim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-black">
                <Cog className="w-5 h-5" /> Teknolojiler & Araçlar
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}