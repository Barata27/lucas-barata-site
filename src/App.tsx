import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CustomerJourney } from './components/CustomerJourney';
import { Projects } from './components/Projects';
import { Cases } from './components/Cases';
import { Practice } from './components/Practice';
import { Thinking } from './components/Thinking';
import { About } from './components/About';
import { Toolbox } from './components/Toolbox';
import { Now } from './components/Now';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* 0. Barra de navegação fixa */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Quem é o Lucas */}
        <Hero />

        {/* 2. Como ele enxerga o cliente */}
        <CustomerJourney />

        {/* 3. O que ele está construindo */}
        <Projects />

        {/* 4. O que ele já colocou para funcionar */}
        <Cases />

        {/* 5. Como ele trabalha (Na prática) */}
        <Practice />

        {/* 6. Como ele pensa */}
        <Thinking />

        {/* 7. Quem ele é fora do trabalho */}
        <About />

        {/* 8. Caixa de ferramentas & certificações */}
        <Toolbox />

        {/* 9. O que está fazendo agora */}
        <Now />

        {/* 10. Como entrar em contato */}
        <Contact />
      </main>

      {/* 11. Rodapé minimalista */}
      <Footer />
    </div>
  );
};

export default App;
