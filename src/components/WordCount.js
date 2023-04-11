import React from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import data from './data.json';

export default function WordCount({ jsonData }) {
    return (
        <div className='animated-numbers'>
            <AnimatedNumbers
                animateToNumber={jsonData.length}
            />
            <br />
            words remaining
        </div>
    );
}
