import data from './data.json';
import React from 'react';

export default function JsonLoader() {

    const wordArray = [];
    for (var i in data) {
        wordArray.push([data[i]]);
    }

    const listItems = wordArray.map((word) => <div className='word'>{word}</div>);

    return (
        <div className='wordArray'>{listItems.slice(1, 10)}</div>
    );
}
