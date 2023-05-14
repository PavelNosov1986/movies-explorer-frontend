import React from 'react';
import deleteBtn from '../../../images/delete-btn.svg'

const ButtonDelete = ({onDelete}) => {
    return (
        <>
            <button className="card-movie__save-btn" onClick={onDelete} ><img className="card-movie__save-img"
                src={deleteBtn} alt="Сохранить" /></button>
        </>
    );
};

export default ButtonDelete;