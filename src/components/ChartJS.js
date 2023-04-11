import React, { useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import dataMaster from './data.json';
ChartJS.register(ChartDataLabels);

export default function ChartJSJS({ jsonData }) {
    const state = {
        labels: ['words remaining'],
        datasets: [
            {
                axis: 'y',
                backgroundColor: 'rgba(255, 255, 255)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: [jsonData.length]
            }

        ]
    };


    return (
        <div className='word-count'>
            <Bar
                data={state}
                plugins={ChartDataLabels}
                options={{
                    indexAxis: 'y',
                    scales: {
                        y: {
                            stacked: true,
                            ticks: {
                                color: 'white',
                                font: {
                                    family: "'Libre Franklin', sans-serif",
                                    size: 14
                                }
                            }
                        },
                        x: {
                            display: false
                        }
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            anchor: 'center',
                            color: 'black',
                            font: {
                                size: '16px',
                                family: "'Libre Franklin', sans-serif"
                            }
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
}
