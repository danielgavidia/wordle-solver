import React from 'react';
import AnimatedNumbers from 'react-animated-numbers';

export default function WordCount({ jsonData, modal }) {

    const animated = () => {
        if (modal === false) {
            return (
                <AnimatedNumbers
                    includeComma
                    animateToNumber={jsonData.length}
                />
            );
        }
    };

    return (
        <div className='animated-numbers'>
            <div className='animated-numbers-title' style={{ fontSize: '16px' }}>words remaining</div>
            {animated()}
        </div>
    );
}
