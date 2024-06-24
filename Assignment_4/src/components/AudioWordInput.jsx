import "regenerator-runtime/runtime";
import styles from '../components/AudioWordInput.module.css'
import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function AudioWordInput() {
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const [value] = useState("English");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (transcript) {
      if (transcript.toLowerCase().trim() === value.toLowerCase()) {
        setResult("You have spoken the sentence correctly");
      } else {
        setResult("Your pronunciation is incorrect. Please try again.");
      }
    }
  }, [transcript, value]);

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  console.log(transcript);

  return (
    <>
      
        <p>Match the specified word through speech.</p>
        <p>Your word is : <b>English</b></p>

      <div className={styles.mainContent}>{transcript}</div>

      <div className={styles.mainContent}><p>{result}</p></div>

      
      <div className="btnStyle">
        <button
          type="button"
          className="btn btn-success me-5"
          onClick={startListening}
        >
          Start Speaking
        </button>

        <button
          className={`${styles.button} btn btn-warning ms-5`}
          onClick={SpeechRecognition.stopListening}
        >
          Stop Speaking
        </button>
      </div>
    </>
  );
}

export default AudioWordInput;
