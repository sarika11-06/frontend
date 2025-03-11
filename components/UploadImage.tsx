import { useEffect, useRef, useState } from "react";

function GestureRecognition() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prediction, setPrediction] = useState("");
  const [isCameraOn, setIsCameraOn] = useState(false);

  useEffect(() => {
    return () => closeCamera(); // Cleanup on unmount
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraOn(true);
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
  };

  const captureAndSendFrame = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
      if (blob) {
        const formData = new FormData();
        formData.append("file", blob, "frame.jpg");

        const response = await fetch("http://localhost:8000/predict/", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.gesture) setPrediction(data.gesture);
      }
    }, "image/jpeg");
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCameraOn) {
      interval = setInterval(captureAndSendFrame, 1000);
    }
    return () => clearInterval(interval);
  }, [isCameraOn]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Real-Time Hand Gesture Recognition
      </h2>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className={`w-full rounded-lg ${isCameraOn ? "block" : "hidden"}`}
        />
        <canvas ref={canvasRef} width="640" height="480" className="hidden" />

        <h3 className="text-lg font-semibold text-gray-700 mt-4">
          Prediction: <span className="text-[#f54a00]">{prediction || "N/A"}</span>
        </h3>

        <button
          onClick={isCameraOn ? closeCamera : startCamera}
          className="mt-4 px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 
                     bg-[#f54a00] hover:bg-[#c03b00] focus:outline-none focus:ring-2 focus:ring-[#f54a00]"
        >
          {isCameraOn ? "Close Camera" : "Open Camera"}
        </button>
      </div>
    </div>
  );
}

export default GestureRecognition;
