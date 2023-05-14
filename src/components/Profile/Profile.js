import React, { useState, useEffect } from 'react';
import './Profile.css'
import HeaderProfile from '../widgets/HeaderProfile/HeaderProfile'
import { Link } from 'react-router-dom';
import { getMeApi, updateUserApi } from '../../utils/MainApi';


const Profile = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        getMeApi().then((response) => {
            setEmail(response.email)
            setName(response.name)
        })
    }, []);


    function handleEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleName(evt) {
        setName(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        updateUserApi({name: name, email: email}).then((response)=>{
            setEmail(response.email)
            setName(response.name)
        })
    }

    return (
        <>
            <div className='headerProfile_profile'>
                <HeaderProfile />
            </div>
            <main className="auth auth_profile">
                <h2 className='auth__welcome'>Привет, {name}!</h2>

                <form className="auth__form auth__form_profile" onSubmit={handleSubmit} >

                    <div className='profile__input-container'>
                        <h3 className="auth__hint auth__hint_profile">Имя</h3>
                        <input
                            className="auth__input auth__input_profile"
                            onChange={handleName}
                            defaultValue={name}
                            name="name"
                            type="name"
                            placeholder="Введите имя пользователя"
                            minLength="2"
                            maxLength="200"
                            title="Введите имя пользователя"
                            required
                        />
                        <span className="auth__input-error auth__input-error_none">Что-то пошло не так...</span>
                    </div>

                    <div className='profile__input-container'>
                        <h3 className="auth__hint auth__hint_profile">E-mail</h3>
                        <input
                            className="auth__input auth__input_profile"
                            onChange={handleEmail}
                            defaultValue={email}
                            name="email"
                            type="email"
                            placeholder="Введите E-mail"
                            minLength="2"
                            maxLength="30"
                            title="Введите адрес электронной почты"
                            required
                        />
                        <span className="auth__input-error auth__input-error_none">Что-то пошло не так...</span>
                    </div>

                    <button className="auth__save auth__save_profile">Редактировать</button>

                    <footer className="auth__footer" >
                        <Link to="/" className="auth__signup-link auth__signup-link_profile">Выйти из аккаунта</Link>
                    </footer>

                </form>
            </main>

        </>
    );
};

export default Profile;