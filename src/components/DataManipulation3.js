import React, { useState } from 'react';

export default function DataManipulation3() {

    // 1. create initial array of objects
    const initialArray = [];

    for (let i = 0; i < 30; i++) {
        initialArray.push('');
    }



    // 2. create useState
    const [letters, setLetters] = useState(initialArray);

    // 3. create function for replacing objects in array
    function handleClick(index, newLetter) {
        const nextLetters = letters.map((c, i) => {
            if (i === index) {
                return newLetter;
            } else {
                return c;
            }
        });
        setLetters(nextLetters);
    }

    // 4. Set array of letters
    const arrayLetters = ['Q', 'B'];

    // console.log(letters);

    return (
        <ul>
            {letters.map((letter, i) => (
                <li key={i}>
                    {letter}
                    <button onClick={() => { handleClick(i, arrayLetters[i]); }}>
                        +1
                    </button>
                </li>
            ))}
        </ul>
    );
}
