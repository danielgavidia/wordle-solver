import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function AnimatedNumber({ jsonData }) {

    const { number } = useSpring({
        from: { number: 0 },
        number: jsonData.length,
        delay: 0,
        config: { mass: 0.1, tension: 100, friction: 10 }
    });

    return (
        <div className='animated-numbers'>
            <div className='animated-numbers-title' style={{ fontSize: '16px' }}>words remaining</div>
            <animated.div style={{ marginTop: '10%' }}>{number.to((n) => n.toFixed(0))}</animated.div>
        </div>
    );
}
