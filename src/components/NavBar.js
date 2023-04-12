import React from 'react';
import Modal from './Modal/Modal';

export default function NavBar({ modal, setModal }) {
    return (
        <div className='nav-bar'>
            <div className='nav-bar-title'>
                Wordle Solver
            </div>
            <Modal modal={modal} setModal={setModal} />
        </div>
    );
}
