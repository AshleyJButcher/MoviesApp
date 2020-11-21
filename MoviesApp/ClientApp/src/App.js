import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { MovieProvider } from './components/context/MovieContext';

function App() {
    return (

        <Router>
            <MovieProvider>
                <div className="App">
                    <Navbar />
                    <AddMovie />
                    <MovieList />

                </div>
            </MovieProvider>

        </Router>

    );
}

export default App;
