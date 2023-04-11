import React from 'react';
import Plot from 'react-plotly.js';
import data from './data.json';

export default function Recharts({ jsonData }) {

    const trace1 = {
        type: 'bar',
        x: [jsonData.length],
        y: ['WORDS REMAINING'],
        text: jsonData.length,
        orientation: 'h',
        showlegend: false,
        marker: {
            color: 'white',
        }
    };

    const trace2 = {
        type: 'bar',
        x: [data.length - jsonData.length],
        y: ['WORDS REMAINING'],
        orientation: 'h',
        showlegend: false,
        marker: {
            color: 'gray',
        }
    };

    const plotData = [trace1, trace2];

    const layout = {
        autosize: true,
        width: '1000px',
        height: '100px',
        barmode: 'stack',
        xaxis: { visible: false },
        font: { family: 'Libre Franklin, sans-serif', color: 'white' },
        plot_bgcolor: 'black',
        paper_bgcolor: 'black'
    };

    const config = { staticPlot: true };

    return (
        <>
            <Plot
                data={plotData}
                layout={layout}
                config={config}
                className='word-count'
            />
        </>
    );
}
