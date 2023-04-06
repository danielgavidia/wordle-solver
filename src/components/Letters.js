import React from 'react';

export default function Letters({ array, changeColor }) {
    return (
        <div className='interface2'>
            {array.map(i => {
                return <button className={i.color} onClick={() => changeColor(i.id)}>{i.letter}</button>;
            })}
        </div>
    );
}
