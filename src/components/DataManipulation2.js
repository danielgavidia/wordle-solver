import React, { useState } from 'react';
import data from './data.json';

export default function DataManipulation2() {

    // convert JSON into array of strings, and then into array of objects
    const wordArray = Object.values(data);
    const wordArray2 = wordArray.map((str, index) => ({ id: index + 1, value: str, color: "gray" }));

    // update property of entire object array
    // wordArray2.forEach(function (element) {
    //     element.color = "gray";
    // });

    // new experiment

    const [color, setColor] = useState('letter-box');

    const handleClick = (event) => {
        if (color === 'letter-box') {
            setColor('letter-box-yellow');
        } else if (color === 'letter-box-yellow') {
            setColor('letter-box-green');
        } else {
            setColor('letter-box');
        }
    };



    // console
    // console.log(wordArray2);


    // return (
    //     <button onClick={wordArray2.forEach(function (element) {
    //         element.color = "red";
    //     })}>DataManipulation2</button>
    // );

    return (
        <div>
            <div className='letter-box-container'>
                <button className={color} onClick={handleClick}>Click</button>
                <button className={color} onClick={handleClick}>Click</button>
                <button className={color} onClick={handleClick}>Click</button>
                <button className={color} onClick={handleClick}>Click</button>
                <button className={color} onClick={handleClick}>Click</button>
            </div>
        </div>

    );
}
