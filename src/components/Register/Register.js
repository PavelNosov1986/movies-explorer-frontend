import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { register } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    function handleSubmit(evt) {
        evt.preventDefault();
        register({ name, email, password })
            .then(() => {
                navigate("/signin");
            })
            .catch((err) => {
                if (err.status === 400) {
                    console.log("400 - не передано одно из полей ");
                }

            });
    }

    function handleName(evt) {
        setName(evt.target.value);
    }

    function handleEmail(evt) {
        setEmail(evt.target.value);
    }

    function handlePassword(evt) {
        setPassword(evt.target.value);
    }


    return (
        <main className="auth">

            <header className='auth__header'>
                <Logo />
                <h2 className='auth__welcome'>Добро пожаловать!</h2>
            </header>


            <form className="auth__form" >

                <h3 className="auth__hint">Имя</h3>
                <input
                    className="auth__input"
                    onChange={handleName}
                    value={name}
                    name="name"
                    type="name"
                    placeholder="Введите имя пользователя"
                    minLength="2"
                    maxLength="200"
                    title="Введите имя пользователя"
                    required
                />
                <span className="auth__input-error auth__input-error_none">Что-то пошло не так...</span>

                <h3 className="auth__hint">E-mail</h3>
                <input
                    className="auth__input"
                    onChange={handleEmail}
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Введите E-mail"
                    minLength="2"
                    maxLength="30"
                    title="Введите адрес электронной почты"
                    required
                />
                <span className="auth__input-error auth__input-error_none">Что-то пошло не так...</span>

                <h3 className="auth__hint">Пароль</h3>
                <input
                    className="auth__input"
                    onChange={handlePassword}
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Придумайте и введите пароль"
                    minLength="2"
                    maxLength="30"
                    title="Придумайте и введите пароль"
                    required
                />
                <span className="auth__input-error auth__input-error_none">Что-то пошло не так...</span>

                <Link to="/movies"> <button className="auth__save" onClick={handleSubmit}>Зарегистрироваться</button></Link>

                <footer className="auth__footer" >
                    <p className="auth__question-link">Уже зарегистрированы?</p>
                    <Link to="/signin" className="auth__signup-link">Войти</Link>
                </footer>

            </form>
        </main>
    );
};

export default Register;