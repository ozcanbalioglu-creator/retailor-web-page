import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import PromptGenerator from '../components/PromptGenerator';

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden bg-white">
    {/* Background Image and Overlay */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        src="/assets/retailorHero.webp"
        alt="Retailor Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
    </div>
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-[#0ea5e9]/20 blur-[130px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#f59e0b]/20 blur-[130px] rounded-full animate-pulse delay-700"></div>
    </div>
    <div className="relative z-20 text-center max-w-5xl mx-auto">
      <div className="inline-block px-5 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full mb-10 animate-in fade-in slide-in-from-top-6 duration-1000 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-wider text-white">Retail 3.0 Dönüşümü Başladı</span>
      </div>
      <h1 className="hero-text font-heading tracking-tight uppercase mb-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both text-white drop-shadow-2xl">
        Perakende<br />
        <span className="text-[#0ea5e9]">Yapay Zeka</span><br />
        İle Yeniden
      </h1>
      <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-14 font-normal animate-in fade-in slide-in-from-bottom-14 duration-1000 fill-mode-both delay-200 opacity-100 drop-shadow-lg">
        Eğitimden satış koçluğuna, kurumsal stratejiden veri analitiğine kadar perakendenin her aşamasında AI gücü.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-20 duration-1000 fill-mode-both delay-400">
        <Link to="/prompt-kutuphanesi" className="bg-[#f59e0b] text-white px-8 py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm hover:bg-[#d97706] transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98] hover:-translate-y-1">Ücretsiz Prompt</Link>
        <Link to="/hizmetler/sales-mentor-ai" className="backdrop-blur-md bg-white/10 border border-white/30 px-8 py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm transition-all hover:bg-white/20 text-white active:scale-[0.98] hover:border-[#0ea5e9]">Hizmetleri Keşfet</Link>
      </div>
    </div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/50 animate-float z-20">
      <span className="text-xs uppercase tracking-wider font-medium text-white/60">Keşfet</span>
      <div className="w-px h-16 bg-gradient-to-b from-[#0ea5e9] via-[#0ea5e9]/50 to-transparent"></div>
    </div>
  </section>

);

const FeatureCards = () => (
  <section className="py-32 px-6 max-w-[1400px] mx-auto">
    <div className="text-center mb-16 reveal-on-scroll">
      <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tight mb-6">Veridiğimiz Hizmetler</h2>
      <div className="w-24 h-1.5 bg-[#f59e0b] mx-auto rounded-full shadow-sm shadow-[#f59e0b]/20"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {SERVICES.map((s, idx) => {
        const Icon = (Icons as any)[s.icon] || Icons.Zap;
        return (
          <div
            key={s.id}
            className={`isometric-card reveal-on-scroll group relative h-[450px] md:h-[500px] bg-white border border-slate-100 rounded-2xl p-8 md:p-10 flex flex-col justify-end ${idx % 2 !== 0 ? 'md:mt-[50px]' : ''}`}
            style={{
              transitionDelay: `${idx * 100}ms`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 via-transparent to-[#f59e0b]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#f8fafc] border border-slate-50 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-125 group-hover:bg-[#0c4a6e] group-hover:text-white transition-all duration-700 shadow-sm text-[#0ea5e9] group-hover:rotate-[15deg]">
                <Icon size={32} />
              </div>

              <h3 className="text-xl font-bold mb-6 uppercase tracking-tight text-[#0c4a6e] group-hover:text-[#0ea5e9] transition-colors leading-snug">{s.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed mb-10 font-normal">
                {s.description}
              </p>

              <Link to={s.path} className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#f59e0b] hover:text-[#0c4a6e] transition-all group/link">
                Detaylar <Icons.ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="absolute top-10 right-10 text-8xl font-bold text-[#0ea5e9]/10 select-none group-hover:text-[#0ea5e9]/20 transition-colors pointer-events-none">
              0{idx + 1}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

const ClientLogos = () => (
  <section className="py-32 bg-white border-y border-slate-50 overflow-hidden relative">
    <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center reveal-on-scroll">
      <p className="text-xs uppercase tracking-wider font-medium text-slate-300">Memnun İş Birliği Yaptığımız Firmalar</p>
    </div>
    <div className="flex animate-marquee whitespace-nowrap items-center">
      {
        [
          'Alliance_Logo_Gri.webp',
          'Aris_Logo_Gri.webp',
          'Bayer_Logo_Gri.webp',
          'CarrefourSA_Logo_Gri.webp',
          'HYS_Logo_Gri.webp',
          'Ozhan_Logo_Gri.webp',
        ].concat(
          [
            'Alliance_Logo_Gri.webp',
            'Aris_Logo_Gri.webp',
            'Bayer_Logo_Gri.webp',
            'CarrefourSA_Logo_Gri.webp',
            'HYS_Logo_Gri.webp',
            'Ozhan_Logo_Gri.webp',
          ]
        ).map((logo, i) => (
          <img
            key={i}
            src={`/assets/${logo}`}
            alt={`Client Logo ${logo}`}
            className="h-12 object-contain mx-8"
          />
        ))}
    </div>
    <style>{`
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite; /* Adjusted speed */
  width: 200%; /* Ensure content fills 2x width for seamless loop */
}
.animate-marquee:hover {
  animation-play-state: paused;
}
`}</style>
  </section>
);

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f8fafc]">
      <Hero />
      <FeatureCards />
      <section id="prompt-tool" className="py-20 md:py-40 px-4 sm:px-6 max-w-5xl mx-auto reveal-on-scroll">
        <PromptGenerator />
      </section>
      <ClientLogos />
    </div>
  );
};

export default Home;