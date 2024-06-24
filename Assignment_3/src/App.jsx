import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Audio from "./components/Audio";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [initialValue, setInitialValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    if (value !== "") {
      setShowResult(true);
    }
  };

  const handleRecognitionResult = (recognizedText) => {
    setInitialValue(recognizedText.trim());
    setShowResult(false);  // Reset result when new recognition is done
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
      />
    </div>
  );
}

export default App;
