import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='notFound'>
      <h2 className='notFound__title'>404</h2>
      <p className='notFound__description'>Страница не найдена</p>
      <Link to='/' className='auth__signup-link auth__signup-link_error'> Назад </Link>
    </main>
  );
};

export default NotFound;