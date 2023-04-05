import React from 'react';
import data from './data1.json';
import Plot from 'react-plotly.js';

export default function DataManipulation5() {

    const trace1 = {
        type: 'bar',
        x: [10, 20, 30, 40, 50],
        y: ['word1', 'word2', 'word3', 'word4', 'word5'],
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

    console.log(data);
    return (
        <div></div>
    );
}
