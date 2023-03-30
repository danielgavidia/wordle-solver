import React from 'react';

export default function Keyboard({ addLetters, deleteLetters }) {


    return (
        <>
            <div className="keyboard-container1">
                <button className="keyboard-letter" onClick={() => addLetters('Q')}>Q</button>
                <button className="keyboard-letter" onClick={() => addLetters('W')}>W</button>
                <button className="keyboard-letter" onClick={() => addLetters('E')}>E</button>
                <button className="keyboard-letter" onClick={() => addLetters('R')}>R</button>
                <button className="keyboard-letter" onClick={() => addLetters('T')}>T</button>
                <button className="keyboard-letter" onClick={() => addLetters('Y')}>Y</button>
                <button className="keyboard-letter" onClick={() => addLetters('U')}>U</button>
                <button className="keyboard-letter" onClick={() => addLetters('I')}>I</button>
                <button className="keyboard-letter" onClick={() => addLetters('O')}>O</button>
                <button className="keyboard-letter" onClick={() => addLetters('P')}>P</button>
            </div>
            <div className="keyboard-container2">
                <button className="keyboard-letter" onClick={() => addLetters('A')}>A</button>
                <button className="keyboard-letter" onClick={() => addLetters('S')}>S</button>
                <button className="keyboard-letter" onClick={() => addLetters('D')}>D</button>
                <button className="keyboard-letter" onClick={() => addLetters('F')}>F</button>
                <button className="keyboard-letter" onClick={() => addLetters('G')}>G</button>
                <button className="keyboard-letter" onClick={() => addLetters('H')}>H</button>
                <button className="keyboard-letter" onClick={() => addLetters('J')}>J</button>
                <button className="keyboard-letter" onClick={() => addLetters('K')}>K</button>
                <button className="keyboard-letter" onClick={() => addLetters('L')}>L</button>
            </div >
            <div className="keyboard-container3">
                <button className="keyboard-letter" onClick={() => addLetters('Z')}>ENTER</button>
                <button className="keyboard-letter" onClick={() => addLetters('Z')}>Z</button>
                <button className="keyboard-letter" onClick={() => addLetters('X')}>X</button>
                <button className="keyboard-letter" onClick={() => addLetters('C')}>C</button>
                <button className="keyboard-letter" onClick={() => addLetters('V')}>V</button>
                <button className="keyboard-letter" onClick={() => addLetters('B')}>B</button>
                <button className="keyboard-letter" onClick={() => addLetters('N')}>N</button>
                <button className="keyboard-letter" onClick={() => addLetters('M')}>M</button>
                <button className="keyboard-letter" onClick={() => deleteLetters()}>DELETE</button>
            </div >
        </>

    );
}
