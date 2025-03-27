// VoiceControlButton.tsx
import useVoiceControl from "hooks/useVoiceControl";
import React from "react";

const VoiceControlButton = () => {
  const { isListening, startListening, stopListening, spokenText } =
    useVoiceControl();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button
        onClick={startListening}
        style={{
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Start Listening
      </button>
      <textarea
        value={spokenText}
        readOnly
        placeholder="Detected speech will appear here..."
        style={{
          width: "300px",
          height: "100px",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={stopListening}
        style={{
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Stop Listening & Execute
      </button>
    </div>
  );
};

export default VoiceControlButton;
