import React, { useState } from "react";
import './App.css';
import Letters from "./components/Letters";
import Keyboard from "./components/Keyboard";
import BarChart from "./components/BarChart";
import NavBar from "./components/NavBar";


function App() {

  // 1. create empty array of objects
  const initialArray = [];
  for (let i = 0; i < 30; i++) {
    initialArray.push({
      id: i,
      letter: '',
      color: 'letter-box'
    });
  }
  const [array, setArray] = useState(initialArray);
  const [counter, setCounter] = useState(0);

  // 2. create function for adding letters
  function addLetters(newLetter) {
    setCounter(counter => counter + 1);

    const newArray = array.map((i, index) => {
      if (counter === index) {
        return { id: i.id, letter: newLetter, color: i.color };
      } else {
        return { id: i.id, letter: i.letter, color: i.color };
      }
    });
    setArray(newArray);
  }

  // 3. Create function for deleting letters
  const deleteLetters = () => {
    setCounter(newCounter => newCounter - 1);

    const newArray = array.map((i, index) => {
      if (counter - 1 === index) {
        return { id: i.id, letter: '', color: 'letter-box' };
      } else {
        return { id: i.id, letter: i.letter, color: i.color };
      }
    });
    setArray(newArray);
  };

  // 4. Create function for changing button colors
  const changeColor = (indexButton) => {
    const newArray = array.map(i => {
      if (i.color === 'letter-box' && indexButton === i.id) {
        return { id: i.id, letter: i.letter, color: 'letter-box-yellow' };
      } else if (i.color === 'letter-box-yellow' && indexButton === i.id) {
        return { id: i.id, letter: i.letter, color: 'letter-box-green' };
      } else if (i.color === 'letter-box-green' && indexButton === i.id) {
        return { id: i.id, letter: i.letter, color: 'letter-box' };
      } else {
        return { id: i.id, letter: i.letter, color: i.color };
      }
      ;
    });
    setArray(newArray);
  };

  // 5. Create function for 


  // RENDER

  return (
    <div className="App">
      <NavBar />
      <div className="interface">
        <Letters array={array} changeColor={changeColor} />
        <BarChart array={array} counter={counter} />
      </div>
      <Keyboard addLetters={addLetters} deleteLetters={deleteLetters} />
    </div>
  );
}

export default App;
