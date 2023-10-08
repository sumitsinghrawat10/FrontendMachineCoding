import React, { useState } from 'react';
import './index.css';
import ReusableModal from './component/ReusableModal';

const Contact = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='box'>
            <h1>Custom Modal</h1>
            <button onClick={() => setOpen(true)}>Show Modal</button>
            {open && (
                <ReusableModal setOpen={() => setOpen(false)}>
                    <h2>i am contact</h2>
                    <p>we are here</p>
                </ReusableModal>
            )}
        </div>
    );
};

export default Contact;
