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
      {/* Text in the top-left corner */}
      <div style={styles.topLeftText}>Capture an Image for a Meal Suggestion</div>

      {!showMealSuggestion ? (
        <>
          <div style={styles.cameraContainer}>
            <Camera onCapture={handleImageCapture} />
          </div>
          {image && <OCR image={image} onResult={handleOcrResult} />}
        </>
      ) : (
        <>
          {ocrText && <MealSuggestion text={ocrText} />}
          <button onClick={handleRestart} style={styles.captureAnotherImageButton}>
            Capture Another Image
          </button>
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
    fontFamily: 'Rubik, sans-serif', // Apply Rubik font to the whole app
    color: '#38444A', // Apply #38444A color to all text in the app
    position: 'relative', // Make the container relative to position the text
  },
  topLeftText: {
    position: 'absolute',  // Absolute positioning to place it in the top-left
    top: '20px',           // Space from the top of the container
    left: '70px',          // Space from the left of the container
    fontSize: '16px',      // Smaller font size
    fontWeight: '500',     // Set font weight to bold
    color: '#38444A',      // Use the same color for consistency
    fontFamily: 'Rubik, sans-serif', // Ensure the font is Rubik
  },
  title: {
    marginBottom: '10px', // Space between the title and the camera component
  },
  cameraContainer: {
    display: 'flex',
    justifyContent: 'center',  // Center the camera horizontally
    alignItems: 'center',      // Center the camera vertically
    flexDirection: 'column',   // Stack elements vertically
    width: '100%',
    height: '50vh',            // Reduced height to take up less space vertically
    marginTop: '30px',         // Add margin to move the camera field up
    marginBottom: '20px',      // Add space below the camera for the buttons
  },
  captureAnotherImageButton: {
    backgroundColor: '#38444A', // Set background color of the button to #38444A
    color: 'white',             // Text color is white
    fontSize: '18px',           // Set font size for the button text
    border: '2px solid white',  // White border around the button
    padding: '10px 20px',       // Padding around the text
    borderRadius: '25px',       // Slightly rounded corners
    cursor: 'pointer',          // Pointer cursor on hover
    fontFamily: 'Rubik, sans-serif', // Apply Rubik font
    textDecoration: 'none',     // Remove default underline if any
    transition: 'all 0.3s ease', // Smooth transition for hover effects
  },
};

export default App;
