import React, { useRef } from 'react';

// Add Rubik font from Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap';
document.head.appendChild(link);

const Camera: React.FC<{ onCapture: (image: string) => void }> = ({ onCapture }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const startCamera = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        }
    };

    const captureImage = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        if (canvas && video) {
            const context = canvas.getContext('2d');
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL('image/png');
                onCapture(imageData);
            }
        }
    };

    React.useEffect(() => {
        startCamera();
    }, []);

    return (
        <div style={styles.cameraContainer}>
            <video ref={videoRef} style={styles.videoElement} />
            <canvas ref={canvasRef} width="360" height="1800" style={{ display: 'none' }} />
            
            {/* White circular button with smaller black outline circle inside */}
            <button onClick={captureImage} style={styles.captureButton}>
                <div style={styles.innerCircle} />
            </button>
        </div>
    );
};

// Typing the styles object as React.CSSProperties
const styles: { [key: string]: React.CSSProperties } = {
    cameraContainer: {
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically
        position: 'relative',     // Make the container relative for absolute positioning of the button
        width: '360px',           // Width remains at 360px for phone-like proportion
        height: '1800px',         // Adjust height for a more rectangular, vertically elongated field
        borderRadius: '20px',     // Round the corners of the camera container
        overflow: 'hidden',       // Ensure the video content doesn't overflow the rounded corners
        fontFamily: 'Rubik, sans-serif', // Apply Rubik font to all text in the container
        color: '#38444A',         // Apply the color #38444A to all text in the container
    },
    videoElement: {
        width: '100%',            // Make video fill the width of the container
        height: '100%',           // Make video fill the height of the container
        objectFit: 'cover',       // Ensure the video covers the entire area without distortion
    },
    captureButton: {
        position: 'absolute',     // Position the button inside the camera space
        bottom: '20px',           // Space from the bottom of the camera container
        left: '50%',              // Horizontally center the button
        transform: 'translateX(-50%)', // Adjust to truly center the button
        width: '60px',            // Smaller width of the button
        height: '60px',           // Smaller height of the button
        borderRadius: '50%',     // Makes the button round
        backgroundColor: 'white', // White background color
        color: '#38444A',         // Font color set to #38444A
        fontSize: '30px',         // Smaller font size for the icon/text
        border: 'none',           // Remove default border
        cursor: 'pointer',       // Pointer cursor on hover
        display: 'flex',          // Center the icon in the button
        justifyContent: 'center', // Horizontal centering
        alignItems: 'center',     // Vertical centering
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Optional shadow for effect
        overflow: 'hidden',       // Ensures that the inner circle doesn't overflow
    },
    innerCircle: {
        position: 'absolute',
        width: '47px',            // Smaller circle inside the button
        height: '47px',           // Same as width to keep it round
        borderRadius: '50%',     // Ensures it's a circle
        border: '2px solid black', // Black border for the smaller circle
        top: '50%',              // Position at the center of the button
        left: '50%',             // Position at the center of the button
        transform: 'translate(-50%, -50%)', // Adjust to center the smaller circle
    }
};

export default Camera;
