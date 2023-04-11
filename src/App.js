import React, { useState } from "react";
import './App.css';
import Letters from "./components/Letters";
import Keyboard from "./components/Keyboard";
import BarChartPossible from "./components/BarChartPossible";
import BarChartStrategic from "./components/BarChartStrategic";
import NavBar from "./components/NavBar";
import data from './components/data.json';
import WordCount from "./components/WordCount";

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
  const [minCounter, setMinCounter] = useState(0);
  const [maxCounter, setMaxCounter] = useState(5);
  const [jsonData, setJsonData] = useState(data);
  const [arrayStrategic, setArrayStrategic] = useState(data);

  // 2. create function for adding letters
  const addLetters = (newLetter) => {
    if (counter < maxCounter) {
      setCounter(counter => counter + 1);

      const newArray = array.map((i, index) => {
        if (counter === index && i.letter === '') {
          return { id: i.id, letter: newLetter, color: 'letter-box-gray' };
        } else {
          return { id: i.id, letter: i.letter, color: i.color };
        }
      });
      setArray(newArray);
    }
  };

  // 3. Create function for deleting letters
  const deleteLetters = () => {
    if (counter > minCounter) {
      setCounter(newCounter => newCounter - 1);

      const newArray = array.map((i, index) => {
        if (counter - 1 === index) {
          return { id: i.id, letter: '', color: 'letter-box' };
        } else {
          return { id: i.id, letter: i.letter, color: i.color };
        }
      });
      setArray(newArray);
    }
  };

  // 4. Create function for changing button colors
  const changeColor = (indexButton) => {
    if (indexButton >= minCounter) {
      const newArray = array.map(i => {
        if (i.color === 'letter-box-gray' && indexButton === i.id) {
          return { id: i.id, letter: i.letter, color: 'letter-box-yellow' };
        } else if (i.color === 'letter-box-yellow' && indexButton === i.id) {
          return { id: i.id, letter: i.letter, color: 'letter-box-green' };
        } else if (i.color === 'letter-box-green' && indexButton === i.id) {
          return { id: i.id, letter: i.letter, color: 'letter-box-gray' };
        } else {
          return { id: i.id, letter: i.letter, color: i.color };
        };
      });
      setArray(newArray);
    }
  };

  // 5. Create function for setting new min and new max
  const resetMinMax = () => {
    if (counter === maxCounter) {
      setMinCounter(min => min + 5);
      setMaxCounter(max => max + 5);

      let currentArray = array.slice(minCounter, maxCounter);

      let greenLetters = [];
      for (let i = 0; i < currentArray.length; i++) {
        if (currentArray[i].color === 'letter-box-green') {
          greenLetters.push(currentArray[i].letter);
        }
      }

      let dataCopy = [...jsonData];
      for (let i = 0; i < currentArray.length; i++) {
        if (currentArray[i].color === 'letter-box-gray' && !greenLetters.includes(currentArray[i].letter)) {
          dataCopy = dataCopy.filter(item => !item.word.includes(currentArray[i].letter));
        } else if (currentArray[i].color === 'letter-box-yellow') {
          dataCopy = dataCopy.filter(item => item.word.includes(currentArray[i].letter));
          dataCopy = dataCopy.filter(item => !item.word[i].includes(currentArray[i].letter));
        } else if (currentArray[i].color === 'letter-box-green') {
          dataCopy = dataCopy.filter(item => item.word[i].includes(currentArray[i].letter));
        }
      }
      setJsonData(dataCopy);

      let dataCopyStrategic = [...arrayStrategic];
      for (let i = 0; i < currentArray.length; i++) {
        dataCopyStrategic = dataCopyStrategic.filter(item => !item.word.includes(currentArray[i].letter));
      }
      setArrayStrategic(dataCopyStrategic);
    };
  };

  // RENDER
  return (
    <div className="App">
      <NavBar />
      <div className="interface">
        <div className="interface-left">
          <BarChartPossible jsonData={jsonData} />
          <div className="interface-left-bottom">
            <BarChartStrategic jsonData={jsonData} arrayStrategic={arrayStrategic} />
            <WordCount jsonData={jsonData} />
          </div>
        </div>
        <Letters array={array} changeColor={changeColor} />
      </div>
      <Keyboard addLetters={addLetters} deleteLetters={deleteLetters} resetMinMax={resetMinMax} />
    </div >
  );
};

export default App;
