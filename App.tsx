
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/Services';
import Blog from './pages/Blog';
import PromptLibrary from './pages/PromptLibrary';
import About from './pages/About';
import InteraktifEgitim from './pages/InteraktifEgitim';
import SalesMentorAI from './pages/SalesMentorAI';
import KurumsalAIEgitimi from './pages/KurumsalAIEgitimi';
import Glossary from './pages/Glossary';
import { Contact, Legal } from './pages/StaticPages';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler/interaktif-egitim" element={<InteraktifEgitim />} />
          <Route path="/hizmetler/sales-mentor-ai" element={<SalesMentorAI />} />
          <Route path="/hizmetler/kurumsal-ai-egitimi" element={<KurumsalAIEgitimi />} />
          <Route path="/hizmetler/:id" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/prompt-kutuphanesi" element={<PromptLibrary />} />
          <Route path="/sozluk" element={<Glossary />} />
          <Route path="/sozluk/:slug" element={<Glossary />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/gizlilik-politikasi" element={<Legal title="Gizlilik Politikası" />} />
          <Route path="/kullanim-kosullari" element={<Legal title="Kullanım Koşulları" />} />
          <Route path="/cerez-politikasi" element={<Legal title="Çerez Politikası" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
