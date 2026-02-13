import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight, List, ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug, BlogPost } from '../services/blogService';

const Bibliography = ({ content }: { content: string }) => {
  if (!content.trim()) return null;

  // Normalize bibliography items: Convert [^n]: to standard markdown list items (*)
  const normalizedContent = content
    .replace(/^\[\^\d+\]:\s*/gm, '* ') // Lines starting with [^n]:
    .replace(/\n\[\^\d+\]:\s*/g, '\n* '); // Mid-content [^n]: cases

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <h2 className="text-xl font-heading uppercase tracking-widest text-[#0c4a6e] mb-8 opacity-60">
        Kaynakça
      </h2>
      <div className="bibliography-content text-sm text-[#475569] leading-relaxed italic opacity-80">
        <ReactMarkdown>{normalizedContent}</ReactMarkdown>
      </div>
      <style>{`
        .bibliography-content ul {
          list-style: none !important;
          padding-left: 0 !important;
          margin-top: 0 !important;
        }
        .bibliography-content li {
          padding-left: 1.5rem !important;
          position: relative !important;
          margin-bottom: 0.75rem !important;
        }
        .bibliography-content li::before {
          content: "•" !important;
          position: absolute !important;
          left: 0 !important;
          color: #0ea5e9 !important;
          font-weight: bold !important;
        }
      `}</style>
    </div>
  );
};

