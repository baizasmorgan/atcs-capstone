import React, { useState } from 'react';
import Camera from './components/Camera';
import OCR from './components/OCR';
import MealSuggestion from './components/MealSuggestion';

const App: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [ocrText, setOcrText] = useState<string | null>(null);

  const handleImageCapture = (capturedImage: string) => {
    setImage(capturedImage);
  };

  const handleOcrResult = (text: string) => {
    setOcrText(text);
  };

  return (
    <div>
      <h1>Meal Suggestion App</h1>
      <Camera onCapture={handleImageCapture} />
      {image && <OCR image={image} onResult={handleOcrResult} />}
      {ocrText && <MealSuggestion text={ocrText} />}
    </div>
  );
};

export default App;