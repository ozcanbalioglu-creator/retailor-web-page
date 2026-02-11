import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <Navigate to="/" />;

  const Icon = (Icons as any)[service.icon];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0ea5e9]/5 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="w-14 h-14 bg-[#0c4a6e] text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-[#0c4a6e]/10">
              <Icon size={28} />
            </div>
            <h1 className="hero-text font-heading uppercase tracking-tighter mb-8 text-[#0c4a6e]">
              {service.title}
            </h1>
            <p className="text-lg text-[#475569] font-normal leading-relaxed mb-12 max-w-lg">
              {service.content}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/iletisim" className="bg-[#f59e0b] text-white px-10 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider hover:bg-[#d97706] transition-all shadow-md active:scale-[0.98]">İletişime Geç</Link>
              <Link to="/" className="border border-slate-200 text-[#0c4a6e] px-10 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider hover:border-[#0c4a6e] transition-all active:scale-[0.98]">Geri Dön</Link>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-4 bg-[#0ea5e9]/10 rounded-3xl blur-2xl group-hover:bg-[#0ea5e9]/20 transition-all"></div>
             <img src={`https://picsum.photos/seed/${service.id}/800/800`} alt={service.title} className="relative rounded-3xl w-full h-[500px] object-cover transition-all duration-1000 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="section-title font-heading text-[#0c4a6e] uppercase tracking-tighter mb-4">Çözüm Detayları</h2>
            <div className="w-20 h-1 bg-[#f59e0b] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="space-y-6 group p-8 bg-white rounded-2xl border border-slate-100 hover:border-[#0ea5e9]/20 hover:shadow-xl transition-all duration-500">
                <div className="h-1 w-12 bg-[#0ea5e9] group-hover:w-full transition-all duration-700 rounded-full"></div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#0c4a6e]">Modül 0{i}</h3>
                <p className="text-[#475569] text-sm leading-relaxed font-normal">
                  Yapay zeka modellerimiz, perakende sektörünün dinamiklerine özel olarak eğitilmiştir. Gerçek zamanlı veri akışı ve adaptif öğrenme ile operasyonel mükemmelliği hedefliyoruz.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;