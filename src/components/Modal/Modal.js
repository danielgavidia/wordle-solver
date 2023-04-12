import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import './Modal.css';
import wordle01 from './wordlesolver01.png';
import wordle02 from './wordlesolver02.png';
import wordle03 from './wordlesolver03.png';

export default function Modal({ modal, setModal }) {

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    const modalRender = () => {
        if (modal === true) {
            return (
                <div className='modal'>
                    <div className='overlay' onClick={toggleModal}>
                        <div className='modal-content'>
                            <p>
                                <div style={{ fontSize: '24px' }}>Instructions</div>
                                <br />
                                <div >Step 1</div>
                                <div className='modal-content-subtitle'>Input letters into interface</div>
                                <div className='modal-content-subtitle'>and click on letters to change status.</div>
                                <img src={wordle01} alt='wordle01' />
                                <br />
                                <br />
                                Step 2
                                <br />
                                <div className='modal-content-subtitle'>Check remaining words.</div>
                                <div className='modal-content-subtitle'>Words are ranked based on commonality of letters.</div>
                                <img src={wordle02} alt='wordle02' />
                                <br />
                                <br />
                                Step 3
                                <br />
                                <div className='modal-content-subtitle'>If number of remaining words is too high</div>
                                <div className='modal-content-subtitle'>consider selecting one of the suggested words.</div>
                                <br />
                                <img src={wordle03} alt='wordle03' />
                                <br />
                                <br />
                                Step 4
                                <br />
                                <div className='modal-content-subtitle'>Enjoy hacking Wordle!</div>
                            </p>
                            <button className='close-modal' onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <>
            <button className='nav-bar-info' onClick={() => toggleModal()}>
                <InfoIcon style={{ color: 'white', transform: 'scale(1.5)' }} />
            </button>
            <div>
                {modalRender()}
            </div>

        </>
    );
}
