import React, { useRef } from 'react';

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
        <div>
            <video ref={videoRef} width="640" height="480" />
            <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
            <button onClick={captureImage}>Capture</button>
        </div>
    );
};

export default Camera;