import React from 'react';
import data from './data.json';

export default function BarChartStrategic({ jsonData, arrayStrategic }) {

    let jsonDataWords = jsonData.map(item => item.word);
    let jsonDataLetters = [];
    for (let i = 0; i < jsonDataWords.length; i++) {
        for (let j = 0; j < jsonDataWords[i].length; j++) {
            let a = jsonDataWords[i];
            jsonDataLetters.push(a[j]);
        }
    }

    let jsonDataLettersCounts = jsonDataLetters.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc;
    }, {});

    let jsonDataLettersCountsSorted = Object.fromEntries(
        Object.entries(jsonDataLettersCounts).sort(([, a], [, b]) => a - b)
    );

    let filteredMasterData = [...data];
    let x = Object.keys(jsonDataLettersCountsSorted)[0];

    for (let i = 0; i < 2; i++) {
        filteredMasterData = filteredMasterData.filter(item => item.word.includes(Object.keys(jsonDataLettersCountsSorted)[i]));
    }

    // when it drops below 10
    const final = () => {
        if (jsonData.length === 1) {
            return jsonData;
        } else if (jsonData.length > 1 && jsonData.length < 10) {
            return filteredMasterData;
        } else if (arrayStrategic.length === 0) {
            return filteredMasterData;
        } else {
            return arrayStrategic;
        }
    };

    const words = () => {
        let x = final().map(item => {
            return <li className='strategic-words'>{item.word}</li>;
        });

        let y = x.slice(-5);
        return y;
    };

    return (
        <>
            <ul className='strategic-words-container'>{words()}</ul>
        </>
    );
}
