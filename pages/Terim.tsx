import React, { useState } from 'react';

// Özel SVG İkonları - Projeye Özel Tanımlamalar
const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
);
const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
);
const IconCalculator = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="16" y1="18" x2="16" y2="18"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/></svg>
);
const IconZap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
// Eksik olan ikon eklendi
const IconLightbulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
);
const IconChevronRight = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);

const App = () => {
  // Örnek Terim Verisi (GMROI üzerinden yapılandırıldı)
  const term = {
    titleTr: "Brüt Karın Stok Yatırım Getirisi",
    titleEn: "Gross Margin Return on Investment",
    abbr: "GMROI",
    shortDef: "Bir perakendecinin stoktaki her 1 TL'lik yatırımı karşılığında ne kadar brüt kar elde ettiğini ölçen finansal performans göstergesidir.",
    simpleExplanation: "Düşünün ki bir ayakkabıya 100 TL ödediniz (maliyet) ve onu 150 TL'ye sattınız (50 TL brüt kar). Eğer bu stok yıl boyu 5 kez dönerse, 100 TL'lik yatırımınız size toplamda 250 TL kar getirmiş olur. GMROI bu verimliliği tek bir sayı ile gösterir.",
    whyImportant: "Hangi ürün gruplarının nakit ürettiğini, hangilerinin ise raflarda 'ölü yatırım' olarak beklediğini anlamanızı sağlar. Sadece satış cirosuna değil, karlılık ve stok hızına odaklanmanızı zorunlu kılar.",
    realLifeExample: "Bir markette, kar marjı düşük ama çok hızlı satılan 'Süt' ile, kar marjı yüksek ama yavaş satılan 'Gurme Sos' karşılaştırılırken; GMROI hangisinin işletme için daha verimli olduğunu ortaya koyar.",
    formula: "Brüt Kar / Ortalama Stok Maliyeti",
    calculationExample: "Yıllık Brüt Kar: 50.000 TL | Ortalama Stok Değeri: 20.000 TL => GMROI: 2.5 (Yani stoktaki her 1 TL, size 2.5 TL kar bırakıyor).",
    segments: ["Gıda & Süpermarket", "Moda & Tekstil", "Elektronik"],
    departments: ["Satın Alma", "Kategori Yönetimi", "Finans"],
    confusedTerms: [
      { term: "Stok Devir Hızı", diff: "Sadece ürünün ne kadar hızlı satıldığını ölçer, karlılığı dikkate almaz." },
      { term: "Brüt Kar Marjı", diff: "Sadece satış fiyatı ile maliyet arasındaki farka odaklanır, stok maliyetini ölçmez." }
    ],
    managerTip: "GMROI oranınız 2.00'nin altındaysa, ya marjınızı artırmalı ya da stok devir hızınızı hızlandırmalısınız. Tek başına yüksek marj, düşük devir hızıyla birleştiğinde verimsiz bir yatırım demektir.",
    kpiLinks: ["Stok Devir Hızı (Inventory Turnover)", "Brüt Kar (Gross Margin)", "Stokta Bulunmama Oranı (OOS)"],
    quickSummary: "GMROI, stoktaki her bir liranın size kaç lira kar olarak geri döndüğünü gösteren en kritik verimlilik pusulasıdır.",
    imageUrl: "https://images.unsplash.com/photo-1556740734-7f9a2b77d5ea?auto=format&fit=crop&q=80&w=800"
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans pb-12">
      {/* 1. Başlık Alanı */}
      <header className="bg-white border-b border-gray-200 pt-10 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-black text-indigo-900 leading-tight">
              {term.titleTr}
            </h1>
            <span className="text-xl text-slate-400 font-medium">/ {term.titleEn}</span>
          </div>
          <div className="flex items-center gap-4">
            {term.abbr && (
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md font-bold text-sm tracking-widest">
                {term.abbr}
              </span>
            )}
            <div className="h-4 w-[1px] bg-gray-300"></div>
            <span className="text-slate-500 text-sm font-medium italic">Sektörel Standart Terim</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        
        {/* 2. Kısa Tanım */}
        <section className="bg-indigo-900 text-white p-8 rounded-3xl shadow-xl shadow-indigo-100 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-indigo-200 text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <IconBook /> Kısa Tanım
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
              "{term.shortDef}"
            </p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </section>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-12">
            
            {/* 3. Basit Dille Açıklama */}
            <section>
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <IconInfo /> Ne Anlama Gelir?
              </h3>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                {term.simpleExplanation}
              </div>
            </section>

            {/* 4. Neden Önemlidir? */}
            <section className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
              <h3 className="text-amber-800 font-bold mb-3 flex items-center gap-2">
                <IconTarget /> Neden Önemlidir?
              </h3>
              <p className="text-amber-900/80 leading-relaxed">
                {term.whyImportant}
              </p>
            </section>

            {/* 12. Görsel (Varsa) */}
            {term.imageUrl && (
              <section className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img src={term.imageUrl} alt={term.titleTr} className="w-full h-64 object-cover" />
                <div className="bg-white p-3 text-sm text-slate-400 italic text-center">
                  Görsel: [Stok Yönetimi ve Karlılık Analizi]
                </div>
              </section>
            )}

            {/* 5. Gerçek Hayat Örneği */}
            <section>
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <IconZap /> Gerçek Hayat Örneği
              </h3>
              <div className="bg-slate-800 text-slate-200 p-6 rounded-2xl relative shadow-md">
                <span className="absolute top-4 right-6 text-4xl opacity-20 font-serif">"</span>
                <p className="italic leading-relaxed">
                  {term.realLifeExample}
                </p>
              </div>
            </section>

            {/* 6. Nasıl Hesaplanır? */}
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <IconCalculator /> Nasıl Hesaplanır?
                </h3>
              </div>
              <div className="p-8 text-center">
                <div className="inline-block bg-indigo-50 px-8 py-4 rounded-xl mb-6 border border-indigo-100">
                  <code className="text-2xl font-mono text-indigo-700 font-bold tracking-tighter">
                    {term.formula}
                  </code>
                </div>
                <div className="text-sm text-slate-500 max-w-md mx-auto">
                  <span className="font-bold text-slate-700">Örnek:</span> {term.calculationExample}
                </div>
              </div>
            </section>
          </div>

          {/* Yan Panel */}
          <div className="space-y-8">
            
            {/* 7. Alanlar ve Departmanlar */}
            <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <IconUsers /> Kullanım Alanı
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-500 mb-2">SEGMENTLER</h4>
                  <div className="flex flex-wrap gap-2">
                    {term.segments.map(s => (
                      <span key={s} className="text-sm bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 mb-2">DEPARTMANLAR</h4>
                  <div className="flex flex-wrap gap-2">
                    {term.departments.map(d => (
                      <span key={d} className="text-sm bg-indigo-50 text-indigo-600 px-2 py-1 rounded font-medium border border-indigo-100">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Karıştırılan Terimler */}
            <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 mb-4 border-b pb-2">Karıştırılan Terimler</h3>
              <div className="space-y-4">
                {term.confusedTerms.map(ct => (
                  <div key={ct.term} className="group">
                    <h4 className="text-sm font-bold text-rose-600 group-hover:text-rose-700">{ct.term}</h4>
                    <p className="text-sm text-slate-500 leading-snug mt-1">{ct.diff}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 10. KPI Bağlantısı */}
            <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 mb-4">Bağlantılı KPI'lar</h3>
              <ul className="space-y-2">
                {term.kpiLinks.map(kpi => (
                  <li key={kpi} className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer flex items-center gap-2 transition-colors">
                    <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
                    {kpi}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* 9. Yönetici İpucu */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-3xl text-white shadow-lg shadow-emerald-100">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <IconLightbulb />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Yöneticiler İçin Pratik İpucu</h3>
              <p className="text-emerald-50 text-sm leading-relaxed">
                {term.managerTip}
              </p>
            </div>
          </div>
        </section>

        {/* 11. Hızlı Özet */}
        <footer className="pt-10 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Hızlı Özet</p>
          <p className="text-lg font-bold text-slate-700 italic px-4">
            "{term.quickSummary}"
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;