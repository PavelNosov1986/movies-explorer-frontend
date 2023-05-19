const BASE_URL_MAIN = "https://api.movies.nosovpavel.nomoredomains.work";

function checkRes(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};


export const registerMain = ({
    name,
    email,
    password
}) => {
    return fetch(`${BASE_URL_MAIN}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        }),
    })
        .then(checkRes)
};

export const login = ({
    email,
    password
}) => {
    return fetch(`${BASE_URL_MAIN}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    })
        .then(checkRes)
};



export const getToken = (token) => {
    return fetch(`${BASE_URL_MAIN}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then(checkRes);
};


export const saveMovieApi = (movie) =>
    fetch(`${BASE_URL_MAIN}/movies`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${localStorage.getItem('JWT_SECRET')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    })
        .then(async (response) => {
            console.log(movie)
            let data = await response.json();
            return data
        })
        .catch((error) => {
            console.error(error);
        });
        

export const getSavedMoviesApi = () =>
    fetch(`${BASE_URL_MAIN}/movies`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('JWT_SECRET')}`,
            'Content-Type': 'application/json',
        },

    })
        .then(async (response) => {

            let data = await response.json();
            return data
        })
        .catch((error) => {
            console.error(error);
        });

export const deleteSavedMoviesApi = (id) =>
    fetch(`${BASE_URL_MAIN}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('JWT_SECRET')}`,
            'Content-Type': 'application/json',
        },
    })
        .then(async (response) => {
            let data = await response.json();
            return data
        })
        .catch((error) => {
            console.error(error);
        });

export const getMeApi = () =>
    fetch(`${BASE_URL_MAIN}/users/me`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('JWT_SECRET')}`,
            'Content-Type': 'application/json',
        },
    })
        .then(async (response) => {
            let data = await response.json();
            return data
        })
        .catch((error) => {
            console.error(error);
        });

export const updateUserApi = (data) =>
    fetch(`${BASE_URL_MAIN}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: `Bearer ${localStorage.getItem('JWT_SECRET')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(async (response) => {
            let data = await response.json();
            return data
        })
        .catch((error) => {
            console.error(error);
        });
