import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Register from '../Register/Register';
import './App.css';
import NotFound from '../NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';


function App() {
  const [currentUser, setCurrentUser] = useState({});


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/signup' element={<Register />} />
            <Route exact path='/signin' element={<Login />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/movies' element={<Movies />} />
            <Route exact path='/saved-movies' element={<SavedMovies />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CurrentUserContext.Provider>
  );

}

export default App;
