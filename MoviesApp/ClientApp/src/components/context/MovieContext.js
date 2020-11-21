import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Lord of War',
            year: '2005',
            id: 1
        },
        {
            name: 'Iron Man',
            year: '2008',
            id: 2
        },
        {
            name: 'Avengers: End game',
            year: '2009',
            id: 3
        }
    ]);

    return (
        <MovieContext.Provider
            value={[movies, setMovies]}
        >
            {props.children}
        </MovieContext.Provider>

    );
}

