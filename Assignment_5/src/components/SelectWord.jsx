import { useState } from "react";
import styles from '../components/Select.module.css'
const SelectWord = ({ prompt, sentence, correctAnswers }) => {
    const [selectedWords, setSelectedWords] = useState([]);
    const [message, setMessage] = useState('');
  
   // Handle word click event
  const handleWordClick = (word) => {
    // Step 1: Check if the word is already selected
    if (selectedWords.includes(word)) {
      // Step 2: If it is, remove it from the selected words
      setSelectedWords((prevSelectedWords) =>
        prevSelectedWords.filter((selectedWord) => selectedWord !== word)
      );
    } else {
      // Step 3: If it is not, add it to the selected words
      setSelectedWords((prevSelectedWords) => [...prevSelectedWords, word]);
    }
  };
  
    const handleSubmit = () => {
      const isCorrect = selectedWords.sort().join(',') === correctAnswers.sort().join(',');
      setMessage(isCorrect ? 'Success! You selected the correct words.' : 'Error! Your selection is incorrect.');
    };
  
    return (
      <div>
        <h3 className={styles}>{prompt}</h3>
        <p>
          {sentence.split(' ').map((word, index) => (
            <span
              key={index}
              onClick={() => handleWordClick(word)}
              style={{
                cursor: 'pointer',
                color: selectedWords.includes(word) ? 'blue' : 'black',
                margin: '0 5px',
              }}
            >
              {word}
            </span>
          ))}
        </p>
        <button className={styles} onClick={handleSubmit} >Submit</button>
        <p>Result : {message && <span>{message}</span>} </p>
        
      </div>
    );
  };

  export default SelectWord;