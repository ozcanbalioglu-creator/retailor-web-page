import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Sparkles, ChevronDown } from 'lucide-react'; // Removed Copy, CheckCircle2, RotateCcw, Loader2 as they are no longer used for the prompt generation part
import promptsJson from '../data/prompts.json'; // Import the full JSON object

interface CategoryItem {
  id: string;
  name: string;
  description: string;
  prompts: any[];
}

const PromptGenerator: React.FC = () => {
  const categoriesData = promptsJson.categories as CategoryItem[]; // Access the categories array
  const [category, setCategory] = useState(categoriesData[0]?.name || ''); // Set initial category from 'name' property
  const navigate = useNavigate(); // Initialize useNavigate

  // No longer need context, result, loading, copied states as the generate functionality is removed
  // No longer need handleGenerate, copyToClipboard functions

  return (
    <div className="glass-morphism border border-slate-200/50 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group transition-all duration-700 hover:shadow-[#0ea5e9]/10">
      <div className="absolute -top-10 -right-10 p-10 opacity-5 group-hover:opacity-20 transition-all duration-1000 group-hover:rotate-12">
        <Sparkles size={180} className="text-[#f59e0b]" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <h3 className="text-3xl md:text-5xl font-heading mb-6 md:mb-8 text-[#0c4a6e] tracking-tighter">Yapay Zeka Prompt Kütüphanesi</h3>
        <p className="text-[#475569] mb-12 leading-relaxed text-lg opacity-80">
          İhtiyacınız olan yapay zeka komutlarını keşfedin veya oluşturun.
        </p>

        <div className="grid grid-cols-1 gap-8 mb-10"> {/* Removed md:grid-cols-2 as there's only one column now */}
          <div className="group/field">
            <label className="block text-sm uppercase tracking-[0.3em] text-[#475569] mb-4 font-black opacity-60">Kategori</label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white/50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/5 outline-none transition-all appearance-none cursor-pointer text-[#0c4a6e] shadow-sm font-medium"
              >
                {categoriesData.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)} {/* Use categoriesData.name for display and value */}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
          {/* Removed "Bağlam / Detay" input area */}
        </div>

        <button
          onClick={() => navigate('/prompt-kutuphanesi')} // Link to PromptLibrary.tsx
          className="w-full md:w-auto bg-[#0c4a6e] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#0ea5e9] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#0c4a6e]/20 hover:-translate-y-1 active:scale-95"
        >
          <Sparkles size={22} className="text-[#f59e0b] group-hover:rotate-12 transition-transform" />
          PROMPT ARA
        </button>

        {/* Removed result display section */}
      </div>
    </div>
  );
};

export default PromptGenerator;