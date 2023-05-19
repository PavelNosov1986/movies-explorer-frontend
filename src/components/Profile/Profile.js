import React, { useState, useEffect } from 'react';
import './Profile.css'
import HeaderProfile from '../widgets/HeaderProfile/HeaderProfile'
import { Link } from 'react-router-dom';
import { getMeApi, updateUserApi } from '../../utils/MainApi';
import Modal from '../widgets/Modal/Modal';


const Profile = ({ isLoggedIn }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [nameCurrent, setNameCurrent] = useState();
    const [emailCurrent, setEmailCurrent] = useState();
    const [isButton, setIsButton] = useState(false);
    const [isModal, setModal] = useState(false);


    useEffect(() => {
        getMeApi().then((response) => {
            setEmail(response.email)
            setName(response.name)
            setEmailCurrent(response.email)
            setNameCurrent(response.name)
        })
    }, []);

    useEffect(() => {
        if (email === '' || name === '') {
            setIsButton(false)
        }
        else if (name === nameCurrent && email === emailCurrent) { setIsButton(false) }
        else
            setIsButton(true)
    }, [name, email]);


    function handleEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleName(evt) {
        setName(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        updateUserApi({ name: name, email: email }).then((response) => {
            setEmail(response.email)
            setName(response.name)
            setModal(true)
            setIsButton(false)
        })
    }

    function exitAuth() {
        localStorage.clear();
        isLoggedIn()
    }

    return (
        <>
            <Modal
                isVisible={isModal}
                title="Изменения сохранены!"
                onClose={() => setModal(false)}
            />

            <div className='headerProfile_profile'>
                <HeaderProfile />
            </div>
            <main className="auth auth_profile">
                <h2 className='auth__welcome'>Привет, {name}!</h2>

                <form className="auth__form auth__form_profile" onSubmit={handleSubmit}  >

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

                    </div>
                 

                    <button disabled={!isButton} className={`${isButton ? 'auth__save_profile-active'
                        : 'auth__save_profile-inactive'}`}>Редактировать</button>

                    <footer className="auth__footer" >
                        <Link to="/" className="auth__signup-link auth__signup-link_profile" onClick={exitAuth}>Выйти из аккаунта</Link>
                    </footer>

                </form>
            </main>

        </>
    );
};

export default Profile;