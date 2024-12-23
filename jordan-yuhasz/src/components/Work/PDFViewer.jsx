import React, { useState, useEffect } from 'react';

const PDFViewer = ({ file, theme, onError, isMobile }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error('PDF not found');
        }
        setIframeLoaded(true);
      })
      .catch(error => {
        console.error('Error loading PDF:', error);
        onError && onError(error);
      });
  }, [file, onError]);

  if (!iframeLoaded) {
    return null;
  }

  const styles = {
    container: {
      width: '100%',
      height: isMobile ? '400px' : '800px',
      position: 'relative',
      borderRadius: isMobile ? '6px' : '8px',
      overflow: 'hidden',
      backgroundColor: theme.background,
      border: `1px solid ${theme.accent}22`
    },
    iframe: {
      width: '100%',
      height: '100%',
      border: 'none'
    }
  };

  return (
    <div style={styles.container}>
      <iframe
        src={`${file}#view=FitH`}
        title="PDF Viewer"
        style={styles.iframe}
        onError={() => onError && onError(new Error('PDF loading failed'))}
      />
    </div>
  );
};

export default PDFViewer;