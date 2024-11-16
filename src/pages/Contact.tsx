import React, { useRef, useState } from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSending(true);
      setStatus({type: null, message: ''});
      
      await emailjs.init("m_z5csUBp0WXOXCzi");
      await emailjs.send(
        "kenantrkz@hotmail.com",
        "template_ipe2eps",
        {
          from_name: formRef.current.from_name.value,
          from_email: formRef.current.from_email.value,
          message: formRef.current.message.value,
          to_name: "Kenan Türköz",
          reply_to: formRef.current.from_email.value
        }
      );

      setStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi!'
      });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle icon={Mail} title="İletişim" />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black">İletişime Geçin</h3>
            <p className="text-black/70">
              Projeleriniz için profesyonel çözümler sunabilirim. Yaratıcı fikirlerinizi hayata geçirmek için
              benimle iletişime geçebilirsiniz.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:kenantrkz@hotmail.com" 
                 className="flex items-center gap-3 text-black/70 hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
                kenantrkz@hotmail.com
              </a>
              <a href="tel:+905309490193"
                 className="flex items-center gap-3 text-black/70 hover:text-black transition-colors">
                <Phone className="w-5 h-5" />
                0530 949 01 93
              </a>
              <a href="https://instagram.com/kenanntrkz"
                 className="flex items-center gap-3 text-black/70 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
                @kenanntrkz
              </a>
              <div className="flex items-center gap-3 text-black/70">
                <MapPin className="w-5 h-5" />
                Alaşehir, Manisa / Türkiye
              </div>
            </div>
          </div>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-black/70 mb-2">Ad Soyad</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                className="w-full px-4 py-2 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="Adınız Soyadınız"
              />
            </div>
            
            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-black/70 mb-2">E-posta</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                className="w-full px-4 py-2 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="ornek@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">Mesaj</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="Mesajınız..."
              ></textarea>
            </div>

            {status.type && (
              <div className={`p-4 rounded-lg ${
                status.type === 'success' ? 'bg-black/5 text-black' : 'bg-red-50 text-red-800'
              }`}>
                {status.message}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSending}
              className="w-full px-6 py-3 bg-black hover:bg-black/90 rounded-lg font-medium text-white transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSending ? 'Gönderiliyor...' : 'Gönder'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}