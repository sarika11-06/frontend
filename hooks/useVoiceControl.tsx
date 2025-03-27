import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useVoiceControl = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const recognitionRef = useRef<any>(null);

  // Comprehensive browser support check
  const isSpeechRecognitionSupported = () => {
    return (
      typeof window !== "undefined" &&
      (!!(window as any).SpeechRecognition ||
        !!(window as any).webkitSpeechRecognition)
    );
  };

  useEffect(() => {
    // Prevent server-side rendering issues
    if (typeof window === "undefined") return;

    // Check speech recognition support
    if (!isSpeechRecognitionSupported()) {
      console.error("Speech recognition not supported");
      return;
    }

    // Use vendor-prefixed SpeechRecognition
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    try {
      const recognition = new SpeechRecognition();

      // Detailed configuration
      recognition.continuous = false; // Changed to false for more precise control
      recognition.interimResults = true; // Changed to true to capture interim results
      recognition.lang = "en-US";
      recognition.maxAlternatives = 1;

      // Handle speech recognition results
      recognition.onresult = (event: any) => {
        // Accumulate transcript from all results
        let fullTranscript = "";
        for (let i = 0; i < event.results.length; i++) {
          fullTranscript += event.results[i][0].transcript;
        }

        const processedTranscript = fullTranscript.trim().toLowerCase();
        setSpokenText(processedTranscript);

        console.log("Captured Speech:", processedTranscript);
      };

      // Comprehensive error handling
      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      // Handle end of speech recognition
      recognition.onend = () => {
        console.log("Speech recognition ended");
        setIsListening(false);
      };

      recognitionRef.current = recognition;

      // Cleanup
      return () => {
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
      };
    } catch (initError) {
      console.error("Speech recognition initialization error:", initError);
      setIsListening(false);
    }
  }, []);

  // Command execution with detailed logging
  const executeCommand = useCallback(
    (command: string) => {
      console.log("Executing command:", command);

      if (typeof window === "undefined") return;

      const commands: { [key: string]: string } = {
        home: "/",
        about: "/about",
        signup: "/signup",
        basics: "/basics",
        contact: "/contact",
      };

      const matchedCommand = Object.keys(commands).find((key) =>
        command.includes(key)
      );

      if (matchedCommand) {
        console.log("Navigating to:", commands[matchedCommand]);
        navigate(commands[matchedCommand]);
      } else if (command.includes("scroll down")) {
        console.log("Scrolling down");
        window.scrollBy({ top: 300, behavior: "smooth" });
      } else if (command.includes("scroll up")) {
        console.log("Scrolling up");
        window.scrollBy({ top: -300, behavior: "smooth" });
      } else {
        console.log("No matching command found");
      }
    },
    [navigate]
  );

  // Start listening with comprehensive error handling
  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      console.error("Speech recognition not initialized");
      return;
    }

    try {
      // Reset spoken text before starting
      setSpokenText("");

      // Start recognition
      recognitionRef.current.start();
      setIsListening(true);

      console.log("Started listening");
    } catch (error) {
      console.error("Start listening error:", error);
      setIsListening(false);
    }
  }, []);

  // Stop listening with command execution
  const stopListening = useCallback(() => {
    if (!recognitionRef.current) {
      console.error("Speech recognition not initialized");
      return;
    }

    try {
      // Stop recognition
      recognitionRef.current.stop();
      setIsListening(false);

      console.log("Stopped listening. Spoken text:", spokenText);

      // Execute command if text exists
      if (spokenText) {
        executeCommand(spokenText);
      }
    } catch (error) {
      console.error("Stop listening error:", error);
      setIsListening(false);
    }
  }, [spokenText, executeCommand]);

  // Expose functionality
  return {
    isListening,
    startListening,
    stopListening,
    spokenText,
    isSupported: isSpeechRecognitionSupported(),
  };
};

export default useVoiceControl;
