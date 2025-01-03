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
    <div style={styles.appContainer}>
      <h1 style={styles.title}>Meal Suggestion App</h1>

      {!showMealSuggestion ? (
        <>
          {/* Add space between the title and the camera */}
          <div style={styles.cameraContainer}>
            <Camera onCapture={handleImageCapture} />
          </div>
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

// TypeScript type for the style object
const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    marginBottom: '30px', // Space between the title and the camera component
  },
  cameraContainer: {
    display: 'flex',
    justifyContent: 'center',  // Center the camera horizontally
    alignItems: 'center',      // Center the camera vertically
    flexDirection: 'column',   // Stack elements vertically
    width: '100%',
    height: '60vh',            // Height of the camera section
    marginBottom: '20px',      // Add some space below the camera for the buttons
  },
};

export default App;
