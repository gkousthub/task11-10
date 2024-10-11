import React from 'react';

const Epaper = () => {
  return (
    <div>
      <h2>ePaper - Download or View</h2>
      <p>Read the latest edition of our ePaper online or download it for offline reading.</p>
      <a href="/path-to-your-epaper.pdf" download>Download ePaper (PDF)</a>
      <br />
      <iframe
        src="/path-to-your-epaper.pdf"
        width="100%"
        height="600px"
        title="ePaper"
        style={{ marginTop: '1rem' }}
      ></iframe>
    </div>
  );
};

export default Epaper;