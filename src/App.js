import React, { useState } from "react";
import './App.css';
import data from './components/data.json';

import Letters from "./components/Letters";
import Keyboard from "./components/Keyboard";
import BarChart from "./components/BarChart";
import StrategicWords from "./components/StrategicWords";
import NavBar from "./components/NavBar";
import WordCount from "./components/WordCount";


function App() {
  // 0. Initialize array
  const initialArray = [];
  for (let i = 0; i < 30; i++) {
    initialArray.push({
      id: i,
      letter: '',
      color: 'letter-box'
    });
  }

  // 1. Set state
  const [array, setArray] = useState(initialArray);
  const [counter, setCounter] = useState(0);
  const [minCounter, setMinCounter] = useState(0);
  const [maxCounter, setMaxCounter] = useState(5);
  const [jsonData, setJsonData] = useState(data);
  const [arrayStrategic, setArrayStrategic] = useState(data);
  const [modal, setModal] = useState(false);

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

  // 4. Create function for changing letter colors
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

  // 5. Create function for submitting word
  const submit = () => {
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

      //change array colors
      const arrayUpdate = array.map(item => {
        if (item.letter != '' && !item.color.includes('white')) {
          return { id: item.id, letter: item.letter, color: item.color.concat('-white') };
        } else {
          return { id: item.id, letter: item.letter, color: item.color };
        }
      });
      setArray(arrayUpdate);

    }
  };

  // 6. Create function for resetting word / array
  const resetSolver = () => {
    setMinCounter(0);
    setMaxCounter(5);
    setCounter(0);
    setArray(initialArray);
    setJsonData(data);
    setArrayStrategic(data);
  };

  // RENDER
  return (
    <div className="App">
      <NavBar modal={modal} setModal={setModal} />
      <div className="interface">
        <div className="interface-left">
          <BarChart jsonData={jsonData} />
          <div className="interface-left-bottom">
            <StrategicWords jsonData={jsonData} arrayStrategic={arrayStrategic} />
            <WordCount jsonData={jsonData} modal={modal} />
          </div>
        </div>
        <Letters array={array} changeColor={changeColor} />
      </div>
      <Keyboard
        addLetters={addLetters}
        deleteLetters={deleteLetters}
        submit={submit}
        resetSolver={resetSolver}
      />
    </div >
  );
};

export default App;
