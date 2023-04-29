import React from 'react';
import './Toggle.css'

const Toggle = () => {
    return (
        <main className='toggle'>
                       <label className="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
        </main>
    );
};

export default Toggle;