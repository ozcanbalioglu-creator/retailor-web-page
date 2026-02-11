import { ServiceInfo, BlogPost } from './types';

export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwZ4L3WpCifuL5tAEHugXi8fsschzKBEr8jy_M0Rt7B2bNnfgLy6kK8Kyo3LiH2k95YCA/exec';

export const SERVICES: ServiceInfo[] = [
  {
    id: 'interaktif-egitim',
    title: 'İnteraktif Eğitim',
    description: 'Saha ekipleri için yapay zeka destekli, kişiselleştirilmiş öğrenme deneyimleri.',
    icon: 'Brain',
    path: '/hizmetler/interaktif-egitim',
    content: 'Perakende saha çalışanlarının yetkinliklerini artırmak için tasarlanmış, gerçek zamanlı geri bildirim veren AI simülasyonları ile satış becerilerini mükemmelleştiriyoruz.'
  },
  {
    id: 'sales-mentor-ai',
    title: 'Sales Mentor AI',
    description: 'Satış temsilcileri için 7/24 aktif dijital koçluk ve performans analitiği.',
    icon: 'TrendingUp',
    path: '/hizmetler/sales-mentor-ai',
    content: 'Müşteri itirazlarını karşılama, çapraz satış teknikleri ve ikna kabiliyetini geliştiren yapay zeka tabanlı dijital mentorluk platformu.'
  },
  {
    id: 'kurumsal-ai-egitimi',
    title: 'Kurumsal AI Eğitimi',
    description: 'Yöneticiler ve karar vericiler için stratejik yapay zeka adaptasyon programları.',
    icon: 'Award',
    path: '/hizmetler/kurumsal-ai-egitimi',
    content: 'Operasyonel verimliliği artırmak ve veri odaklı kararlar alabilmek için organizasyonel yapınızı yapay zeka çağına hazırlıyoruz.'
  },
  {
    id: 'prompt-kutuphanesi',
    title: 'Prompt Kütüphanesi',
    description: 'Perakende profesyonelleri için hazır AI prompt şablonları ve kullanım rehberleri.',
    icon: 'Library',
    path: '/prompt-kutuphanesi',
    content: 'Satış, müşteri ilişkileri ve operasyonel süreçlerinizi hızlandıracak uzman tarafından hazırlanmış yapay zeka prompt koleksiyonu.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'perakendede-ai-gelecegi',
    title: '2025 Perakende Trendleri: Yapay Zeka Başrolde',
    excerpt: 'Mağaza içi deneyimden online kişiselleştirmeye kadar AI perakendeyi nasıl dönüştürüyor?',
    date: '12 Mart 2024',
    category: 'Strateji',
    image: 'https://picsum.photos/seed/retail1/800/600',
    content: 'Perakende sektörü büyük bir değişim eşiğinde. Yapay zeka artık sadece bir lüks değil, rekabetin vazgeçilmez bir parçası haline geliyor...'
  },
  {
    slug: 'musteri-sadakati-ve-veri',
    title: 'Veri Odaklı Müşteri Sadakati',
    excerpt: 'Büyük veriyi anlamlı içgörülere dönüştürerek sadık müşteriler yaratmanın yolları.',
    date: '05 Mart 2024',
    category: 'Analiz',
    image: 'https://picsum.photos/seed/retail2/800/600',
    content: 'Müşterilerinizin ne istediğini onlar bile bilmeden tahmin etmek mümkün mü? AI tabanlı sadakat programlarının gücünü keşfedin.'
  }
];
