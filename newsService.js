// Datei: newsService.js
export const fetchFootballNews = async () => {
  const apiKey = '6ab5c9d548c641469c7411788a7c6f27';
  const url = `https://newsapi.org/v2/everything?q=fussball&language=de&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    const json = await res.json();
    return json.articles.slice(0, 10); // nur 10 Artikel anzeigen
  } catch (error) {
    console.error('Fehler beim Laden der Fußball-News:', error);
    return [];
  }
};
