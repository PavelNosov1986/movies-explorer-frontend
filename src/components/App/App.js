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
import ProtectedRoute from '../ProtectedRoute/ProtecterRoute';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
            <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}/>}>
              <Route path='/movies' element={<Movies />} />
              <Route path='/profile' element={<Profile isLoggedIn={isLoggedIn} />} />
              <Route path='/saved-movies' element={<SavedMovies />} />
            </Route>
            <Route path='/signup' element={<Register setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/signin' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
