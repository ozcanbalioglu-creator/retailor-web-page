
export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  termEn: string;
  abbr: string;
  letter: string;
  category: string;

  // İçerik alanları
  shortDefinition: string;
  definition: string;
  whyImportant: string;
  realLifeExample: string;
  formula: string;
  formulaExample: string;
  managerTip: string;

  // Sidebar verileri
  segments: string[];
  departments: string[];
  confusedTerms: Array<{
    term: string;
    diff: string;
  }>;
  relatedTerms: string[];
}