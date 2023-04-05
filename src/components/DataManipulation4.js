import React, { useState } from 'react';
import data from './data.json';
import data1 from './data1.json';
import Plot from 'react-plotly.js';

export default function DataManipulation4({ array }) {

    const data1Final = data1.map(item => item.score);
    console.log(data1Final);

    const dataFinal = Object.values(data);
    const wordArray = dataFinal.map(word => word.toUpperCase());

    function filterFunction(array, wordArray, positionArray, positionWordArray) {
        if (array[positionArray].color === 'letter-box') {
            let a = wordArray.filter(word => !word.includes(array[positionArray].letter));
            return a;
        } else if (array[positionArray].color === 'letter-box-yellow') {
            let a = wordArray.filter(word => word.includes(array[positionArray].letter));
            return a;
        } else {
            let a = wordArray.filter(word => word[positionWordArray].includes(array[positionArray].letter));
            return a;
        }
    }

    const a1 = filterFunction(array, wordArray, 0, 0);
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

    const itemsList = () => {
        if (a6.length === 0) {
            return a5.map((word) => <div className='word'>{word}</div>);
        } else if (a11.length === 0) {
            return a10.map((word) => <div className='word'>{word}</div>);
        } else if (a16.length === 0) {
            return a15.map((word) => <div className='word'>{word}</div>);
        } else if (a21.length === 0) {
            return a20.map((word) => <div className='word'>{word}</div>);
        } else if (a26.length === 0) {
            return a25.map((word) => <div className='word'>{word}</div>);
        } else {
            return a30.map((word) => <div className='word'>{word}</div>);
        }
    };

    // Create Plot

    console.log(a5);

    const trace1 = {
        type: 'bar',
        x: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: a5,
        orientation: 'h',
        name: "static plot",
        mode: "markers+lines",
        marker: {
            size: [12, 15, 36]
        }
    };

    const layout = {
        title: 'Static Demo',
        width: 600,
        height: 400
    };

    const config = {
        staticPlot: true
    };


    return (
        <>
            <Plot data={[trace1]} layout={layout} config={config} />
            <div className='wordArray'>{itemsList().slice(1, 10)}</div>
        </>
    );
}
