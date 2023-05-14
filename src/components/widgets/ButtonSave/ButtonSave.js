import React, { useState } from 'react';
import save from '../../../images/save.svg'
import saveDelete from '../../../images/saveDelete.svg'
 
const ButtonSave = ({isSaved, handleMovieLike}) => {

    //const [btnSave, setBtnSave] = useState(false);

    function handleClick() {
        //setBtnSave(!btnSave);
        handleMovieLike();
        // handleMovieLikeDelete();        
    }

    return (
        <>
            <button className="card-movie__save-btn" onClick={handleClick}><img className="card-movie__save-img"
                src={isSaved ? save : saveDelete} alt="Сохранить" /></button>
        </>
    );
};

export default ButtonSave;