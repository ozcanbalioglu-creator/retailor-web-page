import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Smartphone } from 'lucide-react';
import { GOOGLE_SCRIPT_URL } from '../constants';

export const About: React.FC = () => (
  <div className="pt-32 md:pt-48 pb-20 md:pb-32 px-4 sm:px-6 bg-[#f8fafc]">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
        <div>
          <h1 className="hero-text font-heading uppercase tracking-tighter mb-8 text-[#0c4a6e]">Biz Kimiz<span className="text-[#0ea5e9]">?</span></h1>
          <p className="text-2xl font-normal text-[#475569] leading-relaxed mb-8">
            Retailor, perakende sektörünün duayen isimleri ile yapay zeka mühendislerinin bir araya geldiği hibrit bir danışmanlık platformudur.
          </p>
          <div className="space-y-6 text-[#475569] leading-relaxed font-normal opacity-80">
            <p>20 yılı aşkın perakende tecrübemizi, en son teknoloji olan generative AI (Üretken Yapay Zeka) ile birleştirerek markaların dijital dönüşümüne liderlik ediyoruz.</p>
            <p>Amacımız, sadece teknoloji satmak değil; mağaza müdürlerinden CEO'lara kadar tüm organizasyonun verimliliğini AI ile çarpan etkisine ulaştırmaktır.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="h-64 md:h-80 bg-white border border-slate-100 rounded-[2rem] md:rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 md:p-8 text-center transition-transform hover:-translate-y-2 duration-500">
            <span className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-2">50+</span>
            <span className="text-sm uppercase tracking-wider font-medium text-[#475569]">Aktif Proje</span>
          </div>
          <div className="h-64 md:h-80 bg-white border border-slate-100 rounded-[2rem] md:rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 md:p-8 text-center md:mt-12 transition-transform hover:-translate-y-2 duration-500">
            <span className="text-4xl md:text-5xl font-bold text-[#0ea5e9] mb-2">12k</span>
            <span className="text-sm uppercase tracking-wider font-medium text-[#475569]">Eğitilen Personel</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('subject', formData.subject);
      data.append('company', formData.company);
      data.append('message', formData.message);
      data.append('formType', 'Mesaj');

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Google Script usually requires no-cors for simple redirects
      });

      alert('Mesajınız başarıyla iletildi');
      setFormData({ name: '', email: '', subject: '', company: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 md:pt-48 pb-20 md:pb-32 px-4 sm:px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h1 className="hero-text font-heading uppercase tracking-tighter mb-8 md:mb-12 text-[#0c4a6e]">BİZE<br className="hidden md:block" /><span className="text-[#0ea5e9]">ULAŞIN</span></h1>
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-[#f8fafc] border border-slate-100 rounded-full flex items-center justify-center group-hover:bg-[#0c4a6e] group-hover:text-white transition-all text-[#0ea5e9] shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider font-bold text-[#475569] mb-2">Email</p>
                  <p className="text-lg font-semibold text-[#0c4a6e]">ozcan@retailor.com.tr</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-[#f8fafc] border border-slate-100 rounded-full flex items-center justify-center group-hover:bg-[#0c4a6e] group-hover:text-white transition-all text-[#0ea5e9] shadow-sm">
                  <Smartphone size={24} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider font-bold text-[#475569] mb-2">Telefon</p>
                  <p className="text-lg font-semibold text-[#0c4a6e]">+90 545 383 0018</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-[#f8fafc] border border-slate-100 rounded-full flex items-center justify-center group-hover:bg-[#0c4a6e] group-hover:text-white transition-all text-[#0ea5e9] shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider font-bold text-[#475569] mb-2">Ofis</p>
                  <p className="text-lg font-semibold text-[#0c4a6e]">Ataşehir, İstanbul</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-8 md:p-12 rounded-[2rem] md:rounded-3xl border border-slate-200 shadow-xl">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider font-medium text-[#475569]">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full py-3.5 px-5 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/10 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider font-medium text-[#475569]">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full py-3.5 px-5 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/10 transition-all text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider font-medium text-[#475569]">Şirket</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full py-3.5 px-5 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/10 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider font-medium text-[#475569]">Konu</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full py-3.5 px-5 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/10 transition-all text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider font-medium text-[#475569]">Mesajınız</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full py-3.5 px-5 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/10 transition-all text-sm resize-none min-h-[120px]"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0c4a6e] text-white py-5 rounded-xl font-semibold uppercase tracking-wider hover:bg-[#0ea5e9] transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg shadow-[#0c4a6e]/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} className="text-[#f59e0b]" />
                {isSubmitting ? 'GÖNDERİLİYOR...' : 'GÖNDER'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export const Legal: React.FC<{ title: string }> = ({ title }) => (
  <div className="pt-48 pb-32 px-6 bg-[#f8fafc]">
    <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
      <h1 className="section-title font-heading uppercase tracking-tighter mb-12 text-[#0c4a6e]">{title}</h1>
      <div className="text-[#475569] leading-relaxed space-y-6 font-normal">
        <p>Retailor.com.tr olarak kullanıcılarımızın gizliliğine ve veri güvenliğine en üst düzeyde önem veriyoruz. Bu politika, sitemiz ve hizmetlerimiz üzerinden toplanan bilgilerin nasıl işlendiğini açıklar.</p>
        <h2 className="text-[#0c4a6e] text-lg font-semibold mt-8">1. Veri Toplama ve İşleme</h2>
        <p>İletişim formları üzerinden adınız, e-posta adresiniz ve kurumsal bilgileriniz gibi temel verileri toplarız. Bu bilgiler sadece profesyonel danışmanlık hizmetlerimizi sunmak ve sizinle iletişim kurmak amacıyla kullanılır.</p>
        <h2 className="text-[#0c4a6e] text-lg font-semibold mt-8">2. Çerez (Cookie) Kullanımı</h2>
        <p>Web sitemiz, kullanıcı deneyimini optimize etmek, site trafiğini analiz etmek ve hizmetlerimizi iyileştirmek için standart çerez teknolojilerini kullanır. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.</p>
        <h2 className="text-[#0c4a6e] text-lg font-semibold mt-8">3. Bilgi Güvenliği</h2>
        <p>Kişisel verileriniz, endüstri standardı şifreleme yöntemleri ve güvenli sunucular üzerinde barındırılmaktadır. Yasal zorunluluklar haricinde bilgileriniz üçüncü taraflarla asla paylaşılmaz.</p>
      </div>
    </div>
  </div>
);