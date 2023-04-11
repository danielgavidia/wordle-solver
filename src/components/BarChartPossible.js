import React, { useState } from 'react';
import Plot from 'react-plotly.js';

export default function BarChartPossible({ jsonData }) {

    const wordsFinal = jsonData.map(item => item.word);
    const scoresFinal = jsonData.map(item => item.score);

    const trace1 = {
        type: 'bar',
        x: scoresFinal.slice(-10),
        y: wordsFinal.slice(-10),
        text: scoresFinal.slice(-10),
        orientation: 'h',
        name: "static plot",
        marker: {
            color: "white"
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
                className='interface1'
            />
        </>
    );
}
