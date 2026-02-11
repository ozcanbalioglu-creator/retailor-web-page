import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { GOOGLE_SCRIPT_URL } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [newsletterData, setNewsletterData] = useState({
    name: '',
    role: '',
    email: ''
  });
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);

    try {
      const data = new FormData();
      data.append('name', newsletterData.name);
      data.append('role', newsletterData.role);
      data.append('email', newsletterData.email);
      data.append('formType', 'Abonelik');

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });

      alert('Aboneliğiniz tamamlandı');
      setNewsletterData({ name: '', role: '', email: '' });
    } catch (error) {
      console.error('Newsletter error:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewsletterData(prev => ({ ...prev, [name]: value }));
  };

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/blog': return 'Blog';
      case '/hakkimizda': return 'Hakkımızda';
      case '/iletisim': return 'İletişim';
      case '/hizmetler/interaktif-egitim': return 'İnteraktif Eğitim';
      case '/hizmetler/sales-mentor-ai': return 'Sales Mentor AI';
      case '/hizmetler/kurumsal-ai-egitimi': return 'Kurumsal AI Eğitimi';
      case '/prompt-kutuphanesi': return 'Prompt Kütüphanesi';
      case '/gizlilik-politikasi': return 'Gizlilik Politikası';
      case '/kullanim-kosullari': return 'Kullanım Koşulları';
      case '/cerez-politikasi': return 'Çerez Politikası';
      default:
        if (pathname.startsWith('/sozluk')) return 'Perakende Terimleri Sözlüğü';
        return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#475569] selection:bg-[#f59e0b] selection:text-white overflow-x-hidden">
      {/* Navigation with Glassmorphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'glass-morphism py-4 shadow-sm border-b border-slate-200/50' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={isScrolled ? "assets/RetailorLogo-RedBlack.png" : "assets/RetailorLogo-RedWhiteD.png"}
              alt="Retailor Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase ${isScrolled ? 'text-[#475569]' : 'text-white'}`}>
            <Link to="/" className="hover:text-[#0ea5e9] transition-colors relative group">
              Ana Sayfa
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ea5e9] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="relative group cursor-pointer">
              <span className="hover:text-[#0ea5e9] transition-colors">Hizmetler</span>
              <div className="absolute top-full right-0 mt-4 w-64 glass-morphism border border-slate-200/50 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 rounded-2xl shadow-2xl translate-y-2 group-hover:translate-y-0">
                <Link to="/hizmetler/interaktif-egitim" className="block py-2.5 px-3 rounded-lg hover:bg-[#0ea5e9]/10 hover:text-[#0ea5e9] text-sm font-medium transition-colors">İnteraktif Eğitim</Link>
                <Link to="/hizmetler/sales-mentor-ai" className="block py-2.5 px-3 rounded-lg hover:bg-[#0ea5e9]/10 hover:text-[#0ea5e9] text-sm font-medium transition-colors">Sales Mentor AI</Link>
                <Link to="/hizmetler/kurumsal-ai-egitimi" className="block py-2.5 px-3 rounded-lg hover:bg-[#0ea5e9]/10 hover:text-[#0ea5e9] text-sm font-medium transition-colors">Kurumsal AI Eğitimi</Link>
                <Link to="/prompt-kutuphanesi" className="block py-2.5 px-3 rounded-lg hover:bg-[#0ea5e9]/10 hover:text-[#0ea5e9] text-sm font-medium transition-colors">Prompt Kütüphanesi</Link>
              </div>
            </div>
            <Link to="/blog" className="hover:text-[#0ea5e9] transition-colors relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ea5e9] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/sozluk" className="hover:text-[#0ea5e9] transition-colors relative group">
              Sözlük
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ea5e9] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/hakkimizda" className="hover:text-[#0ea5e9] transition-colors relative group">
              Hakkımızda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ea5e9] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/iletisim" className={`${isScrolled ? 'bg-[#0c4a6e] text-white' : 'bg-white text-[#0c4a6e]'} px-7 py-3 rounded-xl hover:bg-[#0ea5e9] hover:text-white transition-all hover:shadow-lg hover:shadow-[#0ea5e9]/30 active:scale-[0.98] text-sm font-semibold tracking-wider`}>İLETİŞİM</Link>
          </div>

          {/* Mobile Toggle */}
          <button className={`md:hidden ${isScrolled ? 'text-[#0c4a6e]' : 'text-white'} p-2 bg-white/10 backdrop-blur-md rounded-lg`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Glassmorphism */}
      <div className={`fixed inset-0 z-40 transition-all duration-700 glass-morphism flex flex-col justify-center items-center gap-10 text-3xl font-heading uppercase tracking-wider ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0ea5e9] transition-colors">Ana Sayfa</Link>
        <Link to="/hizmetler/sales-mentor-ai" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0ea5e9] transition-colors">Hizmetler</Link>
        <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0ea5e9] transition-colors">Blog</Link>
        <Link to="/sozluk" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0ea5e9] transition-colors">Sözlük</Link>
        <Link to="/hakkimizda" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0ea5e9] transition-colors">Hakkımızda</Link>
        <Link to="/iletisim" onClick={() => setIsMenuOpen(false)} className="text-[#0ea5e9] font-bold">İletişim</Link>
      </div>

      {/* Dynamic Page Header */}
      {location.pathname !== '/' && (
        <div className="w-full h-[200px] md:h-[300px] bg-[url('assets/header.webp')] bg-cover bg-center mt-20 md:mt-0">
          <div className="w-full h-full flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-heading text-white uppercase tracking-tighter text-center px-6 drop-shadow-lg">
              {getPageTitle(location.pathname)}
            </h2>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-16 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0ea5e9]/5 blur-[120px] rounded-full -translate-y-1/2"></div>

        {/* Newsletter Section */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-24">
          <div className="bg-[#0c4a6e] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9]/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-heading text-white mb-6 uppercase tracking-tighter">E-BÜLTEN<br /><span className="text-[#0ea5e9]">ABONELİĞİ</span></h3>
                <p className="text-slate-300 text-lg max-w-md leading-relaxed"> Perakende ve AI dünyasındaki güncel gelişmeleri, başarı hikayelerini ve stratejik öngörüleri kaçırmayın.</p>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ad Soyad"
                    value={newsletterData.name}
                    onChange={handleNewsletterChange}
                    required
                    className="w-full bg-white/10 border border-white/10 rounded-xl py-3.5 px-5 text-white placeholder:text-slate-400 text-sm outline-none focus:bg-white/15 focus:border-[#0ea5e9] transition-all"
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Görev"
                    value={newsletterData.role}
                    onChange={handleNewsletterChange}
                    required
                    className="w-full bg-white/10 border border-white/10 rounded-xl py-3.5 px-5 text-white placeholder:text-slate-400 text-sm outline-none focus:bg-white/15 focus:border-[#0ea5e9] transition-all"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-posta Adresiniz"
                    value={newsletterData.email}
                    onChange={handleNewsletterChange}
                    required
                    className="flex-grow bg-white/10 border border-white/10 rounded-xl py-3.5 px-5 text-white placeholder:text-slate-400 text-sm outline-none focus:bg-white/15 focus:border-[#0ea5e9] transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingNewsletter}
                    className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold py-3.5 px-8 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-[#f59e0b]/20 uppercase tracking-wider text-sm"
                  >
                    <Send size={18} />
                    {isSubmittingNewsletter ? 'Lütfen Bekleyin...' : 'ABONE OL'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="assets/RetailorLogo-RedBlack.png"
                alt="Retailor Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-[#475569] text-base max-w-md leading-relaxed font-normal opacity-80">
              Perakende sektöründe yapay zeka dönüşümünü liderlikle buluşturuyoruz.
              Geleceğin ticaretini bugünden inşa edin.
            </p>
            <div className="flex gap-5 mt-10">
              <a href="#" className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center hover:bg-[#0c4a6e] hover:text-white transition-all hover:-translate-y-1 duration-300 shadow-sm"><Linkedin size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center hover:bg-[#0c4a6e] hover:text-white transition-all hover:-translate-y-1 duration-300 shadow-sm"><Twitter size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center hover:bg-[#0c4a6e] hover:text-white transition-all hover:-translate-y-1 duration-300 shadow-sm"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[#0c4a6e] font-semibold mb-8 text-sm uppercase tracking-wider">Hizmetler</h4>
            <ul className="space-y-5 text-[#475569] text-sm font-medium">
              <li><Link to="/hizmetler/interaktif-egitim" className="hover:text-[#0ea5e9] transition-all hover:translate-x-1 inline-block">İnteraktif Eğitim</Link></li>
              <li><Link to="/hizmetler/sales-mentor-ai" className="hover:text-[#0ea5e9] transition-all hover:translate-x-1 inline-block">Sales Mentor AI</Link></li>
              <li><Link to="/hizmetler/kurumsal-ai-egitimi" className="hover:text-[#0ea5e9] transition-all hover:translate-x-1 inline-block">Kurumsal AI Eğitimi</Link></li>
              <li><Link to="/blog" className="hover:text-[#0ea5e9] transition-all hover:translate-x-1 inline-block">Blog</Link></li>
              <li><Link to="/sozluk" className="hover:text-[#0ea5e9] transition-all hover:translate-x-1 inline-block">Sözlük</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#0c4a6e] font-semibold mb-8 text-sm uppercase tracking-wider">Yasal</h4>
            <ul className="space-y-5 text-[#475569] text-sm font-medium">
              <li><Link to="/gizlilik-politikasi" className="hover:text-[#0ea5e9] transition-all hover:translate-x-1 inline-block">Gizlilik Politikası</Link></li>
              <li><Link to="/kullanim-kosullari" className="hover:text-[#0ea5e9] transition-all hover:translate-x-1 inline-block">Kullanım Koşulları</Link></li>
              <li><Link to="/cerez-politikasi" className="hover:text-[#0ea5e9] transition-all hover:translate-x-1 inline-block">Çerez Politikası</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 mt-32 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm uppercase tracking-wider font-medium">
          <p>© 2024 Retailor.com.tr - Gelecek Burada Başlıyor.</p>
          <div className="flex gap-8 items-center">
            <span className="flex items-center gap-2">Design <span className="text-[#f59e0b] animate-pulse">❤</span> AI Power</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;