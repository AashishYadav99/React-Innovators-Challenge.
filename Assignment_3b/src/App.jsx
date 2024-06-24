import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputBox from "./components/InputBox.jsx";
import { useState, useEffect } from "react";

function App() {
  // const initialWord = "Apple";
  const wordToDisplay = "Hello";
  const [word, setWord] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onHandleSubmit = () => {
    setWord(inputValue);
  }

  useEffect(() => {
    if (word !== "") {
      setResult(word === wordToDisplay ? "Your typing is correct" : `Your typing is incorrect. The correct word is 
      ${wordToDisplay}`);
    }
  }, [word, wordToDisplay]);

  return (
    <>
      <div className="mainContainer">
        <h1>Word for You: {wordToDisplay}</h1>
       
        <div className="result">
          <h5>{result && <span>{result}</span>}</h5></div>
        <InputBox value={inputValue} onHandleSubmit={onHandleSubmit} handleInputChange={handleInputChange} />
      </div>
    </>
  );
}

export default App;