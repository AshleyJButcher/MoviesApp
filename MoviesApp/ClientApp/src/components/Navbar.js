import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MovieContext } from './context/MovieContext';

const Navbar = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <nav className="navbar bg-primary" style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}>
            <h1 style={{ color: "#ffffff" }}>
                Total Movies : {movies.length}
            </h1>
            <ul>
                <li>
                    <Link to='' style={{ textDecoration: 'none' }}>Home</Link>
                </li>
                <li>
                    <Link to='' style={{ textDecoration: 'none' }}>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
