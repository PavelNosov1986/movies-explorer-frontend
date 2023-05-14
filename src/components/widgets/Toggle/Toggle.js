import React from 'react';
import './Toggle.css'

const Toggle = ({ value, onChange }) => {

    function handleChange() {
        onChange()
    }

    return (
        <main className='toggle'>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={value} />
                <span className="slider round"></span>
            </label>
        </main>
    );
};

export default Toggle;