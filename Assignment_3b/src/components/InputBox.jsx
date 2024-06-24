import "bootstrap/dist/css/bootstrap.min.css";

function InputBox({ onHandleSubmit, handleInputChange, inputValue }) {
  return (
    <>
      <input
        type="text"
        value={inputValue}
        placeholder="enter the word"
        onChange={handleInputChange}
      />
      <button className="btn btn-success mt-2" onClick={onHandleSubmit}>
        submit
      </button>

     
    </>
  );
}

export default InputBox;
