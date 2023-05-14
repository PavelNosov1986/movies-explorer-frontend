import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { login } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    function handleEmail(evt) {
        setEmail(evt.target.value);
    }
    function handlePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!email || !password) {
            return;
        }

        login({ email, password })
            .then((res) => {
                if (res.token) {
                    localStorage.setItem("JWT_SECRET", res.token);
                    navigate("/movies");
                }
            })
            .catch((err) => {
                if (err.status === 400) {
                    console.log("400 - не передано одно из полей");
                } else if (err.status === 401) {
                    console.log("401 - пользователь c email не найден ");
                }
            });
    }


    return (
        <main className="auth">

            <header className='auth__header'>
                <Logo />
                <h2 className='auth__welcome'>Рады видеть!</h2>
            </header>

            <form className="auth__form" >
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

                <button onClick={handleSubmit} className="auth__save auth__save_login">Войти</button>

                <footer className="auth__footer" >
                    <p className="auth__question-link">Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="auth__signup-link">Регистрация</Link>
                </footer>

            </form>
        </main>
    );
};

export default Login;