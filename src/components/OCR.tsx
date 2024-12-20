import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

interface OCRProps {
    image: string;
    onResult: (text: string) => void;
  }

  const OCR: React.FC<OCRProps> = ({ image, onResult }) => {
    useEffect(() => {
      Tesseract.recognize(
        image,
        'eng',
        {
          logger: (m) => console.log(m),
        }
      ).then(({ data: { text } }) => {
        onResult(text);
      });
    }, [image, onResult]);
  
    return <div>Processing...</div>;
  };
  
  export default OCR;