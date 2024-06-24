import "./App.css";
import SelectWord from "../src/components/SelectWord";

const App = () => {
  const prompt = "Select the adjectives in the sentence.";
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const correctAnswers = ["quick", "lazy"];

  return (
    <div className="container">
      <SelectWord
        prompt={prompt}
        sentence={sentence}
        correctAnswers={correctAnswers}
      ></SelectWord>
    </div>
  );
};

export default App;
