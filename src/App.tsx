import React, { useState } from 'react';
import Camera from './components/Camera';
import OCR from './components/OCR';
import MealSuggestion from './components/MealSuggestion';

const App: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [ocrText, setOcrText] = useState<string | null>(null);
  const [showMealSuggestion, setShowMealSuggestion] = useState<boolean>(false);

  const handleImageCapture = (capturedImage: string) => {
    setImage(capturedImage);
    setShowMealSuggestion(false); // Reset meal suggestion screen when capturing a new image
  };

  const handleOcrResult = (text: string) => {
    setOcrText(text);
    setShowMealSuggestion(true); // Show meal suggestion after OCR is processed
  };

  const handleRestart = () => {
    // Reset everything so that user can start the process again
    setImage(null);
    setOcrText(null);
    setShowMealSuggestion(false); // Show camera and OCR screen again
  };

  return (
    <div>
      <h1>Meal Suggestion App</h1>

      {!showMealSuggestion ? (
        <>
          {/* Show Camera and OCR components only before meal suggestion is displayed */}
          <Camera onCapture={handleImageCapture} />
          {image && <OCR image={image} onResult={handleOcrResult} />}
        </>
      ) : (
        <>
          {/* Show the meal suggestion screen after OCR */}
          {ocrText && <MealSuggestion text={ocrText} />}
          <button onClick={handleRestart}>Capture Another Image</button>
        </>
      )}
    </div>
  );
};

export default App;
