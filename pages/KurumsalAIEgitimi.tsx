import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Award, ShieldCheck, Zap, Globe, ArrowRight, Users,
    Calendar, Target, ShoppingBag, Brain, BarChart3,
    Scale, Heart, Package, Store, RefreshCw, Map,
    TrendingUp, Wallet, Clock, UserCheck
} from 'lucide-react';

const KurumsalAIEgitimi = () => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const images = [
        'assets/freepik__35mm-film-photography-abstract-neural-network-visu__5396.webp',
        'assets/retailorHero.webp'
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
            <section className="py-32 px-6 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f59e0b]/5 blur-[120px]"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-amber-50 text-[#f59e0b] text-sm font-bold uppercase tracking-widest border border-amber-100">
                            EXECUTIVE TRAINING PROGRAM
                        </div>
                        <h1 className="hero-text font-heading uppercase tracking-tighter mb-8 text-[#0c4a6e]">
                            Yapay Zeka ile Yönetici Gibi <br />
                            <span className="text-[#f59e0b]">Düşünün, Karar Verin, Yönetin</span>
                        </h1>
                        <p className="text-xl text-[#475569] font-normal leading-relaxed mb-12 max-w-lg">
                            Perakende Yöneticileri için 3 Günlük AI Dönüşüm Eğitimi. AI-Augmented Leadership odaklı stratejik gelişim programı.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-12">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#0c4a6e]">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 uppercase font-bold">Hedef Kitle</div>
                                    <div className="text-sm font-bold text-[#0c4a6e]">C & Mid-Level</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#0c4a6e]">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 uppercase font-bold">Süre</div>
                                    <div className="text-sm font-bold text-[#0c4a6e]">3 GÜN</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/iletisim" className="bg-[#0c4a6e] text-white px-10 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider hover:bg-[#0ea5e9] transition-all shadow-md active:scale-[0.98]">Teklif Alın</Link>
                            <a href="#program" className="border border-slate-200 text-[#0c4a6e] px-10 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider hover:border-[#0c4a6e] transition-all active:scale-[0.98]">Program Detayları</a>
                        </div>
                    </div>
                    <div className="relative group animate-in fade-in slide-in-from-right-10 duration-1000 aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
                        <div className="absolute -inset-4 bg-[#f59e0b]/10 rounded-3xl blur-2xl group-hover:bg-[#f59e0b]/20 transition-all z-0"></div>
                        {images.map((img, index) => (
                            <img
                                key={img}
                                src={img}
                                alt={`Kurumsal AI Eğitimi ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-10 ${index === currentImgIndex ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="py-32 px-6 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-4">KİMLER İÇİN</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">Bu Eğitim Kimler İçin Tasarlandı?</h2>
                        <div className="w-20 h-1 bg-[#0ea5e9] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <UserCheck size={24} />,
                                title: "C-Level Yöneticiler",
                                items: ["CEO, COO, CIO", "Genel Müdürler", "İcra Kurulu Üyeleri", "Bölge Direktörleri"]
                            },
                            {
                                icon: <Users size={24} />,
                                title: "Orta Kademe Yöneticiler",
                                items: ["Mağaza/Operasyon Müdürleri", "Kategori Müdürleri", "İK Müdürleri", "Pazarlama ve Satış Müdürleri"]
                            },
                            {
                                icon: <Award size={24} />,
                                title: "Vizyoner Liderler",
                                items: ["AI ile yönetim becerisi isteyenler", "Veri odaklı karar almak isteyenler", "Dijital dönüşüm liderleri", "Kariyer geliştirme hedefi olanlar"]
                            }
                        ].map((audience, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-amber-50 text-[#f59e0b] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {audience.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0c4a6e] mb-6 uppercase tracking-tight">{audience.title}</h3>
                                <ul className="space-y-3">
                                    {audience.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-[#64748b]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Structure - 3 Days */}
            <section className="py-32 px-6 bg-white" id="program">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#0ea5e9] uppercase tracking-[0.2em] mb-4">PROGRAM YAPISI</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">3 Günlük Dönüşüm Yolculuğu</h2>
                        <div className="w-20 h-1 bg-[#f59e0b] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {[
                            {
                                day: "GÜN 1",
                                title: "AI ile Düşünme & Karar Temelleri",
                                subtitle: "Yapay zeka destekli yönetici zihniyeti oluşturma",
                                modules: [
                                    { icon: <Brain size={20} />, title: "Paradigma Değişimi", desc: "Geleneksel yönetimden AI destekli liderliğe geçiş" },
                                    { icon: <BarChart3 size={20} />, title: "Perakendede AI Manzarası", desc: "Sektörün mevcut durumu ve başarı hikayeleri" },
                                    { icon: <Scale size={20} />, title: "Karar Çerçeveleri", desc: "AI içgörüleri ile insan yargısını birleştirme" }
                                ]
                            },
                            {
                                day: "GÜN 2",
                                title: "AI ile Operasyonel Mükemmellik",
                                subtitle: "Verimlilik, müşteri deneyimi ve performans",
                                modules: [
                                    { icon: <Heart size={20} />, title: "Müşteri Deneyimi", desc: "Ölçeklenebilir kişiselleştirme ve AI tavsiye sistemleri" },
                                    { icon: <Users size={20} />, title: "İşgücü Yönetimi", desc: "Akıllı vardiya planlama ve performans optimizasyonu" },
                                    { icon: <Package size={20} />, title: "Envanter & Tedarik Zinciri", desc: "Talep tahmini ve otomatik ikmal sistemleri" },
                                    { icon: <Store size={20} />, title: "Mağaza Operasyonları", desc: "Otomasyon, raf yönetimi ve kayıp önleme" }
                                ]
                            },
                            {
                                day: "GÜN 3",
                                title: "AI ile Takım Liderliği & Değişim",
                                subtitle: "Dönüşümü yönetme ve ekipleri geliştirme",
                                modules: [
                                    { icon: <Target size={20} />, title: "Liderlik Geliştirme", desc: "AI destekli koçluk ve performans yönetimi" },
                                    { icon: <RefreshCw size={20} />, title: "Değişim Yönetimi", desc: "Ekip adaptasyonu ve dönüşüm stratejileri" },
                                    { icon: <Map size={20} />, title: "Uygulama Yol Haritası", desc: "90 günlük pratik çerçeve ve eylem planı" }
                                ]
                            }
                        ].map((dayProg, idx) => (
                            <div key={idx} className="bg-[#f8fafc] rounded-[3rem] p-12 border border-slate-100 flex flex-col lg:flex-row gap-12 group hover:border-[#f59e0b]/30 transition-colors">
                                <div className="lg:w-1/3">
                                    <div className="text-[#f59e0b] font-bold text-xs tracking-widest mb-4">{dayProg.day}</div>
                                    <h3 className="text-2xl font-bold text-[#0c4a6e] mb-4 uppercase tracking-tight">{dayProg.title}</h3>
                                    <p className="text-[#64748b] text-sm leading-relaxed">{dayProg.subtitle}</p>
                                </div>
                                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {dayProg.modules.map((mod, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-10 h-10 min-w-[40px] bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0ea5e9]">
                                                {mod.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0c4a6e] mb-1 uppercase">{mod.title}</h4>
                                                <p className="text-[11px] text-[#64748b] leading-snug">{mod.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Competencies */}
            <section className="py-32 px-6 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-4">TEMEL YETKİNLİKLER</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">AI Destekli Yönetici Olma Yolunda 5 Yetkinlik</h2>
                        <div className="w-20 h-1 bg-[#0ea5e9] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { id: 1, title: "Veri Okuryazarlığı", desc: "AI içgörülerini yorumlama, veri sınırlamalarını anlama ve algoritmaların ne zaman güvenilir olduğunu bilme." },
                            { id: 2, title: "Stratejik Düşünme", desc: "AI'ı insan yargısıyla birleştirerek daha iyi kararlar alma. Veri analizi ile deneyimi harmanlama." },
                            { id: 3, title: "Değişim Liderliği", desc: "Ekipleri AI dönüşümü boyunca empati ile yönlendirme. Endişeleri ele alma ve destekleyici ortamlar yaratma." },
                            { id: 4, title: "Dijital Akıcılık", desc: "Teknik uzmanlık gerektirmeden AI yeteneklerini anlama. Neyin mümkün olduğunu bilme ve doğru soruları sorma." },
                            { id: 5, title: "Duygusal Zeka", desc: "AI destekli dünyada insan bağlantısını sürdürme. Güven inşa etme ve takımlara ilham verme." }
                        ].map((comp, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 relative group overflow-hidden">
                                <div className="text-6xl font-heading text-[#f59e0b]/10 absolute -top-2 -right-2 group-hover:text-[#f59e0b]/20 transition-colors">{comp.id}</div>
                                <h3 className="text-base font-bold text-[#0c4a6e] mb-4 relative z-10">{comp.title}</h3>
                                <p className="text-xs text-[#64748b] leading-relaxed relative z-10">{comp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Impact Statistics */}
            <section className="py-32 px-6 bg-[#0c4a6e] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#0ea5e9]/10 blur-[100px]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-4">İŞ ETKİSİ</div>
                        <h2 className="section-title font-heading text-white uppercase tracking-tighter">Somut ve Ölçülebilir Faydalar</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { icon: <TrendingUp size={32} />, stat: "87%", label: "Gelir Artışı", desc: "Perakendecilerin %87'si AI'dan pozitif gelir etkisi rapor ediyor" },
                            { icon: <Wallet size={32} />, stat: "94%", label: "Maliyet Düşürme", desc: "Perakendecilerin %94'ü AI ile operasyonel maliyetleri azalttı" },
                            { icon: <BarChart3 size={32} />, stat: "6-10%", label: "Gelir Büyümesi", desc: "AI destekli kişiselleştirme %6-10 gelir artışı sağlıyor" },
                            { icon: <Clock size={32} />, stat: "-40%", label: "Admin Zamanı", desc: "Yöneticiler admin görevlere %40 daha az zaman harcıyor" }
                        ].map((impact, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="w-16 h-16 bg-white/5 border border-white/10 text-[#f59e0b] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    {impact.icon}
                                </div>
                                <div className="text-4xl font-heading text-white mb-2">{impact.stat}</div>
                                <div className="text-[#f59e0b] font-bold text-xs uppercase tracking-wider mb-4">{impact.label}</div>
                                <p className="text-white/60 text-xs leading-relaxed max-w-[200px]">{impact.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Roadmap - 90 Days */}
            <section className="py-32 px-6 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#0ea5e9] uppercase tracking-[0.2em] mb-4">UYGULAMA YOL HARİTASI</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">Eğitim Sonrası 90 Günlük Eylem Planı</h2>
                        <div className="w-20 h-1 bg-[#f59e0b] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { phase: "FAZ 1", time: "Gün 1-30", title: "Değerlendirme & Pilot", items: ["Mevcut operasyonları denetle", "Ağrı noktalarını belirle", "Yüksek etki, düşük karmaşıklık seç", "Kontrollü ortamda pilot çalıştır"] },
                            { phase: "FAZ 2", time: "Gün 31-60", title: "Ölçme & İyileştirme", items: ["Pilot sonuçlarını metriklerle karşılaştır", "Ekip ve müşteriden geri bildirim al", "İyileştirme alanlarını belirle", "En iyi uygulamaları belgele"] },
                            { phase: "FAZ 3", time: "Gün 61-90", title: "Ölçeklendirme & Plan", items: ["Başarılı pilotları genişlet", "Kazanımları kutla ve paylaş", "Sonraki AI girişimlerini planla", "Sürekli iyileştirme süreçlerini kur"] }
                        ].map((phase, idx) => (
                            <div key={idx} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm relative group overflow-hidden">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <div className="text-[#f59e0b] font-bold text-sm tracking-widest mb-1">{phase.phase}</div>
                                        <div className="text-slate-400 text-xs font-semibold">{phase.time}</div>
                                    </div>
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#0c4a6e]">
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-[#0c4a6e] mb-8 uppercase tracking-tight">{phase.title}</h3>
                                <ul className="space-y-4">
                                    {phase.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-xs text-[#64748b]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mt-1.5"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0c4a6e] to-[#f59e0b] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <div className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8">AI DÖNÜŞÜMÜNE BUGÜN BAŞLAYIN</div>
                        <h2 className="text-3xl md:text-5xl font-heading text-white uppercase tracking-tighter mb-8 leading-tight">
                            Perakende Sektöründe <br /><span className="text-white">AI Destekli Liderliğe</span> Öncülük Edin
                        </h2>
                        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            2026'da rakiplerinizin önünde olun. Profesyonel yönetim kadronuzu yapay zeka çağına hazırlayın.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/iletisim" className="bg-white text-[#0c4a6e] px-12 py-5 rounded-2xl font-bold uppercase tracking-wider text-xs hover:bg-[#0c4a6e] hover:text-white transition-all hover:scale-105 shadow-xl">
                                🎯 Demo Talep Edin
                            </Link>
                            <Link to="/iletisim" className="border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-wider text-xs hover:bg-white/10 transition-all">
                                📞 Detaylı Bilgi Alın
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KurumsalAIEgitimi;
