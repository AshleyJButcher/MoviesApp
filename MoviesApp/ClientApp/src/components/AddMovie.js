import React, { useState, useContext } from 'react';
import { MovieContext } from './context/MovieContext';


const AddMovie = () => {

    const [name, setName] = useState('');
    const [year, setyear] = useState('');
    const [movies, setMovies] = useContext(MovieContext);


    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateYear = (e) => {
        setyear(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(oldMovies =>
            [...oldMovies, { name: name, year: year }]
        )

    }

    return (
        <div className="container">
            <form onSubmit={addMovie}>
                <input type="text" name="name" value={name} onChange={updateName} placeholder="Movie Name..." />
                <input type="text" name="year" value={year} onChange={updateYear} placeholder="Year..." />
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
        </div>

    );
}

export default AddMovie;