import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'


const MovieList = ({ movies, inputSearch,handleAdd, rating}) => {
  return (
    <div className="movieList">
      {movies
        // .filter(movie =>
        //   movie.title.toUpperCase().includes(inputSearch.toUpperCase())
        //   &&
        //   movie.rating >= rating
        // )
        .map(movie =>
          <MovieCard movie={movie} key={movie.id} />
        )}
      <MovieCard className="addMovieBtn" addCard={true} handleAdd={handleAdd} />
    </div>

  )
}

export default MovieList
