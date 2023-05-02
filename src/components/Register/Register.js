import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Register = () => {

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
                    // onChange={handleEmail}
                    // value={email}
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
                    // onChange={handlePassword}
                    // value={password}
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
                    // onChange={handlePassword}
                    // value={password}
                    name="password"
                    type="password"
                    placeholder="Придумайте и введите пароль"
                    minLength="2"
                    maxLength="30"
                    title="Придумайте и введите пароль"
                    required
                />
                <span className="auth__input-error auth__input-error_none">Что-то пошло не так...</span>

                <Link to="/movies"> <button className="auth__save">Зарегистрироваться</button></Link>

                <footer className="auth__footer" >
                    <p className="auth__question-link">Уже зарегистрированы?</p>
                    <Link to="/signin" className="auth__signup-link">Войти</Link>
                </footer>

            </form>
        </main>
    );
};

export default Register;