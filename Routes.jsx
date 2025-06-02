// Datei: src/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DownloadPage from './pages/DownloadPage';
import NewsPage from './components/News/NewsPage';
import GamesInfoPage from './pages/GamesInfoPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/games" element={<GamesInfoPage />} />
    </Routes>
  );
};

export default AppRoutes;