const FAQAccordion = ({ items }: { items: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <div className="mt-16 pt-16 border-t border-slate-200">
      <h2 className="text-3xl font-heading uppercase tracking-tighter text-[#0c4a6e] mb-10 flex items-center gap-4">
        <span className="w-8 h-8 rounded-lg bg-[#f59e0b] flex items-center justify-center text-white text-base">?</span>
        Sıkça Sorulan Sorular
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`group rounded-2xl border transition-all duration-300 ${openIndex === index
              ? 'bg-white border-[#0ea5e9] shadow-xl shadow-[#0ea5e9]/5'
              : 'bg-white/50 border-slate-100 hover:border-[#0ea5e9]/30 hover:bg-white'
              }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left"
            >
              <span className={`text-lg font-bold uppercase tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-[#0ea5e9]' : 'text-[#0c4a6e]'
                }`}>
                {item.question}
              </span>
              <div className={`shrink-0 ml-4 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-[#0ea5e9]' : 'text-slate-400'
                }`}>
                <ChevronDown size={24} />
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="px-8 pb-8 text-[#475569] leading-relaxed text-lg border-t border-slate-50 pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogIndex = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');

  useEffect(() => {
    getAllPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Blog posts load error:', err);
        setLoading(false);
      });
  }, []);

  const categories = ['Hepsi', ...new Set(posts.map(post => post.category))];
  const filteredPosts = selectedCategory === 'Hepsi'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  if (loading) {
    return (
      <div className="pt-48 pb-32 text-center text-[#475569] font-heading text-2xl animate-pulse">
        Yazılar Yükleniyor...
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 px-6 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <h1 className="hero-text font-heading uppercase tracking-tighter mb-8 text-[#0c4a6e]">Yazılarımız<span className="text-[#0ea5e9]">.</span></h1>
        <p className="text-[#475569] text-lg font-normal max-w-2xl mx-auto">Perakende teknolojileri ve AI dünyasından stratejik içgörüler ve gelecek analizleri.</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${selectedCategory === category
              ? 'bg-[#0c4a6e] text-white border-[#0c4a6e] shadow-lg scale-105'
              : 'bg-white text-[#475569] border-slate-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9]'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {filteredPosts.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
            <div className="relative overflow-hidden rounded-xl mb-6 aspect-video shadow-lg">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute top-6 left-6 bg-[#f59e0b] text-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wider rounded-xl shadow-lg">
                {post.category}
              </div>
            </div>
            <div className="flex gap-6 text-[#475569] text-sm uppercase tracking-wider font-semibold mb-4 opacity-70">
              <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={14} /> Retailor Ekibi</span>
            </div>
            <h2 className="text-2xl font-heading uppercase tracking-tight mb-4 group-hover:text-[#0ea5e9] transition-colors leading-tight text-[#0c4a6e]">
              {post.title}
            </h2>
            <p className="text-[#475569] leading-relaxed font-normal mb-6 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group-hover:translate-x-2 transition-transform text-[#0c4a6e]">
              Okumaya Devam Et <ArrowRight size={14} className="text-[#f59e0b]" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug)
        .then(data => {
          setPost(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Blog post detail load error:', err);
          setLoading(false);
        });
    }
  }, [slug]);

  // Başlıkları takip eden ve ID atayan logic
  useEffect(() => {
    if (!loading && post) {
      // DOM'un render edilmesi için kısa bir bekleme
      const timer = setTimeout(() => {
        const elements = Array.from(document.querySelectorAll(".markdown-content h2, .markdown-content h3"));
        const extractedHeadings = elements.map((el) => {
          const text = el.textContent || "";
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          el.id = id;
          return {
            id,
            text,
            level: Number(el.tagName.replace("H", ""))
          };
        });
        setHeadings(extractedHeadings);

        // Intersection Observer ile aktif başlığı izle
        const observer = new IntersectionObserver(
          (entries) => {
            // Görünür olan tüm başlıkları bul
            const visibleEntries = entries.filter(entry => entry.isIntersecting);

            if (visibleEntries.length > 0) {
              // Eğer birden fazla varsa, en üsttekini (y koordinatı en küçük olanı) seç
              const topEntry = visibleEntries.reduce((prev, curr) => {
                return prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr;
              });
              setActiveId(topEntry.target.id);
            }
          },
          {
            rootMargin: '-80px 0px -80% 0px',
            threshold: [0, 1]
          }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loading, post]);

  if (loading) {
    return (
      <div className="pt-48 pb-32 text-center text-[#475569] font-heading text-2xl animate-pulse">
        Yükleniyor...
      </div>
    );
  }

  if (!post) return <div className="pt-48 text-center text-[#475569] font-heading text-2xl">Yazı bulunamadı.</div>;

  return (
    <div className="pt-24 pb-32 px-6 max-w-[1400px] mx-auto">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#475569] hover:text-[#0c4a6e] mb-12 transition-colors">
        <ArrowLeft size={14} /> Tüm Yazılar
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 relative">

        {/* SOL TARAF: Glassmorphic Table of Contents */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-32 p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden">
            {/* Arka plan dekoratif parlama */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#0ea5e9]/10 rounded-full blur-2xl"></div>

            <h4 className="flex items-center gap-3 text-[#0c4a6e] font-semibold uppercase tracking-wider text-sm mb-8 border-b border-[#0c4a6e]/10 pb-4">
              <List size={18} className="text-[#f59e0b]" /> İçindekiler
            </h4>

            <nav className="space-y-4">
              {headings.length > 0 ? (
                headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm uppercase tracking-wider transition-all duration-300 hover:translate-x-1 ${activeId === heading.id
                      ? "text-[#f59e0b] font-semibold"
                      : "text-[#475569] opacity-60 hover:opacity-100"
                      } ${heading.level === 3 ? "pl-4 text-sm" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {heading.text}
                  </a>
                ))
              ) : (
                <span className="text-sm text-[#475569] opacity-40 uppercase tracking-wider">Başlıklar taranıyor...</span>
              )}
            </nav>
          </div>
        </aside>

        {/* SAĞ TARAF: İçerik Alanı */}
        <div className="flex-1 max-w-3xl">
          <div className="flex gap-6 text-[#0ea5e9] text-sm uppercase tracking-wider font-semibold mb-6">
            <span>{post.category}</span>
            <span>•</span>
            <span className="text-[#475569] opacity-50">{post.date}</span>
          </div>

          <h1 className="hero-text font-heading uppercase tracking-tighter leading-[0.9] mb-12 text-[#0c4a6e]">
            {post.title}
          </h1>

          <img src={post.image} alt={post.title} className="w-full h-[300px] md:h-[500px] object-cover rounded-xl mb-16 shadow-2xl" />

          <div className="prose prose-lg max-w-none text-[#475569] leading-relaxed font-normal">
            <div className="text-2xl font-heading italic text-[#0c4a6e] border-l-4 border-[#f59e0b] pl-8 mb-12 py-2">
              {post.excerpt}
            </div>
            <div className="markdown-content">
              {(() => {
                const content = post.content;

                // Başlıkları ve yerlerini bul
                const faqMatch = content.match(/## Sıkça Sorulan Sorular/i);
                const resultMatch = content.match(/## Sonuç/i);
                const bibMatch = content.match(/(##|###) Kaynakça/i);

                // Pozisyonları belirle
                const faqPos = faqMatch ? faqMatch.index! : content.length;
                const resultPos = resultMatch ? resultMatch.index! : content.length;
                const bibPos = bibMatch ? bibMatch.index! : content.length;

                // Bölümleri ayır (Sıralama: Main -> FAQ -> Sonuç -> Kaynakça)
                // Not: Markdown dosyasındaki gerçek sıraya göre dinamik bölmek daha güvenli
                const points = [
                  { type: 'faq', pos: faqPos, heading: faqMatch ? faqMatch[0] : "" },
                  { type: 'result', pos: resultPos, heading: resultMatch ? resultMatch[0] : "" },
                  { type: 'bib', pos: bibPos, heading: bibMatch ? bibMatch[0] : "" }
                ].filter(p => p.pos < content.length).sort((a, b) => a.pos - b.pos);

                let mainContent = content;
                let faqRaw = "";
                let resultRaw = "";
                let bibRaw = "";

                if (points.length > 0) {
                  mainContent = content.substring(0, points[0].pos);

                  for (let i = 0; i < points.length; i++) {
                    const start = points[i].pos + points[i].heading.length;
                    const end = (i + 1 < points.length) ? points[i + 1].pos : content.length;
                    const sectionContent = content.substring(start, end).trim();

                    if (points[i].type === 'faq') faqRaw = sectionContent;
                    if (points[i].type === 'result') resultRaw = sectionContent;
                    if (points[i].type === 'bib') bibRaw = sectionContent;
                  }
                }

                // FAQ Item'larını işle
                const faqItems: { question: string; answer: string }[] = [];
                if (faqRaw) {
                  const items = faqRaw.split(/\n(?=\*\*)/);
                  items.forEach(item => {
                    const lines = item.trim().split('\n');
                    if (lines.length >= 2) {
                      const question = lines[0].replace(/\*\*/g, '').trim();
                      const answer = lines.slice(1).join('\n').trim();
                      if (question && answer) {
                        faqItems.push({ question, answer });
                      }
                    }
                  });
                }

                return (
                  <>
                    <ReactMarkdown>{mainContent}</ReactMarkdown>

                    {faqItems.length > 0 && (
                      <FAQAccordion items={faqItems} />
                    )}

                    {resultRaw && (
                      <div className="mt-16 pt-16 border-t border-slate-200">
                        <h2 className="text-3xl font-heading uppercase tracking-tighter text-[#0c4a6e] mb-8">Sonuç</h2>
                        <div className="prose prose-lg max-w-none text-[#475569] leading-relaxed">
                          <ReactMarkdown>{resultRaw}</ReactMarkdown>
                        </div>
                      </div>
                    )}

                    <Bibliography content={bibRaw} />
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .markdown-content h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.875rem;
          color: #0c4a6e;
          margin-top: 3.5rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          scroll-margin-top: 120px; /* Sabit header varsa üzerine binmemesi için */
        }
        .markdown-content h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #0ea5e9;
          margin-top: 2rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          scroll-margin-top: 120px;
        }
        .markdown-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-size: 1.125rem;
        }
        .markdown-content ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 2rem;
        }
        .markdown-content li {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .markdown-content li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #f59e0b;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

const Blog: React.FC = () => {
  const { slug } = useParams();
  return slug ? <BlogPostDetail /> : <BlogIndex />;
};

export default Blog;