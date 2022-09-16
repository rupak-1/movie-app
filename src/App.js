import React, { useState, useEffect } from 'react';
import './App.css'
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovieRequest();
  }, [])
  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=35a44ca3"

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search);
  }

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
