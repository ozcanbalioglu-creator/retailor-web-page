import React from 'react';
import { Store, Bot, GraduationCap, ArrowRight, CheckCircle2, Target, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* HERO SECTION - Minimal & Deep Blue */}


      {/* NE YAPIYORUZ? - 3 Core Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#0ea5e9] text-sm font-semibold uppercase tracking-wider">Hizmetlerimiz</span>
            <h2 className="section-title font-heading text-[#0c4a6e] uppercase mt-4">Neler Sunuyoruz?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Danışmanlık */}
            <div className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#0ea5e9] mb-6 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
                <Store size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#0c4a6e] mb-4">Perakende Danışmanlık</h3>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0ea5e9]" /> Operasyonel Verimlilik</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0ea5e9]" /> Kategori Yönetimi</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0ea5e9]" /> Franchise Geliştirme</li>
              </ul>
            </div>

            {/* AI Çözümleri */}
            <div className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#0ea5e9] mb-6 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
                <Bot size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#0c4a6e] mb-4">AI Destekli Çözümler</h3>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0ea5e9]" /> Avatar Eğitim Videoları</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0ea5e9]" /> Sales Mentor AI (WhatsApp)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0ea5e9]" /> Kurumsal AI Dönüşümü</li>
              </ul>
            </div>

            {/* Eğitim */}
            <div className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#0ea5e9] mb-6 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#0c4a6e] mb-4">Eğitim & Koçluk</h3>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0ea5e9]" /> Yönetici Geliştirme</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0ea5e9]" /> Perakende Süreçleri</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0ea5e9]" /> AI Kullanım Eğitimleri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIYORUZ? - 4 Steps */}
      <section className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-title font-heading text-[#0c4a6e] uppercase">Süreç Nasıl İşler?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "01", title: "İHTİYAÇ ANALİZİ", desc: "Ücretsiz 30 dakikalık keşif görüşmesi" },
              { id: "02", title: "ÇÖZÜM ÖNERİSİ", desc: "İhtiyaca özel paket ve teklif sunumu" },
              { id: "03", title: "UYGULAMA", desc: "Proje bazlı veya sürekli operasyon desteği" },
              { id: "04", title: "ÖLÇÜM", desc: "Ölçülebilir sonuçlar ve sürekli iyileştirme" }
            ].map((step) => (
              <div key={step.id} className="relative text-center">
                <div className="text-5xl font-bold text-slate-100 mb-4">{step.id}</div>
                <h3 className="text-base font-semibold text-[#0c4a6e] mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEDEN RETAILOR? - Core Strengths */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-12 rounded-[3rem] text-center">
              <Target className="mx-auto text-[#f59e0b] mb-6" size={48} />
              <h3 className="text-lg font-bold text-[#0c4a6e] mb-4">Derin Deneyim</h3>
              <p className="text-sm text-slate-500 leading-relaxed">35+ yıl perakende bilgisi ve 7.000 kişilik organizasyon yönetim tecrübesi.</p>
            </div>
            <div className="bg-[#0c4a6e] p-12 rounded-[3rem] text-center text-white">
              <Zap className="mx-auto text-[#0ea5e9] mb-6" size={48} />
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">İleri Teknoloji</h3>
              <p className="text-sm text-white/70 leading-relaxed">Sektöre özel AI çözümleri, avatar videoları ve akıllı asistanlar.</p>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] text-center">
              <BarChart3 className="mx-auto text-[#0ea5e9] mb-6" size={48} />
              <h3 className="text-lg font-bold text-[#0c4a6e] mb-4">Net Sonuçlar</h3>
              <p className="text-sm text-slate-500 leading-relaxed">%70'e varan maliyet düşüşü ve %40'a varan verimlilik artışı hedefi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-[#0ea5e9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title font-heading text-white uppercase tracking-tight mb-8">
            Dönüşümü <span className="text-[#0c4a6e]">Birlikte</span> Başlatalım
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/iletisim"
              className="bg-[#0c4a6e] text-white px-10 py-4 rounded-xl font-semibold uppercase tracking-wider text-sm flex items-center gap-2 hover:bg-[#0c4a6e]/90 transition-all shadow-xl shadow-black/10"
            >
              İletişime Geç <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;