import React from 'react';
import data1 from './data1.json';
import Plot from 'react-plotly.js';

export default function DataManipulation4({ array, counter }) {

    // filter array
    function filterFunction(array, wordArray, positionArray, positionWordArray) {
        if (array[positionArray].color === 'letter-box') {
            let a = wordArray.filter(item => !item.word.includes(array[positionArray].letter));
            return a;
        } else if (array[positionArray].color === 'letter-box-yellow') {
            let a = wordArray.filter(item => item.word.includes(array[positionArray].letter));
            return a;
        } else {
            let a = wordArray.filter(item => item.word[positionWordArray].includes(array[positionArray].letter));
            return a;
        }
    }

    const a1 = filterFunction(array, data1, 0, 0);
    const a2 = filterFunction(array, a1, 1, 1);
    const a3 = filterFunction(array, a2, 2, 2);
    const a4 = filterFunction(array, a3, 3, 3);
    const a5 = filterFunction(array, a4, 4, 4);

    const a6 = filterFunction(array, a5, 5, 0);
    const a7 = filterFunction(array, a6, 6, 1);
    const a8 = filterFunction(array, a7, 7, 2);
    const a9 = filterFunction(array, a8, 8, 3);
    const a10 = filterFunction(array, a9, 9, 4);

    const a11 = filterFunction(array, a10, 10, 0);
    const a12 = filterFunction(array, a11, 11, 1);
    const a13 = filterFunction(array, a12, 12, 2);
    const a14 = filterFunction(array, a13, 13, 3);
    const a15 = filterFunction(array, a14, 14, 4);

    const a16 = filterFunction(array, a15, 15, 0);
    const a17 = filterFunction(array, a16, 16, 1);
    const a18 = filterFunction(array, a17, 17, 2);
    const a19 = filterFunction(array, a18, 18, 3);
    const a20 = filterFunction(array, a19, 19, 4);

    const a21 = filterFunction(array, a20, 20, 0);
    const a22 = filterFunction(array, a21, 21, 1);
    const a23 = filterFunction(array, a22, 22, 2);
    const a24 = filterFunction(array, a23, 23, 3);
    const a25 = filterFunction(array, a24, 24, 4);

    const a26 = filterFunction(array, a25, 25, 0);
    const a27 = filterFunction(array, a26, 26, 1);
    const a28 = filterFunction(array, a27, 27, 2);
    const a29 = filterFunction(array, a28, 28, 3);
    const a30 = filterFunction(array, a29, 29, 4);

    const arrayArrays = [
        a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14,
        a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25,
        a26, a27, a28, a29, a30
    ];

    const itemsList = () => {
        if (counter === 0) {
            return data1;
        } else {
            return arrayArrays[counter - 1];
        }
    };


    // create plot
    const wordsFinal = itemsList().map(item => item.word);
    const scoresFinal = itemsList().map(item => item.score);

    const trace1 = {
        type: 'bar',
        x: scoresFinal.slice(0, 10),
        y: wordsFinal.slice(0, 10),
        text: scoresFinal.slice(0, 10),
        orientation: 'h',
        name: "static plot",
    };

    const layout = {
        margin: {
            l: 100,
            r: 100,
            b: 10,
            t: 10,
            pad: 4
        },
        xaxis: {
            visible: false
        }
    };

    const config = {
        staticPlot: true
    };


    return (
        <>
            <Plot data={[trace1]} layout={layout} config={config} />
        </>
    );
}
