import React from 'react';

export default function Keyboard({ handleSetLetterArray, handleSetFirstWord }) {


    return (
        <>
            <div className="keyboard-container1">
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('Q')}>Q</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('W')}>W</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('E')}>E</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('R')}>R</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('T')}>T</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('Y')}>Y</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('U')}>U</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('I')}>I</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('O')}>O</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('P')}>P</button>
            </div>
            <div className="keyboard-container2">
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('A')}>A</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('S')}>S</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('D')}>D</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('F')}>F</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('G')}>G</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('H')}>H</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('J')}>J</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('K')}>K</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('L')}>L</button>
            </div >
            <div className="keyboard-container3">
                <button className="keyboard-letter" onClick={() => handleSetFirstWord()}>ENTER</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('Z')}>Z</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('X')}>X</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('C')}>C</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('V')}>V</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('B')}>B</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('N')}>N</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('M')}>M</button>
                <button className="keyboard-letter" onClick={() => handleSetLetterArray('O')}>DELETE</button>
            </div >
        </>

    );
}
