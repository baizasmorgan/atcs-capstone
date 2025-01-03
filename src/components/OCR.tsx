import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

interface OCRProps {
  image: string;
  onResult: (text: string) => void;
}

const OCR: React.FC<OCRProps> = ({ image, onResult }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!image) return; // If there's no image, don't run OCR

    // Start the OCR process
    Tesseract.recognize(
      image,
      'eng',
      {
        logger: (m) => console.log(m), // Optionally log OCR progress
      }
    ).then(({ data: { text } }) => {
      // Once OCR is done, pass the result and stop the loading state
      onResult(text);
      setLoading(false); // Stop loading when OCR is done
    });

    // Cleanup in case the component unmounts
    return () => {
      setLoading(false);
    };
  }, [image, onResult]); // Only re-run effect when the image changes

  // Render Processing text only if OCR is still loading
  return (
    <div>
      {loading && <div style={styles.processingText}>Processing...</div>}
    </div>
  );
};

// Styling for OCR component
const styles = {
  processingText: {
    marginTop: '20px',         // Add space between the camera and processing text
    fontSize: '18px',
    color: 'gray',
    fontWeight: 'bold',
  },
};

export default OCR;
