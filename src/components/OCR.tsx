import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

interface OCRProps {
  image: string;
  onResult: (text: string) => void;
}

const OCR: React.FC<OCRProps> = ({ image, onResult }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
      setLoading(false);
    });

    // Cleanup in case the component unmounts
    return () => {
      setLoading(false);
    };
  }, [image, onResult]);

  return <div>{loading ? 'Processing...' : ''}</div>;
};

export default OCR;
