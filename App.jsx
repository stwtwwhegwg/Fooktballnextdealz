import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/HomePage';
import DownloadPage from './components/Download/DownloadPage';
import NewsList from './components/News/NewsList';
import GamesQuestsPage from './components/GamesQuests/GamesQuestsPage';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/games" element={<GamesQuestsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
