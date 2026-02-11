import React, { useState, useEffect } from 'react';
import { Search, Library, ChevronRight, Copy, Check, Sparkles, X, ChevronDown, LayoutGrid, User, Send, Lightbulb, CheckCircle } from 'lucide-react';
import { GOOGLE_SCRIPT_URL } from '../constants';

interface Question {
  key: string;
  label: string;
  type: 'textarea' | 'dropdown' | 'number';
  options?: string[];
  isCommon?: boolean;
}

interface Prompt {
  id: string;
  title: string;
  category: string;
  categoryName: string;
  description: string;
  role: string;
  full_prompt: string;
  questions: Question[];
  expert_question?: string;
  expert_advice?: string;
}

const PromptLibrary = () => {
  const [allPrompts, setAllPrompts] = useState<Prompt[]>([]);
  const [filteredPrompts, setFilteredPrompts] = useState<Prompt[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // Wizard States
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCopied, setIsCopied] = useState(false);

  // Prompt Talep Formu States
  const [isRequestSubmitting, setIsRequestSubmitting] = useState(false);
  const [isRequestSuccess, setIsRequestSuccess] = useState(false);
  const [requestForm, setRequestForm] = useState({
    fullName: '',
    email: '',
    company: '',
    position: '',
    storeType: '',
    category: '',
    purpose: '',
    currentSolution: '',
    expectedOutput: '',
    targetUser: '',
    frequency: '',
    notes: ''
  });

  const handleRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRequestForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRequestSubmitting(true);

    try {
      const data = new FormData();
      data.append('formType', 'PromptTalep');
      data.append('fullName', requestForm.fullName);
      data.append('email', requestForm.email);
      data.append('company', requestForm.company);
      data.append('position', requestForm.position);
      data.append('storeType', requestForm.storeType);
      data.append('category', requestForm.category);
      data.append('purpose', requestForm.purpose);
      data.append('currentSolution', requestForm.currentSolution);
      data.append('expectedOutput', requestForm.expectedOutput);
      data.append('targetUser', requestForm.targetUser);
      data.append('frequency', requestForm.frequency);
      data.append('notes', requestForm.notes);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });

      setIsRequestSuccess(true);
      setRequestForm({
        fullName: '', email: '', company: '', position: '', storeType: '',
        category: '', purpose: '', currentSolution: '', expectedOutput: '',
        targetUser: '', frequency: '', notes: ''
      });
    } catch (error) {
      console.error('Prompt request error:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsRequestSubmitting(false);
    }
  };

  useEffect(() => {
    // Not: JSON dosyanı public/data/prompts.json içine koyduğunu varsayıyoruz
    fetch('/data/prompts.json')
      .then(res => res.json())
      .then(data => {
        const commonQs = data.common_questions || [];
        const catSpecificQs = data.category_specific_questions || {};
        let flatPrompts: Prompt[] = [];

        data.categories.forEach((cat: any) => {
          cat.prompts.forEach((p: any) => {
            const combinedQs = [
              ...commonQs.map((q: any) => ({ ...q, isCommon: true })),
              ...(catSpecificQs[p.category] || []).map((q: any) => ({ ...q, isCategorySpecific: true })),
              ...(p.questions || [])
            ];
            flatPrompts.push({ ...p, categoryName: cat.name, questions: combinedQs });
          });
        });
        setAllPrompts(flatPrompts);
        setFilteredPrompts(flatPrompts);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = allPrompts.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCategory === "all" || p.categoryName === selectedCategory;
      return matchesSearch && matchesCat;
    });
    setFilteredPrompts(filtered);
  }, [searchTerm, selectedCategory, allPrompts]);

  const openWizard = (prompt: Prompt) => {
    setCurrentPrompt(prompt);
    setCurrentStep(0);
    setAnswers({});
    setIsWizardOpen(true);
  };

  const handleNext = () => {
    if (currentStep <= (currentPrompt?.questions.length || 0)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const generateFinalPrompt = () => {
    if (!currentPrompt) return "";
    let final = currentPrompt.full_prompt;
    currentPrompt.questions.forEach(q => {
      const regex = new RegExp(`{{${q.key}}}`, 'g');
      final = final.replace(regex, answers[q.key] || `[${q.label}]`);
    });

    if (answers.expert_answer) {
      final += `\n\nEk Detay: ${answers.expert_answer}`;
    }
    return final;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (loading) return <div className="pt-48 pb-32 text-center text-[#475569] animate-pulse">Kütüphane Hazırlanıyor...</div>;

  return (
    <div className="pt-40 pb-32 px-6 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12">

      {/* SOL: Sidebar - Proje stilindeki Glassmorphic yapı */}
      <aside className="lg:w-72 shrink-0">
        <div className="sticky top-32 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
          <h3 className="flex items-center gap-2 text-[#0c4a6e] font-semibold uppercase tracking-wider text-sm mb-6 pb-4 border-b border-[#0c4a6e]/10">
            <Library size={18} className="text-[#f59e0b]" /> Kategoriler
          </h3>
          <nav className="space-y-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`w-full text-left px-4 py-2 rounded-xl text-sm uppercase tracking-wider transition-all ${selectedCategory === 'all' ? 'bg-[#0ea5e9] text-white font-semibold' : 'text-[#475569] hover:bg-white/20'}`}
            >
              Tüm Promptlar
            </button>
            {[...new Set(allPrompts.map(p => p.categoryName))].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-2 rounded-xl text-sm uppercase tracking-wider transition-all ${selectedCategory === cat ? 'bg-[#0ea5e9] text-white font-semibold' : 'text-[#475569] hover:bg-white/20'}`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* SAĞ: Ana İçerik */}
      <div className="flex-1">
        <div className="mb-12">
          <h1 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tight mb-4">Prompt <span className="text-[#0ea5e9]">Kütüphanesi</span></h1>
          <p className="text-[#475569] text-base mb-8">Mağaza tipinize ve rolünüze özel optimize edilmiş AI komutları.</p>

          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Prompt veya kategori ara..."
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 outline-none transition-all shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredPrompts.map(p => (
            <div key={p.id} className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-2xl transition-all group flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-medium uppercase tracking-wider px-3 py-1 bg-slate-50 text-[#0ea5e9] rounded-xl">{p.category}</span>
                <span className="flex items-center gap-1 text-sm font-medium text-slate-400 uppercase tracking-tight"><User size={12} /> {p.role}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0c4a6e] mb-3 group-hover:text-[#0ea5e9] transition-colors">{p.title}</h3>
              <p className="text-slate-500 text-sm mb-8 flex-1">{p.description}</p>
              <button
                onClick={() => openWizard(p)}
                className="w-full py-4 bg-[#0c4a6e] text-white rounded-2xl font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-[#f59e0b] transition-all"
              >
                Sihirbazı Başlat <Sparkles size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* PROMPT TALEP FORMU */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 text-[#f59e0b] rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                <Lightbulb size={14} /> Aradığınız Prompt Burada Yok mu?
              </div>
              <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tight mb-4">Prompt <span className="text-[#0ea5e9]">Talep Formu</span></h2>
              <p className="text-[#475569] text-base max-w-2xl mx-auto">
                İhtiyacınız olan prompt'u bize tarif edin. En çok talep gören prompt'ları geliştirerek kütüphaneye ekliyoruz.
              </p>
            </div>

            {isRequestSuccess ? (
              <div className="text-center py-16 px-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-heading text-[#0c4a6e] uppercase tracking-tight mb-4">Talebiniz Alındı!</h3>
                <p className="text-[#475569] text-base max-w-md mx-auto mb-8">
                  Prompt talebiniz başarıyla iletildi. Gelen talepler değerlendirilerek en çok ihtiyaç duyulan prompt'lar öncelikli olarak hazırlanıp kütüphaneye eklenecektir.
                </p>
                <button
                  onClick={() => setIsRequestSuccess(false)}
                  className="bg-[#0c4a6e] text-white px-8 py-3 rounded-xl font-semibold uppercase tracking-wider text-sm hover:bg-[#0ea5e9] transition-all"
                >
                  Yeni Talep Oluştur
                </button>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                {/* Bölüm 1: Kişisel Bilgiler */}
                <div className="p-8 md:p-10 border-b border-slate-100">
                  <h3 className="text-sm font-semibold text-[#0c4a6e] uppercase tracking-wider mb-6 flex items-center gap-2">
                    <span className="w-7 h-7 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                    Kişisel Bilgiler
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Ad Soyad *</label>
                      <input
                        type="text" name="fullName" required
                        value={requestForm.fullName} onChange={handleRequestChange}
                        placeholder="Adınız ve soyadınız"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">E-posta *</label>
                      <input
                        type="email" name="email" required
                        value={requestForm.email} onChange={handleRequestChange}
                        placeholder="ornek@firma.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Firma Adı *</label>
                      <input
                        type="text" name="company" required
                        value={requestForm.company} onChange={handleRequestChange}
                        placeholder="Çalıştığınız firma"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Görev / Pozisyon *</label>
                      <select
                        name="position" required
                        value={requestForm.position} onChange={handleRequestChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all bg-white"
                      >
                        <option value="">Seçiniz...</option>
                        <option value="Mağaza Müdürü">Mağaza Müdürü</option>
                        <option value="Bölge Müdürü">Bölge Müdürü</option>
                        <option value="Satın Alma Uzmanı">Satın Alma Uzmanı</option>
                        <option value="İK Müdürü">İK Müdürü</option>
                        <option value="Pazarlama Sorumlusu">Pazarlama Sorumlusu</option>
                        <option value="Satış Danışmanı">Satış Danışmanı</option>
                        <option value="Genel Müdür">Genel Müdür</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Mağaza / İşletme Tipi *</label>
                      <select
                        name="storeType" required
                        value={requestForm.storeType} onChange={handleRequestChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all bg-white"
                      >
                        <option value="">Seçiniz...</option>
                        <option value="Giyim/Moda">Giyim / Moda</option>
                        <option value="Süpermarket">Süpermarket</option>
                        <option value="Elektronik">Elektronik</option>
                        <option value="Kozmetik">Kozmetik</option>
                        <option value="Ev/Dekorasyon">Ev / Dekorasyon</option>
                        <option value="Lüks Mağazacılık">Lüks Mağazacılık</option>
                        <option value="E-Ticaret">E-Ticaret</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Bölüm 2: Prompt Talebi Detayları */}
                <div className="p-8 md:p-10 border-b border-slate-100">
                  <h3 className="text-sm font-semibold text-[#0c4a6e] uppercase tracking-wider mb-6 flex items-center gap-2">
                    <span className="w-7 h-7 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                    Prompt Talebi Detayları
                  </h3>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Kategori *</label>
                        <select
                          name="category" required
                          value={requestForm.category} onChange={handleRequestChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all bg-white"
                        >
                          <option value="">Seçiniz...</option>
                          <option value="Saha ve Mağaza Operasyonları">Saha ve Mağaza Operasyonları</option>
                          <option value="Personel Yönetimi ve Liderlik">Personel Yönetimi ve Liderlik</option>
                          <option value="Stok Yönetimi ve Lojistik">Stok Yönetimi ve Lojistik</option>
                          <option value="Pazarlama ve Kampanya Yönetimi">Pazarlama ve Kampanya Yönetimi</option>
                          <option value="Diğer">Diğer</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Bu Prompt'u Kim Kullanacak? *</label>
                        <select
                          name="targetUser" required
                          value={requestForm.targetUser} onChange={handleRequestChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all bg-white"
                        >
                          <option value="">Seçiniz...</option>
                          <option value="Mağaza Müdürü">Mağaza Müdürü</option>
                          <option value="Bölge Müdürü">Bölge Müdürü</option>
                          <option value="Satın Alma Uzmanı">Satın Alma Uzmanı</option>
                          <option value="İK Müdürü">İK Müdürü</option>
                          <option value="Pazarlama Sorumlusu">Pazarlama Sorumlusu</option>
                          <option value="Satış Danışmanı">Satış Danışmanı</option>
                          <option value="Tüm Ekip">Tüm Ekip</option>
                          <option value="Diğer">Diğer</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Bu Prompt Ne İşe Yarayacak? *</label>
                      <textarea
                        name="purpose" required
                        value={requestForm.purpose} onChange={handleRequestChange}
                        placeholder="Prompt'un hangi sorunu çözmesini ya da hangi görevi yerine getirmesini istiyorsunuz? Mümkün olduğunca detaylı açıklayın..."
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all h-28 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Bu Sorunu Şu An Nasıl Çözüyorsunuz? *</label>
                      <textarea
                        name="currentSolution" required
                        value={requestForm.currentSolution} onChange={handleRequestChange}
                        placeholder="Yapay zeka ile veya yapay zekasız, bu işi şu an nasıl hallediyorsunuz? Hangi araçları veya yöntemleri kullanıyorsunuz?"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all h-28 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Prompt'tan Beklediğiniz Çıktı *</label>
                      <textarea
                        name="expectedOutput" required
                        value={requestForm.expectedOutput} onChange={handleRequestChange}
                        placeholder="Prompt'un size ne üretmesini bekliyorsunuz? Örneğin: bir rapor, aksiyon planı, analiz tablosu, müşteri mesajı..."
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all h-28 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Bölüm 3: Ek Bilgiler */}
                <div className="p-8 md:p-10 border-b border-slate-100">
                  <h3 className="text-sm font-semibold text-[#0c4a6e] uppercase tracking-wider mb-6 flex items-center gap-2">
                    <span className="w-7 h-7 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                    Ek Bilgiler
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Kullanım Sıklığı *</label>
                      <select
                        name="frequency" required
                        value={requestForm.frequency} onChange={handleRequestChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all bg-white"
                      >
                        <option value="">Ne sıklıkla kullanırsınız?</option>
                        <option value="Günlük">Günlük</option>
                        <option value="Haftalık">Haftalık</option>
                        <option value="Aylık">Aylık</option>
                        <option value="Tek Seferlik">Tek Seferlik / Proje Bazlı</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Ek Notlar <span className="text-slate-400 normal-case">(opsiyonel)</span></label>
                      <textarea
                        name="notes"
                        value={requestForm.notes} onChange={handleRequestChange}
                        placeholder="Eklemek istediğiniz başka bir detay, örnek senaryo veya özel bir beklentiniz varsa buraya yazabilirsiniz..."
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all h-24 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Butonu */}
                <div className="p-8 md:p-10 bg-slate-50/50">
                  <button
                    type="submit"
                    disabled={isRequestSubmitting}
                    className="w-full md:w-auto bg-[#0c4a6e] text-white px-12 py-4 rounded-xl font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-[#f59e0b] transition-all active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-[#0c4a6e]/20 mx-auto"
                  >
                    <Send size={16} />
                    {isRequestSubmitting ? 'Gönderiliyor...' : 'Prompt Talebini Gönder'}
                  </button>
                  <p className="text-center text-sm text-slate-400 mt-4">
                    Gelen talepler değerlendirilerek en çok ihtiyaç duyulan prompt'lar öncelikli olarak hazırlanır.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* WIZARD MODAL */}
      {isWizardOpen && currentPrompt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#0c1b2d]/80 backdrop-blur-sm" onClick={() => setIsWizardOpen(false)}></div>
          <div className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="p-8 border-b border-slate-50 flex justify-between items-start bg-slate-50/50">
              <div>
                <h4 className="text-2xl font-heading text-[#0c4a6e] uppercase tracking-tight">{currentPrompt.title}</h4>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mt-1">Adım {currentStep + 1} / {currentPrompt.questions.length + 1}</p>
              </div>
              <button onClick={() => setIsWizardOpen(false)} className="p-2 hover:bg-slate-200 rounded-xl transition-colors"><X size={20} /></button>
            </div>

            <div className="p-10 overflow-y-auto">
              {currentStep < currentPrompt.questions.length ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <label className="block text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider">{currentPrompt.questions[currentStep].label}</label>
                  {currentPrompt.questions[currentStep].type === 'dropdown' ? (
                    <select
                      className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-[#0ea5e9]"
                      value={answers[currentPrompt.questions[currentStep].key] || ""}
                      onChange={(e) => setAnswers({ ...answers, [currentPrompt.questions[currentStep].key]: e.target.value })}
                    >
                      <option value="">Seçiniz...</option>
                      {currentPrompt.questions[currentStep].options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <textarea
                      className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-[#0ea5e9] h-32"
                      placeholder="Buraya yazın..."
                      value={answers[currentPrompt.questions[currentStep].key] || ""}
                      onChange={(e) => setAnswers({ ...answers, [currentPrompt.questions[currentStep].key]: e.target.value })}
                    />
                  )}
                </div>
              ) : currentStep === currentPrompt.questions.length ? (
                <div className="space-y-6 animate-in fade-in">
                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <h5 className="font-bold text-[#0c4a6e] mb-2 flex items-center gap-2"><Sparkles size={16} className="text-[#f59e0b]" /> Uzman Tavsiyesi</h5>
                    <p className="text-sm text-slate-600 italic">"{currentPrompt.expert_advice}"</p>
                  </div>
                  <label className="block text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider">{currentPrompt.expert_question || "Eklemek istediğiniz son bir detay var mı?"}</label>
                  <textarea
                    className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-[#0ea5e9] h-24"
                    onChange={(e) => setAnswers({ ...answers, expert_answer: e.target.value })}
                  />
                </div>
              ) : (
                <div className="space-y-6 animate-in zoom-in-95">
                  <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm font-bold flex items-center gap-2">
                    <Check size={18} /> Promptunuz Hazır!
                  </div>
                  <div className="relative group">
                    <textarea
                      readOnly
                      className="w-full p-6 bg-[#0c1b2d] text-slate-300 rounded-3xl font-mono text-sm h-64 outline-none"
                      value={generateFinalPrompt()}
                    />
                    <button
                      onClick={() => copyToClipboard(generateFinalPrompt())}
                      className="absolute bottom-4 right-4 bg-[#f59e0b] text-white px-6 py-2 rounded-xl font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all"
                    >
                      {isCopied ? <><Check size={14} /> Kopyalandı</> : <><Copy size={14} /> Kopyala</>}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 border-t border-slate-50 bg-slate-50/50 flex justify-between">
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="px-6 py-2 text-slate-400 font-medium uppercase tracking-wider text-sm disabled:opacity-0"
              >
                Geri
              </button>
              {currentStep <= currentPrompt.questions.length && (
                <button
                  onClick={handleNext}
                  className="bg-[#0ea5e9] text-white px-8 py-3 rounded-xl font-medium uppercase tracking-wider text-sm shadow-lg shadow-[#0ea5e9]/20"
                >
                  {currentStep === currentPrompt.questions.length ? "Promptu Oluştur" : "Sonraki Adım"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptLibrary;