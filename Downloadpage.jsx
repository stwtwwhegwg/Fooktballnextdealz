import React from 'react';
import DownloadButtons from './DownloadButtons';

const DownloadPage = () => {
  return (
    <div style={styles.container}>
      <h1>FootballNextDealz App herunterladen</h1>
      <p>
        Die FootballNextDealz App für Android und iOS ist <strong>bald verfügbar</strong>.<br />
        Bis dahin kannst du hier alle News, Quiz und Spiele in der App erwarten.
      </p>

      <DownloadButtons />

      <p style={{ marginTop: 20, fontStyle: 'italic' }}>
        Hinweis: Spiele & Quiz sind aktuell nur in der App verfügbar.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 600,
    margin: '50px auto',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: 20,
  },
};

export default DownloadPage;
