import React from "react";
import styles from "./Audio.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AudioPlayer({
  onSubmit,
  handleInputChange,
  value,
  showResult,
  initialValue,
  onRecognitionResult,
}) {
  const audio = new Audio("/audio/india1.m4a");

  const start = () => {
    audio.play();
    startRecognition();
  };

  const stop = () => {
    audio.pause();
  };

  const startRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Sorry, your browser does not support speech recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      const recognizedText = event.results[0][0].transcript;
      console.log("Recognized Text:", recognizedText); // Debug log
      onRecognitionResult(recognizedText.trim()); // Trim any extra spaces
    };

    recognition.start();
  };

  return (
    <div className={styles.container}>
      <h1>Play audio</h1>
      <div className="buttonContainer mt-2">
        <button type="button" className="btn btn-success me-5" onClick={start}>
          Play
        </button>
        <button type="button" className="btn btn-warning" onClick={stop}>
          Pause
        </button>
      </div>
      <div className="mt-3">
        <input
          type="text"
          value={value}
          placeholder="Type the word you hear"
          onChange={handleInputChange}
        />
      </div>
      

      {showResult && (
        <div className={styles.result}>
          {value.trim().toLowerCase() === initialValue.toLowerCase() ? (
            <span>Your spelling is correct</span>
          ) : (
            <span>
              Your spelling is incorrect. The correct spelling is{" "}
              {initialValue}
            </span>
          )}
        </div>
      )}
      <button className="btn btn-success mt-3" onClick={onSubmit}>
        Submit Answer
      </button>
    </div>
  );
}

export default AudioPlayer;
