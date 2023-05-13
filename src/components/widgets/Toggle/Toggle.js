import React from 'react';
import './Toggle.css'
import { useState } from 'react';

const Toggle = ({value, onChange}) => {
    //const [isShortFilm, setIsShortFilm] = useState(false)

    function handleChange() {
        //setIsShortFilm(!isShortFilm);
        //localStorage.setItem('toggle', isShortFilm)
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