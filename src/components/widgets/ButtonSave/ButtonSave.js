import React, { useState } from 'react';
import save from '../../../images/save.svg'
import saveDelete from '../../../images/saveDelete.svg'
 
const ButtonSave = () => {

    const [btnSave, setBtnSave] = useState(false);

    function handleClick() {
        setBtnSave(!btnSave);
    }

    return (
        <>
            <button className="card-movie__save-btn" onClick={handleClick}><img className="card-movie__save-img"
                src={btnSave ? save : saveDelete} alt="Сохранить" /></button>
        </>
    );
};

export default ButtonSave;