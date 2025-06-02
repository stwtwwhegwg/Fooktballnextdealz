import React, { useEffect, useState } from 'react';
import { fetchFootballNews } from './newsService';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFootballNews().then(data => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h1>⚽ Fußball-News</h1>

      {loading ? (
        <p>Lade News…</p>
      ) : (
        articles.map((article, index) => (
          <div key={index} style={styles.card}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
              <h3>{article.title}</h3>
              {article.urlToImage && (
                <img src={article.urlToImage} alt="News" style={styles.image} />
              )}
              <p>{article.description}</p>
            </a>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 800,
    margin: 'auto',
    padding: 20,
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  image: {
    width: '100%',
    maxHeight: 200,
    objectFit: 'cover',
    borderRadius: 8,
    marginTop: 10,
  },
};

export default NewsPage;
