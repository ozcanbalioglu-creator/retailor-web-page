import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    TrendingUp, MessageSquare, BarChart, UserCheck, ArrowRight,
    Lightbulb, Settings, Users, PieChart, Clock, Target,
    ShieldCheck, Activity, BookOpen, Calculator, FileText,
    CreditCard, ShoppingBag, Eye, Heart, Calendar, CheckCircle2,
    Briefcase, UserPlus
} from 'lucide-react';

const SalesMentorAI = () => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const images = [
        '/assets/freepik__35mm-film-photography-professional-business-traini__10266.webp',
        '/assets/retailorHero.webp'
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
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0ea5e9]/5 blur-[120px]"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-[#0ea5e9] text-sm font-bold uppercase tracking-widest border border-blue-100">
                            YAPAY ZEKA DESTEKLİ PERAKENDE ASİSTANI
                        </div>
                        <h1 className="hero-text font-heading uppercase tracking-tighter mb-8 text-[#0c4a6e]">
                            Oryantasyondan Satışa<br />
                            <span className="text-[#0ea5e9]">Her Adımda Yanınızda</span>
                        </h1>
                        <p className="text-xl text-[#475569] font-normal leading-relaxed mb-12 max-w-lg">
                            RetailMentor AI, kişiselleştirilmiş eğitim ve operasyonel destek gücüyle, perakende ekiplerinizi her müşteri etkileşiminde daha etkili hale getirir.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/iletisim" className="bg-[#f59e0b] text-white px-10 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider hover:bg-[#d97706] transition-all shadow-md active:scale-[0.98]">Demo Talep Et</Link>
                            <a href="#nasil-calisir" className="border border-slate-200 text-[#0c4a6e] px-10 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider hover:border-[#0c4a6e] transition-all active:scale-[0.98]">Nasıl Çalışır?</a>
                        </div>
                    </div>
                    <div className="relative group animate-in fade-in slide-in-from-right-10 duration-1000 aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
                        <div className="absolute -inset-4 bg-[#0ea5e9]/10 rounded-3xl blur-2xl group-hover:bg-[#0ea5e9]/20 transition-all z-0"></div>
                        {images.map((img, index) => (
                            <img
                                key={img}
                                src={img}
                                alt={`Sales Mentor AI ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-10 ${index === currentImgIndex ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 1. Sektör Beklentileri */}
            <section className="py-32 px-6 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#0ea5e9] uppercase tracking-[0.2em] mb-4">PERAKENDE SEKTÖRÜNDEKİ ZORLUKLAR</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">Sektör Beklentileri</h2>
                        <div className="w-20 h-1 bg-[#f59e0b] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Lightbulb size={24} />,
                                title: "Sürdürülebilir Eğitim",
                                items: ["Yüksek personel devir oranında hızlı oryantasyon", "Güncel prosedürlere kolay erişim", "Pozisyon bazlı sürekli eğitim", "Yeni başlayanlar için hızlı adaptasyon"]
                            },
                            {
                                icon: <Settings size={24} />,
                                title: "Saha Operasyon Standartları",
                                items: ["Şirket prosedürlerinin doğru uygulanması", "Marka standartlarının korunması", "Operasyonel tutarlılık", "İş akışlarının optimize edilmesi"]
                            },
                            {
                                icon: <Users size={24} />,
                                title: "Müşteri Deneyimi",
                                items: ["Zor müşteri durumlarına çözüm", "Ürün bilgisi ile satış entegrasyonu", "İtiraz yönetimi ve ikna becerileri", "Role-play ile pratik yapma"]
                            },
                            {
                                icon: <PieChart size={24} />,
                                title: "Veri ve Bilgi Entegrasyonu",
                                items: ["Kar marjı, stok devir hesaplamaları", "Kampanya performans analizi", "KPI analizi", "Gerçek zamanlı operasyonel bilgi"]
                            }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                <div className="w-12 h-12 bg-blue-50 text-[#0ea5e9] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {card.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#0c4a6e] mb-6 uppercase tracking-tight">{card.title}</h3>
                                <ul className="space-y-3">
                                    {card.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs text-[#64748b] leading-relaxed">
                                            <div className="min-w-[4px] h-[4px] rounded-full bg-[#f59e0b] mt-1.5"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Hedef: Mükemmel Perakende Ekibi */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-4">ÇÖZÜM</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">
                            Hedef: <span className="text-[#0ea5e9]">Mükemmel Perakende Ekibi</span>
                        </h2>
                        <p className="mt-6 text-[#64748b] max-w-2xl mx-auto">
                            RetailMentor AI ile ekibinizin tüm ihtiyaçlarını karşılayın ve operasyonel mükemmelliği yakalayın.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Güncel Operasyonel Bilgiye Anında Erişim",
                                desc: "Prosedürler, ürün bilgileri, fiyatlandırma ve kampanyalara anında erişim. Mağazada güven kazandırır, soruları hızla yanıtlar."
                            },
                            {
                                title: "Kişiselleştirilmiş Eğitim ve Gelişim",
                                desc: "Her pozisyonun bireysel ihtiyaçlarına göre mikro öğrenme ve kişiye özel gelişim planı. Bilgiyi kalıcı hale getirir."
                            },
                            {
                                title: "İşbaşı Öncesi Hazırlık ve Sonrası Takip",
                                desc: "İşbaşı yapmadan önce tüm güncel bilgiler aktarılır, hatırlatılır ve mini testler ile bilgi taze kalır."
                            },
                            {
                                title: "Zor Müşteri Yönetimi ve İletişim Standartları",
                                desc: "Tüm müşteri talepleri için aynı standartta, marka diline uygun, ikna edici yanıtlar. Role-play ile pratik yapma olanağı."
                            }
                        ].map((benefit, idx) => (
                            <div key={idx} className="relative p-8 rounded-3xl bg-[#f8fafc] border border-slate-100 overflow-hidden group hover:border-[#0ea5e9]/30 transition-colors">
                                <div className={`absolute top-0 left-0 w-1 h-full ${idx % 2 === 0 ? 'bg-[#0ea5e9]' : 'bg-[#f59e0b]'}`}></div>
                                <h3 className="text-lg font-bold text-[#0c4a6e] mb-4 uppercase tracking-tight">{benefit.title}</h3>
                                <p className="text-sm text-[#64748b] leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Sahada Kullanım Alanları */}
            <section className="py-32 px-6 bg-[#f8fafc]" id="nasil-calisir">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#0ea5e9] uppercase tracking-[0.2em] mb-4">KULLANIM SENARYOLARI</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">Sahada Kullanım Alanları</h2>
                        <div className="w-20 h-1 bg-[#f59e0b] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <BookOpen size={24} />,
                                title: "Hızlı Oryantasyon",
                                desc: "Yeni çalışanlar prosedürleri, ürün bilgilerini ve mağaza operasyonlarını hızla öğrenir."
                            },
                            {
                                icon: <Users size={24} />,
                                title: "Role-Play Eğitimi",
                                desc: "Zor müşteri, iade talebi gibi senaryolarda sistem ile pratik yaparak gerçek durumlara hazırlanır."
                            },
                            {
                                icon: <Calculator size={24} />,
                                title: "Operasyonel Hesaplar",
                                desc: "Kar marjı, stok devir günleri gibi kritik KPI hesaplama mantıklarına anında ulaşır."
                            },
                            {
                                icon: <FileText size={24} />,
                                title: "Prosedür Rehberliği",
                                desc: "Tedarikçi görüşmeleri, iade süreçleri gibi konularda şirket politikasına uygun yönlendirme alır."
                            }
                        ].map((useCase, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:translate-y-[-8px] transition-all duration-300 group">
                                <div className="w-12 h-12 bg-slate-50 text-[#0c4a6e] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0c4a6e] group-hover:text-white transition-colors">
                                    {useCase.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#0c4a6e] mb-4 uppercase tracking-tight">{useCase.title}</h3>
                                <p className="text-sm text-[#64748b] leading-relaxed">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Modüler Yapı - 6 Pozisyon */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-4">6 FARKLI POZİSYON İÇİN</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">Modüler Yapı: Pozisyona Özel Mentor</h2>
                        <div className="w-20 h-1 bg-[#0ea5e9] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { id: "01", color: "blue", title: "Satış Danışmanı", items: ["Ürün özellikleri ve fiyat", "Müşteri itiraz yönetimi", "Alternatif ürün önerme", "Role-play: Zor müşteri"] },
                            { id: "02", color: "amber", title: "Mağaza Yöneticisi", items: ["Vardiya planlaması", "Performans raporları (KPI)", "Stok yönetimi ve sipariş", "Ekip motivasyonu"] },
                            { id: "03", color: "blue", title: "Kasiyer", items: ["Ödeme ve sorun giderme", "Kampanya uygulama kuralları", "İade/değişim prosedürleri", "Müşteri karşılama"] },
                            { id: "04", color: "amber", title: "Satın Alım", items: ["Tedarikçi görüşme rehberi", "Stratejik yönlendirme", "Role-play senaryoları", "KPI hesaplama"] },
                            { id: "05", color: "blue", title: "Görsel Düzenleme", items: ["Planogram prensipleri", "Marka standartları", "Sezonsal düzenlemeler", "Raf verimliliği analizi"] },
                            { id: "06", color: "amber", title: "İK / Eğitim", items: ["İşe alım süreci rehberi", "Performans değerlendirme", "Eğitim planlaması", "Yasal mevzuat bilgileri"] }
                        ].map((pos, idx) => (
                            <div key={idx} className="bg-[#f8fafc] p-10 rounded-[2.5rem] border border-slate-100 relative group overflow-hidden">
                                <div className="absolute top-6 right-8 text-4xl font-heading text-[#0c4a6e]/5 group-hover:text-[#0c4a6e]/10 transition-colors">{pos.id}</div>
                                <div className={`w-12 h-1 mb-8 ${pos.color === 'blue' ? 'bg-[#0ea5e9]' : 'bg-[#f59e0b]'}`}></div>
                                <h3 className="text-xl font-bold text-[#0c4a6e] mb-8 uppercase tracking-tight">{pos.title}</h3>
                                <ul className="space-y-4">
                                    {pos.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-[#475569]">
                                            <div className={`w-1.5 h-1.5 rounded-full ${pos.color === 'blue' ? 'bg-[#0ea5e9]' : 'bg-[#f59e0b]'}`}></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Yapay Zeka Teknolojisi */}
            <section className="py-32 px-6 bg-[#0c4a6e] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#0ea5e9]/10 blur-[100px]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-4">TEKNOLOJİ</div>
                        <h2 className="section-title font-heading text-white uppercase tracking-tighter">
                            Yapay Zeka <span className="text-[#f59e0b]">Asistanı</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { icon: <BookOpen size={40} />, text: "Şirket prosedürleri, ürün kataloğu ve fiyat listeleriyle gerçek verilerle yönlendirir." },
                            { icon: <Target size={40} />, text: "Her çalışanın öğrenim stiline göre bilgiyi aktarır. Kişiselleştirilmiş içerik sunar." },
                            { icon: <Activity size={40} />, text: "Vardiya sonrası performans özetini değerlendirip, gelişim önerileri getirir." }
                        ].map((feat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-20 h-20 bg-white/5 border border-white/10 text-[#f59e0b] rounded-3xl flex items-center justify-center mb-8">
                                    {feat.icon}
                                </div>
                                <p className="text-white/80 text-lg font-light leading-relaxed max-w-xs">{feat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Kurulum - Timeline */}
            <section className="py-32 px-6 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-sm font-bold text-[#0ea5e9] uppercase tracking-[0.2em] mb-4">KURULUM</div>
                        <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter">4 Haftada Devreye Alın</h2>
                        <div className="w-20 h-1 bg-[#f59e0b] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "GÜN 1", title: "İhtiyaç Analizi", desc: "Pilot modül seçimi" },
                            { step: "HAFTA 1", title: "Özelleştirme", desc: "Test süreçleri" },
                            { step: "HAFTA 2-3", title: "Pilot Grup Deneme", desc: "Geri bildirim toplama" },
                            { step: "HAFTA 3-4", title: "İyileştirmeler", desc: "Şirket geneli lansman" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 relative group">
                                <div className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest mb-4 group-hover:scale-110 transition-transform inline-block">{item.step}</div>
                                <h3 className="text-lg font-bold text-[#0c4a6e] mb-2 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-sm text-[#64748b]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0c4a6e] to-[#0ea5e9] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.2em] mb-8">HEMEN BAŞLAYIN</div>
                        <h2 className="text-3xl md:text-5xl font-heading text-white uppercase tracking-tighter mb-8 leading-tight">
                            Perakende Ekibinizi <br /><span className="text-[#f59e0b]">4 Haftada</span> Dönüştürün
                        </h2>
                        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            RetailMentor AI, oryantasyondan satışa her adımda perakende ekiplerinizin yanında. Demo talep edin ve farkı görün.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/iletisim" className="bg-[#f59e0b] text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-[#0c4a6e] transition-all hover:scale-105 shadow-xl">
                                Demo Talep Et
                            </Link>
                            <Link to="/iletisim" className="border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-wider text-xs hover:bg-white/10 transition-all">
                                İletişime Geç
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SalesMentorAI;
