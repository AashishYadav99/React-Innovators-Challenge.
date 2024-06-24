import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ImageList from "./components/ImageList";

function App() {

  return (
    <>
      <center>
        <h3>Select the correct Picture</h3>
        <h1>
          <i>Q: Which one is not a fruit ?</i>
        </h1>
      </center>
      <ImageList
       
      ></ImageList>
    </>
  );
}

export default App;
