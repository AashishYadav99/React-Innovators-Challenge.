import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Audio from "./components/AudioPlayer";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [initialValue, setInitialValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    if (value != "") {
      setShowResult(true);
    } else {
      alert("Type what you hear.");
    }
  };

  const handleRecognitionResult = (recognizedText) => {
    setInitialValue(recognizedText);
  };

  return (
    <div className="mainContainer">
      <Audio
        onSubmit={onSubmit}
        handleInputChange={handleInputChange}
        value={value}
        showResult={showResult}
        initialValue={initialValue}
        onRecognitionResult={handleRecognitionResult}
      ></Audio>
    </div>
  );
}

export default App;
