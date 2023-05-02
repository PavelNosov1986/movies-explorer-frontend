import React from 'react';
import './ButtonDelete.css'
import deleteBtn from '../../../images/delete-btn.svg'

const ButtonDelete = () => {
    return (
        <>
            <button className="card-movie__save-btn" ><img className="card-movie__save-img"
                src={deleteBtn} alt="Сохранить" /></button>
        </>
    );
};

export default ButtonDelete;