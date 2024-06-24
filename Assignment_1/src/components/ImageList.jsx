import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import styles from "../components/Image.module.css";
import apple from "./Image/apple.png";
import pear from "./Image/pear.png";
import pigeon from "./Image/pigeon.png";
import pineapple from "./Image/pineapple.png";

function ImageList() {
  const correctAnswer = 3;
  const images = [
    { id: 1, src: apple },
    { id: 2, src: pear },
    { id: 3, src: pigeon },
    { id: 4, src: pineapple },
  ];
  const [selectedImage, setSelectedImage] = useState();
  const [isCorrect, setIsCorrect] = useState();
  const [showAnswer, setShowAnswer] = useState(false);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  
  };

  const handleCheckAnswer = () => {
    setIsCorrect(selectedImage === correctAnswer);
    setShowAnswer(true);
  };

  const handleReset = () => {
    setSelectedImage();
    setIsCorrect();
    setShowAnswer(false);
  };
  return (
    <>
      <div className={` ${styles.container} fluid text-center mt-5`}>
        <div className="row">
          {images.map((imagesData) => (
            <div className={`col-6 ${styles.imagesGrid}`}>
              <span className="me-3">({imagesData.id})</span>
              <img
                className={
                  selectedImage === imagesData.id ? `${styles.active}` : ""
                }
                src={imagesData.src}
                alt=""
                key={imagesData.id}
                onClick={() => handleImageClick(imagesData.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="displayAnswer">
        
        <div className={styles.result}>
          {showAnswer && (
            <span className={isCorrect ? "correct" : "wrong"}>
            {isCorrect ? <b> Your answer is correct.</b> : <b>Your answer is wrong.</b> }
          </span>
            
          )}
          </div>
      </div>

      <div className={styles.buttonContainer}>
        <span></span>
        <button
          type="button"
          className="btn btn-secondary me-3"
          onClick={() => {
            handleReset();
          }}
        >
          <i className="fa-solid fa-rotate-right"></i>
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            handleCheckAnswer();
          }}
        >
          Check Answer
        </button>
      </div>
    </>
  );
}

export default ImageList;
