import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaixaoDeCristo from './paixaodecristo';
import ChoicePage from './choicepage';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChoicePage />} />
        <Route path="/cotistas" element={<PaixaoDeCristo pageType="cotistas" />} />
        <Route path="/lindoia" element={<PaixaoDeCristo pageType="lindoia" />} />
        <Route path="/socorro" element={<PaixaoDeCristo pageType="socorro" />} />
        <Route path="/principal" element={<PaixaoDeCristo pageType="principal" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);