import React, { useState } from "react";
import './App.css';
import JsonLoader from "./components/JsonLoader";
import Letters from "./components/Letters";
import Keyboard from "./components/Keyboard";
import DataManipulation from "./components/DataManipulation";
import DataManipulation2 from "./components/DataManipulation2";

function App() {


  const [letterArray, setLetterArray] = useState([]);

  const handleSetLetterArray = (letter) => {
    setLetterArray(letterArray => [...letterArray, letter]);
  };

  const [firstWord, setFirstWord] = useState([]);

  const handleSetFirstWord = () => {
    setFirstWord(letterArray.slice(0, 5));
  };

  return (
    <div className="App">
      <div className="interface">
        <Letters letterArray={letterArray} />
        <DataManipulation firstWord={firstWord} />
      </div>
      <Keyboard handleSetLetterArray={handleSetLetterArray} handleSetFirstWord={handleSetFirstWord} />
      <DataManipulation2 />
    </div>
  );
}

export default App;
