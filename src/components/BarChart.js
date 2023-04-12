import React, { useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ChartDataLabels);

export default function BarChart({ jsonData }) {

    const wordsFinal = jsonData.map(item => item.word);
    const scoresFinal = jsonData.map(item => item.score);

    const state = {
        labels: wordsFinal.slice(-10),
        datasets: [
            {
                axis: 'y',
                backgroundColor: 'rgba(255, 255, 255)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: scoresFinal.slice(-10)
            }

        ]
    };


    return (
        <div className='barchart-possible'>
            <div className='barchart-possible-title'>top words remaining</div>
            <Bar
                data={state}
                plugins={ChartDataLabels}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    indexAxis: 'y',
                    scales: {
                        y: {
                            stacked: false,
                            reverse: true,
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
                    plugins: {
                        datalabels: {
                            anchor: 'center',
                            color: 'black',
                            font: {
                                size: '14px',
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
