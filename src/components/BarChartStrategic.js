import React from 'react';
import data from './data.json';
import Plot from 'react-plotly.js';

export default function BarChartStrategic({ array, counter }) {

    // filter array
    function filterFunction(arr, wordArray, positionArray) {
        let a = wordArray.filter(item => !item.word.includes(arr[positionArray].letter));
        return a;
    }

    const a1 = filterFunction(array, data, 0);
    const a2 = filterFunction(array, a1, 1);
    const a3 = filterFunction(array, a2, 2);
    const a4 = filterFunction(array, a3, 3);
    const a5 = filterFunction(array, a4, 4);

    const a6 = filterFunction(array, a5, 5);
    const a7 = filterFunction(array, a6, 6);
    const a8 = filterFunction(array, a7, 7);
    const a9 = filterFunction(array, a8, 8);
    const a10 = filterFunction(array, a9, 9);

    const a11 = filterFunction(array, a10, 10);
    const a12 = filterFunction(array, a11, 11);
    const a13 = filterFunction(array, a12, 12);
    const a14 = filterFunction(array, a13, 13);
    const a15 = filterFunction(array, a14, 14);

    const a16 = filterFunction(array, a15, 15);
    const a17 = filterFunction(array, a16, 16);
    const a18 = filterFunction(array, a17, 17);
    const a19 = filterFunction(array, a18, 18);
    const a20 = filterFunction(array, a19, 19);

    const a21 = filterFunction(array, a20, 20);
    const a22 = filterFunction(array, a21, 21);
    const a23 = filterFunction(array, a22, 22);
    const a24 = filterFunction(array, a23, 23);
    const a25 = filterFunction(array, a24, 24);

    const a26 = filterFunction(array, a25, 25);
    const a27 = filterFunction(array, a26, 26);
    const a28 = filterFunction(array, a27, 27);
    const a29 = filterFunction(array, a28, 28);
    const a30 = filterFunction(array, a29, 29);

    const arrayArrays = [
        a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14,
        a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25,
        a26, a27, a28, a29, a30
    ];

    //function for finding common letters

    function getEveryLetter(word) {
        let a = [];
        for (let i = 0; i < word.length; i++) {
            a.push(word[i]);
        }
        return a;
    }

    function strategicArray(array, largerArray) {

        const wordArray = array.map(item => item.word);

        const letterArray = [];

        for (let i = 0; i < wordArray.length; i++) {
            letterArray.push(getEveryLetter(wordArray[i]));
        }

        let flatLetterArray = [].concat(...letterArray);
        let flatLetterArraySet = [... new Set(flatLetterArray)];

        // return flatLetterArraySet;

        const strategicLetterArray = [];

        for (let i = 0; i < wordArray.length; i++) {
            for (let j = 0; j < flatLetterArraySet.length; j++) {
                if (wordArray[i].includes(flatLetterArraySet[j]) === false) {
                    strategicLetterArray.push(flatLetterArraySet[j]);
                }
            }
        }

        const strategicLetterArraySet = [... new Set(strategicLetterArray)];
        // return strategicLetterArraySet;

        const a = largerArray.map(item => item.word);

        let b = a.filter(item => item.includes(strategicLetterArraySet[0]));

        return b;

    }

    // itemsList

    const itemsList = () => {
        if (counter === 0) {
            return data;
        } else if (counter != 0 && arrayArrays[counter - 1].length === 0) {
            let newArrayArrays = arrayArrays.filter(arr => arr.length > 0);
            let shortestArray = newArrayArrays.reduce(function (a, b) {
                return a.length <= b.length ? a : b;
            });
            return shortestArray;
        } else {
            return arrayArrays[counter - 1];
        }
    };

    // const testArray = [
    //     { word: 'scale' },
    //     { word: 'scali' },
    //     { word: 'scalo' }
    // ];

    // const testLargerArray = [
    //     { word: 'hello' },
    //     { word: 'helio' }
    // ];

    // create plot
    const wordsFinal = itemsList().map(item => item.word);
    const scoresFinal = itemsList().map(item => item.score);

    // console.log(wordsFinal);

    const trace1 = {
        type: 'bar',
        x: scoresFinal.slice(-10),
        y: wordsFinal.slice(-10),
        text: scoresFinal.slice(-10),
        orientation: 'h',
        name: "static plot",
        marker: {
            color: "purple"
        },
    };

    const layout = {
        autosize: true,
        margin: {
            b: 10,
            t: 10,
            pad: 4
        },
        xaxis: {
            visible: false
        },
        font: {
            family: 'Libre Franklin, sans-serif',
            color: 'white'
        },
        plot_bgcolor: "black",
        paper_bgcolor: "black"
    };

    const config = {
        staticPlot: true
    };


    return (
        <>
            <Plot
                data={[trace1]}
                layout={layout}
                config={config}
                className='interface3'
            />
        </>
    );
}
