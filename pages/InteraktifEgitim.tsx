import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Brain, CheckCircle2, Target, Users, ArrowRight, Play,
    XCircle, AlertTriangle, Zap, MessageSquare, BarChart3,
    Briefcase, UserPlus, GraduationCap, Settings, Clock,
    ChevronRight, CreditCard, Layers
} from 'lucide-react';

const InteraktifEgitim = () => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const images = [
        '/assets/InteraktifEgitim1.webp',
        '/assets/InteraktifEgitim2.webp'
    ];

    useEffect(() => {
        window.scrollTo(0, 0);

        const timer = setInterval(() => {
            setCurrentImgIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            {/* Hero Section */}
            <section className="py-32 px-6 relative overflow-hidden bg-[#f8fafc] text-[#0c4a6e]">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f59e0b]/5 blur-[120px]"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#0c4a6e]/5 text-[#0c4a6e] text-sm font-bold uppercase tracking-widest border border-[#0c4a6e]/10">
                            INTERACTIVE VIDEO TRAINING
                        </div>
                        <h1 className="hero-text font-heading uppercase tracking-tighter mb-8 text-[#0c4a6e]">
                            Avatar Destekli <br />
                            <span className="text-[#f59e0b]">İnteraktif Eğitim Videoları</span>
                        </h1>
                        <p className="text-xl text-[#0c4a6e]/70 font-normal leading-relaxed mb-12 max-w-lg">
                            Oryantasyon ve ürün eğitimlerini mikro modüller halinde hazırlayın. Bir kez üretin, defalarca kullanın. Personel kendi hızında öğrenir.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#f59e0b] text-white px-10 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider hover:bg-[#d97706] transition-all shadow-md active:scale-[0.98] flex items-center gap-2">
                                <Play size={16} fill="currentColor" /> Demo Videoyu İzle
                            </button>
                            <Link to="/iletisim" className="border border-[#0c4a6e]/20 text-[#0c4a6e] px-10 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider hover:bg-[#0c4a6e]/5 transition-all active:scale-[0.98]">Hemen Başlayın</Link>
                        </div>
                    </div>
                    <div className="relative group animate-in fade-in slide-in-from-right-10 duration-1000 aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
                        <div className="absolute -inset-4 bg-[#f59e0b]/10 rounded-3xl blur-2xl group-hover:bg-[#f59e0b]/20 transition-all z-0"></div>
                        {images.map((img, index) => (
                            <img
                                key={img}
                                src={img}
                                alt={`İnteraktif Eğitim ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-10 ${index === currentImgIndex ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Problem Analysis Section */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#0ea5e9] uppercase tracking-[0.2em] mb-4">SORUN ANALİZİ</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">Perakende Sektöründe Eğitim Sorunu</h2>
                        <div className="w-20 h-1 bg-[#f59e0b] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-[#fff1f2] p-10 rounded-[2.5rem] border border-rose-100">
                            <h3 className="text-xl font-bold text-rose-900 mb-8 flex items-center gap-3">
                                <XCircle className="text-rose-500" /> Klasik Yüz Yüze Eğitimler
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Eğitmen/yönetici zamanı harcanır: Her yeni personel için eğitim tekrarlanır",
                                    "Verimsiz öğrenme: Yeni personel öğrenme sürecinde yavaş kalır",
                                    "Tutarsız kalite: Her eğitmen farklı anlatır, standart sağlanamaz",
                                    "Zaman kaybı: Hem eğitmen hem de personel günlük işlerden kopar"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-sm text-rose-800/80 leading-relaxed">
                                        <div className="min-w-[6px] h-[6px] rounded-full bg-rose-400 mt-2"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-orange-50 p-10 rounded-[2.5rem] border border-orange-100">
                            <h3 className="text-xl font-bold text-orange-900 mb-8 flex items-center gap-3">
                                <AlertTriangle className="text-orange-500" /> Standart Videolu Eğitimler
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Statik ve sıkıcı: Uzun, tek düze videolar ilgi görmez",
                                    "Sahte katılım: Video açık ama personel başka iş yapar",
                                    "Yanıltıcı raporlar: İK katılım oranı raporlar ama gerçek öğrenme düşük",
                                    "Güncelleme zorluğu: Tek bilgi değişse tüm video yeniden çekilir"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-sm text-orange-800/80 leading-relaxed">
                                        <div className="min-w-[6px] h-[6px] rounded-full bg-orange-400 mt-2"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Steps section */}
            <section className="py-32 px-6 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-4">ÇÖZÜM</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">Yeni Nesil İnteraktif Öğrenme Modeli</h2>
                        <div className="w-20 h-1 bg-[#0ea5e9] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", icon: <Users size={24} />, title: "Avatar Desteği", desc: "Dikkat çekici dijital eğitmenler ile daha akılda kalıcı içerikler." },
                            { step: "02", icon: <Zap size={24} />, title: "Mikro Öğrenme", desc: "Öğrenmeyi kolaylaştıran 2-3 dakikalık odaklanmış video modülleri." },
                            { step: "03", icon: <MessageSquare size={24} />, title: "İnteraktif Sorular", desc: "Video içinde anlık sorularla dikkati zinde tutan katılım." },
                            { step: "04", icon: <BarChart3 size={24} />, title: "Analiz & Geri Bildirim", desc: "Kim neyi ne kadar öğrendi? Personel bazlı detaylı raporlama." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm relative group hover:border-[#0ea5e9]/30 transition-all">
                                <div className="absolute top-6 right-6 text-4xl font-heading text-slate-100 group-hover:text-[#0ea5e9]/10">{item.step}</div>
                                <div className="w-12 h-12 bg-slate-50 text-[#0c4a6e] rounded-2xl flex items-center justify-center mb-8">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#0c4a6e] mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#0ea5e9] uppercase tracking-[0.2em] mb-4">ÖRNEK PROJELER</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">Başarı Hikayeleri & Uygulamalar</h2>
                        <div className="w-20 h-1 bg-[#f59e0b] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                label: "CASE STUDY 01",
                                title: "Kasa Noktası Oryantasyonu",
                                desc: "Kasiyerlerin teknik ve davranışsal eğitimleri için hazırlanan 12 modüllük interaktif video serisi.",
                                stats: [
                                    { label: "Oryantasyon Süresi", val: "%50 Azalma" },
                                    { label: "Operasyonel Hata", val: "%30 Düşüş" }
                                ]
                            },
                            {
                                label: "CASE STUDY 02",
                                title: "Zorlu Müşteri Role-Play",
                                desc: "Avatarların canlandırdığı zorlu müşteri senaryolarına personelin verdiği cevaplarla ilerleyen simülasyonlar.",
                                stats: [
                                    { label: "Özgüven Artışı", val: "2.4 Kat" },
                                    { label: "Müşteri Memnuniyeti", val: "+15 Puan" }
                                ]
                            }
                        ].map((project, idx) => (
                            <div key={idx} className="bg-[#f8fafc] p-12 rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all">
                                <div className="text-[#f59e0b] font-bold text-sm tracking-widest mb-4">{project.label}</div>
                                <h3 className="text-2xl font-bold text-[#0c4a6e] mb-6 uppercase tracking-tight">{project.title}</h3>
                                <p className="text-[#64748b] text-sm leading-relaxed mb-10 max-w-md">{project.desc}</p>
                                <div className="grid grid-cols-2 gap-6 pt-10 border-t border-slate-200">
                                    {project.stats.map((stat, sidx) => (
                                        <div key={sidx}>
                                            <div className="text-lg font-bold text-[#0c4a6e]">{stat.val}</div>
                                            <div className="text-sm text-[#64748b] uppercase font-bold tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-32 px-6 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-4">HEDEF KİTLE</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">Kimin İçin Tasarlıyoruz?</h2>
                        <div className="w-20 h-1 bg-[#0ea5e9] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <UserPlus />, title: "Yeni Personel", desc: "Şirket kültürüne ve operasyona en hızlı, en doğru şekilde dahil olmak isteyenler." },
                            { icon: <Briefcase />, title: "Saha Eğitmenleri", desc: "Eğitim yükünü hafifletmek ve personeline 7/24 destek sunmak isteyen yöneticiler." },
                            { icon: <GraduationCap />, title: "İK & Eğitim Müdürleri", desc: "Eğitim kalitesini standardize etmek ve gerçek zamanlı ölçüm yapmak isteyen profesyoneller." }
                        ].map((aud, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 text-center flex flex-col items-center">
                                <div className="w-16 h-16 bg-blue-50 text-[#0ea5e9] rounded-2xl flex items-center justify-center mb-8">
                                    {aud.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#0c4a6e] mb-4 uppercase tracking-tight">{aud.title}</h3>
                                <p className="text-xs text-[#64748b] leading-relaxed">{aud.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#0ea5e9] uppercase tracking-[0.2em] mb-4">UYGULAMA SÜRECİ</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">İçerik Üretim Yolculuğu</h2>
                        <div className="w-20 h-1 bg-[#f59e0b] mx-auto mt-6"></div>
                    </div>

                    <div className="space-y-12">
                        {[
                            { step: "01", title: "İhtiyaç Analizi & Senaryo", duration: "1 Hafta", items: ["Eğitim başlıklarını belirleme", "Avatar seçimi ve dil tonu ayarı", "İnteraktif soru kurguları"] },
                            { step: "02", title: "Prodüksiyon & Düzenleme", duration: "2 Hafta", items: ["Avatar video üretimleri", "Grafik ve görsel destekler", "LMS (Eğitim Sistemi) entegrasyonu"] },
                            { step: "03", title: "Yaygınlaştırma & Analiz", duration: "Süreç", items: ["Personel erişimine açma", "Öğrenme metriklerini takip", "İyileştirme raporları"] }
                        ].map((proc, idx) => (
                            <div key={idx} className="flex gap-8 group">
                                <div className="w-16 h-16 min-w-[64px] bg-[#0c4a6e] text-white rounded-full flex items-center justify-center font-heading text-xl shadow-xl shadow-[#0c4a6e]/20 group-hover:scale-110 transition-transform">
                                    {proc.step}
                                </div>
                                <div className="bg-[#f8fafc] p-10 rounded-[2.5rem] border border-slate-100 flex-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 px-6 py-2 bg-[#f59e0b]/10 text-[#f59e0b] text-sm font-bold rounded-bl-2xl">
                                        {proc.duration}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0c4a6e] mb-6 uppercase tracking-tight">{proc.title}</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {proc.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-xs text-[#64748b]">
                                                <ChevronRight size={14} className="text-[#0ea5e9]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Factors 
            <section className="py-32 px-6 bg-[#f8fafc]">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-4">BÜTÇELENDİRME</div>
                                <h3 className="text-3xl font-heading text-[#0c4a6e] uppercase tracking-tighter mb-8">Fiyatlandırma Faktörleri</h3>
                                <p className="text-[#64748b] text-sm leading-relaxed mb-10">
                                    Proje bütçesi, içeriklerin karmaşıklığına ve hacmine göre optimize edilir. Esnek paketlerimizle her ölçekteki işletmeye uygun çözümler sunuyoruz.
                                </p>
                                <Link to="/iletisim" className="inline-flex items-center gap-2 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                                    Fiyat Teklifi Alın <ArrowRight size={16} />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { icon: <Clock />, title: "Video Süresi", desc: "Toplam modül sayısı ve dakika." },
                                    { icon: <Layers />, title: "Modül Sayısı", desc: "Konu başlıklarının derinliği." },
                                    { icon: <Users />, title: "Avatar Sayısı", desc: "Kullanılan karakter çeşitliliği." },
                                    { icon: <Settings />, title: "Entegrasyon", desc: "Kullanılan platform desteği." }
                                ].map((fact, idx) => (
                                    <div key={idx} className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-50">
                                        <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#0ea5e9] mb-4">
                                            {fact.icon}
                                        </div>
                                        <h4 className="text-xs font-bold text-[#0c4a6e] mb-2 uppercase">{fact.title}</h4>
                                        <p className="text-sm text-[#64748b]">{fact.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}

            {/* Video Showcase Section */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-4">DENEYİMLE</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">Avatar Eğitimleri Nasıl Görünür?</h2>
                        <div className="w-20 h-1 bg-[#0ea5e9] mx-auto mt-6"></div>
                    </div>

                    <div className="relative group max-w-5xl mx-auto">
                        <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(12,74,110,0.3)] border-8 border-white aspect-video group-hover:scale-[1.01] transition-transform duration-500">
                            {!isVideoPlaying ? (
                                <div
                                    className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer bg-slate-900/40 group-hover:bg-slate-900/20 transition-all duration-500"
                                    onClick={() => setIsVideoPlaying(true)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e]/80 to-transparent z-10"></div>
                                    <img
                                        src="/assets/InteraktifEgitim1.webp"
                                        alt="Video Cover"
                                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                                    />
                                    <div className="relative z-30 w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center group/play transition-all duration-300 hover:scale-110 hover:bg-[#f59e0b]">
                                        <Play size={40} className="text-white fill-current ml-2 group-hover/play:scale-90 transition-transform" />
                                    </div>
                                    <div className="relative z-30 mt-8 text-white font-bold uppercase tracking-[0.3em] text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                        Videonun Tadına Bakın
                                    </div>
                                </div>
                            ) : (
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    src="/assets/EgitimTanitimVideosu.mp4"
                                >
                                    Tarayıcınız video etiketini desteklemiyor.
                                </video>
                            )}
                        </div>
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#f59e0b]/20 blur-[100px] rounded-full"></div>
                        <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-[#0ea5e9]/20 blur-[100px] rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0c4a6e] to-[#0ea5e9] rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-heading uppercase tracking-tighter mb-8">
                            Eğitimi <span className="text-[#f59e0b]">İnteraktif</span> Hale Getirin
                        </h2>
                        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Yapay zeka asistanları ve interaktif video modellerimizle saha ekiplerinizin başarı oranını artırın.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/iletisim" className="bg-[#f59e0b] text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-[#0c4a6e] transition-all hover:scale-105 shadow-xl">
                                🎯 Demo Talep Edin
                            </Link>
                            <Link to="/iletisim" className="border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-wider text-xs hover:bg-white/10 transition-all">
                                📞 Bizimle İletişime Geçin
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InteraktifEgitim;
