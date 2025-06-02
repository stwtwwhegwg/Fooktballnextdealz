// src/services/newsService.js
import axios from 'axios';

// Deine News API URL mit deinem Key und Suchbegriff Fußball auf Deutsch
const API_URL = 'https://gnews.io/api/v4/search?q=fussball&lang=de&token=6ab5c9d548c641469c7411788a7c6f27';

export const fetchFootballNews = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.articles;
  } catch (error) {
    console.error('Fehler beim Abrufen der Fußball-News:', error);
    return [];
  }
};
