import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ArrowLeft, ArrowRight, BookOpen, Tag, Users, Zap, LinkIcon, Target, Lightbulb, Calculator } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ConfusedTerm {
  term: string;
  diff: string;
}

interface GlossaryTerm {
  slug: string;
  term: string;
  termEn: string;
  abbr: string;
  letter: string;
  category: string;
  shortDefinition: string;
  definition: string;
  whyImportant: string;
  realLifeExample: string;
  formula: string;
  formulaExample: string;
  managerTip: string;
  segments: string[];
  departments: string[];
  confusedTerms: ConfusedTerm[];
  relatedTerms: string[];
}

const TURKISH_LETTERS = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'];

// ─── INDEX ───────────────────────────────────────────────────────
const GlossaryIndex = () => {
  const [allTerms, setAllTerms] = useState<GlossaryTerm[]>([]);
  const [filteredTerms, setFilteredTerms] = useState<GlossaryTerm[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('data/glossary.json')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        const sorted = (data.terms as GlossaryTerm[]).sort((a, b) => a.term.localeCompare(b.term, 'tr'));
        setAllTerms(sorted);
        setFilteredTerms(sorted);
        setLoading(false);
      })
      .catch(err => {
        console.error('Glossary load error:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = allTerms;

    if (selectedLetter) {
      result = result.filter(t => t.letter === selectedLetter);
    }

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter(t =>
        t.term.toLowerCase().includes(q) ||
        t.shortDefinition.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
    }

    setFilteredTerms(result);
  }, [selectedLetter, searchTerm, allTerms]);

  const lettersWithTerms = new Set(allTerms.map(t => t.letter));

  if (loading) {
    return (
      <div className="pt-48 pb-32 text-center text-[#475569] font-heading text-2xl animate-pulse">
        Sözlük Hazırlanıyor...
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 px-6 max-w-[1400px] mx-auto">
      {/* Başlık */}
      <div className="text-center mb-12">
        <h1 className="section-title font-heading uppercase tracking-tight mb-4 text-[#0c4a6e]">
          Perakende Terimleri <span className="text-[#0ea5e9]">Sözlüğü</span>
        </h1>
        <p className="text-[#475569] text-base max-w-2xl mx-auto">
          Perakende sektöründe sıkça kullanılan terimler, kavramlar ve kısaltmaların kapsamlı açıklamaları.
        </p>
      </div>

      {/* Arama */}
      <div className="relative max-w-2xl mx-auto mb-10">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input
          type="text"
          placeholder="Terim veya kavram ara..."
          className="w-full pl-12 pr-6 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/10 transition-all text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* A-Z Harf Navigasyonu */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-12">
        <button
          onClick={() => setSelectedLetter('')}
          className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all ${selectedLetter === ''
              ? 'bg-[#0c4a6e] text-white shadow-lg'
              : 'text-[#475569] hover:bg-slate-100'
            }`}
        >
          Tümü
        </button>
        {TURKISH_LETTERS.map(letter => {
          const hasTerms = lettersWithTerms.has(letter);
          return (
            <button
              key={letter}
              onClick={() => hasTerms && setSelectedLetter(letter === selectedLetter ? '' : letter)}
              disabled={!hasTerms}
              className={`w-9 h-9 rounded-full text-sm font-semibold transition-all flex items-center justify-center ${selectedLetter === letter
                  ? 'bg-[#0ea5e9] text-white shadow-lg shadow-[#0ea5e9]/20'
                  : hasTerms
                    ? 'text-[#475569] hover:bg-slate-100 hover:text-[#0c4a6e]'
                    : 'text-slate-300 cursor-not-allowed'
                }`}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Sonuç sayısı */}
      <div className="text-sm font-medium uppercase tracking-wider text-slate-400 mb-8">
        {filteredTerms.length} terim {selectedLetter && `(${selectedLetter} harfi)`} {searchTerm && `• "${searchTerm}"`}
      </div>

      {/* Kart Grid */}
      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTerms.map(term => (
            <Link
              key={term.slug}
              to={`/sozluk/${term.slug}`}
              className="group p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="w-9 h-9 rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-sm font-bold">
                  {term.letter}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-slate-400 uppercase tracking-wider">
                  <Tag size={12} /> {term.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0c4a6e] mb-3 group-hover:text-[#0ea5e9] transition-colors leading-snug tracking-tight">
                {term.term}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {term.shortDefinition}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#0c4a6e] group-hover:translate-x-1 transition-transform">
                Detaylı İncele <ArrowRight size={14} className="text-[#f59e0b]" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <BookOpen size={48} className="mx-auto text-slate-200 mb-6" />
          <p className="text-slate-400 text-base">
            {searchTerm
              ? `"${searchTerm}" ile eşleşen terim bulunamadı.`
              : `${selectedLetter} harfiyle başlayan terim bulunmuyor.`}
          </p>
        </div>
      )}
    </div>
  );
};

// ─── DETAIL ──────────────────────────────────────────────────────
const GlossaryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [term, setTerm] = useState<GlossaryTerm | null>(null);
  const [allTerms, setAllTerms] = useState<GlossaryTerm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('data/glossary.json')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        const terms = data.terms as GlossaryTerm[];
        setAllTerms(terms);
        const found = terms.find(t => t.slug === slug);
        setTerm(found || null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Glossary detail load error:', err);
        setLoading(false);
      });
  }, [slug]);

  // Bağlantılı terimleri slug'lardan çözümle
  const resolvedRelated = term?.relatedTerms
    ?.map(rs => allTerms.find(t => t.slug === rs))
    .filter(Boolean) as GlossaryTerm[] || [];

  if (loading) {
    return (
      <div className="pt-48 pb-32 text-center text-[#475569] font-heading text-2xl animate-pulse">
        Yükleniyor...
      </div>
    );
  }

  if (!term) {
    return <div className="pt-48 text-center text-[#475569] font-heading text-2xl">Terim bulunamadı.</div>;
  }

  return (
    <div className="pt-24 pb-32 px-6 max-w-[1400px] mx-auto">
      <Link to="/sozluk" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#475569] hover:text-[#0c4a6e] mb-12 transition-colors">
        <ArrowLeft size={14} /> Sözlüğe Dön
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 relative">

        {/* ═══ SOL SIDEBAR ═══ */}
        <aside className="lg:w-72 shrink-0 order-2 lg:order-1">
          <div className="lg:sticky lg:top-32 space-y-6">

            {/* Kullanım Alanı */}
            {(term.segments.length > 0 || term.departments.length > 0) && (
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h3 className="text-sm font-semibold text-[#0c4a6e] uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Users size={16} className="text-[#0ea5e9]" /> Kullanım Alanı
                </h3>
                {term.segments.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Segmentler</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {term.segments.map(s => (
                        <span key={s} className="text-sm bg-slate-50 text-slate-600 px-2.5 py-1 rounded-lg font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                )}
                {term.departments.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Departmanlar</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {term.departments.map(d => (
                        <span key={d} className="text-sm bg-[#0ea5e9]/5 text-[#0ea5e9] px-2.5 py-1 rounded-lg font-medium border border-[#0ea5e9]/10">{d}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Karıştırılan Terimler */}
            {term.confusedTerms.length > 0 && (
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h3 className="text-sm font-semibold text-[#0c4a6e] uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Zap size={16} className="text-[#f59e0b]" /> Karıştırılan Terimler
                </h3>
                <div className="space-y-4">
                  {term.confusedTerms.map(ct => (
                    <div key={ct.term}>
                      <h4 className="text-sm font-bold text-rose-600 mb-1">{ct.term}</h4>
                      <p className="text-sm text-slate-500 leading-snug">{ct.diff}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bağlantılı Terimler */}
            {resolvedRelated.length > 0 && (
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h3 className="text-sm font-semibold text-[#0c4a6e] uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <LinkIcon size={16} className="text-[#0ea5e9]" /> Bağlantılı Terimler
                </h3>
                <ul className="space-y-2.5">
                  {resolvedRelated.map(rt => (
                    <li key={rt.slug}>
                      <Link
                        to={`/sozluk/${rt.slug}`}
                        className="text-sm text-[#0ea5e9] hover:text-[#0c4a6e] font-medium flex items-center gap-2 transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full group-hover:bg-[#f59e0b] transition-colors shrink-0"></span>
                        {rt.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </aside>

        {/* ═══ ORTA ALAN (İçerik) ═══ */}
        <div className="flex-1 max-w-3xl order-1 lg:order-2">

          {/* 1. Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="px-3 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] text-sm font-semibold uppercase tracking-wider rounded-xl">
              {term.category}
            </span>
            <span className="w-8 h-8 rounded-full bg-[#0c4a6e] text-white flex items-center justify-center text-sm font-bold">
              {term.letter}
            </span>
            {term.abbr && (
              <span className="px-3 py-1 bg-[#f59e0b]/10 text-[#f59e0b] text-sm font-bold uppercase tracking-widest rounded-xl">
                {term.abbr}
              </span>
            )}
          </div>

          {/* 2. Başlık */}
          <h1 className="hero-text font-heading uppercase tracking-tighter leading-[0.9] mb-2 text-[#0c4a6e]">
            {term.term}
          </h1>
          {term.termEn && (
            <p className="text-lg text-slate-400 font-medium mb-8 italic">/ {term.termEn}</p>
          )}

          {/* 3. Kısa Tanım */}
          <div className="text-xl font-normal italic text-[#0c4a6e] border-l-4 border-[#f59e0b] pl-8 mb-12 py-2 leading-relaxed">
            {term.shortDefinition}
          </div>

          {/* 4. Tanım (Markdown) */}
          {term.definition && (
            <div className="mb-12">
              <div className="prose prose-lg max-w-none text-[#475569] leading-relaxed font-normal">
                <div className="glossary-content">
                  <ReactMarkdown>{term.definition}</ReactMarkdown>
                </div>
              </div>
            </div>
          )}

          {/* 5. Neden Önemli? */}
          {term.whyImportant && (
            <section className="bg-[#f59e0b]/5 border border-[#f59e0b]/15 p-6 rounded-2xl mb-12">
              <h3 className="text-[#0c4a6e] font-bold mb-3 flex items-center gap-2 text-base">
                <Target size={20} className="text-[#f59e0b]" /> Neden Önemlidir?
              </h3>
              <p className="text-[#475569] leading-relaxed">
                {term.whyImportant}
              </p>
            </section>
          )}

          {/* 6. Gerçek Hayat Örneği */}
          {term.realLifeExample && (
            <section className="mb-12">
              <h3 className="text-base font-bold text-[#0c4a6e] mb-4 flex items-center gap-2">
                <Zap size={18} className="text-[#f59e0b]" /> Gerçek Hayat Örneği
              </h3>
              <div className="bg-[#0c4a6e] text-slate-200 p-6 rounded-2xl relative shadow-md">
                <span className="absolute top-3 right-5 text-4xl opacity-10 font-serif">"</span>
                <p className="italic leading-relaxed text-sm">
                  {term.realLifeExample}
                </p>
              </div>
            </section>
          )}

          {/* 7. Nasıl Hesaplanır? (opsiyonel) */}
          {term.formula && (
            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center gap-2">
                <Calculator size={18} className="text-[#0c4a6e]" />
                <h3 className="font-bold text-[#0c4a6e] text-base">Nasıl Hesaplanır?</h3>
              </div>
              <div className="p-8 text-center">
                <div className="inline-block bg-[#0ea5e9]/5 px-8 py-4 rounded-xl mb-6 border border-[#0ea5e9]/10">
                  <code className="text-xl md:text-2xl font-mono text-[#0c4a6e] font-bold tracking-tight">
                    {term.formula}
                  </code>
                </div>
                {term.formulaExample && (
                  <div className="text-sm text-[#475569] max-w-md mx-auto">
                    <span className="font-bold text-[#0c4a6e]">Örnek:</span> {term.formulaExample}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 8. Yönetici İpucu */}
          {term.managerTip && (
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-2xl text-white shadow-lg mb-12">
              <div className="flex flex-col md:flex-row gap-5 items-start">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm shrink-0">
                  <Lightbulb size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2">Yöneticiler İçin Pratik İpucu</h3>
                  <p className="text-emerald-50 text-sm leading-relaxed">
                    {term.managerTip}
                  </p>
                </div>
              </div>
            </section>
          )}

        </div>
      </div>

      <style>{`
        .glossary-content h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #0c4a6e;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .glossary-content h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.125rem;
          color: #0ea5e9;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }
        .glossary-content p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
          font-size: 1.0625rem;
        }
        .glossary-content ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }
        .glossary-content li {
          margin-bottom: 0.625rem;
          padding-left: 1.5rem;
          position: relative;
          font-size: 1.0625rem;
        }
        .glossary-content li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #f59e0b;
          font-weight: bold;
        }
        .glossary-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
          font-size: 0.9375rem;
        }
        .glossary-content th {
          background-color: #f8fafc;
          color: #0c4a6e;
          font-weight: 600;
          text-align: left;
          padding: 0.75rem 1rem;
          border-bottom: 2px solid #e2e8f0;
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
        }
        .glossary-content td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #f1f5f9;
          color: #475569;
        }
        .glossary-content tr:hover td {
          background-color: #f8fafc;
        }
        .glossary-content strong {
          color: #0c4a6e;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

// ─── DISPATCHER ──────────────────────────────────────────────────
const Glossary: React.FC = () => {
  const { slug } = useParams();
  return slug ? <GlossaryDetail /> : <GlossaryIndex />;
};

export default Glossary;
