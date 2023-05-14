import React, { useState } from 'react';
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
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/signin' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
