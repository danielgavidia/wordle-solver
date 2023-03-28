import data from './data.json';
import React from 'react';

export default function DataManipulation({ firstWord }) {

    const wordArray = Object.values(data);

    const finalArray = [];
    for (let i = 0; i < wordArray.length; i++) {
        for (let j = 0; j < wordArray[i].length; j++) {
            if (wordArray[i][j] === "a") {
                finalArray.push(wordArray[i]);
            }
        }
    }


    const lowerCaseFirstWord = firstWord.map(letter => letter.toLowerCase());


    // create filtering function

    const finalArray2 = [];

    for (let i = 0; i < wordArray.length; i++) {
        if (
            wordArray[i].includes(lowerCaseFirstWord[0]) == true &&
            wordArray[i].includes(lowerCaseFirstWord[1]) == true &&
            wordArray[i].includes(lowerCaseFirstWord[2]) == true &&
            wordArray[i].includes(lowerCaseFirstWord[3]) == true &&
            wordArray[i].includes(lowerCaseFirstWord[4]) == true
        ) {
            finalArray2.push(wordArray[i]);
        }
    }

    const listItems = finalArray2.map((word) => <div className='word'>{word}</div>);

    // console.log(lowerCaseFirstWord);
    // console.log(finalArray2);
    // console.log(listItems);

    return (
        <div className='wordArray'>{listItems.slice(0, 10)}</div>
    );
}

